import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "TS-Core",
  description:
    "Reusable deterministic graph and tension primitives for propagation, relaxation, contradiction, and revision.",
  path: "/projects/ts-core",
});

export default function ProjectPage() {
  return <ProjectDetail slug="ts-core" />;
}
