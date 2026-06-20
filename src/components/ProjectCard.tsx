import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  CrownSketchIcon,
  FishCrestIcon,
  NodeGraphIcon,
  ParchmentIcon,
} from "@/components/ArchiveIcons";
import type { Project } from "@/content/projects";
import { ParchmentCard } from "@/components/ParchmentCard";
import { cn } from "@/lib/utils";

const iconMap = {
  "ts-reasoner": ParchmentIcon,
  "ts-chat-language": CrownSketchIcon,
  "ten-son-lm": FishCrestIcon,
  tensionforge: NodeGraphIcon,
  tsq: ParchmentIcon,
  bogos: CrownSketchIcon,
  "ts-benchmarks": ParchmentIcon,
  "ts-core": NodeGraphIcon,
  tensionlm: FishCrestIcon,
  cig: CrownSketchIcon,
  "proof-ranker": ParchmentIcon,
};

const statusClass: Record<Project["status"], string> = {
  Live: "bg-moss/20 text-forest border-moss/50",
  Active: "bg-moss/20 text-forest border-moss/50",
  Experimental: "bg-sienna/12 text-sienna border-sienna/40",
  Published: "bg-gold/20 text-brown border-gold/60",
  "In Progress": "bg-forest/10 text-forest border-forest/30",
  Planned: "bg-brown/10 text-brown border-brown/30",
};

export function ProjectCard({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const Icon = iconMap[project.slug as keyof typeof iconMap] ?? NodeGraphIcon;

  return (
    <ParchmentCard className="group flex h-full flex-col hover:-translate-y-1 hover:border-gold/80">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="diagram-icon" aria-hidden="true">
          <Icon className="h-5 w-5" />
        </div>
        <span
          className={cn(
            "rounded-full border px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em]",
            statusClass[project.status]
          )}
        >
          {project.status}
        </span>
      </div>
      <h3 className="font-serif text-2xl font-semibold text-ink">
        {project.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-ink/80">
        {compact ? project.shortDescription : project.summary}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.slice(0, compact ? 2 : 3).map((tag) => (
          <span key={tag} className="field-chip">
            {tag}
          </span>
        ))}
      </div>
      <Link href={project.href} className="brass-link mt-5">
        Explore {project.title}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </ParchmentCard>
  );
}
