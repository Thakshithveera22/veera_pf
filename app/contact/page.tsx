import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Veera Neerukonda — email, LinkedIn, and GitHub.",
};

export default function ContactPage() {
  return <Contact />;
}
