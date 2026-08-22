import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { FishCrestIcon } from "@/components/ArchiveIcons";
import { bio, verifiedLinks } from "@/content/current";
import { navItems } from "@/content/nav";
import { site } from "@/content/site";

const archiveLinks = [
  { href: "/lineage", label: "Project lineage" },
  { href: "/proof-bank", label: "Proof bank" },
  { href: "/latest", label: "Model archive" },
  { href: "/docs", label: "Documentation" },
  { href: "/blog", label: "Field notes" },
];

export function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-gold/20 bg-black/20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.45fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="mb-5 flex items-center gap-3 text-gold">
            <FishCrestIcon className="h-10 w-16" />
            <span className="font-serif text-2xl font-semibold">{site.name}</span>
          </div>
          <p className="max-w-lg text-sm leading-7 text-cream/58">{bio.compact}</p>
          <p className="mt-5 text-xs leading-6 text-cream/38">
            Current claims are tied to permanent records, public source, or an
            explicit limitation. Historical project pages remain available as
            lineage, not as current release authority.
          </p>
        </div>

        <div>
          <p className="field-label mb-4 text-gold">Navigate</p>
          <div className="space-y-2 text-sm">
            {navItems.slice(1).map((item) => (
              <Link key={item.href} href={item.href} className="block text-cream/60 hover:text-gold">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="field-label mb-4 text-gold">Elsewhere</p>
          <div className="space-y-3 text-sm">
            {[
              { href: verifiedLinks.github, label: "GitHub" },
              { href: verifiedLinks.prime, label: "PRIME on Zenodo" },
              { href: verifiedLinks.enthusia, label: "Enthusia SMP" },
              { href: verifiedLinks.huggingFace, label: "Hugging Face" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/60 hover:text-gold"
              >
                {item.label}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
            <Link href={"mailto:" + site.email} className="flex items-center gap-2 text-cream/60 hover:text-gold">
              <Mail className="h-4 w-4" />
              Email
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-xs text-cream/38 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Ben Michalek / BoggersTheFish</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {archiveLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-gold">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
