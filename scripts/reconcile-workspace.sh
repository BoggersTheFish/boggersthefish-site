#!/usr/bin/env bash
# Sync canonical BoggersSpace copy → workspace mirror (excludes build artifacts).
set -euo pipefail
CANONICAL="${1:-$HOME/BoggersSpace/boggersthefish-site}"
MIRROR="${2:-$HOME/workspace/boggersthefish-site}"

if [[ ! -d "$CANONICAL" ]]; then
  echo "Canonical site not found: $CANONICAL" >&2
  exit 1
fi

mkdir -p "$MIRROR"
rsync -a --delete \
  --exclude node_modules \
  --exclude .next \
  --exclude out \
  --exclude .vercel \
  "$CANONICAL/" "$MIRROR/"

echo "Synced $CANONICAL → $MIRROR"