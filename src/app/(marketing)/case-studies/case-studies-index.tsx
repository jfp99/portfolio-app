"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ExternalLink, Github, Filter } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer, staggerItem, cardHover } from "@/lib/animations";
import { caseStudies } from "@/data/case-studies";

const categories = [
  { value: "all", label: "All Agents" },
  { value: "ai-automation", label: "AI Agents" },
];

const categoryColors: Record<string, string> = {
  "ai-automation": "bg-spinach-500/10 text-spinach-600 dark:text-spinach-400 border-spinach-500/30",
};

const categoryLabels: Record<string, string> = {
  "ai-automation": "AI Agent",
};

export function CaseStudiesIndex() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCaseStudies =
    activeFilter === "all"
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === activeFilter);

  return (
    <section className="py-24 sm:py-32" aria-labelledby="case-studies-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Portfolio
          </span>
          <h1
            id="case-studies-heading"
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Case Studies
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Real AI agents I&apos;ve built for clients. Each one solves a specific
            business problem and runs in production 24/7.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-2"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveFilter(category.value)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium",
                "transition-all duration-200",
                activeFilter === category.value
                  ? "bg-spinach-600 text-white"
                  : "border border-border bg-card hover:border-primary/50"
              )}
            >
              {category.value === "all" && (
                <Filter className="h-4 w-4" aria-hidden="true" />
              )}
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-12 grid gap-8 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredCaseStudies.map((caseStudy) => (
              <motion.article
                key={caseStudy.id}
                variants={staggerItem}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: 20 }}
                layout
                whileHover="hover"
              >
                <motion.div variants={cardHover}>
                  <Link
                    href={`/case-studies/${caseStudy.slug}`}
                    className={cn(
                      "group block overflow-hidden rounded-2xl border border-border bg-card",
                      "transition-colors hover:border-primary/50"
                    )}
                  >
                    <div className="p-6">
                      {/* Image Placeholder */}
                      <div className="relative aspect-video overflow-hidden rounded-xl bg-muted">
                        <div className="absolute inset-0 flex items-center justify-center bg-spinach-500/10" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-6xl font-bold text-muted-foreground/20">
                            {caseStudy.title.charAt(0)}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="mt-6">
                        {/* Category & Year */}
                        <div className="flex items-center gap-3">
                          <span
                            className={cn(
                              "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
                              categoryColors[caseStudy.category]
                            )}
                          >
                            {categoryLabels[caseStudy.category]}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {caseStudy.year}
                          </span>
                        </div>

                        <h2 className="mt-4 text-xl font-semibold group-hover:text-primary sm:text-2xl">
                          {caseStudy.title}
                        </h2>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {caseStudy.subtitle}
                        </p>
                        <p className="mt-3 text-muted-foreground line-clamp-2">
                          {caseStudy.description}
                        </p>

                        {/* Technologies */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {caseStudy.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md bg-muted px-2 py-1 text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                          {caseStudy.technologies.length > 4 && (
                            <span className="rounded-md bg-muted px-2 py-1 text-xs font-medium">
                              +{caseStudy.technologies.length - 4}
                            </span>
                          )}
                        </div>

                        {/* Results Preview */}
                        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                          {caseStudy.results.slice(0, 4).map((result) => (
                            <div key={result.metric}>
                              <div className="text-lg font-bold text-primary">
                                {result.value}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {result.metric}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="mt-6 flex items-center gap-4">
                          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:underline">
                            View case study
                            <ArrowRight
                              className="h-4 w-4 transition-transform group-hover:translate-x-1"
                              aria-hidden="true"
                            />
                          </span>
                          {caseStudy.githubUrl && (
                            <a
                              href={caseStudy.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                            >
                              <Github className="h-4 w-4" aria-hidden="true" />
                              GitHub
                            </a>
                          )}
                          {caseStudy.liveUrl && (
                            <a
                              href={caseStudy.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                            >
                              <ExternalLink
                                className="h-4 w-4"
                                aria-hidden="true"
                              />
                              Live
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredCaseStudies.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground">
              No projects found for this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
