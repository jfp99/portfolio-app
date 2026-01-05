"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Server,
  Bot,
  Code,
  Lightbulb,
  ArrowRight,
  Check,
  Zap,
  Clock,
  Shield,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer, staggerItem, cardHover } from "@/lib/animations";

const services = [
  {
    id: "mcp-development",
    icon: Server,
    title: "MCP Server Development",
    subtitle: "Give Claude Real Superpowers",
    description:
      "MCP (Model Context Protocol) is Anthropic's open standard that lets AI assistants interact with external tools. Instead of copy-pasting data, Claude can directly query your database, send Slack messages, create Notion pages, or call any API. I build these servers from scratch.",
    features: [
      "Twilio, Slack, Notion integrations",
      "Database connections (read/write)",
      "File system operations",
      "Custom API wrappers",
      "Claude Desktop & Claude Code ready",
      "Full documentation included",
    ],
    benefits: [
      "No more copy-paste workflows",
      "Claude becomes your assistant",
      "Works with any REST API",
    ],
    pricing: "Starting at 1,500€",
    popular: true,
  },
  {
    id: "ai-automation",
    icon: Bot,
    title: "AI Automation Workflows",
    subtitle: "n8n + AI = Magic",
    description:
      "n8n is a workflow automation tool that connects apps together. Combined with AI, it can process emails intelligently, generate documents from templates, route leads based on content, and handle tasks that normally require human judgment.",
    features: [
      "n8n workflow design & hosting",
      "Email triage and auto-response",
      "Invoice & document processing",
      "Lead qualification pipelines",
      "Slack/Teams/Discord notifications",
      "Custom AI prompts per workflow",
    ],
    benefits: [
      "Automate repetitive tasks",
      "AI handles the judgment calls",
      "Runs 24/7 without you",
    ],
    pricing: "Starting at 2,000€",
    popular: false,
  },
  {
    id: "fullstack-development",
    icon: Code,
    title: "Full-Stack Applications",
    subtitle: "Next.js 15 + React 19",
    description:
      "Modern web applications built with the latest stack. Server components, streaming, and edge functions make apps fast. TypeScript catches bugs before users do. MongoDB or PostgreSQL for data. Stripe for payments. Deployed on Vercel.",
    features: [
      "Next.js 15 App Router",
      "React 19 + TypeScript",
      "MongoDB or PostgreSQL",
      "Authentication (NextAuth, Clerk)",
      "Stripe payment integration",
      "Vercel deployment",
    ],
    benefits: [
      "Fast, SEO-optimized apps",
      "Type-safe from DB to UI",
      "Production-ready architecture",
    ],
    pricing: "Starting at 3,000€",
    popular: false,
  },
  {
    id: "consulting",
    icon: Lightbulb,
    title: "AI Integration Consulting",
    subtitle: "Figure Out What's Possible",
    description:
      "Not sure where AI can help your business? I can audit your workflows, identify automation opportunities, and create a practical implementation plan. No fluff, just concrete recommendations you can actually build.",
    features: [
      "Current workflow audit",
      "Automation opportunity mapping",
      "Tool selection guidance",
      "Build-vs-buy analysis",
      "Implementation roadmap",
      "Prototype development",
    ],
    benefits: [
      "Know what's worth building",
      "Avoid expensive mistakes",
      "Get a clear action plan",
    ],
    pricing: "150€ / hour",
    popular: false,
  },
];

const mcpUseCases = [
  {
    title: "Customer Support Team",
    prompt: "Check if customer #1234 has any open tickets, then send them a status update via SMS",
    result: "Claude queries your CRM, finds the tickets, and sends a personalized message through Twilio - all in one conversation.",
  },
  {
    title: "Sales Operations",
    prompt: "Create a Notion page summarizing this week's closed deals from Salesforce",
    result: "Claude fetches deal data, formats it nicely, and creates a ready-to-share report in your Notion workspace.",
  },
  {
    title: "Developer Workflow",
    prompt: "Check the latest GitHub issues on our repo and post a summary to our dev Slack channel",
    result: "Claude reads your issues, identifies priorities, and keeps your team informed without manual copy-paste.",
  },
  {
    title: "Finance Automation",
    prompt: "Extract line items from this PDF invoice and add them to the expense tracker spreadsheet",
    result: "Claude parses the document, extracts structured data, and updates your Google Sheet with accurate entries.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Free call to understand what you're trying to automate and which APIs or tools are involved.",
  },
  {
    step: "02",
    title: "Proposal",
    description:
      "Clear scope with exactly what the MCP server will do, timeline, and fixed price.",
  },
  {
    step: "03",
    title: "Development",
    description:
      "I build and test the server. You can see progress and give feedback throughout.",
  },
  {
    step: "04",
    title: "Delivery",
    description:
      "Working server with setup instructions, documentation, and 30 days of support.",
  },
];

const guarantees = [
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "I respect deadlines and communicate proactively about progress.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Every project includes thorough testing and documentation.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "Regular updates and responsive communication throughout.",
  },
  {
    icon: Zap,
    title: "Post-Launch Support",
    description: "30 days of support included with every project.",
  },
];

export function ServicesPageContent() {
  return (
    <div className="py-24 sm:py-32">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Services
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            What I Can{" "}
            <span className="text-spinach-500 dark:text-spinach-400">Build For You</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            I specialize in MCP servers and AI automation - giving Claude direct
            access to your tools and data. Plus full-stack apps when you need a
            complete solution.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="mt-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-2"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              id={service.id}
              variants={staggerItem}
              whileHover="hover"
              initial="rest"
            >
              <motion.div
                variants={cardHover}
                className={cn(
                  "relative h-full rounded-3xl border bg-card p-8",
                  service.popular
                    ? "border-primary/50 shadow-lg shadow-primary/10"
                    : "border-border"
                )}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-8 rounded-full bg-spinach-600 px-4 py-1 text-xs font-medium text-white">
                    Most Popular
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-spinach-600">
                    <service.icon className="h-7 w-7 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{service.title}</h2>
                    <p className="text-muted-foreground">{service.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-6 text-muted-foreground">{service.description}</p>

                {/* Features */}
                <div className="mt-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    What&apos;s Included
                  </h3>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check
                          className="h-4 w-4 flex-shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                  <div>
                    <span className="text-sm text-muted-foreground">From</span>
                    <div className="text-2xl font-bold">{service.pricing}</div>
                  </div>
                  <Link
                    href="/contact"
                    className={cn(
                      "inline-flex items-center gap-2 rounded-lg px-5 py-2.5",
                      "bg-spinach-600 hover:bg-spinach-700 text-white font-medium",
                      "transition-colors"
                    )}
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* MCP Use Cases Section */}
      <section className="mt-32 bg-muted/30 py-24" aria-labelledby="mcp-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Real Examples
            </span>
            <h2
              id="mcp-heading"
              className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              What MCP Actually Looks Like
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              With MCP servers, you talk to Claude in plain English. Claude figures out
              which tools to use and executes multi-step workflows automatically.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 lg:grid-cols-2"
          >
            {mcpUseCases.map((useCase) => (
              <motion.div
                key={useCase.title}
                variants={staggerItem}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="text-sm font-medium text-primary">{useCase.title}</div>
                <div className="mt-3 rounded-lg bg-muted/50 p-4 font-mono text-sm">
                  <span className="text-muted-foreground">&quot;{useCase.prompt}&quot;</span>
                </div>
                <div className="mt-4 flex items-start gap-3">
                  <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                  <p className="text-sm text-muted-foreground">{useCase.result}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              How It Works
            </span>
            <h2
              id="process-heading"
              className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Simple & Transparent Process
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={staggerItem}
                className="relative"
              >
                {index !== processSteps.length - 1 && (
                  <div className="absolute left-1/2 top-10 hidden h-px w-full bg-border lg:block" />
                )}
                <div className="relative rounded-2xl border border-border bg-card p-6 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-spinach-600 text-2xl font-bold text-white">
                    {step.step}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-24" aria-labelledby="guarantees-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Guarantees
            </span>
            <h2
              id="guarantees-heading"
              className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              What You Can Expect
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {guarantees.map((guarantee) => (
              <motion.div
                key={guarantee.title}
                variants={staggerItem}
                className="rounded-2xl border border-border bg-card p-6 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <guarantee.icon
                    className="h-6 w-6 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-4 font-semibold">{guarantee.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {guarantee.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-3xl bg-spinach-600 p-8 text-center text-white sm:p-16"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Book a free consultation to discuss your project and see how I can
            help you achieve your goals.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/booking"
              className={cn(
                "inline-flex items-center gap-2 rounded-lg px-6 py-3",
                "bg-white text-primary font-medium",
                "transition-opacity hover:opacity-90"
              )}
            >
              Book a Free Call
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/case-studies"
              className={cn(
                "inline-flex items-center gap-2 rounded-lg px-6 py-3",
                "border-2 border-white/30 font-medium",
                "transition-colors hover:bg-white/10"
              )}
            >
              View My Work
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
