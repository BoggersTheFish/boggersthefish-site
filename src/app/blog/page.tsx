import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ParchmentCard } from "@/components/ParchmentCard";
import { blogPosts } from "@/content/blog";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Blog",
  description: "Devlog and research notes for BoggersTheFish TS work.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="field-label text-gold">Blog</p>
        <h1>Field notes with limits.</h1>
        <p>Short updates, build notes, and research reflections as the TS archive develops.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {blogPosts.map((post) => (
          <ParchmentCard key={post.slug}>
            <p className="field-label mb-3 text-brown">{post.date}</p>
            <h2 className="font-serif text-2xl font-semibold text-ink">{post.title}</h2>
            <p className="mt-3 text-sm leading-7 text-ink/75">{post.deck}</p>
            <Link href={`/blog/${post.slug}`} className="brass-link mt-5">
              Read post
              <ArrowRight className="h-4 w-4" />
            </Link>
          </ParchmentCard>
        ))}
      </div>
    </section>
  );
}
