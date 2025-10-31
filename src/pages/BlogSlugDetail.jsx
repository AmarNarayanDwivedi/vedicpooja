// src/pages/BlogSlugDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { allPosts, translations } from "../data/blogPosts.js";
import { useTranslation as useGlobalLang } from "../context/LanguageContext.jsx";
import SEOMetadata from "@/components/SEOMetadata.jsx";

// --- Helper Components (Copied from Blog.jsx) ---
const Icon = ({ path, className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d={path} />
  </svg>
);
const ICONS = {
  whatsapp:
    "M16.75,13.96C17,14.26 17.2,14.74 16.9,15.23L16.15,16.32C15.9,16.81 15.25,17.15 14.68,16.96C13.8,16.65 12.33,16.03 10.96,14.73C9.59,13.42 8.93,11.91 8.69,11.07C8.45,10.23 8.8,9.58 9.09,9.29L10,8.35C10.3,8.05 10.5,7.74 10.4,7.37L9.54,5.43C9.34,5 8.79,4.74 8.39,4.94L7.2,5.47C6.6,5.77 6.16,6.38 6.27,7.11C6.41,8.06 7.03,9.73 8.5,11.25C10.21,13 12.03,13.73 13.04,13.93C13.77,14.04 14.43,13.6 14.73,13L15.29,12.21C15.69,11.81 16.34,11.66 16.74,11.86L18.68,12.72C19.08,12.92 19.18,13.53 18.98,13.93L18.4,14.8C18.1,15.1 17.9,15.3 17.5,15.2C17.1,15.1 16.85,14.86 16.75,13.96M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22C13.66,22 15.26,21.54 16.65,20.73L21.41,22L22,17.1C21.5,15.75 22,14.15 22,12A10,10 0 0,0 12,2Z",
  arrowLeft:
    "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z",
};
const MarkdownRenderer = ({ content }) => {
  if (!content) return null;
  const formatLine = (line) => {
    line = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    return { __html: line };
  };
  const lines = content.trim().split("\n");
  const elements = [];
  let listItems = [];
  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul
          key={`ul-${elements.length}`}
          className="list-disc list-inside space-y-2 mb-4"
        >
          {listItems}
        </ul>
      );
      listItems = [];
    }
  };
  lines.forEach((line, index) => {
    if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h3
          key={index}
          className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-6 mb-3 border-l-4 border-orange-500 pl-4"
        >
          {line.substring(4)}
        </h3>
      );
    } else if (line.startsWith("* ")) {
      listItems.push(
        <li
          key={index}
          dangerouslySetInnerHTML={formatLine(line.substring(2))}
        />
      );
    } else if (line.trim() === "") {
      flushList();
    } else {
      flushList();
      elements.push(
        <p
          key={index}
          className="mb-4 leading-relaxed"
          dangerouslySetInnerHTML={formatLine(line)}
        />
      );
    }
  });
  flushList();
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      {elements}
    </div>
  );
};
// --- End Helper Components ---

const BlogSlugDetail = () => {
  const { slug } = useParams();
  const { language } = useGlobalLang();
  const lang = translations[language] ? language : "en";
  const t = translations[lang];

  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="text-center p-10">
        <SEOMetadata
          title="Post Not Found"
          description="This blog post was not found."
        />
        <h1 className="text-2xl font-bold text-[#800000]">Post Not Found</h1>
        <Link to="/blog" className="text-[#E67E22] hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  // --- DYNAMIC SEO METADATA ---
  const metaProps = {
    title: `${post.title[lang]} | Vedic Pooja Blog | 8668552465`,
    description: `${post.excerpt[lang].substring(
      0,
      110
    )}... Read 100% authentic Vedic info on Pune's no.1 pooja website. Call 8668552465.`,
    keywords: `blog, ${post.tags.join(", ")}, ${post.title[lang]
      .split(" ")
      .join(", ")}, 100% authentic vedic pooja, pune, 8668552465`,
    canonical: `https://www.vedic-pooja.com/blog/${post.slug}`,
    ogImage: `https://www.vedic-pooja.com${post.image.replace("@", "")}`,
    ogType: "article",
  };

  const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `Check out this article: ${post.title[lang]} - https://www.vedic-pooja.com/blog/${post.slug}`
  )}`;
  const consultUrl = `https://wa.me/8668552465?text=${encodeURIComponent(
    `Namaste 🙏 I want to book a consultation regarding: ${post.title[lang]}. Please guide me.`
  )}`;

  const astrologyBackgroundStyle = {
    backgroundColor: "#FFF7E6",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23E67E22' fill-opacity='0.25'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/svg%3E")`,
  };

  return (
    <div
      style={astrologyBackgroundStyle}
      className="dark:bg-slate-900 dark:!bg-none min-h-screen text-slate-800 dark:text-slate-200 transition-colors duration-300"
    >
      <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;500;600&display=swap');
          .font-playfair { font-family: 'Playfair Display', serif; }
          .font-poppins { font-family: 'Poppins', sans-serif; }
        `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <SEOMetadata {...metaProps} />
        <Link
          to="/blog"
          className="flex items-center gap-2 px-4 py-2 mb-6 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg shadow-sm hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 font-poppins"
        >
          <Icon path={ICONS.arrowLeft} />
          {t.backToHub}
        </Link>
        <main className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg ring-1 ring-slate-200 dark:ring-slate-700 overflow-hidden">
          <img
            src={post.image}
            alt={`${post.title[lang]} - Vedic astrology and pooja guidance in Pune`}
            loading="lazy"
            className="w-full h-64 md:h-80 object-cover"
          />
          <article className="p-6 md:p-10 font-poppins">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight mb-2 font-playfair">
              {post.title[lang]}
            </h2>
            <div className="text-sm text-slate-500 dark:text-slate-400 mb-8">
              <span>{t.publishedOn} October 30, 2025</span> &middot;{" "}
              <span>
                {post.readTime.split(" ")[0]} min {t.readTime}
              </span>
            </div>

            <MarkdownRenderer content={post.content[lang]} />

            <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-700">
              <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                <a
                  href={consultUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 dark:focus:ring-offset-slate-900"
                >
                  <Icon path={ICONS.whatsapp} className="w-6 h-6" />
                  Book Consultation
                </a>
                <Link
                  to="/blog"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg shadow-sm hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-200"
                >
                  ← Back to Blog
                </Link>
              </div>
              <div className="mt-6 text-center">
                <a
                  href={shareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-slate-900"
                >
                  <Icon path={ICONS.whatsapp} className="w-6 h-6" />
                  <span>{t.shareOnWhatsApp}</span>
                </a>
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
};

export default BlogSlugDetail;
