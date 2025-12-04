"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/animations";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";

interface Props {
  post: BlogPost;
}

export function BlogPostContent({ post }: Props) {
  return (
    <article className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform group-hover:-translate-x-1"
              aria-hidden="true"
            />
            Back to Blog
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
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                <Tag className="h-3 w-3" aria-hidden="true" />
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-muted" />
              <span className="font-medium text-foreground">
                {post.author.name}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              {formatDate(post.publishedAt)}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {post.readingTime}
            </div>
          </div>
        </motion.header>

        {/* Cover Image */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="mt-10"
        >
          <div className="aspect-video overflow-hidden rounded-2xl bg-muted">
            <div className="flex h-full items-center justify-center gradient-brand opacity-20" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="prose prose-lg mt-12 max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-primary prose-pre:bg-muted"
        >
          <p className="lead text-xl text-muted-foreground">{post.excerpt}</p>

          <div
            className="mt-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>

        {/* Share & Actions */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 flex items-center justify-between border-t border-border pt-8"
        >
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-muted px-3 py-1 text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
          <button
            className={cn(
              "inline-flex items-center gap-2 rounded-lg px-4 py-2",
              "border border-border bg-card",
              "transition-colors hover:border-primary/50"
            )}
          >
            <Share2 className="h-4 w-4" aria-hidden="true" />
            Share
          </button>
        </motion.div>

        {/* Author Bio */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border border-border bg-card p-6"
        >
          <div className="flex items-start gap-4">
            <div className="h-16 w-16 flex-shrink-0 rounded-full bg-muted" />
            <div>
              <h3 className="font-semibold">Written by {post.author.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                MCP & AI Automation Developer. Building production-ready
                integrations for Claude and enterprise systems.
              </p>
              <Link
                href="/about"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary"
              >
                Learn more about me
              </Link>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 rounded-2xl gradient-brand p-8 text-center text-white"
        >
          <h2 className="text-2xl font-bold">Ready to Work Together?</h2>
          <p className="mt-2 text-white/80">
            Let&apos;s discuss how I can help with your project.
          </p>
          <Link
            href="/contact"
            className={cn(
              "mt-6 inline-flex items-center gap-2 rounded-lg px-6 py-3",
              "bg-white text-primary font-medium",
              "transition-opacity hover:opacity-90"
            )}
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </article>
  );
}
