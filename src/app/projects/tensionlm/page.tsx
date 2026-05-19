import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";

export const metadata: Metadata = {
  title: "TensionLM",
  description:
    "Language model experiments using sigmoid tension attention and inspectable pairwise tension fields.",
};

export default function TensionLMPage() {
  return <ProjectDetail slug="tensionlm" />;
}
