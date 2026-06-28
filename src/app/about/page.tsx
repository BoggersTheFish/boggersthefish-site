import Link from "next/link";
import { ExternalLink, Github, Mail } from "lucide-react";
import { FishCrestIcon } from "@/components/ArchiveIcons";
import { ParchmentCard } from "@/components/ParchmentCard";
import { SectionHeading } from "@/components/SectionHeading";
import { links, site } from "@/content/site";
import { timelineItems, type TimelineItem } from "@/content/timeline";
import { pageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "About",
  description: "Grounded public background, contact identity, and verified timeline for BoggersTheFish.",
  path: "/about",
});

function TimelineCard({ item }: { item: TimelineItem }) {
  const approximate = item.confidence === "approximate";

  return (
    <ParchmentCard className={cn("relative", approximate && "border-dashed opacity-90")}>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className={cn(
          "rounded-full border px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em]",
          approximate
            ? "border-brown/30 bg-forest/10 text-brown"
            : "border-gold/60 bg-gold/15 text-brown",
        )}>
          {item.confidence}
        </span>
        <span className="field-label text-brown">{item.date_kind.replaceAll("_", " ")}</span>
      </div>
      <p className="font-serif text-2xl font-semibold text-ink">{item.date}</p>
      <h3 className="mt-2 font-serif text-2xl font-semibold text-ink">{item.title}</h3>
      <p className="mt-3 text-sm leading-7 text-ink/76">{item.body}</p>
      <p className="mt-4 border-l-2 border-brown/30 pl-3 text-xs font-semibold leading-5 text-ink/65">
        {item.display_note}
      </p>
      {item.source_url ? (
        <Link href={item.source_url} target="_blank" rel="noopener noreferrer" className="brass-link mt-4">
          {item.source_label}
          <ExternalLink className="h-4 w-4" />
        </Link>
      ) : (
        <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-ink/55">
          Source: {item.source_label}
        </p>
      )}
    </ParchmentCard>
  );
}

export default function AboutPage() {
  return (
    <section className="page-shell">
      <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <ParchmentCard tone="dark" className="archive-manifesto">
          <FishCrestIcon className="mb-6 h-16 w-24 text-gold" />
          <p className="field-label text-gold">Personal origin story / grounded identity</p>
          <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight text-cream sm:text-6xl">
            Weird fish sigil, sober receipts.
          </h1>
          <p className="mt-6 text-lg leading-8 text-cream/82">
            BoggersTheFish can keep the Minecraft, OG Network, and personal
            systems-arc personality. Public research claims still have to pass
            through repos, traces, artifacts, or an explicit local-only label.
          </p>
          <p className="mt-4 text-sm leading-7 text-cream/80">
            Read the early experiments as a historical project arc. Dates are
            only treated as firm when tied to a GitHub repo, release, commit, or
            local verification artifact.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={links.github} target="_blank" rel="noopener noreferrer" className="plaque-button">
              <Github className="h-4 w-4" />
              GitHub
            </Link>
            <Link href={links.email} className="plaque-button secondary">
              <Mail className="h-4 w-4" />
              Primary email
            </Link>
          </div>
        </ParchmentCard>

        <div className="grid gap-5">
          <ParchmentCard>
            <p className="field-label mb-3 text-brown">Contact identity</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="receipt-field">
                <p className="field-label text-brown">Primary</p>
                <Link href={links.email} className="brass-link mt-2">
                  {site.email}
                </Link>
              </div>
              <div className="receipt-field">
                <p className="field-label text-brown">Domain alias</p>
                <Link href={links.domainEmail} className="brass-link mt-2">
                  {site.domainEmail}
                </Link>
              </div>
            </div>
          </ParchmentCard>

          <ParchmentCard>
            <p className="field-label mb-3 text-brown">Working standard</p>
            <div className="grid gap-3 md:grid-cols-2">
              {[
                "Claims should route to proofs, repos, artifacts, or a visible pending state.",
                "Personal background stays clearly labelled when it is approximate.",
                "Benchmark language remains bounded to the exact receipt that supports it.",
                "Local archive claims need receipt sync before they become public facts.",
              ].map((item) => (
                <p key={item} className="rounded-md border border-brown/20 bg-forest/10 p-3 text-sm leading-6 text-ink/76">
                  {item}
                </p>
              ))}
            </div>
          </ParchmentCard>
        </div>
      </div>

      <SectionHeading className="mt-14" eyebrow="Historical project arc" title="Verified milestones and approximate background">
        <p>
          Timeline dates are data-backed where marked verified. Approximate
          personal context is visibly separated from GitHub repository, release,
          and commit dates.
        </p>
      </SectionHeading>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {timelineItems.map((item) => (
          <TimelineCard key={`${item.date}-${item.title}`} item={item} />
        ))}
      </div>
    </section>
  );
}
