import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "TS-Reasoner",
  description:
    "Typed verifier authority for goals, plans, symbolic actions, observed effects, transactional state, lessons, replay, and support-gated conclusions.",
  path: "/projects/ts-reasoner",
});

export default function ProjectPage() {
  return <ProjectDetail slug="ts-reasoner" />;
}
