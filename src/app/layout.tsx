import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { Header, Footer, SkipLink } from "@/components/layout";
import { CommandPalette } from "@/components/ui/command-palette";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/structured-data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

// ============================================
// EPNR - Automation Studio
// "Automation that grows with you"
// ============================================

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://epnr.dev"),
  title: {
    default: "EPNR | AI Agents & Workflow Automation",
    template: "%s | EPNR",
  },
  description:
    "Custom AI agents and workflow automation that work 24/7. From ready-to-deploy templates to fully tailored solutions, I help businesses automate what matters.",
  keywords: [
    "EPNR",
    "AI Agents",
    "Workflow Automation",
    "n8n",
    "Make",
    "Claude API",
    "OpenAI",
    "Lead Qualification",
    "Email Automation",
    "Invoice Processing",
    "Business Automation",
    "AI Solutions",
  ],
  authors: [{ name: "EPNR" }],
  creator: "EPNR",
  publisher: "EPNR",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://epnr.dev",
    siteName: "EPNR - Automation Studio",
    title: "EPNR | AI Agents & Workflow Automation",
    description:
      "Custom AI agents and workflow automation that work 24/7. Automate what matters.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EPNR - Automation Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EPNR | AI Agents & Workflow Automation",
    description:
      "Custom AI agents that handle leads, emails, invoices, and more. 24/7 automation that works.",
    creator: "@epnr_dev",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#16a34a" }, // Spinach Green
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" }, // Dark Background
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <SkipLink />
          <ScrollProgress />
          <CommandPalette />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main id="main-content" className="flex-1 pt-16" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
