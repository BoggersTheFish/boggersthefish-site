import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "TensionLM",
  description:
    "Previous-generation sigmoid pairwise-tension attention experiments, model telemetry, and bounded public evidence.",
  path: "/projects/tensionlm",
});

export default function ProjectPage() {
  return <ProjectDetail slug="tensionlm" />;
}
