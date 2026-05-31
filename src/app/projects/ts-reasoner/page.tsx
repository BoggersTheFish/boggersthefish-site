import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "TS-Reasoner v10.0.0",
  description:
    "Verifier-first reasoning runtime with policy contracts, replay, ledger, checkpoint, restore, recovery drill, and proof-boundary receipts.",
  path: "/projects/ts-reasoner",
});

export default function TSReasonerPage() {
  return <ProjectDetail slug="ts-reasoner" />;
}
