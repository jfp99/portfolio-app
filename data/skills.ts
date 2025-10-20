import { SkillGroup } from '@/types/skill'

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', category: 'Frontend', proficiency: 'expert' },
      { name: 'Next.js', category: 'Frontend', proficiency: 'expert' },
      { name: 'TypeScript', category: 'Frontend', proficiency: 'expert' },
      { name: 'JavaScript', category: 'Frontend', proficiency: 'expert' },
      { name: 'TailwindCSS', category: 'Frontend', proficiency: 'expert' },
      { name: 'HTML/CSS', category: 'Frontend', proficiency: 'expert' },
      { name: 'Framer Motion', category: 'Frontend', proficiency: 'advanced' },
      { name: 'Radix UI', category: 'Frontend', proficiency: 'advanced' },
      { name: 'React Hook Form', category: 'Frontend', proficiency: 'advanced' },
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', category: 'Backend', proficiency: 'expert' },
      { name: 'NextAuth', category: 'Backend', proficiency: 'advanced' },
      { name: 'API Development', category: 'Backend', proficiency: 'expert' },
      { name: 'Authentication', category: 'Backend', proficiency: 'expert' },
      { name: 'REST APIs', category: 'Backend', proficiency: 'expert' },
      { name: 'Stripe', category: 'Backend', proficiency: 'advanced' },
      { name: 'SendGrid', category: 'Backend', proficiency: 'advanced' },
      { name: 'Twilio', category: 'Backend', proficiency: 'intermediate' },
    ]
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB', category: 'Database', proficiency: 'expert' },
      { name: 'Mongoose', category: 'Database', proficiency: 'expert' },
      { name: 'Redis', category: 'Database', proficiency: 'advanced' },
      { name: 'Database Design', category: 'Database', proficiency: 'expert' },
    ]
  },
  {
    category: 'AI/ML',
    skills: [
      { name: 'Claude AI (Anthropic)', category: 'AI/ML', proficiency: 'advanced' },
      { name: 'OpenAI GPT', category: 'AI/ML', proficiency: 'advanced' },
      { name: 'Prompt Engineering', category: 'AI/ML', proficiency: 'advanced' },
      { name: 'AI Integration', category: 'AI/ML', proficiency: 'advanced' },
    ]
  },
  {
    category: 'DevOps',
    skills: [
      { name: 'Git', category: 'DevOps', proficiency: 'expert' },
      { name: 'GitHub', category: 'DevOps', proficiency: 'expert' },
      { name: 'Vercel', category: 'DevOps', proficiency: 'advanced' },
      { name: 'CI/CD', category: 'DevOps', proficiency: 'advanced' },
      { name: 'Testing (Vitest)', category: 'DevOps', proficiency: 'advanced' },
      { name: 'Playwright E2E', category: 'DevOps', proficiency: 'intermediate' },
    ]
  },
  {
    category: 'Tools',
    skills: [
      { name: 'VS Code', category: 'Tools', proficiency: 'expert' },
      { name: 'Postman', category: 'Tools', proficiency: 'advanced' },
      { name: 'Figma', category: 'Tools', proficiency: 'intermediate' },
      { name: 'npm/pnpm', category: 'Tools', proficiency: 'expert' },
      { name: 'ESLint', category: 'Tools', proficiency: 'advanced' },
      { name: 'Prettier', category: 'Tools', proficiency: 'advanced' },
    ]
  },
]

export function getAllSkills() {
  return skillGroups
}

export function getSkillsByCategory(category: string) {
  return skillGroups.find(group => group.category === category)?.skills || []
}
