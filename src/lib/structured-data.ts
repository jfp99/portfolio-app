import type { CaseStudy } from "@/types";
import type { BlogPost } from "@/types";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://epnr.dev";

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "EPNR",
    jobTitle: "AI Agents & Automation Developer",
    url: baseUrl,
    sameAs: [
      "https://github.com/jfp99",
      "https://linkedin.com/in/jfp",
    ],
    knowsAbout: [
      "AI Agents",
      "Workflow Automation",
      "n8n",
      "Make",
      "TypeScript",
      "Next.js",
      "Claude API",
      "OpenAI",
    ],
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "EPNR Automation Studio",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description:
      "Custom AI agents and workflow automation that work 24/7. From ready-to-deploy templates to fully tailored solutions.",
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      name: "EPNR",
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
    "@id": `${baseUrl}/#website`,
    name: "EPNR Automation Studio",
    url: baseUrl,
    description:
      "Custom AI agents and workflow automation that work 24/7. Automate what matters.",
    publisher: {
      "@id": `${baseUrl}/#organization`,
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
      name: "EPNR",
    },
    publisher: {
      "@type": "Organization",
      name: "EPNR Automation Studio",
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
      name: "EPNR Automation Studio",
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
    name: "AI Agents & Workflow Automation",
    provider: {
      "@type": "Organization",
      name: "EPNR Automation Studio",
    },
    description:
      "Custom AI agents and workflow automation using n8n, Make, Claude, and GPT.",
    areaServed: "Worldwide",
    serviceType: "AI Automation Development",
  };
}
