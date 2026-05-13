import Link from "next/link";
import { ExternalLink } from "lucide-react";

const receipts = [
  {
    title: "TensionLM Public Evidence Ledger",
    href: "https://github.com/BoggersTheFish/bozo/blob/main/PUBLIC_EVIDENCE.md",
    body: "Claim boundary for sigmoid tension, Path A, CPU repair, neutral controls, and wording rules.",
  },
  {
    title: "TensionLM Source",
    href: "https://github.com/BoggersTheFish/bozo",
    body: "Working TensionLM codebase: training, formal eval, tau export, graph bias, and repair tooling.",
  },
  {
    title: "CPU Repair Held-Out Artifact",
    href: "https://huggingface.co/BoggersTheFish/TensionLM-117M-CPU-Repair-Heldout",
    body: "Safetensors checkpoint with held-out TAC results and shuffled-answer negative control.",
  },
  {
    title: "Wave 02 Matched H2H",
    href: "https://huggingface.co/BoggersTheFish/TensionLM-Wave02-22M-H2H",
    body: "Matched 22M-ish tension-vs-softmax pilot. Result: neutral capability edge, useful receipt.",
  },
  {
    title: "TS Proof Ranker v4",
    href: "https://huggingface.co/BoggersTheFish/ts-proof-ranker-v4",
    body: "Verifier-backed Horn proof-control loop. Symbolic verifier remains the grounding source.",
  },
];

const boundaries = [
  "Use evidence-bounded language: measured result, artifact, limitation, next test.",
  "Do not frame matched-softmax-neutral results as a general capability win.",
  "Do not call rule-supported answer selection unconstrained LM reasoning.",
  "Keep TS project language expressive on the site and precise in technical claims.",
];

export default function EvidencePage() {
  return (
    <main className="min-h-screen bg-black pt-28 pb-20">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-ts-purple/30 bg-ts-purple/5 text-xs font-mono text-ts-purple mb-5">
            Wave 17
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Evidence Receipts
          </h1>
          <p className="text-muted-foreground max-w-3xl leading-relaxed">
            This is the public grounding page for BoggersTheFish TS work. The
            project voice can stay expansive, but the technical claims are tied
            to code, model cards, controls, and limitations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {receipts.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="ts-card p-5 group hover:border-ts-purple/60 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="text-lg font-semibold text-white group-hover:text-ts-purple-light">
                  {item.title}
                </h2>
                <ExternalLink className="w-4 h-4 text-ts-purple-light flex-shrink-0 mt-1" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.body}
              </p>
            </Link>
          ))}
        </div>

        <div className="ts-card p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Claim Boundary</h2>
          <ul className="space-y-3">
            {boundaries.map((line) => (
              <li key={line} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-ts-purple flex-shrink-0" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
