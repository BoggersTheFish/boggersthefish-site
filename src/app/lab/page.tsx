import { LegacyRedirectPage, legacyRedirectMetadata } from "@/components/LegacyRedirectPage";

export const metadata = legacyRedirectMetadata("/lab");

export default function LabPage() {
  return <LegacyRedirectPage path="/lab" />;
}