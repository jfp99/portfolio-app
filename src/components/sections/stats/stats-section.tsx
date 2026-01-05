"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { useAnimatedCounter } from "@/hooks/use-animated-counter";
import { stats } from "@/data/skills";

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const count = useAnimatedCounter(ref, { end: numericValue, duration: 2000 });

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="py-24 sm:py-32" aria-label="Statistics">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12"
        >
          {/* Background Decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="text-center"
              >
                <div className="text-4xl font-bold text-spinach-500 dark:text-spinach-400 sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
