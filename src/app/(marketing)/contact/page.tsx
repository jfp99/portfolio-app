import type { Metadata } from "next";
import { ContactSection } from "./contact-section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch to discuss your MCP server development or AI automation project. I respond within 24 hours.",
};

export default function ContactPage() {
  return <ContactSection />;
}
