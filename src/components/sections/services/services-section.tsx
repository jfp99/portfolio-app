"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Server, Bot, Code, Lightbulb, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem, cardHover } from "@/lib/animations";
import { services } from "@/data/services";

const iconMap: Record<string, typeof Server> = {
  server: Server,
  bot: Bot,
  code: Code,
  lightbulb: Lightbulb,
};

export function ServicesSection() {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Services
          </span>
          <h2
            id="services-heading"
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            What I Can Build For You
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            From MCP servers to full-stack applications, I deliver solutions
            that leverage AI to transform your business operations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                variants={staggerItem}
                whileHover="hover"
                initial="rest"
              >
                <motion.div
                  variants={cardHover}
                  className={cn(
                    "group h-full rounded-2xl border border-border bg-card p-6",
                    "transition-colors hover:border-primary/50"
                  )}
                >
                  {/* Icon */}
                  <div
                    className={cn(
                      "inline-flex h-12 w-12 items-center justify-center rounded-xl",
                      "gradient-brand"
                    )}
                  >
                    {Icon && (
                      <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="mt-4 space-y-2">
                    {service.features.slice(0, 3).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <Link
                    href={service.href}
                    className={cn(
                      "mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary",
                      "transition-colors hover:text-primary/80",
                      "group-hover:underline"
                    )}
                  >
                    Learn more
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
