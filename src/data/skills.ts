import type { SkillCategory, Stat } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "AI & Agents",
    skills: [
      { name: "AI Agents", level: "expert" },
      { name: "n8n", level: "expert" },
      { name: "Make (Integromat)", level: "advanced" },
      { name: "Claude API", level: "advanced" },
      { name: "OpenAI API", level: "advanced" },
      { name: "MCP Protocol", level: "advanced" },
    ],
  },
  {
    category: "Development",
    skills: [
      { name: "TypeScript", level: "advanced" },
      { name: "React", level: "advanced" },
      { name: "Next.js", level: "advanced" },
      { name: "Node.js", level: "intermediate" },
      { name: "Python", level: "intermediate" },
      { name: "REST APIs", level: "advanced" },
    ],
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "MongoDB", level: "advanced" },
      { name: "PostgreSQL", level: "intermediate" },
      { name: "Supabase", level: "advanced" },
      { name: "Vercel", level: "advanced" },
      { name: "Railway", level: "intermediate" },
      { name: "Webhooks", level: "advanced" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Claude Code", level: "expert" },
      { name: "Git", level: "advanced" },
      { name: "Docker", level: "intermediate" },
      { name: "Notion API", level: "advanced" },
      { name: "Slack API", level: "advanced" },
      { name: "Airtable", level: "intermediate" },
    ],
  },
];

export const stats: Stat[] = [
  {
    value: "10",
    label: "AI Agents Deployed",
    suffix: "+",
  },
  {
    value: "5",
    label: "Agent Templates",
    suffix: "+",
  },
  {
    value: "50",
    label: "Time Saved",
    suffix: "%",
  },
  {
    value: "24",
    label: "Automation",
    suffix: "/7",
  },
];
