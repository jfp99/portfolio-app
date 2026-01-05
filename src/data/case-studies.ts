import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "lead-qualification-agent",
    title: "Lead Qualification Agent",
    subtitle: "AI-Powered Lead Scoring & Routing",
    description:
      "An AI agent that qualifies incoming leads 24/7 without human intervention. When a new lead enters the CRM, the agent analyzes company data, scores the lead based on custom criteria, and routes high-value prospects to sales reps via Slack. Built on n8n with Claude for intelligent decision-making.",
    thumbnail: "/images/projects/lead-agent.webp",
    heroImage: "/images/projects/lead-agent-hero.webp",
    client: "B2B SaaS Company",
    duration: "2 weeks",
    year: 2024,
    category: "ai-automation",
    technologies: [
      "n8n",
      "Claude API",
      "Slack API",
      "HubSpot",
      "TypeScript",
    ],
    challenges: [
      "Processing leads in real-time as they enter the system",
      "Building accurate scoring criteria that match sales priorities",
      "Integrating multiple data sources for enrichment",
      "Routing leads to the right reps based on territory and expertise",
    ],
    solutions: [
      "Built n8n workflow triggered by CRM webhooks",
      "Used Claude to analyze company fit and intent signals",
      "Integrated Clearbit for data enrichment",
      "Created Slack notifications with lead summaries for sales team",
    ],
    results: [
      {
        metric: "Leads/Day",
        value: "50+",
        description: "Processed automatically without human review",
      },
      {
        metric: "Time Saved",
        value: "15h",
        description: "Weekly hours freed for sales team",
      },
      {
        metric: "Response Time",
        value: "<5min",
        description: "From lead capture to sales notification",
      },
      {
        metric: "Accuracy",
        value: "92%",
        description: "Lead scoring accuracy vs manual review",
      },
    ],
    gallery: [],
    featured: true,
  },
  {
    id: "2",
    slug: "email-triage-agent",
    title: "Email Triage Agent",
    subtitle: "AI-Powered Inbox Management",
    description:
      "An agent that handles incoming emails intelligently. It categorizes messages, drafts responses for common inquiries, escalates urgent issues, and creates tasks for follow-ups. The client went from drowning in 200+ daily emails to only handling the ones that truly need human attention.",
    thumbnail: "/images/projects/email-agent.webp",
    heroImage: "/images/projects/email-agent-hero.webp",
    client: "Professional Services Firm",
    duration: "3 weeks",
    year: 2024,
    category: "ai-automation",
    technologies: [
      "n8n",
      "Claude API",
      "Gmail API",
      "Notion API",
      "MCP Protocol",
    ],
    challenges: [
      "Understanding context and intent in diverse email types",
      "Maintaining the client's voice and communication style",
      "Handling sensitive information appropriately",
      "Managing follow-up tasks and deadlines",
    ],
    solutions: [
      "Fine-tuned prompts with examples of the client's writing style",
      "Built classification system for email types and urgency",
      "Created draft responses for manager review before sending",
      "Integrated with Notion for task tracking and follow-ups",
    ],
    results: [
      {
        metric: "Emails/Day",
        value: "200+",
        description: "Processed and categorized automatically",
      },
      {
        metric: "Time Saved",
        value: "3h",
        description: "Daily hours saved on email management",
      },
      {
        metric: "Auto-Draft",
        value: "60%",
        description: "Emails get AI-drafted responses",
      },
      {
        metric: "Response Time",
        value: "2x",
        description: "Faster response to important emails",
      },
    ],
    gallery: [],
    featured: true,
  },
  {
    id: "3",
    slug: "invoice-processing-agent",
    title: "Invoice Processing Agent",
    subtitle: "Automated Document Extraction & Entry",
    description:
      "An AI agent that handles invoice processing from email attachment to accounting system. It extracts data from PDFs, validates against purchase orders, flags discrepancies, and enters approved invoices into QuickBooks. Replaced 20+ hours of manual data entry per week.",
    thumbnail: "/images/projects/invoice-agent.webp",
    heroImage: "/images/projects/invoice-agent-hero.webp",
    client: "E-commerce Company",
    duration: "4 weeks",
    year: 2024,
    category: "ai-automation",
    technologies: [
      "n8n",
      "Claude API",
      "QuickBooks API",
      "Gmail API",
      "Make",
    ],
    challenges: [
      "Extracting structured data from varied invoice formats",
      "Matching invoices to purchase orders accurately",
      "Handling exceptions and discrepancies gracefully",
      "Integrating with legacy accounting systems",
    ],
    solutions: [
      "Used Claude's vision capabilities for PDF extraction",
      "Built fuzzy matching for PO reconciliation",
      "Created approval workflow for flagged invoices",
      "Developed QuickBooks integration with error handling",
    ],
    results: [
      {
        metric: "Invoices/Week",
        value: "150+",
        description: "Processed automatically",
      },
      {
        metric: "Time Saved",
        value: "20h",
        description: "Weekly hours saved on data entry",
      },
      {
        metric: "Accuracy",
        value: "99%",
        description: "Data extraction accuracy",
      },
      {
        metric: "ROI",
        value: "300%",
        description: "Return on automation investment",
      },
    ],
    gallery: [],
    featured: true,
  },
  {
    id: "4",
    slug: "customer-support-agent",
    title: "Customer Support Agent",
    subtitle: "AI-Powered Ticket Triage & Response",
    description:
      "An intelligent support agent that handles first-line customer inquiries. It categorizes tickets, provides instant answers for common questions, routes complex issues to specialists, and even drafts personalized responses. Reduced average response time from 4 hours to 15 minutes.",
    thumbnail: "/images/projects/support-agent.webp",
    heroImage: "/images/projects/support-agent-hero.webp",
    client: "SaaS Startup",
    duration: "3 weeks",
    year: 2024,
    category: "ai-automation",
    technologies: [
      "n8n",
      "Claude API",
      "Intercom API",
      "Notion",
      "Slack API",
    ],
    challenges: [
      "Understanding varied customer communication styles",
      "Maintaining accurate product knowledge",
      "Knowing when to escalate vs auto-respond",
      "Integrating with existing support workflows",
    ],
    solutions: [
      "Built knowledge base sync from Notion docs",
      "Created confidence scoring for auto-responses",
      "Designed escalation rules based on sentiment and topic",
      "Integrated seamlessly with Intercom's existing workflow",
    ],
    results: [
      {
        metric: "Response Time",
        value: "15min",
        description: "Down from 4 hours average",
      },
      {
        metric: "Auto-Resolved",
        value: "40%",
        description: "Tickets resolved without human",
      },
      {
        metric: "CSAT",
        value: "+18%",
        description: "Customer satisfaction improvement",
      },
      {
        metric: "Tickets/Day",
        value: "100+",
        description: "Handled by the agent",
      },
    ],
    gallery: [],
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
