import { links } from "@/content/site";

export type ProjectStatus = "Live" | "Active" | "Experimental" | "Published" | "In Progress" | "Planned";

export type ResourceLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  name: string;
  href: string;
  status: ProjectStatus;
  summary: string;
  shortDescription: string;
  problem: string;
  method: string;
  evidence: string;
  limits: string;
  repoUrl: string;
  hfUrls: ResourceLink[];
  proofIds: string[];
  installCommand: string;
  inspectCommand: string;
  currentState: string;
  nextMilestone: string;
  tags: string[];
  focus: string[];
  notes: string[];
};

export const tsFrameworkStatement =
  "TS is an engineering framework for modelling information transfer through constraint graphs, tension, propagation, relaxation, contradiction handling, and revision.";

export const projects: Project[] = [
  {
    slug: "ts-reasoner",
    title: "TS-Reasoner v1.0.0",
    name: "TS-Reasoner",
    href: "/projects/ts-reasoner",
    status: "Live",
    summary: "TS-Core-backed typed tension reasoning with learned channel calibration, stress testing, structural repair, and machine-readable receipts.",
    shortDescription: "Runnable typed tension traces with channel calibration, stress, repair, and receipts.",
    problem: "Reasoning demos often blend proof completion, identity collapse, reverse inference, quantifier scope, contradiction, and confidence into one opaque score.",
    method: "Represent reasoning work as typed tension channels over graph state. TensionLM is not in control here: TS-Reasoner verifies channel traces, resolver events, abstentions, and receipts.",
    evidence: "v1.0.0 includes scoped evaluation, generalization stress testing, structural feature repair, and a unified release receipt.",
    limits: "Synthetic, parser-controlled, and not natural-language robust. The next step is a candidate bridge where TensionLM proposes claims and TS-Reasoner remains verifier.",
    repoUrl: links.repos.tsReasoner,
    hfUrls: [],
    proofIds: [],
    installCommand: "git clone https://github.com/BoggersTheFish/TS-Reasoner-v0 && cd TS-Reasoner-v0",
    inspectCommand: "python3 -m unittest discover && python3 scripts/generate_typed_channel_release_receipt.py",
    currentState: "v1.0.0 release is live with typed-channel receipt assets.",
    nextMilestone: "TS-Reasoner v1.1.0: TensionLM candidate bridge.",
    tags: ["typed tension", "reasoning traces", "receipts"],
    focus: ["Typed channels", "Learned calibration", "Release receipts"],
    notes: [
      "TS-Reasoner v1.0.0 demonstrates TS-Core-backed typed tension reasoning with learned channel calibration.",
      "The release preserves trace validity while separating failures into transitivity, identity, directionality, quantifier scope, contradiction, confidence, and surface-structure channels.",
      "TensionLM is next as a candidate proposal layer, not the reasoning authority.",
    ],
  },
  {
    slug: "ts-core",
    title: "TS-Core",
    name: "TS-Core",
    href: "/projects/ts-core",
    status: "Active",
    summary: "Minimal graph/tension runtime for nodes, edges, activation, propagation, relaxation, and Break/Evolve cycles.",
    shortDescription: "Minimal graph/tension runtime for inspectable constraint propagation and relaxation.",
    problem: "Most AI demos hide the substrate. TS-Core makes graph state, activation movement, tension, and relaxation steps explicit enough to test.",
    method: "Represent state as nodes and weighted constraint edges, propagate activation, measure residual tension, relax locally, then split or revise contexts when pressure remains.",
    evidence: "Related receipts TS-003 and TS-010 cover local relaxation and tension telemetry formats.",
    limits: "Current receipts are mechanism receipts and toy-scale graph tests, not broad capability benchmarks.",
    repoUrl: links.repos.tsCore,
    hfUrls: [],
    proofIds: ["TS-003", "TS-010"],
    installCommand: "git clone https://github.com/BoggersTheFish/TS-Core && cd TS-Core",
    inspectCommand: "Run the fixed-seed local relaxation script when the public package lands.",
    currentState: "Public project surface and receipt routing are live; package cleanup is the next stability target.",
    nextMilestone: "TS-Core v0.1 clean package with replayable demos.",
    tags: ["graph runtime", "tension telemetry", "relaxation"],
    focus: ["Graph primitives", "Tension telemetry", "Relaxation loops"],
    notes: [
      "Keeps the system inspectable at node, edge, and wave-step level.",
      "Designed for reproducible experiments before broader product surfaces.",
      "Useful as the shared substrate for TS demos, proofs, and model tooling.",
    ],
  },
  {
    slug: "tensionlm",
    title: "TensionLM",
    name: "TensionLM",
    href: "/projects/tensionlm",
    status: "Experimental",
    summary: "Language model experiments using sigmoid tension attention and inspectable pairwise tension fields.",
    shortDescription: "Sigmoid tension attention experiments with model artifacts and bounded benchmark claims.",
    problem: "Softmax attention is powerful but often opaque at the pairwise pressure level. TensionLM tests whether sigmoid tension fields can expose useful telemetry.",
    method: "Replace or compare attention surfaces with sigmoid tension attention, export pairwise fields, and hold claims to matched softmax-vs-sigmoid receipts.",
    evidence: "Published Hugging Face model line now includes TS-Reasoner v10 and TS Trace Distilled v11, plus proof-bank entries around seeded language traces and telemetry. Claims remain benchmark-bound.",
    limits: "Not a claim that sigmoid tension beats standard attention generally. Broad capability claims require matched benchmark receipts.",
    repoUrl: links.repos.tensionlm,
    hfUrls: [
      { label: "TensionLM-117M", href: links.models.tensionlm117M },
      { label: "TensionLM-117M-FineWeb", href: links.models.tensionlm117MFineWeb },
      { label: "TensionLM-117M-Curriculum", href: links.models.tensionlm117MCurriculum },
      { label: "TensionLM-117M-Curriculum-Stage2", href: links.models.tensionlm117MCurriculumStage2 },
      { label: "TensionLM-Curriculum-13M", href: links.models.tensionlmCurriculum13M },
      { label: "TensionLM-Phase2-TSNative", href: links.models.tensionlmPhase2TSNative },
      { label: "TensionLM-117M-TS-Reasoner-v10", href: links.models.tsReasonerV10 },
      { label: "TensionLM-TS-Trace-Distilled-v11", href: links.models.traceDistilledV11 },
    ],
    proofIds: ["TS-010", "TS-016", "TS-018", "TS-019", "TS-020"],
    installCommand: "git clone https://github.com/BoggersTheFish/TensionLM && cd TensionLM",
    inspectCommand: "Inspect model cards and fixed-prompt traces before treating any claim as broad evidence.",
    currentState: "Public repo and HF-visible v10/v11 model artifacts exist; matched benchmark receipts still need tightening.",
    nextMilestone: "Trace-distillation receipts paired with verifier-loop improvements or explicit failures.",
    tags: ["language models", "sigmoid tension", "telemetry"],
    focus: ["Sigmoid tension attention", "Inspectable fields", "Controlled comparisons"],
    notes: [
      "Claims stay tied to benchmark receipts and model-card limitations.",
      "The research target is interpretability and efficiency evidence, not broad capability claims.",
      "Graph exports and receipts are part of the public evidence loop.",
    ],
  },
  {
    slug: "cig",
    title: "CIG",
    name: "CIG",
    href: "/projects/cig",
    status: "In Progress",
    summary: "Constraint Information Graph for claims, evidence, sources, confidence, contradictions, and revision.",
    shortDescription: "Persistent provenance-aware claim/evidence graph for bounded research claims.",
    problem: "Research archives drift when claims, evidence, source quality, and contradictions are stored as plain prose.",
    method: "Represent claims, evidence, source provenance, confidence, contradictions, and revision pressure as graph objects that can be inspected and updated.",
    evidence: "Related receipts TS-005, TS-009, TS-014, and TS-023 cover contradiction localization, provenance weighting, and dependency-aware consensus.",
    limits: "CIG remains an MVP target until backed by a public dataset, exact repo route, and replayable contradiction tests.",
    repoUrl: links.repos.cig,
    hfUrls: [],
    proofIds: ["TS-005", "TS-009", "TS-014", "TS-023"],
    installCommand: "Open the GitHub profile and confirm the current CIG repo before cloning.",
    inspectCommand: "Inspect claims/evidence/provenance/confidence records and contradiction examples.",
    currentState: "Concept and proof-bank routing are public; exact canonical repo still needs confirmation.",
    nextMilestone: "CIG MVP with claims, evidence, provenance, confidence, and contradiction replay.",
    tags: ["provenance", "knowledge graph", "contradictions"],
    focus: ["Claims and evidence", "Provenance", "Contradiction detection"],
    notes: [
      "Treats knowledge as a graph of claim nodes, source edges, and revision history.",
      "Separates observed evidence from hypotheses and open questions.",
      "Intended to support proof-bank receipts and research notes.",
    ],
  },
  {
    slug: "proof-ranker",
    title: "Proof Ranker",
    name: "Proof Ranker",
    href: "/projects/proof-ranker",
    status: "Published",
    summary: "Small proof-control ladder for proof scoring, repair, verifier loops, and active-frontier experiments.",
    shortDescription: "Verifier-backed proof scoring and repair ladder published as Hugging Face artifacts.",
    problem: "Reasoning traces need cheap ranking, local failure detection, repair attempts, and verifier feedback before expensive model passes.",
    method: "Publish a v0-v4 ladder: existence classification, path quality ranking, local tension failure detection, chain repair, and generator/ranker/verifier active-frontier loops.",
    evidence: "Hugging Face artifacts v0-v4 form the public model ladder. Related proof-bank entries should attach exact verifier receipts as they land.",
    limits: "Small proof-control artifacts are not general reasoning capability proof. They are bounded verifier-loop experiments.",
    repoUrl: links.repos.proofRanker,
    hfUrls: [
      { label: "ts-proof-ranker-v0", href: links.models.proofRankerV0 },
      { label: "ts-proof-ranker-v1", href: links.models.proofRankerV1 },
      { label: "ts-proof-ranker-v2", href: links.models.proofRankerV2 },
      { label: "ts-proof-ranker-v3", href: links.models.proofRankerV3 },
      { label: "ts-proof-ranker-v4", href: links.models.proofRankerV4 },
    ],
    proofIds: ["TS-016", "TS-018", "TS-019", "TS-020", "TS-023"],
    installCommand: "Open the Hugging Face model cards and pair them with verifier scripts before use.",
    inspectCommand: "Compare v0-v4 model cards and verifier-loop notes.",
    currentState: "Published model ladder exists; repo-level routing still needs exact confirmation.",
    nextMilestone: "TS-Reasoner v1.1.0 candidate bridge where proposals are verified by typed channels.",
    tags: ["proof ranking", "verifiers", "repair"],
    focus: ["Proof scoring", "Trace repair", "Verifier-backed loops"],
    notes: [
      "v0: proof existence classifier.",
      "v1: proof path quality ranker.",
      "v2: local tension and failed-step detector.",
      "v3: chain repair.",
      "v4: generator/ranker/verifier active-frontier loop.",
    ],
  },
];

export const secondaryProjects = [
  "BoggersTheLLM",
  "TinyLLM",
  "ts-llm",
  "GOAT-TS",
  "BoggersTheAI",
  "BoggersTheMind",
  "BoggersThePulse",
].map((name) => ({
  name,
  body: "Experimental, historical, or satellite branch. Useful for context, but not the best first-contact path for the current TS stack.",
  href: links.github,
}));

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
