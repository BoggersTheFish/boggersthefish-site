export const verifiedLinks = {
  prime: "https://doi.org/10.5281/zenodo.22058441",
  adaptiveState: "https://doi.org/10.5281/zenodo.21954123",
  adaptiveStateRepo:
    "https://github.com/BoggersTheFish/ts-adaptive-state-abstraction",
  thinkingSystem: "https://github.com/BoggersTheFish/thinking-system",
  adaptiveEngine: "https://github.com/BoggersTheFish/ts-adaptive-engine-lab",
  languageFoundations:
    "https://github.com/BoggersTheFish/ts-language-foundations",
  enthusia: "https://enthusia.info",
  enthusiaNetwork: "https://github.com/BoggersTheFish/enthusia-network",
  enthusiaMarket: "https://github.com/BoggersTheFish/EnthusiaMarket",
  lumaGuilds: "https://github.com/BoggersTheFish/LumaGuilds",
  github: "https://github.com/BoggersTheFish",
  huggingFace: "https://huggingface.co/BoggersTheFish",
};

export const researchPrinciple =
  "Learned systems may propose. Declared verifiers decide what becomes accepted state.";

export const currentProgramme = [
  {
    kicker: "Flagship release",
    title: "PRIME v1.0.0",
    body:
      "A finite, verifier-governed architecture for selective information acquisition, persistent representation repair, bounded cognition, and auditable abstention.",
    href: verifiedLinks.prime,
    action: "Open the Zenodo record",
    status: "Published 22 Aug 2026",
  },
  {
    kicker: "Research foundation",
    title: "Adaptive state abstraction",
    body:
      "Anytime-valid repair, retain, or wait decisions under partial observability, with explicit abstention, provenance, and preserved failed gates.",
    href: verifiedLinks.adaptiveState,
    action: "Read the published artifact",
    status: "Zenodo software v0.2.0",
  },
  {
    kicker: "Canonical source",
    title: "Thinking System",
    body:
      "The public monorepo for verifier-first reasoning, typed authority, residual accounting, receipts, and structured revision.",
    href: verifiedLinks.thinkingSystem,
    action: "Inspect the source",
    status: "Open source",
  },
];

export const primeEvidence = [
  { value: "97/97", label: "authorised integrated passes" },
  { value: "0", label: "wrong authorised worlds" },
  { value: "100/100", label: "continuing lifecycles" },
  { value: "500/500", label: "quotient theorem checks" },
];

export const publications = [
  {
    date: "22 Aug 2026",
    type: "Software · v1.0.0 · MIT",
    title:
      "PRIME: A Verifier-Governed Architecture for Selective Epistemic Control",
    summary:
      "The first public PRIME release. It separates proposal from semantic authority and packages the frozen tests, receipts, negative result, verifier, and reproducible archive.",
    doi: "10.5281/zenodo.22058441",
    href: verifiedLinks.prime,
  },
  {
    date: "15 Aug 2026",
    type: "Software · v0.2.0",
    title: "Anytime-Valid Adaptive State Abstraction under Partial Observability",
    summary:
      "An executable research artifact for verifier-governed state construction, episode-regeneration evidence, representation lifecycle control, and tamper-rejecting receipts.",
    doi: "10.5281/zenodo.21954123",
    href: verifiedLinks.adaptiveState,
  },
];

export const openSourceProjects = [
  {
    title: "thinking-system",
    language: "Python",
    role: "Canonical research monorepo",
    body:
      "Verifier-first reasoning, typed authority, residual accounting, receipts, and structured revision.",
    href: verifiedLinks.thinkingSystem,
  },
  {
    title: "ts-adaptive-state-abstraction",
    language: "Python",
    role: "Published research software",
    body:
      "Anytime-valid adaptive state abstraction under partial observability, published with a permanent DOI.",
    href: verifiedLinks.adaptiveStateRepo,
  },
  {
    title: "ts-adaptive-engine-lab",
    language: "Python",
    role: "Experimental lab",
    body:
      "Finite verifier-grounded language learning, representation repair, and bounded construction-family birth.",
    href: verifiedLinks.adaptiveEngine,
  },
  {
    title: "ts-language-foundations",
    language: "Python",
    role: "Language authority layer",
    body:
      "Verifier-grounded language authority used by the adaptive engine programme.",
    href: verifiedLinks.languageFoundations,
  },
  {
    title: "Enthusia plugin ecosystem",
    language: "Kotlin / Java",
    role: "Minecraft server development",
    body:
      "Player-market, currency, guild, and server-framework work supporting Enthusia SMP.",
    href: verifiedLinks.enthusiaNetwork,
  },
  {
    title: "Research lineage",
    language: "Python / OpenCL",
    role: "Preserved predecessors",
    body:
      "TensionLM, TensionForge, TS-Reasoner, TSQ, bogbin, and earlier graph-system experiments remain visible with their limits.",
    href: "/lineage",
  },
];

export const bio = {
  short:
    "Ben Michalek, online as BoggersTheFish, is an independent researcher and software developer working on verifier-first AI, bounded cognition, adaptive state abstraction, and auditable computing. He also develops Minecraft server systems for Enthusia SMP and publishes open-source research software across Python, Kotlin, TypeScript, and OpenCL.",
  compact:
    "Independent researcher and software developer building verifier-first AI, reproducible research software, and Minecraft server systems.",
};
