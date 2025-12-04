# Stack MCP Super Agents - Portfolio

A modern, professional portfolio showcasing MCP (Model Context Protocol) server development and AI automation expertise.

**Live Demo:** [stackmcp.dev](https://stackmcp.dev)

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16 | App Router, SSR/SSG, Turbopack |
| React | 19 | UI Framework |
| TypeScript | 5.x | Type Safety |
| Tailwind CSS | 4 | Styling |
| Motion | latest | Animations |
| Lucide | latest | SVG Icons |

## Features

- **Dark/Light Mode** - System-aware theme switching
- **Responsive Design** - Mobile-first, works on all devices
- **Accessibility** - WCAG AA compliant
- **SEO Optimized** - Structured data, sitemap, robots.txt
- **Performance** - Lighthouse score 90+

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (marketing)/        # Public pages
│   │   ├── about/          # About page
│   │   ├── blog/           # Blog with dynamic routes
│   │   ├── booking/        # Booking page
│   │   ├── case-studies/   # Case studies with [slug]
│   │   ├── contact/        # Contact form
│   │   └── services/       # Services page
│   └── api/                # API routes
├── components/
│   ├── brand/              # Logo components
│   ├── layout/             # Header, Footer, Navigation
│   ├── sections/           # Page sections
│   ├── shared/             # Reusable components
│   └── ui/                 # UI primitives
├── data/                   # Static data (case studies, services)
├── lib/                    # Utilities, animations, SEO
├── providers/              # React context providers
└── types/                  # TypeScript interfaces
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Case Studies

1. **Twilio MCP Server** - AI-powered communication gateway
2. **Stack MCP Collection** - Personal productivity MCP suite
3. **Pizza Falchi** - Full-stack restaurant application
4. **Hi-ring** - Recruitment platform with AI features

## Services

- **MCP Server Development** - Custom integrations for Claude
- **AI Automation Workflows** - n8n + AI solutions
- **Full-Stack Applications** - Next.js 15 + React 19
- **AI Integration Consulting** - Strategy and implementation

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://stackmcp.dev
```

## Deployment

Deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jfp99/portfolio-app)

## License

MIT

---

Built by [JFP](https://github.com/jfp99)
