import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "TS Chat Language",
  description:
    "Deterministic text-to-MeaningGraph compilation, graph-diff memory, response planning, and rendering.",
  path: "/projects/ts-chat-language",
});

export default function ProjectPage() {
  return <ProjectDetail slug="ts-chat-language" />;
}
