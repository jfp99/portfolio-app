import type { Metadata } from "next";
import { BlogIndex } from "./blog-index";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles about MCP server development, AI automation, and modern web development. Tips, tutorials, and insights.",
};

export default function BlogPage() {
  return <BlogIndex />;
}
