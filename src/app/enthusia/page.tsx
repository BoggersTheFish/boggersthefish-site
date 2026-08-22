import Link from "next/link";
import {
  ArrowUpRight,
  Boxes,
  Code2,
  Coins,
  Gamepad2,
  Shield,
  Users,
} from "lucide-react";
import { verifiedLinks } from "@/content/current";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Enthusia SMP",
  description:
    "BoggersTheFish's Minecraft server development work for Enthusia SMP, including plugin, economy, market, guild, and framework systems.",
  path: "/enthusia",
});

const serverFeatures = [
  {
    icon: Gamepad2,
    title: "Permanent survival world",
    body: "A long-lived semi-anarchy world where builds, trade routes, guilds, conflict, and community history accumulate.",
  },
  {
    icon: Coins,
    title: "Player economy",
    body: "Player-run market stalls and raw-gold trade create a practical economy without replacing survival with a synthetic currency loop.",
  },
  {
    icon: Users,
    title: "Guilds and events",
    body: "Guild progression, leaderboards, KOTH, duels, and regular events give players structure without removing wilderness risk.",
  },
  {
    icon: Shield,
    title: "Clear boundaries",
    body: "Raiding and open PvP are part of the design; cheating, exploits, harassment, and punishment evasion are not.",
  },
];

const development = [
  {
    title: "enthusia-network",
    body: "Monorepo for the Enthusia SMP plugin ecosystem.",
    href: verifiedLinks.enthusiaNetwork,
  },
  {
    title: "EnthusiaMarket",
    body: "WorldGuard-region market stalls, container shops, rent, and timed auctions for Paper.",
    href: verifiedLinks.enthusiaMarket,
  },
  {
    title: "LumaGuilds",
    body: "Guild functionality and progression work used around the wider server ecosystem.",
    href: verifiedLinks.lumaGuilds,
  },
];

export default function EnthusiaPage() {
  return (
    <section>
      <div className="enthusia-page-hero">
        <div className="hero-coordinate-grid" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <p className="field-label text-emerald-200">Minecraft server development</p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl font-semibold leading-[0.96] text-white sm:text-7xl">
            Building systems for a world that keeps its history.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">
            BoggersTheFish is listed as a developer on Enthusia SMP—a permanent,
            vanilla-based semi-anarchy server for Java and Bedrock players.
            The work spans server plugins, player markets, guild systems,
            economy mechanics, and reusable framework code.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href={verifiedLinks.enthusia}
              target="_blank"
              rel="noopener noreferrer"
              className="plaque-button"
            >
              Visit Enthusia SMP
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href={verifiedLinks.enthusiaNetwork}
              target="_blank"
              rel="noopener noreferrer"
              className="plaque-button secondary"
            >
              <Code2 className="h-4 w-4" />
              Plugin ecosystem
            </Link>
          </div>
        </div>
      </div>

      <div className="page-shell">
        <div className="grid gap-4 md:grid-cols-2">
          {serverFeatures.map((feature) => (
            <article key={feature.title} className="modern-card">
              <feature.icon className="h-6 w-6 text-emerald-200" />
              <h2 className="mt-6 font-serif text-3xl font-semibold text-cream">
                {feature.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-cream/64">{feature.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="field-label text-gold">Development surface</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-cream sm:text-5xl">
              Plugins that support the community, not just the codebase.
            </h2>
            <p className="mt-5 text-sm leading-7 text-cream/64">
              Server development is applied systems work: permissions, persistent
              state, player incentives, moderation boundaries, cross-plugin
              integration, and the operational reality of a live community.
            </p>
          </div>
          <div className="space-y-4">
            {development.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="publication-row group"
              >
                <Boxes className="h-6 w-6 text-gold lg:col-span-1" />
                <div className="lg:col-span-8">
                  <h3 className="font-mono text-base font-bold text-cream">{project.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-cream/60">{project.body}</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-gold lg:col-span-3 lg:justify-end">
                  Open repository
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-gold/15 pt-10">
          <p className="max-w-4xl text-sm leading-7 text-cream/55">
            This page describes Ben&apos;s public developer role and the visible
            open-source surface. It does not imply sole authorship of Enthusia
            SMP or of every system used by the server.
          </p>
        </div>
      </div>
    </section>
  );
}
