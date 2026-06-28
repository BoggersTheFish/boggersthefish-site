import { LegacyRedirectPage, legacyRedirectMetadata } from "@/components/LegacyRedirectPage";

export const metadata = legacyRedirectMetadata("/evidence");

export default function EvidencePage() {
  return <LegacyRedirectPage path="/evidence" />;
}