import { ClaimDiscipline } from "@/components/ClaimDiscipline";
import { ReceiptAnatomyDiagram } from "@/components/Diagrams";
import { ProofBankExplorer } from "@/components/ProofBankExplorer";
import { SectionHeading } from "@/components/SectionHeading";
import { proofs } from "@/content/proofs";
import { pageMetadata } from "@/lib/metadata";

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
