import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Database,
  FileCheck2,
  Github,
  ShieldCheck,
} from "lucide-react";
import {
  primeEvidence,
  researchPrinciple,
  verifiedLinks,
} from "@/content/current";

export function Hero() {
  return (
    <section className="new-hero relative overflow-hidden border-b border-gold/25">
      <div className="hero-coordinate-grid" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[700px] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-black/25 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-gold">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.8)]" />
            Independent research · Current August 2026
          </div>
          <p className="field-label mb-4 text-cream/60">
            Ben Michalek / BoggersTheFish
          </p>
          <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[0.94] text-cream sm:text-6xl lg:text-[5.2rem]">
            Building AI systems that must{" "}
            <span className="text-gold">show their work.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-cream/78 sm:text-xl">
            Verifier-first AI, adaptive state abstraction, and reproducible
            research software—alongside open-source systems and Minecraft server
            development.
          </p>
          <p className="mt-5 max-w-xl border-l border-gold/50 pl-4 text-sm leading-7 text-cream/64">
            {researchPrinciple}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href={verifiedLinks.prime}
              target="_blank"
              rel="noopener noreferrer"
              className="plaque-button"
            >
              Read PRIME v1.0.0
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/research" className="plaque-button secondary">
              Explore the programme
            </Link>
            <Link
              href={verifiedLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="plaque-button secondary"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </div>
        </div>

        <aside className="research-console relative z-10" aria-label="PRIME release summary">
          <div className="flex items-center justify-between border-b border-gold/20 px-5 py-4">
            <div>
              <p className="field-label text-gold">Current flagship</p>
              <h2 className="mt-1 font-serif text-3xl font-semibold text-cream">
                PRIME v1.0.0
              </h2>
            </div>
            <span className="rounded-full border border-emerald-300/35 bg-emerald-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-emerald-200">
              Published
            </span>
          </div>

          <div className="space-y-3 p-5">
            {[
              {
                icon: ShieldCheck,
                title: "Proposal is not authority",
                body: "Learned fields rank candidates; declared verifiers control promotion.",
              },
              {
                icon: Database,
                title: "Persistent representation repair",
                body: "Repair, retirement, restoration, and abstention stay explicit and auditable.",
              },
              {
                icon: FileCheck2,
                title: "Frozen evidence package",
                body: "Tests, negative results, hashes, replay tools, and claim boundaries ship together.",
              },
            ].map((item) => (
              <div key={item.title} className="console-row">
                <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <h3 className="text-sm font-bold text-cream">{item.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-cream/58">{item.body}</p>
                </div>
                <CheckCircle2 className="ml-auto h-4 w-4 shrink-0 text-emerald-200/80" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 border-t border-gold/20 sm:grid-cols-4">
            {primeEvidence.map((item) => (
              <div key={item.label} className="border-b border-r border-gold/15 p-4 last:border-r-0 sm:border-b-0">
                <p className="font-mono text-xl font-bold text-gold">{item.value}</p>
                <p className="mt-1 text-[0.67rem] leading-4 text-cream/48">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between gap-4 border-t border-gold/20 bg-black/20 px-5 py-3 text-xs text-cream/48">
            <span>DOI 10.5281/zenodo.22058441</span>
            <span>MIT · software</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
