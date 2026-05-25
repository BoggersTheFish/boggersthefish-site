import Link from "next/link";
import { ArrowRight, FileSearch, FlaskConical } from "lucide-react";
import { BGCNotice } from "@/components/BGCNotice";
import { FishCrestIcon, NodeGraphIcon, ParchmentIcon } from "@/components/ArchiveIcons";
import { ProjectCard } from "@/components/ProjectCard";
import { QuickLinks } from "@/components/QuickLinks";
import { projects } from "@/content/projects";
import { proofs } from "@/content/proofs";
import { timelineItems } from "@/content/timeline";

const latestVerified = [...timelineItems].reverse().find((item) => item.confidence === "verified");
const recentProof = proofs[0];

export function StorybookHero() {
  return (
    <div className="storybook-page">
      <section className="storybook-hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-vignette" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />

        <div className="hero-copy">
          <p className="field-label mb-5 text-gold">Independent AI research archive</p>
          <h1>Building the<br />Thinking System.</h1>
          <p className="hero-lede">
            Graph-based reasoning. Tension dynamics.<br />
            Constraint propagation. Verifiable truth.
          </p>
          <p className="hero-subcopy">
            Exploring new foundations for interpretable and reliable AI.
          </p>
          <div className="hero-actions">
            <Link href="/start-here" className="plaque-button">
              Start Here
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/research" className="plaque-button secondary">
              <FlaskConical className="h-4 w-4" />
              Explore Research
            </Link>
          </div>
        </div>

        <aside className="hero-board parchment">
          <div className="hero-board-section">
            <div className="mb-3 flex items-center gap-2 text-brown">
              <ParchmentIcon className="h-5 w-5" />
              <p className="field-label">Latest update</p>
            </div>
            {latestVerified ? (
              <>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink/55">
                  {latestVerified.date}
                </p>
                <h2 className="mt-2 font-serif text-2xl font-semibold text-ink">
                  {latestVerified.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-ink/75">
                  {latestVerified.display_note}
                </p>
                {latestVerified.source_url ? (
                  <Link href={latestVerified.source_url} target="_blank" rel="noopener noreferrer" className="brass-link mt-4">
                    Source
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : null}
              </>
            ) : null}
          </div>

          <div className="hero-board-section">
            <div className="mb-3 flex items-center gap-2 text-brown">
              <FileSearch className="h-5 w-5" />
              <p className="field-label">Recent proof</p>
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink/55">
              {recentProof.id} / {recentProof.status}
            </p>
            <h2 className="mt-2 font-serif text-2xl font-semibold text-ink">
              {recentProof.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-ink/75">
              {recentProof.limit}
            </p>
            <Link href={recentProof.route} className="brass-link mt-4">
              View proof
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </aside>

        <div className="hero-route-strip">
          {[
            ["New?", "Start Here", "/start-here"],
            ["Technical?", "Run TS-Reasoner", "/run-ts-reasoner"],
            ["Evidence?", "Proof Bank", "/proof-bank"],
            ["Models?", "TensionLM / Hugging Face", "/projects/tensionlm"],
            ["Support?", "Support / BGC", "/support"],
          ].map(([kicker, label, href]) => (
            <Link key={label} href={href} className="visitor-route">
              <NodeGraphIcon className="h-5 w-5" />
              <span>
                <span className="block text-[0.68rem] font-bold uppercase tracking-[0.16em] text-gold/80">{kicker}</span>
                <span className="block font-serif text-lg text-cream">{label}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="below-scene-grid">
        <div className="scene-projects">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} compact />
          ))}
        </div>
        <div className="scene-ledger">
          <BGCNotice />
        </div>
        <div className="scene-links">
          <QuickLinks />
          <div className="scene-marker" aria-hidden="true">
            <FishCrestIcon className="h-10 w-16" />
            <span>TS</span>
          </div>
        </div>
      </section>
    </div>
  );
}
