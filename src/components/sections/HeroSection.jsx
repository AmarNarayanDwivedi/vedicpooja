import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext.jsx";
import weddingBanner from "@/assets/Banner/weedingherosection.webp";
import ritualsBanner from "@/assets/Banner/ritualsbannerherosection.webp";
import astrologyBanner from "@/assets/Banner/astrologyherosection.webp";
import matchmakingBanner from "@/assets/Banner/spirituallyguidedindianmatchmaking.webp";

/**
 * Hero section component with rotating banner slides
 */
const HeroSection = ({ onBookPoojaClick }) => {
  const { t } = useTranslation();
  const slides = [
    { image: weddingBanner },
    { image: ritualsBanner },
    { image: astrologyBanner },
    { image: matchmakingBanner },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Handle WhatsApp booking click with pre-filled message
  const handleWhatsAppClick = () => {
    const msg = encodeURIComponent(
      "Namaste 🙏 I would like to consult about astrology/pooja. Please guide me."
    );
    window.open(`https://wa.me/918668552465?text=${msg}`, "_blank");
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden"
    >
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        />
        <img
          src={slides[currentSlide].image}
          alt="Vedic pooja services and astrology consultations in Pune"
          fetchpriority="high"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover opacity-0"
          aria-hidden="true"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 font-premium-serif"
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
        >
          {t.heroHeadline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-4"
          style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}
        >
          {t.heroSubText1}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="text-md md:text-lg max-w-3xl mx-auto mb-8 font-light italic"
          style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}
        >
          {t.heroSubText2}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={onBookPoojaClick}
            className="btn-premium px-8 py-3 bg-[#E67E22] text-white font-bold rounded-lg shadow-xl hover:bg-[#c66919] relative group"
          >
            <span className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-white transition-all duration-300"></span>
            {t.bookPoojaNow}
          </button>
          <button
            onClick={handleWhatsAppClick}
            className="btn-premium px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg shadow-xl hover:bg-white hover:text-[#E67E22] relative group"
          >
            <span className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-[#E67E22] transition-all duration-300"></span>
            {t.bookAstrology}
          </button>
        </motion.div>
        {/* Moving symbols */}
        <div className="pointer-events-none select-none">
          <span className="absolute text-5xl text-[#F4C430]/40 top-24 left-12 animate-pulse">
            ॐ
          </span>
          <span
            className="absolute text-4xl text-white/40 bottom-24 right-16"
            style={{ animation: "float 6s ease-in-out infinite" }}
          >
            卐
          </span>
          <span
            className="absolute text-3xl text-white/30 top-1/3 right-1/4"
            style={{ animation: "drift 12s linear infinite" }}
          >
            🕉️
          </span>
          <span
            className="absolute text-2xl text-[#F4C430]/30 bottom-1/3 left-1/4"
            style={{ animation: "drift 14s linear infinite reverse" }}
          >
            ॐ
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
