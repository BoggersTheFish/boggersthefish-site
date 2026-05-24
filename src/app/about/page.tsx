"use client";

import Link from "next/link";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import {
  Github,
  Youtube,
  Instagram,
  Twitter,
  Mail,
  ExternalLink,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SOCIAL_LINKS } from "@/lib/tsData";

const STORY_NODES = [
  {
    era: "Early background",
    title: "Minecraft servers and systems thinking",
    color: "text-green-400",
    borderColor: "border-green-500/30",
    bg: "bg-green-500/5",
    content:
      "Personal background only: Minecraft servers, base-building, resource constraints, and adversarial systems shaped the way I think about graphs and pressure. No exact public date is claimed here.",
    tags: ["personal background", "approximate", "not GitHub-dated"],
    source: "Approximate personal background",
  },
  {
    era: "2026-03-09",
    title: "GOAT-TS public theory repo opened",
    color: "text-ts-purple-light",
    borderColor: "border-ts-purple/40",
    bg: "bg-ts-purple/5",
    content:
      "The first public repo in this timeline is GOAT-TS. This date is the GitHub repository creation date, so it is evidence for the public branch, not a claim about when the idea began.",
    tags: ["GOAT-TS", "repo created_at", "historical branch"],
    source: "BoggersTheFish/GOAT-TS repo.created_at",
  },
  {
    era: "2026-03-16",
    title: "BoggersTheCIG public provenance graph repo opened",
    color: "text-ts-purple-light",
    borderColor: "border-ts-purple/40",
    bg: "bg-ts-purple/5",
    content:
      "CIG is the public concept/provenance graph branch: confidence-weighted claims, contradiction tracking, and inspectable knowledge memory.",
    tags: ["CIG", "repo created_at", "provenance graph"],
    source: "BoggersTheFish/BoggersTheCIG repo.created_at",
  },
  {
    era: "2026-03-20",
    title: "TS-Core and BoggersTheAI public branches opened",
    color: "text-ts-purple-light",
    borderColor: "border-ts-purple/40",
    bg: "bg-ts-purple/5",
    content:
      "GitHub records TS-Core and BoggersTheAI as public repos on this date. Treat these as historical/experimental public branches, not as proof of a mature runtime.",
    tags: ["TS-Core", "BoggersTheAI", "repo created_at"],
    source: "BoggersTheFish/TS-Core and BoggersTheFish/BoggersTheAI repo.created_at",
  },
  {
    era: "2026-04-10",
    title: "TensionLM experiment repo opened",
    color: "text-ts-purple-light",
    borderColor: "border-ts-purple/40",
    bg: "bg-ts-purple/5",
    content:
      "TensionLM became a public experiment branch for sigmoid pairwise tension attention and controlled comparison work.",
    tags: ["TensionLM", "repo created_at", "experiment"],
    source: "BoggersTheFish/TensionLM repo.created_at",
  },
  {
    era: "2026-05-20",
    title: "TS-Reasoner v0.1.0 and TS-Codex-OS v0.1.0 released",
    color: "text-ts-purple",
    borderColor: "border-ts-purple/60",
    bg: "bg-ts-purple/10",
    content:
      "GitHub releases verify the first TS-Reasoner public release and the TS-Codex-OS v0.1.0 local project substrate release on this date.",
    tags: ["TS-Reasoner", "TS-Codex-OS", "GitHub releases"],
    source: "release.published_at for v0.1.0 in both repos",
  },
  {
    era: "2026-05-23",
    title: "TS-Reasoner release ladder and v1 foundation",
    color: "text-ts-purple",
    borderColor: "border-ts-purple/60",
    bg: "bg-ts-purple/10",
    content:
      "TS-Reasoner v0.9.0 was published as a proof-chain release, and the v1 foundation commit landed later the same day. This is the public foundation for inspectable traces, benchmark receipts, and explicit limitations.",
    tags: ["v0.9.0 release", "v1 commit", "trace contract"],
    source: "TS-Reasoner-v0 release.published_at and commit history",
  },
  {
    era: "2026-05-23",
    title: "TS-Start-Here ecosystem map",
    color: "text-ts-purple",
    borderColor: "border-ts-purple/60",
    bg: "bg-ts-purple/10",
    content:
      "TS-Start-Here recorded the public route for the stack: what exists, what is toy-scope, how the repositories connect, and where the sober first-contact path begins.",
    tags: ["TS-Start-Here", "ecosystem map", "commit verified"],
    source: "TS-Start-Here commit 27a249457827",
  },
  {
    era: "2026-05-23",
    title: "Current focus: golden path and trace receipts",
    color: "text-ts-purple",
    borderColor: "border-ts-purple/60",
    bg: "bg-ts-purple/10",
    content:
      "This site is the public routing layer for the TS stack: runnable demos, receipts, docs, repos, and limitations. The current focus is TS-Reasoner stable traces, the TensionLM bridge, Proof Bank receipts, and a reproducible website golden path.",
    tags: ["website route", "receipts", "limitations"],
    source: "boggersthefish-site commit 43068359b2c1",
    isCurrent: true,
  },
];

const FADE_UP: Variants = {
  hidden: { opacity: 1, y: 0 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function AboutPage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(timelineRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-forest-dark">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 ts-grid-bg opacity-30" style={{ backgroundSize: "50px 50px" }} />
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-ts-purple/5 blur-3xl" />

        <div className="relative max-w-4xl mx-auto">
          <motion.div initial={false}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ts-purple/30 bg-ts-purple/5 text-xs font-mono text-ts-purple mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-ts-purple animate-pulse" />
              Creator Node — Active
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 leading-tight">
              I build systems that
              <br />
              <span className="ts-gradient-text">think like reality thinks.</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Solo developer. Systems architect. Former Minecraft base-builder turned
              cognitive OS engineer. Based on constraint graphs and wave propagation —
              because that&apos;s how everything actually works.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="mailto:boggersthefish@boggersthefish.com">
                  <Mail className="w-4 h-4" />
                  Get in touch
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://github.com/BoggersTheFish" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  @BoggersTheFish
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="ts-divider mx-auto max-w-7xl" />

      {/* Dev setup card */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Profile card */}
            <div className="ts-card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full border-2 border-ts-purple bg-ts-purple/10 flex items-center justify-center shadow-ts flex-shrink-0">
                  <span className="text-2xl font-mono font-bold ts-gradient-text">B</span>
                </div>
                <div>
                  <div className="font-semibold text-white text-lg">BoggersTheFish</div>
                  <div className="text-muted-foreground text-sm">Solo developer · Systems architect</div>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400 font-mono">Public TS stack — active</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Building an inspectable TS stack around constraint graphs, tension
                telemetry, reasoning traces, provenance, and small reproducible demos.
                This site is the public routing layer for runnable paths, receipts,
                docs, repos, and limitations.
              </p>
            </div>

            {/* Setup card */}
            <div className="ts-card p-6">
              <div className="text-xs font-mono text-ts-purple uppercase tracking-widest mb-4">Dev Setup</div>
              <div className="space-y-2 font-mono text-sm">
                {[
                  ["OS", "Windows 11 / WSL2"],
                  ["Primary Lang", "Python 3.12"],
                  ["Framework", "FastAPI + Next.js 15"],
                  ["ML", "Unsloth + 4-bit QLoRA"],
                  ["DB", "SQLite WAL + JSON fallback"],
                  ["Infra", "Local-first, Vercel frontend"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between items-center">
                    <span className="text-ts-purple/60">{k}</span>
                    <span className="text-ts-purple-light text-xs">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ts-divider mx-auto max-w-7xl" />

      {/* Story Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-ts-purple/30 bg-ts-purple/5 text-xs font-mono text-ts-purple mb-4">
              <Zap className="w-3 h-3" />
              Evolution Arc
            </div>
            <h2 className="text-3xl font-bold text-white">
              From background to verified public milestones
            </h2>
          </div>

          <div ref={timelineRef} className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-ts-purple/60 via-ts-purple/30 to-transparent" />

            <div className="space-y-6">
              {STORY_NODES.map((node, i) => (
                <motion.div
                  key={node.era}
                  custom={i}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  variants={FADE_UP}
                  className="relative pl-12"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-1.5 top-5 w-5 h-5 rounded-full border-2 flex items-center justify-center
                      ${node.isCurrent
                        ? "border-ts-purple bg-ts-purple/30 shadow-ts animate-pulse-glow"
                        : "border-ts-purple/40 bg-forest-dark"
                      }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-ts-purple/70" />
                  </div>

                  <div className={`ts-card p-5 ${node.isCurrent ? "border-ts-purple/50" : ""} ${node.bg}`}>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`font-mono text-xs font-bold ${node.color}`}>
                        {node.era}
                      </span>
                      <span className={`text-sm font-semibold ${node.isCurrent ? "text-ts-purple-light" : "text-white"}`}>
                        {node.title}
                      </span>
                      {node.isCurrent && (
                        <Badge variant="current">LIVE</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {node.content}
                    </p>
                    <p className="mb-3 text-[10px] font-mono uppercase tracking-widest text-ts-purple/70">
                      Source: {node.source}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {node.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-[10px]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <p className="mt-8 rounded-md border border-ts-purple/25 bg-ts-purple/5 px-4 py-3 text-xs leading-6 text-muted-foreground">
            Exact public milestone dates are verified from GitHub releases or commit
            history. Personal background entries are intentionally approximate.
          </p>
        </div>
      </section>

      <div className="ts-divider mx-auto max-w-7xl" />

      {/* YouTube + Social */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">Across the Network</h2>
            <p className="text-muted-foreground">
              Content, code, and connections — all nodes in the graph.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* YouTube card */}
            <Link
              href="https://youtube.com/@BoggersTheFish"
              target="_blank"
              rel="noopener noreferrer"
              className="ts-card p-5 block group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-sienna/10 border border-sienna/30 flex items-center justify-center">
                  <Youtube className="w-4 h-4 text-sienna" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-ts-purple-light transition-colors">YouTube</div>
                  <div className="text-xs text-muted-foreground font-mono">@BoggersTheFish</div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-ts-purple ml-auto" />
              </div>
              <p className="text-xs text-muted-foreground">
                Minecraft OG Network archive + dev content. Where the constraint graph obsession started.
              </p>
            </Link>

            {/* Instagram */}
            <Link
              href="https://instagram.com/boggersthefish"
              target="_blank"
              rel="noopener noreferrer"
              className="ts-card p-5 block group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-ts-purple-light transition-colors">Instagram</div>
                  <div className="text-xs text-muted-foreground font-mono">@boggersthefish</div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-ts-purple ml-auto" />
              </div>
              <p className="text-xs text-muted-foreground">
                Dev updates and behind-the-scenes TS-OS development.
              </p>
            </Link>

            {/* X */}
            <Link
              href="https://x.com/BoggersTheFish"
              target="_blank"
              rel="noopener noreferrer"
              className="ts-card p-5 block group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-ts-purple/10 border border-ts-purple/30 flex items-center justify-center">
                  <Twitter className="w-4 h-4 text-ts-purple-light" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-ts-purple-light transition-colors">X / Twitter</div>
                  <div className="text-xs text-muted-foreground font-mono">@BoggersTheFish</div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-ts-purple ml-auto" />
              </div>
              <p className="text-xs text-muted-foreground">
                Short-form TS ideas, wave updates, and vibe-coding dispatches.
              </p>
            </Link>
          </div>

          {/* All social links */}
          <div className="mt-6 flex flex-wrap gap-2">
            {SOCIAL_LINKS.map((s) => (
              <Link
                key={s.id}
                href={s.url}
                target={s.url.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg border border-ts-purple/20 text-xs text-muted-foreground hover:text-ts-purple-light hover:border-ts-purple/40 hover:bg-ts-purple/10 transition-all duration-200 font-mono"
              >
                {s.handle}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="ts-divider mx-auto max-w-7xl" />

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Activate a Node
          </h2>
          <p className="text-muted-foreground mb-8">
            If you&apos;re building something that touches constraint graphs, emergent AI, or just want to vibe-code — the edge is open.
          </p>
          <Button size="lg" asChild>
            <Link href="mailto:boggersthefish@boggersthefish.com">
              <Mail className="w-4 h-4" />
              boggersthefish@boggersthefish.com
            </Link>
          </Button>
          <div className="mt-4">
            <Button variant="ghost" asChild>
              <Link href="/ts-os">
                Read the Architecture
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
