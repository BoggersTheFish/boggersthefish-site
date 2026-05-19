import Link from "next/link";
import { Crown } from "lucide-react";
import { navItems } from "@/content/nav";
import { site } from "@/content/site";
import { MobileNav } from "@/components/MobileNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/25 bg-forest-dark/92 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group flex min-w-0 items-center gap-3">
          <span className="brand-mark" aria-hidden="true">
            <Crown className="h-3.5 w-3.5" />
            <span>{">°))>"}</span>
          </span>
          <span className="min-w-0">
            <span className="block truncate font-serif text-2xl font-semibold leading-none text-gold">
              {site.name}
            </span>
            <span className="mt-1 block truncate text-xs font-semibold tracking-[0.18em] text-cream/80">
              {site.tagline}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="paper-tab">
              {item.label}
            </Link>
          ))}
        </div>

        <MobileNav />
      </nav>
    </header>
  );
}
