import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: '1',
    slug: 'hiring-app',
    title: 'Hi-Ring - Recruitment Platform',
    description: 'Full-featured recruitment platform with CV parsing, candidate management, and automated email campaigns.',
    longDescription: `A comprehensive recruitment management system designed to streamline the hiring process for modern companies.
    Features intelligent CV parsing, candidate tracking, interview scheduling, and automated email campaigns.
    Built with a focus on performance, security, and user experience.`,
    technologies: [
      { name: 'Next.js 15', category: 'frontend' },
      { name: 'React 19', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'MongoDB', category: 'database' },
      { name: 'NextAuth', category: 'backend' },
      { name: 'SendGrid', category: 'backend' },
      { name: 'PDF Parse', category: 'backend' },
      { name: 'Framer Motion', category: 'frontend' },
      { name: 'Radix UI', category: 'frontend' },
      { name: 'TailwindCSS', category: 'frontend' },
      { name: 'Vitest', category: 'devops' },
    ],
    category: 'Web Application',
    image: '/images/projects/hiring-app.svg',
    images: [
      '/images/projects/hiring-app.svg',
      '/images/projects/hiring-app.svg',
      '/images/projects/hiring-app.svg',
    ],
    demoUrl: '', // Add your demo URL
    githubUrl: '', // Add if public
    featured: true,
    date: new Date('2024-10-15'),
    status: 'completed',
    highlights: [
      {
        title: 'CV Parsing & Analysis',
        description: 'Automatically extract and analyze candidate information from PDF and DOCX resumes'
      },
      {
        title: 'Candidate Management',
        description: 'Track candidates through the hiring pipeline with custom statuses and notes'
      },
      {
        title: 'Email Campaigns',
        description: 'Send bulk emails to candidates with templates and scheduling'
      },
      {
        title: 'Authentication & Authorization',
        description: 'Secure login system with role-based access control'
      },
    ],
    metrics: [
      { label: 'Test Coverage', value: '85%' },
      { label: 'Performance Score', value: '95+' },
      { label: 'Type Safety', value: '100%' },
    ]
  },
  {
    id: '2',
    slug: 'pizza-falchi',
    title: 'Pizza Falchi - Restaurant Platform',
    description: 'Modern restaurant ordering platform with Stripe payments, SMS notifications, and real-time order tracking.',
    longDescription: `A full-stack restaurant and food ordering platform with integrated payment processing and customer notifications.
    Features menu management, order processing, Stripe payment integration, and Twilio SMS notifications.
    Designed for scalability and optimal user experience across all devices.`,
    technologies: [
      { name: 'Next.js 15', category: 'frontend' },
      { name: 'React 19', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Mongoose', category: 'database' },
      { name: 'MongoDB', category: 'database' },
      { name: 'Stripe', category: 'backend' },
      { name: 'Twilio', category: 'backend' },
      { name: 'NextAuth', category: 'backend' },
      { name: 'SWR', category: 'frontend' },
      { name: 'TailwindCSS', category: 'frontend' },
      { name: 'Vitest', category: 'devops' },
    ],
    category: 'Web Application',
    image: '/images/projects/pizza-falchi.svg',
    images: [
      '/images/projects/pizza-falchi.svg',
      '/images/projects/pizza-falchi.svg',
      '/images/projects/pizza-falchi.svg',
    ],
    demoUrl: '', // Add your demo URL
    githubUrl: '', // Add if public
    featured: true,
    date: new Date('2024-10-10'),
    status: 'completed',
    highlights: [
      {
        title: 'Stripe Payment Integration',
        description: 'Secure payment processing with Stripe for seamless transactions'
      },
      {
        title: 'SMS Notifications',
        description: 'Real-time order updates via Twilio SMS'
      },
      {
        title: 'Menu Management',
        description: 'Dynamic menu system with categories, pricing, and availability'
      },
      {
        title: 'Order Tracking',
        description: 'Real-time order status updates for customers'
      },
    ],
    metrics: [
      { label: 'Payment Success Rate', value: '99.8%' },
      { label: 'Page Load Time', value: '<2s' },
      { label: 'Mobile Users', value: '65%' },
    ]
  },
  {
    id: '3',
    slug: 'socialflow-ai',
    title: 'SocialFlow AI - Content Scheduler',
    description: 'AI-powered social media content scheduler with Claude AI integration, automated posting, and video processing.',
    longDescription: `An intelligent social media management platform leveraging AI to generate, schedule, and post content across platforms.
    Features AI content generation using Claude and OpenAI, automated scheduling with BullMQ job queues, Twitter API integration,
    and FFmpeg video processing. Built for content creators and marketing teams.`,
    technologies: [
      { name: 'Next.js 15', category: 'frontend' },
      { name: 'React 19', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Claude AI', category: 'ai' },
      { name: 'OpenAI', category: 'ai' },
      { name: 'MongoDB', category: 'database' },
      { name: 'Mongoose', category: 'database' },
      { name: 'Redis', category: 'database' },
      { name: 'BullMQ', category: 'backend' },
      { name: 'Twitter API', category: 'backend' },
      { name: 'FFmpeg', category: 'backend' },
      { name: 'NextAuth', category: 'backend' },
      { name: 'React Hook Form', category: 'frontend' },
      { name: 'DnD Kit', category: 'frontend' },
      { name: 'TailwindCSS', category: 'frontend' },
      { name: 'Playwright', category: 'devops' },
    ],
    category: 'AI/ML',
    image: '/images/projects/socialflow-ai.svg',
    images: [
      '/images/projects/socialflow-ai.svg',
      '/images/projects/socialflow-ai.svg',
      '/images/projects/socialflow-ai.svg',
    ],
    demoUrl: '', // Add your demo URL
    githubUrl: '', // Add if public
    featured: true,
    date: new Date('2024-10-20'),
    status: 'in-progress',
    highlights: [
      {
        title: 'AI Content Generation',
        description: 'Generate engaging social media posts using Claude AI and OpenAI'
      },
      {
        title: 'Automated Scheduling',
        description: 'Schedule posts with BullMQ job queues and Redis for reliable delivery'
      },
      {
        title: 'Video Processing',
        description: 'Process and optimize videos with FFmpeg for social media platforms'
      },
      {
        title: 'Multi-Platform Support',
        description: 'Post to Twitter with planned support for more platforms'
      },
      {
        title: 'Drag & Drop Calendar',
        description: 'Intuitive calendar interface for scheduling and rearranging posts'
      },
    ],
    metrics: [
      { label: 'AI Response Time', value: '<3s' },
      { label: 'Scheduling Accuracy', value: '99.9%' },
      { label: 'Video Processing', value: '10x faster' },
    ]
  },
]

export function getAllProjects(): Project[] {
  return projects.sort((a, b) => b.date.getTime() - a.date.getTime())
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured).sort((a, b) => b.date.getTime() - a.date.getTime())
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'all') return getAllProjects()
  return projects.filter(p => p.category === category)
}
