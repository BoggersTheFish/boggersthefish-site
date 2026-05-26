import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { ParchmentCard } from "@/components/ParchmentCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects, secondaryProjects, tsFrameworkStatement } from "@/content/projects";
import { links } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description: "Project index for TS-Reasoner, TS-Core, TensionLM, CIG, Proof Ranker, and related satellite branches.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="field-label text-gold">Projects</p>
        <h1>The canonical TS workbench.</h1>
        <p>{tsFrameworkStatement}</p>
      </div>

      <div className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <SectionHeading title="Evidence route">
        <p>
          Each project page keeps the same structure: problem, method, evidence,
          limits, public resources, current state, and next narrow milestone.
        </p>
      </SectionHeading>
      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <ParchmentCard tone="dark">
          <p className="field-label mb-3 text-gold">Serious routing</p>
          <div className="grid gap-3 md:grid-cols-2">
            {projects.map((project) => (
              <Link key={project.slug} href={project.href} className="rounded-md border border-gold/25 bg-forest-dark/45 p-4 transition hover:border-gold">
                <p className="font-serif text-2xl font-semibold text-cream">{project.title}</p>
                <p className="mt-2 text-sm leading-6 text-cream/72">{project.evidence}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-gold">
                  Open project <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </ParchmentCard>

        <ParchmentCard>
          <p className="field-label mb-3 text-brown">Satellite branches</p>
          <p className="text-sm leading-7 text-ink/75">
            These repos are useful context but are not the first-contact path for
            the current TS stack. Treat them as historical or experimental unless
            a receipt links them directly.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {secondaryProjects.map((project) => (
              <Link key={project.name} href={project.href} target="_blank" rel="noopener noreferrer" className="field-chip hover:border-brown/50">
                {project.name}
              </Link>
            ))}
          </div>
          <Link href={links.github} target="_blank" rel="noopener noreferrer" className="brass-link mt-5">
            View GitHub profile
            <ExternalLink className="h-4 w-4" />
          </Link>
        </ParchmentCard>
      </div>
    </section>
  );
}
