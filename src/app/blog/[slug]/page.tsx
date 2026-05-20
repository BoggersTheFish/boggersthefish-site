import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ParchmentCard } from "@/components/ParchmentCard";
import { blogPosts, getBlogPost } from "@/content/blog";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  return pageMetadata({
    title: post?.title ?? "Blog",
    description: post?.deck,
    path: `/blog/${params.slug}`,
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="page-shell">
      <Link href="/blog" className="brass-link mb-8 text-gold">
        <ArrowLeft className="h-4 w-4" />
        Back to blog
      </Link>
      <div className="page-intro">
        <p className="field-label text-gold">{post.date}</p>
        <h1>{post.title}</h1>
        <p>{post.deck}</p>
      </div>

      <ParchmentCard>
        <div className="space-y-6">
          {post.body.map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-ink/80">{paragraph}</p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {post.tags.map((tag) => <span key={tag} className="field-chip">{tag}</span>)}
        </div>
      </ParchmentCard>

      <div className="mt-8 flex flex-wrap gap-3">
        {post.links.map((link) => (
          <Link key={link.href} href={link.href} className="plaque-button">
            {link.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        ))}
      </div>
    </article>
  );
}
