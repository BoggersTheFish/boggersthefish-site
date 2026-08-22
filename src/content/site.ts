export const site = {
  name: "BoggersTheFish",
  tagline: "Verifier-first AI · Research software · Open systems",
  title: "Verifier-first AI, published research, and open-source systems",
  description:
    "Ben Michalek / BoggersTheFish builds verifier-first AI and reproducible research software, publishes PRIME and related work on Zenodo, contributes to Enthusia SMP, and develops open-source systems.",
  url: "https://www.boggersthefish.com",
  email: "boggersthefish@gmail.com",
  domainEmail: "boggersthefish@boggersthefish.com",
  github: "https://github.com/BoggersTheFish",
  huggingFace: "https://huggingface.co/BoggersTheFish",
  zenodo: "https://zenodo.org/search?q=creators.name%3A%22Michalek%2C%20Ben%22",
  enthusia: "https://enthusia.info",
  ogImage: "/og-image.svg",
};

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
    label: "Current flagship",
    body: "PRIME v1.0.0 is the public verifier-governed architecture for selective epistemic control, persistent representation repair, and auditable abstention.",
  },
  {
    label: "Published foundation",
    body: "Anytime-Valid Adaptive State Abstraction v0.2.0 provides the permanent evidence lineage and preserves its failed initial gate.",
  },
  {
    label: "Canonical source",
    body: "The thinking-system monorepo is the current public TS code authority; older repositories are predecessors or satellites.",
  },
  {
    label: "Applied systems",
    body: "Enthusia SMP development carries the software practice into live Minecraft plugins, economy, market, guild, and framework systems.",
  },
];

export const contributorPaths = [
  {
    label: "Start here",
    href: "/start-here",
    body: "Read the plain-language map before opening source repositories.",
  },
  {
    label: "I want the research",
    href: "/research",
    body: "Inspect PRIME, verifier authority, evidence boundaries, and current results.",
  },
  {
    label: "I want publications",
    href: "/publications",
    body: "Open the permanent Zenodo records, versions, and DOI metadata.",
  },
  {
    label: "I want the full history",
    href: "/lineage",
    body: "See how earlier TS, model, graph, and systems work became the current programme.",
  },
];
