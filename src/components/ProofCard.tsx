import Link from "next/link";
import { ArrowRight, FileCheck2 } from "lucide-react";
import type { Proof } from "@/content/proofs";
import { ParchmentCard } from "@/components/ParchmentCard";

export function ProofCard({ proof }: { proof: Proof }) {
  return (
    <ParchmentCard id={proof.id.toLowerCase()} className="group h-full hover:-translate-y-1">
      <div className="mb-3 flex items-center justify-between gap-4">
        <span className="field-label text-forest">{proof.id}</span>
        <span className="rounded-full border border-gold/50 bg-gold/15 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-brown">
          {proof.status}
        </span>
      </div>
      <div className="mb-3 flex items-center gap-3">
        <FileCheck2 className="h-5 w-5 text-brown" aria-hidden="true" />
        <h3 className="font-serif text-xl font-semibold text-ink">{proof.title}</h3>
      </div>
      <p className="text-sm leading-6 text-ink/75">{proof.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {proof.tags.map((tag) => (
          <span key={tag} className="field-chip">
            {tag}
          </span>
        ))}
      </div>
      <Link href={proof.route} className="brass-link mt-5">
        View proof note
        <ArrowRight className="h-4 w-4" />
      </Link>
    </ParchmentCard>
  );
}
