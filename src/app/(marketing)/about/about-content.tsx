"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  MapPin,
  Mail,
  Github,
  Linkedin,
  Download,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/lib/animations";
import { skillCategories } from "@/data/skills";

const timeline = [
  {
    year: "2025",
    title: "AI Agents & Automation Studio",
    description:
      "Launched EPNR Automation Studio, focusing on building custom AI agents and ready-to-deploy templates. Helping businesses automate workflows with n8n, Make, and AI integrations.",
  },
  {
    year: "2024",
    title: "AI Automation Deep Dive",
    description:
      "Went deep into workflow automation and AI agents. Built production agents for lead qualification, email triage, invoice processing, and more. Mastered n8n and Make platforms.",
  },
  {
    year: "2023",
    title: "Development Journey Begins",
    description:
      "Started learning modern web development with React, Next.js, and TypeScript. Discovered the power of automation to solve real business problems.",
  },
];

const values = [
  {
    title: "Quality Over Quantity",
    description:
      "Every project receives meticulous attention to detail. I believe in delivering exceptional work that stands the test of time.",
  },
  {
    title: "Continuous Learning",
    description:
      "Technology evolves rapidly. I stay at the forefront by constantly learning and experimenting with new tools and techniques.",
  },
  {
    title: "Clear Communication",
    description:
      "Great projects are built on clear communication. I keep clients informed and involved throughout the development process.",
  },
  {
    title: "Results-Driven",
    description:
      "I focus on delivering measurable results. Whether it's time saved, efficiency gained, or problems solved.",
  },
];

export function AboutPageContent() {
  return (
    <div className="py-24 sm:py-32">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Left - Image */}
          <motion.div variants={fadeInLeft} className="relative">
            <div className="aspect-square overflow-hidden rounded-3xl bg-muted">
              <div className="flex h-full items-center justify-center bg-spinach-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl font-bold text-muted-foreground/20">
                  JFP
                </span>
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 rounded-2xl border border-border bg-card p-4 shadow-lg">
              <div className="text-3xl font-bold text-spinach-500 dark:text-spinach-400">10+</div>
              <div className="text-sm text-muted-foreground">AI Agents Deployed</div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div variants={fadeInRight} className="flex flex-col justify-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              About Me
            </span>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Building AI Agents That{" "}
              <span className="text-spinach-500 dark:text-spinach-400">Actually Work</span>
            </h1>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                I build AI agents that handle the repetitive work so you don&apos;t
                have to. From lead qualification to email triage to invoice
                processing &mdash; my agents work 24/7, never take breaks, and
                never complain.
              </p>
              <p>
                Using n8n, Make, and AI models like Claude and GPT, I create
                practical automation solutions that save real time and money.
                Whether you need a custom agent or a ready-to-deploy template,
                I&apos;ve got you covered.
              </p>
            </div>

            {/* Quick Info */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>France</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>hello@stackmcp.dev</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/jfp99"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex h-10 w-10 items-center justify-center rounded-lg",
                  "border border-border bg-card",
                  "transition-colors hover:border-primary/50 hover:text-primary"
                )}
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex h-10 w-10 items-center justify-center rounded-lg",
                  "border border-border bg-card",
                  "transition-colors hover:border-primary/50 hover:text-primary"
                )}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className={cn(
                  "inline-flex items-center gap-2 rounded-lg px-6 py-3",
                  "bg-spinach-600 text-white font-medium",
                  "transition-colors hover:bg-spinach-700"
                )}
              >
                Get In Touch
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <button
                className={cn(
                  "inline-flex items-center gap-2 rounded-lg px-6 py-3",
                  "border border-border bg-card font-medium",
                  "transition-colors hover:border-primary/50"
                )}
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="mt-32 bg-muted/30 py-24" aria-labelledby="skills-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Expertise
            </span>
            <h2
              id="skills-heading"
              className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Skills & Technologies
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.category}
                variants={staggerItem}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {category.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={cn(
                        "inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-medium",
                        skill.level === "expert" &&
                          "bg-primary/10 text-primary border border-primary/20",
                        skill.level === "advanced" && "bg-muted text-foreground",
                        skill.level === "intermediate" &&
                          "bg-muted text-muted-foreground"
                      )}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24" aria-labelledby="journey-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Journey
            </span>
            <h2
              id="journey-heading"
              className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              My Path
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 space-y-8"
          >
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                variants={staggerItem}
                className="relative flex gap-6"
              >
                {/* Timeline Line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-[39px] top-16 h-full w-px bg-border" />
                )}
                {/* Year Badge */}
                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-spinach-600 text-white font-bold">
                  {item.year}
                </div>
                {/* Content */}
                <div className="flex-1 rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 py-24" aria-labelledby="values-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Philosophy
            </span>
            <h2
              id="values-heading"
              className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              How I Work
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-2"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={staggerItem}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2
                    className="h-6 w-6 flex-shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-semibold">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl bg-spinach-600 p-8 text-center text-white sm:p-16"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to Automate?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Let&apos;s discuss which workflows you can automate. Whether you need
              a custom AI agent or want to deploy a ready-made template, I&apos;m
              here to help.
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
                <Calendar className="h-5 w-5" aria-hidden="true" />
                Book a Call
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "inline-flex items-center gap-2 rounded-lg px-6 py-3",
                  "border-2 border-white/30 font-medium",
                  "transition-colors hover:bg-white/10"
                )}
              >
                Send a Message
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
