export type BlogPost = {
  slug: string;
  title: string;
  deck: string;
  date: string;
  tags: string[];
  body: string[];
  links: { label: string; href: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-thinking-systems",
    title: "Building Thinking Systems",
    deck: "Why the public archive is being reorganized around projects, proofs, docs, and cautious claims.",
    date: "2026-05-20",
    tags: ["research archive", "TS", "project map"],
    body: [
      "A Thinking System is not useful because it sounds large. It becomes useful when the parts are inspectable: nodes, edges, activation, tension, provenance, relaxation, and the moment a claim has to split instead of pretending all contexts agree.",
      "The site is being shaped around that rule. The homepage should not be a mood board. It should be a routing table. A new reader needs the sober map first: what TS is, what TS is not, which projects exist, which artifacts are public, and which claims have receipts attached.",
      "The concrete example is TS-Core. A broad sentence like local relaxation can create coherence is weak on its own. A better path is claim to proof receipt to repo to replay command to limitation. TS-003 narrows the statement: in a fixed toy constraint graph, tension fell from 156.216618 to 11.862658. That supports a mechanism claim inside a bounded setup. It does not prove a general reasoning system.",
      "That distinction matters across the stack. TensionLM has model cards and experiments, but claims remain benchmark-bound. CIG is the provenance-aware layer, but needs public replayable contradiction datasets. Proof Ranker has a model ladder, but verifier-backed receipts need to stay visible. The site should make those limits obvious rather than hiding them.",
      "What exists now is the public archive structure: Start Here, Projects, Proof Bank, Docs, Blog, Support, About, Roadmap, and Contact. What is still missing over time is deeper replay infrastructure: exact commits, fixed seeds, benchmark harnesses, screenshots, and videos that make replication boring.",
    ],
    links: [
      { label: "Start Here", href: "/start-here" },
      { label: "Projects", href: "/projects" },
      { label: "Proof Bank", href: "/proof-bank" },
    ],
  },
  {
    slug: "tension-telemetry-as-a-receipt",
    title: "Tension Telemetry as a Receipt",
    deck: "Why tension, relaxation steps, graph size, and outputs belong in the experiment record.",
    date: "2026-05-20",
    tags: ["tension", "telemetry", "receipts"],
    body: [
      "A TS claim should not end at a paragraph. If the system says a graph relaxed, the receipt should show what moved: initial tension, final tension, active nodes, edge pressure, update count, seed, runtime, and the exact limit of the setup.",
      "This is the reason tension telemetry is treated as first-class evidence. Text can explain what happened, but telemetry tells another engineer where to look. It turns a claim from a surface statement into a substrate trace.",
      "Take the local relaxation line. The important part is not that the result sounds impressive. The important part is that the reported tension changed from 156.216618 to 11.862658 inside a fixed toy setup. That lets the proof note say something narrow and auditable: local updates reduced graph tension under these constraints. The limit is equally important: this is a quadratic constraint graph, not a full-scale benchmark.",
      "For TensionLM, the same principle applies to language-model work. If sigmoid tension attention is useful, the receipts should include matched softmax comparisons, pairwise tension fields, fixed prompts, checkpoint hashes, and failure cases. The strongest version of the claim is not bigger language. It is better routing from observed behavior to internal pressure.",
      "What exists now is a public format for receipts and a project map that points toward replay. What is still missing is the boring production-grade layer: standardized JSON outputs, exact commands, commit hashes, and public artifacts for every serious claim.",
    ],
    links: [
      { label: "Receipt Format", href: "/docs/receipt-format" },
      { label: "TS-003", href: "/proof-bank#ts-003" },
      { label: "TensionLM", href: "/projects/tensionlm" },
    ],
  },
  {
    slug: "from-claims-to-proof-bank",
    title: "From Claims to Proof Bank",
    deck: "The site should make every strong statement walk through claim, receipt, repo/model, replay command, and limitation.",
    date: "2026-05-20",
    tags: ["proof bank", "claims", "provenance"],
    body: [
      "Most research websites fail at the same point: a strong claim appears, but the path behind it is foggy. There might be a repo somewhere, a model card somewhere else, and a result buried in a note. That is not enough for a serious archive.",
      "The Proof Bank is the correction. Every entry repeats the same fields: ID, status, claim, setup, result, limit, reproduce, related repo, related artifact, updated date, and confidence level. Repetition is the point. Strong claims should be boring to audit.",
      "A concrete example is contradiction localization. TS-005 says the narrow claim is that contradiction can localize as residual/provenance tension in a small graph. The setup is 9 nodes and 16 constraints with one planted contradiction. The result is that the bad edge ranked first by residual energy and relief-if-removed, and removing it reduced tension near zero. The limit is small and planted. That is mature evidence language: useful, but bounded.",
      "CIG extends that logic. Claims, evidence, sources, confidence, contradiction, and revision should be graph objects, not loose paragraphs. Proof Ranker extends it in another direction: proofs become traces that can be scored, repaired, and checked against verifiers. TensionLM extends it into model internals, where telemetry can expose pressure that ordinary output text hides.",
      "What exists now is the route map and the initial proof entries. What is still missing is full replication depth: commits, seeds, exact scripts, artifact hashes, and public benchmark comparisons. The archive gets stronger every time a sentence becomes a receipt.",
    ],
    links: [
      { label: "Proof Bank", href: "/proof-bank" },
      { label: "CIG", href: "/projects/cig" },
      { label: "Proof Ranker", href: "/projects/proof-ranker" },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
