import { z } from 'zod'

/**
 * Contact form validation schema
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name contains invalid characters'),

  email: z
    .string()
    .email('Invalid email address')
    .max(254, 'Email is too long'),

  subject: z
    .string()
    .min(5, 'Subject must be at least 5 characters')
    .max(200, 'Subject must be less than 200 characters'),

  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(10000, 'Message must be less than 10,000 characters'),

  honeypot: z.string().max(0), // Bot trap - must be empty
})

export type ContactFormData = z.infer<typeof contactFormSchema>
