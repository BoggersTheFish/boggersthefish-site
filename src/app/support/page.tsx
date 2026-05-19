import type { Metadata } from "next";
import Link from "next/link";
import { HeartHandshake } from "lucide-react";
import { BGCNotice } from "@/components/BGCNotice";
import { ParchmentCard } from "@/components/ParchmentCard";
import { bgcFullNotice, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Support / BGC",
  description: "Support information and legally cautious Boggers Credits explanation.",
};

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

      <div className="grid gap-5 lg:grid-cols-[1fr_0.7fr]">
        <BGCNotice full />
        <ParchmentCard>
          <p className="field-label mb-3 text-brown">Plain terms</p>
          <p className="text-sm leading-7 text-ink/80">{bgcFullNotice}</p>
          <Link href={`mailto:${site.email}`} className="plaque-button mt-6 bg-forest text-cream">
            <HeartHandshake className="h-4 w-4" />
            Support / Donate
          </Link>
        </ParchmentCard>
      </div>
    </section>
  );
}
