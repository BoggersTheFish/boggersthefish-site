import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { docs } from "@/content/docs";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date("2026-05-20");

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/start-here`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/research`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/projects/ts-core`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/projects/tensionlm`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/projects/cig`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/projects/proof-ranker`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/proof-bank`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/docs`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...docs.map((doc) => ({ url: `${base}/docs/${doc.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    ...blogPosts.map((post) => ({ url: `${base}/blog/${post.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.65 })),
    { url: `${base}/support`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/roadmap`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
