import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { ClaimDiscipline } from "@/components/ClaimDiscipline";
import { ProjectStackDiagram } from "@/components/Diagrams";
import { ParchmentCard } from "@/components/ParchmentCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects, secondaryProjects, tsFrameworkStatement } from "@/content/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Projects",
  description: "Project index for TS-Core, TensionLM, CIG, Proof Ranker, and related satellite branches.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="field-label text-gold">Project index</p>
        <h1>Research tools, not product theater.</h1>
        <p>{tsFrameworkStatement}</p>
      </div>

      <ClaimDiscipline />
      <ProjectStackDiagram />

      <SectionHeading className="mt-12" title="Core project cards">
        <p>
          The first-contact path is TS-Core, TensionLM, CIG, and Proof Ranker.
          Each card routes to receipts, repo/model links, current limits, and next milestones.
        </p>
      </SectionHeading>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <SectionHeading className="mt-14" title="Secondary and historical branches">
        <p>
          These projects are experimental, historical, or satellite branches. They
          are context, not the best first-contact route into the current stack.
        </p>
      </SectionHeading>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {secondaryProjects.map((project) => (
          <ParchmentCard key={project.name}>
            <h2 className="font-serif text-2xl font-semibold text-ink">{project.name}</h2>
            <p className="mt-3 text-sm leading-7 text-ink/75">{project.body}</p>
            <Link href={project.href} target="_blank" rel="noopener noreferrer" className="brass-link mt-4">
              Open source route
              <ExternalLink className="h-4 w-4" />
            </Link>
          </ParchmentCard>
        ))}
      </div>
    </section>
  );
}
