import { Metadata } from "next";
import { seoTranslations, SUPPORTED_LANGS, SupportedLang } from "@/data/seoTranslations";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

const HomePageView = dynamic(() => import("@/app/page"), { ssr: true });

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
    "en": "https://www.vedic-pooja.com",
    "x-default": "https://www.vedic-pooja.com",
  };
  SUPPORTED_LANGS.forEach((l) => {
    languages[l] = `https://www.vedic-pooja.com/${l}`;
  });

  return {
    title: t.home.title,
    description: t.home.desc,
    alternates: {
      canonical: `https://www.vedic-pooja.com/${lang}`,
      languages,
    },
    openGraph: {
      title: t.home.title,
      description: t.home.desc,
      url: `https://www.vedic-pooja.com/${lang}`,
      siteName: "Vedic Pooja",
      images: [{ url: "https://www.vedic-pooja.com/logo.png", width: 1200, height: 630 }],
      locale: `${lang}_IN`,
      type: "website",
    },
  };
}

export default async function LangHomePage({ params }: Props) {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as SupportedLang)) notFound();
  return <HomePageView />;
}
