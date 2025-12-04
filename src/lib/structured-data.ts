import type { CaseStudy } from "@/types";
import type { BlogPost } from "@/types";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://stackmcp.com";

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "JFP",
    jobTitle: "MCP & AI Automation Developer",
    url: baseUrl,
    sameAs: [
      "https://github.com/jfp99",
      "https://linkedin.com/in/jfp",
    ],
    knowsAbout: [
      "Model Context Protocol (MCP)",
      "AI Automation",
      "TypeScript",
      "Next.js",
      "Python",
      "Full-Stack Development",
    ],
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Stack MCP Super Agents",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description:
      "MCP server development and AI automation solutions. Building tools that make Claude genuinely useful.",
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      name: "JFP",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: `${baseUrl}/contact`,
    },
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Stack MCP Super Agents",
    url: baseUrl,
    description:
      "MCP server development and AI automation solutions. Building tools that make Claude genuinely useful.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function getCaseStudySchema(caseStudy: CaseStudy) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseStudy.title,
    description: caseStudy.description,
    author: {
      "@type": "Person",
      name: "JFP",
    },
    publisher: {
      "@type": "Organization",
      name: "Stack MCP Super Agents",
      url: baseUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/case-studies/${caseStudy.slug}`,
    },
    keywords: caseStudy.technologies.join(", "),
  };
}

export function getBlogPostSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Stack MCP Super Agents",
      url: baseUrl,
    },
    datePublished: post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  };
}

export function getServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "MCP Server Development",
    provider: {
      "@type": "Organization",
      name: "Stack MCP Super Agents",
    },
    description:
      "Custom MCP server development for Claude and enterprise AI integrations.",
    areaServed: "Worldwide",
    serviceType: "Software Development",
  };
}
