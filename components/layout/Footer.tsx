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
    <footer className="bg-gradient-to-br from-primary via-primary to-purple dark:from-gray-900 dark:to-gray-950 text-white">
      {/* Main Footer */}
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-light to-white bg-clip-text text-transparent">
                Jean-Francois Pruvost
              </h3>
              <span className="text-lg font-semibold text-purple-light">Full-Stack Developer</span>
              <p className="text-gray-200 dark:text-gray-300 mt-4 mb-6 leading-relaxed max-w-md">
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
                        w-12 h-12 bg-white/10 dark:bg-white/5 rounded-lg
                        flex items-center justify-center
                        hover:bg-purple-light hover:text-primary
                        transition-all duration-300 transform hover:-translate-y-1
                        shadow-lg hover:shadow-xl
                        focus:outline-none focus:ring-2 focus:ring-purple-light focus:ring-offset-2
                        focus:ring-offset-primary dark:focus:ring-offset-gray-900
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
              <h4 className="text-lg font-semibold mb-6 text-purple-light">Navigation</h4>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="
                        text-gray-200 dark:text-gray-300
                        hover:text-purple-light
                        transition-all duration-300
                        hover:pl-2 block transform hover:-translate-y-0.5
                        focus:outline-none focus:ring-2 focus:ring-purple-light focus:ring-offset-2
                        focus:ring-offset-primary dark:focus:ring-offset-gray-900 rounded
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
              <h4 className="text-lg font-semibold mb-6 text-purple-light">Get In Touch</h4>
              <div className="space-y-3 text-sm">
                <p className="text-gray-200 dark:text-gray-300">
                  <span className="font-semibold">Email:</span><br />
                  <a
                    href="mailto:jfpruvost99@gmail.com"
                    className="hover:text-purple-light transition-colors"
                  >
                    jfpruvost99@gmail.com
                  </a>
                </p>
                <p className="text-gray-200 dark:text-gray-300">
                  <span className="font-semibold">Location:</span><br />
                  Aix-en-Provence, France
                </p>
                <p className="text-gray-200 dark:text-gray-300">
                  <span className="font-semibold">Availability:</span><br />
                  Open to opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <Container>
          <div className="py-6">
            <div className="flex flex-col items-center space-y-4">

              {/* Copyright */}
              <div className="text-center">
                <div className="text-gray-200 dark:text-gray-400 text-sm mb-2 flex items-center justify-center gap-2">
                  © {currentYear} <span className="text-purple-light font-semibold">Jean-Francois Pruvost</span>.
                  All rights reserved. Made with <Heart className="h-4 w-4 text-red-400 inline fill-current" /> using Next.js & TailwindCSS
                </div>
                <div className="bg-gradient-to-r from-purple-light to-white bg-clip-text text-transparent font-bold text-xs">
                  Portfolio 2025 - Full-Stack Developer
                </div>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center space-x-2 text-xs text-gray-300 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <span className="text-green-400 text-sm">🔒</span>
                  <span>Secure Site</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <span className="text-blue-400 text-sm">⚡</span>
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
