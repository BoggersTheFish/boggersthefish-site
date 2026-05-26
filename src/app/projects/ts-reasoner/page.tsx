import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "TS-Reasoner v1.0.0",
  description:
    "TS-Core-backed typed tension reasoning with learned channel calibration, stress testing, structural repair, and machine-readable receipts.",
  path: "/projects/ts-reasoner",
});

export default function TSReasonerPage() {
  return <ProjectDetail slug="ts-reasoner" />;
}
