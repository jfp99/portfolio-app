import { z } from 'zod'

const envSchema = z.object({
  // Site Configuration - optional with defaults for dev
  NEXT_PUBLIC_SITE_URL: z
    .string()
    .url()
    .default('http://localhost:3000'),
  NEXT_PUBLIC_SITE_NAME: z
    .string()
    .min(1)
    .default('Jean-Francois Pruvost Portfolio'),

  // MongoDB (optional for contact form)
  MONGODB_URI: z.string().optional(),
  MONGODB_DB: z.string().optional(),

  // Email Service (Resend)
  RESEND_API_KEY: z.string().optional(),
  EMAIL_FROM: z.string().email().optional(),
  EMAIL_TO: z.string().email().optional(),

  // Environment
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
})

// Parse and validate environment variables
const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  if (process.env.NODE_ENV === 'production') {
    console.error('❌ Invalid environment variables in production:')
    console.error(JSON.stringify(parsedEnv.error.format(), null, 2))
    throw new Error('Invalid environment variables - Check your deployment configuration')
  } else {
    console.warn('⚠️ Some environment variables are missing (using defaults):')
    console.warn(
      parsedEnv.error.issues.map((i) => `  - ${i.path.join('.')}`).join('\n')
    )
  }
}

// Use parsed data or defaults
export const env = parsedEnv.success ? parsedEnv.data : envSchema.parse({})
