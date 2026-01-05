"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer, staggerItem, cardHover } from "@/lib/animations";
import { blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";

export function BlogIndex() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Blog
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Articles & Insights
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Thoughts on MCP development, AI automation, and building modern web
            applications.
          </p>
        </motion.div>

        {/* Featured Post */}
        {blogPosts.length > 0 && (
          <motion.article
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="mt-16"
          >
            <Link
              href={`/blog/${blogPosts[0].slug}`}
              className="group block overflow-hidden rounded-3xl border border-border bg-card"
            >
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="aspect-video bg-muted lg:aspect-auto lg:h-full">
                  <div className="flex h-full items-center justify-center bg-spinach-500/10" />
                </div>
                {/* Content */}
                <div className="p-8 lg:p-12">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      <Tag className="h-3 w-3" aria-hidden="true" />
                      {blogPosts[0].tags[0]}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" aria-hidden="true" />
                      {formatDate(blogPosts[0].publishedAt)}
                    </span>
                  </div>
                  <h2 className="mt-4 text-2xl font-bold group-hover:text-primary sm:text-3xl">
                    {blogPosts[0].title}
                  </h2>
                  <p className="mt-4 text-muted-foreground line-clamp-3">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" aria-hidden="true" />
                      {blogPosts[0].readingTime}
                    </div>
                    <span className="inline-flex items-center gap-1 font-medium text-primary group-hover:underline">
                      Read article
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>
        )}

        {/* Blog Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {blogPosts.slice(1).map((post) => (
            <motion.article
              key={post.id}
              variants={staggerItem}
              whileHover="hover"
              initial="rest"
            >
              <motion.div variants={cardHover}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-border bg-card"
                >
                  {/* Image */}
                  <div className="aspect-video bg-muted">
                    <div className="flex h-full items-center justify-center bg-spinach-500/10" />
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {post.tags[0]}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {formatDate(post.publishedAt)}
                      </span>
                    </div>
                    <h2 className="mt-4 text-lg font-semibold group-hover:text-primary">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {post.readingTime}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                        Read
                        <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-border bg-card p-8 text-center sm:p-12"
        >
          <h2 className="text-2xl font-bold">Stay Updated</h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Subscribe to get notified about new articles on MCP development, AI
            automation, and web development.
          </p>
          <form className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="your@email.com"
              className={cn(
                "flex-1 rounded-lg border border-input bg-background px-4 py-3",
                "focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              )}
              required
            />
            <button
              type="submit"
              className={cn(
                "rounded-lg bg-spinach-600 hover:bg-spinach-700 px-6 py-3 font-medium text-white",
                "transition-colors"
              )}
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
