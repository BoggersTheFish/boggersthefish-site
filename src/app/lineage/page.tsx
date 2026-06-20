import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { ParchmentCard } from "@/components/ParchmentCard";
import { SectionHeading } from "@/components/SectionHeading";
import {
  lineageCount,
  lineageGroups,
  type LineageEntry,
} from "@/content/lineage";
import { pageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Project Lineage",
  description:
    "A permanent record of the ideas, outcomes, failures, and successors behind the BoggersTheFish repository ecosystem.",
  path: "/lineage",
});

const statusClass: Record<LineageEntry["status"], string> = {
  Current: "border-moss/50 bg-moss/20 text-forest",
  Supporting: "border-gold/60 bg-gold/20 text-brown",
  Historical: "border-sienna/40 bg-sienna/12 text-sienna",
  Superseded: "border-brown/30 bg-brown/10 text-brown",
  Scratch: "border-ink/20 bg-ink/5 text-ink/60",
};

export default function LineagePage() {
  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="field-label text-gold">Permanent project lineage</p>
        <h1>{lineageCount} repositories. One readable development history.</h1>
        <p>
          Source repositories may be deleted after their useful code, results,
          and ideas are preserved. This page records what each branch attempted,
          what survived, and where the work moved next.
        </p>
      </div>

      <ParchmentCard
        tone="dark"
        className="mb-12 grid gap-5 md:grid-cols-[0.75fr_1.25fr]"
      >
        <div>
          <p className="field-label text-gold">Archive rule</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-cream">
            Deleting a repository is allowed. Deleting the lesson is not.
          </h2>
        </div>
        <div className="space-y-3 text-sm leading-7 text-cream/78">
          <p>
            “Historical” does not mean false or worthless. It means the code no
            longer carries the current public architecture.
          </p>
          <p>
            “Superseded” means the useful mechanism has a clearer successor.
            “Scratch” means no enduring public claim needs to survive.
          </p>
          <p>
            External links appear only where a repository still has an active
            or supporting role. The archive itself remains meaningful after a
            GitHub purge.
          </p>
        </div>
      </ParchmentCard>

      {lineageGroups.map((group) => (
        <div key={group.id} id={group.id} className="mb-16 scroll-mt-28">
          <SectionHeading eyebrow={group.period} title={group.title}>
            <p>{group.summary}</p>
          </SectionHeading>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {group.entries.map((entry) => (
              <ParchmentCard key={`${group.id}-${entry.name}`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-serif text-2xl font-semibold text-ink">
                      {entry.name}
                    </h2>
                    {entry.aliases?.length ? (
                      <p className="mt-1 text-xs text-ink/55">
                        {entry.aliases.join(" · ")}
                      </p>
                    ) : null}
                  </div>
                  <span
                    className={cn(
                      "shrink-0 rounded-full border px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.13em]",
                      statusClass[entry.status]
                    )}
                  >
                    {entry.status}
                  </span>
                </div>

                <div className="mt-5 space-y-4 text-sm leading-7 text-ink/75">
                  <div>
                    <p className="field-label text-brown">Original idea</p>
                    <p className="mt-1">{entry.idea}</p>
                  </div>
                  <div>
                    <p className="field-label text-brown">What survives</p>
                    <p className="mt-1">{entry.survives}</p>
                  </div>
                  <div>
                    <p className="field-label text-brown">Successor</p>
                    <p className="mt-1">{entry.successor}</p>
                  </div>
                </div>

                {entry.repoCount && entry.repoCount > 1 ? (
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-brown/70">
                    Represents {entry.repoCount} repositories
                  </p>
                ) : null}

                {entry.repoUrl ? (
                  <Link
                    href={entry.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brass-link mt-5"
                  >
                    Open current source
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                ) : null}
              </ParchmentCard>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
