export const site = {
  name: "BoggersTheFish",
  tagline: "Building Thinking Systems",
  title: "Small bounded reasoning, inspected.",
  description:
    "TS-Reasoner emits candidate chains, local and global tension, rejected alternatives, abstention/repair decisions, benchmark receipts, and visible failure modes.",
  url: "https://www.boggersthefish.com",
  email: "boggersthefish@gmail.com",
  domainEmail: "boggersthefish@boggersthefish.com",
  github: "https://github.com/BoggersTheFish",
  huggingFace: "https://huggingface.co/BoggersTheFish",
  ogImage: "/og-image.svg",
};

export const bgcShortNotice =
  "Donations are donations. Boggers Credits (BGC) are experimental off-chain community credits: not cryptocurrency, not an investment, not legal tender, not equity, not redeemable for cash, may remain off-chain forever, and not financial advice.";

export const bgcFullNotice =
  "Donations support independent TS research, compute, hosting, writing, documentation, open-source development, and time. Donations are donations, not a promise of financial return. Supporters may receive Boggers Credits as non-financial community credits. BGC is experimental, off-chain, not cryptocurrency, not an investment, not legal tender, not equity, not redeemable for money or cash, may remain off-chain forever, not guaranteed to convert to any future token, and nothing on this site is financial advice.";

export const links = {
  home: `${site.url}/`,
  github: site.github,
  huggingFace: site.huggingFace,
  email: `mailto:${site.email}`,
  domainEmail: `mailto:${site.domainEmail}`,
  repos: {
    tsReasoner: "https://github.com/BoggersTheFish/TS-Reasoner-v0",
    tsCore: "https://github.com/BoggersTheFish/TS-Core",
    tensionlm: "https://github.com/BoggersTheFish/TensionLM",
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
    tsReasonerV10: "https://huggingface.co/BoggersTheFish/TensionLM-117M-TS-Reasoner-v10",
    traceDistilledV11: "https://huggingface.co/BoggersTheFish/TensionLM-TS-Trace-Distilled-v11",
    tsTinyVerifierV0: "https://huggingface.co/BoggersTheFish/TS-TinyVerifier-v0",
    proofRankerV0: "https://huggingface.co/BoggersTheFish/ts-proof-ranker-v0",
    proofRankerV1: "https://huggingface.co/BoggersTheFish/ts-proof-ranker-v1",
    proofRankerV2: "https://huggingface.co/BoggersTheFish/ts-proof-ranker-v2",
    proofRankerV3: "https://huggingface.co/BoggersTheFish/ts-proof-ranker-v3",
    proofRankerV4: "https://huggingface.co/BoggersTheFish/ts-proof-ranker-v4",
  },
};

export const currentStatus = [
  {
    label: "TS-Reasoner",
    body: "Bounded verifier-first reasoning runtime with typed traces, answer arenas, TS-Chat repair loops, and explanation traces.",
  },
  {
    label: "BOGBIN/BOGVM",
    body: "Deterministic verified byte/container/runtime substrate. Verified archive/restore and package verification.",
  },
  {
    label: "BogOS/BogK",
    body: "Verified workspace/user-space kernel contract direction. Not a host kernel or physical firmware.",
  },
  {
    label: "TensionLM",
    body: "Model/candidate/tension experiments. The neural/model-side line connected to TS-Reasoner through exported/candidate outputs.",
  },
  {
    label: "TS-Start-Here",
    body: "Ecosystem map. Start Here → TS-Reasoner → BOGBIN/BOGVM/BogOS → TensionLM / experiments.",
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
