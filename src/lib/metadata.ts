import type { Metadata } from "next";
import { site } from "@/content/site";

type PageMeta = {
  title: string;
  description?: string;
  path?: string;
};

export function pageMetadata({ title, description = site.description, path = "" }: PageMeta): Metadata {
  const url = `${site.url}${path}`;
  const image = `${site.url}${site.ogImage}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url,
      siteName: site.name,
      images: [{ url: image, width: 1200, height: 630, alt: `${site.name} archive card` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [image],
    },
  };
}
