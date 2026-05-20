import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "CIG",
  description:
    "Constraint Information Graph for claims, evidence, provenance, contradiction detection, confidence, and revision.",
  path: "/projects/cig",
});

export default function CIGPage() {
  return <ProjectDetail slug="cig" />;
}
