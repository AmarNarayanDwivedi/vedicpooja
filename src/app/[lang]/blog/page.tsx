import { Metadata } from "next";
import { seoTranslations, SUPPORTED_LANGS, SupportedLang } from "@/data/seoTranslations";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

const BlogPage = dynamic(() => import("@/app/blog/page"), { ssr: true });

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
    "en": "https://www.vedic-pooja.com/blog",
    "x-default": "https://www.vedic-pooja.com/blog",
  };
  SUPPORTED_LANGS.forEach((l) => {
    languages[l] = `https://www.vedic-pooja.com/${l}/blog`;
  });

  return {
    title: t.blog.title,
    description: t.blog.desc,
    alternates: {
      canonical: `https://www.vedic-pooja.com/${lang}/blog`,
      languages,
    },
    openGraph: {
      title: t.blog.title,
      description: t.blog.desc,
      url: `https://www.vedic-pooja.com/${lang}/blog`,
      siteName: "Vedic Pooja",
      images: [{ url: "https://www.vedic-pooja.com/logo.png", width: 1200, height: 630 }],
      locale: `${lang}_IN`,
      type: "website",
    },
  };
}

import { allPosts } from "@/data/blogPosts";

export default async function LangBlogPage({ params }: Props) {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as SupportedLang)) notFound();
  
  const t = seoTranslations[lang as SupportedLang];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.vedic-pooja.com" },
      { "@type": "ListItem", "position": 2, "name": t.blog.title, "item": `https://www.vedic-pooja.com/${lang}/blog` },
    ],
    "inLanguage": lang
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": t.blog.title,
    "description": t.blog.desc,
    "numberOfItems": allPosts.length,
    "itemListElement": allPosts.map((post, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": (post.title as any)[lang] || (post.title as any).en,
      "url": `https://www.vedic-pooja.com/${lang}/blog/${post.slug}`
    })),
    "inLanguage": lang
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <BlogPage />
    </>
  );
}
