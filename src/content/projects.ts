export type ProjectStatus = "Active" | "Experimental" | "Published" | "In Progress";

export type Project = {
  slug: string;
  name: string;
  href: string;
  status: ProjectStatus;
  shortDescription: string;
  description: string;
  focus: string[];
  notes: string[];
};

export const tsFrameworkStatement =
  "TS is a graph-based framework for modelling information transfer, tension, constraint propagation, and interpretation. It is used here as an engineering and research lens, not as a claim to explain everything.";

export const projects: Project[] = [
  {
    slug: "ts-core",
    name: "TS-Core",
    href: "/projects/ts-core",
    status: "Active",
    shortDescription:
      "Minimal graph/tension runtime for modelling nodes, edges, activation, constraint pressure, propagation, relaxation, and Break/Evolve cycles.",
    description:
      "TS-Core is the small runtime layer for experiments with graph state, activation flow, constraint pressure, propagation, relaxation, and Break/Evolve cycles.",
    focus: ["Graph primitives", "Tension telemetry", "Relaxation loops"],
    notes: [
      "Keeps the system inspectable at node, edge, and wave-step level.",
      "Designed for reproducible experiments before broader product surfaces.",
      "Useful as the shared substrate for TS demos, proofs, and model tooling.",
    ],
  },
  {
    slug: "tensionlm",
    name: "TensionLM",
    href: "/projects/tensionlm",
    status: "Experimental",
    shortDescription:
      "Language model experiments using sigmoid tension attention as an interpretable alternative to softmax attention. Focused on inspectable pairwise tension fields and controlled comparisons.",
    description:
      "TensionLM explores sigmoid tension attention as an interpretable alternative to softmax attention, with emphasis on pairwise tension fields, ablation discipline, and measured comparisons.",
    focus: ["Sigmoid tension attention", "Inspectable fields", "Controlled comparisons"],
    notes: [
      "Claims stay tied to benchmark receipts and model-card limitations.",
      "The research target is interpretability and efficiency evidence, not broad capability claims.",
      "Graph exports and receipts are part of the public evidence loop.",
    ],
  },
  {
    slug: "cig",
    name: "CIG",
    href: "/projects/cig",
    status: "In Progress",
    shortDescription:
      "Constraint Information Graph: persistent knowledge graphs with claims, evidence, provenance, contradiction detection, confidence, and revision.",
    description:
      "CIG is the provenance-aware knowledge layer for persistent claims, evidence links, contradiction detection, confidence tracking, and revision.",
    focus: ["Claims and evidence", "Provenance", "Contradiction detection"],
    notes: [
      "Treats knowledge as a graph of claim nodes, source edges, and revision history.",
      "Separates observed evidence from hypotheses and open questions.",
      "Intended to support proof-bank receipts and research notes.",
    ],
  },
  {
    slug: "proof-ranker",
    name: "Proof Ranker",
    href: "/projects/proof-ranker",
    status: "Published",
    shortDescription:
      "Small proof-ranking and proof-repair models for scoring, evaluating, and improving reasoning traces.",
    description:
      "Proof Ranker contains small proof-ranking and proof-repair experiments for scoring, evaluating, and improving reasoning traces under verifier-backed constraints.",
    focus: ["Proof scoring", "Trace repair", "Verifier-backed loops"],
    notes: [
      "Built for reproducible proof-control experiments.",
      "Grounding comes from verifiers, tests, and retained receipts.",
      "Useful for ranking candidate traces before expensive model passes.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
