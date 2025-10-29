import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "@/context/LanguageContext.jsx";
import AnimatedSection from "@/components/shared/AnimatedSection.jsx";
import vedicPoojaIcon from "@/assets/HeroPage/vedic pooja services.webp";
import astrologyIcon from "@/assets/HeroPage/astrology consultations.webp";
import onlinePoojaIcon from "@/assets/HeroPage/online  e-pooja.webp";

/**
 * Services overview section displaying main service categories
 */
const ServicesOverview = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: vedicPoojaIcon,
      title: t.poojaServices,
      link: "/pooja",
      description: "Traditional Vedic rituals and ceremonies",
      color: "from-[#E67E22] to-[#F4C430]",
    },
    {
      icon: astrologyIcon,
      title: t.astrologyServices,
      link: "/astrology",
      description: "Expert astrological guidance and remedies",
      color: "from-[#800000] to-[#E67E22]",
    },
    {
      icon: onlinePoojaIcon,
      title: t.onlinePooja,
      link: "/pooja?category=online",
      description: "Virtual pooja services from anywhere",
      color: "from-[#F4C430] to-[#E67E22]",
    },
  ];

  return (
    <section id="services" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#800000] mb-12 font-premium-serif">
            {t.servicesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={`${service.link}-${index}`}
                className="card-premium group block p-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{
                  y: -12,
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
                }}
              >
                <Link to={service.link} className="flex flex-col items-center text-center">
                  <div
                    className={`w-24 h-24 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden`}
                  >
                    <img
                      src={service.icon}
                      alt={`Experienced pandit performing ${service.title.toLowerCase()} in Pune`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#800000] mb-3 font-premium-serif group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm font-readable">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-[#E67E22] font-semibold group-hover:text-gold transition-colors duration-300">
                    {t.learnMore}
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
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
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesOverview;
