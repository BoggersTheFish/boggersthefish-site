import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import type { LegacyRedirectPath } from "@/lib/legacyRedirects";
import { legacyRedirects } from "@/lib/legacyRedirects";

export function legacyRedirectMetadata(path: LegacyRedirectPath): Metadata {
  const target = legacyRedirects[path];
  return {
    ...pageMetadata({
      title: "Page moved",
      description: `This archive route now lives at ${target}.`,
      path,
    }),
    robots: { index: false, follow: true },
    alternates: { canonical: `https://www.boggersthefish.com${target}` },
  };
}

export function LegacyRedirectPage({ path }: { path: LegacyRedirectPath }) {
  const target = legacyRedirects[path];

  return (
    <section className="page-shell flex min-h-[40vh] flex-col justify-center">
      <p className="field-label text-gold">Redirect</p>
      <h1 className="font-serif text-3xl font-semibold text-cream">This page has moved</h1>
      <p className="mt-3 max-w-xl text-base leading-7 text-cream/85">
        The bookmarked route <code className="text-gold">{path}</code> now points to{" "}
        <code className="text-gold">{target}</code>.
      </p>
      <Link href={target} className="plaque-button mt-6 w-fit">
        Continue
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </section>
  );
}