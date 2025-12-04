export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  heroImage: string;
  client: string;
  duration: string;
  year: number;
  category: "mcp-server" | "ai-automation" | "web-app" | "platform";
  technologies: string[];
  challenges: string[];
  solutions: string[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    avatar?: string;
  };
  gallery: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  href: string;
}

export interface Skill {
  name: string;
  icon?: string;
  level?: "expert" | "advanced" | "intermediate";
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  publishedAt: string;
  author: {
    name: string;
    avatar: string;
  };
  tags: string[];
  readingTime: string;
}

export interface NavItem {
  title: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}
