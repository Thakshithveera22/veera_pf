import type { Metadata } from "next";
import Education from "@/components/Education";

export const metadata: Metadata = {
  title: "Education",
  description: "Academic background — Master's at the University of Missouri, Bachelor's at VIT.",
};

export default function EducationPage() {
  return <Education />;
}
