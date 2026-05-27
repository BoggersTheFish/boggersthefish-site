import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "TS-Reasoner v1.6.0",
  description:
    "Typed verification reasoner with candidate containment, exported TensionLM-side set receipts, and proof-boundary traces.",
  path: "/projects/ts-reasoner",
});

export default function TSReasonerPage() {
  return <ProjectDetail slug="ts-reasoner" />;
}
