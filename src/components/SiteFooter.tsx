import Link from "next/link";
import { Github, Mail, Radio } from "lucide-react";
import { FishCrestIcon } from "@/components/ArchiveIcons";
import { navItems } from "@/content/nav";
import { site } from "@/content/site";

const secondaryLinks = [
  { href: "/latest", label: "Model Artifacts" },
  { href: "/docs", label: "Docs" },
  { href: "/blog", label: "Blog" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/contact", label: "Contact" },
  { href: "/support", label: "Support / BGC" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/25 bg-forest-dark">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-3 flex items-center gap-3 text-gold">
            <FishCrestIcon className="h-9 w-14" />
            <span className="font-serif text-2xl font-semibold">
              {site.name}
            </span>
          </div>
          <p className="max-w-md text-sm leading-6 text-cream/70">
            Independent work on verifier-first reasoning, deterministic language,
            tension-driven model mechanisms, and verified computing. Current
            evidence and historical failures share the same archive.
          </p>
        </div>

        <div>
          <p className="field-label mb-3 text-gold">Archive</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {[...navItems.slice(1), ...secondaryLinks].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-cream/70 hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="field-label mb-3 text-gold">Contact</p>
          <div className="space-y-2 text-sm">
            <Link
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cream/70 hover:text-gold"
            >
              <Github className="h-4 w-4" /> GitHub
            </Link>
            <Link
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 text-cream/70 hover:text-gold"
            >
              <Mail className="h-4 w-4" /> Primary email
            </Link>
            <Link
              href={`mailto:${site.domainEmail}`}
              className="flex items-center gap-2 text-cream/70 hover:text-gold"
            >
              <Mail className="h-4 w-4" /> Domain alias
            </Link>
            <Link
              href="/proof-bank"
              className="flex items-center gap-2 text-cream/70 hover:text-gold"
            >
              <Radio className="h-4 w-4" /> Proof Bank
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gold/15 px-4 py-4 text-center text-xs text-cream/60">
        Independent research. Bounded claims. Preserved lineage. Reproducible
        artifacts.
      </div>
    </footer>
  );
}
