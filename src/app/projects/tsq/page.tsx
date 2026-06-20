import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "TSQ",
  description:
    "Experimental tension- and verifier-driven adaptive-precision inference runtime.",
  path: "/projects/tsq",
});

export default function ProjectPage() {
  return <ProjectDetail slug="tsq" />;
}
