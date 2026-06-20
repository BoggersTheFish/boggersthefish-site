import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Proof Ranker",
  description:
    "Bounded learned support for proof existence, path quality, failure detection, repair, and verifier loops.",
  path: "/projects/proof-ranker",
});

export default function ProjectPage() {
  return <ProjectDetail slug="proof-ranker" />;
}
