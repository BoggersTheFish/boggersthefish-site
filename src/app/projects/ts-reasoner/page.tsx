import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "TS-Reasoner v2.0.0",
  description:
    "Typed verification reasoner with a tiny learned candidate model, candidate containment, and proof-boundary traces.",
  path: "/projects/ts-reasoner",
});

export default function TSReasonerPage() {
  return <ProjectDetail slug="ts-reasoner" />;
}
