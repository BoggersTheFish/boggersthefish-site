#!/usr/bin/env node

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const OWNER = "BoggersTheFish";
const API_ROOT = "https://api.github.com";

const repositoryAudit = [
  "TS-Reasoner-v0",
  "TS-Codex-OS",
  "TS-Start-Here",
  "TensionLM",
  "TS-Core",
  "BoggersTheCIG",
  "BoggersTheAI",
  "GOAT-TS",
  "boggersthefish-site",
];

const timelineEntries = [
  {
    title: "Early background: Minecraft servers and systems thinking",
    displayedDate: "Early background",
    repo: null,
    sourceType: "approximate personal background",
    sourceId: "not externally dated",
    exactPublicDate: false,
    notes: "Personal background entry; intentionally approximate and not treated as a public milestone.",
  },
  {
    title: "GOAT-TS public theory repo opened",
    displayedDate: "2026-03-09",
    repo: "GOAT-TS",
    sourceType: "repo created_at",
    sourceId: "created_at",
    expectedDate: "2026-03-09",
    exactPublicDate: true,
    notes: "Repo creation date only; not a claim that project work began on this date.",
  },
  {
    title: "BoggersTheCIG provenance graph repo opened",
    displayedDate: "2026-03-16",
    repo: "BoggersTheCIG",
    sourceType: "repo created_at",
    sourceId: "created_at",
    expectedDate: "2026-03-16",
    exactPublicDate: true,
    notes: "Repo creation date for the public CIG branch.",
  },
  {
    title: "TS-Core graph dynamics kernel repo opened",
    displayedDate: "2026-03-20",
    repo: "TS-Core",
    sourceType: "repo created_at",
    sourceId: "created_at",
    expectedDate: "2026-03-20",
    exactPublicDate: true,
    notes: "Repo creation date for the public TS-Core branch.",
  },
  {
    title: "BoggersTheAI runtime repo opened",
    displayedDate: "2026-03-20",
    repo: "BoggersTheAI",
    sourceType: "repo created_at",
    sourceId: "created_at",
    expectedDate: "2026-03-20",
    exactPublicDate: true,
    notes: "Repo creation date for the public runtime branch.",
  },
  {
    title: "TensionLM experiment repo opened",
    displayedDate: "2026-04-10",
    repo: "TensionLM",
    sourceType: "repo created_at",
    sourceId: "created_at",
    expectedDate: "2026-04-10",
    exactPublicDate: true,
    notes: "Repo creation date for public tension-attention experiments.",
  },
  {
    title: "TS-Reasoner v0.1.0 public release",
    displayedDate: "2026-05-20",
    repo: "TS-Reasoner-v0",
    sourceType: "release",
    sourceId: "v0.1.0",
    expectedDate: "2026-05-20",
    exactPublicDate: true,
    notes: "Uses release.published_at.",
  },
  {
    title: "TS-Codex-OS v0.1.0 release",
    displayedDate: "2026-05-20",
    repo: "TS-Codex-OS",
    sourceType: "release",
    sourceId: "v0.1.0",
    expectedDate: "2026-05-20",
    exactPublicDate: true,
    notes: "Uses release.published_at.",
  },
  {
    title: "TS-Reasoner v0.9.0 proof-chain release",
    displayedDate: "2026-05-23",
    repo: "TS-Reasoner-v0",
    sourceType: "release",
    sourceId: "v0.9.0",
    expectedDate: "2026-05-23",
    exactPublicDate: true,
    notes: "Uses release.published_at for the public release ladder.",
  },
  {
    title: "TS-Reasoner v1 foundation committed",
    displayedDate: "2026-05-23",
    repo: "TS-Reasoner-v0",
    sourceType: "commit",
    sourceId: "677d94898f41691c9a9264597b0625f1d309efec",
    expectedDate: "2026-05-23",
    exactPublicDate: true,
    notes: "Uses commit.committer.date for the v1 foundation commit.",
  },
  {
    title: "TS-Start-Here public route committed",
    displayedDate: "2026-05-23",
    repo: "TS-Start-Here",
    sourceType: "commit",
    sourceId: "27a249457827d13438ba4112e57d6b81a74ac3d7",
    expectedDate: "2026-05-23",
    exactPublicDate: true,
    notes: "Uses commit.committer.date for the public ecosystem map route.",
  },
  {
    title: "Website golden path committed",
    displayedDate: "2026-05-23",
    repo: "boggersthefish-site",
    sourceType: "commit",
    sourceId: "43068359b2c12196f68bf0aea00e1fe5e80b0807",
    expectedDate: "2026-05-23",
    exactPublicDate: true,
    notes: "Uses commit.committer.date for the homepage-to-run-route golden path.",
  },
];

function headers() {
  const token = process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN;
  const h = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "boggersthefish-about-timeline-verifier",
  };
  if (token) {
    h.Authorization = `Bearer ${token}`;
  }
  return h;
}

async function github(pathname) {
  const response = await fetch(`${API_ROOT}${pathname}`, { headers: headers() });
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`${response.status} ${response.statusText} for ${pathname}: ${body}`);
  }
  return response.json();
}

function toDate(value) {
  return value ? String(value).slice(0, 10) : null;
}

async function verifyEntry(entry) {
  const fetchedAt = new Date().toISOString();
  if (!entry.exactPublicDate) {
    return {
      title: entry.title,
      displayedDate: entry.displayedDate,
      repo: entry.repo,
      sourceType: entry.sourceType,
      sourceId: entry.sourceId,
      githubUrl: null,
      verified: true,
      fetchedAt,
      notes: entry.notes,
    };
  }

  if (entry.sourceType === "repo created_at") {
    const repo = await github(`/repos/${OWNER}/${entry.repo}`);
    const actualDate = toDate(repo.created_at);
    return {
      title: entry.title,
      displayedDate: entry.displayedDate,
      repo: `${OWNER}/${entry.repo}`,
      sourceType: entry.sourceType,
      sourceId: entry.sourceId,
      githubUrl: repo.html_url,
      verified: actualDate === entry.expectedDate,
      fetchedAt,
      notes: `${entry.notes} fetched=${actualDate}`,
    };
  }

  if (entry.sourceType === "release") {
    const release = await github(`/repos/${OWNER}/${entry.repo}/releases/tags/${entry.sourceId}`);
    const actualDate = toDate(release.published_at);
    return {
      title: entry.title,
      displayedDate: entry.displayedDate,
      repo: `${OWNER}/${entry.repo}`,
      sourceType: entry.sourceType,
      sourceId: entry.sourceId,
      githubUrl: release.html_url,
      verified: actualDate === entry.expectedDate,
      fetchedAt,
      notes: `${entry.notes} fetched=${actualDate}`,
    };
  }

  if (entry.sourceType === "commit") {
    const commit = await github(`/repos/${OWNER}/${entry.repo}/commits/${entry.sourceId}`);
    const actualDate = toDate(commit.commit?.committer?.date ?? commit.commit?.author?.date);
    return {
      title: entry.title,
      displayedDate: entry.displayedDate,
      repo: `${OWNER}/${entry.repo}`,
      sourceType: entry.sourceType,
      sourceId: entry.sourceId.slice(0, 12),
      githubUrl: commit.html_url,
      verified: actualDate === entry.expectedDate,
      fetchedAt,
      notes: `${entry.notes} fetched=${actualDate}`,
    };
  }

  throw new Error(`Unsupported source type: ${entry.sourceType}`);
}

async function auditRepo(repo) {
  const [metadata, releases, tags, commits] = await Promise.all([
    github(`/repos/${OWNER}/${repo}`),
    github(`/repos/${OWNER}/${repo}/releases?per_page=20`),
    github(`/repos/${OWNER}/${repo}/tags?per_page=20`),
    github(`/repos/${OWNER}/${repo}/commits?per_page=5`),
  ]);
  return {
    repo: `${OWNER}/${repo}`,
    createdAt: metadata.created_at,
    pushedAt: metadata.pushed_at,
    defaultBranch: metadata.default_branch,
    releases: releases.map((release) => ({
      tagName: release.tag_name,
      name: release.name,
      publishedAt: release.published_at,
      url: release.html_url,
    })),
    tags: tags.map((tag) => ({
      name: tag.name,
      sha: tag.commit?.sha,
    })),
    recentCommits: commits.map((commit) => ({
      sha: commit.sha,
      date: commit.commit?.committer?.date,
      message: commit.commit?.message?.split("\n")[0],
      url: commit.html_url,
    })),
  };
}

function printTable(results) {
  console.log("| date | title | repo | source type | source id | verified |");
  console.log("|---|---|---|---|---|---|");
  for (const result of results) {
    console.log(
      `| ${result.displayedDate} | ${result.title} | ${result.repo ?? "personal"} | ${result.sourceType} | ${result.sourceId} | ${result.verified ? "yes" : "no"} |`,
    );
  }
}

async function main() {
  const [results, repositories] = await Promise.all([
    Promise.all(timelineEntries.map(verifyEntry)),
    Promise.all(repositoryAudit.map(auditRepo)),
  ]);

  printTable(results);

  const artifact = {
    generatedAt: new Date().toISOString(),
    timeline: results,
    repositoryAudit: repositories,
  };

  await mkdir("artifacts", { recursive: true });
  await writeFile(
    path.join("artifacts", "about_timeline_verification.json"),
    `${JSON.stringify(artifact, null, 2)}\n`,
  );

  const failed = results.filter((result) => !result.verified);
  if (failed.length > 0) {
    console.error(`\n${failed.length} timeline entries failed verification.`);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
