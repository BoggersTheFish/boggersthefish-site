# BoggersTheFish — TS Research Surface

> Public archive for bounded TS reasoning receipts, current model artifacts, and sober project routing.

Live at [boggersthefish.com](https://boggersthefish.com) · truth-sync route for TS-Reasoner, TensionLM v10/v11, CIG, and Proof Ranker.

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

## Site Structure

The site is organized around current public evidence routes:

- `/run-ts-reasoner`: one bounded command, one JSON trace, one refusal/repair path.
- `/latest`: Hugging Face-visible TensionLM / TS-Reasoner v10 and TS Trace Distilled v11.
- `/start-here`: sober TS map and claim boundaries.
- `/projects`: TS-Reasoner/TensionLM/CIG/Proof Ranker routing and limits.
- `/proof-bank`: bounded proof notes, receipts, and known limits.
- `/support`: legally cautious support and BGC language.

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


## Current TS-Reasoner flagship

TS-Reasoner v3.5.0 is now the flagship verifier-first reasoning release: LLMs propose, TS verifies, confidence is not proof, and typed traces show why. Release: https://github.com/BoggersTheFish/TS-Reasoner-v0/releases/tag/v3.5.0
