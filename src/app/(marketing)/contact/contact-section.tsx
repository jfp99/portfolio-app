"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Mail, MapPin, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  subject: z.enum(["mcp-development", "ai-automation", "consulting", "other"], {
    message: "Please select a subject",
  }),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const subjects = [
  { value: "mcp-development", label: "MCP Server Development" },
  { value: "ai-automation", label: "AI Automation" },
  { value: "consulting", label: "Technical Consulting" },
  { value: "other", label: "Other" },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@stackmcp.dev",
    href: "mailto:hello@stackmcp.dev",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "France",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
  },
];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 sm:py-32" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Contact
          </span>
          <h1
            id="contact-heading"
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Let&apos;s Work Together
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Have a project in mind? I&apos;d love to hear about it. Fill out the
            form below and I&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          {/* Contact Info */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            className="space-y-8 lg:col-span-1"
          >
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold">Get In Touch</h2>
              <div className="mt-6 space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon
                        className="h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold">What to Expect</h2>
              <ul className="mt-4 space-y-3">
                {[
                  "Response within 24 hours",
                  "Free initial consultation",
                  "Detailed project proposal",
                  "Transparent pricing",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle2
                      className="h-4 w-4 text-primary"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8"
              noValidate
            >
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium"
                  >
                    Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    autoComplete="name"
                    {...register("name")}
                    className={cn(
                      "mt-2 block w-full rounded-lg border bg-background px-4 py-3 text-sm",
                      "transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
                      errors.name ? "border-destructive" : "border-input"
                    )}
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-destructive">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium"
                  >
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    {...register("email")}
                    className={cn(
                      "mt-2 block w-full rounded-lg border bg-background px-4 py-3 text-sm",
                      "transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
                      errors.email ? "border-destructive" : "border-input"
                    )}
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium"
                  >
                    Company <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    autoComplete="organization"
                    {...register("company")}
                    className={cn(
                      "mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-sm",
                      "transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    )}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium"
                  >
                    Subject <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="subject"
                    {...register("subject")}
                    className={cn(
                      "mt-2 block w-full rounded-lg border bg-background px-4 py-3 text-sm",
                      "transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
                      errors.subject ? "border-destructive" : "border-input"
                    )}
                    aria-invalid={errors.subject ? "true" : "false"}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject) => (
                      <option key={subject.value} value={subject.value}>
                        {subject.label}
                      </option>
                    ))}
                  </select>
                  {errors.subject && (
                    <p id="subject-error" className="mt-1 text-sm text-destructive">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register("message")}
                    className={cn(
                      "mt-2 block w-full rounded-lg border bg-background px-4 py-3 text-sm",
                      "transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
                      "resize-none",
                      errors.message ? "border-destructive" : "border-input"
                    )}
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit */}
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "inline-flex w-full items-center justify-center gap-2",
                    "h-12 rounded-lg text-base font-medium",
                    "gradient-brand text-white",
                    "transition-all duration-200",
                    "hover:opacity-90 hover:shadow-lg hover:shadow-primary/25",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                    "disabled:cursor-not-allowed disabled:opacity-50"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="mt-4 flex items-center gap-2 rounded-lg bg-green-500/10 p-4 text-green-600 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                  <p>Thank you! Your message has been sent. I&apos;ll get back to you soon.</p>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mt-4 flex items-center gap-2 rounded-lg bg-destructive/10 p-4 text-destructive">
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  <p>Something went wrong. Please try again or email me directly.</p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
