import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "custom-agents",
    title: "Custom AI Agents",
    description:
      "Tailored AI agents built for your specific workflows. From lead qualification to document processing - agents that understand your business and work 24/7.",
    icon: "bot",
    features: [
      "Built for your exact workflow",
      "n8n & Make integration",
      "Claude, GPT, or local LLMs",
      "Connects to your tools",
      "Full documentation included",
    ],
    href: "/services#custom-agents",
  },
  {
    id: "agent-templates",
    title: "Agent Templates",
    description:
      "Pre-built automation agents ready to deploy. Purchase, configure, and launch in hours instead of weeks. Perfect for common business workflows.",
    icon: "package",
    features: [
      "Email triage & response agent",
      "Lead qualification agent",
      "Invoice processing agent",
      "Content generation agent",
      "Customer support agent",
    ],
    href: "/services#agent-templates",
  },
  {
    id: "setup-config",
    title: "Setup & Configuration",
    description:
      "Need help getting your agents running? I handle the technical setup so you can focus on results. From n8n installation to API connections.",
    icon: "settings",
    features: [
      "n8n/Make workspace setup",
      "API & credential config",
      "Agent customization",
      "Testing & validation",
      "Training & handoff",
    ],
    href: "/services#setup-config",
  },
  {
    id: "consulting",
    title: "AI Strategy Consulting",
    description:
      "Not sure what to automate? I audit your workflows, identify the highest-impact opportunities, and create a practical roadmap to get there.",
    icon: "lightbulb",
    features: [
      "Workflow audit",
      "Automation opportunity mapping",
      "ROI analysis",
      "Implementation roadmap",
      "Tool recommendations",
    ],
    href: "/services#consulting",
  },
];
