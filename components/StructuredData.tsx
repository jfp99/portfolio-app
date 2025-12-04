import { Person, WithContext, BreadcrumbList, FAQPage } from 'schema-dts'

/**
 * PersonStructuredData - Adds JSON-LD structured data for the developer/person
 * Helps search engines understand who you are and your professional details
 */
export function PersonStructuredData() {
  const structuredData: WithContext<Person> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jean-Francois Pruvost',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourportfolio.com',
    image: `${process.env.NEXT_PUBLIC_SITE_URL}/images/profile.jpg`,
    jobTitle: 'Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies',
    knowsAbout: [
      'Web Development',
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'AI Integration',
      'Full Stack Development',
      'Software Engineering'
    ],
    sameAs: [
      'https://github.com/jfpruvost',
      'https://linkedin.com/in/jean-francois-pruvost',
    ],
    email: 'jfpruvost99@gmail.com'
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

/**
 * BreadcrumbStructuredData - Adds breadcrumb navigation for SEO
 * @param items - Array of breadcrumb items with name and url
 */
interface BreadcrumbItem {
  name: string
  url: string
}

export function BreadcrumbStructuredData({ items }: { items: BreadcrumbItem[] }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourportfolio.com'

  const structuredData: WithContext<BreadcrumbList> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

/**
 * FAQStructuredData - Adds FAQ structured data for contact page
 * Helps search engines display FAQ rich results
 */
export function FAQStructuredData() {
  const structuredData: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is your typical response time?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I typically respond to inquiries within 24-48 hours during business days.'
        }
      },
      {
        '@type': 'Question',
        name: 'What types of projects do you work on?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I specialize in full-stack web applications using React, Next.js, and TypeScript. I work on projects ranging from e-commerce platforms to AI-powered applications and custom web solutions.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you offer freelance services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, I am available for freelance projects and consulting. Please use the contact form to discuss your project requirements.'
        }
      },
      {
        '@type': 'Question',
        name: 'What technologies do you specialize in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I specialize in modern web technologies including React, Next.js, TypeScript, Node.js, MongoDB, and cloud platforms. I also have experience with AI integration, payment processing, and real-time features.'
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

/**
 * ProjectStructuredData - Adds structured data for individual projects
 * Helps search engines understand your portfolio projects
 */
interface ProjectStructuredDataProps {
  name: string
  description: string
  image: string
  url: string
  datePublished: string
  author: string
  technologies: string[]
}

export function ProjectStructuredData({
  name,
  description,
  image,
  url,
  datePublished,
  author,
  technologies
}: ProjectStructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourportfolio.com'

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name,
    description,
    image: `${baseUrl}${image}`,
    url: `${baseUrl}${url}`,
    datePublished,
    author: {
      '@type': 'Person',
      name: author
    },
    keywords: technologies.join(', '),
    inLanguage: 'en'
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
