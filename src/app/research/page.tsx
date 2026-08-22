import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  CircleDot,
  FileCheck2,
  GitBranch,
  ShieldCheck,
} from "lucide-react";
import {
  primeEvidence,
  researchPrinciple,
  verifiedLinks,
} from "@/content/current";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Research Programme",
  description:
    "The current verifier-first AI and PRIME research programme: selective epistemic control, adaptive state abstraction, persistent repair, and auditable abstention.",
  path: "/research",
});

const programmeLayers = [
  {
    number: "01",
    title: "Proposal",
    body: "Models, learned fields, heuristics, and working beliefs may rank candidates or direct attention.",
    icon: CircleDot,
  },
  {
    number: "02",
    title: "Evidence",
    body: "Fresh outcomes, sequential tests, hard-risk filters, and minimum-sufficient information constrain the candidate.",
    icon: GitBranch,
  },
  {
    number: "03",
    title: "Authority",
    body: "Declared verifiers decide whether state is repaired, retained, retired, restored, or left unresolved.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Receipt",
    body: "Accepted changes preserve provenance, hashes, replay paths, abstentions, and the exact boundary of the result.",
    icon: FileCheck2,
  },
];

const boundaries = [
  "Finite symbolic and controlled-Markov settings—not unrestricted real-world cognition.",
  "Selective information acquisition—not universal POMDP-optimal planning.",
  "Bounded representation repair—not unrestricted ontology or causal discovery.",
  "A mounted real-prose proposal field—not unrestricted language understanding.",
  "Strong reproducibility evidence—not evidence of AGI or general safety.",
];

export default function ResearchPage() {
  return (
    <section className="page-shell">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="page-intro mb-0 max-w-4xl">
          <p className="field-label text-gold">Current research programme</p>
          <h1>Verifier-governed cognition under uncertainty.</h1>
          <p>
            PRIME studies how a bounded system can choose what to inspect,
            change its own working representation, preserve useful state, and
            abstain—without allowing the proposing mechanism to certify itself.
          </p>
        </div>
        <div className="research-principle">
          <p className="field-label text-gold">Invariant</p>
          <p className="mt-4 font-serif text-3xl font-semibold leading-tight text-cream">
            {researchPrinciple}
          </p>
        </div>
      </div>

      <div className="mt-14 grid gap-3 lg:grid-cols-4">
        {programmeLayers.map((layer, index) => (
          <div key={layer.title} className="relative">
            <article className="modern-card h-full">
              <div className="flex items-center justify-between">
                <span className="index-mark">{layer.number}</span>
                <layer.icon className="h-5 w-5 text-gold" />
              </div>
              <h2 className="mt-8 font-serif text-3xl font-semibold text-cream">
                {layer.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-cream/62">{layer.body}</p>
            </article>
            {index < programmeLayers.length - 1 ? (
              <ArrowDown className="mx-auto my-2 h-5 w-5 text-gold/45 lg:absolute lg:-right-4 lg:top-1/2 lg:z-10 lg:-rotate-90" />
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="field-label text-gold">Evidence snapshot</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-cream sm:text-5xl">
            PRIME v1.0.0 ships the argument and the pressure test.
          </h2>
          <p className="mt-5 text-sm leading-7 text-cream/64">
            The first public release corresponds to internal scientific
            generation v18. It includes its frozen evidence, an initially
            rejected RC1 candidate, tamper checks, deterministic replay, and an
            explicit scope statement.
          </p>
          <Link
            href={verifiedLinks.prime}
            target="_blank"
            rel="noopener noreferrer"
            className="plaque-button mt-7"
          >
            Open the release
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {primeEvidence.map((item) => (
            <div key={item.label} className="evidence-metric">
              <p className="font-mono text-3xl font-bold text-gold">{item.value}</p>
              <p className="mt-2 text-sm leading-6 text-cream/58">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 border-t border-gold/15 pt-12">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="field-label text-gold">Claim boundary</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-cream">
              What this programme does not claim.
            </h2>
            <p className="mt-5 text-sm leading-7 text-cream/62">
              The scope is part of the result. Wider language would make the
              research sound larger while making it less credible.
            </p>
          </div>
          <div className="space-y-3">
            {boundaries.map((boundary) => (
              <div key={boundary} className="evidence-rule">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <p className="text-sm leading-7 text-cream/68">{boundary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
