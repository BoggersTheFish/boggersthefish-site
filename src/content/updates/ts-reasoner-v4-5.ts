export const tsReasonerV45Update = {
  title: "TS-Reasoner v4.5.0: Milestone Receipt Pack",
  releaseUrl: "https://github.com/BoggersTheFish/TS-Reasoner-v0/releases/tag/v4.5.0",
  summary:
    "TS-Reasoner v4.5.0 packages the verifier-first ladder from v3.6 through v4.4 into one cold-reader receipt.",
  metrics: {
    inputReports: 8,
    knownCases: 114,
    knownCandidates: 151,
    wrongAccepts: 0,
    acceptedWithoutTypedSupport: 0,
    candidateGraphContamination: 0,
    allGatesPassed: true,
  },
  boundary: [
    "confidence is not proof",
    "generated text is not proof",
    "typed verifier channels remain proof authority",
    "no broad NLP claim",
    "no external benchmark victory claim",
    "no GPT-2 superiority claim",
    "no live TensionLM runtime claim",
  ],
} as const;
