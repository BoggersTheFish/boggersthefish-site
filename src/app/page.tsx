import type { Metadata } from "next";
import { BGCNotice } from "@/components/BGCNotice";
import { Hero } from "@/components/Hero";
import { ParchmentCard } from "@/components/ParchmentCard";
import { ProjectCard } from "@/components/ProjectCard";
import { ProofCard } from "@/components/ProofCard";
import { QuickLinks } from "@/components/QuickLinks";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/content/projects";
import { proofs } from "@/content/proofs";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

const researchFocus = [
  {
    title: "Constraint Graphs",
    body: "Nodes, edges, evidence, pressure, and revision history as first-class research objects.",
  },
  {
    title: "Interpretable Attention",
    body: "Tension fields, pairwise inspection, and controlled comparisons for language model experiments.",
  },
  {
    title: "Reasoning Systems",
    body: "Proof ranking, replayable traces, and reproducible experiments that keep claims bounded.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="page-shell">
        <SectionHeading eyebrow="Core projects" title="The TS workbench">
          <p>
            Four public workstreams hold the current research surface: the graph
            runtime, language experiments, provenance graphs, and proof-control tools.
          </p>
        </SectionHeading>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} compact />
          ))}
        </div>
      </section>

      <section className="page-shell pt-2">
        <SectionHeading eyebrow="Research focus" title="What the archive is trying to make measurable">
          <p>
            The site uses TS as an engineering lens: graph-based reasoning,
            constraint propagation, tension dynamics, interpretable systems, and
            provenance-aware knowledge graphs.
          </p>
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-3">
          {researchFocus.map((item) => (
            <ParchmentCard key={item.title}>
              <p className="field-label mb-3 text-brown">Research note</p>
              <h3 className="font-serif text-2xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/75">{item.body}</p>
            </ParchmentCard>
          ))}
        </div>
      </section>

      <section className="page-shell pt-2">
        <SectionHeading eyebrow="Proof bank preview" title="Receipts before claims">
          <p>
            Each proof note is prepared as a reproducible record: setup, observed
            behavior, limits, and replay path where available.
          </p>
        </SectionHeading>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {proofs.map((proof) => (
            <ProofCard key={proof.id} proof={proof} />
          ))}
        </div>
      </section>

      <section className="page-shell grid gap-5 pt-2 lg:grid-cols-[1.35fr_0.65fr]">
        <BGCNotice />
        <QuickLinks />
      </section>
    </>
  );
}
