import type { Metadata } from "next";
import { AboutPageContent } from "./about-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about my journey as an MCP server developer and AI automation expert. Discover my skills, experience, and passion for building intelligent systems.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
