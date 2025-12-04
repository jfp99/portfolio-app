import type { Metadata } from "next";
import { CaseStudiesIndex } from "./case-studies-index";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore my portfolio of MCP server development, AI automation, and full-stack projects. See real results and technical implementations.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesIndex />;
}
