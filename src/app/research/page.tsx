import { ClaimDiscipline } from "@/components/ClaimDiscipline";
import { ParchmentCard } from "@/components/ParchmentCard";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Research",
  description: "Research overview for TS graph/tension/information-transfer work.",
  path: "/research",
});

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

const researchSections = [
  {
    title: "Core question",
    body: "Can small graph/tension mechanisms make reasoning state, contradiction pressure, and repair choices more inspectable without overstating capability?",
  },
  {
    title: "Current hypotheses",
    body: "Local relaxation can reduce bounded graph tension; provenance can improve claim handling; learned proposal models may be useful when verifier traces stay explicit.",
  },
  {
    title: "What would falsify / weaken the claims",
    body: "Matched baselines that erase the advantage, receipts that fail to reproduce, telemetry that does not localize errors, or benchmark gains that vanish outside toy setups.",
  },
  {
    title: "Current receipts",
    body: "Proof Bank entries currently support narrow toy and mechanism claims. Draft entries remain weaker until public artifacts and replay commands are attached.",
  },
  {
    title: "Next benchmark pressure",
    body: "Matched softmax-vs-sigmoid comparisons, stricter CIG contradiction tests, exact seeds/commits, and verifier-loop receipts for proof-ranker integrations.",
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

      <ClaimDiscipline />

      <div className="mb-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <ParchmentCard tone="dark">
          <p className="field-label mb-3 text-gold">Research discipline</p>
          <h2 className="font-serif text-3xl font-semibold text-cream">
            Claims move only as far as the receipt allows.
          </h2>
          <p className="mt-4 text-sm leading-7 text-cream/76">
            The archive is intentionally built around pressure: what the system
            claims, what the setup actually tested, what the result says, and
            what would make the claim weaker.
          </p>
        </ParchmentCard>
        <ParchmentCard>
          <p className="field-label mb-3 text-brown">Current pressure</p>
          <p className="text-sm leading-7 text-ink/75">
            Strongest public evidence is currently mechanism-scale and
            benchmark-bound. Broad architecture claims remain hypotheses until
            paired with exact baselines, replay commands, and artifact hashes.
          </p>
        </ParchmentCard>
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

      <div className="grid gap-5 md:grid-cols-2">
        {researchSections.map((section) => (
          <ParchmentCard key={section.title}>
            <p className="field-label mb-3 text-brown">Archive section</p>
            <h2 className="font-serif text-2xl font-semibold text-ink">{section.title}</h2>
            <p className="mt-3 text-sm leading-7 text-ink/75">{section.body}</p>
          </ParchmentCard>
        ))}
      </div>
    </section>
  );
}
