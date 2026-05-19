import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";

export const metadata: Metadata = {
  title: "CIG",
  description:
    "Constraint Information Graph for claims, evidence, provenance, contradiction detection, confidence, and revision.",
};

export default function CIGPage() {
  return <ProjectDetail slug="cig" />;
}
