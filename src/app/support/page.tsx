import Link from "next/link";
import { HeartHandshake } from "lucide-react";
import { BGCNotice } from "@/components/BGCNotice";
import { ParchmentCard } from "@/components/ParchmentCard";
import { bgcFullNotice, links } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Support / BGC",
  description: "Support information and legally cautious Boggers Credits explanation.",
  path: "/support",
});

const terms = [
  "Donations are donations.",
  "BGC is experimental.",
  "BGC is off-chain.",
  "BGC is not cryptocurrency.",
  "BGC is not an investment.",
  "BGC is not legal tender.",
  "BGC is not equity.",
  "BGC is not redeemable for money or cash.",
  "BGC is not guaranteed to convert to any future token.",
  "BGC may remain an off-chain community credit forever.",
  "Supporting the work funds research, docs, compute, and time, not financial return.",
  "Nothing on this site is financial advice.",
];

export default function SupportPage() {
  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="field-label text-gold">Support / BGC</p>
        <h1>Support independent TS research.</h1>
        <p>
          Donations support compute, hosting, writing, documentation, open-source
          development, and the time needed to keep experiments reproducible.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
        <BGCNotice full />
        <ParchmentCard>
          <p className="field-label mb-3 text-brown">Plain terms</p>
          <p className="text-sm leading-7 text-ink/80">{bgcFullNotice}</p>
          <div className="mt-5 space-y-2">
            {terms.map((term) => (
              <p key={term} className="flex gap-2 text-sm leading-6 text-ink/75">
                <span aria-hidden="true" className="text-brown">☑</span>
                {term}
              </p>
            ))}
          </div>
          <div className="mt-6 rounded-md border border-brown/25 bg-forest/10 p-4 text-sm font-semibold leading-7 text-ink/80">
            By supporting, you understand this is a donation to independent research,
            not a purchase of an investment product.
          </div>
          <p className="mt-5 w-fit rounded-md border border-brown/25 bg-forest/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-brown">
            not crypto / not investment
          </p>
          <Link href={links.email} className="plaque-button mt-6 bg-forest text-cream">
            <HeartHandshake className="h-4 w-4" />
            Support / Donate
          </Link>
        </ParchmentCard>
      </div>
    </section>
  );
}
