import { LegacyRedirectPage, legacyRedirectMetadata } from "@/components/LegacyRedirectPage";

export const metadata = legacyRedirectMetadata("/receipts");

export default function ReceiptsPage() {
  return <LegacyRedirectPage path="/receipts" />;
}