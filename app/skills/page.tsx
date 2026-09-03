import type { Metadata } from "next";
import Skills from "@/components/Skills";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills — languages, ML/AI tools, backend frameworks, and systems.",
};

export default function SkillsPage() {
  return <Skills />;
}
