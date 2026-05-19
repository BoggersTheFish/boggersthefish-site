import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { ParchmentCard } from "@/components/ParchmentCard";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About BoggersTheFish, an independent AI research website for TS graph/tension work.",
};

export default function AboutPage() {
  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="field-label text-gold">About BoggersTheFish</p>
        <h1>Independent AI research, kept close to the evidence.</h1>
        <p>
          BoggersTheFish is the public home for TS research: graph-based reasoning,
          tension dynamics, constraint propagation, interpretable AI systems, and
          proof-oriented engineering.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <ParchmentCard tone="dark">
          <p className="field-label mb-3 text-gold">Research stance</p>
          <p className="text-sm leading-7 text-cream/80">
            TS is presented as a useful engineering and research lens. Public
            pages separate measured artifacts, source-backed results, and open
            hypotheses so the archive can stay expressive without overstating
            what has been shown.
          </p>
          <Link href={`mailto:${site.email}`} className="plaque-button mt-6">
            <Mail className="h-4 w-4" />
            Contact
          </Link>
        </ParchmentCard>

        <ParchmentCard>
          <SectionHeading title="What this site is for" className="mb-5">
            <p className="text-ink/80">
              A readable field manual for TS experiments, project notes, proof-bank
              receipts, and documentation.
            </p>
          </SectionHeading>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Reproducible experiments",
              "Open-source research",
              "Constraint graphs",
              "Tension telemetry",
              "Proof ranking",
              "Provenance-aware knowledge graphs",
            ].map((item) => (
              <span key={item} className="field-chip">
                {item}
              </span>
            ))}
          </div>
        </ParchmentCard>
      </div>
    </section>
  );
}
