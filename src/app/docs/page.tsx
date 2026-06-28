import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ParchmentCard } from "@/components/ParchmentCard";
import { SectionHeading } from "@/components/SectionHeading";
import { docs } from "@/content/docs";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Docs",
  description: "Documentation landing page for TS concepts, vocabulary, receipt format, and project map.",
  path: "/docs",
});

export default function DocsPage() {
  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="field-label text-gold">Docs</p>
        <h1>Reference shelves with doors.</h1>
        <p>
          Short guides, diagrams, receipt formats, and project references for
          reading the archive without swallowing loose claims.
        </p>
      </div>

      <SectionHeading title="Guides" />
      <ParchmentCard tone="dark" className="mb-8">
        <p className="field-label mb-3 text-gold">Growing archive</p>
        <p className="text-sm leading-7 text-cream/85">
          Docs are intentionally compact while the replay layer is being tightened.
          Stubbed topics are marked as guides, not abandoned pages, and should link
          back to real project routes or proof-bank receipts.
        </p>
      </ParchmentCard>
      <div className="grid gap-5 md:grid-cols-2">
        {docs.map((doc) => (
          <ParchmentCard key={doc.slug}>
            <p className="field-label mb-3 text-brown">Guide</p>
            <h2 className="font-serif text-2xl font-semibold text-ink">{doc.title}</h2>
            <p className="mt-3 text-sm leading-7 text-ink/75">{doc.summary}</p>
            <Link href={`/docs/${doc.slug}`} className="brass-link mt-5">
              Open guide
              <ArrowRight className="h-4 w-4" />
            </Link>
          </ParchmentCard>
        ))}
      </div>
    </section>
  );
}
