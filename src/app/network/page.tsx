import { LegacyRedirectPage, legacyRedirectMetadata } from "@/components/LegacyRedirectPage";

export const metadata = legacyRedirectMetadata("/network");

export default function NetworkPage() {
  return <LegacyRedirectPage path="/network" />;
}