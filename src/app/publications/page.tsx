import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  FileArchive,
  Fingerprint,
  Scale,
} from "lucide-react";
import { primeEvidence, publications } from "@/content/current";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Publications",
  description:
    "Published Zenodo software records, DOIs, versions, evidence boundaries, and citation details for Ben Michalek / BoggersTheFish.",
  path: "/publications",
});

const releaseSignals = [
  {
    icon: Fingerprint,
    title: "Permanent identity",
    body: "Every listed release has a stable DOI and versioned Zenodo record.",
  },
  {
    icon: FileArchive,
    title: "Artifact-first",
    body: "Source, evidence, tests, manifests, and replay tools travel with the claim.",
  },
  {
    icon: Scale,
    title: "Bounded interpretation",
    body: "The records state what was tested, what failed, and what remains unproved.",
  },
];

export default function PublicationsPage() {
  return (
    <section className="page-shell">
      <div className="page-intro max-w-4xl">
        <p className="field-label text-gold">Published research software</p>
        <h1>Artifacts that can be cited, inspected, and challenged.</h1>
        <p>
          The publication surface is deliberately small. A record belongs here
          when it has a permanent DOI, explicit version, downloadable artifact,
          and a claim boundary strong enough to survive outside a launch post.
        </p>
      </div>

      <div className="mb-12 grid gap-4 md:grid-cols-3">
        {releaseSignals.map((signal) => (
          <div key={signal.title} className="modern-card">
            <signal.icon className="h-6 w-6 text-gold" />
            <h2 className="mt-6 font-serif text-2xl font-semibold text-cream">
              {signal.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-cream/64">{signal.body}</p>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        {publications.map((publication, index) => (
          <article key={publication.doi} className="release-card">
            <div className="border-b border-gold/15 p-6 lg:border-b-0 lg:border-r">
              <span className="index-mark">0{index + 1}</span>
              <p className="field-label mt-8 text-gold">{publication.date}</p>
              <p className="mt-2 text-xs leading-5 text-cream/48">{publication.type}</p>
            </div>
            <div className="p-6 lg:p-8">
              <h2 className="max-w-4xl font-serif text-3xl font-semibold leading-tight text-cream sm:text-4xl">
                {publication.title}
              </h2>
              <p className="mt-5 max-w-4xl text-sm leading-7 text-cream/68">
                {publication.summary}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <code className="rounded border border-gold/20 bg-black/20 px-3 py-2 text-xs text-cream/58">
                  {publication.doi}
                </code>
                <Link
                  href={publication.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="plaque-button"
                >
                  Open Zenodo
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="field-label text-gold">PRIME evidence snapshot</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-cream">
            Strong receipts, narrow claim.
          </h2>
          <p className="mt-5 text-sm leading-7 text-cream/64">
            PRIME v1.0.0 corresponds internally to scientific generation v18.
            Its release supports bounded claims in declared symbolic,
            finite-state, and controlled-Markov settings. It does not establish
            AGI, unrestricted language understanding, universal state discovery,
            or universal POMDP optimality.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {primeEvidence.map((item) => (
            <div key={item.label} className="evidence-rule">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-200" />
              <div>
                <p className="font-mono text-2xl font-bold text-gold">{item.value}</p>
                <p className="mt-1 text-sm text-cream/58">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
