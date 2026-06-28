import dynamic from "next/dynamic";
import { ClaimDiscipline } from "@/components/ClaimDiscipline";
import { ReceiptAnatomyDiagram } from "@/components/Diagrams";
import { SectionHeading } from "@/components/SectionHeading";
import { proofs } from "@/content/proofs";
import { pageMetadata } from "@/lib/metadata";

const ProofBankExplorer = dynamic(
  () => import("@/components/ProofBankExplorer").then((mod) => mod.ProofBankExplorer),
  {
    loading: () => (
      <p className="rounded-md border border-gold/25 bg-forest/60 px-4 py-6 text-sm text-cream/80">
        Loading proof bank explorer…
      </p>
    ),
  }
);

export const metadata = pageMetadata({
  title: "Proof Bank",
  description: "Searchable proof-bank receipts for TS claims, setups, results, limits, reproduction notes, and confidence levels.",
  path: "/proof-bank",
});

export default function ProofBankPage() {
  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="field-label text-gold">Proof bank</p>
        <h1>Receipts before claims.</h1>
        <p>
          Each entry is shaped for audit: ID, status, claim, setup, result,
          limit, reproduce, related repo/artifact, date, and confidence level.
        </p>
      </div>

      <ClaimDiscipline />

      <SectionHeading title="Receipt anatomy">
        <p>
          The proof bank is intentionally repetitive. Strong claims should be
          boring to audit: same fields, same limits, same reproduction pressure.
        </p>
      </SectionHeading>
      <div className="mb-10">
        <ReceiptAnatomyDiagram />
      </div>

      <ProofBankExplorer proofs={proofs} />
    </section>
  );
}
