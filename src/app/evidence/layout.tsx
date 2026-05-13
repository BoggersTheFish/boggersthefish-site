import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evidence",
  description:
    "Public receipts for BoggersTheFish TS-native AI work: TensionLM, proof ranker, controls, and limitations.",
};

export default function EvidenceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
