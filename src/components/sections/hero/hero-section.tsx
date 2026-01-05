"use client";

import { useMemo } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Leaf, Zap, Bot, Workflow, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { AnimatedLogo } from "@/components/brand/logo";
import { RippleButton } from "@/components/ui/ripple-button";

const techBadges = [
  { name: "AI Agents", icon: Bot },
  { name: "n8n Workflows", icon: Workflow },
  { name: "Claude & GPT", icon: Sparkles },
  { name: "Automation", icon: Zap },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden" aria-label="Hero">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* Subtle static orbs (no animation, muted colors) */}
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-muted/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-muted/10 blur-3xl" />
        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--spinach-600)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--spinach-600)) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
        {/* Floating Leaf Particles */}
        <FloatingParticles />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Animated Logo */}
          <motion.div variants={staggerItem} className="mb-6 flex justify-center">
            <AnimatedLogo className="h-16 w-16" />
          </motion.div>

          {/* Badge */}
          <motion.div variants={staggerItem} className="mb-8">
            <span
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-2",
                "border border-spinach-500/30 bg-spinach-500/10",
                "text-sm font-medium text-spinach-600 dark:text-spinach-400"
              )}
            >
              <Bot className="h-4 w-4" aria-hidden="true" />
              AI Agents & Workflow Automation
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={staggerItem}
            className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-spinach-500 dark:text-spinach-400">EPNR</span>
            <br />
            <span className="text-foreground">Automation Studio</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={staggerItem}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            Custom AI agents and workflow automation that work 24/7.
            From ready-to-use templates to fully tailored solutions &mdash;
            <span className="text-spinach-600 dark:text-spinach-400 font-medium">
              {" "}I help you automate what matters.
            </span>
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
                "h-12 px-8 text-base font-medium rounded-xl",
                "bg-spinach-600 text-white",
                "transition-all duration-300",
                "hover:bg-spinach-700",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spinach-500 focus-visible:ring-offset-2",
                "btn-press"
              )}
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              View My Work
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="/contact"
              className={cn(
                "group inline-flex items-center justify-center gap-2",
                "h-12 px-8 text-base font-medium rounded-xl",
                "border border-spinach-500/30 bg-transparent",
                "text-foreground",
                "transition-all duration-300",
                "hover:border-spinach-500/50 hover:bg-spinach-500/5",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spinach-500 focus-visible:ring-offset-2",
                "btn-press"
              )}
            >
              Get In Touch
            </Link>
          </motion.div>

          {/* Tech Badges */}
          <motion.div
            variants={staggerItem}
            className="mt-12 flex flex-wrap items-center justify-center gap-3"
          >
            {techBadges.map((badge, index) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -2 }}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 py-2",
                  "border border-border bg-card/80 backdrop-blur-sm",
                  "text-sm font-medium",
                  "transition-all duration-200",
                  "hover:border-spinach-500/50"
                )}
              >
                <badge.icon
                  className="h-4 w-4 text-spinach-600 dark:text-spinach-400"
                  aria-hidden="true"
                />
                {badge.name}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <div className="h-10 w-6 rounded-full border-2 border-current p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-spinach-500"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* Floating Particles Component - Subtle, reduced count */
function FloatingParticles() {
  // Reduced to 3 particles with slower, subtler movement
  const particles = useMemo(
    () => [
      { id: 0, size: 6, left: 15, delay: 0, duration: 30 },
      { id: 1, size: 8, left: 50, delay: 5, duration: 35 },
      { id: 2, size: 5, left: 85, delay: 10, duration: 32 },
    ],
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{
            y: "-100vh",
            opacity: [0, 0.3, 0.3, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
          style={{
            left: `${particle.left}%`,
            width: particle.size,
            height: particle.size,
          }}
          className="absolute"
        >
          <Leaf
            className="text-muted-foreground/20"
            style={{ width: "100%", height: "100%" }}
          />
        </motion.div>
      ))}
    </div>
  );
}
