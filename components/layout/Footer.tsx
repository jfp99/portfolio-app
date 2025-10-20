import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/jfpruvost', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/jean-francois-pruvost', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/jfpruvost', icon: Twitter },
  { name: 'Email', href: 'mailto:jfpruvost99@gmail.com', icon: Mail },
]

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Main Footer */}
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold mb-2 gradient-text">
                Jean-Francois Pruvost
              </h3>
              <span className="text-lg font-semibold text-primary">Full-Stack Developer</span>
              <p className="text-muted-foreground mt-4 mb-6 leading-relaxed max-w-md">
                Crafting modern web applications with React, Next.js, and cutting-edge technologies.
                Specialized in AI integration, scalable backends, and pixel-perfect user interfaces.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        w-12 h-12 bg-accent/50 rounded-lg
                        flex items-center justify-center
                        text-muted-foreground hover:text-primary hover:bg-accent
                        transition-all duration-300 transform hover:-translate-y-1
                        shadow-lg hover:shadow-xl
                        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                        focus:ring-offset-background
                      "
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-primary">Navigation</h4>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="
                        text-muted-foreground
                        hover:text-primary
                        transition-all duration-300
                        hover:pl-2 block transform hover:-translate-y-0.5
                        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                        focus:ring-offset-background rounded
                      "
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-primary">Get In Touch</h4>
              <div className="space-y-3 text-sm">
                <p className="text-muted-foreground">
                  <span className="font-semibold">Email:</span><br />
                  <a
                    href="mailto:jfpruvost99@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    jfpruvost99@gmail.com
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold">Location:</span><br />
                  Aix-en-Provence, France
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold">Availability:</span><br />
                  Open to opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Footer */}
      <div className="border-t border-border/40">
        <Container>
          <div className="py-6">
            <div className="flex flex-col items-center space-y-4">

              {/* Copyright */}
              <div className="text-center">
                <div className="text-muted-foreground text-sm mb-2 flex items-center justify-center gap-2">
                  © {currentYear} <span className="text-primary font-semibold">Jean-Francois Pruvost</span>.
                  All rights reserved. Made with <Heart className="h-4 w-4 text-red-500 inline fill-current" /> using Next.js & TailwindCSS
                </div>
                <div className="gradient-text font-bold text-xs">
                  Portfolio 2025 - Full-Stack Developer
                </div>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <span className="text-green-500 text-sm">🔒</span>
                  <span>Secure Site</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <span className="text-blue-500 text-sm">⚡</span>
                  <span>Built with Next.js 15</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
