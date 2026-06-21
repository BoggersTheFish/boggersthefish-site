import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "TS Chat Language",
  description:
    "Deterministic text-to-MeaningGraph compilation and a bounded verifier-first symbolic agent loop with goals, topology, execution, replanning, and replay.",
  path: "/projects/ts-chat-language",
});

export default function ProjectPage() {
  return <ProjectDetail slug="ts-chat-language" />;
}
