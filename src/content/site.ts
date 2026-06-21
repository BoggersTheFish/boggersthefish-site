export const site = {
  name: "BoggersTheFish",
  tagline: "Verifier-First Systems & Experimental Computing",
  title: "A field archive of systems, experiments, and evidence.",
  description:
    "Ben Michalek / BoggersTheFish builds verifier-first reasoning systems, tension-driven model experiments, deterministic language tools, and verified computing prototypes. This site is the canonical record of current work and historical ideas.",
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
    tsChatLanguage: "https://github.com/BoggersTheFish/ts-chat-language",
    tenSon: "https://github.com/BoggersTheFish/Ten-SON-LM",
    tensionForge: "https://github.com/BoggersTheFish/TensionForge",
    tsq: "https://github.com/BoggersTheFish/tsq",
    tsBenchmarks: "https://github.com/BoggersTheFish/TS-Benchmarks",
    tsCore: "https://github.com/BoggersTheFish/TS-Core",
    tensionlm: "https://github.com/BoggersTheFish/TensionLM",
    cig: "https://github.com/BoggersTheFish/cig-ts-engine",
    proofRanker: "https://github.com/BoggersTheFish",
    bogbin: "https://github.com/BoggersTheFish/bogbin",
    website: "https://github.com/BoggersTheFish/boggersthefish-site",
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
    label: "Reasoning and language",
    body: "Habitat v2 joins deterministic language, signed semantic memory, query-relevant clusters, event transitions, bounded causal inference, and verified planning under TS-Reasoner authority.",
  },
  {
    label: "Model science",
    body: "Ten-SON-LM tests whether learned tension causally improves recurrent semantic-workspace behaviour. TensionLM remains the earlier attention-based evidence line.",
  },
  {
    label: "Adaptive inference",
    body: "TSQ explores tension- and verifier-driven precision escalation, but efficiency claims wait for genuinely distinct numerical execution paths.",
  },
  {
    label: "Verified computing",
    body: "bogbin develops deterministic containers, filesystems, processes, persistent workspaces, journals, and receipts. TensionForge tests verified training on legacy AMD hardware.",
  },
];

export const contributorPaths = [
  {
    label: "I'm new",
    href: "/start-here",
    body: "Read the plain-language map before opening source repositories.",
  },
  {
    label: "I want current work",
    href: "/projects",
    body: "Inspect the active programmes, evidence boundaries, and next experiments.",
  },
  {
    label: "I want the full history",
    href: "/lineage",
    body: "See how 52 repositories became the current modular stack.",
  },
  {
    label: "I want evidence",
    href: "/proof-bank",
    body: "Start with claims, setups, results, limitations, and replay notes.",
  },
];
