import PoojaServicesPage from "../../components/PoojaContent";
import { poojaServicesData } from "@/data/poojaServices";
import { slugify } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book Pandit for Pooja in Pune ☎️8668552465 | 27+ Puja Types | Same Day Available",
    description: "☎️ 8668552465 — Browse all 27+ Vedic pooja services in Pune. Griha Pravesh, Satyanarayan, Rudrabhishek, Mundan, Kaal Sarp Dosh & more. Samagri included. Certified pandits. Serving all Pune areas.",
    keywords: [
        "pooja booking pune", "pandit in pune", "book pandit pune",
        "vedic pandit pune", "all pooja services pune",
        "griha pravesh pandit pune", "satyanarayan pandit pune",
        "vastu shanti pandit pune", "mundan pandit pune",
        "naamkaran pandit pune", "rudrabhishek pandit pune",
        "kaal sarp dosh puja pune", "navagraha shanti pune",
        "ganesh puja pune", "lakshmi puja pune",
        "mahamrityunjaya jaap pune", "online puja services india",
        "pandit near me pune", "8668552465", "9225509555",
        // Area keywords
        "pandit wakad", "pandit hinjewadi", "pandit baner", "pandit hadapsar",
        "pandit kothrud", "pandit viman nagar", "pandit kharadi",
        "pandit pimple saudagar", "pandit koregaon park", "pandit aundh",
    ],
    alternates: {
        canonical: "https://www.vedic-pooja.com/pooja",
        languages: {
            "en-IN": "https://www.vedic-pooja.com/pooja",
            "hi-IN": "https://www.vedic-pooja.com/pooja",
            "mr-IN": "https://www.vedic-pooja.com/pooja",
            "x-default": "https://www.vedic-pooja.com/pooja",
        },
    },
    openGraph: {
        title: "8668552465 | All Pooja Services in Pune | Vedic Pooja",
        description: "Book authentic pandits for 27+ pooja types in Pune. Call 8668552465.",
        url: "https://www.vedic-pooja.com/pooja",
        siteName: "Vedic Pooja",
        images: [{ url: "https://www.vedic-pooja.com/logo.png", width: 1200, height: 630 }],
        locale: "en_IN",
        type: "website",
    },
};

export default function PoojaPage() {
    // ItemList schema for all poojas
    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Book Pandit for All Poojas in Pune — Vedic Pooja",
        "description": "Complete list of 100% authentic Vedic pooja services available in Pune. Call 8668552465 to book.",
        "url": "https://www.vedic-pooja.com/pooja",
        "numberOfItems": poojaServicesData.length,
        "itemListElement": poojaServicesData.map((pooja, idx) => ({
            "@type": "ListItem",
            "position": idx + 1,
            "name": `Pandit for ${pooja.name} in Pune`,
            "url": `https://www.vedic-pooja.com/pooja/${slugify(pooja.name)}`,
            "description": pooja.englishDescription?.substring(0, 100),
        })),
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.vedic-pooja.com" },
            { "@type": "ListItem", "position": 2, "name": "Pooja Services", "item": "https://www.vedic-pooja.com/pooja" },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <PoojaServicesPage />
        </>
    );
}
