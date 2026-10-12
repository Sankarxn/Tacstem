import type { Metadata, Viewport } from 'next';
import './globals.css';
import { JsonLd } from '@/components/seo/JsonLd';

const baseUrl = process.env.APP_URL || "https://tacstem.com";

export const viewport: Viewport = {
  themeColor: "#0a0b0a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Tactical Analysis Software for Football Analysts | Tacstem",
    template: "%s | Tacstem",
  },
  description:
    "Tacstem is football tactical analysis software for coaches, analysts and scouts. Tag matches, telestrate video, build tactical boards, analyse events across matches and export your work.",
  keywords: [
    "football tactical analysis software",
    "football video analysis",
    "football telestration",
    "match event coding",
    "soccer analysis software",
    "opposition analysis",
    "tactical board animations",
    "football tagging software",
    "hudl sportscode alternative",
    "nacsport alternative",
    "football video tagging",
  ],
  authors: [{ name: "Tacstem" }],
  creator: "Tacstem",
  publisher: "Tacstem",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Tactical Analysis Software for Football Analysts | Tacstem",
    description:
      "Tacstem is football tactical analysis software for coaches, analysts and scouts. Tag matches, telestrate video, build tactical boards, analyse events across matches and export your work.",
    url: baseUrl,
    siteName: "Tacstem",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "TACSTEM TACTICAL ANALYSIS, SIMPLIFIED.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tactical Analysis Software for Football Analysts | Tacstem",
    description:
      "Tacstem is football tactical analysis software for coaches, analysts and scouts. Tag matches, telestrate video, build tactical boards, analyse events across matches and export your work.",
    images: ["/opengraph-image"],
    creator: "@tacstem",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <JsonLd includeGlobal={true} />
      </head>
      <body suppressHydrationWarning className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-primary-foreground overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
