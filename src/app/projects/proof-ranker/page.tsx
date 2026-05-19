import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";

export const metadata: Metadata = {
  title: "Proof Ranker",
  description: "Small proof-ranking and proof-repair models for reasoning traces.",
};

export default function ProofRankerPage() {
  return <ProjectDetail slug="proof-ranker" />;
}
