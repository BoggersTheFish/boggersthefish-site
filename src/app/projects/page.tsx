import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects, tsFrameworkStatement } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Project index for TS-Core, TensionLM, CIG, and Proof Ranker research work.",
};

export default function ProjectsPage() {
  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="field-label text-gold">Project index</p>
        <h1>Research tools, not product theater.</h1>
        <p>{tsFrameworkStatement}</p>
      </div>

      <SectionHeading title="Core project cards">
        <p>
          Each project keeps a narrow job: runtime substrate, language experiments,
          provenance graphs, or proof ranking.
        </p>
      </SectionHeading>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
