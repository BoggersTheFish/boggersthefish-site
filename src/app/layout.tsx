import type { Metadata, Viewport } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
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
    "Thinking System",
    "constraint graph",
    "tension dynamics",
    "constraint propagation",
    "interpretable AI systems",
    "provenance-aware knowledge graphs",
    "proof ranking",
    "reproducible experiments",
    "open-source research",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    siteName: site.name,
    images: [{ url: `${site.url}${site.ogImage}`, width: 1200, height: 630, alt: `${site.name} archive card` }],
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
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
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
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ebGaramond.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen overflow-x-hidden bg-forest-dark font-sans text-cream antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <JsonLd />
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
