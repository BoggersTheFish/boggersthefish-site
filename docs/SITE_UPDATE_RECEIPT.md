# Site Update Receipt

Generated: `2026-05-25T00:21:07Z`

Branch: `site-truth-sync-v10-v11`

Base commit: `4e8c08adbdd4480675d60164d6d651887099d0d3`

## Summary

The public surface was truth-synced around a verifier-first TS story:

- `/` now leads with "Small bounded reasoning, inspected."
- `/latest` was added for the HF-visible v10/v11 model-line artifacts.
- `/run-ts-reasoner` now has one verified golden-path command and one trace checklist.
- `/about` now separates personal origin story, historical project arc, and verified dates.
- Stale live-instance, hard wave-date, and 200+ tests language was softened.

## Files Changed

- `README.md`
- `artifacts/site_truth_audit.json`
- `artifacts/site_update_receipt.json`
- `docs/SITE_TRUTH_AUDIT.md`
- `docs/SITE_UPDATE_RECEIPT.md`
- `src/app/about/page.tsx`
- `src/app/latest/page.tsx`
- `src/app/page.tsx`
- `src/app/run-ts-reasoner/page.tsx`
- `src/app/sitemap.ts`
- `src/components/hero/HeroSection.tsx`
- `src/components/layout/Footer.tsx`
- `src/content/nav.ts`
- `src/content/projects.ts`
- `src/content/site.ts`
- `src/lib/tsData.ts`

The repo had unrelated dirty files before this pass; those were left alone unless needed for the requested truth-sync.

## Commands Run

- `git switch -c site-truth-sync-v10-v11`
- Hugging Face API/card checks for v10 and v11.
- GitHub API checks for `TS-Reasoner-v0`, `TS-Start-Here`, tags, and releases.
- Local TS-Reasoner golden-path command:

```bash
python3 inference.py --question "If some artists are makers and all makers are creators, are all artists creators?"
```

- `node -e "JSON.parse(require('fs').readFileSync('artifacts/site_truth_audit.json','utf8')); console.log('ok')"`
- `npm run lint`
- `npm run build`

## Build And Lint

`npm run lint`: passed.

Initial lint found JSX quote escaping in `/run-ts-reasoner`; fixed and reran successfully.

`npm run build`: passed. Next.js generated 36 static pages and exported successfully, including `/latest`.

`npm install`: skipped because `node_modules` and `package-lock.json` were already present.

## Verified Facts

- `TensionLM-117M-TS-Reasoner-v10` is public on Hugging Face, last modified `2026-05-16T18:14:28.000Z`.
- v10 card reports bounded generated-family system receipts and explicitly says they are not raw LLM scores.
- `TensionLM-TS-Trace-Distilled-v11` is public on Hugging Face, last modified `2026-05-16T18:28:57.000Z`.
- v11 card/training summary reports 1,920 trace-distillation rows, 1,632/144/144 split, about 1.1M parameters, 580 steps, validation perplexity around 2.45, and `0/48` raw exact answer/rule hits.
- Local TS-Reasoner command writes `artifacts/latest_trace.json` and abstains on the some/all trap.
- TS-Reasoner GitHub release page now shows `v10.0.0` as Latest.

## Not Verified

- Current Proof Ranker Hugging Face artifact health.
- Every proof-bank date/metric against external artifact hashes.
- None for the TS-Reasoner v10 release surface after publishing `v10.0.0`.

## Claims Softened

- Removed "site is a running/living TS instance" framing.
- Softened Wave 12 / 200+ tests / THIS SITE language to local archive / receipt-needed language.
- Homepage now states toy and bounded receipts are real, broad claims are not.
- About page now marks personal background and project arc separately.

## Remaining Tensions

- Deploy is needed before `https://www.boggersthefish.com/` reflects this branch.
- Proof Ranker deserves its own artifact health pass.
- Proof-bank receipts should gain hashes or per-receipt replay commands.
- If v1.0.0 is meant to be externally public, publish/tag it; until then the site treats it as local-artifact verified.

Machine-readable mirror: `artifacts/site_update_receipt.json`.
