import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Code2, Database, Sparkles } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { AnimatedHero, AnimatedHeroItem } from '@/components/ui/AnimatedHero'
import { AnimatedGrid, AnimatedGridItem } from '@/components/ui/AnimatedGrid'
import { HeroBackground } from '@/components/ui/HeroBackground'
import { getFeaturedProjects } from '@/data/projects'
import { skillGroups } from '@/data/skills'

export default function HomePage() {
  const featuredProjects = getFeaturedProjects()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <HeroBackground />
        <Container>
          <AnimatedHero>
            <div className="max-w-3xl relative z-10">
              <AnimatedHeroItem>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                  Hi, I'm{' '}
                  <span className="gradient-text">Jean-Francois Pruvost</span>
                </h1>
              </AnimatedHeroItem>
              <AnimatedHeroItem>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Full-stack developer crafting modern web applications with cutting-edge technologies.
                  Specialized in React, Next.js, AI integration, and scalable backend systems.
                </p>
              </AnimatedHeroItem>
              <AnimatedHeroItem>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link href="/projects">
                      View My Work
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact">Get In Touch</Link>
                  </Button>
                </div>
              </AnimatedHeroItem>
            </div>
          </AnimatedHero>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border/40">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Type Safe</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">95+</div>
              <div className="text-sm text-muted-foreground">Lighthouse Score</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
                Featured Projects
              </h2>
              <p className="text-muted-foreground">
                Showcasing my latest work in full-stack development and AI integration
              </p>
            </div>
            <Button asChild variant="outline" className="hidden sm:flex">
              <Link href="/projects">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <AnimatedGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <AnimatedGridItem key={project.id}>
                <Link href={`/projects/${project.slug}`}>
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                    {/* Project Image */}
                    <div className="relative h-48 w-full overflow-hidden bg-muted">
                      <Image
                        src={project.image}
                        alt={`Screenshot of ${project.title} - ${project.category} project featuring ${project.technologies.slice(0, 3).map(t => t.name).join(', ')}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="outline">{project.category}</Badge>
                        {project.status === 'in-progress' && (
                          <Badge variant="secondary">In Progress</Badge>
                        )}
                      </div>
                      <CardTitle className="group-hover:gradient-text transition-all">
                        {project.title}
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge key={tech.name} variant="secondary">
                            {tech.name}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="secondary">
                            +{project.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedGridItem>
            ))}
          </AnimatedGrid>

          <div className="flex justify-center mt-8 sm:hidden">
            <Button asChild variant="outline">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Skills Overview Section */}
      <section className="py-20 md:py-32 bg-accent/10">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
              Tech Stack & Skills
            </h2>
            <p className="text-muted-foreground">
              Technologies I work with to bring ideas to life
            </p>
          </div>

          <AnimatedGrid className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedGridItem>
              <Card>
                <CardHeader>
                  <Code2 className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Frontend Development</CardTitle>
                  <CardDescription>
                    Modern, responsive user interfaces with cutting-edge frameworks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroups
                      .find(g => g.category === 'Frontend')
                      ?.skills.slice(0, 6)
                      .map(skill => (
                        <Badge key={skill.name} variant="outline">
                          {skill.name}
                        </Badge>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedGridItem>

            <AnimatedGridItem>
              <Card>
                <CardHeader>
                  <Database className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Backend & Database</CardTitle>
                  <CardDescription>
                    Scalable APIs and robust database architectures
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroups
                      .find(g => g.category === 'Backend')
                      ?.skills.slice(0, 6)
                      .map(skill => (
                        <Badge key={skill.name} variant="outline">
                          {skill.name}
                        </Badge>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedGridItem>

            <AnimatedGridItem>
              <Card>
                <CardHeader>
                  <Sparkles className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>AI & Innovation</CardTitle>
                  <CardDescription>
                    Integrating AI capabilities into modern applications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroups
                      .find(g => g.category === 'AI/ML')
                      ?.skills.map(skill => (
                        <Badge key={skill.name} variant="outline">
                          {skill.name}
                        </Badge>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedGridItem>
          </AnimatedGrid>

          <div className="flex justify-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/about">
                More About Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have a project in mind? I'm always open to discussing new opportunities and collaborations.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}
