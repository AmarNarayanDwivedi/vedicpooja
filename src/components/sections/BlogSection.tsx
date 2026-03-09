import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { allPosts } from "@/data/blogPosts";
import Image, { StaticImageData } from "next/image";

/**
 * Blog section displaying featured blog posts
 */
const BlogSection = () => {
  const { t } = useTranslation();

  const featuredSlugs = [
    "why-vastu-shanti-important",
    "auspicious-muhurats-marriage-2025",
    "what-is-kaal-sarp-dosh",
  ];

  const blogPosts = allPosts.filter((post) =>
    featuredSlugs.includes(post.slug)
  );

  return (
    <section id="blog" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#800000] mb-12 font-premium-serif">
            Knowledge Hub
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                className="card-premium bg-white/95 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-100 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
                }}
              >
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={post.image as any}
                    alt={`${post.title.en} - Vedic pooja and astrology guidance in Pune`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#800000] mb-1 font-premium-serif group-hover:text-gold transition-colors duration-300">
                    {post.title.en}
                  </h3>
                  <div className="text-xs text-gray-600 mb-2 font-readable">
                    by <span className="font-semibold">Pandit Aditya Ji</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed font-readable">
                    {post.excerpt.en}
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
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center font-semibold text-[#E67E22] hover:text-gold transition-colors duration-300 group-hover:underline"
                    aria-label={`Read more about ${post.title.en}`}
                  >
                    Read More About {post.title.en}{" "}
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
