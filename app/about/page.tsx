import type { Metadata } from "next";
import About from "@/components/About";
import Leadership from "@/components/Leadership";

export const metadata: Metadata = {
  title: "About",
  description: "About Veera Neerukonda — background, focus areas, and what drives the work.",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <Leadership />
    </>
  );
}
