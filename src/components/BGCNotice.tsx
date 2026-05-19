import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { bgcFullNotice, bgcShortNotice } from "@/content/site";
import { ParchmentCard } from "@/components/ParchmentCard";

export function BGCNotice({ full = false }: { full?: boolean }) {
  return (
    <ParchmentCard tone="dark" className="relative overflow-hidden">
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-gold/20" />
      <div className="flex flex-col gap-5 md:flex-row md:items-start">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-gold/60 bg-brown/45 text-gold shadow-scene">
          <BadgeCheck className="h-7 w-7" aria-hidden="true" />
        </div>
        <div>
          <p className="field-label mb-2 text-gold">Boggers Credits (BGC)</p>
          <h2 className="font-serif text-2xl font-semibold text-cream">
            Support the work without financial promises.
          </h2>
          <p className="mt-3 text-sm leading-7 text-cream/80">
            {full ? bgcFullNotice : bgcShortNotice}
          </p>
          <Link href="/support" className="brass-link mt-5 text-gold">
            Learn more about BGC
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </ParchmentCard>
  );
}
