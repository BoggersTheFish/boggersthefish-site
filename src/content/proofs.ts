export type Proof = {
  id: string;
  title: string;
  status: "Receipt" | "Draft" | "Replication";
  summary: string;
  claim: string;
  setup: string;
  result: string;
  limit: string;
  reproduce: string;
  relatedRepo: {
    label: string;
    href: string;
  };
  tags: string[];
  route: string;
};

export const proofs: Proof[] = [
  {
    id: "TS-003",
    title: "Local relaxation",
    status: "Receipt",
    summary:
      "Small graph relaxation run showing how local constraint pressure settles after propagation and decay.",
    claim:
      "Local graph updates can be tracked as activation, pressure, and relaxation telemetry rather than opaque state changes.",
    setup:
      "Run a small TS-Core-style graph with node activation, weighted edges, propagation, decay, and tension logging enabled.",
    result:
      "The receipt records pressure settling after propagation, including changed node activations and relaxation steps.",
    limit:
      "This is a mechanism receipt, not a broad reasoning benchmark. It shows inspectability of a local runtime pattern.",
    reproduce:
      "Rebuild the small graph, run a fixed-seed propagation/relaxation cycle, and compare the emitted telemetry JSON.",
    relatedRepo: {
      label: "TS-Core",
      href: "https://github.com/BoggersTheFish/TS-Core",
    },
    tags: ["relaxation", "graphs", "telemetry"],
    route: "/proof-bank#ts-003",
  },
  {
    id: "TS-010",
    title: "Tension telemetry",
    status: "Receipt",
    summary:
      "Run log format for recording tension, activation, graph size, and stability over a wave cycle.",
    claim:
      "Tension should be reported as first-class runtime evidence: graph size, activation movement, and relaxation steps belong in the receipt.",
    setup:
      "Instrument graph/tension experiments with per-run metadata and a stable schema for wall time, memory, graph counts, and checkpoints.",
    result:
      "The proof-bank format captures the fields needed to replay or audit a TS experiment without relying on narrative claims.",
    limit:
      "Telemetry quality depends on the experiment harness. Missing seeds, commits, or checkpoint hashes weaken the receipt.",
    reproduce:
      "Use the receipt schema on a fixed run and verify that logs include setup, metrics, outputs, limits, and replay command.",
    relatedRepo: {
      label: "bozo / TensionLM",
      href: "https://github.com/BoggersTheFish/bozo",
    },
    tags: ["tension telemetry", "receipts", "runtime"],
    route: "/proof-bank#ts-010",
  },
  {
    id: "TS-016",
    title: "Seeded language engine",
    status: "Draft",
    summary:
      "Language experiment notes for seeded generation with inspectable attention/tension traces.",
    claim:
      "Language experiments are more useful when the model surface is paired with inspectable tension or attention traces.",
    setup:
      "Run seeded generation with a fixed prompt set and export pairwise tension fields or comparable attention diagnostics.",
    result:
      "The draft records the desired evidence shape for comparing generated text with the internal trace that produced it.",
    limit:
      "This entry is not a completed capability claim. It is a scaffold for controlled TensionLM language receipts.",
    reproduce:
      "Use a fixed checkpoint, fixed prompts, deterministic decoding where available, and export the trace alongside outputs.",
    relatedRepo: {
      label: "TensionLM",
      href: "https://github.com/BoggersTheFish/bozo",
    },
    tags: ["language", "tension", "modeling"],
    route: "/proof-bank#ts-016",
  },
  {
    id: "TS-023",
    title: "Dependency-aware consensus",
    status: "Replication",
    summary:
      "Design note for weighing agreement by dependency structure, source provenance, and contradiction pressure.",
    claim:
      "Agreement between claims should be weighted by dependency structure, evidence provenance, and contradiction pressure.",
    setup:
      "Represent claims, sources, dependencies, and contradictions in a CIG-style graph with confidence and revision metadata.",
    result:
      "The replication note defines how consensus can be tracked as graph structure rather than a simple vote count.",
    limit:
      "This remains a design/replication target until backed by a public CIG dataset and replayable contradiction tests.",
    reproduce:
      "Create a small claim/evidence graph, introduce conflicting evidence, and verify dependency-aware confidence updates.",
    relatedRepo: {
      label: "CIG",
      href: "https://github.com/BoggersTheFish",
    },
    tags: ["cig", "provenance", "consensus"],
    route: "/proof-bank#ts-023",
  },
];

export const proofFilters = ["All", "Receipts", "Drafts", "Replication", "Tension", "CIG"];
