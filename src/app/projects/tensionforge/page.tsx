import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "TensionForge",
  description:
    "Verifier-first OpenCL training runtime for legacy AMD hardware with explicit parity and performance evidence.",
  path: "/projects/tensionforge",
});

export default function ProjectPage() {
  return <ProjectDetail slug="tensionforge" />;
}
