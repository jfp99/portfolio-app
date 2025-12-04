import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "twilio-mcp-server",
    title: "Twilio MCP Server",
    subtitle: "AI-Powered Communication Gateway",
    description:
      "An MCP server that gives Claude direct access to Twilio's communication APIs. Instead of copying phone numbers and messages back and forth, Claude can now send SMS, initiate calls, and check message status directly. Real example: 'Send a reminder to +33 6XX about their appointment tomorrow' - done in one prompt.",
    thumbnail: "/images/projects/twilio-mcp-server.webp",
    heroImage: "/images/projects/twilio-mcp-server-hero.webp",
    client: "Personal Project",
    duration: "40 minutes",
    year: 2024,
    category: "mcp-server",
    technologies: [
      "TypeScript",
      "Node.js",
      "Twilio REST API",
      "MCP SDK",
      "Claude Desktop",
    ],
    challenges: [
      "Learning the MCP protocol while building something useful",
      "Handling Twilio's authentication (Account SID + Auth Token)",
      "Designing tools that make sense to an AI agent",
      "Managing phone number formats across countries",
    ],
    solutions: [
      "Used MCP SDK's TypeScript template as starting point",
      "Stored credentials in environment variables",
      "Wrote tool descriptions in plain English with examples",
      "Added input validation for E.164 phone format",
    ],
    results: [
      {
        metric: "Build Time",
        value: "40",
        description: "Minutes from zero to working server",
      },
      {
        metric: "Tools",
        value: "5",
        description: "send_sms, make_call, check_status, list_messages, get_balance",
      },
      {
        metric: "Lines of Code",
        value: "~200",
        description: "TypeScript, fully typed",
      },
      {
        metric: "Use Cases",
        value: "Many",
        description: "Appointment reminders, notifications, alerts",
      },
    ],
    gallery: [],
    githubUrl: "https://github.com/jfp99/twilio-mcp-server",
    featured: true,
  },
  {
    id: "2",
    slug: "stack-mcp-servers",
    title: "Stack MCP Server Collection",
    subtitle: "Personal Productivity MCP Suite",
    description:
      "A growing collection of MCP servers I've built to extend Claude's capabilities. Each server follows the Model Context Protocol standard, letting Claude interact directly with external services - from sending Slack messages to querying databases to managing files. These aren't just demos; they're tools I use daily.",
    thumbnail: "/images/projects/stack-mcp-servers.webp",
    heroImage: "/images/projects/stack-mcp-servers-hero.webp",
    client: "Personal Project",
    duration: "Ongoing",
    year: 2024,
    category: "mcp-server",
    technologies: [
      "TypeScript",
      "Python",
      "MCP SDK",
      "REST APIs",
      "Claude Desktop",
      "Claude Code",
    ],
    challenges: [
      "Understanding MCP protocol specification and tool schemas",
      "Handling authentication securely across different APIs",
      "Designing tool descriptions that AI agents can understand",
      "Managing rate limits and error handling gracefully",
    ],
    solutions: [
      "Deep-dived into MCP SDK documentation and examples",
      "Used environment variables and secure credential storage",
      "Wrote clear, action-oriented tool descriptions",
      "Implemented retry logic and meaningful error messages",
    ],
    results: [
      {
        metric: "MCP Servers",
        value: "5+",
        description: "Working servers in production use",
      },
      {
        metric: "Time Saved",
        value: "10h",
        description: "Weekly hours saved on repetitive tasks",
      },
      {
        metric: "Productivity",
        value: "50%",
        description: "Estimated productivity improvement",
      },
      {
        metric: "Learning",
        value: "∞",
        description: "Continuous improvement cycle",
      },
    ],
    gallery: [],
    featured: true,
  },
  {
    id: "3",
    slug: "pizza-falchi",
    title: "Pizza Falchi",
    subtitle: "Full-Stack Restaurant Application",
    description:
      "My first real full-stack project - a complete restaurant management system for a local pizzeria. Customers can browse the menu, customize orders, and pay online. Staff get a dashboard to manage incoming orders. The project taught me everything from database design to payment integration to deployment.",
    thumbnail: "/images/projects/pizza-falchi.webp",
    heroImage: "/images/projects/pizza-falchi-hero.webp",
    client: "Personal Project",
    duration: "3 months",
    year: 2024,
    category: "web-app",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "MongoDB",
      "Stripe",
      "n8n",
      "Tailwind CSS",
    ],
    challenges: [
      "First time building a complete CRUD application",
      "Learning MongoDB and data modeling",
      "Understanding Stripe's payment flow",
      "Deploying and maintaining a production app",
    ],
    solutions: [
      "Built iteratively, starting with the menu display",
      "Used Mongoose for schema validation",
      "Followed Stripe's documentation step by step",
      "Deployed on Vercel with MongoDB Atlas",
    ],
    results: [
      {
        metric: "Commits",
        value: "106",
        description: "Iterative development on main branch",
      },
      {
        metric: "Features",
        value: "Full",
        description: "Menu, cart, checkout, admin dashboard",
      },
      {
        metric: "Stack",
        value: "Modern",
        description: "Next.js 15, App Router, Server Actions",
      },
      {
        metric: "Status",
        value: "Live",
        description: "Deployed and functional",
      },
    ],
    gallery: [],
    liveUrl: "https://pizza-falchi.vercel.app",
    githubUrl: "https://github.com/jfp99/pizza-falchi",
    featured: true,
  },
  {
    id: "4",
    slug: "hi-ring",
    title: "Hi-ring Recruitment Platform",
    subtitle: "Full-Stack Job Board with AI Features",
    description:
      "A recruitment platform built as a learning project to understand complex application architecture. Features job listings, candidate profiles, application tracking, and basic AI-assisted matching. My most ambitious project so far - taught me about auth flows, role-based access, and end-to-end testing.",
    thumbnail: "/images/projects/hi-ring.webp",
    heroImage: "/images/projects/hi-ring-hero.webp",
    client: "Personal Project",
    duration: "4 months",
    year: 2024,
    category: "platform",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "MongoDB",
      "NextAuth.js 5",
      "OpenAI API",
      "SendGrid",
    ],
    challenges: [
      "First time implementing proper authentication",
      "Managing multiple user roles (recruiter, candidate, admin)",
      "Building a resume parsing system",
      "Writing comprehensive tests",
    ],
    solutions: [
      "Used NextAuth.js 5 with multiple providers",
      "Implemented role-based middleware",
      "Built PDF text extraction with fallbacks",
      "Wrote 37 end-to-end tests with Playwright",
    ],
    results: [
      {
        metric: "E2E Tests",
        value: "37",
        description: "Full user journey coverage",
      },
      {
        metric: "User Roles",
        value: "3",
        description: "Candidate, Recruiter, Admin",
      },
      {
        metric: "Auth",
        value: "Secure",
        description: "NextAuth.js with credentials + OAuth",
      },
      {
        metric: "Learning",
        value: "Huge",
        description: "Complex state, auth, testing",
      },
    ],
    gallery: [],
    githubUrl: "https://github.com/jfp99/hiring-app-beta",
    featured: true,
  },
];

export const featuredCaseStudies = caseStudies.filter((cs) => cs.featured);

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getCaseStudiesByCategory(
  category: CaseStudy["category"]
): CaseStudy[] {
  return caseStudies.filter((cs) => cs.category === category);
}
