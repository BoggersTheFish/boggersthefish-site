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
    <header className="sticky top-0 z-50 border-b border-gold/30 bg-forest-dark/94 shadow-scene backdrop-blur-md">
      <nav className="mx-auto flex max-w-[96rem] items-center justify-between gap-5 px-4 py-2.5 sm:px-6 lg:px-8">
        <Link href="/" className="group flex min-w-0 items-center gap-3">
          <span className="brand-mark" aria-hidden="true">
            <FishCrestIcon className="h-10 w-14" />
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

        <div className="hidden min-w-0 flex-nowrap items-center justify-end gap-1 xl:flex">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            const support = item.href === "/support";
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn("paper-tab", support && "support-tab", active && "paper-tab-active")}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
