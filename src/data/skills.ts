import type { SkillCategory, Stat } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages & Frameworks",
    skills: [
      { name: "TypeScript", level: "advanced" },
      { name: "JavaScript", level: "advanced" },
      { name: "React", level: "advanced" },
      { name: "Next.js", level: "advanced" },
      { name: "Node.js", level: "intermediate" },
      { name: "Python", level: "intermediate" },
    ],
  },
  {
    category: "AI & Automation",
    skills: [
      { name: "MCP Protocol", level: "expert" },
      { name: "Claude API", level: "expert" },
      { name: "n8n", level: "advanced" },
      { name: "OpenAI API", level: "intermediate" },
      { name: "LangChain", level: "intermediate" },
      { name: "AI Agents", level: "advanced" },
    ],
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "MongoDB", level: "advanced" },
      { name: "PostgreSQL", level: "intermediate" },
      { name: "Supabase", level: "advanced" },
      { name: "Vercel", level: "advanced" },
      { name: "AWS", level: "intermediate" },
      { name: "Redis", level: "intermediate" },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", level: "advanced" },
      { name: "Docker", level: "intermediate" },
      { name: "CI/CD", level: "intermediate" },
      { name: "Playwright", level: "intermediate" },
      { name: "Vitest", level: "intermediate" },
      { name: "Claude Code", level: "expert" },
    ],
  },
];

export const stats: Stat[] = [
  {
    value: "5",
    label: "MCP Servers Built",
    suffix: "+",
  },
  {
    value: "4",
    label: "Projects Shipped",
    suffix: "",
  },
  {
    value: "50",
    label: "Productivity Boost",
    suffix: "%",
  },
  {
    value: "10",
    label: "Hours Saved Weekly",
    suffix: "h",
  },
];
