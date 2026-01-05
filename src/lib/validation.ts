/**
 * Validation Schemas for EPNR Portfolio
 *
 * Uses Zod for runtime type validation with TypeScript inference.
 * All user inputs should be validated through these schemas.
 */

import { z } from 'zod';

// ============================================
// Contact Form Validation
// ============================================

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(
      /^[a-zA-ZÀ-ÿ\s'-]+$/,
      'Name can only contain letters, spaces, hyphens, and apostrophes'
    )
    .transform((val) => val.trim()),

  email: z
    .string()
    .email('Please enter a valid email address')
    .max(254, 'Email is too long')
    .transform((val) => val.toLowerCase().trim()),

  subject: z
    .string()
    .min(5, 'Subject must be at least 5 characters')
    .max(200, 'Subject must be less than 200 characters')
    .transform((val) => val.trim()),

  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(10000, 'Message must be less than 10,000 characters')
    .transform((val) => val.trim()),

  // Honeypot field - should always be empty (bot trap)
  honeypot: z
    .string()
    .max(0, 'Invalid submission')
    .optional()
    .default(''),

  // Optional company field
  company: z
    .string()
    .max(200, 'Company name is too long')
    .optional()
    .transform((val) => val?.trim()),

  // Optional phone field
  phone: z
    .string()
    .regex(
      /^[\d\s+()-]*$/,
      'Phone number contains invalid characters'
    )
    .max(30, 'Phone number is too long')
    .optional()
    .transform((val) => val?.trim()),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// ============================================
// Newsletter Subscription
// ============================================

export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(254, 'Email is too long')
    .transform((val) => val.toLowerCase().trim()),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;

// ============================================
// Project Inquiry Form
// ============================================

export const projectInquirySchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .transform((val) => val.trim()),

  email: z
    .string()
    .email('Please enter a valid email address')
    .transform((val) => val.toLowerCase().trim()),

  company: z
    .string()
    .max(200, 'Company name is too long')
    .optional()
    .transform((val) => val?.trim()),

  budget: z.enum(['under-5k', '5k-10k', '10k-25k', '25k-50k', '50k-plus', 'not-sure'], {
    message: 'Please select a budget range',
  }),

  timeline: z.enum(['asap', '1-month', '2-3-months', '3-6-months', 'flexible'], {
    message: 'Please select a timeline',
  }),

  projectType: z.enum(['mcp-server', 'automation', 'web-app', 'consulting', 'other'], {
    message: 'Please select a project type',
  }),

  description: z
    .string()
    .min(50, 'Please provide more details about your project (at least 50 characters)')
    .max(5000, 'Description must be less than 5,000 characters')
    .transform((val) => val.trim()),

  honeypot: z
    .string()
    .max(0)
    .optional()
    .default(''),
});

export type ProjectInquiryData = z.infer<typeof projectInquirySchema>;

// ============================================
// Booking Form
// ============================================

export const bookingSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .transform((val) => val.trim()),

  email: z
    .string()
    .email('Please enter a valid email address')
    .transform((val) => val.toLowerCase().trim()),

  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format')
    .refine((val) => {
      const date = new Date(val);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date >= today;
    }, 'Please select a future date'),

  time: z
    .string()
    .regex(/^\d{2}:\d{2}$/, 'Invalid time format'),

  duration: z.enum(['30', '60', '90'], {
    message: 'Please select a duration',
  }),

  topic: z
    .string()
    .min(10, 'Please provide more details about the meeting topic')
    .max(500, 'Topic description is too long')
    .transform((val) => val.trim()),

  timezone: z
    .string()
    .max(100, 'Invalid timezone')
    .optional(),

  honeypot: z
    .string()
    .max(0)
    .optional()
    .default(''),
});

export type BookingData = z.infer<typeof bookingSchema>;

// ============================================
// Search Query
// ============================================

export const searchQuerySchema = z.object({
  query: z
    .string()
    .min(1, 'Search query cannot be empty')
    .max(200, 'Search query is too long')
    .transform((val) => val.trim()),

  category: z
    .enum(['all', 'projects', 'blog', 'services'])
    .optional()
    .default('all'),

  page: z
    .number()
    .int()
    .positive()
    .optional()
    .default(1),

  limit: z
    .number()
    .int()
    .min(1)
    .max(50)
    .optional()
    .default(10),
});

export type SearchQuery = z.infer<typeof searchQuerySchema>;

// ============================================
// Environment Variables Validation
// ============================================

export const envSchema = z.object({
  // Site
  NEXT_PUBLIC_SITE_URL: z
    .string()
    .url()
    .default('http://localhost:3000'),

  NEXT_PUBLIC_SITE_NAME: z
    .string()
    .default('EPNR - Automation Studio'),

  // Email (optional in development)
  RESEND_API_KEY: z.string().optional(),
  EMAIL_FROM: z.string().email().optional(),
  EMAIL_TO: z.string().email().optional(),

  // Database (optional)
  MONGODB_URI: z.string().optional(),
  MONGODB_DB: z.string().optional(),

  // Analytics (optional)
  NEXT_PUBLIC_GA_ID: z.string().optional(),

  // Environment
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
});

export type EnvConfig = z.infer<typeof envSchema>;

// Parse and validate environment variables
export function getEnvConfig(): EnvConfig {
  return envSchema.parse(process.env);
}
