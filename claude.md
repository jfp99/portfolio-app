# CLAUDE.md - S-Tier Portfolio Development Principles

> This file provides comprehensive guidance to Claude Code for building a production-ready portfolio application with professional standards.

---

## 🎯 Core Philosophy

**Build a portfolio that stands out from day one** - Your portfolio is your digital presence. Every pixel, every interaction, every millisecond matters. No shortcuts, no "good enough". Professional quality only.

---

## 📋 Project Checklist

### Pre-Development
- [ ] Define content strategy (projects, about, resume, blog)
- [ ] Create design system (colors, typography, spacing)
- [ ] Set up proper environment variable validation (Zod schemas)
- [ ] Configure ESLint with strict rules (no `any`, no unused vars)
- [ ] Set up TypeScript strict mode
- [ ] Create `.gitignore` with proper exclusions
- [ ] Plan SEO strategy (meta tags, Open Graph, structured data)
- [ ] Configure analytics (privacy-first approach)

### During Development
- [ ] Write types for everything (no `any`)
- [ ] Validate all inputs with Zod (especially contact forms)
- [ ] Sanitize user inputs (XSS prevention on contact forms)
- [ ] Rate limit all API endpoints (especially contact form)
- [ ] Add proper error handling (try-catch, fallbacks)
- [ ] Test responsiveness (mobile, tablet, desktop)
- [ ] Verify accessibility (WCAG AA compliance)
- [ ] Optimize images (WebP, proper sizes, lazy loading)
- [ ] Keep bundle size minimal (code splitting for project galleries)
- [ ] Implement SEO best practices (meta tags, sitemap, robots.txt)

### Pre-Deployment
- [ ] Run full type check (`npx tsc --noEmit`)
- [ ] Run linter (`npm run lint`)
- [ ] Test all critical user flows (navigation, contact form, project views)
- [ ] Verify security headers
- [ ] Check performance (Lighthouse score > 95)
- [ ] Test Core Web Vitals (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- [ ] Verify SEO (Lighthouse SEO score > 95)
- [ ] Test contact form spam protection
- [ ] Verify Open Graph tags (test with sharing previews)
- [ ] Check accessibility (Lighthouse A11y score 100)

---

## 🔒 Security (CRITICAL)

### Contact Form Protection

**NEVER**:
- Trust client-side validation alone
- Expose email credentials in client code
- Skip rate limiting on contact endpoints
- Return detailed error messages to users
- Store unencrypted sensitive data

**ALWAYS**:
- Rate limit contact form (3 submissions/hour per IP)
- Implement CAPTCHA or honeypot fields
- Sanitize all inputs (email, message, name)
- Validate email format with Zod
- Limit message length (10,000 chars max)
- Log suspicious activity (multiple failed attempts)
- Use server-side email validation
- Implement CSRF protection

```typescript
// Example: Contact form endpoint with security
import { z } from 'zod'
import { ratelimit } from '@/lib/ratelimit'

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(10000),
  honeypot: z.string().max(0) // Should be empty (bot trap)
})

export async function POST(request: NextRequest) {
  // Rate limiting
  const ip = request.ip ?? 'anonymous'
  const { success } = await ratelimit.limit(ip)
  if (!success) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }

  // Validate input
  const body = await request.json()
  const result = contactSchema.safeParse(body)

  if (!result.success) {
    return NextResponse.json(
      { error: 'Invalid input' },
      { status: 400 }
    )
  }

  // Honeypot check
  if (result.data.honeypot) {
    return NextResponse.json({ success: true }) // Fake success
  }

  // Sanitize and send email
  // ... implementation
}
```

### Input Validation & Sanitization

```typescript
// Sanitization utilities
export function sanitizeString(input: string): string {
  return input.trim()
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .slice(0, 10000)
}

export function sanitizeEmail(email: string): string {
  return email.trim().toLowerCase().slice(0, 254)
}
```

### Security Headers

```typescript
// next.config.ts - Essential headers for portfolio
const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  },
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
  }
]
```

---

## 🎨 UI/UX Design (S-Tier)

### Design System

**Colors**:
- Primary: Your brand color (e.g., `blue-600`)
- Neutrals: `gray-50` to `gray-950` (use `zinc` or `slate` for sophistication)
- Accent: Complementary color for CTAs
- Success: `green-500`
- Error: `red-500`
- Warning: `amber-500`

**Typography Hierarchy**:
- H1 (Hero): 48px-64px (page hero titles)
- H2 (Section): 32px-40px (main sections)
- H3 (Subsection): 24px-28px (subsections)
- H4: 20px-24px (card titles)
- Body: 16px-18px (readable paragraphs)
- Small: 14px (captions, metadata)
- Caption: 12px (footnotes)
- Font: Inter, Geist, or system-ui (professional sans-serif)

**Spacing Scale**: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px

**Border Radius**:
- Inputs/buttons: 8px
- Cards: 12px
- Containers: 16px
- Images: 12px-16px

**Shadows (depth hierarchy)**:
```css
/* Subtle elevation */
shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)

/* Cards */
shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1)

/* Modals/Dropdowns */
shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1)

/* Hero elements */
shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25)
```

### Component States

Implement for ALL interactive elements:
- **Default**: Clear, professional appearance
- **Hover**: Subtle scale (scale-105) or brightness change
- **Active**: Pressed state with scale-95
- **Focus**: `ring-2 ring-primary ring-offset-2` for keyboard nav
- **Disabled**: `opacity-50 cursor-not-allowed`
- **Loading**: Skeleton or spinner (avoid layout shift)

### Accessibility (WCAG AA - MANDATORY)

**Required**:
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`)
- Heading hierarchy (H1 → H2 → H3, no skipping)
- Skip navigation link (`<a href="#main">Skip to content</a>`)
- Keyboard navigation (Tab, Shift+Tab, Enter, Escape)
- Visible focus indicators on ALL focusable elements
- Color contrast 4.5:1 (normal text), 3:1 (large text 24px+)
- ARIA labels on icons and icon-only buttons
- Alt text on all images (descriptive, not decorative)
- Form labels with `htmlFor` attribute
- Error announcements with `role="alert"`
- Touch targets 44x44px minimum
- Reduced motion support (`prefers-reduced-motion`)

```typescript
// Accessibility example
<button
  type="button"
  aria-label="View project details"
  onClick={onViewProject}
  className="
    focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none
    hover:scale-105 active:scale-95
    transition-transform duration-200
    min-w-[44px] min-h-[44px]
  "
>
  <ArrowRightIcon className="w-6 h-6" aria-hidden="true" />
</button>
```

### Responsive Design (Mobile-First)

```typescript
// Breakpoints
Mobile: < 640px (default styles, sm:)
Tablet: >= 768px (md:)
Desktop: >= 1024px (lg:)
Wide: >= 1280px (xl:)

// Example: Project grid
<div className="
  grid grid-cols-1       /* Mobile: 1 column */
  sm:grid-cols-2         /* Tablet: 2 columns */
  lg:grid-cols-3         /* Desktop: 3 columns */
  gap-6 lg:gap-8
">
  {projects.map(project => (
    <ProjectCard key={project.id} project={project} />
  ))}
</div>
```

### Animation Principles

**Use sparingly and purposefully**:
- Page transitions: 150-200ms
- Hover effects: 200-300ms
- Micro-interactions: 100-150ms
- Page loads: Fade in (300-400ms)

```typescript
// Respect user preferences
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🚀 Performance (CRITICAL for First Impressions)

### Core Web Vitals Targets (Aggressive)

- **LCP** (Largest Contentful Paint): < 2.0s (aim for < 1.5s)
- **FID** (First Input Delay): < 50ms
- **CLS** (Cumulative Layout Shift): < 0.05
- **TTFB** (Time to First Byte): < 400ms
- **FCP** (First Contentful Paint): < 1.0s

### Image Optimization (CRITICAL)

```typescript
import Image from 'next/image'

// Hero images (above fold)
<Image
  src="/hero-image.jpg"
  alt="Descriptive alt text"
  width={1920}
  height={1080}
  priority // Load immediately
  placeholder="blur"
  blurDataURL="data:image/..." // Low quality placeholder
  className="object-cover"
/>

// Project thumbnails (below fold)
<Image
  src={project.image}
  alt={project.title}
  width={600}
  height={400}
  loading="lazy"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>

// Use WebP/AVIF format
// Optimize images: https://squoosh.app/
```

### Code Splitting & Lazy Loading

```typescript
import dynamic from 'next/dynamic'

// Lazy load heavy components (project galleries, 3D elements)
const ProjectGallery = dynamic(() => import('@/components/ProjectGallery'), {
  loading: () => <ProjectGallerySkeleton />,
  ssr: false // Client-only if using browser APIs
})

// Lazy load animations
const HeroAnimation = dynamic(() => import('@/components/HeroAnimation'), {
  loading: () => <div className="h-[400px]" />, // Prevent CLS
  ssr: false
})
```

### Font Optimization

```typescript
// app/layout.tsx - Use next/font
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Prevent invisible text flash
  variable: '--font-inter',
  preload: true
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
```

### Bundle Size Optimization

```bash
# Analyze bundle
npm run build
npx @next/bundle-analyzer

# Keep total JS < 200KB (initial load)
# Keep CSS < 50KB
```

### Rendering Strategies

- **SSG** (Static Site Generation): Homepage, About, Projects list (`export const dynamic = 'force-static'`)
- **ISR** (Incremental Static Regeneration): Blog posts (`export const revalidate = 3600`)
- **SSR** (Server-Side Rendering): Contact form (with dynamic validation)
- **RSC** (React Server Components): Default - reduces JS bundle significantly
- **Client Components**: Only for interactivity (`'use client'` - use sparingly)

---

## 🔍 SEO Optimization (CRITICAL for Portfolios)

### Meta Tags (Every Page)

```typescript
// app/layout.tsx or page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your Name - Full Stack Developer Portfolio',
  description: 'Portfolio showcasing web development projects, skills, and experience in React, Next.js, TypeScript, and more.',
  keywords: ['web developer', 'portfolio', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Name',
  metadataBase: new URL('https://yourportfolio.com'),

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'Your Name - Full Stack Developer Portfolio',
    description: 'Portfolio showcasing web development projects and skills.',
    siteName: 'Your Name Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Name Portfolio Preview'
      }
    ]
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name - Full Stack Developer Portfolio',
    description: 'Portfolio showcasing web development projects and skills.',
    creator: '@yourhandle',
    images: ['/og-image.jpg']
  },

  // Verification
  verification: {
    google: 'your-google-verification-code',
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
```

### Dynamic Project Pages

```typescript
// app/projects/[slug]/page.tsx
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = await getProject(params.slug)

  return {
    title: `${project.title} - Your Name Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
      type: 'article',
      publishedTime: project.date,
    },
  }
}
```

### Structured Data (JSON-LD)

```typescript
// components/StructuredData.tsx
export function PersonStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Your Name',
    url: 'https://yourportfolio.com',
    image: 'https://yourportfolio.com/profile.jpg',
    jobTitle: 'Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Your Company'
    },
    sameAs: [
      'https://github.com/yourusername',
      'https://linkedin.com/in/yourusername',
      'https://twitter.com/yourusername'
    ],
    knowsAbout: ['Web Development', 'React', 'TypeScript', 'Next.js']
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
```

### Sitemap & Robots.txt

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getAllProjects()

  const projectUrls = projects.map(project => ({
    url: `https://yourportfolio.com/projects/${project.slug}`,
    lastModified: project.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://yourportfolio.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://yourportfolio.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://yourportfolio.com/projects',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...projectUrls,
  ]
}

// app/robots.ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/private/'],
    },
    sitemap: 'https://yourportfolio.com/sitemap.xml',
  }
}
```

---

## 📝 Content Strategy

### Project Showcases

**Required Information**:
- Title (clear, professional)
- Description (2-3 sentences, value proposition)
- Technologies used (tags/badges)
- Problem statement (what challenge did it solve?)
- Solution approach (how you solved it)
- Results/Impact (metrics if possible)
- High-quality images (screenshots, demos)
- Links (live demo, GitHub - if public)
- Date completed

**Structure**:
```typescript
interface Project {
  id: string
  slug: string
  title: string
  description: string
  longDescription: string
  technologies: string[] // ['React', 'TypeScript', 'Tailwind']
  category: string // 'Web App', 'Mobile', 'Open Source'
  image: string
  images: string[] // Gallery
  demoUrl?: string
  githubUrl?: string
  featured: boolean
  date: Date
  status: 'completed' | 'in-progress' | 'archived'
  highlights: string[] // Key features/achievements
}
```

### About Section

**Must Include**:
- Professional headshot (high quality, 400x400px min)
- Bio (2-3 paragraphs, professional yet personable)
- Skills (organized by category: Frontend, Backend, Tools, etc.)
- Experience (timeline or list)
- Education (if relevant)
- Certifications (if any)
- Interests/Hobbies (humanize your brand)
- Contact CTA

### Resume/CV

**Options**:
1. Dedicated page with downloadable PDF
2. Interactive timeline
3. Both (recommended)

**PDF Requirements**:
- Professional design
- ATS-friendly (if applying to jobs)
- Match portfolio branding
- < 2MB file size
- Version control (add date to filename)

---

## 📊 Analytics & Monitoring

### Privacy-First Analytics

```typescript
// Use privacy-friendly analytics (Plausible, Fathom, or Vercel Analytics)
// NEVER use invasive tracking

// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
```

### Key Metrics to Track

- Page views (most visited pages)
- Project views (most popular projects)
- Contact form submissions
- Bounce rate (aim for < 40%)
- Average session duration (aim for > 2 minutes)
- Traffic sources (organic, direct, referral)
- Geographic distribution
- Device types (mobile vs desktop)

### Error Monitoring

```typescript
// Consider Sentry for error tracking
// Log errors but protect user privacy

export function logError(error: Error, context?: Record<string, unknown>) {
  console.error('Error:', error)

  // Send to monitoring service (in production only)
  if (process.env.NODE_ENV === 'production') {
    // Sentry.captureException(error, { extra: context })
  }
}
```

---

## 📝 TypeScript Best Practices

### NEVER use `any`

```typescript
// ❌ BAD
const projectData: any = await fetchProject()

// ✅ GOOD
interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  image: string
}
const projectData: Project = await fetchProject()
```

### Define Explicit Types

```typescript
// types/project.ts
export interface Project {
  id: string
  slug: string
  title: string
  description: string
  longDescription: string
  technologies: Technology[]
  category: ProjectCategory
  image: string
  images: string[]
  demoUrl?: string
  githubUrl?: string
  featured: boolean
  date: Date
  highlights: string[]
}

export type ProjectCategory =
  | 'Web Application'
  | 'Mobile App'
  | 'Open Source'
  | 'Design'
  | 'Other'

export interface Technology {
  name: string
  icon?: string
  category: 'frontend' | 'backend' | 'devops' | 'design'
}
```

### Use Zod for Validation

```typescript
import { z } from 'zod'

// Contact form validation
export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name contains invalid characters'),

  email: z.string()
    .email('Invalid email address')
    .max(254, 'Email is too long'),

  subject: z.string()
    .min(5, 'Subject must be at least 5 characters')
    .max(200, 'Subject must be less than 200 characters'),

  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(10000, 'Message must be less than 10,000 characters'),

  honeypot: z.string().max(0), // Bot trap
})

export type ContactFormData = z.infer<typeof contactFormSchema>
```

---

## 🏗️ Code Architecture

### File Structure

```
portfolio-app/
├── app/                    # Next.js App Router
│   ├── (marketing)/       # Route group: public pages
│   │   ├── page.tsx       # Homepage
│   │   ├── about/         # About page
│   │   └── contact/       # Contact page
│   ├── projects/          # Projects section
│   │   ├── page.tsx       # Projects list
│   │   └── [slug]/        # Individual project
│   ├── blog/              # Blog (optional)
│   │   ├── page.tsx       # Blog list
│   │   └── [slug]/        # Blog post
│   ├── api/               # API routes
│   │   └── contact/       # Contact form endpoint
│   ├── layout.tsx         # Root layout
│   ├── sitemap.ts         # Sitemap
│   └── robots.ts          # Robots.txt
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── ...
│   ├── layout/           # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/         # Page sections
│   │   ├── Hero.tsx
│   │   ├── ProjectsGrid.tsx
│   │   ├── Skills.tsx
│   │   └── ...
│   └── forms/            # Form components
│       └── ContactForm.tsx
├── lib/                  # Utilities
│   ├── utils.ts          # Helper functions
│   ├── validation.ts     # Zod schemas
│   ├── ratelimit.ts      # Rate limiting
│   └── email.ts          # Email service
├── data/                 # Static data
│   ├── projects.ts       # Project data
│   ├── skills.ts         # Skills data
│   └── experience.ts     # Experience data
├── types/                # TypeScript types
│   ├── project.ts
│   ├── skill.ts
│   └── contact.ts
├── public/               # Static assets
│   ├── images/
│   ├── resume.pdf
│   └── ...
└── styles/               # Global styles
    └── globals.css
```

### Component Patterns

**Server Components** (default - use for content):
```typescript
// app/projects/page.tsx
import { getAllProjects } from '@/data/projects'
import { ProjectCard } from '@/components/ProjectCard'

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  return (
    <main>
      <h1>Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  )
}
```

**Client Components** (use for interactivity):
```typescript
// components/forms/ContactForm.tsx
'use client'

import { useState } from 'react'
import { contactFormSchema, type ContactFormData } from '@/lib/validation'

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    try {
      // Validate
      const validatedData = contactFormSchema.parse(formData)

      // Submit
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validatedData)
      })

      if (!response.ok) throw new Error('Failed to send message')

      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' })
    } catch (error) {
      console.error('Contact form error:', error)
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Form fields */}
    </form>
  )
}
```

---

## ⚡ Testing (TDD)

### Coverage Targets
- Overall: 70%
- Utilities: 90%
- API routes: 80%
- Components: 60%

### Test Structure

```typescript
// __tests__/utils/validation.test.ts
import { describe, it, expect } from 'vitest'
import { contactFormSchema } from '@/lib/validation'

describe('contactFormSchema', () => {
  it('should accept valid contact form data', () => {
    const validData = {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Portfolio Inquiry',
      message: 'Great portfolio! I would like to discuss a project.',
      honeypot: ''
    }

    const result = contactFormSchema.safeParse(validData)
    expect(result.success).toBe(true)
  })

  it('should reject invalid email', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'invalid-email',
      subject: 'Test',
      message: 'Test message here',
      honeypot: ''
    }

    const result = contactFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('should reject message that is too short', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Test',
      message: 'Short',
      honeypot: ''
    }

    const result = contactFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })
})
```

---

## 🔄 Git Workflow

### Commit Messages

Format: `<type>: <description>`

Types:
- `feat:` New feature (new section, component)
- `fix:` Bug fix
- `chore:` Maintenance (dependencies, configs)
- `refactor:` Code restructuring (no behavior change)
- `docs:` Documentation
- `style:` Visual/styling changes
- `perf:` Performance improvement
- `content:` Content updates (projects, about text)

Examples:
```
feat: Add project filtering by technology
fix: Resolve mobile menu not closing on route change
style: Improve project card hover animation
content: Add new project to portfolio
perf: Optimize hero image loading
```

### What to Commit

**NEVER commit**:
- `.env` files (credentials)
- `node_modules/`
- Build artifacts (`.next/`, `dist/`, `out/`)
- Logs and temporary files
- IDE-specific files (except shared configs)
- Large binary files (> 5MB)
- Personal notes or drafts
- Unoptimized images (optimize first)

**ALWAYS commit**:
- Source code (`app/`, `components/`, `lib/`)
- Configuration files (`package.json`, `tsconfig.json`, `next.config.ts`)
- Optimized assets (`public/`)
- README.md
- `.gitignore`
- Type definitions (`types/`)

### .gitignore Template

```gitignore
# Dependencies
/node_modules
/.pnp
.pnp.js

# Next.js
/.next/
/out/

# Production
/build

# Environment variables
.env*
!.env.example

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.vscode/*
!.vscode/settings.json
!.vscode/extensions.json
.idea/

# OS
.DS_Store
Thumbs.db
*.swp

# Testing
/coverage

# Local only
notes/
drafts/
context/

# Large files
*.psd
*.sketch
*.fig
```

---

## 🚀 Deployment

### Pre-Deployment Checklist

- [ ] All TypeScript types valid (`npx tsc --noEmit`)
- [ ] No ESLint errors (`npm run lint`)
- [ ] All tests pass (`npm test`)
- [ ] Environment variables configured in hosting platform
- [ ] Security headers active
- [ ] Rate limiting configured
- [ ] Analytics configured
- [ ] Error monitoring set up
- [ ] Performance tested (Lighthouse score > 95)
- [ ] SEO tested (Lighthouse SEO score > 95)
- [ ] Accessibility tested (Lighthouse A11y score 100)
- [ ] Mobile responsive (tested on real devices)
- [ ] Contact form tested (send test email)
- [ ] All links work (no 404s)
- [ ] Images optimized (WebP format, proper sizes)
- [ ] Sitemap generated and accessible
- [ ] Robots.txt configured
- [ ] Open Graph tags tested (social sharing previews)
- [ ] Favicon and app icons included

### Environment Variables

```typescript
// lib/env.ts - Validate all env vars
import { z } from 'zod'

const envSchema = z.object({
  // Email service (e.g., Resend, SendGrid)
  EMAIL_FROM: z.string().email(),
  EMAIL_TO: z.string().email(),
  EMAIL_API_KEY: z.string().min(1),

  // Analytics (optional)
  NEXT_PUBLIC_GA_ID: z.string().optional(),

  // Environment
  NODE_ENV: z.enum(['development', 'test', 'production']),
  NEXT_PUBLIC_SITE_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
```

### Deployment Platforms (Recommended)

1. **Vercel** (Recommended for Next.js)
   - Zero-config deployment
   - Automatic HTTPS
   - Edge functions
   - Analytics built-in

2. **Netlify**
   - Easy deployment
   - Form handling built-in
   - Split testing

3. **Cloudflare Pages**
   - Global CDN
   - Fast edge network
   - DDoS protection

---

## 📚 Error Handling

### Client-Side

```typescript
// lib/api.ts
export async function sendContactForm(data: ContactFormData) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.error || 'Failed to send message')
    }

    return { success: true, data: result }
  } catch (error) {
    console.error('Contact form submission error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred'
    }
  }
}
```

### Server-Side

```typescript
// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validation'
import { sendEmail } from '@/lib/email'
import { ratelimit } from '@/lib/ratelimit'

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.ip ?? 'anonymous'
    const { success: rateLimitOk } = await ratelimit.limit(ip)

    if (!rateLimitOk) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a few minutes.' },
        { status: 429 }
      )
    }

    // Parse and validate
    const body = await request.json()
    const validationResult = contactFormSchema.safeParse(body)

    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: validationResult.error.issues },
        { status: 400 }
      )
    }

    const { name, email, subject, message, honeypot } = validationResult.data

    // Honeypot check (bot trap)
    if (honeypot) {
      // Fake success to confuse bots
      return NextResponse.json({ success: true })
    }

    // Send email
    await sendEmail({
      from: email,
      name,
      subject,
      message
    })

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
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
```

---

## 🎯 Code Quality Standards

### Linting Rules

```javascript
// eslint.config.js
import { defineConfig } from 'eslint-config-next'

export default defineConfig({
  rules: {
    // TypeScript
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    // React
    'react/jsx-no-target-blank': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // General
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'prefer-const': 'error',
    'no-var': 'error',

    // Accessibility
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-role': 'error',
  }
})
```

### Code Review Checklist

- [ ] No `any` types
- [ ] All inputs validated with Zod
- [ ] Error handling present (try-catch blocks)
- [ ] No hardcoded values (use constants or config)
- [ ] Proper TypeScript types for all functions
- [ ] Accessible UI (WCAG AA compliance)
- [ ] Responsive design tested
- [ ] Images optimized (WebP, proper sizes)
- [ ] Performance optimized (code splitting, lazy loading)
- [ ] SEO meta tags present
- [ ] Security considerations addressed
- [ ] Tests included (where applicable)

---

## 📖 Documentation

### Component Documentation

```typescript
/**
 * ProjectCard - Displays a project in a card format with image, title, description, and technologies.
 *
 * @param project - Project object containing all project details
 * @param featured - Whether to show the featured badge (default: false)
 * @param variant - Card style variant: 'default' | 'compact' | 'detailed'
 *
 * @example
 * <ProjectCard
 *   project={myProject}
 *   featured={true}
 *   variant="detailed"
 * />
 */
export function ProjectCard({
  project,
  featured = false,
  variant = 'default'
}: ProjectCardProps) {
  // Implementation
}
```

### API Documentation

```typescript
/**
 * POST /api/contact
 *
 * Handles contact form submissions with rate limiting and spam prevention.
 *
 * Request Body:
 * {
 *   name: string (2-100 chars),
 *   email: string (valid email),
 *   subject: string (5-200 chars),
 *   message: string (10-10,000 chars),
 *   honeypot: string (must be empty)
 * }
 *
 * Rate Limit: 3 requests per hour per IP
 *
 * Returns:
 * - 200: { success: true, message: 'Message sent successfully' }
 * - 400: { error: 'Invalid input', details: [...] }
 * - 429: { error: 'Too many requests. Please try again in a few minutes.' }
 * - 500: { error: 'Failed to send message. Please try again later.' }
 */
```

---

## 🎓 Key Principles Summary

1. **Performance First** - Your portfolio loads in < 2 seconds
2. **Design Excellence** - Professional, polished, attention to detail
3. **Accessibility Always** - WCAG AA compliance, keyboard navigation
4. **SEO Optimized** - Discoverable, shareable, indexed properly
5. **Mobile-First** - 60%+ traffic is mobile, design for it
6. **Type Safety** - No `any`, validate everything with Zod
7. **Security Focused** - Protect contact forms, sanitize inputs
8. **Content Quality** - Clear, concise, value-driven project descriptions
9. **Analytics Informed** - Track what matters, respect privacy
10. **Production Ready** - Every commit is live-ready

---

## 🔗 Quick Reference

**Development**:
```bash
npm install
cp .env.example .env.local
npm run dev
```

**Quality Checks**:
```bash
npm run lint
npx tsc --noEmit
npm test
```

**Performance Audit**:
```bash
npm run build
npm start
# Run Lighthouse in Chrome DevTools (aim for 95+ across all metrics)
```

**SEO Check**:
```bash
# Test Open Graph tags
curl -I https://yourportfolio.com
# Check meta tags in browser DevTools
# Use https://www.opengraph.xyz/ for preview
```

**Image Optimization**:
```bash
# Use Squoosh: https://squoosh.app/
# Or ImageOptim (Mac): https://imageoptim.com/
# Target: WebP format, < 200KB per image
```

---

## 📌 Portfolio-Specific Reminders

> "Your portfolio is often the first impression. Make it count."

> "A slow portfolio is a forgotten portfolio. Speed matters."

> "Accessibility isn't optional. 15% of users need it."

> "SEO brings opportunities. Optimize for discovery."

> "Show, don't just tell. Visuals and demos matter more than words."

---

**Last Updated**: 2025-10-20
**Version**: 1.0
**Status**: Production-Ready Portfolio Standards
