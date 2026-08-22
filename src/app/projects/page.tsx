import Link from "next/link";
import { ArrowRight, ArrowUpRight, Archive, Github } from "lucide-react";
import { openSourceProjects, verifiedLinks } from "@/content/current";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Open Source",
  description:
    "Current open-source research software, Minecraft server systems, and preserved Thinking System project lineage by Ben Michalek / BoggersTheFish.",
  path: "/projects",
});

const legacyRoutes = [
  {
    label: "TS-Reasoner",
    href: "/projects/ts-reasoner",
    note: "Verifier-first authority and receipts · archived predecessor",
  },
  {
    label: "TensionLM",
    href: "/projects/tensionlm",
    note: "Sigmoid tension-attention experiments · archived evidence line",
  },
  {
    label: "TensionForge",
    href: "/projects/tensionforge",
    note: "Verified OpenCL training on legacy AMD hardware",
  },
  {
    label: "TSQ",
    href: "/projects/tsq",
    note: "Adaptive precision routing research",
  },
  {
    label: "bogbin",
    href: "/projects/bogos",
    note: "Deterministic storage, state, journals, and rollback",
  },
  {
    label: "Ten-SON-LM",
    href: "/projects/ten-son-lm",
    note: "Causal tension experiments in recurrent workspaces",
  },
];

export default function ProjectsPage() {
  return (
    <section className="page-shell">
      <div className="page-intro max-w-4xl">
        <p className="field-label text-gold">Open source</p>
        <h1>Current source first. Predecessors clearly labelled.</h1>
        <p>
          The public surface changed in 2026: the Thinking System monorepo is the
          canonical TS codebase, adaptive-state projects carry the newest
          research, and older repositories now serve as evidence and lineage
          rather than competing flagships.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {openSourceProjects.map((project, index) => (
          <Link
            key={project.title}
            href={project.href}
            target={project.href.startsWith("http") ? "_blank" : undefined}
            rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="modern-card group"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="index-mark">0{index + 1}</span>
              <span className="text-[0.67rem] font-bold uppercase tracking-[0.12em] text-cream/42">
                {project.language}
              </span>
            </div>
            <p className="field-label mt-8 text-gold">{project.role}</p>
            <h2 className="mt-3 font-mono text-lg font-bold text-cream">
              {project.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-cream/64">{project.body}</p>
            <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-gold">
              Inspect
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href={verifiedLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="plaque-button"
        >
          <Github className="h-4 w-4" />
          All public repositories
        </Link>
        <Link href="/lineage" className="plaque-button secondary">
          <Archive className="h-4 w-4" />
          Full project lineage
        </Link>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="field-label text-gold">Preserved predecessors</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-cream">
            Earlier work stays inspectable without staying “current.”
          </h2>
          <p className="mt-5 text-sm leading-7 text-cream/64">
            These pages retain useful mechanisms, measured limits, model
            artifacts, and negative results. Repository status may now be
            archived or migrated to the canonical monorepo.
          </p>
        </div>
        <div className="space-y-3">
          {legacyRoutes.map((route) => (
            <Link key={route.href} href={route.href} className="legacy-row group">
              <div>
                <p className="font-serif text-xl font-semibold text-cream">{route.label}</p>
                <p className="mt-1 text-sm text-cream/48">{route.note}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-gold transition group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
