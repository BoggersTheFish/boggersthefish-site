import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink, FileJson, Terminal } from "lucide-react";
import { ContributorPaths } from "@/components/ContributorPaths";
import { ParchmentCard } from "@/components/ParchmentCard";
import { SectionHeading } from "@/components/SectionHeading";
import { links, site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: site.title,
  description: site.description,
  path: "/",
});

const currentStack = [
  {
    name: "TS-Reasoner",
    role: "Verifier/control loop",
    evidence: "JSON traces, candidate scoring, local/global tension, refusal/repair path.",
    href: "/run-ts-reasoner",
    status: "verified local repo",
  },
  {
    name: "TensionLM",
    role: "Model-line experiments / tension-field learning",
    evidence: "HF-visible v10 reasoner artifact and v11 trace-distilled student.",
    href: "/latest",
    status: "verified HF metadata",
  },
  {
    name: "CIG",
    role: "Provenance-aware claim/evidence graph",
    evidence: "Claim discipline, contradiction framing, and revision-oriented proof notes.",
    href: "/projects/cig",
    status: "bounded project claim",
  },
  {
    name: "Proof Ranker",
    role: "Proof scoring / repair ladder",
    evidence: "Published artifact ladder is linked; exact receipt sync remains a TODO.",
    href: "/projects/proof-ranker",
    status: "receipt sync needed",
  },
];

const receipts = [
  {
    title: "TensionLM-TS-Trace-Distilled-v11",
    badge: "external verified",
    body: "HF API/card show a compact trace-distilled student, 1,920 v10 trace rows, 580 training steps, and raw held-out exact answer/rule hits of 0/48.",
    limit: "The v11 card says raw exact answer/rule generation is not solved; v10 remains the working reasoner.",
    href: links.models.traceDistilledV11,
  },
  {
    title: "TensionLM-117M-TS-Reasoner-v10",
    badge: "external verified",
    body: "HF card lists deterministic graph, arithmetic, code, boolean, set, and string families with bounded system receipts.",
    limit: "The card scopes the scores to generated formal families and says they are not raw LLM scores.",
    href: links.models.tsReasonerV10,
  },
  {
    title: "TS-Reasoner v1.0 trace contract",
    badge: "local verified",
    body: "Local receipt reports 20 tasks: 16 expected-pass tasks, 4 known-limit tasks, and a stable JSON trace contract.",
    limit: "Local repo receipt only; not a broad reasoning benchmark.",
    href: "/run-ts-reasoner",
  },
  {
    title: "Golden-path abstention trace",
    badge: "local verified",
    body: "A local run rejects the overstrong all-artists conclusion and settles on 'Not enough information.'",
    limit: "Single bounded example, useful as a trace-contract demo rather than a capability claim.",
    href: "/run-ts-reasoner",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-gold/25 bg-forest-dark">
        <div className="absolute inset-0 ts-grid-bg bg-grid opacity-60" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,164,92,0.16),transparent_24rem),linear-gradient(180deg,rgba(16,23,13,0.2),#10170d_88%)]" aria-hidden="true" />
        <div className="relative mx-auto grid min-h-[72vh] max-w-7xl content-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="max-w-3xl">
            <p className="field-label text-gold">BoggersTheFish / TS research archive</p>
            <h1 className="mt-5 font-serif text-5xl font-semibold leading-tight text-cream sm:text-7xl">
              Small bounded reasoning, inspected.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/82">
              TS-Reasoner emits candidate chains, local and global tension,
              rejected alternatives, abstention/repair decisions, benchmark
              receipts, and visible failure modes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/run-ts-reasoner" className="plaque-button">
                <Terminal className="h-4 w-4" />
                Run TS-Reasoner locally
              </Link>
              <Link href="/latest" className="plaque-button secondary">
                <FileJson className="h-4 w-4" />
                Inspect latest receipt
              </Link>
              <Link href="/start-here" className="plaque-button secondary">
                Read the sober TS map
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <ParchmentCard tone="dark" className="self-center">
            <div className="mb-4 flex flex-wrap gap-2">
              {["verified", "bounded", "external", "local"].map((tag) => (
                <span key={tag} className="rounded-full border border-gold/35 bg-gold/10 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-gold">
                  {tag}
                </span>
              ))}
            </div>
            <pre className="overflow-x-auto rounded-md border border-gold/25 bg-black/35 p-4 text-xs leading-6 text-cream/82">
              <code>{`python3 inference.py --question \\
  "If some artists are makers and all makers are creators, are all artists creators?"

Trace: artifacts/latest_trace.json
candidate_direct.local_tension.s1 = 0.85
rejected_alternatives[0].issue_kinds = ["unsupported_conclusion", "quantifier_jump"]
settled_answer = "Not enough information."`}</code>
            </pre>
            <p className="mt-4 text-sm leading-7 text-cream/72">
              The interesting behavior is not an overconfident answer. It is the
              refusal to force a universal conclusion when support is missing.
            </p>
          </ParchmentCard>
        </div>
      </section>

      <section className="page-shell">
        <SectionHeading eyebrow="Current stack" title="Verifier first, models second">
          <p>
            The public surface is organized around what can be inspected today,
            not broad claims about general reasoning.
          </p>
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {currentStack.map((item) => (
            <Link key={item.name} href={item.href} className="ts-card p-5 hover:-translate-y-0.5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h2 className="font-serif text-2xl font-semibold text-cream">{item.name}</h2>
                <span className="rounded-full border border-gold/30 bg-gold/10 px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-gold">
                  {item.status}
                </span>
              </div>
              <p className="field-label text-gold/85">Role</p>
              <p className="mt-2 text-sm leading-6 text-cream/78">{item.role}</p>
              <p className="field-label mt-5 text-gold/85">Evidence</p>
              <p className="mt-2 text-sm leading-6 text-cream/72">{item.evidence}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="page-shell pt-2">
        <SectionHeading eyebrow="Receipts before claims" title="Latest visible receipts">
          <p>
            These cards only state what is present in local artifacts or public
            Hugging Face metadata/model cards. Broad AGI or general-reasoning
            claims are deliberately absent.
          </p>
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-2">
          {receipts.map((receipt) => (
            <ParchmentCard key={receipt.title} tone="dark">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-serif text-2xl font-semibold text-cream">{receipt.title}</h2>
                <span className="rounded-full border border-gold/35 bg-gold/10 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-gold">
                  {receipt.badge}
                </span>
              </div>
              <p className="text-sm leading-7 text-cream/78">{receipt.body}</p>
              <p className="mt-4 border-l-2 border-gold/45 pl-3 text-sm leading-6 text-cream/70">
                {receipt.limit}
              </p>
              <Link
                href={receipt.href}
                target={receipt.href.startsWith("http") ? "_blank" : undefined}
                rel={receipt.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold"
              >
                Inspect receipt
                {receipt.href.startsWith("http") ? <ExternalLink className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
              </Link>
            </ParchmentCard>
          ))}
        </div>
      </section>

      <section className="page-shell pt-2">
        <ParchmentCard tone="dark" className="grid gap-5 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="field-label text-gold">Claim boundary</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-cream">
              Toy and bounded receipts are real. Broad claims are not.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "No claim that TS proves AGI.",
              "No claim that TensionLM beats transformers generally.",
              "No broad benchmark numbers without linked receipts.",
              "Dates and versions are verified or labelled local/draft.",
            ].map((item) => (
              <p key={item} className="flex gap-3 rounded-md border border-gold/20 bg-black/20 p-3 text-sm leading-6 text-cream/78">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {item}
              </p>
            ))}
          </div>
        </ParchmentCard>
      </section>

      <ContributorPaths />
    </>
  );
}
