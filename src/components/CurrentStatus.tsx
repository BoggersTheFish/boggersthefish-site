import { currentStatus } from "@/content/site";
import { ParchmentCard } from "@/components/ParchmentCard";
import { SectionHeading } from "@/components/SectionHeading";

export function CurrentStatus() {
  return (
    <section className="page-shell pt-2">
      <SectionHeading eyebrow="Current status" title="What is active right now">
        <p>
          The public surface is split into small, inspectable workstreams. Each
          one has a different job in the TS research graph.
        </p>
      </SectionHeading>
      <ParchmentCard tone="dark" className="archive-ledger">
        <div className="grid gap-0 md:grid-cols-5">
          {currentStatus.map((item) => (
            <div key={item.label} className="ledger-cell">
              <p className="field-label text-gold">{item.label}</p>
              <p className="mt-3 text-sm leading-6 text-cream/80">{item.body}</p>
            </div>
          ))}
        </div>
      </ParchmentCard>
    </section>
  );
}
