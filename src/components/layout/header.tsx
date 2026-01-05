"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { mainNavigation } from "@/data/navigation";
import { ThemeToggle } from "./theme-toggle";
import { Logo } from "@/components/brand/logo";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center transition-transform hover:scale-105"
        >
          <Logo size="lg" showText={true} animated={false} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                isActiveLink(item.href)
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
              aria-current={isActiveLink(item.href) ? "page" : undefined}
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* CTA Button - Desktop */}
          <Link
            href="/booking"
            className={cn(
              "hidden sm:inline-flex items-center justify-center",
              "h-10 px-5 text-sm font-medium rounded-lg",
              "bg-spinach-600 text-white",
              "transition-colors duration-200",
              "hover:bg-spinach-700",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            )}
          >
            Book a Call
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-lg md:hidden",
              "border border-border bg-background",
              "transition-colors hover:bg-muted",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            )}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-border bg-background md:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "block px-4 py-3 text-base font-medium rounded-lg transition-colors",
                    isActiveLink(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                  aria-current={isActiveLink(item.href) ? "page" : undefined}
                >
                  {item.title}
                </Link>
              ))}
              <Link
                href="/booking"
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "block mt-4 px-4 py-3 text-center text-base font-medium rounded-lg",
                  "bg-spinach-600 text-white",
                  "transition-colors hover:bg-spinach-700"
                )}
              >
                Book a Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
