import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { FieldGuideScene } from "@/components/FieldGuideScene";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-gold/25">
      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8 lg:py-16">
        <div className="relative z-10 max-w-xl">
          <p className="field-label mb-5 text-gold">Independent AI research archive</p>
          <h1 className="font-serif text-5xl font-semibold leading-[0.98] text-cream sm:text-6xl lg:text-7xl">
            {site.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-cream/85">{site.description}</p>
          <p className="mt-4 max-w-md text-base leading-7 text-cream/75">
            Exploring new foundations for interpretable and reliable AI through
            constraint graphs, proof receipts, and careful experimental wording.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/start-here" className="plaque-button">
              Start Here
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/research" className="plaque-button secondary">
              Explore Research
            </Link>
          </div>
        </div>
        <FieldGuideScene />
      </div>
    </section>
  );
}
