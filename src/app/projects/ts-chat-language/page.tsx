import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "TS Chat Language",
  description:
    "Deterministic text-to-MeaningGraph compilation with TS-Reasoner-gated decisions, rendering, memory, and unified turn receipts.",
  path: "/projects/ts-chat-language",
});

export default function ProjectPage() {
  return <ProjectDetail slug="ts-chat-language" />;
}
