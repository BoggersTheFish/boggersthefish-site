import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "bogbin / BogOS",
  description:
    "Verified storage and computing substrate with canonical state, capabilities, persistence, journals, and rollback.",
  path: "/projects/bogos",
});

export default function ProjectPage() {
  return <ProjectDetail slug="bogos" />;
}
