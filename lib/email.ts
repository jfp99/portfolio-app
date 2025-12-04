import { Resend } from 'resend'
import { env } from './env'

// Initialize Resend client
// Note: If RESEND_API_KEY is not set, this will be undefined
const resend = env.RESEND_API_KEY ? new Resend(env.RESEND_API_KEY) : null

interface ContactEmailData {
  name: string
  email: string
  subject: string
  message: string
}

/**
 * Send a contact form email using Resend
 * @param data - Contact form data
 * @returns Success status and message ID or error
 */
export async function sendContactEmail(data: ContactEmailData) {
  // Check if email service is configured
  if (!resend) {
    console.warn('⚠️ Email service not configured. Set RESEND_API_KEY to send emails.')
    console.log('📧 Contact form submission (not sent):', data)
    return {
      success: false,
      error: 'Email service not configured',
      isDevelopment: true
    }
  }

  if (!env.EMAIL_FROM || !env.EMAIL_TO) {
    console.error('❌ EMAIL_FROM or EMAIL_TO not configured')
    return {
      success: false,
      error: 'Email addresses not configured'
    }
  }

  try {
    const emailHtml = generateContactEmailHTML(data)
    const emailText = generateContactEmailText(data)

    const response = await resend.emails.send({
      from: env.EMAIL_FROM,
      to: env.EMAIL_TO,
      subject: `Portfolio Contact: ${data.subject}`,
      html: emailHtml,
      text: emailText,
      replyTo: data.email,
      headers: {
        'X-Entity-Ref-ID': `contact-${Date.now()}`,
      }
    })

    if (response.error) {
      console.error('❌ Resend API error:', response.error)
      return {
        success: false,
        error: response.error.message || 'Failed to send email'
      }
    }

    console.log('✅ Contact email sent successfully:', response.data?.id)
    return {
      success: true,
      messageId: response.data?.id
    }
  } catch (error) {
    console.error('❌ Error sending contact email:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    }
  }
}

/**
 * Generate HTML email template for contact form
 */
function generateContactEmailHTML(data: ContactEmailData): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio Contact Form Submission</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
    }
    .container {
      background-color: #ffffff;
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .header {
      border-bottom: 3px solid #8b5cf6;
      padding-bottom: 20px;
      margin-bottom: 30px;
    }
    .header h1 {
      margin: 0;
      color: #8b5cf6;
      font-size: 24px;
    }
    .field {
      margin-bottom: 20px;
    }
    .label {
      font-weight: 600;
      color: #666;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 5px;
    }
    .value {
      color: #333;
      font-size: 16px;
      margin-top: 5px;
    }
    .message-box {
      background-color: #f8f9fa;
      border-left: 4px solid #8b5cf6;
      padding: 15px;
      border-radius: 4px;
      margin-top: 10px;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e5e7eb;
      text-align: center;
      color: #666;
      font-size: 14px;
    }
    .reply-button {
      display: inline-block;
      background-color: #8b5cf6;
      color: white;
      text-decoration: none;
      padding: 12px 24px;
      border-radius: 6px;
      margin-top: 20px;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📬 New Contact Form Submission</h1>
    </div>

    <div class="field">
      <div class="label">From</div>
      <div class="value"><strong>${escapeHtml(data.name)}</strong></div>
    </div>

    <div class="field">
      <div class="label">Email</div>
      <div class="value">
        <a href="mailto:${escapeHtml(data.email)}" style="color: #8b5cf6; text-decoration: none;">
          ${escapeHtml(data.email)}
        </a>
      </div>
    </div>

    <div class="field">
      <div class="label">Subject</div>
      <div class="value">${escapeHtml(data.subject)}</div>
    </div>

    <div class="field">
      <div class="label">Message</div>
      <div class="message-box">${escapeHtml(data.message)}</div>
    </div>

    <div style="text-align: center;">
      <a href="mailto:${escapeHtml(data.email)}" class="reply-button">
        Reply to ${escapeHtml(data.name)}
      </a>
    </div>

    <div class="footer">
      <p>This email was sent from your portfolio contact form.</p>
      <p style="color: #999; font-size: 12px;">
        Sent on ${new Date().toLocaleString('en-US', {
          dateStyle: 'full',
          timeStyle: 'short'
        })}
      </p>
    </div>
  </div>
</body>
</html>
  `.trim()
}

/**
 * Generate plain text email for contact form (fallback)
 */
function generateContactEmailText(data: ContactEmailData): string {
  return `
NEW CONTACT FORM SUBMISSION
===========================

From: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
--------
${data.message}

---
Sent from your portfolio contact form
${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}
  `.trim()
}

/**
 * Escape HTML to prevent XSS in email templates
 */
function escapeHtml(text: string): string {
  const htmlEscapeMap: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }
  return text.replace(/[&<>"']/g, (char) => htmlEscapeMap[char] ?? char)
}

/**
 * Send a test email to verify configuration
 * Use this in development to test your Resend setup
 */
export async function sendTestEmail() {
  return sendContactEmail({
    name: 'Test User',
    email: 'test@example.com',
    subject: 'Test Email from Portfolio',
    message: 'This is a test email to verify the email configuration is working correctly.'
  })
}
