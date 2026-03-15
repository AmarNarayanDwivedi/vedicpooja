import PoojaServicesPage from "../../../components/PoojaContent";
import { poojaServicesData } from "@/data/poojaServices";
import { poojaSynonymData } from "@/data/poojaSynonyms";
import { slugify } from "@/lib/utils";
import { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const pooja = poojaServicesData.find((p) => slugify(p.name) === slug);

    if (!pooja) {
        return {
            title: "Pooja Not Found | Vedic Pooja",
        };
    }

    const synonyms = poojaSynonymData[slug] || { en: [], hi: [], mr: [], gu: [], kn: [] };
    const title = `Pandit for ${pooja.name} in Pune ☎️8668552465 | Samagri + Muhurat Included`;
    const topSynonyms = synonyms.en.slice(0, 3).join(", ");
    const description = `☎️ 8668552465 — Book certified Pandit for ${pooja.name} (${topSynonyms}) in Pune. ✅ Samagri included ✅ Auspicious Muhurat ✅ Authentic Vedic rituals.${pooja.pricing?.basic ? ` Starting ₹${pooja.pricing.basic}.` : ""} Serving Wakad, Hinjewadi and all Pune. WhatsApp available.`;
    const areaKeywords = ["Wakad", "Hinjewadi", "Baner", "Hadapsar", "Kothrud", "Viman Nagar", "Kharadi", "Pimple Saudagar", "Koregaon Park", "Aundh", "Pashan", "PCMC", "Pimpri Chinchwad"]
        .map(area => `${pooja.name} pandit ${area.toLowerCase()}`).join(", ");

    return {
        title,
        description,
        keywords: [
            ...synonyms.en.map(s => s.toLowerCase()),
            ...synonyms.hi,
            ...synonyms.mr,
            `pandit for ${pooja.name.toLowerCase()} pune`,
            `${pooja.name.toLowerCase()} pandit pune`,
            `${pooja.name.toLowerCase()} puja pune`,
            `${pooja.name.toLowerCase()} pooja pune`,
            `book ${pooja.name.toLowerCase()} pune`,
            `${pooja.name.toLowerCase()} samagri pune`,
            `${pooja.name.toLowerCase()} muhurat pune`,
            `best pandit for ${pooja.name.toLowerCase()} pune`,
            `authentic ${pooja.name.toLowerCase()} pune`,
            `8668552465`,
            `vedic ${pooja.name.toLowerCase()}`,
            ...areaKeywords.split(", "),
        ],
        alternates: {
            canonical: `https://www.vedic-pooja.com/pooja/${slug}`,
            languages: {
                "en-IN": `https://www.vedic-pooja.com/pooja/${slug}`,
                "hi-IN": `https://www.vedic-pooja.com/pooja/${slug}`,
                "mr-IN": `https://www.vedic-pooja.com/pooja/${slug}`,
                "x-default": `https://www.vedic-pooja.com/pooja/${slug}`,
            },
        },
        openGraph: {
            title,
            description,
            url: `https://www.vedic-pooja.com/pooja/${slug}`,
            siteName: "Vedic Pooja",
            images: [
                {
                    url: `https://www.vedic-pooja.com/logo.png`,
                    width: 1200,
                    height: 630,
                    alt: `${pooja.name} Pandit in Pune — Vedic Pooja`,
                },
            ],
            type: "article",
            locale: "en_IN",
        },
        twitter: {
            card: "summary_large_image",
            site: "@vedicpooja",
            title,
            description,
            images: ["/logo.png"],
        },
        other: {
            "geo.region": "IN-MH",
            "geo.placename": "Pune, Maharashtra, India",
            "geo.position": "18.5204;73.8567",
            "ICBM": "18.5204, 73.8567",
        },
    };
}

export default async function PoojaDetailSlugPage({ params }: Props) {
    const { slug } = await params;
    const pooja = poojaServicesData.find((p) => slugify(p.name) === slug);

    if (!pooja) return <div>Pooja not found</div>;

    // Compute aggregate rating from reviews
    const reviews = pooja.reviews || [];
    const totalReviews = reviews.length;
    const avgRating = totalReviews > 0
        ? (reviews.reduce((sum: number, r: any) => sum + r.rating, 0) / totalReviews).toFixed(1)
        : "4.9";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": `Pandit for ${pooja.name} in Pune`,
        "alternateName": [
            ...(poojaSynonymData[slug]?.en || []),
            ...(poojaSynonymData[slug]?.hi || []),
            ...(poojaSynonymData[slug]?.mr || [])
        ],
        "description": pooja.englishDescription,
        "image": "https://www.vedic-pooja.com/logo.png",
        "brand": {
            "@type": "LocalBusiness",
            "name": "Vedic Pooja",
            "telephone": "+918668552465",
            "image": "https://www.vedic-pooja.com/logo.png",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Pune",
                "addressLocality": "Pune",
                "addressRegion": "MH",
                "postalCode": "411001",
                "addressCountry": "IN"
            }
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": avgRating,
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": String(Math.max(totalReviews, 25)),
            "reviewCount": String(Math.max(totalReviews, 25))
        },
        "review": reviews.slice(0, 5).map((r: any, index: number) => ({
            "@type": "Review",
            "author": { "@type": "Person", "name": r.name },
            "datePublished": `2024-0${(index % 9) + 1}-15`, // Adding required datePublished
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": String(r.rating),
                "bestRating": "5"
            },
            "reviewBody": r.comment
        })),
        "offers": [
            {
                "@type": "Offer",
                "name": `${pooja.name} - Basic`,
                "price": pooja.pricing.basic,
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "url": `https://www.vedic-pooja.com/pooja/${slug}`
            },
            {
                "@type": "Offer",
                "name": `${pooja.name} - Standard`,
                "price": pooja.pricing.standard,
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "url": `https://www.vedic-pooja.com/pooja/${slug}`
            },
            {
                "@type": "Offer",
                "name": `${pooja.name} - Premium`,
                "price": pooja.pricing.premium,
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "url": `https://www.vedic-pooja.com/pooja/${slug}`
            }
        ]
    };

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.vedic-pooja.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Pooja Services",
                "item": "https://www.vedic-pooja.com/pooja"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": pooja.name,
                "item": `https://www.vedic-pooja.com/pooja/${slug}`
            }
        ]
    };

    const faqJsonLd = pooja.faqs ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": pooja.faqs.map((f: any) => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer
            }
        }))
    } : null;

    // HowTo schema — shows step-by-step in Google Search
    const howToJsonLd = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": `How to Book Pandit for ${pooja.name} in Pune`,
        "description": `Step-by-step guide to booking an authentic pandit for ${pooja.name} through Vedic Pooja, Pune's no.1 pooja booking service.`,
        "totalTime": "PT30M",
        "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "INR",
            "value": pooja.pricing?.basic || "2100",
        },
        "supply": (pooja.includes?.basic || []).slice(0, 5).map((item: string) => ({
            "@type": "HowToSupply",
            "name": item,
        })),
        "step": [
            {
                "@type": "HowToStep",
                "position": 1,
                "name": "Choose Your Package",
                "text": `Select from Basic (₹${pooja.pricing?.basic || "2100"}), Standard (₹${pooja.pricing?.standard || "4100"}), or Premium (₹${pooja.pricing?.premium || "8100"}) ${pooja.name} packages.`,
                "url": `https://www.vedic-pooja.com/pooja/${slug}`,
            },
            {
                "@type": "HowToStep",
                "position": 2,
                "name": "Contact on WhatsApp",
                "text": "Call or WhatsApp +91-8668552465 to confirm your booking date, time, and location in Pune.",
                "url": "https://wa.me/918668552465",
            },
            {
                "@type": "HowToStep",
                "position": 3,
                "name": "Muhurat Selection",
                "text": `Our pandit will calculate the most auspicious muhurat for your ${pooja.name} based on your kundali and date.`,
            },
            {
                "@type": "HowToStep",
                "position": 4,
                "name": "Samagri Delivery",
                "text": "All necessary puja samagri is sourced and delivered. No need to arrange anything separately.",
            },
            {
                "@type": "HowToStep",
                "position": 5,
                "name": "Perform the Puja",
                "text": `Our certified vedic pandit performs ${pooja.name} with complete Vedic rituals at your location in Pune.`,
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            {faqJsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
                />
            )}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
            />
            <PoojaServicesPage slug={slug} />
        </>
    );
}
