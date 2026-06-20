export type LineageStatus =
  | "Current"
  | "Supporting"
  | "Historical"
  | "Superseded"
  | "Scratch";

export type LineageEntry = {
  name: string;
  status: LineageStatus;
  idea: string;
  survives: string;
  successor: string;
  repoUrl?: string;
  repoCount?: number;
  aliases?: string[];
};

export type LineageGroup = {
  id: string;
  title: string;
  period: string;
  summary: string;
  entries: LineageEntry[];
};

export const lineageGroups: LineageGroup[] = [
  {
    "id": "current-programmes",
    "title": "Current programmes",
    "period": "2026 — present",
    "summary": "The repositories carrying the current scientific and engineering questions.",
    "entries": [
      {
        "name": "Ten-SON-LM",
        "status": "Current",
        "idea": "Recurrent semantic workspace with learned tension controlling revision, sparse routing, relaxation, and readout.",
        "survives": "Workspace architecture, causal tension interventions, and matched learned-gate baselines.",
        "successor": "Current model-science line",
        "repoUrl": "https://github.com/BoggersTheFish/Ten-SON-LM"
      },
      {
        "name": "TensionForge",
        "status": "Current",
        "idea": "Verifier-first OpenCL training runtime for legacy AMD hardware.",
        "survives": "Forward/backward/optimizer parity, persistent device state, and honest performance diagnosis.",
        "successor": "Current compute/runtime line",
        "repoUrl": "https://github.com/BoggersTheFish/TensionForge"
      },
      {
        "name": "tsq",
        "status": "Current",
        "idea": "Verifier-gated adaptive precision that escalates compute when tension justifies it.",
        "survives": "Precision-routing semantics, repair loops, and cognitive/compute receipts.",
        "successor": "Current adaptive-inference line",
        "repoUrl": "https://github.com/BoggersTheFish/tsq"
      },
      {
        "name": "ts-chat-language",
        "status": "Current",
        "idea": "Deterministic text-to-MeaningGraph compilation, graph-diff memory, planning, and rendering.",
        "survives": "Stable semantic identities, persistent corrections, and a non-LLM language boundary.",
        "successor": "Current language/interface line",
        "repoUrl": "https://github.com/BoggersTheFish/ts-chat-language"
      },
      {
        "name": "TS-Reasoner-v0",
        "status": "Current",
        "idea": "Typed verifier authority over candidate acceptance, repair, memory, and rejection.",
        "survives": "The verifier-first operation firewall and receipt-backed state transitions.",
        "successor": "Current verifier/reasoning line",
        "repoUrl": "https://github.com/BoggersTheFish/TS-Reasoner-v0"
      },
      {
        "name": "TS-Benchmarks",
        "status": "Current",
        "idea": "Audit-first falsification harness for graph, reasoning, model, and compute experiments.",
        "survives": "Fixed generators, matched baselines, replay, and visible failure categories.",
        "successor": "Shared evidence layer",
        "repoUrl": "https://github.com/BoggersTheFish/TS-Benchmarks"
      },
      {
        "name": "bogbin",
        "status": "Current",
        "idea": "Verified storage and computing substrate with canonical state, capabilities, workspaces, journals, and rollback.",
        "survives": "Exact round trips, state roots, deterministic transitions, and runtime receipts.",
        "successor": "Current verified-computing line",
        "repoUrl": "https://github.com/BoggersTheFish/bogbin"
      },
      {
        "name": "TensionLM",
        "status": "Current",
        "idea": "Earlier sigmoid pairwise-tension attention and model telemetry experiments.",
        "survives": "Runnable baselines, public artifacts, matched comparisons, and negative results.",
        "successor": "Ten-SON-LM",
        "repoUrl": "https://github.com/BoggersTheFish/TensionLM"
      }
    ]
  },
  {
    "id": "supporting-infrastructure",
    "title": "Supporting infrastructure",
    "period": "Reusable or specialist branches",
    "summary": "Useful machinery and bounded demonstrations that should not compete for the word flagship.",
    "entries": [
      {
        "name": "TS-Core",
        "status": "Supporting",
        "idea": "Compact graph/tension kernel for propagation, relaxation, contradiction, and revision.",
        "survives": "The reusable substrate vocabulary and deterministic mechanics.",
        "successor": "Shared library",
        "repoUrl": "https://github.com/BoggersTheFish/TS-Core"
      },
      {
        "name": "BoggersTheCIG",
        "status": "Supporting",
        "idea": "Large provenance-aware claim, evidence, confidence, contradiction, and revision graph.",
        "survives": "The durable knowledge-graph vision and provenance discipline.",
        "successor": "cig-ts-engine and this website",
        "repoUrl": "https://github.com/BoggersTheFish/BoggersTheCIG"
      },
      {
        "name": "cig-ts-engine",
        "status": "Supporting",
        "idea": "Smaller deterministic CIG engine for graph state, tension, derivatives, and Break/Evolve proposals.",
        "survives": "A compact implementation that is easier to inspect and test.",
        "successor": "Canonical compact CIG implementation",
        "repoUrl": "https://github.com/BoggersTheFish/cig-ts-engine"
      },
      {
        "name": "TS-Codex-OS",
        "status": "Supporting",
        "idea": "Project graph, tension ledger, planner, and receipts for local coding workflows.",
        "survives": "Engineering state and planned transitions should be explicit and reviewable.",
        "successor": "Verifier-first development tooling",
        "repoUrl": "https://github.com/BoggersTheFish/TS-Codex-OS"
      },
      {
        "name": "3b_solution",
        "status": "Supporting",
        "idea": "Tension-adaptive integration applied to the three-body problem.",
        "survives": "A concrete application and an honest loss against DOP853 in the tested setup.",
        "successor": "Application evidence",
        "repoUrl": "https://github.com/BoggersTheFish/3b_solution"
      },
      {
        "name": "BogOS-Native",
        "status": "Supporting",
        "idea": "Native-oriented exploration of lower-level BogOS execution.",
        "survives": "The boundary between user-space verified prototypes and future native work.",
        "successor": "bogbin",
        "repoUrl": "https://github.com/BoggersTheFish/BogOS-Native"
      }
    ]
  },
  {
    "id": "public-entrypoints",
    "title": "Public entrypoints",
    "period": "Navigation and identity",
    "summary": "Repositories that explain, route, or present the work rather than add another mechanism.",
    "entries": [
      {
        "name": "TS-Start-Here",
        "status": "Supporting",
        "idea": "Credibility-first ecosystem map.",
        "survives": "The need for one canonical explanation.",
        "successor": "This website",
        "repoUrl": "https://github.com/BoggersTheFish/TS-Start-Here"
      },
      {
        "name": "BoggersTheFish",
        "status": "Supporting",
        "idea": "GitHub profile index.",
        "survives": "A minimal route from GitHub to current work.",
        "successor": "Reduced profile plus this website",
        "repoUrl": "https://github.com/BoggersTheFish/BoggersTheFish"
      },
      {
        "name": "boggersthefish-site",
        "status": "Current",
        "idea": "Permanent field archive for current systems, evidence, failures, and deleted-repository ideas.",
        "survives": "The whole public narrative and lineage.",
        "successor": "Canonical public record",
        "repoUrl": "https://github.com/BoggersTheFish/boggersthefish-site"
      }
    ]
  },
  {
    "id": "earlier-reasoning-model-lineage",
    "title": "Earlier reasoning and model lineage",
    "period": "Prototype waves",
    "summary": "Earlier attempts that developed the vocabulary and boundaries of TS. Their code may disappear; their useful ideas remain here.",
    "entries": [
      {
        "name": "GOAT-TS",
        "status": "Historical",
        "idea": "Early broad implementation of TS as graph-based reasoning.",
        "survives": "Constraint graphs, propagation, tension, relaxation, and explicit reasoning state.",
        "successor": "TS-Core and TS-Reasoner-v0"
      },
      {
        "name": "GOAT-SIMPLE",
        "status": "Superseded",
        "idea": "Stripped-down presentation of early GOAT mechanics.",
        "survives": "Small inspectable demonstrations before ecosystem claims.",
        "successor": "TS-Core"
      },
      {
        "name": "BOG-TS",
        "status": "Historical",
        "idea": "Alternate TS packaging during architectural consolidation.",
        "survives": "The move from broad branding toward modular components.",
        "successor": "TS-Core and TS-Reasoner-v0"
      },
      {
        "name": "GOAT-TS-DEVELOPMENT",
        "status": "Superseded",
        "idea": "Fast-moving development branch for GOAT experiments.",
        "survives": "Intermediate experiments absorbed by dedicated repositories.",
        "successor": "Specialised TS repositories"
      },
      {
        "name": "GOAT-TS-LITE",
        "status": "Superseded",
        "idea": "Reduced GOAT runtime.",
        "survives": "Pressure toward smaller reproducible kernels.",
        "successor": "TS-Core"
      },
      {
        "name": "GOAT-TS-SUPERLITE",
        "status": "Superseded",
        "idea": "Minimal GOAT derivative.",
        "survives": "Preference for falsifiable mechanisms over all-in-one systems.",
        "successor": "TS-Core and microbenchmarks"
      },
      {
        "name": "GOAT-PUBLIC_TEST",
        "status": "Superseded",
        "idea": "Public testing surface for early GOAT work.",
        "survives": "Repeatable entrypoints and evidence packs.",
        "successor": "TS-Benchmarks and this website"
      },
      {
        "name": "BoggersTheSystem",
        "status": "Historical",
        "idea": "Minimal synthesis of memory, reasoning, and response.",
        "survives": "System functions later separated into explicit boundaries.",
        "successor": "ts-chat-language and TS-Reasoner-v0"
      },
      {
        "name": "BoggersTheAI",
        "status": "Historical",
        "idea": "Broader TS-native assistant/runtime synthesis.",
        "survives": "Usability and reasoning substrate should be developed separately.",
        "successor": "ts-chat-language and TS-Reasoner-v0"
      },
      {
        "name": "BoggersTheAI-Dev",
        "status": "Superseded",
        "idea": "Development branch of BoggersTheAI.",
        "survives": "Intermediate experiments absorbed elsewhere.",
        "successor": "Current language and verifier lines"
      },
      {
        "name": "BoggersTheMind",
        "status": "Historical",
        "idea": "Local assistant and personal cognitive-system branch.",
        "survives": "Persistent state, inspectable memory, and a human-facing interface.",
        "successor": "ts-chat-language and CIG"
      },
      {
        "name": "BoggersTheLLM",
        "status": "Historical",
        "idea": "Early custom language-model direction around TS concepts.",
        "survives": "A TS-native language system need not be an external-LLM wrapper.",
        "successor": "TensionLM, Ten-SON-LM, and ts-chat-language"
      },
      {
        "name": "ts-llm",
        "status": "Historical",
        "idea": "Attractor-oriented TS language-model experiment.",
        "survives": "Stable semantic configurations and structured state as model targets.",
        "successor": "Ten-SON-LM"
      },
      {
        "name": "woke-baby-llm",
        "status": "Historical",
        "idea": "Tiny baseline exposing basic trainable language-model mechanics.",
        "survives": "A simple reference against more complex mechanisms.",
        "successor": "TinyLLM and TensionLM"
      },
      {
        "name": "TinyLLM",
        "status": "Historical",
        "idea": "Small educational model experiment.",
        "survives": "Hands-on training experience and a compact baseline.",
        "successor": "TensionLM and Ten-SON-LM"
      },
      {
        "name": "BAGI",
        "status": "Historical",
        "idea": "Broad sketch of how TS components might form a more general system.",
        "survives": "System-decomposition questions, not an AGI claim.",
        "successor": "Modular current programmes"
      },
      {
        "name": "BLM",
        "status": "Historical",
        "idea": "Alternative custom language-model branch.",
        "survives": "Experimental model-building experience.",
        "successor": "TensionLM and Ten-SON-LM"
      },
      {
        "name": "BoggersBrain",
        "status": "Historical",
        "idea": "Early cognitive-architecture container.",
        "survives": "Cognitive functions should be explicit modules.",
        "successor": "TS-Core, CIG, and TS-Reasoner-v0"
      },
      {
        "name": "BoggersThePulse",
        "status": "Historical",
        "idea": "Pulse, activation, and evolving-state dynamics.",
        "survives": "Dynamic activation and propagation as first-class state.",
        "successor": "TS-Core and tension-based models"
      },
      {
        "name": "BoggersTheEngine",
        "status": "Historical",
        "idea": "General engine/runtime synthesis for multiple TS mechanisms.",
        "survives": "Clear runtime boundaries and reusable components.",
        "successor": "TS-Core, TS-Reasoner-v0, and bogbin"
      },
      {
        "name": "Discarded scratch branches",
        "status": "Scratch",
        "idea": "Two repositories contained no enduring public research idea worth carrying forward.",
        "survives": "Their existence is counted for an honest inventory; the names and code do not need a permanent public role.",
        "successor": "None",
        "repoCount": 2
      }
    ]
  },
  {
    "id": "os-cig-wave-branches",
    "title": "OS, CIG, wave, and convergence branches",
    "period": "Parallel explorations",
    "summary": "Interfaces, operating-system metaphors, wave dynamics, multi-agent coordination, and attempts to converge the ecosystem.",
    "entries": [
      {
        "name": "GOAT-OS",
        "status": "Historical",
        "idea": "Early TS-as-operating-system substrate.",
        "survives": "Runtime, capability, transition, and receipt framing.",
        "successor": "bogbin"
      },
      {
        "name": "BoggersTheOS-Alpha",
        "status": "Historical",
        "idea": "Alpha-stage OS branch combining TS and low-level runtime ambitions.",
        "survives": "The distinction between simulation, user-space substrate, and native execution.",
        "successor": "bogbin and BogOS-Native"
      },
      {
        "name": "BoggersTheOS-Beta",
        "status": "Historical",
        "idea": "Later staged OS branch.",
        "survives": "Deterministic state, persistent storage, and verifiable transitions.",
        "successor": "bogbin"
      },
      {
        "name": "CIG-APP-V1",
        "status": "Superseded",
        "idea": "First UI surface for navigating CIG knowledge and provenance.",
        "survives": "Human-readable interfaces over claims and revisions.",
        "successor": "This website"
      },
      {
        "name": "CIG-APP-V2",
        "status": "Superseded",
        "idea": "Second CIG application iteration.",
        "survives": "Separation between graph engine and presentation.",
        "successor": "cig-ts-engine and this website"
      },
      {
        "name": "BoggersTheCIG_v2",
        "status": "Superseded",
        "idea": "Second full CIG implementation branch.",
        "survives": "Provenance-aware knowledge state.",
        "successor": "cig-ts-engine and this website"
      },
      {
        "name": "WaveLab branches",
        "status": "Historical",
        "idea": "Parallel laboratories for propagation, relaxation, and wave interaction.",
        "survives": "Wave dynamics as an experiment surface rather than a flagship.",
        "successor": "TS-Core and TS-Benchmarks",
        "repoCount": 2,
        "aliases": [
          "ts-wave-lab",
          "TS-WaveLab"
        ]
      },
      {
        "name": "ts-wave-colony",
        "status": "Historical",
        "idea": "Colony-style coordination among interacting TS processes.",
        "survives": "Distributed local/global tension questions.",
        "successor": "Future bounded coordination experiments"
      },
      {
        "name": "ts-visualizer",
        "status": "Historical",
        "idea": "Visualisation of graph state, activation, waves, and tension.",
        "survives": "Internal state must be visible enough to debug.",
        "successor": "Website diagrams and project diagnostics"
      },
      {
        "name": "TS-MultiAgent",
        "status": "Historical",
        "idea": "Independent tension graphs coordinating through shared waves.",
        "survives": "A bounded multi-agent coordination question.",
        "successor": "Future verifier-gated coordination work"
      },
      {
        "name": "ts-os-unified-convergence",
        "status": "Historical",
        "idea": "Wave 17 attempt to converge many TS repositories into one system.",
        "survives": "Convergence should happen through interfaces and a public map, not another giant repo.",
        "successor": "Current modular stack and this website"
      },
      {
        "name": "boggers-the-dream",
        "status": "Historical",
        "idea": "Offline consolidation or dream-cycle restructuring of stored state.",
        "survives": "Memory consolidation should be explicit, bounded, and reviewable.",
        "successor": "CIG and verifier-gated memory"
      }
    ]
  }
];

export const lineageCount = lineageGroups.reduce(
  (groupTotal, group) =>
    groupTotal +
    group.entries.reduce(
      (entryTotal, entry) => entryTotal + (entry.repoCount ?? 1),
      0
    ),
  0
);
