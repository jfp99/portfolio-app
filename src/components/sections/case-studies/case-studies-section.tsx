"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ExternalLink, Github, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { featuredCaseStudies } from "@/data/case-studies";
import { ProjectTiltCard } from "@/components/ui/tilt-card";

const categoryColors: Record<string, string> = {
  "ai-automation": "bg-spinach-500/10 text-spinach-600 dark:text-spinach-400 border-spinach-500/30",
  "web-app": "bg-muted text-foreground border-border",
  platform: "bg-muted text-foreground border-border",
};

const categoryLabels: Record<string, string> = {
  "ai-automation": "AI Agent",
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
              className={cn(index === 0 && "md:col-span-2")}
            >
              <ProjectTiltCard featured={index === 0}>
                <Link
                  href={`/case-studies/${caseStudy.slug}`}
                  className="group block"
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
                        "relative aspect-video overflow-hidden rounded-xl bg-muted/50 border border-spinach-500/20",
                        index === 0 && "md:aspect-[4/3]"
                      )}
                    >
                      {/* Decorative Circuit Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <defs>
                            <pattern id={`circuit-${caseStudy.id}`} patternUnits="userSpaceOnUse" width="20" height="20">
                              <circle cx="10" cy="10" r="1" fill="currentColor" className="text-spinach-500"/>
                              <line x1="10" y1="10" x2="20" y2="10" stroke="currentColor" className="text-spinach-500" strokeWidth="0.5"/>
                              <line x1="10" y1="10" x2="10" y2="20" stroke="currentColor" className="text-spinach-500" strokeWidth="0.5"/>
                            </pattern>
                          </defs>
                          <rect width="100" height="100" fill={`url(#circuit-${caseStudy.id})`}/>
                        </svg>
                      </div>

                      {/* Center Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-spinach-600 shadow-lg shadow-black/10">
                          <Sparkles className="h-8 w-8 text-white" />
                        </div>
                      </div>

                      {/* Featured Badge */}
                      {index === 0 && (
                        <div className="absolute top-4 right-4 rounded-full bg-spinach-500 px-3 py-1 text-xs font-medium text-white">
                          Featured
                        </div>
                      )}
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

                      <h3 className="mt-4 text-xl font-semibold transition-colors group-hover:text-spinach-600 dark:group-hover:text-spinach-400 sm:text-2xl">
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
                            className="rounded-md bg-spinach-500/10 border border-spinach-500/20 px-2 py-1 text-xs font-medium text-spinach-600 dark:text-spinach-400"
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
                            <div className="text-lg font-bold text-spinach-500 dark:text-spinach-400">
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
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-spinach-600 dark:text-spinach-400 group-hover:underline">
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
              </ProjectTiltCard>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
