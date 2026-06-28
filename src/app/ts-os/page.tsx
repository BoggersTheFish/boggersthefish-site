import { LegacyRedirectPage, legacyRedirectMetadata } from "@/components/LegacyRedirectPage";

export const metadata = legacyRedirectMetadata("/ts-os");

export default function TsOsPage() {
  return <LegacyRedirectPage path="/ts-os" />;
}