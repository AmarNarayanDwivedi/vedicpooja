import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "@/context/LanguageContext.jsx";
import AnimatedSection from "@/components/shared/AnimatedSection.jsx";
import panditJiImg from "@/assets/HeroPage/pooja_glimpshiss/frontphoto.webp";

/**
 * About preview section with Pandit Ji information
 */
const AboutPreview = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <AnimatedSection className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/3 flex flex-col gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={panditJiImg}
              alt="Pandit Aditya Narayan performing traditional Vedic pooja in Pune"
              loading="lazy"
              className="rounded-xl shadow-lg w-full"
            />
          </motion.div>
          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-[#800000] mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {t.aboutTitle}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t.aboutText}
            </p>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#E67E22] to-[#F4C430] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-[#c66919] hover:to-[#E67E22] transition-all duration-300 transform hover:scale-105"
              aria-label="Read more about Pandit Aditya Narayan Ji"
            >
              {t.readMore}
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutPreview;
