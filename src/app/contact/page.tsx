import Link from "next/link";
import { ExternalLink, Github, Mail } from "lucide-react";
import { ParchmentCard } from "@/components/ParchmentCard";
import { links, site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Contact and collaboration routes for BoggersTheFish TS research.",
  path: "/contact",
});

const areas = [
  "reproducibility",
  "mechanistic interpretability",
  "graph reasoning",
  "provenance systems",
  "small model experiments",
  "benchmark design",
  "docs/site help",
];

export default function ContactPage() {
  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="field-label text-gold">Contact / collaborate</p>
        <h1>Bring a repo, receipt, or test.</h1>
        <p>
          The best collaboration starts with a specific repo, receipt, or reproducible test.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <ParchmentCard tone="dark">
          <p className="field-label mb-4 text-gold">Contact links</p>
          <div className="space-y-3">
            <Link href={links.email} className="plaque-button">
              <Mail className="h-4 w-4" />
              Primary: {site.email}
            </Link>
            <Link href={links.domainEmail} className="plaque-button secondary">
              <Mail className="h-4 w-4" />
              Domain alias: {site.domainEmail}
            </Link>
            <Link href={links.github} target="_blank" rel="noopener noreferrer" className="plaque-button">
              <Github className="h-4 w-4" />
              GitHub
            </Link>
            <Link href={links.huggingFace} target="_blank" rel="noopener noreferrer" className="plaque-button">
              Hugging Face
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </ParchmentCard>

        <ParchmentCard>
          <p className="field-label mb-4 text-brown">Open collaboration areas</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {areas.map((area) => <span key={area} className="field-chip">{area}</span>)}
          </div>
          <p className="mt-6 text-sm leading-7 text-ink/75">
            Useful messages include the exact claim being tested, the artifact or
            repo involved, the expected replay command, and the failure mode you want to inspect.
          </p>
        </ParchmentCard>
      </div>
    </section>
  );
}
