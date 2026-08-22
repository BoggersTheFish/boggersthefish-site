import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { ParchmentCard } from "@/components/ParchmentCard";
import { SectionHeading } from "@/components/SectionHeading";
import { links } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Model Archive",
  description:
    "Archived Hugging Face-visible TensionLM / TS-Reasoner v10 and TS Trace Distilled v11 artifacts, with receipts and limits.",
  path: "/latest",
});

const artifacts = [
  {
    name: "TensionLM-117M-TS-Reasoner-v10",
    href: links.models.tsReasonerV10,
    status: "HF-visible external artifact",
    body: "A CPU TS reasoner package that keeps the frozen TensionLM-117M-Reasoning-v2 substrate and uses explicit TS graph/program operators. It supports graph/transitivity, arithmetic traces, code traces, boolean logic, set operations, and string transforms.",
    receipt: "HF card reports bounded system receipts including TAC v2/v3/v4 at 120/120 each, public v10 examples at 30/30, and generated-family receipts for standard, paraphrase, unknown, mixed, and all-family mixed prompts.",
    limit: "The model card says these are system scores over generated formal families, not raw LLM scores and not open-ended natural language understanding.",
  },
  {
    name: "TensionLM-TS-Trace-Distilled-v11",
    href: links.models.traceDistilledV11,
    status: "HF-visible external artifact",
    body: "A compact CPU trace-distilled student trained from v10 trace rows. The artifact includes a student checkpoint, tokenizer, trace-distillation data splits, generation/eval scripts, and held-out imitation eval files.",
    receipt: "HF card/API report 1,920 dataset rows, 1,632 train / 144 val / 144 test, about 1.1M student parameters, 580 training steps, and validation perplexity around 2.45.",
    limit: "The v11 card reports raw exact answer hits 0/48 and raw exact rule hits 0/48. It is a neural bridge dataset/checkpoint, not the working reasoner.",
  },
];

const sections = [
  {
    title: "What this model line is trying to test",
    body: "The line tests whether TS-Reasoner traces can become a training signal for tension-aware models while keeping the verifier/control loop inspectable. v10 is the bounded system/control artifact; v11 is the first compact student trained on v10-style traces.",
  },
  {
    title: "How it connects to TS-Reasoner traces",
    body: "TS-Reasoner defines the trace contract: candidate chains, local tension, global tension, selected action, rejected alternatives, repairs, settled answer, and failure reason. TensionLM artifacts can propose or imitate trace text, but TS-Reasoner remains the verifier path for claims.",
  },
  {
    title: "Receipts and limitations",
    body: "The visible receipts are narrow. v10 receipts are generated-family system receipts. v11 receipts show dataset/training/eval shape and a failed raw exact-generation result. Neither artifact proves broad reasoning, general chat ability, or transformer superiority.",
  },
  {
    title: "Next technical step",
    body: "The next useful step is to keep v10 as the bounded verifier baseline, rerun v11-style distillation with clearer held-out imitation metrics, and publish trace-level receipts that show when a learned proposer improves, fails, or abstains under the verifier.",
  },
];

export default function LatestPage() {
  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="field-label text-gold">Preserved model archive</p>
        <h1>TensionLM / TS-Reasoner v10 and TS Trace Distilled v11.</h1>
        <p>
          These are preserved Hugging Face model-line artifacts from the earlier
          TS programme. They are no longer the current release authority; PRIME
          and the published adaptive-state work now carry that role. Exact eval
          metrics remain visible where public cards or metadata expose them.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {artifacts.map((artifact) => (
          <ParchmentCard key={artifact.name} tone="dark">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-serif text-3xl font-semibold text-cream">{artifact.name}</h2>
              <span className="rounded-full border border-gold/35 bg-gold/10 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-gold">
                {artifact.status}
              </span>
            </div>
            <p className="text-sm leading-7 text-cream/78">{artifact.body}</p>
            <div className="mt-5 grid gap-3">
              <p className="rounded-md border border-gold/20 bg-black/20 p-3 text-sm leading-6 text-cream/76">
                <strong className="text-gold">Receipt:</strong> {artifact.receipt}
              </p>
              <p className="rounded-md border border-gold/20 bg-black/20 p-3 text-sm leading-6 text-cream/76">
                <strong className="text-gold">Limit:</strong> {artifact.limit}
              </p>
            </div>
            <Link href={artifact.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold">
              Open model card
              <ExternalLink className="h-4 w-4" />
            </Link>
          </ParchmentCard>
        ))}
      </div>

      <SectionHeading className="mt-14" title="How to inspect or run">
        <p>
          Use the commands from each model card after cloning or downloading the
          artifact. v10 exposes a `ts_reasoner_v10.py solve ... --json` path.
          v11 exposes `inference.py` and `eval_trace_distilled_v11.py`, but the
          card also says exact raw generation is not solved yet.
        </p>
      </SectionHeading>

      <ParchmentCard tone="dark">
        <pre className="overflow-x-auto rounded-md border border-gold/25 bg-black/35 p-4 text-xs leading-6 text-cream/82">
          <code>{`# v10 model-card path
python ts_reasoner_v10.py solve \\
  --prompt "Logic board: A=true; B=false. Evaluate A XOR B:" \\
  --category boolean_logic --json

# v11 model-card path
python eval_trace_distilled_v11.py \\
  --checkpoint student/latest.pt \\
  --test_jsonl data/test.jsonl`}</code>
        </pre>
      </ParchmentCard>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {sections.map((section) => (
          <ParchmentCard key={section.title}>
            <h2 className="font-serif text-2xl font-semibold text-ink">{section.title}</h2>
            <p className="mt-3 text-sm leading-7 text-ink/75">{section.body}</p>
          </ParchmentCard>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/run-ts-reasoner" className="plaque-button">
          Run verifier golden path
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/start-here" className="plaque-button secondary">
          Read sober TS map
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
