import { Metadata } from "next";
import { seoTranslations, SUPPORTED_LANGS, SupportedLang } from "@/data/seoTranslations";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

const AstrologyPageView = dynamic(() => import("@/app/astrology/page"), { ssr: true });

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

  const languages: Record<string, string> = {
    "en": "https://www.vedic-pooja.com/astrology",
    "x-default": "https://www.vedic-pooja.com/astrology",
  };
  SUPPORTED_LANGS.forEach((l) => {
    languages[l] = `https://www.vedic-pooja.com/${l}/astrology`;
  });

  return {
    title: t.astro.title,
    description: t.astro.desc,
    alternates: {
      canonical: `https://www.vedic-pooja.com/${lang}/astrology`,
      languages,
    },
    openGraph: {
      title: t.astro.title,
      description: t.astro.desc,
      url: `https://www.vedic-pooja.com/${lang}/astrology`,
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

export default async function LangAstrologyPage({ params }: Props) {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as SupportedLang)) notFound();
  
  const t = seoTranslations[lang as SupportedLang];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.vedic-pooja.com" },
      { "@type": "ListItem", "position": 2, "name": t.astro.title.split('|')[0].trim(), "item": `https://www.vedic-pooja.com/${lang}/astrology` },
    ],
    "inLanguage": lang
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AstrologyPageView />
    </>
  );
}
