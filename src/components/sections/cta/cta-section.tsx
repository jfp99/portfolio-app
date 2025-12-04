"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/animations";

export function CTASection() {
  return (
    <section className="py-24 sm:py-32" aria-label="Call to action">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl gradient-brand p-8 text-center text-white sm:p-16"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 -z-10 opacity-10">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to Transform Your Workflow?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Let&apos;s discuss how MCP servers and AI automation can help you
            save time, reduce errors, and focus on what matters most.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/booking"
              className={cn(
                "group inline-flex items-center justify-center gap-2",
                "h-12 px-8 text-base font-medium rounded-lg",
                "bg-white text-primary",
                "transition-all duration-200",
                "hover:bg-white/90 hover:shadow-lg",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              )}
            >
              <Calendar className="h-5 w-5" aria-hidden="true" />
              Book a Free Call
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center justify-center gap-2",
                "h-12 px-8 text-base font-medium rounded-lg",
                "border-2 border-white/30 bg-transparent",
                "transition-all duration-200",
                "hover:border-white hover:bg-white/10",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              )}
            >
              <MessageSquare className="h-5 w-5" aria-hidden="true" />
              Send a Message
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-white/60">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Response within 24h
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              No commitment required
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Free consultation
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
