import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
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
    <footer className="border-t border-border/40 bg-background">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand & Description */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold gradient-text">Jean-Francois Pruvost</h3>
              <p className="text-sm text-muted-foreground">
                Full-stack developer from Aix-en-Provence, France, specializing in modern web applications with React, Next.js, and Node.js.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border/40">
            <p className="text-center text-sm text-muted-foreground">
              © {currentYear} Jean-Francois Pruvost. All rights reserved. Built with Next.js & TailwindCSS.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
