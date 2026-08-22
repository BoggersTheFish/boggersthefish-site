# 2026 Website Overhaul Audit

Audit date: 22 August 2026

## Baseline

The live site already had a serious verifier-first archive: a strong visual
identity, project lineage, proof bank, claim boundaries, and detailed predecessor
pages. The overhaul preserves those useful historical and evidence surfaces.

## Material problems found

1. **The release authority was stale.** The homepage still led with
   Ten-SON-LM, TS-Reasoner, ts-chat-language, TSQ, bogbin, and TensionForge as
   current programmes. Public GitHub metadata now describes thinking-system as
   the canonical monorepo and marks several predecessor repositories as archived
   or migrated.
2. **PRIME was absent.** PRIME v1.0.0—the first public release of the current
   verifier-governed architecture—had no primary route, despite its permanent
   Zenodo record and DOI.
3. **Published research was not visible.** The site did not present Ben
   Michalek's two published Zenodo software records, their versions, dates, or
   stable DOIs.
4. **Enthusia SMP was missing from the professional surface.** The About page
   mentioned Minecraft only as approximate background. Enthusia publicly lists
   BoggersTheFish as a developer, and visible repositories document a real plugin
   ecosystem.
5. **The biography led with an inside joke rather than a clear identity.** The
   old “Weird fish sigil, sober receipts” opening had personality but did not
   quickly establish Ben as an independent researcher, software developer, and
   Minecraft server developer.
6. **Navigation reflected the archive rather than the visitor's questions.**
   Start Here, Current Work, Lineage, Proof Bank, Research, and About gave equal
   top-level weight to historical and current surfaces. Publications and
   Enthusia had no routes.
7. **The visual language read as fantasy archive before technical research.**
   The scenic, parchment-heavy homepage was distinctive but reduced the initial
   sense of current technical work and made the page feel denser than necessary.
8. **Credibility signals were present but dispersed.** DOIs, publication dates,
   licences, frozen evidence counts, negative results, and canonical-source
   status were not visible together.
9. **Metadata was behind the work.** Page titles, descriptions, keywords,
   OpenGraph copy, sitemap routes, and structured data did not cover PRIME,
   Zenodo, adaptive state abstraction, or Enthusia.

## Verified current anchors

- PRIME v1.0.0 — 10.5281/zenodo.22058441, published 22 August 2026.
- Anytime-Valid Adaptive State Abstraction v0.2.0 —
  10.5281/zenodo.21954123, published 15 August 2026.
- BoggersTheFish/thinking-system — public canonical TS monorepo.
- enthusia.info — lists BoggersTheFish as a developer.
- BoggersTheFish/enthusia-network — visible plugin-ecosystem monorepo.

## Overhaul delivered

- Rebuilt the homepage around PRIME, published artifacts, evidence standards,
  open source, Enthusia SMP, and a concise bio.
- Added dedicated /publications and /enthusia routes.
- Removed the former credits/support route, notices, navigation, content fields,
  and stale audit references.
- Rewrote /research, /projects, /about, and /start-here.
- Reclassified older model and verifier work as preserved predecessors or model
  archive material rather than current release authority.
- Replaced the scenic hero with a cleaner research-console visual system while
  preserving the forest, brass, serif, and fish-crest identity.
- Added DOI, licence, publication-date, evidence-count, and claim-boundary
  signals near the relevant claims.
- Updated primary navigation, footer, sitemap, SEO copy, OpenGraph artwork, and
  Person/WebSite JSON-LD.
- Updated the repository README to identify PRIME as the current flagship.

## Verification

- ESLint passes.
- Next.js production build passes and generates all 45 static page outputs.
- Internal-link scan covers 41 generated HTML files with zero missing targets.
- Key DOI, GitHub, and Enthusia links return HTTP 200.
- Desktop and 390 × 844 mobile browser checks pass.
- Browser console has no warnings or errors on the checked routes.
