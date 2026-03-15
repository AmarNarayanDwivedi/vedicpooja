import { Metadata } from "next";
import { seoTranslations, SUPPORTED_LANGS, SupportedLang } from "@/data/seoTranslations";
import { notFound } from "next/navigation";
import PoojaServicesPage from "@/components/PoojaContent";
import { poojaServicesData } from "@/data/poojaServices";
import { slugify } from "@/lib/utils";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as SupportedLang)) return {};
  const t = seoTranslations[lang as SupportedLang];
  const slug = lang;

  // Build hreflang alternates
  const languages: Record<string, string> = {
    "en": "https://www.vedic-pooja.com/pooja",
    "x-default": "https://www.vedic-pooja.com/pooja",
  };
  SUPPORTED_LANGS.forEach((l) => {
    languages[l] = `https://www.vedic-pooja.com/${l}/pooja`;
  });

  return {
    title: t.pooja.listTitle,
    description: t.pooja.listDesc,
    alternates: {
      canonical: `https://www.vedic-pooja.com/${lang}/pooja`,
      languages,
    },
    openGraph: {
      title: t.pooja.listTitle,
      description: t.pooja.listDesc,
      url: `https://www.vedic-pooja.com/${lang}/pooja`,
      siteName: "Vedic Pooja",
      images: [{ url: "https://www.vedic-pooja.com/logo.png", width: 1200, height: 630 }],
      locale: `${lang}_IN`,
      type: "website",
    },
    other: {
      "geo.region": "IN-MH",
      "geo.placename": "Pune, Maharashtra, India",
      "geo.position": "18.5204;73.8567",
      "ICBM": "18.5204, 73.8567",
    },
  };
}

export default async function LangPoojaPage({ params }: Props) {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as SupportedLang)) notFound();

  const t = seoTranslations[lang as SupportedLang];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": t.pooja.listTitle,
    "description": t.pooja.listDesc,
    "url": `https://www.vedic-pooja.com/${lang}/pooja`,
    "numberOfItems": poojaServicesData.length,
    "itemListElement": poojaServicesData.map((pooja, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": pooja.name,
      "url": `https://www.vedic-pooja.com/${lang}/pooja/${slugify(pooja.name)}`,
    })),
    "inLanguage": lang
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.vedic-pooja.com" },
      { "@type": "ListItem", "position": 2, "name": t.pooja.listTitle, "item": `https://www.vedic-pooja.com/${lang}/pooja` },
    ],
    "inLanguage": lang
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PoojaServicesPage />
    </>
  );
}
