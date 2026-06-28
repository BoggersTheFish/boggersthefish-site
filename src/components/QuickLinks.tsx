import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FishCrestIcon, LinkGlyphIcon, NodeGraphIcon, ParchmentIcon } from "@/components/ArchiveIcons";
import { quickLinks } from "@/content/nav";
import { ParchmentCard } from "@/components/ParchmentCard";

const icons = [NodeGraphIcon, ParchmentIcon, LinkGlyphIcon, ParchmentIcon, FishCrestIcon, ParchmentIcon];

export function QuickLinks() {
  return (
    <ParchmentCard tone="dark">
      <p className="field-label mb-4 text-gold">Quick Links</p>
      <div className="space-y-3">
        {quickLinks.map((link, index) => {
          const Icon = icons[index] ?? FishCrestIcon;
          return (
            <Link
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="group flex gap-3 rounded-md border border-gold/15 bg-forest/35 p-3 transition hover:border-gold/45 hover:bg-forest/55"
            >
              <Icon className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span className="min-w-0">
                <span className="flex items-center gap-1 font-serif text-lg font-semibold text-cream">
                  {link.label}
                  {link.external ? <ArrowUpRight className="h-3.5 w-3.5" /> : null}
                </span>
                <span className="mt-1 block text-xs leading-5 text-cream/70">{link.note}</span>
              </span>
            </Link>
          );
        })}
      </div>
    </ParchmentCard>
  );
}
