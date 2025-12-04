"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Calendar,
  Clock,
  CheckCircle2,
  Lightbulb,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/lib/animations";
import { caseStudies } from "@/data/case-studies";
import type { CaseStudy } from "@/types";

interface Props {
  caseStudy: CaseStudy;
}

const categoryColors: Record<string, string> = {
  "mcp-server": "bg-violet-500/10 text-violet-500 border-violet-500/20",
  "ai-automation": "bg-blue-500/10 text-blue-500 border-blue-500/20",
  "web-app": "bg-green-500/10 text-green-500 border-green-500/20",
  platform: "bg-orange-500/10 text-orange-500 border-orange-500/20",
};

const categoryLabels: Record<string, string> = {
  "mcp-server": "MCP Server",
  "ai-automation": "AI Automation",
  "web-app": "Web App",
  platform: "Platform",
};

export function CaseStudyDetail({ caseStudy }: Props) {
  const currentIndex = caseStudies.findIndex((cs) => cs.id === caseStudy.id);
  const prevCaseStudy = caseStudies[currentIndex - 1];
  const nextCaseStudy = caseStudies[currentIndex + 1];

  return (
    <article className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform group-hover:-translate-x-1"
              aria-hidden="true"
            />
            Back to Case Studies
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="mt-8"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={cn(
                "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
                categoryColors[caseStudy.category]
              )}
            >
              {categoryLabels[caseStudy.category]}
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              {caseStudy.year}
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {caseStudy.duration}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {caseStudy.title}
          </h1>
          <p className="mt-2 text-xl text-muted-foreground">
            {caseStudy.subtitle}
          </p>

          {/* Links */}
          <div className="mt-6 flex flex-wrap gap-4">
            {caseStudy.liveUrl && (
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 rounded-lg px-4 py-2",
                  "gradient-brand text-white",
                  "transition-opacity hover:opacity-90"
                )}
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                View Live
              </a>
            )}
            {caseStudy.githubUrl && (
              <a
                href={caseStudy.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 rounded-lg px-4 py-2",
                  "border border-border bg-card",
                  "transition-colors hover:border-primary/50"
                )}
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                View Source
              </a>
            )}
          </div>
        </motion.header>

        {/* Hero Image Placeholder */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="mt-12"
        >
          <div className="aspect-video overflow-hidden rounded-2xl border border-border bg-muted">
            <div className="flex h-full items-center justify-center gradient-brand opacity-10" />
          </div>
        </motion.div>

        {/* Description */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold">Overview</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {caseStudy.description}
          </p>
        </motion.section>

        {/* Technologies */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.35 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold">Technologies Used</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {caseStudy.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Challenges & Solutions */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Challenges */}
          <motion.section
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
                <Target className="h-5 w-5 text-orange-500" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold">Challenges</h2>
            </div>
            <ul className="mt-6 space-y-4">
              {caseStudy.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-xs font-bold text-orange-500">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Solutions */}
          <motion.section
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                <Lightbulb className="h-5 w-5 text-green-500" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold">Solutions</h2>
            </div>
            <ul className="mt-6 space-y-4">
              {caseStudy.solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-muted-foreground">{solution}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        {/* Results */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold">Results</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {caseStudy.results.map((result) => (
              <motion.div
                key={result.metric}
                variants={staggerItem}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <div className="text-3xl font-bold text-gradient-brand">
                  {result.value}
                </div>
                <div className="mt-1 font-medium">{result.metric}</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {result.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonial */}
        {caseStudy.testimonial && (
          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="rounded-2xl gradient-brand p-8 text-white">
              <blockquote className="text-lg italic">
                &ldquo;{caseStudy.testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                {caseStudy.testimonial.avatar && (
                  <div className="h-12 w-12 rounded-full bg-white/20" />
                )}
                <div>
                  <div className="font-medium">
                    {caseStudy.testimonial.author}
                  </div>
                  <div className="text-sm text-white/70">
                    {caseStudy.testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Navigation */}
        <motion.nav
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 flex items-center justify-between border-t border-border pt-8"
          aria-label="Case study navigation"
        >
          {prevCaseStudy ? (
            <Link
              href={`/case-studies/${prevCaseStudy.slug}`}
              className="group"
            >
              <span className="text-sm text-muted-foreground">Previous</span>
              <div className="mt-1 flex items-center gap-2 font-medium group-hover:text-primary">
                <ArrowLeft
                  className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                  aria-hidden="true"
                />
                {prevCaseStudy.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextCaseStudy ? (
            <Link
              href={`/case-studies/${nextCaseStudy.slug}`}
              className="group text-right"
            >
              <span className="text-sm text-muted-foreground">Next</span>
              <div className="mt-1 flex items-center justify-end gap-2 font-medium group-hover:text-primary">
                {nextCaseStudy.title}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </div>
            </Link>
          ) : (
            <div />
          )}
        </motion.nav>
      </div>
    </article>
  );
}
