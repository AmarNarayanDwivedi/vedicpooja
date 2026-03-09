import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Prata, Lato } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const prata = Prata({
  variable: "--font-prata",
  subsets: ["latin"],
  weight: ["400"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vedic-pooja.com"),
  title: {
    default: "8668552465 | Vedic Pooja Pandit in Pune | 100% Authentic Rituals",
    template: "8668552465 | %s | Vedic Pooja",
  },
  description: "8668552465 - Book experienced Pandits for all Vedic Pujas in Pune. 100% Authentic rituals like Griha Pravesh, Vastu Shanti & Satyanarayan. Includes Samagri & Muhurat.",
  keywords: ["pandit in pune", "pooja booking pune", "vedic pandit pune", "pandit for griha pravesh pune", "pandit for marriage pune", "pandit for vastu shanti pune", "satyanarayan pooja pandit pune", "pandit for bhoomi pujan pune", "pandit for mundan pune", "pandit for rudrabhishek pune", "north indian pandit in pune", "south indian pandit in pune", "marathi pandit in pune", "pandit near me pune", "8668552465", "9225509555", "satyanarayan pooja pune", "griha pravesh pooja pune", "Hinjewadi", "Wakad", "ShivajiNagar", "VimanNagar", "Hadapsar", "online pooja india", "astrology consultation"],
  alternates: {
    canonical: "https://www.vedic-pooja.com",
  },
  openGraph: {
    title: "Vedic Pooja | Authentic Hindu Rituals",
    description: "Book 100% authentic Vedic pooja services across Pune and India.",
    url: "https://www.vedic-pooja.com",
    siteName: "Vedic Pooja",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedic Pooja | Authentic Hindu Rituals",
    description: "Authentic Vedic pooja services in Pune & All India.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorant.variable} ${prata.variable} ${lato.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Vedic Pooja",
              "image": "https://www.vedic-pooja.com/logo.png",
              "@id": "https://www.vedic-pooja.com",
              "url": "https://www.vedic-pooja.com",
              "telephone": ["+918668552465", "+919225509555"],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Pune City",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411001",
                "addressCountry": "IN"
              },
              "areaServed": [
                "Wakad", "Hinjewadi", "Baner", "Hadapsar", "Viman Nagar", "Kharadi", "Kothrud", "Pimple Saudagar", "Aundh", "Ravet", "Magarpatta", "Shivaji Nagar", "Deccan", "PCMC"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Pooja Services in Pune",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pandit for Griha Pravesh" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pandit for Satyanarayan Pooja" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pandit for Marriage/Vivah" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pandit for Vastu Shanti" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pandit for Bhoomi Pujan" } }
                ]
              },
              "sameAs": ["https://www.instagram.com/adityanarayan3081"],
              "description": "Pune's #1 Vedic Pooja Service. Book experienced Pandits for 500+ types of Pujas in all over Pune. Call 8668552465."
            })
          }}
        />
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
