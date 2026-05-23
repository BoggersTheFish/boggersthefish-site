import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, FileJson, Terminal } from "lucide-react";
import { ParchmentCard } from "@/components/ParchmentCard";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Run TS-Reasoner",
  description:
    "A 10-minute golden path: run TS-Reasoner, inspect a JSON trace, see tension/repair/abstention, then connect it to TensionLM.",
  path: "/run-ts-reasoner",
});

const cloneCommand = `git clone https://github.com/BoggersTheFish/TS-Reasoner-v0
cd TS-Reasoner-v0
python3 inference.py \\
  --question "If some artists are makers and all makers are creators, are all artists creators?" \\
  --premise "Some artists are makers." \\
  --premise "All makers are creators."`;

const traceFields = [
  "question",
  "candidates[*].steps",
  "trace.candidate_scores[*].local_tension",
  "trace.candidate_scores[*].global_tension",
  "trace.chosen_action",
  "trace.rejected_alternatives",
  "trace.settled_answer",
  "trace.failure_reason",
];

const pathSteps = [
  {
    title: "1. Run one command",
    body: "This produces artifacts/latest_trace.json. The chosen example is intentionally an existential-to-universal trap, so the interesting behavior is abstention/repair rather than a forced proof.",
  },
  {
    title: "2. Inspect the trace",
    body: "Open artifacts/latest_trace.json and look for candidate scores, local tension on the overstrong conclusion, rejected alternatives, and the settled answer.",
  },
  {
    title: "3. See what changed",
    body: "The important delta is not a bigger claim. It is that the system records why a candidate was accepted, repaired, rejected, or left unsettled.",
  },
];

export default function RunTSReasonerPage() {
  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="field-label text-gold">10-minute golden path</p>
        <h1>Run TS-Reasoner, then inspect the trace.</h1>
        <p>
          This is the shortest reproducible path through the stack: run one
          bounded reasoner command, inspect one JSON trace, see tension and
          abstention/repair, then follow the bridge to TensionLM.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <ParchmentCard tone="dark">
          <div className="mb-4 flex items-center gap-2 text-gold">
            <Terminal className="h-5 w-5" />
            <p className="field-label">Copy this</p>
          </div>
          <pre className="overflow-x-auto rounded-md border border-gold/35 bg-forest-dark px-4 py-4 text-sm leading-7 text-cream">
            <code>{cloneCommand}</code>
          </pre>
          <p className="mt-4 text-sm leading-7 text-cream/75">
            No model download is needed for this path. It uses deterministic
            TS-Reasoner v1.0 code and writes the trace locally.
          </p>
        </ParchmentCard>

        <ParchmentCard>
          <div className="mb-4 flex items-center gap-2 text-brown">
            <FileJson className="h-5 w-5" />
            <p className="field-label">What to look for</p>
          </div>
          <div className="space-y-2">
            {traceFields.map((field) => (
              <code
                key={field}
                className="block rounded border border-brown/20 bg-paper/60 px-3 py-2 text-xs text-ink/80"
              >
                {field}
              </code>
            ))}
          </div>
        </ParchmentCard>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {pathSteps.map((step) => (
          <ParchmentCard key={step.title}>
            <h2 className="font-serif text-2xl font-semibold text-ink">{step.title}</h2>
            <p className="mt-3 text-sm leading-7 text-ink/75">{step.body}</p>
          </ParchmentCard>
        ))}
      </div>

      <SectionHeading className="mt-14" eyebrow="Expected behavior" title="The impressive part is the refusal path">
        <p>
          The direct candidate tries to overclaim that all artists are creators.
          The low-tension settled answer should abstain instead of forcing that
          universal conclusion.
        </p>
      </SectionHeading>

      <div className="grid gap-5 lg:grid-cols-2">
        <ParchmentCard>
          <p className="field-label mb-3 text-brown">Trace outcome</p>
          <pre className="overflow-x-auto rounded-md border border-brown/20 bg-paper/65 px-4 py-4 text-sm leading-7 text-ink/80">
            <code>{`final_answer: "Not enough information."
chosen_action.settled: true
rejected_alternatives: candidate_direct ...
issue_kinds: ["quantifier_jump", ...]`}</code>
          </pre>
        </ParchmentCard>
        <ParchmentCard>
          <p className="field-label mb-3 text-brown">Why this matters</p>
          <p className="text-sm leading-7 text-ink/75">
            The artifact is not only the answer. The artifact is the record of
            pressure: which candidate was unstable, where local tension appeared,
            which alternative lost, and why the control loop settled.
          </p>
        </ParchmentCard>
      </div>

      <SectionHeading className="mt-14" title="Then follow the bridge">
        <p>
          Once the trace contract is clear, the TensionLM connection is simple:
          a learned model may propose candidate steps, but TS-Reasoner remains
          the verifier.
        </p>
      </SectionHeading>

      <div className="grid gap-4 md:grid-cols-3">
        <Link
          href="https://github.com/BoggersTheFish/TS-Reasoner-v0/blob/main/docs/tensionlm_bridge.md"
          target="_blank"
          rel="noopener noreferrer"
          className="plaque-button justify-center text-center"
        >
          How this connects to TensionLM
          <ExternalLink className="h-4 w-4" />
        </Link>
        <Link href="/receipts" className="plaque-button secondary justify-center text-center">
          Inspect a tension receipt
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/roadmap" className="plaque-button secondary justify-center text-center">
          What failed in v11 and what comes next
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
