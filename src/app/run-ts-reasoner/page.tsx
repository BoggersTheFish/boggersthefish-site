import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileJson, Terminal } from "lucide-react";
import { ParchmentCard } from "@/components/ParchmentCard";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Run TS-Reasoner",
  description:
    "A clean golden path: run TS-Reasoner, inspect a JSON trace, and see tension, rejection, abstention, and repair.",
  path: "/run-ts-reasoner",
});

const command = `git clone https://github.com/BoggersTheFish/TS-Reasoner-v0
cd TS-Reasoner-v0
python3 inference.py --question "If some artists are makers and all makers are creators, are all artists creators?"`;

const inspectItems = [
  "candidates[*].steps: compare the direct and cautious chains.",
  "trace.candidate_scores[*].local_tension: find the high-tension conclusion step.",
  "trace.candidate_scores[*].global_tension: compare direct pressure against the settled trace.",
  "trace.rejected_alternatives: confirm the overstrong candidate was not selected.",
  "trace.candidate_operation_loops.candidate_direct.cycles[0].repair: inspect the proposed weakening.",
  "trace.chosen_action and trace.settled_answer: confirm the final abstention path.",
];

export default function RunTSReasonerPage() {
  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="field-label text-gold">Golden path</p>
        <h1>Run one command. Inspect one trace.</h1>
        <p>
          This page is the cleanest TS entrypoint: one bounded TS-Reasoner run,
          one JSON trace, and one visible refusal to overclaim.
        </p>
      </div>

      <ParchmentCard tone="dark">
        <div className="mb-4 flex items-center gap-2 text-gold">
          <Terminal className="h-5 w-5" />
          <p className="field-label">Copy-paste command</p>
        </div>
        <pre className="overflow-x-auto rounded-md border border-gold/35 bg-black/35 px-4 py-4 text-sm leading-7 text-cream">
          <code>{command}</code>
        </pre>
        <p className="mt-4 text-sm leading-7 text-cream/75">
          This command matches the current public TS-Reasoner README and was
          locally verified during the site truth sync. It writes
          `artifacts/latest_trace.json`.
        </p>
      </ParchmentCard>

      <div className="mt-8 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <ParchmentCard>
          <p className="field-label mb-3 text-brown">Expected output</p>
          <pre className="overflow-x-auto rounded-md border border-brown/20 bg-paper/65 px-4 py-4 text-sm leading-7 text-ink/80">
            <code>{`Answer: Not enough information.
Selected chain: candidate_cautious
Global tension: 0.0000
Trace: artifacts/latest_trace.json`}</code>
          </pre>
          <p className="mt-4 text-sm leading-7 text-ink/75">
            The direct candidate tries to conclude that all artists are creators.
            The selected answer abstains because the premises only support
            some-artists support, not the requested universal.
          </p>
        </ParchmentCard>

        <ParchmentCard>
          <div className="mb-4 flex items-center gap-2 text-brown">
            <FileJson className="h-5 w-5" />
            <p className="field-label">Inspect artifacts/latest_trace.json</p>
          </div>
          <div className="grid gap-2">
            {inspectItems.map((item) => (
              <p key={item} className="rounded-md border border-brown/20 bg-forest/10 p-3 text-sm leading-6 text-ink/76">
                {item}
              </p>
            ))}
          </div>
        </ParchmentCard>
      </div>

      <SectionHeading className="mt-14" eyebrow="Why abstention matters" title="The impressive behavior is refusal.">
        <p>
          A weak demo forces an answer. A useful verifier records why a tempting
          answer is unstable, shows the local pressure on the bad step, proposes
          a repair or weaker alternative, and can still settle on not enough
          information when that is the honest result.
        </p>
      </SectionHeading>

      <ParchmentCard tone="dark">
        <pre className="overflow-x-auto rounded-md border border-gold/25 bg-black/35 p-4 text-xs leading-6 text-cream/82">
          <code>{`candidate_direct:
  final_answer: "all artists are creators."
  local_tension.s1: 0.85
  issue_kinds: ["unsupported_conclusion", "quantifier_jump"]
  repair.proposed_text: "Therefore some artists are creators."

candidate_cautious:
  settled_answer: "Not enough information."
  selected_next_op: "ACCEPT_TRACE"`}</code>
        </pre>
      </ParchmentCard>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/latest" className="plaque-button">
          Latest TensionLM bridge
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/proof-bank" className="plaque-button secondary">
          Inspect proof bank
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/start-here" className="plaque-button secondary">
          Read the sober map
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
