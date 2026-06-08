import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "BogOS / BogK / BOGBIN",
  description:
    "Deterministic verification and receipt container substrate. Verified workspace/user-space kernel contract direction.",
  path: "/projects/bogos",
});

export default function BogOSPage() {
  return <ProjectDetail slug="bogos" />;
}
