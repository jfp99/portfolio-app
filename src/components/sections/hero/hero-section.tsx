"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Zap, Bot, Code } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const techBadges = [
  { name: "MCP Protocol", icon: Zap },
  { name: "Claude AI", icon: Bot },
  { name: "TypeScript", icon: Code },
  { name: "Next.js 15", icon: Sparkles },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden" aria-label="Hero">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px),
                             linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={staggerItem} className="mb-8">
            <span
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-2",
                "border border-primary/20 bg-primary/5 text-sm font-medium text-primary"
              )}
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              MCP & AI Automation Developer
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={staggerItem}
            className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Building{" "}
            <span className="text-gradient-brand">Intelligent Systems</span>
            <br />
            That Work For You
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={staggerItem}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            I create production-ready MCP servers and AI automation solutions
            that extend Claude&apos;s capabilities and streamline your workflows.
            From rapid prototypes to enterprise integrations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerItem}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/case-studies"
              className={cn(
                "group inline-flex items-center justify-center gap-2",
                "h-12 px-8 text-base font-medium rounded-lg",
                "gradient-brand text-white",
                "transition-all duration-200",
                "hover:opacity-90 hover:shadow-lg hover:shadow-primary/25",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              )}
            >
              View My Work
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center justify-center",
                "h-12 px-8 text-base font-medium rounded-lg",
                "border border-border bg-background",
                "transition-all duration-200",
                "hover:bg-muted hover:border-primary/50",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              )}
            >
              Get In Touch
            </Link>
          </motion.div>

          {/* Tech Badges */}
          <motion.div
            variants={staggerItem}
            className="mt-16 flex flex-wrap items-center justify-center gap-3"
          >
            {techBadges.map((badge) => (
              <motion.div
                key={badge.name}
                whileHover={{ y: -2, scale: 1.02 }}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 py-2",
                  "border border-border bg-card text-sm font-medium",
                  "transition-colors hover:border-primary/50"
                )}
              >
                <badge.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                {badge.name}
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8"
          >
            {[
              { value: "5+", label: "MCP Servers" },
              { value: "50%", label: "Productivity Boost" },
              { value: "10h", label: "Saved Weekly" },
              { value: "4", label: "Projects Shipped" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card/50 p-4 backdrop-blur-sm"
              >
                <div className="text-2xl font-bold text-gradient-brand sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
