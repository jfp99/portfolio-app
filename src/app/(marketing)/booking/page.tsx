import type { Metadata } from "next";
import { BookingContent } from "./booking-content";

export const metadata: Metadata = {
  title: "Book a Call",
  description:
    "Schedule a free consultation to discuss your MCP server development or AI automation project.",
};

export default function BookingPage() {
  return <BookingContent />;
}
