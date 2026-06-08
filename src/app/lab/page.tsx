import { ParchmentCard } from "@/components/ParchmentCard";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Lab / Constraint Graph Playground",
  description: "Auditable prototype for constraint graph tension and relaxation.",
  path: "/lab",
});

export default function LabPage() {
  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="field-label text-gold">Lab</p>
        <h1>Constraint Graph Playground.</h1>
        <p>
          An auditable prototype/demo for constraint graph tension and relaxation dynamics.
        </p>
      </div>

      <SectionHeading title="TS v0.6 Demo">
        <p>
          Important correctness note: imported receipts must be re-evaluated locally.
          Hash validity alone is not enough if the imported verifier result does not
          match local recomputation.
        </p>
      </SectionHeading>

      <ParchmentCard tone="dark">
        <div className="text-center py-12">
          <p className="field-label mb-2 text-gold">TODO</p>
          <p className="text-sm text-cream/70">
            Wire in the TS v0.6 demo HTML constraint graph visualizer.
          </p>
        </div>
      </ParchmentCard>
    </section>
  );
}
