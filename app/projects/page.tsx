'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { projects } from '@/data/projects'
import { ExternalLink, Github } from 'lucide-react'

const categories = ['all', 'Web Application', 'AI/ML', 'Mobile App', 'Open Source', 'Design', 'Other']

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="py-20 md:py-32">
      <Container>
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of projects showcasing my skills in full-stack development, AI integration, and modern web technologies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="capitalize"
            >
              {category}
              {category === 'all' && ` (${projects.length})`}
              {category !== 'all' &&
                ` (${projects.filter((p) => p.category === category).length})`}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline">{project.category}</Badge>
                    <div className="flex gap-2">
                      {project.status === 'in-progress' && (
                        <Badge variant="secondary">In Progress</Badge>
                      )}
                      {project.featured && (
                        <Badge>Featured</Badge>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="hover:gradient-text transition-all"
                    >
                      {project.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  {/* Technologies */}
                  <div className="mb-4 flex-1">
                    <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 6).map((tech) => (
                        <Badge key={tech.name} variant="secondary">
                          {tech.name}
                        </Badge>
                      ))}
                      {project.technologies.length > 6 && (
                        <Badge variant="secondary">
                          +{project.technologies.length - 6} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t">
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <Link href={`/projects/${project.slug}`}>
                        View Details
                      </Link>
                    </Button>
                    {project.demoUrl && (
                      <Button asChild variant="ghost" size="sm">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View live demo"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button asChild variant="ghost" size="sm">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View on GitHub"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </Container>
    </div>
  )
}
