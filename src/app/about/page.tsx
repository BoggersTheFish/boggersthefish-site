import Link from "next/link";
import { ExternalLink, Github, Mail } from "lucide-react";
import { ParchmentCard } from "@/components/ParchmentCard";
import { links, site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description: "About Ben Michalek / BoggersTheFish, an independent UK AI researcher and solo developer.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="field-label text-gold">About</p>
        <h1>Ben Michalek / BoggersTheFish.</h1>
        <p>
          Independent AI researcher and solo developer based in the UK, focused
          on graph-based reasoning, interpretable AI, constraint dynamics,
          provenance-aware knowledge systems, and proof/ranking tools.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
        <ParchmentCard>
          <h2 className="font-serif text-3xl font-semibold text-ink">Research stance</h2>
          <p className="mt-4 text-sm leading-7 text-ink/80">
            The work is open-source and evidence-led: projects should connect
            to GitHub repos, Hugging Face artifacts, proof-bank receipts, and
            explicit limits. TS is presented as an engineering lens, not a
            finished AGI claim.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "graph-based reasoning",
              "interpretable AI",
              "constraint dynamics",
              "provenance-aware knowledge systems",
              "proof/ranking tools",
              "small model experiments",
            ].map((item) => <span key={item} className="field-chip">{item}</span>)}
          </div>
        </ParchmentCard>

        <ParchmentCard tone="dark">
          <p className="field-label mb-4 text-gold">Contact</p>
          <div className="space-y-3">
            <Link href={links.github} target="_blank" rel="noopener noreferrer" className="plaque-button">
              <Github className="h-4 w-4" />
              GitHub
              <ExternalLink className="h-4 w-4" />
            </Link>
            <Link href={links.huggingFace} target="_blank" rel="noopener noreferrer" className="plaque-button">
              Hugging Face
              <ExternalLink className="h-4 w-4" />
            </Link>
            <Link href={links.email} className="plaque-button">
              <Mail className="h-4 w-4" />
              {site.email}
            </Link>
            <Link href={links.home} target="_blank" rel="noopener noreferrer" className="plaque-button">
              Website
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </ParchmentCard>
      </div>
    </section>
  );
}
