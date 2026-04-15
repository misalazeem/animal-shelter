import type { Metadata } from "next";
import { Calistoga, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://randomrescuer.org"),
  title: {
    default: "Random Rescuer | Foster-Based Cat Rescue",
    template: "%s | Random Rescuer",
  },
  description:
    "Random Rescuer is a foster home-based not-for-profit cat rescue providing compassionate care for street cats, seniors, and those with medical needs. If we can help, we will.",
  keywords: [
    "cat rescue",
    "cat adoption",
    "foster cats",
    "animal rescue",
    "TNR",
    "trap neuter return",
    "senior cats",
    "cat shelter",
    "adopt a cat",
    "rescue cats",
    "foster home",
    "nonprofit rescue",
  ],
  authors: [{ name: "Random Rescuer" }],
  creator: "Random Rescuer",
  publisher: "Random Rescuer",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randomrescuer.org",
    siteName: "Random Rescuer",
    title: "Random Rescuer | Unexpected Rescues. Unconditional Love.",
    description:
      "Compassionate care for the street cats of our community—focusing on seniors, medical needs, and the overlooked adults who deserve a soft place to land.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Random Rescuer - Foster-Based Cat Rescue",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Rescuer | Unexpected Rescues. Unconditional Love.",
    description:
      "Foster home-based cat rescue. If we can help, we will.",
    images: ["/og-image.jpg"],
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://randomrescuer.org",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Random Rescuer",
  alternateName: "Random Rescuer Cat Rescue",
  url: "https://randomrescuer.org",
  logo: "https://randomrescuer.org/logo.png",
  description:
    "Foster home-based not-for-profit cat rescue providing compassionate care for street cats, seniors, and those with medical needs.",
  foundingDate: "2018",
  founder: {
    "@type": "Person",
    name: "Hailey Kartash",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@randomrescuer.org",
    areaServed: "Toronto, ON",
  },
  sameAs: [
    "https://www.facebook.com/randomrescuer7/",
    "https://www.instagram.com/randomrescuer/",
    "https://linktr.ee/randomrescuer",
  ],
  nonprofitStatus: "Nonprofit501c3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${calistoga.variable} ${inter.variable} ${jetbrainsMono.variable} font-body antialiased relative bg-cream text-ink`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

