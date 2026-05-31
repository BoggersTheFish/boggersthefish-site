# Site Truth Audit

Generated: `2026-05-25T00:21:07Z`

Website repo: `/home/boggersthefish/workspace/boggersthefish-site`

Branch: `site-truth-sync-v10-v11`

Base commit: `4e8c08adbdd4480675d60164d6d651887099d0d3`

The worktree was already dirty before this pass. Existing user changes were preserved and edited in place where needed.

## Detected Routes

`/`, `/about`, `/blog`, `/blog/[slug]`, `/contact`, `/docs`, `/docs/[slug]`, `/evidence`, `/lab`, `/latest`, `/network`, `/projects`, `/projects/cig`, `/projects/proof-ranker`, `/projects/tensionlm`, `/projects/ts-core`, `/proof-bank`, `/receipts`, `/research`, `/roadmap`, `/run-ts-reasoner`, `/start-here`, `/support`, `/ts-os`, `/waves`.

## External Links Checked

| Link | Status | Notes |
| --- | --- | --- |
| `https://www.boggersthefish.com/` | Accessible | Deployed public homepage still had pre-sync copy before this branch deploys. |
| `https://www.boggersthefish.com/projects` | Accessible | Deployed public projects page still had older graph/wave framing before this branch deploys. |
| `https://github.com/BoggersTheFish/TS-Reasoner-v0` | Verified | GitHub API: public repo, default branch `main`, created `2026-05-20T13:05:38Z`, pushed `2026-05-23T14:57:00Z`. |
| `https://github.com/BoggersTheFish/TS-Start-Here` | Verified | GitHub API: public repo, default branch `main`, created `2026-05-20T14:40:53Z`, pushed `2026-05-23T17:41:41Z`. |
| `https://huggingface.co/BoggersTheFish/TensionLM-117M-TS-Reasoner-v10` | Verified | HF API/card verified public artifact, last modified `2026-05-16T18:14:28.000Z`, MIT license, v10 receipt files. |
| `https://huggingface.co/BoggersTheFish/TensionLM-TS-Trace-Distilled-v11` | Verified | HF API/card verified public artifact, last modified `2026-05-16T18:28:57.000Z`, MIT license, trace-distillation data/eval files. |

## TS-Reasoner Status

Local repo: `/home/boggersthefish/workspace/TS-Reasoner-v0`

Local branch/commit: `main` at `677d94898f41691c9a9264597b0625f1d309efec`

Local tags seen: `v0.7.0`, `v0.3.0`, `v0.2.0`, `v0.1.0`

GitHub API tags seen: `v0.9.0`, `v0.8.0`, `v0.7.0`, `v0.3.0`, `v0.2.0`, `v0.1.0`

Golden-path command verified locally:

```bash
python3 inference.py --question "If some artists are makers and all makers are creators, are all artists creators?"
```

Observed output: `Answer: Not enough information.`, `Selected chain: candidate_cautious`, `Global tension: 0.0000`, `Trace: artifacts/latest_trace.json`.

## Hugging Face Model Status

`BoggersTheFish/TensionLM-117M-TS-Reasoner-v10`

- Status: verified external.
- SHA: `a242aa14c7e456cc5bcc18b46b4092be9be57c34`.
- Last modified: `2026-05-16T18:14:28.000Z`.
- Card verifies deterministic graph/transitivity, arithmetic, code, boolean, set, and string families.
- Card reports TAC v2/v3/v4 `120/120`, public examples `30/30`, generated-family receipts, and the limitation that scores are system scores, not raw LLM scores.

`BoggersTheFish/TensionLM-TS-Trace-Distilled-v11`

- Status: verified external.
- SHA: `790ca8250f61fd89b82dabc8deca867ed14d81a7`.
- Last modified: `2026-05-16T18:28:57.000Z`.
- Card/API verify 1,920 trace-distillation rows, 1,632/144/144 train/val/test split, about 1.1M parameters, 580 steps, validation perplexity around 2.45, and raw exact answer/rule hits of `0/48`.
- Card says raw exact answer/rule generation is not solved yet.

## Claim Ledger

| Claim | Location | Status | Basis |
| --- | --- | --- | --- |
| TS-Reasoner emits candidate chains, local/global tension, rejected alternatives, abstention/repair decisions, benchmark receipts, and visible failure modes. | `src/content/site.ts:6`, `src/app/page.tsx:90` | Verified | Local TS-Reasoner README, trace schema, and local golden-path run. |
| TensionLM v10/v11 are HF-visible current model-line artifacts. | `src/content/site.ts:40`, `src/content/site.ts:41`, `src/app/latest/page.tsx:18`, `src/app/latest/page.tsx:26` | Verified | Hugging Face API/model cards. |
| v10 receipt numbers include `120/120`, `30/30`, generated-family `3000/3000`, and all-family `6000/6000`. | `src/app/latest/page.tsx:22` | Verified | Hugging Face v10 card, scoped to generated formal families/system scores. |
| v11 receipt numbers include 1,920 rows, 1,632/144/144 split, about 1.1M params, 580 steps, 2.45 validation perplexity, and `0/48` raw exact hits. | `src/app/page.tsx:51`, `src/app/latest/page.tsx:30`, `src/app/latest/page.tsx:31` | Verified | Hugging Face v11 card and training summary JSON. |
| TS-Reasoner v1.0 trace contract and 20-task local receipt. | `src/app/page.tsx:63`, `src/app/page.tsx:65`, `src/components/hero/HeroSection.tsx:71`, `src/lib/tsData.ts:274` | Locally asserted, not externally verified | Local TS-Reasoner artifacts verify it; public GitHub tags API did not show `v1.0.0`. |
| Proof Ranker has a published artifact ladder. | `src/app/page.tsx:39`, `src/app/page.tsx:41`, `src/content/projects.ts:137` | Locally asserted, not externally verified | Site links exist; exact HF health was not rechecked. |
| Proof-bank and blog dates/results dated `2026-05-20`. | `src/content/proofs.ts:53`, `:70`, `:87`, `:104`, `:121`, `:138`, `:155`, `:172`, `:189`, `:206`, `:223`, `:240`, `:257`, `:274`, `:291`, `:308`, `:325`; `src/content/blog.ts:21`, `:45`, `:69` | Locally asserted, not externally verified | Local content only in this pass. |
| Historical wave dates, Wave 12, 200+ tests, and live-site-as-TS-instance framing. | Previously `README.md:3`, `src/lib/tsData.ts:646`, `src/components/layout/Footer.tsx:168` | Should be softened | Removed or reframed as local archive / receipt-needed. |
| BGC support safety terms. | `src/content/site.ts:16`, `src/content/site.ts:19`, `src/app/support/page.tsx:16`-`:25` | Verified in source | Explicitly says BGC is experimental, off-chain, not cryptocurrency, not investment, not legal tender, not redeemable for cash, may remain off-chain forever, and support funds work rather than return. |

## Softened Claims

- Public copy now says rejected alternatives plus abstention/repair decisions, not loose accepted/rejected alternatives.
- README live TS instance claim removed.
- Legacy Wave 12 / 200+ tests / THIS SITE framing moved to local archive / needs receipt language.
- Footer living-instance language softened to public research archive with local archive wave label.
- About page reframed as personal origin story plus historical project arc, with verified vs approximate dates.

## Remaining Tensions

- Exact Proof Ranker HF artifact health was not rechecked.
- Proof-bank dates and metrics remain local content unless paired with per-receipt artifacts.
- TS-Reasoner v10.0.0 is visible as the latest public GitHub release.
- Public deployed site still shows old content until this branch is built and deployed.

Machine-readable mirror: `artifacts/site_truth_audit.json`.
