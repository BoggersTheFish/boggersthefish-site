import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  currentProgramme,
  researchPrinciple,
  verifiedLinks,
} from "@/content/current";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Start Here",
  description:
    "A plain-language guide to PRIME, the current verifier-first research programme, published artifacts, open source, and project lineage.",
  path: "/start-here",
});

const steps = [
  {
    title: "A system proposes",
    body: "A learned field, heuristic, or working belief can suggest where to look and what representation may need repair.",
  },
  {
    title: "Evidence constrains it",
    body: "Fresh observations, risk filters, and sequential tests decide whether the proposal has earned support.",
  },
  {
    title: "A verifier authorises",
    body: "Only declared authority may change canonical state, restore a representation, or record abstention.",
  },
  {
    title: "A receipt preserves the boundary",
    body: "The accepted transition keeps its inputs, provenance, hashes, limitations, and replay path.",
  },
];

export default function StartHerePage() {
  return (
    <section className="page-shell">
      <div className="page-intro max-w-4xl">
        <p className="field-label text-gold">Start here</p>
        <h1>PRIME is the current programme. TS is its wider lineage.</h1>
        <p>
          The simplest way to understand the work is through one rule:
          {" " + researchPrinciple} Everything else—selective information,
          representation repair, abstention, receipts, and replay—exists to make
          that boundary operational.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <article key={step.title} className="modern-card">
            <span className="index-mark">0{index + 1}</span>
            <h2 className="mt-7 font-serif text-2xl font-semibold text-cream">
              {step.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-cream/62">{step.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 grid gap-5 lg:grid-cols-3">
        {currentProgramme.map((item) => (
          <article key={item.title} className="modern-card">
            <p className="field-label text-gold">{item.kicker}</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-cream">{item.title}</h2>
            <p className="mt-4 text-sm leading-7 text-cream/62">{item.body}</p>
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-gold"
            >
              {item.action}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-16 grid gap-4 md:grid-cols-2">
        {[
          {
            title: "Research programme",
            body: "Understand the current architecture, evidence, and claim boundary.",
            href: "/research",
          },
          {
            title: "Published artifacts",
            body: "Open the permanent Zenodo records and citation details.",
            href: "/publications",
          },
          {
            title: "Open source",
            body: "See current repositories separated from preserved predecessors.",
            href: "/projects",
          },
          {
            title: "Project lineage",
            body: "Trace earlier TS, model, graph, systems, and verifier work.",
            href: "/lineage",
          },
        ].map((route) => (
          <Link key={route.href} href={route.href} className="legacy-row group">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-cream">{route.title}</h2>
              <p className="mt-2 text-sm leading-6 text-cream/56">{route.body}</p>
            </div>
            <ArrowRight className="h-4 w-4 text-gold transition group-hover:translate-x-1" />
          </Link>
        ))}
      </div>

      <p className="mt-14 max-w-4xl border-t border-gold/15 pt-8 text-sm leading-7 text-cream/52">
        Looking for the exact current release? Start with{" "}
        <Link href={verifiedLinks.prime} target="_blank" rel="noopener noreferrer" className="text-gold underline underline-offset-4">
          PRIME v1.0.0 on Zenodo
        </Link>
        .
      </p>
    </section>
  );
}
