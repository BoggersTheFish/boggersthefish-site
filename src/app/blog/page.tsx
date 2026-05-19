import type { Metadata } from "next";
import { ParchmentCard } from "@/components/ParchmentCard";

export const metadata: Metadata = {
  title: "Blog",
  description: "Devlog and research notes for BoggersTheFish TS work.",
};

const posts = [
  {
    title: "Building Thinking Systems",
    date: "Field note",
    body: "Why the public archive is being reorganized around projects, proofs, docs, and cautious claims.",
  },
  {
    title: "Tension Telemetry as a Receipt",
    date: "Research note",
    body: "A short note on treating tension, relaxation steps, graph size, and outputs as part of the experiment record.",
  },
  {
    title: "From Claims to Proof Bank",
    date: "Devlog",
    body: "The site is structured so every strong claim has a place to attach source, replay, and limitation notes.",
  },
];

export default function BlogPage() {
  return (
    <section className="page-shell">
      <div className="page-intro">
        <p className="field-label text-gold">Blog</p>
        <h1>Devlog from the field desk.</h1>
        <p>Short updates, build notes, and research reflections as the TS archive develops.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {posts.map((post) => (
          <ParchmentCard key={post.title}>
            <p className="field-label mb-3 text-brown">{post.date}</p>
            <h2 className="font-serif text-2xl font-semibold text-ink">{post.title}</h2>
            <p className="mt-3 text-sm leading-7 text-ink/75">{post.body}</p>
          </ParchmentCard>
        ))}
      </div>
    </section>
  );
}
