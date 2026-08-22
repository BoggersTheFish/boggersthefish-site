import Link from "next/link";
import {
  ArrowUpRight,
  BookOpenCheck,
  Code2,
  Gamepad2,
  Github,
  Mail,
} from "lucide-react";
import { FishCrestIcon } from "@/components/ArchiveIcons";
import { bio, verifiedLinks } from "@/content/current";
import { links, site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About Ben Michalek",
  description:
    "Current bio for Ben Michalek / BoggersTheFish: independent verifier-first AI researcher, open-source software developer, and Enthusia SMP developer.",
  path: "/about",
});

const roles = [
  {
    icon: BookOpenCheck,
    title: "Independent researcher",
    body: "Verifier-first AI, bounded cognition, selective epistemic control, and adaptive state abstraction.",
  },
  {
    icon: Code2,
    title: "Open-source developer",
    body: "Research software and systems work across Python, Kotlin, TypeScript, Java, and OpenCL.",
  },
  {
    icon: Gamepad2,
    title: "Minecraft server developer",
    body: "Plugin and community-systems work for Enthusia SMP, including markets, guilds, and economy infrastructure.",
  },
];

const milestones = [
  {
    date: "22 Aug 2026",
    title: "PRIME v1.0.0 published",
    body: "First public release of the verifier-governed PRIME architecture, deposited as versioned research software on Zenodo.",
    href: verifiedLinks.prime,
  },
  {
    date: "15 Aug 2026",
    title: "Adaptive state abstraction v0.2.0 published",
    body: "Anytime-valid state-repair software published with its failed initial gate preserved and a separately frozen correction.",
    href: verifiedLinks.adaptiveState,
  },
  {
    date: "July 2026",
    title: "Thinking System consolidated",
    body: "The TS programme moved to a canonical monorepo so current authority, archived predecessors, and research satellites were easier to distinguish.",
    href: verifiedLinks.thinkingSystem,
  },
  {
    date: "Current",
    title: "Enthusia SMP development",
    body: "Publicly listed developer contributing to the live Minecraft server and its open plugin ecosystem.",
    href: verifiedLinks.enthusia,
  },
];

export default function AboutPage() {
  return (
    <section className="page-shell">
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
        <div className="about-mark">
          <FishCrestIcon className="h-32 w-48 text-gold" />
          <div className="mt-8 border-t border-gold/20 pt-6">
            <p className="field-label text-gold">BoggersTheFish</p>
            <p className="mt-2 text-sm text-cream/46">Independent research and software</p>
          </div>
        </div>
        <div>
          <p className="field-label text-gold">About</p>
          <h1 className="mt-5 font-serif text-5xl font-semibold leading-[0.96] text-cream sm:text-7xl">
            Ben Michalek builds systems that earn the right to change state.
          </h1>
          <p className="mt-7 max-w-4xl text-lg leading-8 text-cream/72">{bio.short}</p>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-cream/58">
            The unusual handle and fish sigil stay. The public standard is
            deliberately sober: source-backed claims, preserved failures,
            versioned artifacts, and clear separation between experiments and
            conclusions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={verifiedLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="plaque-button"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
            <Link href={links.email} className="plaque-button secondary">
              <Mail className="h-4 w-4" />
              Email
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-4 md:grid-cols-3">
        {roles.map((role) => (
          <article key={role.title} className="modern-card">
            <role.icon className="h-6 w-6 text-gold" />
            <h2 className="mt-6 font-serif text-3xl font-semibold text-cream">{role.title}</h2>
            <p className="mt-4 text-sm leading-7 text-cream/64">{role.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="field-label text-gold">Selected current milestones</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-cream sm:text-5xl">
            A shorter, verifiable public arc.
          </h2>
          <p className="mt-5 text-sm leading-7 text-cream/60">
            This is a selected timeline, not a claim that the work began on the
            first public repository date.
          </p>
        </div>
        <div className="space-y-3">
          {milestones.map((milestone) => (
            <Link
              key={milestone.date + milestone.title}
              href={milestone.href}
              target="_blank"
              rel="noopener noreferrer"
              className="milestone-row group"
            >
              <p className="field-label text-gold">{milestone.date}</p>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-cream">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-cream/56">{milestone.body}</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-gold transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16 border-t border-gold/15 pt-10">
        <p className="field-label text-gold">Contact</p>
        <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <Link href={links.email} className="text-cream/66 hover:text-gold">{site.email}</Link>
          <Link href={links.domainEmail} className="text-cream/66 hover:text-gold">{site.domainEmail}</Link>
        </div>
      </div>
    </section>
  );
}
