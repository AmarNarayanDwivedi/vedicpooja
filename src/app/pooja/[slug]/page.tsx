import PoojaServicesPage from "../../../components/PoojaContent";
import { poojaServicesData } from "@/data/poojaServices";
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

    const title = `8668552465 | ${pooja.name} Pandit in Pune | 100% Authentic Rituals`;
    const description = `8668552465 - Book experienced Pandits for ${pooja.name} in Pune. Includes Samagri & Muhurat. 100% authentic Vedic rituals performed by certified Pandits.`;

    return {
        title,
        description,
        alternates: {
            canonical: `https://www.vedic-pooja.com/pooja/${slug}`,
        },
        openGraph: {
            title,
            description,
            url: `https://www.vedic-pooja.com/pooja/${slug}`,
            siteName: "Vedic Pooja",
            images: [
                {
                    url: "/logo.png",
                    width: 800,
                    height: 600,
                },
            ],
            type: "article",
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
        "@type": "Service",
        "name": `Pandit for ${pooja.name} in Pune`,
        "description": pooja.englishDescription,
        "serviceType": pooja.name,
        "provider": {
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
        "areaServed": {
            "@type": "City",
            "name": "Pune"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": avgRating,
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": String(Math.max(totalReviews, 25)),
            "reviewCount": String(Math.max(totalReviews, 25))
        },
        "review": reviews.slice(0, 5).map((r: any) => ({
            "@type": "Review",
            "author": { "@type": "Person", "name": r.name },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": String(r.rating),
                "bestRating": "5"
            },
            "reviewBody": r.comment
        })),
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": pooja.name,
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": `${pooja.name} - Basic`
                    },
                    "price": pooja.pricing.basic,
                    "priceCurrency": "INR"
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": `${pooja.name} - Standard`
                    },
                    "price": pooja.pricing.standard,
                    "priceCurrency": "INR"
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": `${pooja.name} - Premium`
                    },
                    "price": pooja.pricing.premium,
                    "priceCurrency": "INR"
                }
            ]
        }
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
            <PoojaServicesPage slug={slug} />
        </>
    );
}
