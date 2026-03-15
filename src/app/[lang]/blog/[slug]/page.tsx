import { Metadata } from "next";
import { seoTranslations, SUPPORTED_LANGS, SupportedLang } from "@/data/seoTranslations";
import { notFound } from "next/navigation";
import { allPosts as blogPosts } from "@/data/blogPosts";
import BlogPostContent from "@/app/blog/[slug]/page";

interface Props {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  SUPPORTED_LANGS.forEach((lang) => {
    blogPosts.forEach((post) => {
      params.push({ lang, slug: post.slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!SUPPORTED_LANGS.includes(lang as SupportedLang)) return {};
  const post = blogPosts.find((p: any) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  const t = seoTranslations[lang as SupportedLang];
  
  // Since we don't have full native translations for all blog content yet,
  // we use the expert authority title in native script for the metadata
  const authorName = "Pandit Aditya Narayan Ji";
  const title = `${(post.title as any)[lang] || (post.title as any).en} | Expert Guide by ${authorName} | Vedic Pooja`;
  const description = `${(post.excerpt as any)[lang] || (post.excerpt as any).en}. ☎️ 8668552465`;

  const languages: Record<string, string> = {
    "en": `https://www.vedic-pooja.com/blog/${slug}`,
    "x-default": `https://www.vedic-pooja.com/blog/${slug}`,
  };
  SUPPORTED_LANGS.forEach((l) => {
    languages[l] = `https://www.vedic-pooja.com/${l}/blog/${slug}`;
  });

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.vedic-pooja.com/${lang}/blog/${slug}`,
      languages,
    },
    openGraph: {
      title,
      description,
      url: `https://www.vedic-pooja.com/${lang}/blog/${slug}`,
      siteName: "Vedic Pooja",
      images: [{ url: "https://www.vedic-pooja.com/logo.png", width: 1200, height: 630 }],
      locale: `${lang}_IN`,
      type: "article",
    },
  };
}

export default async function LangBlogSlugPage({ params }: Props) {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as SupportedLang)) notFound();
  
  // The client component uses useParams() so it doesn't need props passed
  return <BlogPostContent />;
}
