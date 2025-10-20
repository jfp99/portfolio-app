import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { ContactForm } from '@/components/forms/ContactForm'
import { Mail, MapPin, Send } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Get in touch to discuss your project, collaboration opportunities, or just to say hello.',
}

export default function ContactPage() {
  return (
    <div className="py-20 md:py-32">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Send Me a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and I'll respond within 24-48 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:jfpruvost99@gmail.com"
                  className="text-primary hover:underline"
                >
                  jfpruvost99@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Aix-en-Provence, France
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  I typically respond within 24-48 hours. For urgent inquiries,
                  please send an email directly.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-accent/10">
              <CardHeader>
                <CardTitle>Project Inquiries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Looking to hire? Please include details about your project,
                  timeline, and budget in your message.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What types of projects do you work on?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I specialize in full-stack web applications using React, Next.js, and Node.js.
                  This includes e-commerce platforms, SaaS applications, content management systems,
                  and AI-powered applications.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer maintenance services?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! I provide ongoing maintenance, updates, and support for projects I've built
                  or can take over existing projects that need attention.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's your typical project timeline?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Project timelines vary based on scope and complexity. A typical full-stack application
                  takes 4-8 weeks from initial consultation to launch. I'll provide a detailed timeline
                  after discussing your specific requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  )
}
