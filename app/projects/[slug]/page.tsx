import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Calendar } from 'lucide-react'
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { ProjectStructuredData, BreadcrumbStructuredData } from '@/components/StructuredData'
import { getProjectBySlug, getAllProjects } from '@/data/projects'
import { formatDate } from '@/lib/utils'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
      publishedTime: project.date.toISOString(),
    },
  }
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: project.title, url: `/projects/${project.slug}` }
  ]

  const techNames = project.technologies.map(t => t.name)

  return (
    <>
      <ProjectStructuredData
        name={project.title}
        description={project.description}
        image={project.image}
        url={`/projects/${project.slug}`}
        datePublished={project.date.toISOString()}
        author="Jean-Francois Pruvost"
        technologies={techNames}
      />
      <BreadcrumbStructuredData items={breadcrumbs} />
      <div className="py-20 md:py-32">
        <Container>
          {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="outline" className="text-base">
              {project.category}
            </Badge>
            {project.status === 'in-progress' && (
              <Badge variant="secondary">In Progress</Badge>
            )}
            {project.featured && <Badge>Featured</Badge>}
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            {project.title}
          </h1>

          <div className="flex items-center gap-4 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(project.date)}</span>
            </div>
          </div>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            {project.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.demoUrl && (
              <Button asChild size="lg">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline" size="lg">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View Source
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4">About This Project</h2>
              <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                {project.longDescription}
              </p>
            </section>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="grid gap-6">
                  {project.highlights.map((highlight, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">
                          {highlight.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {highlight.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-6">Project Metrics</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {project.metrics.map((metric, index) => (
                    <Card key={index} className="text-center">
                      <CardContent className="pt-6">
                        <div className="text-3xl font-bold gradient-text mb-2">
                          {metric.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {metric.label}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <Card>
              <CardHeader>
                <CardTitle>Technologies Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {['frontend', 'backend', 'database', 'devops', 'ai', 'design'].map((category) => {
                    const techs = project.technologies.filter(
                      (t) => t.category === category
                    )
                    if (techs.length === 0) return null

                    return (
                      <div key={category}>
                        <h4 className="text-sm font-semibold mb-2 capitalize">
                          {category === 'ai' ? 'AI/ML' : category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {techs.map((tech) => (
                            <Badge key={tech.name} variant="secondary">
                              {tech.name}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Project Info */}
            <Card>
              <CardHeader>
                <CardTitle>Project Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <div className="font-semibold mb-1">Status</div>
                  <Badge variant="outline" className="capitalize">
                    {project.status.replace('-', ' ')}
                  </Badge>
                </div>
                <div>
                  <div className="font-semibold mb-1">Category</div>
                  <div className="text-muted-foreground">{project.category}</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">Completed</div>
                  <div className="text-muted-foreground">
                    {formatDate(project.date)}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 p-8 rounded-xl border border-border bg-accent/10 text-center">
          <h2 className="text-2xl font-bold mb-4">Interested in Similar Projects?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how I can help bring your ideas to life with modern technologies and best practices.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </Container>
    </div>
    </>
  )
}
