import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import { checkRateLimit, getClientIp, getRateLimitHeaders } from "@/lib/ratelimit";
import { sanitizeString, sanitizeEmail } from "@/lib/utils";
import { z } from "zod";

/**
 * POST /api/contact
 *
 * Handles contact form submissions with security measures:
 * - Rate limiting (3 requests per hour per IP)
 * - Input validation (Zod schema)
 * - Input sanitization (XSS prevention)
 * - Honeypot bot trap
 *
 * Returns:
 * - 200: Success
 * - 400: Validation error
 * - 429: Rate limited
 * - 500: Server error
 */
export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const clientIp = getClientIp(request);

    // Check rate limit (3 requests per hour for contact form)
    const rateLimitResult = checkRateLimit(clientIp, 'contact');

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          error: "Too many requests. Please try again later.",
          retryAfter: Math.ceil(rateLimitResult.resetIn / 1000),
        },
        {
          status: 429,
          headers: getRateLimitHeaders(rateLimitResult),
        }
      );
    }

    // Parse request body
    const body = await request.json();

    // Validate input with Zod schema
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Invalid form data",
          details: validationResult.error.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
          })),
        },
        {
          status: 400,
          headers: getRateLimitHeaders(rateLimitResult),
        }
      );
    }

    const { name, email, subject, message, honeypot, company, phone } = validationResult.data;

    // Honeypot check - if filled, it's likely a bot
    // Return fake success to confuse bots
    if (honeypot && honeypot.length > 0) {
      // Log suspicious activity (but don't reveal to sender)
      console.warn(`[SECURITY] Bot detected from IP: ${clientIp}`);

      // Return fake success
      return NextResponse.json(
        { message: "Message sent successfully" },
        {
          status: 200,
          headers: getRateLimitHeaders(rateLimitResult),
        }
      );
    }

    // Sanitize all inputs for extra protection
    const sanitizedData = {
      name: sanitizeString(name),
      email: sanitizeEmail(email),
      subject: sanitizeString(subject),
      message: sanitizeString(message),
      company: company ? sanitizeString(company) : undefined,
      phone: phone ? sanitizeString(phone) : undefined,
    };

    // Log in development mode
    if (process.env.NODE_ENV === "development") {
      console.log("[DEV] Contact form submission:", {
        ...sanitizedData,
        ip: clientIp,
        timestamp: new Date().toISOString(),
      });
    }

    // In production, send email via Resend or similar service
    if (process.env.NODE_ENV === "production" && process.env.RESEND_API_KEY) {
      try {
        // Dynamic import to avoid bundling in development
        const { Resend } = await import("resend");
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
          from: process.env.EMAIL_FROM || "noreply@epnr.dev",
          to: process.env.EMAIL_TO || "contact@epnr.dev",
          replyTo: sanitizedData.email,
          subject: `[EPNR] ${sanitizedData.subject}`,
          html: generateEmailHtml(sanitizedData),
          text: generateEmailText(sanitizedData),
        });
      } catch (emailError) {
        console.error("[ERROR] Failed to send email:", emailError);
        // Don't expose email errors to client
        throw new Error("Email service unavailable");
      }
    }

    // Success response
    return NextResponse.json(
      {
        message: "Message sent successfully! I'll get back to you soon.",
        success: true,
      },
      {
        status: 200,
        headers: getRateLimitHeaders(rateLimitResult),
      }
    );
  } catch (error) {
    // Log error (in production, send to monitoring service)
    console.error("[ERROR] Contact form error:", error);

    // Don't expose internal errors to client
    const message =
      error instanceof z.ZodError
        ? "Invalid form data"
        : "Failed to send message. Please try again later.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// ============================================
// Email Templates
// ============================================

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string;
  phone?: string;
}

function generateEmailHtml(data: EmailData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #22c55e 0%, #9333ea 100%); padding: 30px; border-radius: 12px 12px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 24px;">New Message from EPNR</h1>
    <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0;">Contact form submission</p>
  </div>

  <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none;">
    <div style="margin-bottom: 20px;">
      <strong style="color: #16a34a;">From:</strong>
      <p style="margin: 4px 0 0 0;">${escapeHtml(data.name)}</p>
    </div>

    <div style="margin-bottom: 20px;">
      <strong style="color: #16a34a;">Email:</strong>
      <p style="margin: 4px 0 0 0;"><a href="mailto:${escapeHtml(data.email)}" style="color: #7c3aed;">${escapeHtml(data.email)}</a></p>
    </div>

    ${data.company ? `
    <div style="margin-bottom: 20px;">
      <strong style="color: #16a34a;">Company:</strong>
      <p style="margin: 4px 0 0 0;">${escapeHtml(data.company)}</p>
    </div>
    ` : ''}

    ${data.phone ? `
    <div style="margin-bottom: 20px;">
      <strong style="color: #16a34a;">Phone:</strong>
      <p style="margin: 4px 0 0 0;">${escapeHtml(data.phone)}</p>
    </div>
    ` : ''}

    <div style="margin-bottom: 20px;">
      <strong style="color: #16a34a;">Subject:</strong>
      <p style="margin: 4px 0 0 0;">${escapeHtml(data.subject)}</p>
    </div>

    <div style="margin-bottom: 20px;">
      <strong style="color: #16a34a;">Message:</strong>
      <div style="background: white; padding: 16px; border-radius: 8px; margin-top: 8px; border: 1px solid #e2e8f0;">
        <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
      </div>
    </div>
  </div>

  <div style="background: #0f172a; padding: 20px; border-radius: 0 0 12px 12px; text-align: center;">
    <p style="color: #94a3b8; margin: 0; font-size: 14px;">
      Sent from <a href="https://epnr.dev" style="color: #22c55e; text-decoration: none;">epnr.dev</a>
    </p>
  </div>
</body>
</html>
  `.trim();
}

function generateEmailText(data: EmailData): string {
  let text = `
New Contact Form Submission - EPNR
========================================

From: ${data.name}
Email: ${data.email}
`;

  if (data.company) {
    text += `Company: ${data.company}\n`;
  }

  if (data.phone) {
    text += `Phone: ${data.phone}\n`;
  }

  text += `
Subject: ${data.subject}

Message:
----------------------------------------
${data.message}
----------------------------------------

Sent from epnr.dev
  `.trim();

  return text;
}

function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
  };
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char] || char);
}
