import type { Metadata, Viewport } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/content/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(site.url),
  keywords: [
    "BoggersTheFish",
    "Ben Michalek",
    "PRIME verifier-governed architecture",
    "selective epistemic control",
    "adaptive state abstraction",
    "bounded cognition",
    "Zenodo research software",
    "Enthusia SMP",
    "Minecraft plugin development",
    "Thinking System",
    "verifier-first systems",
    "typed verification",
    "deterministic language",
    "MeaningGraph",
    "semantic workspace",
    "tension dynamics",
    "adaptive precision",
    "OpenCL training",
    "verified computing",
    "constraint graphs",
    "reproducible experiments",
    "open-source research",
  ],
  authors: [{ name: "Ben Michalek / BoggersTheFish", url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    siteName: site.name,
    images: [
      {
        url: `${site.url}${site.ogImage}`,
        width: 1200,
        height: 630,
        alt: `${site.name} field archive card`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: [`${site.url}${site.ogImage}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#102015",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#ben-michalek`,
        name: "Ben Michalek",
        alternateName: "BoggersTheFish",
        url: site.url,
        sameAs: [site.github, site.huggingFace, site.zenodo, site.enthusia],
        knowsAbout: [
          "Verifier-first artificial intelligence",
          "Adaptive state abstraction",
          "Research software",
          "Minecraft server development",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        author: { "@id": `${site.url}/#ben-michalek` },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${ebGaramond.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen overflow-x-hidden bg-forest-dark font-sans text-cream antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
