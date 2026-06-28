import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { docs } from "@/content/docs";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export const dynamic = "force-static";

const staticRoutes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/latest", priority: 0.95, changeFrequency: "weekly" },
  { path: "/run-ts-reasoner", priority: 0.9, changeFrequency: "monthly" },
  { path: "/start-here", priority: 0.9, changeFrequency: "monthly" },
  { path: "/research", priority: 0.9, changeFrequency: "monthly" },
  { path: "/projects", priority: 0.9, changeFrequency: "weekly" },
  { path: "/proof-bank", priority: 0.9, changeFrequency: "weekly" },
  { path: "/docs", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/support", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/roadmap", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  return [
    ...staticRoutes.map(({ path, priority, changeFrequency }) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...projects.map((project) => ({
      url: `${base}/projects/${project.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...docs.map((doc) => ({
      url: `${base}/docs/${doc.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...blogPosts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}