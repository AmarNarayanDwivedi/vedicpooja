// src/pages/Blog.jsx
import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link
import { allPosts, allTags, translations } from "../data/blogPosts.js"; // Import from new file
import SEOMetadata from "@/components/SEOMetadata.jsx";
import { useTranslation as useGlobalLang } from "../context/LanguageContext.jsx"; // Import global lang hook
import dailyRemediesImg from "@/assets/Blog/dailyremedies&planetarybalance.webp";

// --- Helper Components ---
const LanguageSwitcher = ({ currentLang, setLang }) => (
  <div className="flex justify-center gap-2 mb-4">
    {Object.keys(translations).map((lang) => (
      <button
        key={lang}
        onClick={() => setLang(lang)}
        className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors duration-200 uppercase ${
          currentLang === lang
            ? "bg-orange-500 text-white"
            : "bg-white/80 dark:bg-slate-800/50"
        }`}
      >
        {lang}
      </button>
    ))}
  </div>
);

// --- Page Components ---

const BlogList = ({ posts, onTagSelect, activeTag, lang }) => {
  const t = translations[lang];
  return (
    <div>
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight font-playfair">
          {t.knowledgeHub}
        </h1>
        <p className="mt-2 text-lg text-slate-500 dark:text-slate-400 font-poppins">
          {t.guide}
        </p>
      </header>

      <div className="flex justify-center flex-wrap gap-2 mb-10">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagSelect(tag)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 font-poppins ${
              activeTag === tag
                ? "bg-orange-500 text-white shadow-md"
                : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-orange-100 dark:hover:bg-slate-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg ring-1 ring-slate-200 dark:ring-slate-700 overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <img
              src={post.image}
              alt={`${post.title[lang]} - Vedic astrology and pooja guidance in Pune`}
              loading="lazy"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">
                by <span className="font-semibold">Pandit Aditya Ji</span>
              </div>
              <div className="mb-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full font-poppins"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-playfair">
                {post.title[lang]}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm flex-grow font-poppins">
                {post.excerpt[lang]}
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-slate-500 font-poppins">
                  {post.readTime}
                </span>
                {/* --- THIS IS THE CRITICAL CHANGE --- */}
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-sm font-semibold text-orange-600 dark:text-orange-400 group-hover:underline font-poppins"
                  aria-label={`Read more about ${post.title[lang]}`}
                >
                  {t.readMore} &rarr;
                </Link>
                {/* --- END CHANGE --- */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Main App Component ---
export default function Blog() {
  const [activeTag, setActiveTag] = useState("All");
  const { language: globalLanguage } = useGlobalLang(); // Get language from global context
  const [language, setLanguage] = useState(globalLanguage);

  // Sync local language with global context
  useEffect(() => {
    setLanguage(globalLanguage);
  }, [globalLanguage]);

  const filteredPosts = useMemo(() => {
    const sortedPosts = [...allPosts].sort((a, b) =>
      a.title.en.localeCompare(b.title.en)
    );
    if (activeTag === "All") {
      return sortedPosts;
    }
    return sortedPosts.filter((post) => post.tags.includes(activeTag));
  }, [activeTag]);

  const handleTagSelect = (tag) => {
    setActiveTag(tag);
  };

  const astrologyBackgroundStyle = {
    backgroundColor: "#FFF7E6",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23E67E22' fill-opacity='0.25'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  };

  // Fix the hardcoded ogImage path
  const metaProps = {
    title: "Vedic Pooja & Astrology Blog | Pune's No.1 Pandit | 8668552465",
    description:
      "Read articles on Vastu, Doshas, and 100% authentic Vedic pooja rituals from Pune's no.1 pooja booking website. Learn more & call 8668552465.",
    keywords:
      "vedic pooja blog, astrology blog, vastu tips, dosh nivaran blog, pune pandit blog, 8668552465",
    canonical: "https://www.vedic-pooja.com/blog",
    ogImage: `https://www.vedic-pooja.com${dailyRemediesImg.replace("@", "")}`, // Use the variable
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
      <SEOMetadata {...metaProps} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <LanguageSwitcher currentLang={language} setLang={setLanguage} />
        <BlogList
          posts={filteredPosts}
          onTagSelect={handleTagSelect}
          activeTag={activeTag}
          lang={language}
        />
        <footer className="mt-12 text-center font-poppins">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} Pandit Aditya Narayan Ji.{" "}
            {translations[language].allRightsReserved}
          </p>
        </footer>
      </div>
    </div>
  );
}
