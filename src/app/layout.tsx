import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { Header, Footer, SkipLink } from "@/components/layout";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://stackmcp.dev"),
  title: {
    default: "Stack MCP Super Agents | MCP & AI Automation Developer",
    template: "%s | Stack MCP Super Agents",
  },
  description:
    "MCP server development and AI automation solutions. Building tools that extend Claude's capabilities for real-world business needs.",
  keywords: [
    "MCP Server",
    "Model Context Protocol",
    "AI Automation",
    "Claude Integration",
    "TypeScript Developer",
    "Next.js",
    "n8n",
    "AI Agents",
  ],
  authors: [{ name: "Stack MCP Super Agents" }],
  creator: "Stack MCP Super Agents",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stackmcp.dev",
    siteName: "Stack MCP Super Agents",
    title: "Stack MCP Super Agents | MCP & AI Automation Developer",
    description:
      "MCP server development and AI automation solutions. Building tools that extend Claude's capabilities for real-world business needs.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Stack MCP Super Agents - MCP & AI Automation Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stack MCP Super Agents | MCP & AI Automation Developer",
    description:
      "MCP server development and AI automation. Building tools that make Claude genuinely useful.",
    creator: "@stackmcp",
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
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
  width: "device-width",
  initialScale: 1,
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
