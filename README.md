# Portfolio Application

A modern, production-ready portfolio website built with Next.js 15, React 19, TypeScript, and TailwindCSS. Featuring dark/light mode, responsive design, SEO optimization, and a contact form.

## 🚀 Features

- ⚡ **Next.js 15** with App Router and React Server Components
- 🎨 **TailwindCSS 4** for styling with custom design system
- 🌙 **Dark/Light Mode** with next-themes
- 📱 **Fully Responsive** - Mobile-first design
- ♿ **Accessible** - WCAG AA compliant
- 🔍 **SEO Optimized** - Meta tags, Open Graph, Sitemap, Robots.txt
- 🎯 **TypeScript** - 100% type-safe with strict mode
- 🎭 **Framer Motion** - Smooth animations
- 📬 **Contact Form** - With validation and rate limiting
- 🚦 **Performance** - Optimized for Core Web Vitals

## 📦 Tech Stack

### Frontend
- Next.js 15
- React 19
- TypeScript 5
- TailwindCSS 4
- Framer Motion
- Radix UI Components
- Lucide Icons

### Backend
- Next.js API Routes
- Zod (validation)
- Rate Limiting

### Development
- ESLint
- Prettier (recommended)
- TypeScript strict mode

## 🏗️ Project Structure

```
portfolio-app/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── contact/       # Contact form endpoint
│   ├── projects/          # Projects pages
│   │   ├── [slug]/       # Individual project
│   │   └── page.tsx      # Projects list
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   ├── globals.css       # Global styles
│   ├── sitemap.ts        # Sitemap generation
│   └── robots.ts         # Robots.txt
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   ├── layout/          # Layout components
│   ├── forms/           # Form components
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── data/                # Static data
│   ├── projects.ts      # Project data
│   └── skills.ts        # Skills data
├── lib/                 # Utilities
│   ├── utils.ts         # Helper functions
│   ├── validation.ts    # Zod schemas
│   └── env.ts           # Environment validation
├── types/               # TypeScript types
│   ├── project.ts
│   └── skill.ts
├── public/              # Static assets
└── claude.md           # S-Tier development principles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm

### Installation

1. **Clone the repository** (or you're already here!)

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and configure:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_SITE_NAME="Your Name Portfolio"

   # Optional: MongoDB (for storing contact form submissions)
   # MONGODB_URI=your_mongodb_uri
   # MONGODB_DB=portfolio

   # Optional: Email service (SendGrid, Resend, etc.)
   # EMAIL_FROM=noreply@yourportfolio.com
   # EMAIL_TO=your@email.com
   # EMAIL_API_KEY=your_api_key
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser.

## 📝 Customization

### 1. Personal Information

Update the following files with your information:

- **Header/Footer**: `components/layout/Header.tsx` and `components/layout/Footer.tsx`
  - Change "Your Name" to your actual name
  - Update social links

- **Homepage**: `app/page.tsx`
  - Update hero text
  - Modify stats
  - Adjust CTAs

- **About Page**: `app/about/page.tsx`
  - Write your bio
  - Update experience
  - Add education
  - List interests

- **Contact Page**: `app/contact/page.tsx`
  - Update email and location
  - Modify FAQ

### 2. Projects

Edit `data/projects.ts` to add/modify your projects:

```typescript
{
  id: '1',
  slug: 'my-project',
  title: 'My Awesome Project',
  description: 'Short description',
  longDescription: 'Detailed description...',
  technologies: [
    { name: 'Next.js', category: 'frontend' },
    // ...
  ],
  category: 'Web Application',
  image: '/images/projects/my-project.jpg',
  demoUrl: 'https://demo.com',
  githubUrl: 'https://github.com/you/project',
  featured: true,
  date: new Date('2024-10-20'),
  status: 'completed',
  highlights: [
    { title: 'Feature 1', description: '...' }
  ]
}
```

### 3. Skills

Edit `data/skills.ts` to update your skills.

### 4. Design System

Customize colors and styles in:
- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - CSS variables for colors

### 5. Images

Add your images to the `public/` directory:
- `/images/projects/` - Project screenshots
- `/images/` - Other assets
- `/og-image.jpg` - Open Graph image (1200x630px)
- `/favicon.ico`, `/apple-touch-icon.png` - Icons

## 📧 Contact Form Setup

The contact form currently logs submissions to the console. To send emails:

### Option 1: SendGrid

1. Install SendGrid:
   ```bash
   npm install @sendgrid/mail
   ```

2. Get API key from [SendGrid](https://sendgrid.com/)

3. Add to `.env.local`:
   ```env
   EMAIL_API_KEY=your_sendgrid_api_key
   EMAIL_FROM=noreply@yoursite.com
   EMAIL_TO=your@email.com
   ```

4. Update `app/api/contact/route.ts` - uncomment SendGrid code

### Option 2: Resend

1. Install Resend:
   ```bash
   npm install resend
   ```

2. Get API key from [Resend](https://resend.com/)

3. Update `.env.local` and uncomment Resend code in `app/api/contact/route.ts`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub

2. Import project to [Vercel](https://vercel.com/)

3. Configure environment variables in Vercel dashboard

4. Deploy!

Your site will be live at `https://your-project.vercel.app`

### Custom Domain

1. Buy a domain (Namecheap, Google Domains, etc.)

2. Add domain in Vercel dashboard

3. Update DNS records

4. Update `NEXT_PUBLIC_SITE_URL` in environment variables

## 🧪 Testing

```bash
# Type check
npm run type-check

# Lint
npm run lint

# Build
npm run build

# Production preview
npm start
```

## 📊 Performance

Run Lighthouse audit to check:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 95+

## 🎯 Key Principles (from claude.md)

This project follows S-tier development principles:

1. **Security First** - Input validation, rate limiting, sanitization
2. **Type Safety** - No `any`, strict TypeScript
3. **Performance** - Optimized images, code splitting
4. **Accessibility** - WCAG AA compliant
5. **SEO** - Meta tags, sitemap, semantic HTML
6. **Mobile-First** - Responsive design
7. **Production-Ready** - Every commit is deployable

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Framer Motion Documentation](https://www.framer.com/motion)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

If you found this helpful, please star the repository!

---

**Built with ❤️ using Next.js, TypeScript, and TailwindCSS**
