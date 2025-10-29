import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "@/context/LanguageContext.jsx";
import AnimatedSection from "@/components/shared/AnimatedSection.jsx";
import vastuShantiImg from "@/assets/Blog/navagrahapooja.webp";
import marriageMuhuratImg from "@/assets/Blog/rakshabandhan.webp";
import kaalSarpDoshImg from "@/assets/poojas/kalsarpdosh.webp";

/**
 * Blog section displaying featured blog posts
 */
const BlogSection = () => {
  const { t } = useTranslation();

  const blogPosts = [
    {
      id: 1,
      title: "Why Vastu Shanti is Important Before Moving In",
      description:
        "Learn about the significance of Vastu Shanti puja for a harmonious and prosperous life in your new home.",
      image: vastuShantiImg,
    },
    {
      id: 2,
      title: "5 Auspicious Muhurats for Marriage in 2025",
      description:
        "Discover the most auspicious dates and times for tying the knot in the upcoming year.",
      image: marriageMuhuratImg,
    },
    {
      id: 3,
      title: "What is Kaal Sarp Dosh and How to Remove It?",
      description:
        "An in-depth guide to understanding and mitigating the effects of Kaal Sarp Dosh in your horoscope.",
      image: kaalSarpDoshImg,
    },
  ];

  return (
    <section id="blog" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#800000] mb-12 font-premium-serif">
            Knowledge Hub
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                className="card-premium bg-white/95 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-100 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: post.id * 0.2 - 0.2 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
                }}
              >
                <div className="overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={`${post.title} - Vedic pooja and astrology guidance in Pune`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#800000] mb-1 font-premium-serif group-hover:text-gold transition-colors duration-300">
                    {post.title}
                  </h3>
                  <div className="text-xs text-gray-600 mb-2 font-readable">
                    by <span className="font-semibold">Pandit Aditya Ji</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed font-readable">
                    {post.description}
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs text-gray-500">
                      December 15, 2024
                    </span>
                    <span className="text-xs text-[#E67E22] font-semibold">
                      Pandit Aditya Narayan
                    </span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center font-semibold text-[#E67E22] hover:text-gold transition-colors duration-300 group-hover:underline"
                  >
                    {t.readMore}{" "}
                    <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BlogSection;
