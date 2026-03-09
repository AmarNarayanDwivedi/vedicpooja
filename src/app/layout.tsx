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
        {/* Schema 1: LocalBusiness with AggregateRating (triggers ⭐ star ratings in Google) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "ReligiousOrganization"],
              "name": "Vedic Pooja",
              "image": "https://www.vedic-pooja.com/logo.png",
              "@id": "https://www.vedic-pooja.com",
              "url": "https://www.vedic-pooja.com",
              "telephone": ["+918668552465", "+919225509555"],
              "priceRange": "₹2100 - ₹51000",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Pune City",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 18.5204,
                "longitude": 73.8567
              },
              "areaServed": [
                { "@type": "City", "name": "Pune" },
                "Wakad", "Hinjewadi", "Baner", "Hadapsar", "Viman Nagar", "Kharadi", "Kothrud", "Pimple Saudagar", "Aundh", "Ravet", "Magarpatta", "Shivaji Nagar", "Deccan", "PCMC", "Pimpri-Chinchwad", "Koregaon Park", "Kalyani Nagar", "Pashan", "Sus", "Bavdhan", "Warje", "Katraj", "Sinhagad Road", "Kondhwa"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "bestRating": "5",
                "worstRating": "1",
                "ratingCount": "256",
                "reviewCount": "256"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Pooja Services in Pune",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pandit for Griha Pravesh" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pandit for Satyanarayan Pooja" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pandit for Marriage/Vivah" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pandit for Vastu Shanti" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pandit for Bhoomi Pujan" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pandit for Rudrabhishek" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pandit for Ganesh Puja" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pandit for Nav Chandi Yagna" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pandit for Rudra Yagna" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pandit for Kaal Sarp Dosh Shanti" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pandit for Navagraha Shanti" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pandit for Maha Lakshmi Puja" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Online Havan & Pooja" } }
                ]
              },
              "sameAs": ["https://www.instagram.com/adityanarayan3081"],
              "description": "Pune's #1 Vedic Pooja Service. Book experienced Pandits for 500+ types of Pujas across Pune. ⭐ 4.9 rated. Call 8668552465."
            })
          }}
        />

        {/* Schema 2: WebSite (triggers sitelinks searchbox in Google) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Vedic Pooja",
              "alternateName": "Vedic Pooja Pune",
              "url": "https://www.vedic-pooja.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.vedic-pooja.com/pooja?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Schema 3: SiteNavigationElement (tells Google your key sub-pages for sitelinks) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              "name": "Vedic Pooja Navigation",
              "hasPart": [
                { "@type": "WebPage", "name": "Pandit for Griha Pravesh", "url": "https://www.vedic-pooja.com/pooja/griha-pravesh-pooja" },
                { "@type": "WebPage", "name": "Pandit for Satyanarayan Puja", "url": "https://www.vedic-pooja.com/pooja/satyanarayan-puja" },
                { "@type": "WebPage", "name": "Pandit for Shubh Vivah (Marriage)", "url": "https://www.vedic-pooja.com/pooja/shubh-vivah-marriage-puja" },
                { "@type": "WebPage", "name": "Pandit for Bhoomi Pujan", "url": "https://www.vedic-pooja.com/pooja/bhoomi-pujan" },
                { "@type": "WebPage", "name": "Pandit for Vastu Dosh Nivaran", "url": "https://www.vedic-pooja.com/pooja/vastu-dosh-nivaran" },
                { "@type": "WebPage", "name": "Pandit for Rudrabhishek", "url": "https://www.vedic-pooja.com/pooja/rudrabhishek" },
                { "@type": "WebPage", "name": "Pandit for Ganesh Puja", "url": "https://www.vedic-pooja.com/pooja/ganesh-puja" },
                { "@type": "WebPage", "name": "Pandit for Nav Chandi & Chandi Path", "url": "https://www.vedic-pooja.com/pooja/nav-chandi--chandi-path" },
                { "@type": "WebPage", "name": "Pandit for Rudra Yagna", "url": "https://www.vedic-pooja.com/pooja/rudra-yagna" },
                { "@type": "WebPage", "name": "Pandit for Kaal Sarp Dosh Shanti", "url": "https://www.vedic-pooja.com/pooja/kaal-sarp-dosh-shanti" },
                { "@type": "WebPage", "name": "Pandit for Navagraha Shanti", "url": "https://www.vedic-pooja.com/pooja/navagraha-shanti" },
                { "@type": "WebPage", "name": "Pandit for Maha Lakshmi Puja", "url": "https://www.vedic-pooja.com/pooja/maha-lakshmi-puja" },
                { "@type": "WebPage", "name": "Pandit for Baglamukhi Puja", "url": "https://www.vedic-pooja.com/pooja/baglamukhi-puja" },
                { "@type": "WebPage", "name": "Pandit for Mahamrityunjaya Jaap", "url": "https://www.vedic-pooja.com/pooja/mahamrityunjaya-jaap" },
                { "@type": "WebPage", "name": "Pandit for Sunderkand Path", "url": "https://www.vedic-pooja.com/pooja/sunderkand-path" },
                { "@type": "WebPage", "name": "Pandit for Akhand Ramayan Path", "url": "https://www.vedic-pooja.com/pooja/akhand-ramayan-path" },
                { "@type": "WebPage", "name": "Online Havan & Pooja Services", "url": "https://www.vedic-pooja.com/pooja" },
                { "@type": "WebPage", "name": "Astrology Consultation", "url": "https://www.vedic-pooja.com/astrology" }
              ]
            })
          }}
        />

        {/* Schema 4: ItemList (triggers category-style rich results like Udemy sub-links) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Pooja Services in Pune",
              "description": "Book Pandit for all types of Vedic Poojas in Pune. Call 8668552465.",
              "numberOfItems": 27,
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Pandit for Griha Pravesh Pooja", "url": "https://www.vedic-pooja.com/pooja/griha-pravesh-pooja" },
                { "@type": "ListItem", "position": 2, "name": "Pandit for Satyanarayan Puja", "url": "https://www.vedic-pooja.com/pooja/satyanarayan-puja" },
                { "@type": "ListItem", "position": 3, "name": "Pandit for Shubh Vivah (Marriage Puja)", "url": "https://www.vedic-pooja.com/pooja/shubh-vivah-marriage-puja" },
                { "@type": "ListItem", "position": 4, "name": "Pandit for Bhoomi Pujan", "url": "https://www.vedic-pooja.com/pooja/bhoomi-pujan" },
                { "@type": "ListItem", "position": 5, "name": "Pandit for Vastu Dosh Nivaran", "url": "https://www.vedic-pooja.com/pooja/vastu-dosh-nivaran" },
                { "@type": "ListItem", "position": 6, "name": "Pandit for Rudrabhishek", "url": "https://www.vedic-pooja.com/pooja/rudrabhishek" },
                { "@type": "ListItem", "position": 7, "name": "Pandit for Ganesh Puja", "url": "https://www.vedic-pooja.com/pooja/ganesh-puja" },
                { "@type": "ListItem", "position": 8, "name": "Pandit for Nav Chandi & Chandi Path", "url": "https://www.vedic-pooja.com/pooja/nav-chandi--chandi-path" },
                { "@type": "ListItem", "position": 9, "name": "Pandit for Rudra Yagna", "url": "https://www.vedic-pooja.com/pooja/rudra-yagna" },
                { "@type": "ListItem", "position": 10, "name": "Pandit for Kaal Sarp Dosh Shanti", "url": "https://www.vedic-pooja.com/pooja/kaal-sarp-dosh-shanti" },
                { "@type": "ListItem", "position": 11, "name": "Pandit for Navagraha Shanti", "url": "https://www.vedic-pooja.com/pooja/navagraha-shanti" },
                { "@type": "ListItem", "position": 12, "name": "Pandit for Maha Lakshmi Puja", "url": "https://www.vedic-pooja.com/pooja/maha-lakshmi-puja" },
                { "@type": "ListItem", "position": 13, "name": "Pandit for Durga Saptashati Path", "url": "https://www.vedic-pooja.com/pooja/durga-saptashati-path" },
                { "@type": "ListItem", "position": 14, "name": "Pandit for Baglamukhi Puja", "url": "https://www.vedic-pooja.com/pooja/baglamukhi-puja" },
                { "@type": "ListItem", "position": 15, "name": "Pandit for Mahamrityunjaya Jaap", "url": "https://www.vedic-pooja.com/pooja/mahamrityunjaya-jaap" },
                { "@type": "ListItem", "position": 16, "name": "Pandit for Mundan Sanskar", "url": "https://www.vedic-pooja.com/pooja/mundan-sanskar" },
                { "@type": "ListItem", "position": 17, "name": "Pandit for Naamkaran Sanskar", "url": "https://www.vedic-pooja.com/pooja/naamkaran-sanskar" },
                { "@type": "ListItem", "position": 18, "name": "Pandit for Sunderkand Path", "url": "https://www.vedic-pooja.com/pooja/sunderkand-path" },
                { "@type": "ListItem", "position": 19, "name": "Pandit for Akhand Ramayan Path", "url": "https://www.vedic-pooja.com/pooja/akhand-ramayan-path" },
                { "@type": "ListItem", "position": 20, "name": "Online Havan & Pooja", "url": "https://www.vedic-pooja.com/pooja" }
              ]
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
