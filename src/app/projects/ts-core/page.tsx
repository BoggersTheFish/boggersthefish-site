import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "TS-Core",
  description:
    "Minimal graph/tension runtime for nodes, edges, activation, constraint pressure, propagation, relaxation, and Break/Evolve cycles.",
  path: "/projects/ts-core",
});

export default function TSCorePage() {
  return <ProjectDetail slug="ts-core" />;
}
