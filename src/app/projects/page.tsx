import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { ParchmentCard } from "@/components/ParchmentCard";
import { SectionHeading } from "@/components/SectionHeading";
import {
  projects,
  supportProjects,
  tsFrameworkStatement,
} from "@/content/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Current Work",
  description:
    "The current verifier-first reasoning, language, model, adaptive-inference, and verified-computing projects.",
  path: "/projects",
});

const stack = [
  {
    title: "Human interface",
    body: "ts-chat-language compiles text into explicit semantic frames, MeaningGraphs, state diffs, and response plans.",
  },
  {
    title: "Authority boundary",
    body: "TS-Reasoner verifies typed support, contains failed candidates, repairs bounded errors, and controls memory writes.",
  },
  {
    title: "Learned mechanisms",
    body: "Ten-SON-LM and TensionLM test tension inside models; TSQ tests whether tension can allocate numerical compute.",
  },
  {
    title: "Deterministic substrate",
    body: "bogbin verifies state and persistence; TensionForge verifies custom training execution on legacy hardware.",
  },
];

export default function ProjectsPage() {
  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="field-label text-gold">Current work</p>
        <h1>Eight active questions, not fifty-two competing flagships.</h1>
        <p>{tsFrameworkStatement}</p>
      </div>

      <div className="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <SectionHeading title="How the stack fits together">
        <p>
          The projects are modular on purpose. Language, verification, learned
          mechanisms, and deterministic computing should be testable without
          collapsing into one giant repository.
        </p>
      </SectionHeading>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stack.map((item) => (
          <ParchmentCard key={item.title} tone="dark">
            <h2 className="font-serif text-2xl font-semibold text-cream">
              {item.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-cream/76">{item.body}</p>
          </ParchmentCard>
        ))}
      </div>

      <SectionHeading className="mt-14" title="Supporting nodes">
        <p>
          These contain useful infrastructure or bounded experiments. They
          support the active programmes rather than starting another public
          storyline.
        </p>
      </SectionHeading>
      <div className="grid gap-5 md:grid-cols-3">
        {supportProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="mt-12">
        <ParchmentCard className="grid gap-5 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="field-label text-brown">Where did the rest go?</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-ink">
              Into the lineage, not into oblivion.
            </h2>
          </div>
          <div>
            <p className="text-sm leading-7 text-ink/75">
              Earlier GOAT, AI, OS, CIG, wave, visualisation, model, and
              convergence repositories are recorded by idea, outcome, and
              successor before their GitHub sources are removed.
            </p>
            <Link href="/lineage" className="brass-link mt-5">
              Open the full lineage
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ParchmentCard>
      </div>
    </section>
  );
}
