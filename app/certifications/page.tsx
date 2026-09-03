import type { Metadata } from "next";
import Certifications from "@/components/Certifications";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Certifications in cloud, AI, and foundational software engineering topics.",
};

export default function CertificationsPage() {
  return <Certifications />;
}
