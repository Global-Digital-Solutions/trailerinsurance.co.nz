import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TrailerInsurance.co.nz | Trailer Insurance NZ | Compare & Save",
  description:
    "Compare top trailer insurance providers in New Zealand. Get quotes for caravan, boat trailer, horse float, and commercial trailer insurance. Quotes within 24 hours.",
  keywords: [
    "trailer insurance nz",
    "trailer insurance new zealand",
    "caravan insurance nz",
    "boat trailer insurance",
    "horse float insurance",
    "camper trailer insurance",
    "trailer insurance comparison",
    "comprehensive trailer cover",
    "third party trailer insurance",
    "commercial trailer insurance",
    "trailer insurance cost nz",
    "cheap trailer insurance nz",
    "compare trailer insurance nz",
    "box trailer insurance nz",
    "flatbed trailer insurance nz",
    "enclosed trailer insurance nz",
    "car trailer insurance nz",
    "camper trailer insurance nz",
    "agreed value trailer insurance",
    "third party trailer insurance nz",
    "trailer insurance quote nz",
  ],
  authors: [{ name: "TrailerInsurance.co.nz" }],
  alternates: { canonical: "https://trailerinsurance.co.nz" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://trailerinsurance.co.nz",
    title: "TrailerInsurance.co.nz | Trailer Insurance NZ | Compare & Save",
    description:
      "Compare top trailer insurance providers in New Zealand. Caravan, boat trailer, horse float, and commercial trailer cover.",
    siteName: "TrailerInsurance.co.nz",
    images: [{ url: 'https://trailerinsurance.co.nz/android-chrome-512x512.png', width: 512, height: 512, alt: 'TrailerInsurance.co.nz' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TrailerInsurance.co.nz | Trailer Insurance NZ | Compare & Save",
    description: "Compare top trailer insurance providers in New Zealand. Quotes within 24 hours from ICNZ-registered brokers.",
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://trailerinsurance.co.nz/#organization",
      name: "TrailerInsurance.co.nz",
      url: "https://trailerinsurance.co.nz",
      logo: "https://trailerinsurance.co.nz/android-chrome-512x512.png",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        areaServed: "NZ",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://trailerinsurance.co.nz/#website",
      url: "https://trailerinsurance.co.nz",
      name: "TrailerInsurance.co.nz",
      description: "Trailer insurance comparison and broker referral service",
      publisher: { "@id": "https://trailerinsurance.co.nz/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f59e0b" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Compare top trailer insurance providers in New Zealand. Get quotes for caravan, boat trailer, horse float, and commercial trailer insurance. Quotes within 24 hours."
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6745344450942342"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
