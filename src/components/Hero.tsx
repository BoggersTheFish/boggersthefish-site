import Link from "next/link";
import { FileSearch, FlaskConical, Terminal } from "lucide-react";
import { FieldGuideScene } from "@/components/FieldGuideScene";
import { links, site } from "@/content/site";

const reasonerCommand = `git clone https://github.com/BoggersTheFish/TS-Reasoner-v0
cd TS-Reasoner-v0
python3 inference.py \\
  --question "If some artists are makers and all makers are creators, are all artists creators?" \\
  --premise "Some artists are makers." \\
  --premise "All makers are creators."`;

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-gold/25 bg-forest-dark">
      <div className="absolute inset-0 ts-grid-bg bg-grid opacity-45" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_64%_32%,rgba(201,164,92,0.18),transparent_24rem),radial-gradient(circle_at_16%_18%,rgba(74,101,54,0.22),transparent_24rem),linear-gradient(180deg,rgba(5,10,5,0.18),#080d06_94%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid min-h-[740px] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
        <div className="relative z-10 max-w-2xl">
          <p className="field-label mb-5 text-gold">BoggersTheFish / TS research archive</p>
          <h1 className="font-serif text-5xl font-semibold leading-[0.96] text-cream sm:text-6xl lg:text-7xl">
            {site.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-cream/86">{site.description}</p>
          <p className="mt-4 max-w-xl text-base leading-7 text-cream/72">
            A dark public workbench for bounded TS traces: inspect the command,
            the JSON receipt, the rejected alternatives, and the failure modes
            before trusting any claim.
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
            <Link href="/run-ts-reasoner" className="plaque-button">
              <Terminal className="h-4 w-4" />
              Run TS-Reasoner locally
            </Link>
            <Link
              href={`${links.repos.tensionlm}#experiment-1--tensionlm-vs-transformer-wikitext-2-11m-params`}
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
