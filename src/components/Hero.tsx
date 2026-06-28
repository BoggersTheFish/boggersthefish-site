import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FlaskConical, Terminal } from "lucide-react";

const reasonerCommand = `git clone https://github.com/BoggersTheFish/TS-Reasoner-v0
cd TS-Reasoner-v0
python3 inference.py \\
  --question "If some artists are makers and all makers are creators, are all artists creators?" \\
  --premise "Some artists are makers." \\
  --premise "All makers are creators."`;

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
      <div className="relative mx-auto grid min-h-0 max-w-7xl items-center gap-8 px-4 py-14 sm:min-h-[520px] sm:px-6 md:grid-cols-1 lg:min-h-[760px] lg:grid-cols-[0.78fr_0.52fr] lg:px-8 lg:py-20">
        <div className="relative z-10 max-w-2xl">
          <p className="field-label mb-5 text-gold">BoggersTheFish / TS Research Archive</p>
          <h1 className="font-serif text-5xl font-semibold leading-[0.96] text-cream sm:text-6xl lg:text-7xl">
            Building the Thinking System.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-cream/90">
            Graph-based reasoning. Tension telemetry. Constraint propagation.
            Reproducible traces.
          </p>
          <p className="mt-4 max-w-lg text-base leading-7 text-cream/85">
            Exploring small, inspectable foundations for interpretable and
            reliable AI.
          </p>

          <div className="terminal-artifact mt-7">
            <div className="terminal-artifact-top">
              <span />
              <span />
              <span />
              <p>bounded verifier path</p>
            </div>
            <pre className="overflow-x-auto p-4 text-xs leading-6 text-cream/82">
              <code>{reasonerCommand}</code>
            </pre>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/start-here" className="plaque-button">
              Start Here
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/research" className="plaque-button secondary">
              <FlaskConical className="h-4 w-4" />
              Explore Research
            </Link>
            <Link href="/run-ts-reasoner" className="plaque-button secondary">
              <Terminal className="h-4 w-4" />
              Run TS-Reasoner
            </Link>
          </div>
        </div>

        <aside className="hero-archive-panel relative z-10">
          <div className="hero-archive-panel-section">
            <p className="field-label text-brown">Current focus</p>
            <h2 className="mt-2 font-serif text-2xl font-semibold text-ink">
              TS-Reasoner trace inspection
            </h2>
            <p className="mt-3 text-sm leading-6 text-ink/76">
              Run one bounded verifier path, inspect the JSON trace, and keep
              claims tied to receipts.
            </p>
          </div>
          <div className="hero-archive-panel-section">
            <p className="field-label text-brown">Recent proof</p>
            <h2 className="mt-2 font-serif text-2xl font-semibold text-ink">
              Contradiction localizes as residual/provenance tension
            </h2>
            <Link href="/proof-bank" className="brass-link mt-4">
              View proof bank
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
