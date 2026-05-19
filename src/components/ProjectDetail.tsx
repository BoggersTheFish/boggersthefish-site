import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProject } from "@/content/projects";
import { ParchmentCard } from "@/components/ParchmentCard";
import { SectionHeading } from "@/components/SectionHeading";

export function ProjectDetail({ slug }: { slug: string }) {
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="page-shell">
      <Link href="/projects" className="brass-link mb-8 text-gold">
        <ArrowLeft className="h-4 w-4" />
        Back to projects
      </Link>

      <div className="page-intro">
        <p className="field-label text-gold">{project.status} project</p>
        <h1>{project.name}</h1>
        <p>{project.shortDescription}</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <ParchmentCard>
          <SectionHeading title="Project surface" className="mb-5">
            <p className="text-ink/80">{project.description}</p>
          </SectionHeading>
          <div className="space-y-3">
            {project.notes.map((note) => (
              <p key={note} className="border-l-2 border-brown/35 pl-4 text-sm leading-7 text-ink/75">
                {note}
              </p>
            ))}
          </div>
        </ParchmentCard>

        <ParchmentCard tone="dark">
          <p className="field-label mb-4 text-gold">Focus tags</p>
          <div className="flex flex-wrap gap-2">
            {project.focus.map((item) => (
              <span key={item} className="rounded-full border border-gold/35 bg-forest/55 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.13em] text-cream">
                {item}
              </span>
            ))}
          </div>
          <Link href="/proof-bank" className="plaque-button mt-8">
            Check proof bank
            <ArrowRight className="h-4 w-4" />
          </Link>
        </ParchmentCard>
      </div>
    </section>
  );
}
