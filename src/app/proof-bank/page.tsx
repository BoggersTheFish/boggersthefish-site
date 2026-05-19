import type { Metadata } from "next";
import { ProofCard } from "@/components/ProofCard";
import { SectionHeading } from "@/components/SectionHeading";
import { proofFilters, proofs } from "@/content/proofs";

export const metadata: Metadata = {
  title: "Proof Bank",
  description: "Proof-bank experiment index for TS receipts, limits, and replay notes.",
};

export default function ProofBankPage() {
  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="field-label text-gold">Proof bank</p>
        <h1>Receipts, logs, and replay notes.</h1>
        <p>
          A prepared index for experiments that should eventually carry setup,
          patch or artifact links, test output, metrics, limits, and replay commands.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {proofFilters.map((filter) => (
          <span key={filter} className="rounded-full border border-gold/40 bg-forest/60 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-cream">
            {filter}
          </span>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {proofs.map((proof) => (
          <ProofCard key={proof.id} proof={proof} />
        ))}
      </div>

      <SectionHeading className="mt-14" title="Receipt fields prepared">
        <p>
          Resolved state, patch diff, test output, wall time, memory, token count,
          graph nodes/edges, relaxation steps, checkpoint hash, and replay command.
        </p>
      </SectionHeading>
    </section>
  );
}
