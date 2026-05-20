import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Ben Michalek / BoggersTheFish, an independent UK AI researcher and solo developer.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
