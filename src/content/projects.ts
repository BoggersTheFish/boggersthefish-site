import { links } from "@/content/site";

export type ProjectStatus =
  | "Live"
  | "Active"
  | "Experimental"
  | "Published"
  | "In Progress"
  | "Planned";

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
  "TS is a verifier-first research programme exploring explicit semantic state, constraint graphs, tension signals, typed checks, adaptive compute, and deterministic state transitions.";

export const projects: Project[] = [
  {
    slug: "ts-reasoner",
    title: "TS-Reasoner",
    name: "TS-Reasoner",
    href: "/projects/ts-reasoner",
    status: "Live",
    summary:
      "A verifier-first operation firewall where models may propose candidates, but typed checks decide what is accepted, repaired, remembered, or rejected.",
    shortDescription:
      "Typed verifier authority, containment, repair, memory, risk gates, replay, and receipts.",
    problem:
      "Fluent systems can collapse confidence, plausibility, proof, memory, and policy into one opaque decision.",
    method:
      "Keep proposal generation outside the proof boundary. Candidates enter typed verifiers, risk gates, repair loops, and receipt-backed memory transitions.",
    evidence:
      "Public milestones demonstrate typed support, rejection without contamination, bounded repair, replay, ledgers, checkpoint/restore, and explicit abstention.",
    limits:
      "Runtime integrity is not claim truth. Generated text and model confidence are not proof. The public experiments are bounded and domain-specific.",
    repoUrl: links.repos.tsReasoner,
    hfUrls: [{ label: "TS-TinyVerifier-v0", href: links.models.tsTinyVerifierV0 }],
    proofIds: [],
    installCommand:
      "git clone https://github.com/BoggersTheFish/TS-Reasoner-v0 && cd TS-Reasoner-v0",
    inspectCommand:
      "Run the test suite and inspect verifier decisions, support types, repair receipts, memory writes, and abstentions.",
    currentState:
      "The strongest mature TS component: a broad verifier-first research stack with explicit non-claims and auditable state transitions.",
    nextMilestone:
      "Connect ts-chat-language MeaningGraphs to typed verification and produce one unified turn receipt across compilation, checking, state, planning, and rendering.",
    tags: ["typed verification", "operation firewall", "receipts"],
    focus: ["Verifier authority", "Containment", "Repair and memory"],
    notes: [
      "Models propose; typed verifiers decide.",
      "Rejected candidates must not contaminate accepted state.",
      "The useful claim is inspectable control, not general intelligence.",
    ],
  },
  {
    slug: "ts-chat-language",
    title: "TS Chat Language",
    name: "ts-chat-language",
    href: "/projects/ts-chat-language",
    status: "Active",
    summary:
      "A deterministic language compiler from text into dialogue acts, semantic frames, a MeaningGraph, graph-diff memory, response plans, and rendered language.",
    shortDescription:
      "Human language to inspectable semantic state without using an external LLM as the language substrate.",
    problem:
      "A verifier-first system still needs a usable language boundary, but a normal chatbot can silently bypass structured state and typed checks.",
    method:
      "Compile text through normalisation, dialogue acts, semantic frames, stable graph identities, state transitions, response planning, and language-specific rendering.",
    evidence:
      "The repository contains a working compiler shell, MeaningGraph, stable IDs, graph-driven state/planning, graph-diff memory, language packs, and declarative graph/topic rules.",
    limits:
      "The current compiler is pattern-backed and bounded. It is not broad natural-language understanding and is not yet integrated end-to-end with TS-Reasoner.",
    repoUrl: links.repos.tsChatLanguage,
    hfUrls: [],
    proofIds: [],
    installCommand:
      "git clone https://github.com/BoggersTheFish/ts-chat-language && cd ts-chat-language",
    inspectCommand:
      "Run the golden dialogue cases and inspect compiled frames, graph diffs, remembered corrections, plans, and rendered responses.",
    currentState:
      "A coherent deterministic dialogue substrate exists through v0.8, but its most important proof will be integration with verifier authority.",
    nextMilestone:
      "Build the TSLC → TS-Reasoner bridge and test 50–100 adversarial multi-turn conversations with persistent corrections and unsupported-claim abstention.",
    tags: ["meaning graph", "dialogue compiler", "deterministic language"],
    focus: ["Semantic compilation", "Graph-diff memory", "Response planning"],
    notes: [
      "No external LLM is required for the core compiler.",
      "Templates must not bypass semantic state.",
      "Corrections and rejections should persist as explicit graph changes.",
    ],
  },
  {
    slug: "ten-son-lm",
    title: "Ten-SON-LM",
    name: "Ten-SON-LM",
    href: "/projects/ten-son-lm",
    status: "Active",
    summary:
      "A recurrent language architecture with a fixed-size semantic workspace where learned tension controls revision, sparse routing, relaxation, and readout.",
    shortDescription:
      "Tests whether tension is a useful causal control signal inside a recurrent semantic workspace.",
    problem:
      "Calling an internal gate tension means little unless controlled interventions show that it contributes something beyond ordinary learned gating.",
    method:
      "Route token-derived proposals into a fixed workspace, update selected slots through learned tension, relax state recurrently, and read output from workspace context.",
    evidence:
      "Milestone 1 learned delayed recall, balanced brackets, and a synthetic next-token task. Copy failed its threshold; tension evidence was strong on delayed recall but mixed elsewhere.",
    limits:
      "The validation result is Partial. Slot-specific tension is not yet proven, and the architecture has not established an advantage over matched recurrent or learned-gate baselines.",
    repoUrl: links.repos.tenSon,
    hfUrls: [],
    proofIds: [],
    installCommand:
      "git clone https://github.com/BoggersTheFish/Ten-SON-LM && cd Ten-SON-LM",
    inspectCommand:
      "Read the Milestone 1 report, inspect task-level receipts, and compare learned, shuffled, frozen, constant, and inverted tension interventions.",
    currentState:
      "A working scientific substrate with promising but incomplete causal evidence.",
    nextMilestone:
      "Milestone 1.1: explain the copy failure and run pre-registered causal interventions against equal-sized GRU/LSTM/workspace learned-gate baselines.",
    tags: ["semantic workspace", "recurrent model", "causal tension"],
    focus: ["Workspace revision", "Sparse routing", "Causal interventions"],
    notes: [
      "The token may query the workspace but should not bypass it into the output.",
      "Negative task results remain part of the evidence.",
      "The core question is whether tension does useful causal work.",
    ],
  },
  {
    slug: "tensionforge",
    title: "TensionForge",
    name: "TensionForge",
    href: "/projects/tensionforge",
    status: "Active",
    summary:
      "A verifier-first OpenCL training runtime for legacy AMD hardware, built around exact parity receipts before performance claims.",
    shortDescription:
      "Custom RX 480 OpenCL training with forward, backward, optimizer, and recurrent parity evidence.",
    problem:
      "Legacy commodity GPUs are poorly served by current ML stacks, while custom kernels can easily appear correct without proving numerical parity.",
    method:
      "Implement persistent device tensors, fused linear/tension operations, backward passes, AdamW, and recurrent cells, then compare each stage against a reference implementation.",
    evidence:
      "The runtime demonstrates OpenCL SAXPY, tiled matmul, full linear training, and Ten-SON forward/backward/multi-step optimizer parity.",
    limits:
      "It is currently much slower than PyTorch CPU on the tested workloads. It is not a performance win yet.",
    repoUrl: links.repos.tensionForge,
    hfUrls: [],
    proofIds: [],
    installCommand:
      "git clone https://github.com/BoggersTheFish/TensionForge && cd TensionForge",
    inspectCommand:
      "Run the parity harnesses, then profile launch count, dispatch overhead, small-matrix occupancy, serial recurrence, temporary buffers, and device readbacks.",
    currentState:
      "Correct enough to investigate honestly; too slow to present as practical acceleration.",
    nextMilestone:
      "Reach within 2× of the CPU reference or explicitly classify the project as a verification/research backend rather than an accelerator.",
    tags: ["OpenCL", "legacy AMD", "training runtime"],
    focus: ["Numerical parity", "Kernel fusion", "Performance diagnosis"],
    notes: [
      "Verified parity comes before speed claims.",
      "The RX 480 path is real and reproducible.",
      "A measured slowdown is more useful than a fictional benchmark win.",
    ],
  },
  {
    slug: "tsq",
    title: "TSQ",
    name: "TSQ",
    href: "/projects/tsq",
    status: "Experimental",
    summary:
      "Tension-Structured Quantization: a verifier-gated runtime that keeps ordinary inference cheap and escalates precision or repair when tension justifies the cost.",
    shortDescription:
      "Adaptive precision routing with cognitive and compute receipts.",
    problem:
      "Static quantization spends the same numerical precision regardless of whether a token or reasoning step is routine, unstable, or verifier-critical.",
    method:
      "Estimate cheap tension signals, route through a low-precision path by default, escalate on uncertainty or verifier failure, and record both cognitive and compute receipts.",
    evidence:
      "A runnable routing loop, mock and Transformers backends, verifier repair, evaluation/cost accounting, data preparation, LoRA scripts, and an adapter experiment harness exist.",
    limits:
      "No custom quantization kernels or committed model-quality result exist yet. Precision labels are routing labels unless mapped to genuinely distinct numerical models.",
    repoUrl: links.repos.tsq,
    hfUrls: [],
    proofIds: [],
    installCommand:
      "git clone https://github.com/BoggersTheFish/tsq && cd tsq",
    inspectCommand:
      "Compare always-low, always-high, and dynamic routes only after the backends execute materially different precision paths.",
    currentState:
      "A serious runtime and experiment harness, but not yet proof of adaptive-quantization efficiency.",
    nextMilestone:
      "Implement real low/high precision execution and measure wall time, peak memory, bytes moved, verifier pass rate, repairs, and output quality.",
    tags: ["adaptive precision", "quantization", "compute receipts"],
    focus: ["Precision routing", "Verifier escalation", "Measured efficiency"],
    notes: [
      "Estimated cost units are not measured energy.",
      "Routing labels alone are not quantization.",
      "The comparison must include always-low and always-high baselines.",
    ],
  },
  {
    slug: "bogos",
    title: "bogbin / BogOS",
    name: "bogbin",
    href: "/projects/bogos",
    status: "Active",
    summary:
      "A deterministic verified storage and computing substrate spanning exact containers, packages, processes, filesystems, persistent workspaces, and append-only journals.",
    shortDescription:
      "Verified storage, execution, workspace roots, persistence, and rollback receipts.",
    problem:
      "Systems work often relies on mutable opaque state, making exact replay, provenance, rollback, and trust boundaries difficult to inspect.",
    method:
      "Use canonical serialization, hashes, capabilities, manifests, state roots, deterministic transitions, and receipts across storage and runtime operations.",
    evidence:
      "The repository has progressed through exact file round trips, package verification, scheduling, paging, loaders, syscalls, IPC, writable/persistent BogFS, disk-loaded apps, workspace roots, and journal persistence.",
    limits:
      "This remains a research substrate. It is not a production host kernel, general-purpose operating system, or proven secure hardware platform.",
    repoUrl: links.repos.bogbin,
    hfUrls: [],
    proofIds: [],
    installCommand:
      "git clone https://github.com/BoggersTheFish/bogbin && cd bogbin",
    inspectCommand:
      "Run the milestone tests and inspect canonical vectors, boot logs, state roots, workspace receipts, journal loading, and rollback behaviour.",
    currentState:
      "The deepest systems-engineering line in the ecosystem, with v41.1-era journal persistence beyond the older public release label.",
    nextMilestone:
      "Align README, release tags, status documents, and a visible QEMU/reference demo before expanding the kernel surface further.",
    tags: ["verified storage", "workspace journal", "deterministic runtime"],
    focus: ["Canonical state", "Capabilities", "Persistence and rollback"],
    notes: [
      "Exact round trip and state verification are the core claims.",
      "The OS metaphor should not outrun the implemented substrate.",
      "Version and release authority need consolidation.",
    ],
  },
  {
    slug: "ts-benchmarks",
    title: "TS-Benchmarks",
    name: "TS-Benchmarks",
    href: "/projects/ts-benchmarks",
    status: "Active",
    summary:
      "An audit-first falsification harness for graph relaxation, hard reasoning, matched model comparisons, and compute experiments.",
    shortDescription:
      "Shared experiments designed to expose failure and neutral results, not manufacture wins.",
    problem:
      "A large family of prototypes can generate anecdotes faster than it generates comparable evidence.",
    method:
      "Define fixed generators, baselines, acceptance thresholds, receipts, replay paths, and visible failure categories before interpreting results.",
    evidence:
      "The repository includes graph generators, graph relaxation tests, scale-free failure evidence, hard-reasoning work, matched TensionLM campaigns, and GPU/Triton microbenchmarks.",
    limits:
      "Coverage is still fragmented. A benchmark harness only helps when active projects adopt it and pre-register what would count as success or failure.",
    repoUrl: links.repos.tsBenchmarks,
    hfUrls: [],
    proofIds: [],
    installCommand:
      "git clone https://github.com/BoggersTheFish/TS-Benchmarks && cd TS-Benchmarks",
    inspectCommand:
      "Start with the generators and explicit failures, then compare project claims against fixed seeds and matched baselines.",
    currentState:
      "Useful falsification infrastructure that needs to become the common evaluation route for Ten-SON, TSQ, and verifier integration.",
    nextMilestone:
      "Standardise experiment manifests and acceptance criteria across the active project stack.",
    tags: ["falsification", "baselines", "replay"],
    focus: ["Fixed generators", "Matched comparisons", "Failure visibility"],
    notes: [
      "Scale limits are reportable results.",
      "Neutral comparisons are valid outcomes.",
      "Benchmarks should constrain project narratives.",
    ],
  },
  {
    slug: "tensionlm",
    title: "TensionLM",
    name: "TensionLM",
    href: "/projects/tensionlm",
    status: "Experimental",
    summary:
      "The earlier model-science line testing sigmoid pairwise tension attention, telemetry, curriculum behaviour, and bounded formal-domain signals.",
    shortDescription:
      "Previous-generation tension-attention experiments and public model artifacts.",
    problem:
      "Standard attention offers strong capability but does not directly expose an independent pairwise pressure field with the intended TS interpretation.",
    method:
      "Replace or compare softmax attention with sigmoid pairwise tension, export telemetry, train small models, and evaluate matched tasks.",
    evidence:
      "The repository contains runnable models, public artifacts, small-scale matched comparisons, curriculum experiments, and formal-domain runs with both positive and negative outcomes.",
    limits:
      "It has not established a general capability advantage over standard attention. Older strong claims should be read under the newer, narrower public evidence boundary.",
    repoUrl: links.repos.tensionlm,
    hfUrls: [
      { label: "TensionLM-117M", href: links.models.tensionlm117M },
      { label: "TensionLM-117M-FineWeb", href: links.models.tensionlm117MFineWeb },
      { label: "TensionLM-117M-Curriculum", href: links.models.tensionlm117MCurriculum },
      { label: "TensionLM-117M-TS-Reasoner-v10", href: links.models.tsReasonerV10 },
      { label: "TensionLM-TS-Trace-Distilled-v11", href: links.models.traceDistilledV11 },
    ],
    proofIds: ["TS-010", "TS-016", "TS-018", "TS-019", "TS-020"],
    installCommand:
      "git clone https://github.com/BoggersTheFish/TensionLM && cd TensionLM",
    inspectCommand:
      "Read the public evidence boundary first, then inspect matched softmax comparisons, formal-domain checkpoints, and failed or regressed final runs.",
    currentState:
      "A valuable previous-generation evidence base; Ten-SON-LM is the clearer current architecture question.",
    nextMilestone:
      "Keep the repository stable as a baseline and evidence archive rather than adding another loosely scoped model branch.",
    tags: ["sigmoid attention", "model telemetry", "previous generation"],
    focus: ["Pairwise tension", "Controlled comparisons", "Evidence archive"],
    notes: [
      "Promising signals are not a general win.",
      "Final checkpoints can be worse than intermediate ones.",
      "The sober public evidence boundary governs the whole repository.",
    ],
  },
];

export const supportProjects: Project[] = [
  {
    slug: "ts-core",
    title: "TS-Core",
    name: "TS-Core",
    href: "/projects/ts-core",
    status: "Active",
    summary:
      "A compact graph/tension kernel for nodes, weighted relations, activation, propagation, relaxation, contradiction handling, and structural revision.",
    shortDescription:
      "Reusable deterministic graph and tension primitives.",
    problem:
      "The ecosystem needs a small shared substrate rather than reimplementing graph dynamics inside every experiment.",
    method:
      "Keep graph state explicit and provide deterministic propagation, tension measurement, relaxation, and revision operations.",
    evidence:
      "The repository exposes a stable graph/tension runtime with typed mechanics and bounded demonstrations.",
    limits:
      "It is a library, not a complete reasoner, language model, or proof of cognitive capability.",
    repoUrl: links.repos.tsCore,
    hfUrls: [],
    proofIds: ["TS-003", "TS-010"],
    installCommand:
      "git clone https://github.com/BoggersTheFish/TS-Core && cd TS-Core",
    inspectCommand:
      "Inspect the node, edge, propagation, relaxation, and tension interfaces before extending them.",
    currentState:
      "Maintenance substrate for projects that genuinely share its interfaces.",
    nextMilestone:
      "Stabilise only the interfaces required by active repositories; avoid independent feature expansion.",
    tags: ["graph runtime", "tension", "shared kernel"],
    focus: ["Graph primitives", "Determinism", "Reusable interfaces"],
    notes: [],
  },
  {
    slug: "cig",
    title: "CIG",
    name: "cig-ts-engine",
    href: "/projects/cig",
    status: "In Progress",
    summary:
      "A compact deterministic claim/evidence graph engine for provenance, contradiction, confidence, propagation, derivatives, and structural revision.",
    shortDescription:
      "Inspectable claim, evidence, provenance, and contradiction state.",
    problem:
      "Research archives drift when claims, sources, confidence, contradictions, and revisions live only as prose.",
    method:
      "Represent knowledge state as explicit graph objects and run deterministic tension and revision operations over them.",
    evidence:
      "The compact engine contains runnable propagation, tension, derivative, visualisation, and Break/Evolve demonstrations.",
    limits:
      "The included graphs are hand-authored and the dynamics are deliberately simple. It is not a production knowledge base.",
    repoUrl: links.repos.cig,
    hfUrls: [],
    proofIds: ["TS-005", "TS-009", "TS-014", "TS-023"],
    installCommand:
      "git clone https://github.com/BoggersTheFish/cig-ts-engine && cd cig-ts-engine",
    inspectCommand:
      "Run the claim/evidence examples and inspect every provenance, tension, and proposed revision transition.",
    currentState:
      "The compact canonical CIG implementation; the much larger BoggersTheCIG repository becomes historical/source material.",
    nextMilestone:
      "Define one public dataset and contradiction-replay suite that can connect the engine to the website archive.",
    tags: ["provenance", "claim graph", "contradictions"],
    focus: ["Claims and evidence", "Revision history", "Contradiction replay"],
    notes: [],
  },
  {
    slug: "proof-ranker",
    title: "Proof Ranker",
    name: "Proof Ranker",
    href: "/projects/proof-ranker",
    status: "Published",
    summary:
      "A bounded model ladder for proof existence, path quality, local failure detection, repair, and generator/ranker/verifier loops.",
    shortDescription:
      "Small verifier-backed proof-control experiments.",
    problem:
      "Candidate traces need cheap local ranking and repair signals before expensive or authoritative verification.",
    method:
      "Train and publish a staged family of small classifiers/rankers, then keep the typed verifier outside the learned proof boundary.",
    evidence:
      "Public Hugging Face artifacts cover proof existence, path quality, local tension/failure detection, chain repair, and active-frontier loops.",
    limits:
      "These are narrow proof-control artifacts, not general reasoning capability.",
    repoUrl: links.repos.proofRanker,
    hfUrls: [
      { label: "ts-proof-ranker-v0", href: links.models.proofRankerV0 },
      { label: "ts-proof-ranker-v1", href: links.models.proofRankerV1 },
      { label: "ts-proof-ranker-v2", href: links.models.proofRankerV2 },
      { label: "ts-proof-ranker-v3", href: links.models.proofRankerV3 },
      { label: "ts-proof-ranker-v4", href: links.models.proofRankerV4 },
    ],
    proofIds: ["TS-016", "TS-018", "TS-019", "TS-020", "TS-023"],
    installCommand:
      "Open the model cards and pair learned outputs with typed verifier scripts.",
    inspectCommand:
      "Compare the v0–v4 task boundaries and ensure no learned score is treated as proof authority.",
    currentState:
      "A published support experiment rather than a separate flagship programme.",
    nextMilestone:
      "Use only where it improves a measured TS-Reasoner pipeline.",
    tags: ["proof ranking", "repair", "learned support"],
    focus: ["Candidate ranking", "Failure localisation", "Verifier separation"],
    notes: [
      "v0: proof existence.",
      "v1: path quality.",
      "v2: local failure detection.",
      "v3: chain repair.",
      "v4: generator/ranker/verifier loop.",
    ],
  },
];

export const secondaryProjects = supportProjects.map((project) => ({
  name: project.title,
  body: project.shortDescription,
  href: project.href,
}));

const allProjects = [...projects, ...supportProjects];

export function getProject(slug: string) {
  return allProjects.find((project) => project.slug === slug);
}
