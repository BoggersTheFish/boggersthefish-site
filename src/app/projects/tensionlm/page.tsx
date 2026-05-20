import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "TensionLM",
  description:
    "Language model experiments using sigmoid tension attention and inspectable pairwise tension fields.",
  path: "/projects/tensionlm",
});

export default function TensionLMPage() {
  return <ProjectDetail slug="tensionlm" />;
}
