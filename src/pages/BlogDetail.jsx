import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "../context/LanguageContext.jsx";
import SEOMetadata from "@/components/SEOMetadata.jsx";
import { allPosts } from "../data/blogPosts.js";

const BlogDetail = () => {
  const { slug } = useParams();
  const { t } = useTranslation();

  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#FFF7E6] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#800000] mb-4">
            Blog Post Not Found
          </h1>
          <Link to="/" className="text-[#E67E22] hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const metaProps = {
    title: `${post.title.en} | Vedic Pooja Blog | 8668552465`,
    description: `${post.excerpt.en.substring(
      0,
      120
    )}... Read 100% authentic Vedic info on Pune's no.1 pooja website. Call 8668552465.`,
    keywords: `${post.title.en
      .split(" ")
      .join(", ")}, vedic pooja blog, astrology blog, pune pandit, 8668552465`,
    canonical: `https://www.vedic-pooja.com/blog/${post.slug}`,
    ogImage: `https://www.vedic-pooja.com${post.image.replace("@", "/")}`,
    ogType: "article",
  };

  return (
    <div className="min-h-screen bg-[#FFF7E6] py-20">
      <SEOMetadata {...metaProps} />
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
        >
          <div className="overflow-hidden h-64 md:h-80">
            <img
              src={post.image}
              alt={`Vedic astrology and pooja guidance: ${post.title} in Pune, India`}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 md:p-12">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm text-gray-500">October 19, 2025</span>
              <span className="text-sm text-[#E67E22] font-semibold">
                {post.readTime}
              </span>
            </div>

            <h1
              className="text-3xl md:text-4xl font-bold text-[#800000] mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {post.title.en}
            </h1>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {post.excerpt.en}
            </p>

            <div className="flex items-center mb-8 pb-6 border-b border-gray-200">
              <div className="w-12 h-12 bg-[#E67E22] rounded-full flex items-center justify-center text-white font-bold mr-4">
                PN
              </div>
              <div>
                <p className="font-semibold text-[#800000]">Pandit Aditya Ji</p>
                <p className="text-sm text-gray-500">
                  Vedic Astrologer & Priest
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              {post.content.en.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("### ")) {
                  return (
                    <h3
                      key={index}
                      className="text-xl font-semibold text-[#800000] mt-6 mb-3"
                    >
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                }
                if (paragraph.startsWith("* ")) {
                  return (
                    <ul
                      key={index}
                      className="list-disc list-inside space-y-2 mb-6"
                    >
                      {paragraph.split("\n").map((item, i) => (
                        <li key={i} className="text-gray-700 leading-relaxed">
                          {item.replace("* ", "")}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/"
                  className="flex-1 bg-[#E67E22] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#c66919] transition-colors duration-300 text-center shadow-lg hover:shadow-xl"
                >
                  Book Consultation
                </Link>
                <Link
                  to="/blog"
                  className="flex-1 bg-gray-100 text-[#800000] font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-300 text-center border border-gray-300"
                >
                  ← Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogDetail;
