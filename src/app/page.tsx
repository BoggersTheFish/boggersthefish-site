import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  BookOpenCheck,
  Braces,
  ExternalLink,
  Gamepad2,
  Github,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  bio,
  currentProgramme,
  openSourceProjects,
  publications,
  verifiedLinks,
} from "@/content/current";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/content/site";

export const metadata = pageMetadata({
  title: site.title,
  description: site.description,
  path: "/",
});

const standards = [
  "Model confidence is never accepted as proof by itself.",
  "Failed gates and negative results remain part of the record.",
  "Public claims link to source, a DOI, a receipt, or a visible limitation.",
  "Version names are separated from the evidence that supports them.",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="page-shell">
        <SectionHeading
          eyebrow="Current programme"
          title="One research direction, three public surfaces"
        >
          <p>
            PRIME is the current synthesis. The adaptive-state publication
            establishes its evidence lineage; the Thinking System repository
            carries the wider open-source programme.
          </p>
        </SectionHeading>
        <div className="grid gap-5 lg:grid-cols-3">
          {currentProgramme.map((item, index) => (
            <article key={item.title} className="modern-card group">
              <div className="flex items-start justify-between gap-4">
                <span className="index-mark">0{index + 1}</span>
                <span className="rounded-full border border-gold/20 px-2.5 py-1 text-[0.67rem] font-bold uppercase tracking-[0.12em] text-cream/50">
                  {item.status}
                </span>
              </div>
              <p className="field-label mt-8 text-gold">{item.kicker}</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-cream">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-cream/68">{item.body}</p>
              <Link
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-gold"
              >
                {item.action}
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-gold/15 bg-black/15">
        <div className="page-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="field-label text-gold">Evidence standard</p>
              <h2 className="mt-4 max-w-lg font-serif text-4xl font-semibold leading-tight text-cream sm:text-5xl">
                Credibility lives in the boundary, not the branding.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-cream/66">
                The archive deliberately distinguishes implemented mechanisms,
                frozen benchmark results, historical lineage, and open
                hypotheses.
              </p>
              <Link href="/proof-bank" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-gold">
                Open the proof bank <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {standards.map((standard, index) => (
                <div key={standard} className="evidence-rule">
                  <span className="font-mono text-xs text-gold">R{index + 1}</span>
                  <p className="text-sm leading-6 text-cream/72">{standard}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell">
        <SectionHeading eyebrow="Published research software" title="Permanent records, not launch-post claims">
          <p>
            The current programme is deposited on Zenodo with versioned
            metadata, stable DOIs, artifact files, and explicit claim boundaries.
          </p>
        </SectionHeading>
        <div className="space-y-4">
          {publications.map((publication) => (
            <article key={publication.doi} className="publication-row">
              <div className="lg:col-span-2">
                <p className="field-label text-gold">{publication.date}</p>
                <p className="mt-2 text-xs text-cream/46">{publication.type}</p>
              </div>
              <div className="lg:col-span-7">
                <h2 className="font-serif text-2xl font-semibold text-cream">
                  {publication.title}
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-cream/64">
                  {publication.summary}
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 lg:col-span-3 lg:items-end">
                <code className="text-xs text-cream/48">{publication.doi}</code>
                <Link
                  href={publication.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-gold"
                >
                  Zenodo record <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/publications" className="plaque-button secondary">
            <BookOpenCheck className="h-4 w-4" />
            Publication details
          </Link>
        </div>
      </section>

      <section className="page-shell pt-2">
        <div className="enthusia-feature">
          <div className="relative z-10 max-w-2xl">
            <p className="field-label text-emerald-200">Applied systems · Minecraft</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-white sm:text-5xl">
              Developer on Enthusia SMP
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              Enthusia is a permanent, vanilla-based semi-anarchy survival
              server for Java and Bedrock. Ben contributes to the server and its
              plugin ecosystem, including market, currency, guild, and framework
              work.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/enthusia" className="plaque-button">
                <Gamepad2 className="h-4 w-4" />
                View the work
              </Link>
              <Link
                href={verifiedLinks.enthusia}
                target="_blank"
                rel="noopener noreferrer"
                className="plaque-button secondary"
              >
                Enthusia SMP <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="server-map relative z-10" aria-label="Enthusia development areas">
            {[
              ["Permanent world", "Long-lived community systems"],
              ["Player economy", "Markets and raw-gold trade"],
              ["Guild systems", "Identity and progression"],
              ["Crossplay", "Java and Bedrock support"],
            ].map(([title, body]) => (
              <div key={title} className="server-node">
                <span />
                <div>
                  <p className="text-sm font-bold text-white">{title}</p>
                  <p className="mt-1 text-xs text-white/50">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell pt-6">
        <SectionHeading eyebrow="Open source" title="Research code and real-world systems">
          <p>
            Current work spans verifier-governed research, language and state
            tooling, GPU experiments, web software, and Minecraft plugins.
          </p>
        </SectionHeading>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {openSourceProjects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              target={project.href.startsWith("http") ? "_blank" : undefined}
              rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="repo-card group"
            >
              <div className="flex items-center justify-between gap-3">
                <Braces className="h-5 w-5 text-gold" />
                <span className="text-[0.67rem] font-bold uppercase tracking-[0.12em] text-cream/42">
                  {project.language}
                </span>
              </div>
              <p className="field-label mt-6 text-gold">{project.role}</p>
              <h3 className="mt-2 font-mono text-base font-bold text-cream">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-cream/62">{project.body}</p>
              <ArrowUpRight className="mt-6 h-4 w-4 text-gold transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/projects" className="plaque-button secondary">
            <Blocks className="h-4 w-4" />
            Browse open source
          </Link>
          <Link
            href={verifiedLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="plaque-button secondary"
          >
            <Github className="h-4 w-4" />
            GitHub profile
          </Link>
        </div>
      </section>

      <section className="page-shell pt-3">
        <div className="bio-strip">
          <div className="bio-monogram" aria-hidden="true">BM</div>
          <div>
            <p className="field-label text-gold">About Ben</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-cream">
              Independent researcher. Software developer. Server builder.
            </h2>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-cream/66">{bio.short}</p>
          </div>
          <Link href="/about" className="plaque-button secondary shrink-0">
            About
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
