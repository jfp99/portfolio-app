export type SkillCategory =
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'DevOps'
  | 'AI/ML'
  | 'Tools'
  | 'Other'

export interface Skill {
  name: string
  category: SkillCategory
  icon?: string
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
}

export interface SkillGroup {
  category: SkillCategory
  skills: Skill[]
}
