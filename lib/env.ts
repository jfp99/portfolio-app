import { z } from 'zod'

const envSchema = z.object({
  // Site Configuration
  NEXT_PUBLIC_SITE_URL: z.string().url(),
  NEXT_PUBLIC_SITE_NAME: z.string().min(1),

  // MongoDB (optional for contact form)
  MONGODB_URI: z.string().optional(),
  MONGODB_DB: z.string().optional(),

  // Email Service
  EMAIL_FROM: z.string().email().optional(),
  EMAIL_TO: z.string().email().optional(),
  EMAIL_API_KEY: z.string().optional(),

  // Environment
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
})

// Parse and validate environment variables
const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error('❌ Invalid environment variables:')
  console.error(JSON.stringify(parsedEnv.error.format(), null, 2))
  throw new Error('Invalid environment variables')
}

export const env = parsedEnv.data
