"use client";

import { Fragment } from "react";
import { motion } from "motion/react";

const stats = [
  { value: "10+", label: "AI Agents Deployed" },
  { value: "50%", label: "Time Saved" },
  { value: "24/7", label: "Automation" },
  { value: "n8n", label: "Certified" },
];

/**
 * Stats Bar Component (kilo.ai style)
 *
 * A clean horizontal stats bar that sits between Hero and Case Studies
 * to establish credibility and trust.
 */
export function StatsBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-y border-border bg-card/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6 py-8 sm:flex-row sm:gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <Fragment key={stat.label}>
              <div className="text-center">
                <div className="text-2xl font-bold text-spinach-500 dark:text-spinach-400 md:text-3xl">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground md:text-sm">
                  {stat.label}
                </div>
              </div>
              {index < stats.length - 1 && (
                <div className="hidden h-10 w-px bg-border md:block" aria-hidden="true" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default StatsBar;
