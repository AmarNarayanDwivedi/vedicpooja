import { motion } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext.jsx";
import AnimatedSection from "@/components/shared/AnimatedSection.jsx";
import { testimonials } from "@/data/testimonials.js";
import StarIcon from "@/components/icons/StarIcon.jsx";

/**
 * Testimonials slider section with customer reviews
 */
const TestimonialsSlider = () => {
  const { t } = useTranslation();
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 bg-transparent">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#800000] mb-12 font-premium-serif">
            {t.testimonialsTitle}
          </h2>
        </AnimatedSection>
        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <motion.div
            className="flex gap-8 testimonial-carousel"
            animate={{ x: ["-0%", "-100%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`testimonial-${index}`}
                className="flex-shrink-0 w-80 md:w-96 p-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 relative"
              >
                <div className="absolute top-4 right-4 text-6xl text-gold/20 font-premium-serif">
                  "
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed font-readable">
                  "{testimonial.feedback}"
                </p>
                <div className="text-right">
                  <p className="font-bold text-[#800000] text-lg font-premium-serif">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[#E67E22] font-semibold">
                    {testimonial.city}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
