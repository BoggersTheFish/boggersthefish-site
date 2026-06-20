import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Ten-SON-LM",
  description:
    "Recurrent semantic-workspace model testing whether learned tension is a useful causal control signal.",
  path: "/projects/ten-son-lm",
});

export default function ProjectPage() {
  return <ProjectDetail slug="ten-son-lm" />;
}
