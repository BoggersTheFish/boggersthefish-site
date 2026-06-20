import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "TS-Reasoner",
  description:
    "Typed verifier authority for structured language requests, bounded repair, rejection, replay, and receipt-backed state transitions.",
  path: "/projects/ts-reasoner",
});

export default function ProjectPage() {
  return <ProjectDetail slug="ts-reasoner" />;
}
