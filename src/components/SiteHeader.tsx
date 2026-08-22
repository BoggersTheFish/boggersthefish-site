"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FishCrestIcon } from "@/components/ArchiveIcons";
import { navItems } from "@/content/nav";
import { site } from "@/content/site";
import { MobileNav } from "@/components/MobileNav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-forest-dark/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group flex min-w-0 items-center gap-3">
          <span className="brand-mark" aria-hidden="true">
            <FishCrestIcon className="h-10 w-14" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-serif text-xl font-semibold leading-none text-gold sm:text-2xl">
              {site.name}
            </span>
            <span className="mt-1 hidden truncate text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-cream/48 sm:block">
              {site.tagline}
            </span>
          </span>
        </Link>

        <div className="hidden min-w-0 flex-nowrap items-center justify-end gap-1 lg:flex">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn("site-nav-link", active && "site-nav-link-active")}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="lg:hidden">
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
