"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Calendar,
  Clock,
  Video,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/lib/animations";

const benefits = [
  "Discuss your project requirements",
  "Get expert advice on MCP & AI solutions",
  "Receive a tailored proposal",
  "No commitment required",
];

const meetingTypes = [
  {
    title: "Discovery Call",
    duration: "30 min",
    description:
      "Perfect for initial discussions about your project needs and how I can help.",
    icon: MessageSquare,
  },
  {
    title: "Technical Deep-Dive",
    duration: "60 min",
    description:
      "Detailed technical discussion for complex projects requiring in-depth planning.",
    icon: Video,
  },
];

export function BookingContent() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Book a Call
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Let&apos;s Discuss Your{" "}
            <span className="text-gradient-brand">Project</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Schedule a free consultation to explore how MCP servers and AI
            automation can transform your workflow.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Left - Benefits & Info */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Benefits */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold">What to Expect</h2>
              <ul className="mt-6 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle2
                      className="h-5 w-5 flex-shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Meeting Types */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {meetingTypes.map((meeting) => (
                <motion.div
                  key={meeting.title}
                  variants={staggerItem}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <meeting.icon
                        className="h-6 w-6 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold">{meeting.title}</h3>
                        <span className="flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" aria-hidden="true" />
                          {meeting.duration}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {meeting.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Alternative Contact */}
            <div className="rounded-2xl border border-border bg-muted/30 p-6 text-center">
              <p className="text-muted-foreground">
                Prefer to send a message instead?
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center gap-1 font-medium text-primary hover:underline"
              >
                Go to contact form
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>

          {/* Right - Calendar Embed */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
          >
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <Calendar className="h-5 w-5 text-primary" aria-hidden="true" />
                <h2 className="font-semibold">Select a Time</h2>
              </div>

              {/* Calendar Placeholder - Replace with actual Calendly/Cal.com embed */}
              <div className="mt-6">
                <div className="flex aspect-square items-center justify-center rounded-xl bg-muted">
                  <div className="text-center">
                    <Calendar
                      className="mx-auto h-16 w-16 text-muted-foreground/50"
                      aria-hidden="true"
                    />
                    <p className="mt-4 text-lg font-medium">Calendar Coming Soon</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Calendly or Cal.com integration will be added here.
                    </p>
                    <p className="mt-4 text-sm text-muted-foreground">
                      In the meantime, please use the{" "}
                      <Link href="/contact" className="text-primary hover:underline">
                        contact form
                      </Link>{" "}
                      to schedule a call.
                    </p>
                  </div>
                </div>

                {/* Instructions for adding Calendly */}
                <div className="mt-6 rounded-lg bg-muted/50 p-4 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">
                    To add Calendly integration:
                  </p>
                  <ol className="mt-2 list-inside list-decimal space-y-1">
                    <li>Create a Calendly account</li>
                    <li>Get your embed code or URL</li>
                    <li>
                      Replace this placeholder with the Calendly inline widget
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24"
        >
          <h2 className="text-center text-2xl font-bold">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-4">
            {[
              {
                q: "Is the consultation really free?",
                a: "Yes! The initial discovery call is completely free with no strings attached.",
              },
              {
                q: "How long does a typical project take?",
                a: "It depends on the scope. MCP servers can be built in days, while full applications may take weeks to months.",
              },
              {
                q: "Do you work with international clients?",
                a: "Absolutely! I work with clients worldwide. Calls can be scheduled in various time zones.",
              },
              {
                q: "What happens after the call?",
                a: "I'll send you a detailed proposal with scope, timeline, and transparent pricing within 48 hours.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="font-semibold">{faq.q}</h3>
                <p className="mt-2 text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
