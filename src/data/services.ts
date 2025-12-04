import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "mcp-development",
    title: "MCP Server Development",
    description:
      "Give Claude real superpowers. MCP (Model Context Protocol) servers let AI assistants interact with your tools, APIs, and data sources directly - no copy-paste needed.",
    icon: "server",
    features: [
      "Twilio, Slack, Notion integrations",
      "Database querying (read/write)",
      "File system operations",
      "Custom API wrappers",
      "Claude Desktop & Claude Code ready",
    ],
    href: "/services#mcp-development",
  },
  {
    id: "ai-automation",
    title: "AI Automation Workflows",
    description:
      "Replace manual busywork with intelligent automation. n8n workflows combined with AI to process emails, generate documents, and handle repetitive tasks while you focus on what matters.",
    icon: "bot",
    features: [
      "n8n workflow design",
      "Email triage and response",
      "Invoice & document processing",
      "Lead qualification pipelines",
      "Slack/Teams notifications",
    ],
    href: "/services#ai-automation",
  },
  {
    id: "fullstack-development",
    title: "Full-Stack Applications",
    description:
      "Modern web apps that users actually want to use. Built with Next.js 15, React 19, and TypeScript - fast, accessible, and ready for production.",
    icon: "code",
    features: [
      "Next.js 15 App Router",
      "React 19 + TypeScript",
      "MongoDB / PostgreSQL",
      "Auth (NextAuth, Clerk)",
      "Stripe payments",
    ],
    href: "/services#fullstack-development",
  },
  {
    id: "consulting",
    title: "AI Integration Consulting",
    description:
      "Not sure where to start with AI? I help businesses identify automation opportunities and create practical implementation plans that actually get built.",
    icon: "lightbulb",
    features: [
      "Workflow audit",
      "Automation opportunity mapping",
      "Tool selection guidance",
      "Implementation planning",
      "Cost/benefit analysis",
    ],
    href: "/services#consulting",
  },
];
