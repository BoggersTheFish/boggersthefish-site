import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ParchmentCard } from "@/components/ParchmentCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects, tsFrameworkStatement } from "@/content/projects";

export const metadata: Metadata = {
  title: "Start Here",
  description: "A beginner-friendly guide to TS and the BoggersTheFish research archive.",
};

const path = [
  ["1", "Read the framework", "Start with TS as graph state, constraint pressure, propagation, and relaxation."],
  ["2", "Open a project", "Use TS-Core for runtime, TensionLM for language, CIG for evidence, or Proof Ranker for traces."],
  ["3", "Check receipts", "Use the Proof Bank to separate observed results from hypotheses and open work."],
];

export default function StartHerePage() {
  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="field-label text-gold">Begin here</p>
        <h1>A plain map of TS.</h1>
        <p>{tsFrameworkStatement}</p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {path.map(([step, title, body]) => (
          <ParchmentCard key={step}>
            <p className="field-label text-brown">Step {step}</p>
            <h2 className="mt-3 font-serif text-2xl font-semibold text-ink">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-ink/75">{body}</p>
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
