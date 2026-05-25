import { ParchmentCard } from "@/components/ParchmentCard";
import { roadmap, type RoadmapStatus } from "@/content/roadmap";
import { timelineItems } from "@/content/timeline";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Roadmap",
  description: "Roadmap for BoggersTheFish TS site, receipts, demos, docs, and funded compute path.",
  path: "/roadmap",
});

const statusClass: Record<RoadmapStatus, string> = {
  Live: "border-moss/60 bg-moss/20 text-forest",
  "In progress": "border-gold/60 bg-gold/20 text-brown",
  Planned: "border-brown/35 bg-forest/10 text-brown",
  Blocked: "border-sienna/50 bg-sienna/15 text-sienna",
  Experimental: "border-gold/40 bg-forest/15 text-brown",
};

export default function RoadmapPage() {
  const latestPublicMilestones = [...timelineItems]
    .filter((item) => item.confidence === "verified")
    .slice(-3)
    .reverse();

  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="field-label text-gold">Roadmap</p>
        <h1>What stabilizes next.</h1>
        <p>
          The roadmap is not hype scheduling. It is a tension map: what is live,
          what needs receipts, what needs demos, and what is blocked by compute or confirmation.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {roadmap.map((section) => (
          <ParchmentCard key={section.title}>
            <h2 className="font-serif text-3xl font-semibold text-ink">{section.title}</h2>
            <div className="mt-5 space-y-3">
              {section.items.map((item) => (
                <div key={item.title} className="rounded-md border border-brown/20 bg-parchment-light/45 p-3">
                  <p className="text-sm font-semibold leading-6 text-ink">{item.title}</p>
                  <span className={`mt-2 inline-flex rounded-full border px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] ${statusClass[item.status]}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </ParchmentCard>
        ))}
      </div>

      <ParchmentCard tone="dark" className="mt-10">
        <p className="field-label mb-3 text-gold">Date discipline</p>
        <p className="text-sm leading-7 text-cream/76">
          Roadmap items without source-backed dates are intentionally shown as
          Now, Next, or Later rather than calendar promises. Recent dated public
          milestones come from the shared timeline data model.
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {latestPublicMilestones.map((item) => (
            <div key={`${item.date}-${item.title}`} className="rounded-md border border-gold/25 bg-forest-dark/45 p-4">
              <p className="field-label text-gold">{item.date}</p>
              <p className="mt-2 font-serif text-xl font-semibold text-cream">{item.title}</p>
              <p className="mt-2 text-xs leading-5 text-cream/62">{item.source_label}</p>
            </div>
          ))}
        </div>
      </ParchmentCard>
    </section>
  );
}
