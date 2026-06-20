import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "CIG",
  description:
    "Compact deterministic claim, evidence, provenance, contradiction, and revision graph engine.",
  path: "/projects/cig",
});

export default function ProjectPage() {
  return <ProjectDetail slug="cig" />;
}
