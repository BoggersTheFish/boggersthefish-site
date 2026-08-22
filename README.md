# BoggersTheFish — Verifier-First Research Portfolio

> Public portfolio for verifier-first AI, published research software,
> open-source systems, and Enthusia SMP development.

Live at [boggersthefish.com](https://boggersthefish.com). The primary research
surface is PRIME v1.0.0, with permanent Zenodo records and the wider Thinking
System lineage kept visible behind explicit evidence boundaries.

---

## Quick Start

Requires **Node.js 18+** and **npm 9+**.

```bash
# Install Node.js first if needed:
# https://nodejs.org/en/download

# Clone or enter the project
cd boggersthefish-site

# Install dependencies
npm install

# Copy env vars
cp .env.example .env.local
# Edit .env.local and add your GITHUB_TOKEN

# Run dev server
npm run dev
# → http://localhost:3000
```

## Build & Deploy

```bash
npm run build    # Production build
npm run start    # Start production server

# Deploy to Vercel (one command):
npx vercel --prod
```

## Primary Routes

The site is organized around the current public programme:

- `/research`: PRIME, verifier authority, selective epistemic control, and
  current claim boundaries.
- `/publications`: versioned Zenodo software records and DOI links.
- `/projects`: current open-source work separated from preserved predecessors.
- `/enthusia`: Minecraft server development and the visible plugin ecosystem.
- `/about`: concise current biography and selected verified milestones.
- `/lineage` and `/proof-bank`: retained historical and evidence surfaces.

## Tech Stack

- **Next.js 15** App Router + TypeScript
- **Tailwind CSS 3** with custom TS archive theme
- **Framer Motion** — scroll + activation animations
- **Zustand** — global wave cycle state
- **shadcn/ui** — base UI components
- **lucide-react** — icons
- **react-force-graph-2d** for graph views where enabled
- **@octokit/rest** for GitHub-backed routes where configured

## TS Philosophy

```
while true:
  Propagate()  // wave spreads activation (topological + semantic cosine)
  Relax()      // decay toward base_strength
  if tension too high:
    Break()    // collapse weakest patterns
    Evolve()   // spawn higher-stability nodes
```

Research claims remain bounded to receipts. Toy and narrow receipts are useful;
they are not broad AGI, general reasoning, or production reliability claims.

---

© 2026 BoggersTheFish. All nodes reserved.


## Current Flagship

PRIME v1.0.0 is the current flagship release:
https://doi.org/10.5281/zenodo.22058441

The release corresponds internally to scientific generation v18. It is a
verifier-governed finite research architecture for selective information
acquisition, persistent representation repair, bounded cognition, and auditable
abstention. TS-Reasoner, TensionLM, and related projects remain available as
predecessor evidence and lineage rather than current release authority.
