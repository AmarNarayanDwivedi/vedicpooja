import { Metadata } from "next";
import { seoTranslations, SUPPORTED_LANGS, SupportedLang } from "@/data/seoTranslations";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

const AboutPage = dynamic(() => import("@/app/about/page"), { ssr: true });

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
    "en": "https://www.vedic-pooja.com/about",
    "x-default": "https://www.vedic-pooja.com/about",
  };
  SUPPORTED_LANGS.forEach((l) => {
    languages[l] = `https://www.vedic-pooja.com/${l}/about`;
  });

  return {
    title: t.about.title,
    description: t.about.desc,
    alternates: {
      canonical: `https://www.vedic-pooja.com/${lang}/about`,
      languages,
    },
    openGraph: {
      title: t.about.title,
      description: t.about.desc,
      url: `https://www.vedic-pooja.com/${lang}/about`,
      siteName: "Vedic Pooja",
      images: [{ url: "https://www.vedic-pooja.com/logo.png", width: 1200, height: 630 }],
      locale: `${lang}_IN`,
      type: "profile",
    },
  };
}

export default async function LangAboutPage({ params }: Props) {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as SupportedLang)) notFound();
  
  const t = seoTranslations[lang as SupportedLang];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.vedic-pooja.com" },
      { "@type": "ListItem", "position": 2, "name": t.about.title.split('|')[0].trim(), "item": `https://www.vedic-pooja.com/${lang}/about` },
    ],
    "inLanguage": lang
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Pandit Aditya Narayan Ji",
    "url": `https://www.vedic-pooja.com/${lang}/about`,
    "image": "https://www.vedic-pooja.com/logo.png",
    "jobTitle": "Vedic Pandit & Astrologer",
    "worksFor": { "@type": "Organization", "name": "Vedic Pooja" },
    "description": t.about.desc,
    "inLanguage": lang
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <AboutPage />
    </>
  );
}
