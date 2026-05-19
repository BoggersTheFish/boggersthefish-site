import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { ParchmentCard } from "@/components/ParchmentCard";
import { ProofCard } from "@/components/ProofCard";
import { SectionHeading } from "@/components/SectionHeading";
import { proofFilters, proofs } from "@/content/proofs";

export const metadata: Metadata = {
  title: "Proof Bank",
  description: "Proof-bank experiment index for TS claims, setups, results, limits, and reproduction notes.",
};

const receiptFields = ["Claim", "Setup", "Result", "Limit", "Reproduce", "Related repo"];

export default function ProofBankPage() {
  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="field-label text-gold">Proof bank</p>
        <h1>Receipts, logs, and replay notes.</h1>
        <p>
          Each entry is shaped so claims can be inspected instead of merely read:
          claim, setup, result, limit, reproduce, and related repository.
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

      <SectionHeading className="mt-14" title="Receipt anatomy">
        <p>
          The proof bank is intentionally repetitive. Strong claims should be
          boring to audit: same fields, same limits, same reproduction pressure.
        </p>
      </SectionHeading>
      <div className="mb-8 flex flex-wrap gap-2">
        {receiptFields.map((field) => (
          <span key={field} className="field-chip bg-parchment-light">
            {field}
          </span>
        ))}
      </div>

      <div className="space-y-6">
        {proofs.map((proof) => (
          <ParchmentCard key={proof.id} id={proof.id.toLowerCase()} className="scroll-mt-28">
            <div className="mb-5 flex flex-col gap-3 border-b border-brown/25 pb-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="field-label text-brown">{proof.id}</p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-ink">{proof.title}</h2>
              </div>
              <span className="w-fit rounded-full border border-gold/50 bg-gold/15 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-brown">
                {proof.status}
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {[
                ["Claim", proof.claim],
                ["Setup", proof.setup],
                ["Result", proof.result],
                ["Limit", proof.limit],
                ["Reproduce", proof.reproduce],
              ].map(([label, body]) => (
                <div key={label} className="receipt-field">
                  <p className="field-label text-brown">{label}</p>
                  <p className="mt-2 text-sm leading-7 text-ink/75">{body}</p>
                </div>
              ))}
              <div className="receipt-field">
                <p className="field-label text-brown">Related repo</p>
                <Link
                  href={proof.relatedRepo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brass-link mt-2"
                >
                  {proof.relatedRepo.label}
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </ParchmentCard>
        ))}
      </div>
    </section>
  );
}
