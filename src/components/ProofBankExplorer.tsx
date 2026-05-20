"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ExternalLink, Search } from "lucide-react";
import type { Proof } from "@/content/proofs";
import { proofFilters } from "@/content/proofs";
import { ParchmentCard } from "@/components/ParchmentCard";
import { ProofCard } from "@/components/ProofCard";

export function ProofBankExplorer({ proofs }: { proofs: Proof[] }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredProofs = useMemo(() => {
    const q = query.trim().toLowerCase();
    return proofs.filter((proof) => {
      const matchesFilter =
        filter === "All" ||
        proof.status === filter ||
        proof.tags.some((tag) => tag.toLowerCase().includes(filter.toLowerCase()));
      const haystack = [
        proof.id,
        proof.title,
        proof.claim,
        proof.setup,
        proof.result,
        proof.limit,
        proof.reproduce,
        proof.confidence,
        proof.tags.join(" "),
      ]
        .join(" ")
        .toLowerCase();
      return matchesFilter && (!q || haystack.includes(q));
    });
  }, [filter, proofs, query]);

  return (
    <>
      <div className="mb-8 grid gap-3 lg:grid-cols-[1fr_auto]">
        <label className="relative">
          <span className="sr-only">Search proof bank</span>
          <Search className="pointer-events-none absolute left-3 top-3 h-5 w-5 text-gold" aria-hidden="true" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by ID, claim, result, tag, or limitation"
            className="min-h-12 w-full rounded-md border border-gold/35 bg-forest/70 pl-11 pr-4 text-sm text-cream outline-none placeholder:text-cream/45 focus:border-gold focus:ring-2 focus:ring-gold/25"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {proofFilters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] transition ${
                filter === item
                  ? "border-gold bg-gold/20 text-gold"
                  : "border-gold/40 bg-forest/60 text-cream/75 hover:border-gold"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredProofs.map((proof) => (
          <ProofCard key={proof.id} proof={proof} />
        ))}
      </div>

      <div className="space-y-6">
        {filteredProofs.map((proof) => (
          <ParchmentCard key={proof.id} id={proof.id.toLowerCase()} className="scroll-mt-28">
            <div className="mb-5 flex flex-col gap-3 border-b border-brown/25 pb-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="field-label text-brown">{proof.id}</p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-ink">{proof.title}</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="w-fit rounded-full border border-gold/50 bg-gold/15 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-brown">
                  {proof.status}
                </span>
                <span className="w-fit rounded-full border border-brown/25 bg-forest/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-brown">
                  {proof.confidence}
                </span>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {[
                ["Claim", proof.claim],
                ["Setup", proof.setup],
                ["Result", proof.result],
                ["Limit", proof.limit],
                ["Reproduce", proof.reproduce],
                ["Last updated", proof.updatedAt],
              ].map(([label, body]) => (
                <div key={label} className="receipt-field">
                  <p className="field-label text-brown">{label}</p>
                  <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-ink/75">{body}</p>
                </div>
              ))}
              <div className="receipt-field">
                <p className="field-label text-brown">Related repo</p>
                <Link href={proof.relatedRepo.href} target="_blank" rel="noopener noreferrer" className="brass-link mt-2">
                  {proof.relatedRepo.label}
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
              <div className="receipt-field">
                <p className="field-label text-brown">Related artifact/model</p>
                <div className="mt-2 space-y-2">
                  {proof.relatedArtifacts.length ? proof.relatedArtifacts.map((artifact) => (
                    <Link key={artifact.href} href={artifact.href} target="_blank" rel="noopener noreferrer" className="brass-link">
                      {artifact.label}
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  )) : <p className="text-sm leading-7 text-ink/65">No public artifact linked yet.</p>}
                </div>
              </div>
            </div>
          </ParchmentCard>
        ))}
      </div>
    </>
  );
}
