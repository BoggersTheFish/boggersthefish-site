import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "TS-Benchmarks",
  description:
    "Audit-first falsification harness for TS graph, reasoning, model, and compute experiments.",
  path: "/projects/ts-benchmarks",
});

export default function ProjectPage() {
  return <ProjectDetail slug="ts-benchmarks" />;
}
