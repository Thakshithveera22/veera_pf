import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects — embedded systems, applied ML, and backend engineering work.",
};

export default function ProjectsPage() {
  return <Projects />;
}
