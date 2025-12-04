"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem, cardHover } from "@/lib/animations";
import { featuredCaseStudies } from "@/data/case-studies";

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

export function CaseStudiesSection() {
  return (
    <section
      className="bg-muted/30 py-24 sm:py-32"
      aria-labelledby="case-studies-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-4 sm:flex-row"
        >
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Case Studies
            </span>
            <h2
              id="case-studies-heading"
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Featured Projects
            </h2>
          </div>
          <Link
            href="/case-studies"
            className={cn(
              "group inline-flex items-center gap-2 text-sm font-medium",
              "text-primary transition-colors hover:text-primary/80"
            )}
          >
            View all projects
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-8 md:grid-cols-2"
        >
          {featuredCaseStudies.map((caseStudy, index) => (
            <motion.article
              key={caseStudy.id}
              variants={staggerItem}
              whileHover="hover"
              initial="rest"
              className={cn(index === 0 && "md:col-span-2")}
            >
              <motion.div variants={cardHover}>
                <Link
                  href={`/case-studies/${caseStudy.slug}`}
                  className={cn(
                    "group block overflow-hidden rounded-2xl border border-border bg-card",
                    "transition-colors hover:border-primary/50"
                  )}
                >
                  <div
                    className={cn(
                      "grid gap-6 p-6",
                      index === 0 ? "md:grid-cols-2" : ""
                    )}
                  >
                    {/* Image Placeholder */}
                    <div
                      className={cn(
                        "relative aspect-video overflow-hidden rounded-xl bg-muted",
                        index === 0 && "md:aspect-[4/3]"
                      )}
                    >
                      <div className="absolute inset-0 flex items-center justify-center gradient-brand opacity-10" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-bold text-muted-foreground/20">
                          {caseStudy.title.charAt(0)}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center">
                      {/* Category Badge */}
                      <span
                        className={cn(
                          "inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-medium",
                          categoryColors[caseStudy.category]
                        )}
                      >
                        {categoryLabels[caseStudy.category]}
                      </span>

                      <h3 className="mt-4 text-xl font-semibold group-hover:text-primary sm:text-2xl">
                        {caseStudy.title}
                      </h3>
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
                        {caseStudy.results.slice(0, index === 0 ? 4 : 2).map((result) => (
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
        </motion.div>
      </div>
    </section>
  );
}
