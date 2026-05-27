import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ParchmentCard } from "@/components/ParchmentCard";
import { ProjectStackDiagram, TSCycleDiagram } from "@/components/Diagrams";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/content/projects";
import { links } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Start Here",
  description: "A credibility-first guide to TS and the BoggersTheFish research archive.",
  path: "/start-here",
});

const isItems = [
  "Engineering framework",
  "Experimental AI architecture lens",
  "Graph/tension/provenance/reasoning substrate",
  "A way to make internal model behaviour more inspectable",
];

const isNotItems = [
  "Not a finished AGI claim",
  "Not a theory-of-everything proof",
  "Not financial advice",
  "Not claiming benchmarks are beaten until receipts exist",
  "Not replacing normal scientific evidence",
];

const nextRoutes = [
  { title: "10-minute repro", body: "Run TS-Reasoner, inspect one JSON trace, and read the v1.5 exported-sample boundary.", href: "/run-ts-reasoner", secondHref: "/projects/ts-reasoner" },
  { title: "For researchers", body: "Start with research framing and proof-bank receipts.", href: "/research", secondHref: "/proof-bank" },
  { title: "For engineers", body: "Inspect project structure, source repos, and replay paths.", href: "/projects", secondHref: links.github },
  { title: "For funders/collaborators", body: "Read the grounded bio, roadmap, and contact route.", href: "/about", secondHref: "/contact" },
];

export default function StartHerePage() {
  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="field-label text-gold">Begin here</p>
        <h1>The sober map of TS.</h1>
        <p>
          TS is an engineering framework for modelling information transfer through
          constraint graphs, tension, propagation, relaxation, contradiction handling,
          and revision.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
        <ParchmentCard tone="dark">
          <p className="field-label mb-4 text-gold">Public stack</p>
          <div className="space-y-4 text-sm leading-7 text-cream/80">
            <p><strong className="text-gold">TS-Reasoner v1.5.0</strong> = typed verification boundary where real exported TensionLM-side candidate data remains candidate data, not proof.</p>
            <p><strong className="text-gold">TS-Core</strong> = graph/tension runtime.</p>
            <p><strong className="text-gold">TensionLM</strong> = sigmoid tension attention language model experiments.</p>
            <p><strong className="text-gold">CIG</strong> = persistent provenance-aware claim/evidence graph.</p>
            <p><strong className="text-gold">Proof Ranker</strong> = proof scoring, repair, and verifier loop experiments.</p>
            <p><strong className="text-gold">BoggersTheAI / Mind / Pulse</strong> = experimental runtime/agent branches, secondary to the public core stack.</p>
          </div>
        </ParchmentCard>
        <ProjectStackDiagram />
      </div>

      <div className="mt-8">
        <TSCycleDiagram />
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <ParchmentCard>
          <p className="field-label mb-4 text-brown">What TS is</p>
          <div className="space-y-2">
            {isItems.map((item) => <p key={item} className="text-sm leading-7 text-ink/75">{item}</p>)}
          </div>
        </ParchmentCard>
        <ParchmentCard>
          <p className="field-label mb-4 text-brown">What TS is not</p>
          <div className="space-y-2">
            {isNotItems.map((item) => <p key={item} className="text-sm leading-7 text-ink/75">{item}</p>)}
          </div>
        </ParchmentCard>
      </div>

      <SectionHeading className="mt-14" title="Current Public Route">
        <p>Start with the runnable v1.5.0 receipt before moving up to larger exported TensionLM sample sets.</p>
      </SectionHeading>
      <ParchmentCard>
        <div className="grid gap-4 text-sm leading-7 text-ink/75 md:grid-cols-5">
          <p><strong className="text-ink">Start Here</strong><br />Orient on the stack.</p>
          <p><strong className="text-ink">Run TS-Reasoner</strong><br />Generate a typed trace.</p>
          <p><strong className="text-ink">Inspect Receipt</strong><br />Read v1.5.0 evidence.</p>
          <p><strong className="text-ink">Read Limits</strong><br />Tiny exported set; parser-controlled verifier.</p>
          <p><strong className="text-ink">Next</strong><br />TensionLM export set evaluation.</p>
        </div>
      </ParchmentCard>

      <SectionHeading className="mt-14" title="Where to go next">
        <p>Pick the route that matches the kind of evidence you want first.</p>
      </SectionHeading>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {nextRoutes.map((route) => (
          <ParchmentCard key={route.title}>
            <h2 className="font-serif text-2xl font-semibold text-ink">{route.title}</h2>
            <p className="mt-3 text-sm leading-7 text-ink/75">{route.body}</p>
            <div className="mt-5 flex flex-col gap-2">
              <Link href={route.href} className="brass-link">
                First route <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={route.secondHref} className="brass-link">
                Second route <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ParchmentCard>
        ))}
      </div>

      <SectionHeading className="mt-14" title="Core project nodes">
        <p>These are the public routes most claims should pass through.</p>
      </SectionHeading>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <Link key={project.slug} href={project.href} className="parchment-card rounded-md border p-4 transition hover:-translate-y-1">
            <h3 className="font-serif text-xl font-semibold text-ink">{project.title}</h3>
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
