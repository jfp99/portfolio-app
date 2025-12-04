import type { NavItem, SocialLink } from "@/types";

export const mainNavigation: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/services" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "About", href: "/about" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export const footerNavigation = {
  main: [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Case Studies", href: "/case-studies" },
    { title: "About", href: "/about" },
  ],
  resources: [
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
    { title: "Book a Call", href: "/booking" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
  ],
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/jfp99",
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/",
    icon: "twitter",
  },
];
