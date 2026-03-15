import { Metadata } from "next";
import { seoTranslations, SUPPORTED_LANGS, SupportedLang } from "@/data/seoTranslations";
import { notFound } from "next/navigation";
import PoojaServicesPage from "@/components/PoojaContent";
import { poojaServicesData } from "@/data/poojaServices";
import { poojaSynonymData } from "@/data/poojaSynonyms";
import { slugify } from "@/lib/utils";

interface Props {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  SUPPORTED_LANGS.forEach((lang) => {
    poojaServicesData.forEach((pooja) => {
      params.push({ lang, slug: slugify(pooja.name) });
    });
  });
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!SUPPORTED_LANGS.includes(lang as SupportedLang)) return {};
  const pooja = poojaServicesData.find((p) => slugify(p.name) === slug);
  if (!pooja) return { title: "Pooja Not Found" };

  const t = seoTranslations[lang as SupportedLang];
  const price = String(pooja.pricing?.basic || "2100");
  const synonyms = poojaSynonymData[slug] || { en: [], hi: [], mr: [], gu: [], kn: [] };
  const localizedSynonyms = synonyms[lang as SupportedLang]?.slice(0, 2).join(", ") || "";
  const title = t.pooja.slugTitle(pooja.name, price);
  const baseDesc = t.pooja.slugDesc(pooja.name, price);
  const description = localizedSynonyms ? `${baseDesc} (${localizedSynonyms})` : baseDesc;

  const languages: Record<string, string> = {
    "en": `https://www.vedic-pooja.com/pooja/${slug}`,
    "x-default": `https://www.vedic-pooja.com/pooja/${slug}`,
  };
  SUPPORTED_LANGS.forEach((l) => {
    languages[l] = `https://www.vedic-pooja.com/${l}/pooja/${slug}`;
  });

  const localizedKeywords = synonyms[lang as SupportedLang] || [];
  const otherKeywords = [
    ...(lang !== 'en' ? synonyms.en : []),
    ...(lang !== 'hi' ? synonyms.hi : []),
    ...(lang !== 'mr' ? synonyms.mr : []),
  ].flat().slice(0, 10);

  return {
    title,
    description,
    keywords: [
      ...localizedKeywords,
      ...otherKeywords,
      `${pooja.name} ${lang}`,
      `pandit for ${pooja.name} ${lang}`,
      `book ${pooja.name} ${lang} pune`,
    ],
    alternates: {
      canonical: `https://www.vedic-pooja.com/${lang}/pooja/${slug}`,
      languages,
    },
    openGraph: {
      title,
      description,
      url: `https://www.vedic-pooja.com/${lang}/pooja/${slug}`,
      siteName: "Vedic Pooja",
      images: [{ url: "https://www.vedic-pooja.com/logo.png", width: 1200, height: 630, alt: title }],
      locale: `${lang}_IN`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      site: "@vedicpooja",
      title,
      description,
    },
    other: {
      "geo.region": "IN-MH",
      "geo.placename": "Pune, Maharashtra, India",
      "geo.position": "18.5204;73.8567",
      "ICBM": "18.5204, 73.8567",
    },
  };
}

export default async function LangPoojaSlugPage({ params }: Props) {
  const { lang, slug } = await params;
  if (!SUPPORTED_LANGS.includes(lang as SupportedLang)) notFound();
  const pooja = poojaServicesData.find((p) => slugify(p.name) === slug);
  if (!pooja) notFound();

  const t = seoTranslations[lang as SupportedLang];
  const price = String(pooja.pricing?.basic || "2100");

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.vedic-pooja.com" },
      { "@type": "ListItem", "position": 2, "name": t.pooja.listTitle, "item": `https://www.vedic-pooja.com/${lang}/pooja` },
      { "@type": "ListItem", "position": 3, "name": pooja.name, "item": `https://www.vedic-pooja.com/${lang}/pooja/${slug}` },
    ],
    "inLanguage": lang
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": t.pooja.slugTitle(pooja.name, price),
    "alternateName": [
      ...(poojaSynonymData[slug]?.[lang as SupportedLang] || []),
      ...(poojaSynonymData[slug]?.en || []),
      ...(poojaSynonymData[slug]?.hi || [])
    ],
    "description": t.pooja.slugDesc(pooja.name, price),
    "inLanguage": lang,
    "brand": { "@type": "LocalBusiness", "name": "Vedic Pooja", "telephone": "+918668552465" },
    "offers": [
      { "@type": "Offer", "price": pooja.pricing?.basic, "priceCurrency": "INR", "availability": "https://schema.org/InStock" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <PoojaServicesPage slug={slug} />
    </>
  );
}
