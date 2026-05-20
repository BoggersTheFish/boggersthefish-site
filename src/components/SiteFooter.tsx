import Link from "next/link";
import { Github, Mail, Radio } from "lucide-react";
import { navItems } from "@/content/nav";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/25 bg-forest-dark">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-3 flex items-center gap-3 text-gold">
            <span className="text-xl" aria-hidden="true">
              ♕
            </span>
            <span className="font-serif text-2xl font-semibold">{site.name}</span>
          </div>
          <p className="max-w-md text-sm leading-6 text-cream/70">
            Independent AI research around graph-based reasoning, constraint
            propagation, tension dynamics, proof ranking, and reproducible experiments.
          </p>
        </div>

        <div>
          <p className="field-label mb-3 text-gold">Archive</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {navItems.slice(1).map((item) => (
              <Link key={item.href} href={item.href} className="text-cream/70 hover:text-gold">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="field-label mb-3 text-gold">Contact</p>
          <div className="space-y-2 text-sm">
            <Link href={site.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cream/70 hover:text-gold">
              <Github className="h-4 w-4" /> GitHub
            </Link>
            <Link href={`mailto:${site.email}`} className="flex items-center gap-2 text-cream/70 hover:text-gold">
              <Mail className="h-4 w-4" /> Email
            </Link>
            <Link href="/proof-bank" className="flex items-center gap-2 text-cream/70 hover:text-gold">
              <Radio className="h-4 w-4" /> Proof Bank
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gold/15 px-4 py-4 text-center text-xs text-cream/60">
        Truth is local. Tension is real. Information wants to be consistent.
      </div>
    </footer>
  );
}
