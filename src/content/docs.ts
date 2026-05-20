export type DocPage = {
  slug: string;
  title: string;
  summary: string;
  sections: { title: string; body: string }[];
};

export const docs: DocPage[] = [
  {
    slug: "primer",
    title: "TS Primer",
    summary: "A bounded public primer for the technical TS vocabulary.",
    sections: [
      { title: "Node", body: "A unit of state in a constraint graph: claim, token, observation, artifact, or model state." },
      { title: "Edge", body: "A relationship or constraint between nodes. Edges carry weight, provenance, and sometimes direction." },
      { title: "Activation", body: "The currently relevant pressure or signal on a node during a wave step." },
      { title: "Tension", body: "Residual mismatch between constraints and current state. Tension is a diagnostic, not a magic truth score." },
      { title: "Stability", body: "A state that remains coherent under the current constraints and update rules." },
      { title: "Coherence", body: "How well a local or global configuration satisfies its constraints without hiding contradictions." },
      { title: "Attractor", body: "A stable region a graph tends to return to under relaxation." },
      { title: "Propagate -> Relax -> Break -> Evolve", body: "Send signal through the graph, reduce tension locally, split when a shared context fails, then revise structure." },
      { title: "Public TS vs symbolic/private TS", body: "The site uses public, technical TS terms. Personal shorthand and symbolic language stay out of formal receipts." },
      { title: "Why claims need receipts", body: "A claim is only useful when it has setup, result, limit, replay path, and provenance." },
    ],
  },
  {
    slug: "vocabulary",
    title: "TS Vocabulary",
    summary: "Careful definitions for terms used across the archive.",
    sections: [
      { title: "node", body: "A typed unit in a graph: source, claim, token, operator, metric, or artifact." },
      { title: "edge", body: "A weighted relationship that carries influence, dependency, contradiction, or provenance." },
      { title: "activation", body: "Temporary relevance or signal flowing through active graph regions." },
      { title: "tension", body: "Measured pressure from unsatisfied constraints." },
      { title: "pressure", body: "The local demand for update created by tension, activation, or contradiction." },
      { title: "relaxation", body: "An update step that reduces residual pressure under current constraints." },
      { title: "break/evolve", body: "A context split and structural revision when one model cannot satisfy incompatible regimes." },
      { title: "coherence", body: "Constraint satisfaction with explicit limits and provenance." },
      { title: "provenance", body: "Where a claim or value came from and what dependencies it carries." },
      { title: "contradiction", body: "A conflict that remains after normal relaxation and should be localized, not buried." },
      { title: "receipt", body: "A replayable record of claim, setup, metrics, result, limit, and artifact links." },
      { title: "replay", body: "A command or procedure that lets another person reproduce the narrow result." },
      { title: "benchmark", body: "A controlled comparison against an agreed task or baseline." },
      { title: "attractor", body: "A stable configuration the system settles back into under update pressure." },
      { title: "substrate", body: "The underlying graph/state/model logic before surface text or UI." },
      { title: "surface", body: "The rendered text, interface, or story produced from substrate state." },
    ],
  },
  {
    slug: "receipt-format",
    title: "Receipt Format",
    summary: "The minimum shape for a claim that should be taken seriously.",
    sections: [
      {
        title: "Template",
        body: "id:\ntitle:\nclaim:\nstatus:\ndate:\nrepo:\ncommit:\nseed:\nsetup:\nmetrics:\noutputs:\nresult:\nlimit:\nreproduce:\nrelated:",
      },
      { title: "Rule", body: "If a field is missing, the claim should be treated as weaker until the receipt is repaired." },
      { title: "Bound", body: "Receipts support narrow claims. They do not automatically generalize to broad model capability." },
    ],
  },
  {
    slug: "project-map",
    title: "Project Map",
    summary: "How the public stack fits together.",
    sections: [
      { title: "TS-Core", body: "The graph/tension runtime substrate." },
      { title: "CIG", body: "The provenance-aware claim/evidence graph that stores source, confidence, contradiction, and revision state." },
      { title: "TensionLM", body: "Language-model experiments that test sigmoid tension attention and inspectable telemetry." },
      { title: "Proof Ranker", body: "A small proof-control ladder for scoring, failed-step detection, repair, and verifier loops." },
      { title: "Runtime and agent systems", body: "Experimental branches that sit above the core stack once receipts are strong enough." },
    ],
  },
];

export function getDoc(slug: string) {
  return docs.find((doc) => doc.slug === slug);
}
