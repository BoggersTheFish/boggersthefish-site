export type Proof = {
  id: string;
  title: string;
  status: "Receipt" | "Draft" | "Replication";
  summary: string;
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
    tags: ["relaxation", "graphs", "telemetry"],
    route: "/proof-bank#ts-003",
  },
  {
    id: "TS-010",
    title: "Tension telemetry",
    status: "Receipt",
    summary:
      "Run log format for recording tension, activation, graph size, and stability over a wave cycle.",
    tags: ["tension telemetry", "receipts", "runtime"],
    route: "/proof-bank#ts-010",
  },
  {
    id: "TS-016",
    title: "Seeded language engine",
    status: "Draft",
    summary:
      "Language experiment notes for seeded generation with inspectable attention/tension traces.",
    tags: ["language", "tension", "modeling"],
    route: "/proof-bank#ts-016",
  },
  {
    id: "TS-023",
    title: "Dependency-aware consensus",
    status: "Replication",
    summary:
      "Design note for weighing agreement by dependency structure, source provenance, and contradiction pressure.",
    tags: ["cig", "provenance", "consensus"],
    route: "/proof-bank#ts-023",
  },
];

export const proofFilters = ["All", "Receipts", "Drafts", "Replication", "Tension", "CIG"];
