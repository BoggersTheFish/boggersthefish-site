import { LegacyRedirectPage, legacyRedirectMetadata } from "@/components/LegacyRedirectPage";

export const metadata = legacyRedirectMetadata("/waves");

export default function WavesPage() {
  return <LegacyRedirectPage path="/waves" />;
}