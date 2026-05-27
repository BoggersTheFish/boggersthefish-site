import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { BGCNotice } from "@/components/BGCNotice";
import { ContributorPaths } from "@/components/ContributorPaths";
import { Hero } from "@/components/Hero";
import { ParchmentCard } from "@/components/ParchmentCard";
import { ProjectCard } from "@/components/ProjectCard";
import { QuickLinks } from "@/components/QuickLinks";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/content/projects";
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
    evidence: "v1.6 export-set receipt, typed-channel verification, zero candidate graph contamination.",
    href: "/projects/ts-reasoner",
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
    title: "TS-Reasoner v1.6 export set boundary",
    badge: "local verified",
    body: "Release receipt shows multiple exported TensionLM-side candidates consumed through the adapter with malformed and deeper-chain failures preserved.",
    limit: "Small exported sample set; not live model integration into the verifier.",
    href: "/projects/ts-reasoner",
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
      <Hero />

      <section className="page-shell pb-4">
        <div className="grid gap-5 lg:grid-cols-[1.45fr_0.75fr]">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} compact />
            ))}
          </div>
          <QuickLinks />
          <div className="lg:col-span-2">
            <BGCNotice />
          </div>
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
