/** Legacy URL paths kept for bookmarks; canonical targets live in vercel.json too. */
export const legacyRedirects = {
  "/lab": "/run-ts-reasoner",
  "/waves": "/research",
  "/network": "/about",
  "/receipts": "/proof-bank",
  "/evidence": "/proof-bank",
  "/ts-os": "/projects/ts-core",
} as const;

export type LegacyRedirectPath = keyof typeof legacyRedirects;