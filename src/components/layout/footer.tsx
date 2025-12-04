import Link from "next/link";
import { Github, Linkedin, Twitter, Zap, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { footerNavigation, socialLinks } from "@/data/navigation";

const socialIcons: Record<string, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xl font-bold"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-brand">
                <Zap className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <span>Stack MCP</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Expert MCP server development and AI automation solutions. Building
              production-ready integrations for Claude and enterprise systems.
            </p>
            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex h-10 w-10 items-center justify-center rounded-lg",
                      "border border-border bg-background",
                      "transition-all duration-200",
                      "hover:border-primary/50 hover:bg-muted hover:text-primary",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    )}
                    aria-label={`Visit ${social.name}`}
                  >
                    {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.resources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Stack MCP Super Agents. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Built with{" "}
            <Heart
              className="h-4 w-4 text-primary"
              fill="currentColor"
              aria-label="love"
            />{" "}
            using Next.js & Claude
          </p>
        </div>
      </div>
    </footer>
  );
}
