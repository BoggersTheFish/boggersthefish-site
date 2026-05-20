import Link from "next/link";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getProject } from "@/content/projects";
import { proofs } from "@/content/proofs";
import { ParchmentCard } from "@/components/ParchmentCard";
import { ClaimDiscipline } from "@/components/ClaimDiscipline";
import { CIGMiniDiagram, ProjectStackDiagram, ReceiptAnatomyDiagram, TensionLMMiniDiagram, TSCycleDiagram } from "@/components/Diagrams";

const fieldLabels = [
  ["problem", "What problem it addresses"],
  ["method", "How it works"],
  ["currentState", "What exists now"],
  ["evidence", "Evidence / receipts"],
  ["limits", "Limits"],
  ["nextMilestone", "Next milestone"],
] as const;

function ExternalTextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="brass-link">
      {children}
      <ExternalLink className="h-4 w-4" />
    </Link>
  );
}

export function ProjectDetail({ slug }: { slug: string }) {
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const relatedProofs = proofs.filter((proof) => project.proofIds.includes(proof.id));

  return (
    <section className="page-shell">
      <Link href="/projects" className="brass-link mb-8 text-gold">
        <ArrowLeft className="h-4 w-4" />
        Back to projects
      </Link>

      <div className="page-intro">
        <p className="field-label text-gold">{project.status} project</p>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
      </div>

      <ClaimDiscipline text="Claims on this page should be treated as hypotheses unless linked to a receipt, benchmark, or reproducible artifact." />

      {slug === "ts-core" ? <TSCycleDiagram /> : null}
      {slug === "tensionlm" ? <TensionLMMiniDiagram /> : null}
      {slug === "cig" ? <CIGMiniDiagram /> : null}
      {slug === "proof-ranker" ? <ReceiptAnatomyDiagram /> : null}

      <div className="mt-8 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <ParchmentCard>
          <div className="grid gap-4 md:grid-cols-2">
            {fieldLabels.map(([key, label]) => (
              <div key={key} className="receipt-field">
                <p className="field-label text-brown">{label}</p>
                <p className="mt-2 text-sm leading-7 text-ink/75">{project[key]}</p>
              </div>
            ))}
          </div>
        </ParchmentCard>

        <ParchmentCard tone="dark">
          <p className="field-label mb-4 text-gold">How to run / inspect</p>
          <div className="space-y-4">
            <div className="rounded-md border border-gold/20 bg-forest/45 p-3">
              <p className="field-label text-gold/80">Install / open</p>
              <code className="mt-2 block whitespace-pre-wrap text-xs leading-6 text-cream/80">{project.installCommand}</code>
            </div>
            <div className="rounded-md border border-gold/20 bg-forest/45 p-3">
              <p className="field-label text-gold/80">Inspect</p>
              <p className="mt-2 text-sm leading-6 text-cream/75">{project.inspectCommand}</p>
            </div>
          </div>

          <p className="field-label mb-3 mt-6 text-gold">Links</p>
          <div className="space-y-2">
            <ExternalTextLink href={project.repoUrl}>Main repo / source route</ExternalTextLink>
            {project.hfUrls.map((link) => (
              <ExternalTextLink key={link.href} href={link.href}>{link.label}</ExternalTextLink>
            ))}
          </div>
        </ParchmentCard>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <ParchmentCard tone="dark">
          <p className="field-label mb-4 text-gold">Focus tags</p>
          <div className="flex flex-wrap gap-2">
            {project.focus.map((item) => (
              <span key={item} className="rounded-full border border-gold/35 bg-forest/55 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.13em] text-cream">
                {item}
              </span>
            ))}
          </div>
          {slug === "proof-ranker" ? (
            <div className="mt-6 space-y-2 text-sm leading-6 text-cream/75">
              {project.notes.map((note) => <p key={note}>{note}</p>)}
            </div>
          ) : null}
        </ParchmentCard>

        <ParchmentCard>
          <p className="field-label mb-4 text-brown">Related receipts</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {relatedProofs.map((proof) => (
              <Link key={proof.id} href={proof.route} className="rounded-md border border-brown/20 bg-parchment-light/45 p-3 transition hover:border-gold">
                <span className="field-label text-brown">{proof.id}</span>
                <span className="mt-1 block font-serif text-lg font-semibold text-ink">{proof.title}</span>
              </Link>
            ))}
          </div>
        </ParchmentCard>
      </div>

      {slug === "ts-core" ? (
        <div className="mt-8">
          <ProjectStackDiagram />
        </div>
      ) : null}
    </section>
  );
}
