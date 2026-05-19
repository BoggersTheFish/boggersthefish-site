import type { Metadata } from "next";
import { ParchmentCard } from "@/components/ParchmentCard";

export const metadata: Metadata = {
  title: "Docs",
  description: "Documentation landing page for TS concepts, projects, and proof-bank workflow.",
};

const docs = [
  ["TS Primer", "Nodes, edges, activation, tension, propagation, relaxation, Break/Evolve."],
  ["Project Guides", "How TS-Core, TensionLM, CIG, and Proof Ranker fit together."],
  ["Receipt Format", "How experiments should record outputs, limits, metrics, and replay commands."],
  ["Vocabulary", "Careful terms for research claims, hypotheses, evidence, and provenance."],
];

export default function DocsPage() {
  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="field-label text-gold">Docs</p>
        <h1>Reference shelves for the TS archive.</h1>
        <p>
          Documentation will stay content-first: short guides, diagrams, receipt
          formats, and project references.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {docs.map(([title, body]) => (
          <ParchmentCard key={title}>
            <p className="field-label mb-3 text-brown">Notebook</p>
            <h2 className="font-serif text-2xl font-semibold text-ink">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-ink/75">{body}</p>
          </ParchmentCard>
        ))}
      </div>
    </section>
  );
}
