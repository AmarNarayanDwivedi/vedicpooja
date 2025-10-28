import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../context/LanguageContext.jsx';
import PoojaCard from '../components/PoojaCard';
import { poojaServicesData } from '../data/poojaServices.js';
import weddingBanner from '../assets/Banner/weedingherosection.webp';
import ritualsBanner from '../assets/Banner/RitualsBannerHeroSection.webp';
import astrologyBanner from '../assets/Banner/AstrologyHeroSection.webp';
import matchmakingBanner from '../assets/Banner/SpirituallyGuidedIndianMatchmaking.webp';
import vedicPoojaIcon from '../assets/HeroPage/Vedic Pooja Services.webp';
import astrologyIcon from '../assets/HeroPage/Astrology Consultations.webp';
import onlinePoojaIcon from '../assets/HeroPage/Online  E-Pooja.webp';
import vastuShantiImg from '../assets/Blog/NavagrahaPooja.webp';
import marriageMuhuratImg from '../assets/Blog/RakshaBandhan.webp';
import kaalSarpDoshImg from '../assets/Poojas/KalSarpDosh.webp';

// Helper Icons
const StarIcon = ({ filled = true }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={filled ? "#ffc107" : "none"} stroke="#ffc107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const GuideIcon = () => (
  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#E67E22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
  </div>
);

const PoojaTypeIcon = () => (
  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#E67E22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 12L2 9l4-6"></path><path d="M12 3v18"></path></svg>
  </div>
);

const PoojaPerformedIcon = () => (
  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#E67E22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8a13 13 0 0 1 13 13M22 20a13 13 0 0 0-13-13M14.05 12a9 9 0 0 0-9.9-9.9M18.1 16a5 5 0 0 0-3.9-3.9"></path></svg>
  </div>
);

// Data
const testimonials = [
  { name: "Priya Sharma", city: "Mumbai", rating: 5, feedback: "Pandit Ji's guidance was a blessing. The pooja was performed with utmost devotion and brought peace to our family." },
  { name: "राजेश कुमार", city: "वाराणसी", rating: 5, feedback: "पंडित जी बहुत ज्ञानी हैं। उन्होंने हमारे घर की पूजा बहुत अच्छे से करवाई। हम बहुत संतुष्ट हैं।" },
  { name: "स्नेहल जोशी", city: "पुणे", rating: 5, feedback: "पंडितजींनी सांगितलेले उपाय खूप प्रभावी ठरले. त्यांच्यामुळे माझ्या आयुष्यात सकारात्मक बदल झाले." },
  { name: "ભાવેશ પટેલ", city: "અમદાવાદ", rating: 5, feedback: "પંડિતજીની સલાહ ખૂબ જ સચોટ અને ઉપયોગી હતી. ઓનલાઈન પૂજાનો અનુભવ પણ અદ્ભુત રહ્યો." },
  { name: "Anjali Singh", city: "Kanpur", rating: 5, feedback: "The online pooja felt just as powerful as a physical one. Pandit Ji's energy transcends the screen. Highly recommended." },
];

const popularPoojas = [
  { name: "Griha Pravesh", image: "https://placehold.co/400x300/FFF7E6/800000?text=Griha+Pravesh" },
  { name: "Shubh Vivah", image: "https://placehold.co/400x300/FFF7E6/800000?text=Shubh+Vivah" },
  { name: "Naamkaran Sanskar", image: "https://placehold.co/400x300/FFF7E6/800000?text=Naamkaran" },
  { name: "Mahamrityunjaya Jaap", image: "https://placehold.co/400x300/FFF7E6/800000?text=Maha+Jaap" },
  { name: "Navagraha Shanti", image: "https://placehold.co/400x300/FFF7E6/800000?text=Navagraha+Shanti" },
  { name: "Ganesh Puja", image: "https://placehold.co/400x300/FFF7E6/800000?text=Ganesh+Puja" },
  { name: "Lakshmi Puja", image: "https://placehold.co/400x300/FFF7E6/800000?text=Lakshmi+Puja" },
  { name: "Kaal Sarp Dosh", image: "https://placehold.co/400x300/FFF7E6/800000?text=Kaal+Sarp+Dosh" },
  { name: "Mundan Sanskar", image: "https://placehold.co/400x300/FFF7E6/800000?text=Mundan+Sanskar" },
  { name: "Birthday Puja", image: "https://placehold.co/400x300/FFF7E6/800000?text=Birthday+Puja" },
  { name: "Durga Saptashati Path", image: "https://placehold.co/400x300/FFF7E6/800000?text=Durga+Saptashati" },
  { name: "Bhoomi Pujan", image: "https://placehold.co/400x300/FFF7E6/800000?text=Bhoomi+Pujan" },
  { name: "Vehicle Puja", image: "https://placehold.co/400x300/FFF7E6/800000?text=Vehicle+Puja" },
  { name: "Office Opening", image: "https://placehold.co/400x300/FFF7E6/800000?text=Office+Opening" },
  { name: "Rahu Puja", image: "https://placehold.co/400x300/FFF7E6/800000?text=Rahu+Puja" },
  { name: "Ketu Puja", image: "https://placehold.co/400x300/FFF7E6/800000?text=Ketu+Puja" },
  { name: "Karva Chauth", image: "https://placehold.co/400x300/FFF7E6/800000?text=Karva+Chauth" },
  { name: "Diwali Puja", image: "https://placehold.co/400x300/FFF7E6/800000?text=Diwali+Puja" },
  { name: "Janeu Sanskar", image: "https://placehold.co/400x300/FFF7E6/800000?text=Janeu+Sanskar" },
  { name: "Dhanteras Puja", image: "https://placehold.co/400x300/FFF7E6/800000?text=Dhanteras+Puja" },
];


// Animated Components
const AnimatedSection = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const AnimatedCounter = ({ to }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, to, {
        duration: 2,
        onUpdate(value) {
          setDisplayValue(Math.floor(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "+");
        }
      });
      return () => controls.stop();
    }
  }, [isInView, to]);

  return <h3 ref={ref} className="text-4xl md:text-5xl font-bold text-[#E67E22] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{displayValue}</h3>;
};

// Page Sections
const HeroSection = ({ onBookPoojaClick }) => {
  const { t } = useTranslation();
  const slides = [
    { image: weddingBanner },
    { image: ritualsBanner },
    { image: astrologyBanner },
    { image: matchmakingBanner },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 font-premium-serif"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
        >
          {t.heroHeadline}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-4"
          style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}
        >
          {t.heroSubText1}
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="text-md md:text-lg max-w-3xl mx-auto mb-8 font-light italic"
          style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}
        >
          {t.heroSubText2}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="/pooja" className="btn-premium px-8 py-3 bg-[#E67E22] text-white font-bold rounded-lg shadow-xl hover:bg-[#c66919] relative group">
            <span className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-white transition-all duration-300"></span>
            {t.bookPoojaNow}
          </a>
          <button onClick={() => {
            const msg = encodeURIComponent('Namaste 🙏 I would like to consult about astrology/pooja. Please guide me.');
            window.open(`https://wa.me/918668552465?text=${msg}`, '_blank');
          }} className="btn-premium px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg shadow-xl hover:bg-white hover:text-[#E67E22] relative group">
            <span className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-[#E67E22] transition-all duration-300"></span>
            {t.bookAstrology}
          </button>
        </motion.div>
        {/* Moving symbols */}
        <div className="pointer-events-none select-none">
          <span className="absolute text-5xl text-[#F4C430]/40 top-24 left-12 animate-pulse">ॐ</span>
          <span className="absolute text-4xl text-white/40 bottom-24 right-16" style={{animation: 'float 6s ease-in-out infinite'}}>卐</span>
          <span className="absolute text-3xl text-white/30 top-1/3 right-1/4" style={{animation: 'drift 12s linear infinite'}}>🕉️</span>
          <span className="absolute text-2xl text-[#F4C430]/30 bottom-1/3 left-1/4" style={{animation: 'drift 14s linear infinite reverse'}}>ॐ</span>
        </div>
      </div>
    </section>
  );
};

const ServicesOverview = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: vedicPoojaIcon,
      title: t.poojaServices,
      link: "/pooja",
      description: "Traditional Vedic rituals and ceremonies",
      color: "from-[#E67E22] to-[#F4C430]"
    },
    {
      icon: astrologyIcon,
      title: t.astrologyServices,
      link: "/astrology",
      description: "Expert astrological guidance and remedies",
      color: "from-[#800000] to-[#E67E22]"
    },
    {
      icon: onlinePoojaIcon,
      title: t.onlinePooja,
      link: "/pooja?category=online",
      description: "Virtual pooja services from anywhere",
      color: "from-[#F4C430] to-[#E67E22]"
    },
  ];

  return (
    <section id="services" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#800000] mb-12 font-premium-serif">{t.servicesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.a
                href={service.link}
                key={index}
                className="card-premium group block p-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -12, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)"}}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-24 h-24 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden`}>
                    <img src={service.icon} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#800000] mb-3 font-premium-serif group-hover:text-gold transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm font-readable">{service.description}</p>
                  <span className="inline-flex items-center text-[#E67E22] font-semibold group-hover:text-gold transition-colors duration-300">
                    {t.learnMore}
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

const WhyChooseUsSection = () => {
  const {t} = useTranslation();
  const stats = [
    { icon: <GuideIcon/>, number: 4000, title: t.spiritualGuides, description: t.guidesDesc },
    { icon: <PoojaTypeIcon/>, number: 500, title: t.typesOfPooja, description: t.poojaDesc },
    { icon: <PoojaPerformedIcon/>, number: 1000000, title: t.poojasPerformed, description: t.performedDesc },
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#800000] mb-12" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{t.whyChooseUsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {stat.icon}
                <AnimatedCounter to={stat.number} />
                <p className="text-xl font-semibold text-[#800000] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{stat.title}</p>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

const PopularPoojasSection = () => {
  const { t } = useTranslation();

  // Get 12 random poojas from the data (6 per row for 2 rows)
  const getRandomPoojas = (data, count) => {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomPoojas = getRandomPoojas(poojaServicesData, 12);

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Most Popular Poojas
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Book experienced and verified Pandits for all your spiritual needs.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 items-stretch">
          {randomPoojas.map((pooja) => (
            <PoojaCard key={pooja.id} pooja={pooja} />
          ))}
        </div>
      </div>
    </section>
  );
};

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
            <img src="https://placehold.co/400x400/FFF7E6/800000?text=Pandit+Ji" alt="About Pandit Ji" className="rounded-xl shadow-lg w-full" />
            <img src="https://placehold.co/400x250/FFF7E6/800000?text=Father's+Photo" alt="Pandit Ji's Father" className="rounded-xl shadow-lg w-full" />
          </motion.div>
          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#800000] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{t.aboutTitle}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t.aboutText}
            </p>
            <a href="/about" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#E67E22] to-[#F4C430] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-[#c66919] hover:to-[#E67E22] transition-all duration-300 transform hover:scale-105">
              {t.readMore}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

const GallerySection = () => {
  const galleryImagesRow1 = [
    "https://placehold.co/600x400/FFF7E6/800000?text=Ritual+1",
    "https://placehold.co/600x400/FFF7E6/800000?text=Wedding+Ceremony",
    "https://placehold.co/600x400/FFF7E6/800000?text=Havan",
    "https://placehold.co/600x400/FFF7E6/800000?text=Blessings",
    "https://placehold.co/600x400/FFF7E6/800000?text=Sacred+Fire",
    "https://placehold.co/600x400/FFF7E6/800000?text=Family+Pooja",
  ];
  const galleryImagesRow2 = [
    "https://placehold.co/600x400/FFF7E6/800000?text=Offerings",
    "https://placehold.co/600x400/FFF7E6/800000?text=Mantras",
    "https://placehold.co/600x400/FFF7E6/800000?text=Devotion",
    "https://placehold.co/600x400/FFF7E6/800000?text=Puja+Samagri",
    "https://placehold.co/600x400/FFF7E6/800000?text=Aarti",
    "https://placehold.co/600x400/FFF7E6/800000?text=Celebration",
  ];

  const duplicatedImages1 = [...galleryImagesRow1, ...galleryImagesRow1];
  const duplicatedImages2 = [...galleryImagesRow2, ...galleryImagesRow2];

  return (
    <section className="py-20 bg-transparent overflow-hidden">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#800000] mb-12" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Pooja Moments</h2>
        </AnimatedSection>
        <div className="flex flex-col gap-4" style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}>
          <motion.div
            className="flex gap-4"
            animate={{ x: ['-100%', '0%'] }}
            transition={{ ease: 'linear', duration: 80, repeat: Infinity }}
          >
            {duplicatedImages1.map((img, index) => (
              <div key={`r1-${index}`} className="flex-shrink-0 w-[400px] h-[250px] overflow-hidden rounded-lg shadow-lg">
                <img src={img} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </motion.div>
          <motion.div
            className="flex gap-4"
            animate={{ x: ['0%', '-100%'] }}
            transition={{ ease: 'linear', duration: 80, repeat: Infinity }}
          >
            {duplicatedImages2.map((img, index) => (
              <div key={`r2-${index}`} className="flex-shrink-0 w-[400px] h-[250px] overflow-hidden rounded-lg shadow-lg">
                <img src={img} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BlogSection = () => {
  const { t } = useTranslation();

  const blogPosts = [
    { title: "Why Vastu Shanti is Important Before Moving In", description: "Learn about the significance of Vastu Shanti puja for a harmonious and prosperous life in your new home.", image: vastuShantiImg },
    { title: "5 Auspicious Muhurats for Marriage in 2025", description: "Discover the most auspicious dates and times for tying the knot in the upcoming year.", image: marriageMuhuratImg },
    { title: "What is Kaal Sarp Dosh and How to Remove It?", description: "An in-depth guide to understanding and mitigating the effects of Kaal Sarp Dosh in your horoscope.", image: kaalSarpDoshImg },
  ];

  return(
    <section id="blog" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#800000] mb-12 font-premium-serif">Knowledge Hub</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div key={index} className="card-premium bg-white/95 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-100 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" }}
              >
                <div className="overflow-hidden h-48">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#800000] mb-1 font-premium-serif group-hover:text-gold transition-colors duration-300">{post.title}</h3>
                  <div className="text-xs text-gray-600 mb-2 font-readable">by <span className="font-semibold">Pandit Aditya Ji</span></div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed font-readable">{post.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs text-gray-500">December 15, 2024</span>
                    <span className="text-xs text-[#E67E22] font-semibold">Pandit Aditya Narayan</span>
                  </div>
                  <a
                    href={`/blog/${index + 1}`}
                    className="inline-flex items-center font-semibold text-[#E67E22] hover:text-gold transition-colors duration-300 group-hover:underline"
                  >
                    {t.readMore} <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

const TestimonialsSlider = () => {
  const { t } = useTranslation();
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 bg-transparent">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#800000] mb-12 font-premium-serif">{t.testimonialsTitle}</h2>
        </AnimatedSection>
        <div className="relative w-full overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          <motion.div
            className="flex gap-8 testimonial-carousel"
            animate={{ x: ['-0%', '-100%'] }}
            transition={{ ease: 'linear', duration: 40, repeat: Infinity }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-80 md:w-96 p-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 relative">
                <div className="absolute top-4 right-4 text-6xl text-gold/20 font-premium-serif">"</div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed font-readable">"{testimonial.feedback}"</p>
                <div className="text-right">
                  <p className="font-bold text-[#800000] text-lg font-premium-serif">{testimonial.name}</p>
                  <p className="text-sm text-[#E67E22] font-semibold">{testimonial.city}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BookingSection = ({ forwardedRef }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    poojaType: 'Griha Pravesh',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "8668552465";
    const prefilledMessage = `Namaste 🙏, I want to book ${formData.poojaType} on ${formData.date}. My name is ${formData.name}, contact: ${formData.phone}. Message: ${formData.message}`;
    const encodedMessage = encodeURIComponent(prefilledMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section ref={forwardedRef} id="contact" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#800000] mb-12 font-premium-serif">{t.bookingTitle}</h2>
          <div className="max-w-2xl mx-auto bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-gray-100">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="floating-label">
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder=" "
                    className="w-full p-3 border-2 border-gray-200 bg-white/80 rounded-lg focus:ring-2 focus:ring-[#E67E22] focus:border-[#E67E22] focus:outline-none transition-all duration-300" 
                    required 
                  />
                  <label htmlFor="name" className="text-[#800000] font-semibold">{t.fullName}</label>
                </div>
                <div className="floating-label">
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder=" "
                    className="w-full p-3 border-2 border-gray-200 bg-white/80 rounded-lg focus:ring-2 focus:ring-[#E67E22] focus:border-[#E67E22] focus:outline-none transition-all duration-300" 
                    required 
                  />
                  <label htmlFor="phone" className="text-[#800000] font-semibold">{t.phone}</label>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="poojaType" className="block text-[#800000] font-semibold mb-2">{t.poojaType}</label>
                  <select id="poojaType" name="poojaType" value={formData.poojaType} onChange={handleChange} className="w-full p-3 border-2 border-gray-200 rounded-lg bg-white/80 focus:ring-2 focus:ring-[#E67E22] focus:border-[#E67E22] focus:outline-none transition-all duration-300">
                    <option>Griha Pravesh</option>
                    <option>Shubh Vivah</option>
                    <option>Satyanarayan Pooja</option>
                    <option>Vastu Shanti Pooja</option>
                    <option>Astrology Consultation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block text-[#800000] font-semibold mb-2">{t.preferredDate}</label>
                  <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-3 border-2 border-gray-200 rounded-lg bg-white/80 focus:ring-2 focus:ring-[#E67E22] focus:border-[#E67E22] focus:outline-none transition-all duration-300" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-[#800000] font-semibold mb-2">{t.message}</label>
                <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full p-3 border-2 border-gray-200 rounded-lg bg-white/80 focus:ring-2 focus:ring-[#E67E22] focus:border-[#E67E22] focus:outline-none transition-all duration-300"></textarea>
              </div>
              <button type="submit" className="btn-premium w-full py-4 bg-gradient-to-r from-[#E67E22] to-[#F4C430] text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl hover:from-[#c66919] hover:to-[#E67E22]">
                {t.sendOnWhatsApp}
              </button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Main Home Component
export default function Home() {
  const bookingSectionRef = useRef(null);

  const handleBookPoojaClick = () => {
    bookingSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <HeroSection onBookPoojaClick={handleBookPoojaClick} />
      <ServicesOverview />
      <AboutPreview />
      <WhyChooseUsSection />
      <PopularPoojasSection />
      <GallerySection />
      <TestimonialsSlider />
      <BlogSection />
      <BookingSection forwardedRef={bookingSectionRef} />
    </>
  );
}
