import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ParchmentCard } from "@/components/ParchmentCard";
import { CIGMiniDiagram, ProjectStackDiagram, ReceiptAnatomyDiagram, TSCycleDiagram } from "@/components/Diagrams";
import { docs, getDoc } from "@/content/docs";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return docs.map((doc) => ({ slug: doc.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const doc = getDoc(params.slug);
  return pageMetadata({
    title: doc?.title ?? "Docs",
    description: doc?.summary,
    path: `/docs/${params.slug}`,
  });
}

export default function DocPage({ params }: { params: { slug: string } }) {
  const doc = getDoc(params.slug);

  if (!doc) {
    notFound();
  }

  return (
    <section className="page-shell">
      <Link href="/docs" className="brass-link mb-8 text-gold">
        <ArrowLeft className="h-4 w-4" />
        Back to docs
      </Link>
      <div className="page-intro">
        <p className="field-label text-gold">Docs</p>
        <h1>{doc.title}</h1>
        <p>{doc.summary}</p>
      </div>

      {doc.slug === "primer" ? <TSCycleDiagram /> : null}
      {doc.slug === "project-map" ? <ProjectStackDiagram /> : null}
      {doc.slug === "receipt-format" ? <ReceiptAnatomyDiagram /> : null}
      {doc.slug === "vocabulary" ? <CIGMiniDiagram /> : null}

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {doc.sections.map((section) => (
          <ParchmentCard key={section.title}>
            <h2 className="font-serif text-2xl font-semibold text-ink">{section.title}</h2>
            <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-ink/75">{section.body}</p>
          </ParchmentCard>
        ))}
      </div>
    </section>
  );
}
