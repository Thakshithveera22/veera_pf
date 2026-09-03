import type { Metadata } from "next";
import Experience from "@/components/Experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Career timeline — research engineering, teaching, and software roles.",
};

export default function ExperiencePage() {
  return <Experience />;
}
