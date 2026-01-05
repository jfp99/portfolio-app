"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Home,
  Briefcase,
  User,
  Mail,
  FileText,
  Moon,
  Sun,
  X,
  ArrowRight,
  Command,
  Calendar,
  BookOpen,
  Leaf,
} from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface CommandItem {
  id: string;
  title: string;
  description?: string;
  icon: React.ReactNode;
  action: () => void;
  keywords?: string[];
  category: "navigation" | "actions" | "theme";
}

/**
 * Command Palette Component (Cmd+K)
 *
 * A spotlight-style command palette for quick navigation
 * and actions. Inspired by Raycast and Linear.
 */
export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  // Define command items
  const commands: CommandItem[] = [
    // Navigation
    {
      id: "home",
      title: "Home",
      description: "Go to homepage",
      icon: <Home className="h-4 w-4" />,
      action: () => router.push("/"),
      keywords: ["home", "main", "landing"],
      category: "navigation",
    },
    {
      id: "case-studies",
      title: "Case Studies",
      description: "View my projects",
      icon: <Briefcase className="h-4 w-4" />,
      action: () => router.push("/case-studies"),
      keywords: ["projects", "work", "portfolio", "cases"],
      category: "navigation",
    },
    {
      id: "services",
      title: "Services",
      description: "What I offer",
      icon: <Leaf className="h-4 w-4" />,
      action: () => router.push("/services"),
      keywords: ["services", "offer", "mcp", "automation"],
      category: "navigation",
    },
    {
      id: "about",
      title: "About",
      description: "Learn about me",
      icon: <User className="h-4 w-4" />,
      action: () => router.push("/about"),
      keywords: ["about", "bio", "me", "who"],
      category: "navigation",
    },
    {
      id: "blog",
      title: "Blog",
      description: "Read my articles",
      icon: <BookOpen className="h-4 w-4" />,
      action: () => router.push("/blog"),
      keywords: ["blog", "articles", "posts", "writing"],
      category: "navigation",
    },
    {
      id: "contact",
      title: "Contact",
      description: "Get in touch",
      icon: <Mail className="h-4 w-4" />,
      action: () => router.push("/contact"),
      keywords: ["contact", "email", "message", "reach"],
      category: "navigation",
    },
    {
      id: "booking",
      title: "Book a Call",
      description: "Schedule a meeting",
      icon: <Calendar className="h-4 w-4" />,
      action: () => router.push("/booking"),
      keywords: ["book", "call", "meeting", "schedule", "calendar"],
      category: "navigation",
    },
    // Actions
    {
      id: "resume",
      title: "Download Resume",
      description: "Get my CV as PDF",
      icon: <FileText className="h-4 w-4" />,
      action: () => window.open("/resume.pdf", "_blank"),
      keywords: ["resume", "cv", "pdf", "download"],
      category: "actions",
    },
    // Theme
    {
      id: "toggle-theme",
      title: theme === "dark" ? "Light Mode" : "Dark Mode",
      description: "Toggle color theme",
      icon: theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />,
      action: () => setTheme(theme === "dark" ? "light" : "dark"),
      keywords: ["theme", "dark", "light", "mode", "toggle"],
      category: "theme",
    },
  ];

  // Filter commands based on query
  const filteredCommands = query
    ? commands.filter((cmd) => {
        const searchStr = `${cmd.title} ${cmd.description} ${cmd.keywords?.join(" ")}`.toLowerCase();
        return searchStr.includes(query.toLowerCase());
      })
    : commands;

  // Group commands by category
  const groupedCommands = filteredCommands.reduce((acc, cmd) => {
    if (!acc[cmd.category]) acc[cmd.category] = [];
    acc[cmd.category].push(cmd);
    return acc;
  }, {} as Record<string, CommandItem[]>);

  const categoryLabels: Record<string, string> = {
    navigation: "Navigation",
    actions: "Actions",
    theme: "Appearance",
  };

  // Keyboard event handler
  const handleKeyDown = (e: KeyboardEvent) => {
    // Open/Close with Cmd+K or Ctrl+K
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      setIsOpen((prev) => !prev);
      return;
    }

    // Close with Escape
    if (e.key === "Escape" && isOpen) {
      e.preventDefault();
      setIsOpen(false);
      return;
    }

    if (!isOpen) return;

    // Navigate with arrows
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredCommands.length - 1 ? prev + 1 : 0
      );
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredCommands.length - 1
      );
    }

    // Execute with Enter
    if (e.key === "Enter" && filteredCommands[selectedIndex]) {
      e.preventDefault();
      filteredCommands[selectedIndex].action();
      setIsOpen(false);
      setQuery("");
    }
  };

  // Add global keyboard listener
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <>
      {/* Trigger Button (optional, for mobile) */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-40 md:hidden",
          "h-12 w-12 rounded-full",
          "bg-spinach-600 text-white shadow-lg",
          "flex items-center justify-center",
          "transition-transform hover:scale-110"
        )}
        aria-label="Open command palette"
      >
        <Search className="h-5 w-5" />
      </button>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            />

            {/* Palette */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.15 }}
              className={cn(
                "fixed left-1/2 top-[20%] z-50 w-full max-w-lg -translate-x-1/2",
                "mx-auto px-4"
              )}
            >
              <div
                className={cn(
                  "overflow-hidden rounded-2xl border border-border",
                  "bg-card shadow-2xl shadow-spinach-500/10"
                )}
              >
                {/* Search Input */}
                <div className="flex items-center gap-3 border-b border-border px-4 py-3">
                  <Search className="h-5 w-5 text-muted-foreground" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setSelectedIndex(0);
                    }}
                    placeholder="Search commands..."
                    className={cn(
                      "flex-1 bg-transparent text-base outline-none",
                      "placeholder:text-muted-foreground"
                    )}
                  />
                  <kbd className="hidden sm:flex items-center gap-1 rounded bg-muted px-2 py-1 text-xs text-muted-foreground">
                    <Command className="h-3 w-3" />K
                  </kbd>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg p-1 hover:bg-muted"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>

                {/* Results */}
                <div className="max-h-80 overflow-y-auto p-2">
                  {filteredCommands.length === 0 ? (
                    <div className="py-8 text-center text-muted-foreground">
                      No commands found for &quot;{query}&quot;
                    </div>
                  ) : (
                    Object.entries(groupedCommands).map(([category, items]) => (
                      <div key={category} className="mb-2">
                        <div className="px-2 py-1 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          {categoryLabels[category]}
                        </div>
                        {items.map((item) => {
                          const globalIndex = filteredCommands.findIndex(
                            (cmd) => cmd.id === item.id
                          );
                          const isSelected = globalIndex === selectedIndex;

                          return (
                            <button
                              key={item.id}
                              onClick={() => {
                                item.action();
                                setIsOpen(false);
                                setQuery("");
                              }}
                              onMouseEnter={() => setSelectedIndex(globalIndex)}
                              className={cn(
                                "flex w-full items-center gap-3 rounded-lg px-3 py-2",
                                "transition-colors",
                                isSelected
                                  ? "bg-spinach-500/10 text-spinach-600 dark:text-spinach-400"
                                  : "hover:bg-muted"
                              )}
                            >
                              <span
                                className={cn(
                                  "flex h-8 w-8 items-center justify-center rounded-lg",
                                  isSelected
                                    ? "bg-spinach-500/20"
                                    : "bg-muted"
                                )}
                              >
                                {item.icon}
                              </span>
                              <div className="flex-1 text-left">
                                <div className="font-medium">{item.title}</div>
                                {item.description && (
                                  <div className="text-sm text-muted-foreground">
                                    {item.description}
                                  </div>
                                )}
                              </div>
                              {isSelected && (
                                <ArrowRight className="h-4 w-4 text-spinach-500" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    ))
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-border px-4 py-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <kbd className="rounded bg-muted px-1.5 py-0.5">↑↓</kbd>
                      Navigate
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="rounded bg-muted px-1.5 py-0.5">↵</kbd>
                      Select
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="rounded bg-muted px-1.5 py-0.5">esc</kbd>
                      Close
                    </span>
                  </div>
                  <span className="text-spinach-600 dark:text-spinach-400 font-medium">
                    EPNR
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default CommandPalette;
