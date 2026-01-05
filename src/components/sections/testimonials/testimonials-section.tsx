"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight, Star, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  content: string;
  rating: number;
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow AI",
    content:
      "The lead qualification agent transformed our sales workflow completely. What used to take hours of manual review now happens in minutes. Our team can finally focus on closing deals instead of sorting leads.",
    rating: 5,
    featured: true,
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    role: "Product Manager",
    company: "DataSync Labs",
    content:
      "Working with EPNR was a game-changer. The email triage agent handles 200+ messages daily without breaking a sweat. We're responding to customers 3x faster now.",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily Watson",
    role: "Engineering Lead",
    company: "CloudNine Systems",
    content:
      "The attention to detail in building our custom agent was impressive. Clean workflows, great documentation, and fantastic communication throughout. The n8n setup runs flawlessly.",
    rating: 5,
  },
  {
    id: "4",
    name: "David Kim",
    role: "Founder",
    company: "AutomateX",
    content:
      "EPNR delivered exactly what we needed - an invoice processing agent that saves us 20+ hours weekly. The ROI was visible within the first month.",
    rating: 5,
    featured: true,
  },
  {
    id: "5",
    name: "Lisa Thompson",
    role: "Head of Operations",
    company: "GrowthStack",
    content:
      "From concept to deployment in just 3 weeks. The customer support agent handles 40% of tickets automatically now. It's become essential to our daily operations.",
    rating: 5,
  },
];

/**
 * Testimonials Section with Auto-rotating Carousel
 *
 * Features:
 * - Auto-rotation with pause on hover
 * - Manual navigation with arrows
 * - Dot indicators
 * - Glassmorphism design
 * - Animated transitions
 */
export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  // Auto-rotate testimonials
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goToIndex = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  const currentTestimonial = testimonials[currentIndex];

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section
      className="relative py-24 overflow-hidden"
      aria-label="Testimonials"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-muted/30" />
        {/* Decorative Elements - subtle and muted */}
        <div className="absolute left-0 top-1/4 h-64 w-64 rounded-full bg-muted/10 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-64 w-64 rounded-full bg-muted/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4 border border-spinach-500/30 bg-spinach-500/10"
          >
            <Quote className="h-4 w-4 text-spinach-600 dark:text-spinach-400" />
            <span className="text-sm font-medium text-spinach-600 dark:text-spinach-400">
              Client Testimonials
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold sm:text-4xl lg:text-5xl"
          >
            Trusted by{" "}
            <span className="text-spinach-500 dark:text-spinach-400">Growing Teams</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            See what clients say about working with EPNR
          </motion.p>
        </div>

        {/* Testimonial Carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Testimonial Card */}
          <div className="relative min-h-[320px] sm:min-h-[280px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentTestimonial.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className={cn(
                  "absolute inset-0 rounded-3xl p-8 sm:p-10",
                  "glass border border-border/50",
                  "shadow-xl shadow-spinach-500/5"
                )}
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8 sm:left-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-spinach-600 shadow-lg shadow-black/10">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-6">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-5 w-5",
                          i < currentTestimonial.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-muted text-muted"
                        )}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg sm:text-xl leading-relaxed mb-8">
                    &ldquo;{currentTestimonial.content}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-spinach-600 text-white font-bold text-lg">
                      {currentTestimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-lg">
                        {currentTestimonial.name}
                      </div>
                      <div className="text-muted-foreground">
                        {currentTestimonial.role} at {currentTestimonial.company}
                      </div>
                    </div>
                    {currentTestimonial.featured && (
                      <div className="ml-auto hidden sm:flex items-center gap-1 rounded-full px-3 py-1 bg-spinach-500/10 text-spinach-600 dark:text-spinach-400 text-sm font-medium">
                        <Leaf className="h-3 w-3" />
                        Featured
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={goToPrev}
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-full",
                "border border-border bg-card",
                "transition-all duration-200",
                "hover:border-spinach-500/50 hover:bg-spinach-500/5",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spinach-500"
              )}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    index === currentIndex
                      ? "w-8 bg-spinach-500"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === currentIndex ? "true" : undefined}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-full",
                "border border-border bg-card",
                "transition-all duration-200",
                "hover:border-spinach-500/50 hover:bg-spinach-500/5",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spinach-500"
              )}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Pause Indicator */}
          <AnimatePresence>
            {isPaused && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground"
              >
                Paused
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
