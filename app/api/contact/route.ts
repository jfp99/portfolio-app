import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validation'
import { sanitizeString } from '@/lib/utils'

// Simple in-memory rate limiting (for production, use Redis or Vercel KV)
const rateLimit = new Map<string, { count: number; resetTime: number }>()

const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour
const MAX_REQUESTS = 3

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimit.get(ip)

  if (!record || now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (record.count >= MAX_REQUESTS) {
    return false
  }

  record.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting - get IP from headers
    const ip = request.headers.get('x-forwarded-for') ||
              request.headers.get('x-real-ip') ||
              'anonymous'

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in an hour.' },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validationResult = contactFormSchema.safeParse(body)

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: 'Invalid input',
          details: validationResult.error.issues.map((issue) => ({
            field: issue.path[0],
            message: issue.message,
          })),
        },
        { status: 400 }
      )
    }

    const { name, email, subject, message, honeypot } = validationResult.data

    // Honeypot check (bot trap)
    if (honeypot) {
      // Fake success to confuse bots
      console.warn('[SECURITY] Honeypot triggered:', { ip, email })
      return NextResponse.json({ success: true })
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeString(name),
      email: email.toLowerCase().trim(),
      subject: sanitizeString(subject),
      message: sanitizeString(message),
    }

    // TODO: Send email using your preferred service
    // For now, just log the message
    console.log('[CONTACT FORM] New submission:', {
      ...sanitizedData,
      ip,
      timestamp: new Date().toISOString(),
    })

    // Example: SendGrid
    // await sendEmail({
    //   to: process.env.EMAIL_TO!,
    //   from: process.env.EMAIL_FROM!,
    //   subject: `Portfolio Contact: ${sanitizedData.subject}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${sanitizedData.name}</p>
    //     <p><strong>Email:</strong> ${sanitizedData.email}</p>
    //     <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${sanitizedData.message.replace(/\n/g, '<br>')}</p>
    //   `
    // })

    // Example: Resend
    // const { data, error } = await resend.emails.send({
    //   from: process.env.EMAIL_FROM!,
    //   to: process.env.EMAIL_TO!,
    //   subject: `Portfolio Contact: ${sanitizedData.subject}`,
    //   html: `...`
    // })

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully! You will receive a response soon.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[API] POST /api/contact error:', error)

    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
