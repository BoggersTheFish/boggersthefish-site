import type { Metadata } from "next";
import { ParchmentCard } from "@/components/ParchmentCard";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Research",
  description: "Research overview for TS graph/tension/information-transfer work.",
};

const areas = [
  {
    title: "Graph-Based Reasoning",
    body: "Represent reasoning work as nodes, edges, activation, constraints, pressure, and revision history.",
  },
  {
    title: "Constraint Propagation",
    body: "Study how local updates change neighboring claims, model states, or proof traces over time.",
  },
  {
    title: "Tension Dynamics",
    body: "Track mismatch, contradiction pressure, and relaxation as measurable telemetry rather than hidden vibes.",
  },
  {
    title: "Interpretable AI Systems",
    body: "Prefer inspectable fields, replayable traces, provenance, and benchmark receipts over loose claims.",
  },
];

export default function ResearchPage() {
  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="field-label text-gold">Research overview</p>
        <h1>Constraint graphs, tension, and information transfer.</h1>
        <p>
          The research program is evidence-first: build small mechanisms, expose
          their telemetry, run controlled comparisons, and report measured results.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {areas.map((area) => (
          <ParchmentCard key={area.title}>
            <p className="field-label mb-3 text-brown">Focus</p>
            <h2 className="font-serif text-2xl font-semibold text-ink">{area.title}</h2>
            <p className="mt-3 text-sm leading-7 text-ink/75">{area.body}</p>
          </ParchmentCard>
        ))}
      </div>

      <SectionHeading className="mt-14" title="Claim discipline">
        <p>
          Architecture advantages are treated as hypotheses until backed by benchmark
          receipts, replayable experiments, or source-linked evidence.
        </p>
      </SectionHeading>
    </section>
  );
}
