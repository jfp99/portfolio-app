import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { skillGroups } from '@/data/skills'
import { Download, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about my background, skills, experience, and what drives my passion for web development.',
}

export default function AboutPage() {
  return (
    <div className="py-20 md:py-32">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground">
            Passionate full-stack developer focused on creating exceptional digital experiences
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I'm a full-stack developer with a passion for building modern, scalable web applications
              that solve real-world problems. With expertise in React, Next.js, TypeScript, and Node.js,
              I create performant and user-friendly applications that deliver exceptional experiences.
            </p>
            <p>
              My journey in web development began with a curiosity about how things work under the hood.
              This led me to dive deep into both frontend and backend technologies, always striving to
              understand the complete picture. Today, I specialize in building production-ready applications
              with a focus on performance, security, and maintainability.
            </p>
            <p>
              I'm particularly interested in AI integration, having worked on projects that leverage
              technologies like Claude AI and OpenAI to create intelligent, automated solutions.
              I believe in writing clean, type-safe code and following best practices to ensure
              long-term maintainability.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source
              projects, and sharing knowledge with the developer community.
            </p>
          </div>

          {/* Profile & CTA */}
          <div className="space-y-6">
            {/* Profile Image */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-purple shadow-lg shadow-purple/20">
                    <Image
                      src="/images/profile.svg"
                      alt="Jean-Francois Pruvost"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card>
              <CardHeader>
                <CardTitle>Let's Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Interested in working together or have a question?
                </p>
                <div className="flex flex-col gap-2">
                  <Button asChild className="w-full">
                    <Link href="/contact">
                      <Mail className="mr-2 h-4 w-4" />
                      Get In Touch
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href="/resume.pdf" download>
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillGroups.map((group) => (
              <Card key={group.category}>
                <CardHeader>
                  <CardTitle>{group.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant={skill.proficiency === 'expert' ? 'default' : 'secondary'}
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                    <p className="text-muted-foreground">Freelance / Personal Projects</p>
                  </div>
                  <Badge variant="outline">2023 - Present</Badge>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Developed multiple full-stack applications using Next.js, React, and MongoDB</li>
                  <li>Integrated AI capabilities (Claude AI, OpenAI) into web applications</li>
                  <li>Implemented secure authentication and authorization systems</li>
                  <li>Built payment processing systems with Stripe</li>
                  <li>Maintained 95+ Lighthouse performance scores across all projects</li>
                </ul>
              </CardContent>
            </Card>

            {/* Add more experience entries as needed */}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Education & Certifications</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Computer Science Degree</h3>
                    <p className="text-muted-foreground">University Name</p>
                  </div>
                  <Badge variant="outline">Year - Year</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Add certifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Professional Certifications</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• TypeScript Certification</li>
                    <li>• React Advanced Patterns</li>
                    <li>• Node.js Backend Development</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Continuous Learning</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Advanced Next.js Patterns</li>
                    <li>• AI/ML Integration</li>
                    <li>• System Design & Architecture</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Interests & Hobbies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Open Source</h3>
                <p className="text-sm text-muted-foreground">
                  Contributing to and maintaining open-source projects
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Tech Writing</h3>
                <p className="text-sm text-muted-foreground">
                  Sharing knowledge through technical articles and tutorials
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Exploring emerging technologies and AI advancements
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <div className="p-8 rounded-xl border border-border bg-accent/10 text-center">
          <h2 className="text-2xl font-bold mb-4">Let's Build Something Amazing</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with talented people.
            Whether you have a project in mind or just want to connect, feel free to reach out!
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </Container>
    </div>
  )
}
