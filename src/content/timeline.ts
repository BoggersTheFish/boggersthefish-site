export type TimelineDateKind =
  | "github_repo_created_at"
  | "github_release_published_at"
  | "commit_date"
  | "approx_personal_background"
  | "manual_verified";

export type TimelineConfidence = "verified" | "approximate" | "draft";

export type TimelineItem = {
  date: string;
  title: string;
  body: string;
  date_kind: TimelineDateKind;
  source_label: string;
  source_url?: string;
  confidence: TimelineConfidence;
  display_note: string;
};

export const timelineItems: TimelineItem[] = [
  {
    date: "Approximate pre-public background",
    title: "Minecraft servers and systems thinking",
    body: "Personal background only: server communities, base-building, resource constraints, and adversarial systems shaped the constraint-graph framing.",
    date_kind: "approx_personal_background",
    source_label: "Personal background, intentionally not externally dated",
    confidence: "approximate",
    display_note: "Approximate personal context; not a public project milestone.",
  },
  {
    date: "2026-03-09",
    title: "GOAT-TS public theory repo opened",
    body: "The first public repo in this timeline is GOAT-TS. This is evidence for the public branch, not a claim about when the idea began.",
    date_kind: "github_repo_created_at",
    source_label: "BoggersTheFish/GOAT-TS repo.created_at",
    source_url: "/lineage",
    confidence: "verified",
    display_note: "Verified GitHub repository creation date.",
  },
  {
    date: "2026-03-16",
    title: "BoggersTheCIG provenance graph repo opened",
    body: "CIG became a public concept/provenance branch for confidence-weighted claims, contradiction tracking, and inspectable knowledge memory.",
    date_kind: "github_repo_created_at",
    source_label: "BoggersTheFish/BoggersTheCIG repo.created_at",
    source_url: "/lineage",
    confidence: "verified",
    display_note: "Verified GitHub repository creation date.",
  },
  {
    date: "2026-03-20",
    title: "TS-Core graph dynamics kernel repo opened",
    body: "TS-Core became a public branch for graph dynamics, activation, tension telemetry, and relaxation mechanics.",
    date_kind: "github_repo_created_at",
    source_label: "BoggersTheFish/TS-Core repo.created_at",
    source_url: "https://github.com/BoggersTheFish/TS-Core",
    confidence: "verified",
    display_note: "Verified GitHub repository creation date.",
  },
  {
    date: "2026-03-20",
    title: "BoggersTheAI runtime repo opened",
    body: "GitHub records BoggersTheAI as a public runtime branch on this date. Treat it as historical/experimental public context.",
    date_kind: "github_repo_created_at",
    source_label: "BoggersTheFish/BoggersTheAI repo.created_at",
    source_url: "/lineage",
    confidence: "verified",
    display_note: "Verified GitHub repository creation date.",
  },
  {
    date: "2026-04-10",
    title: "TensionLM experiment repo opened",
    body: "TensionLM became a public experiment branch for sigmoid pairwise tension attention and controlled comparison work.",
    date_kind: "github_repo_created_at",
    source_label: "BoggersTheFish/TensionLM repo.created_at",
    source_url: "https://github.com/BoggersTheFish/TensionLM",
    confidence: "verified",
    display_note: "Verified GitHub repository creation date.",
  },
  {
    date: "2026-05-20",
    title: "TS-Reasoner v0.1.0 public release",
    body: "The first TS-Reasoner public release is recorded as a GitHub release on this date.",
    date_kind: "github_release_published_at",
    source_label: "TS-Reasoner-v0 v0.1.0 release.published_at",
    source_url: "https://github.com/BoggersTheFish/TS-Reasoner-v0/releases/tag/v0.1.0",
    confidence: "verified",
    display_note: "Verified GitHub release publication date.",
  },
  {
    date: "2026-05-20",
    title: "TS-Codex-OS v0.1.0 release",
    body: "TS-Codex-OS v0.1.0 is recorded as a local project substrate release on this date.",
    date_kind: "github_release_published_at",
    source_label: "TS-Codex-OS v0.1.0 release.published_at",
    source_url: "/lineage",
    confidence: "verified",
    display_note: "Verified GitHub release publication date.",
  },
  {
    date: "2026-05-23",
    title: "TS-Reasoner v0.9.0 proof-chain release",
    body: "TS-Reasoner v0.9.0 was published as a proof-chain release in the public release ladder.",
    date_kind: "github_release_published_at",
    source_label: "TS-Reasoner-v0 v0.9.0 release.published_at",
    source_url: "https://github.com/BoggersTheFish/TS-Reasoner-v0/releases/tag/v0.9.0",
    confidence: "verified",
    display_note: "Verified GitHub release publication date.",
  },
  {
    date: "2026-05-23",
    title: "TS-Reasoner v1 foundation committed",
    body: "The v1 foundation commit is the public basis for inspectable traces, benchmark receipts, and explicit limitations.",
    date_kind: "commit_date",
    source_label: "TS-Reasoner-v0 commit 677d94898f41",
    source_url: "https://github.com/BoggersTheFish/TS-Reasoner-v0/commit/677d94898f41691c9a9264597b0625f1d309efec",
    confidence: "verified",
    display_note: "Verified GitHub commit date.",
  },
  {
    date: "2026-05-23",
    title: "TS-Start-Here public route committed",
    body: "TS-Start-Here recorded the public ecosystem route: what exists, what is toy-scope, how repos connect, and where first contact begins.",
    date_kind: "commit_date",
    source_label: "TS-Start-Here commit 27a249457827",
    source_url: "/lineage",
    confidence: "verified",
    display_note: "Verified GitHub commit date.",
  },
  {
    date: "2026-05-23",
    title: "Website golden path committed",
    body: "The website route was shaped around runnable demos, receipts, docs, repos, and limitations.",
    date_kind: "commit_date",
    source_label: "boggersthefish-site commit 43068359b2c1",
    source_url: "https://github.com/BoggersTheFish/boggersthefish-site/commit/43068359b2c12196f68bf0aea00e1fe5e80b0807",
    confidence: "verified",
    display_note: "Verified GitHub commit date.",
  },
];
