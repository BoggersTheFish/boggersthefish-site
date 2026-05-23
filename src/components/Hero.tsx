import Link from "next/link";
import { FileSearch, FlaskConical, Terminal } from "lucide-react";
import { site } from "@/content/site";
import { FieldGuideScene } from "@/components/FieldGuideScene";

const reasonerCommand = `git clone https://github.com/BoggersTheFish/TS-Reasoner-v0
cd TS-Reasoner-v0
python3 inference.py \\
  --question "If some artists are makers and all makers are creators, are all artists creators?" \\
  --premise "Some artists are makers." \\
  --premise "All makers are creators."`;

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-gold/25">
      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8 lg:py-16">
        <div className="relative z-10 max-w-xl">
          <p className="field-label mb-5 text-gold">TS-Reasoner v1.0 trace route</p>
          <h1 className="font-serif text-5xl font-semibold leading-[0.98] text-cream sm:text-6xl lg:text-7xl">
            {site.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-cream/85">{site.description}</p>
          <p className="mt-4 max-w-md text-base leading-7 text-cream/75">
            Here is a small bounded reasoning system. Here are the traces. Here
            are the failures. Here is what changed from v3 to v10.
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-cream/55">
            TS means Thinking System Reasoner here, not time-series TS-Reasoner.
          </p>
          <pre className="mt-6 max-w-full overflow-x-auto rounded-md border border-gold/35 bg-forest-dark/85 px-4 py-3 text-xs leading-6 text-cream shadow-inner">
            <code>{reasonerCommand}</code>
          </pre>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/run-ts-reasoner"
              className="plaque-button"
            >
              <Terminal className="h-4 w-4" />
              Run TS-Reasoner locally
            </Link>
            <Link
              href="https://github.com/BoggersTheFish/TensionLM#experiment-1--tensionlm-vs-transformer-wikitext-2-11m-params"
              target="_blank"
              rel="noopener noreferrer"
              className="plaque-button secondary"
            >
              <FlaskConical className="h-4 w-4" />
              Read the TensionLM controlled comparison
            </Link>
            <Link href="/receipts" className="plaque-button secondary">
              <FileSearch className="h-4 w-4" />
              Inspect a tension receipt
            </Link>
          </div>
        </div>
        <FieldGuideScene />
      </div>
    </section>
  );
}
