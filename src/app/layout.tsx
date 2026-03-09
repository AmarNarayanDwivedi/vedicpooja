import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Prata, Lato } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

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
    default: "Pune's No.1 Pooja Booking | 100% Authentic Vedic Pooja | 8668552465",
    template: "%s | Vedic Pooja | 8668552465",
  },
  description: "Book authentic Vedic pooja services in Pune with experienced Pandits. Griha Pravesh, Satyanarayan, Marriage & more.",
  keywords: ["pooja booking pune", "pandit in pune", "vedic pooja pune", "100% authentic pooja", "satyanarayan pooja pune", "griha pravesh pooja pune", "Hinjewadi", "Wakad", "ShivajiNagar", "VimanNagar", "Hadapsar", "online pooja india", "astrology consultation"],
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
        url: "/assets/logo.webp",
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
    images: ["/assets/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
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
              name: "Vedic Pooja",
              image: "https://www.vedic-pooja.com/assets/logo.webp",
              "@id": "https://www.vedic-pooja.com",
              url: "https://www.vedic-pooja.com",
              telephone: ["+918668552465", "+919225509555"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pune",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              areaServed: [
                { "@type": "City", name: "Pune" },
                { "@type": "Place", name: "Hinjewadi" },
                { "@type": "Place", name: "Wakad" },
                { "@type": "Place", name: "ShivajiNagar" },
                { "@type": "Place", name: "VimanNagar" },
                { "@type": "Place", name: "Hadapsar" },
                { "@type": "Country", name: "India" }
              ],
              sameAs: ["https://www.instagram.com/adityanarayan3081"],
              description: "Book 100% authentic Vedic pooja services in Pune and across India. Experienced Pandits for Griha Pravesh, Satyanarayan & more."
            })
          }}
        />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
