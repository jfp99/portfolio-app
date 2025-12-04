import type { Metadata } from "next";
import { ServicesPageContent } from "./services-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional MCP server development, AI automation solutions, full-stack development, and technical consulting services.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
