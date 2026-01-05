"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/lib/animations";
import { skillCategories } from "@/data/skills";

export function AboutSection() {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Bio */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              About Me
            </span>
            <h2
              id="about-heading"
              className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              AI Agents That{" "}
              <span className="text-spinach-500 dark:text-spinach-400">Work While You Sleep</span>
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                I build AI agents that automate the tedious parts of running a
                business. From qualifying leads to processing invoices to
                responding to emails &mdash; my agents handle it 24/7.
              </p>
              <p>
                Using platforms like n8n and Make, combined with Claude and GPT,
                I create workflow automations that actually work in production.
                No hype, just practical solutions that save time and money.
              </p>
              <p>
                Whether you need a custom agent built from scratch or want to
                deploy one of my ready-made templates, I&apos;m here to help
                you automate what matters.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 space-y-3">
              {[
                "10+ AI agents deployed in production",
                "n8n & Make automation expert",
                "Custom agents + ready-made templates",
                "Claude, GPT, and local LLM integration",
              ].map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-3 text-sm"
                >
                  <CheckCircle2
                    className="h-5 w-5 flex-shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className={cn(
                "group mt-8 inline-flex items-center gap-2 text-sm font-medium",
                "text-primary transition-colors hover:text-primary/80"
              )}
            >
              Learn more about me
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {skillCategories.map((category) => (
                <motion.div
                  key={category.category}
                  variants={staggerItem}
                  className="rounded-xl border border-border bg-card p-6"
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
                          skill.level === "advanced" &&
                            "bg-muted text-foreground",
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
