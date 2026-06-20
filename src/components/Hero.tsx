import Link from "next/link";
import Image from "next/image";
import { Archive, ArrowRight, FlaskConical, Terminal } from "lucide-react";

const architecture = `human language
  → semantic graph
  → typed verification
  → accepted state
  → response plan

model proposals never become proof by confidence alone`;

export function Hero() {
  return (
    <section className="archive-hero relative overflow-hidden border-b border-gold/35 bg-forest-dark">
      <Image
        src="/images/ts-field-guide-archive.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="archive-hero-image"
        aria-hidden="true"
      />
      <div className="archive-hero-scrim" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.78fr_0.52fr] lg:px-8 lg:py-20">
        <div className="relative z-10 max-w-2xl">
          <p className="field-label mb-5 text-gold">
            Ben Michalek / BoggersTheFish
          </p>
          <h1 className="font-serif text-5xl font-semibold leading-[0.96] text-cream sm:text-6xl lg:text-7xl">
            A living archive of systems that make reasoning inspectable.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-cream/90">
            Verifier-first reasoning. Deterministic language. Tension-driven
            model experiments. Verified computing.
          </p>
          <p className="mt-4 max-w-lg text-base leading-7 text-cream/78">
            The code may change or disappear. The questions, evidence, failures,
            and useful mechanisms remain recorded here.
          </p>

          <div className="terminal-artifact mt-7">
            <div className="terminal-artifact-top">
              <span />
              <span />
              <span />
              <p>current architecture boundary</p>
            </div>
            <pre className="overflow-x-auto p-4 text-xs leading-6 text-cream/82">
              <code>{architecture}</code>
            </pre>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/start-here" className="plaque-button">
              Start Here
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/projects" className="plaque-button secondary">
              <Terminal className="h-4 w-4" />
              Current Work
            </Link>
            <Link href="/lineage" className="plaque-button secondary">
              <Archive className="h-4 w-4" />
              Project Lineage
            </Link>
          </div>
        </div>

        <aside className="hero-archive-panel relative z-10">
          <div className="hero-archive-panel-section">
            <p className="field-label text-brown">Current focus</p>
            <h2 className="mt-2 font-serif text-2xl font-semibold text-ink">
              Prove what tension actually contributes
            </h2>
            <p className="mt-3 text-sm leading-6 text-ink/76">
              Ten-SON Milestone 1.1 tests learned tension against frozen,
              shuffled, constant, inverted, and ordinary learned-gate controls.
            </p>
          </div>
          <div className="hero-archive-panel-section">
            <p className="field-label text-brown">Current integration</p>
            <h2 className="mt-2 font-serif text-2xl font-semibold text-ink">
              Language → verifier → persistent state
            </h2>
            <p className="mt-3 text-sm leading-6 text-ink/76">
              The next usable system joins ts-chat-language to TS-Reasoner
              without allowing templates or model confidence to bypass checks.
            </p>
            <Link href="/projects" className="brass-link mt-4">
              Inspect the active stack
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="hero-archive-panel-section">
            <p className="field-label text-brown">Evidence discipline</p>
            <p className="mt-2 flex gap-2 text-sm leading-6 text-ink/76">
              <FlaskConical className="mt-1 h-4 w-4 shrink-0" />
              TensionForge proves real RX 480 training parity and also reports
              that the current runtime is slower than CPU.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
