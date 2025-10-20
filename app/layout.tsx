import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PersonStructuredData } from '@/components/StructuredData'
import { Toaster } from 'sonner'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Jean-Francois Pruvost - Full Stack Developer Portfolio',
    template: '%s | Jean-Francois Pruvost'
  },
  description: 'Portfolio showcasing modern web applications built with React, Next.js, TypeScript, and cutting-edge technologies. Featuring projects in AI/ML, full-stack development, and more.',
  keywords: [
    'full stack developer',
    'portfolio',
    'React',
    'Next.js',
    'TypeScript',
    'MongoDB',
    'AI integration',
    'web development',
    'software engineer'
  ],
  authors: [{ name: 'Jean-Francois Pruvost' }],
  creator: 'Jean-Francois Pruvost',
  publisher: 'Jean-Francois Pruvost',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Jean-Francois Pruvost - Full Stack Developer Portfolio',
    description: 'Portfolio showcasing modern web applications and innovative projects.',
    siteName: 'Jean-Francois Pruvost Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jean-Francois Pruvost Portfolio Preview'
      }
    ]
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Jean-Francois Pruvost - Full Stack Developer Portfolio',
    description: 'Portfolio showcasing modern web applications and innovative projects.',
    images: ['/og-image.jpg']
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <meta name="theme-color" content="#0f172a" />
        <PersonStructuredData />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main id="main-content" className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
