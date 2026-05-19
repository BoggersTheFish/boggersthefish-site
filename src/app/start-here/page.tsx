import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ParchmentCard } from "@/components/ParchmentCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Start Here",
  description: "A credibility-first guide to TS and the BoggersTheFish research archive.",
};

const answers = [
  {
    title: "What is TS?",
    body: "TS is an engineering framework for modelling information transfer, constraint propagation, contradiction, and interpretation — not a claim that everything in reality has been solved.",
  },
  {
    title: "What is it not?",
    body: "It is not a finished general intelligence claim, not a theory-of-everything pitch, and not a substitute for reproducible experiments.",
  },
  {
    title: "What has been built?",
    body: "The public work is organized around TS-Core, TensionLM, CIG, and Proof Ranker: runtime, language experiments, provenance graphs, and proof scoring.",
  },
  {
    title: "What evidence exists?",
    body: "Evidence lives in proof-bank receipts, model artifacts, repo history, telemetry schemas, and controlled comparison notes.",
  },
  {
    title: "Where should I start?",
    body: "Read this page, open the project index, then use the Proof Bank to inspect claims by setup, result, limit, and reproduction path.",
  },
];

const path = [
  ["1", "Framework", "Understand nodes, edges, activation, constraint pressure, propagation, relaxation, contradiction, and revision."],
  ["2", "Projects", "Choose TS-Core, TensionLM, CIG, or Proof Ranker depending on which layer you want to inspect."],
  ["3", "Receipts", "Check proof-bank entries before accepting claims. Good evidence should include limits and reproduction notes."],
];

export default function StartHerePage() {
  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="field-label text-gold">Begin here</p>
        <h1>The credibility funnel for TS.</h1>
        <p>
          This page is the plain-language route for serious readers: what TS is,
          what it is not, what exists, what evidence exists, and where to go next.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
        <ParchmentCard tone="dark" className="archive-manifesto">
          <p className="field-label mb-4 text-gold">Plain statement</p>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-cream">
            TS is an engineering framework first.
          </h2>
          <p className="mt-4 text-base leading-8 text-cream/80">
            It models information transfer through graph structure, constraint
            pressure, contradiction handling, and interpretation. The research
            claim is not that everything is explained. The useful claim is that
            these mechanisms can make some AI work more inspectable and easier
            to test.
          </p>
        </ParchmentCard>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          {path.map(([step, title, body]) => (
            <ParchmentCard key={step}>
              <p className="field-label text-brown">Step {step}</p>
              <h2 className="mt-3 font-serif text-2xl font-semibold text-ink">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/75">{body}</p>
            </ParchmentCard>
          ))}
        </div>
      </div>

      <SectionHeading className="mt-14" title="Five questions answered">
        <p>
          These are the questions this site should answer before asking anyone to
          read deeper technical material.
        </p>
      </SectionHeading>
      <div className="grid gap-5 md:grid-cols-2">
        {answers.map((answer) => (
          <ParchmentCard key={answer.title}>
            <p className="field-label mb-3 text-brown">Field question</p>
            <h2 className="font-serif text-2xl font-semibold text-ink">{answer.title}</h2>
            <p className="mt-3 text-sm leading-7 text-ink/75">{answer.body}</p>
          </ParchmentCard>
        ))}
      </div>

      <SectionHeading className="mt-14" title="Choose a first node">
        <p>Each route is an entry point into the same graph of research work.</p>
      </SectionHeading>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <Link key={project.slug} href={project.href} className="parchment-card rounded-md border p-4 transition hover:-translate-y-1">
            <h3 className="font-serif text-xl font-semibold text-ink">{project.name}</h3>
            <p className="mt-2 text-sm leading-6 text-ink/70">{project.shortDescription}</p>
            <span className="brass-link mt-4">
              Open node
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
