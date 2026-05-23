export const site = {
  name: "BoggersTheFish",
  tagline: "Building Thinking Systems",
  title: "Small bounded reasoning, inspected.",
  description:
    "TS-Reasoner emits candidate chains, local and global tension, accepted or rejected alternatives, benchmark receipts, and visible failure modes.",
  url: "https://www.boggersthefish.com",
  email: "boggersthefish@gmail.com",
  github: "https://github.com/BoggersTheFish",
  huggingFace: "https://huggingface.co/BoggersTheFish",
  ogImage: "/og-image.svg",
};

export const bgcShortNotice =
  "Boggers Credits (BGC) are experimental off-chain community credits. They are not cryptocurrency, not an investment, not legal tender, not redeemable for cash, and may remain off-chain forever.";

export const bgcFullNotice =
  "Donations support independent TS research, compute, hosting, writing, documentation, and open-source development. Supporters may receive Boggers Credits as non-financial community credits. BGC is experimental, off-chain, not cryptocurrency, not an investment, not legal tender, not equity, not redeemable for money, and not guaranteed to convert to any future token.";

export const links = {
  home: `${site.url}/`,
  github: site.github,
  huggingFace: site.huggingFace,
  email: `mailto:${site.email}`,
  repos: {
    tsCore: "https://github.com/BoggersTheFish/TS-Core",
    tensionlm: "https://github.com/BoggersTheFish/bozo",
    cig: "https://github.com/BoggersTheFish",
    proofRanker: "https://github.com/BoggersTheFish",
  },
  models: {
    tensionlm117M: "https://huggingface.co/BoggersTheFish/TensionLM-117M",
    tensionlm117MFineWeb: "https://huggingface.co/BoggersTheFish/TensionLM-117M-FineWeb",
    tensionlm117MCurriculum: "https://huggingface.co/BoggersTheFish/TensionLM-117M-Curriculum",
    tensionlm117MCurriculumStage2: "https://huggingface.co/BoggersTheFish/TensionLM-117M-Curriculum-Stage2",
    tensionlmCurriculum13M: "https://huggingface.co/BoggersTheFish/TensionLM-Curriculum-13M",
    tensionlmPhase2TSNative: "https://huggingface.co/BoggersTheFish/TensionLM-Phase2-TSNative",
    proofRankerV0: "https://huggingface.co/BoggersTheFish/ts-proof-ranker-v0",
    proofRankerV1: "https://huggingface.co/BoggersTheFish/ts-proof-ranker-v1",
    proofRankerV2: "https://huggingface.co/BoggersTheFish/ts-proof-ranker-v2",
    proofRankerV3: "https://huggingface.co/BoggersTheFish/ts-proof-ranker-v3",
    proofRankerV4: "https://huggingface.co/BoggersTheFish/ts-proof-ranker-v4",
  },
};

export const currentStatus = [
  {
    label: "TS-Core",
    body: "Graph/tension runtime for nodes, edges, activation, propagation, relaxation, and Break/Evolve cycles.",
  },
  {
    label: "TensionLM",
    body: "Sigmoid tension attention experiments with inspectable pairwise tension fields and controlled comparisons.",
  },
  {
    label: "CIG",
    body: "Provenance-aware knowledge graph work for claims, evidence, contradiction, confidence, and revision.",
  },
  {
    label: "Proof Ranker",
    body: "Proof scoring and repair ladder for evaluating and improving reasoning traces.",
  },
  {
    label: "BGC",
    body: "Off-chain community credit concept for non-financial proof-of-contribution support.",
  },
];

export const contributorPaths = [
  {
    label: "I'm new",
    href: "/start-here",
    body: "Read the plain-language map before opening project details.",
  },
  {
    label: "I'm technical",
    href: "/projects",
    body: "Inspect the runtime, model, graph, and proof-control surfaces.",
  },
  {
    label: "I want evidence",
    href: "/proof-bank",
    body: "Start with claims, setups, results, limits, and replay notes.",
  },
  {
    label: "I want to support",
    href: "/support",
    body: "Support research, compute, writing, docs, and open-source work.",
  },
];
