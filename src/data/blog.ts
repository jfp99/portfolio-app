import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "getting-started-with-mcp-servers",
    title: "Getting Started with MCP Server Development",
    excerpt:
      "Learn how to build your first Model Context Protocol server and extend Claude's capabilities with custom integrations.",
    content: `
# Getting Started with MCP Server Development

The Model Context Protocol (MCP) is a powerful way to extend Claude's capabilities by connecting it to external services, databases, and APIs.

## What is MCP?

MCP allows you to create servers that expose "tools" to Claude. These tools can do anything - from fetching data to executing actions in your systems.

## Your First MCP Server

Let's build a simple MCP server that provides weather information...

(Full article content would go here)
    `,
    coverImage: "/images/blog/mcp-intro.webp",
    publishedAt: "2024-12-01",
    author: {
      name: "JFP",
      avatar: "/images/avatar.webp",
    },
    tags: ["MCP", "Claude", "Tutorial"],
    readingTime: "8 min read",
  },
  {
    id: "2",
    slug: "ai-automation-with-n8n",
    title: "Building AI-Powered Workflows with n8n",
    excerpt:
      "Discover how to create intelligent automation workflows that combine n8n's power with AI capabilities.",
    content: `
# Building AI-Powered Workflows with n8n

n8n is a powerful workflow automation tool that, when combined with AI, can transform how you handle repetitive tasks.

## Why n8n + AI?

The combination of n8n's extensive integration library with AI processing creates endless possibilities...

(Full article content would go here)
    `,
    coverImage: "/images/blog/n8n-ai.webp",
    publishedAt: "2024-11-15",
    author: {
      name: "JFP",
      avatar: "/images/avatar.webp",
    },
    tags: ["n8n", "AI", "Automation"],
    readingTime: "6 min read",
  },
  {
    id: "3",
    slug: "next-js-15-features",
    title: "What's New in Next.js 15: A Developer's Guide",
    excerpt:
      "Explore the latest features in Next.js 15 and how they can improve your web development workflow.",
    content: `
# What's New in Next.js 15: A Developer's Guide

Next.js 15 brings exciting new features that make building modern web applications even better.

## Key Features

- Improved App Router
- Better TypeScript support
- Enhanced performance

(Full article content would go here)
    `,
    coverImage: "/images/blog/nextjs-15.webp",
    publishedAt: "2024-11-01",
    author: {
      name: "JFP",
      avatar: "/images/avatar.webp",
    },
    tags: ["Next.js", "React", "Web Development"],
    readingTime: "5 min read",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter((post) => post.tags.includes(tag));
}
