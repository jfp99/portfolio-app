import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  subject: z.enum(["mcp-development", "ai-automation", "consulting", "other"]),
  message: z.string().min(10).max(1000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // TODO: Implement email sending with SendGrid or Resend
    // In development, log the data for debugging
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.log("Contact form submission:", data);
    }

    // In production, you would send an email here:
    // await sendEmail({
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `New contact: ${data.subject}`,
    //   ...
    // });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.issues },
        { status: 400 }
      );
    }

    // Log error in development, send to monitoring service in production
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.error("Contact form error:", error);
    }
    // In production: logErrorToService(error);

    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
