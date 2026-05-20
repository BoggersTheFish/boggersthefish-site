import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Proof Ranker",
  description: "Small proof-ranking and proof-repair models for reasoning traces.",
  path: "/projects/proof-ranker",
});

export default function ProofRankerPage() {
  return <ProjectDetail slug="proof-ranker" />;
}
