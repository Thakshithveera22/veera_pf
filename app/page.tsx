import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Veera Neerukonda — ML & IoT research engineer and full-stack builder at the University of Missouri.",
};

export default function HomePage() {
  return <Hero />;
}
