import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";

export const metadata: Metadata = {
  title: "TS-Core",
  description:
    "Minimal graph/tension runtime for nodes, edges, activation, constraint pressure, propagation, relaxation, and Break/Evolve cycles.",
};

export default function TSCorePage() {
  return <ProjectDetail slug="ts-core" />;
}
