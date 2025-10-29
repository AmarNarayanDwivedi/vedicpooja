import { motion } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext.jsx";
import AnimatedSection from "@/components/shared/AnimatedSection.jsx";
import AnimatedCounter from "@/components/shared/AnimatedCounter.jsx";
import GuideIcon from "@/components/icons/GuideIcon.jsx";
import PoojaTypeIcon from "@/components/icons/PoojaTypeIcon.jsx";
import PoojaPerformedIcon from "@/components/icons/PoojaPerformedIcon.jsx";

/**
 * Why Choose Us section displaying key statistics
 */
const WhyChooseUsSection = () => {
  const { t } = useTranslation();
  const stats = [
    {
      icon: <GuideIcon />,
      number: 4000,
      title: t.spiritualGuides,
      description: t.guidesDesc,
    },
    {
      icon: <PoojaTypeIcon />,
      number: 500,
      title: t.typesOfPooja,
      description: t.poojaDesc,
    },
    {
      icon: <PoojaPerformedIcon />,
      number: 10000,
      title: t.poojasPerformed,
      description: t.performedDesc,
    },
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2
            className="text-4xl md:text-5xl font-bold text-center text-[#800000] mb-12"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t.whyChooseUsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={`stat-${index}`}
                className="p-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {stat.icon}
                <AnimatedCounter to={stat.number} />
                <p
                  className="text-xl font-semibold text-[#800000] mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {stat.title}
                </p>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
