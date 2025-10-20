export type ProjectCategory =
  | 'Web Application'
  | 'Mobile App'
  | 'AI/ML'
  | 'Open Source'
  | 'Design'
  | 'Other'

export type ProjectStatus = 'completed' | 'in-progress' | 'archived'

export interface Technology {
  name: string
  icon?: string
  category: 'frontend' | 'backend' | 'devops' | 'ai' | 'design' | 'database'
}

export interface ProjectHighlight {
  title: string
  description: string
}

export interface Project {
  id: string
  slug: string
  title: string
  description: string
  longDescription: string
  technologies: Technology[]
  category: ProjectCategory
  image: string
  images: string[]
  demoUrl?: string
  githubUrl?: string
  featured: boolean
  date: Date
  status: ProjectStatus
  highlights: ProjectHighlight[]
  metrics?: {
    label: string
    value: string
  }[]
}
