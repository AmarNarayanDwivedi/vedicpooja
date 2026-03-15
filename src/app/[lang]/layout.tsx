import { Metadata } from "next";
import { seoTranslations, SUPPORTED_LANGS, SupportedLang } from "@/data/seoTranslations";
import { notFound } from "next/navigation";

interface Props {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as SupportedLang)) return {};
  const t = seoTranslations[lang as SupportedLang];
  return {
    other: {
      "content-language": lang,
    },
  };
}

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as SupportedLang)) notFound();
  return <>{children}</>;
}
