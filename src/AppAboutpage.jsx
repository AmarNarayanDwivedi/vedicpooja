import React, { useEffect, useState, useRef } from 'react';
// In a real Next.js app, you'd import 'motion', 'useInView', 'animate' from 'framer-motion'.
// We'll simulate their behavior and props for this single-file environment.
import { useNavigate } from 'react-router-dom';

// --- Language Data ---
const translations = {
    EN: {
        heroTagline: "Authentic Vedic Poojas & Astrology",
        bookPooja: "Book a Pooja",
        statsGuides: "Spiritual Guides",
        statsGuidesSub: "Priests, Pandits & Consultants",
        statsPoojaTypes: "Types of Pooja",
        statsPoojaTypesSub: "Covering all major Vedic rituals",
        statsPoojasDone: "Poojas Performed",
        statsPoojasDoneSub: "Bringing blessings across India",
        lifeDevotedTitle: "A Life Devoted to Sanatan Dharma",
        journeyTitle: "A Divine Path of Service",
        missionVisionTitle: "Our Mission & Vision",
        missionTitle: "Our Mission",
        missionText: "To bring peace, prosperity, and spiritual well-being to every devotee through the performance of authentic, heartfelt Vedic rituals.",
        visionTitle: "Our Vision",
        visionText: "To make the divine knowledge and sacred practices of Vedic pujas accessible to every Hindu household, no matter where they are in the world.",
        sanskritQuote: "सर्वे भवन्तु सुखिनः",
        galleryTitle: "Glimpses of Sacred Ceremonies",
        whyChooseUsTitle: "Why Choose Us?",
        ctaTitle: "Ready to Invite Divine Blessings?",
        ctaButton: "Message us on WhatsApp",
    },
    HI: {
        heroTagline: "प्रामाणिक वैदिक पूजा और ज्योतिष",
        bookPooja: "पूजा बुक करें",
        statsGuides: "आध्यात्मिक मार्गदर्शक",
        statsGuidesSub: "पुजारी, पंडित और सलाहकार",
        statsPoojaTypes: "पूजा के प्रकार",
        statsPoojaTypesSub: "सभी प्रमुख वैदिक अनुष्ठानों को कवर करते हुए",
        statsPoojasDone: "पूजा संपन्न",
        statsPoojasDoneSub: "पूरे भारत में आशीर्वाद लाते हुए",
        lifeDevotedTitle: "सनातन धर्म को समर्पित एक जीवन",
        journeyTitle: "सेवा का एक दिव्य मार्ग",
        missionVisionTitle: "हमारा मिशन और विजन",
        missionTitle: "हमारा मिशन",
        missionText: "प्रामाणिक, हार्दिक वैदिक अनुष्ठानों के प्रदर्शन के माध्यम से प्रत्येक भक्त के लिए शांति, समृद्धि और आध्यात्मिक कल्याण लाना।",
        visionTitle: "हमारा विजन",
        visionText: "वैदिक पूजाओं के दिव्य ज्ञान और पवित्र प्रथाओं को दुनिया में कहीं भी हर हिंदू घर के लिए सुलभ बनाना।",
        sanskritQuote: "सर्वे भवन्तु सुखिनः",
        galleryTitle: "पवित्र समारोहों की झलक",
        whyChooseUsTitle: "हमें क्यों चुनें?",
        ctaTitle: "दिव्य आशीर्वाद आमंत्रित करने के लिए तैयार हैं?",
        ctaButton: "व्हाट्सएप पर हमें संदेश भेजें",
    }
};

// --- Helper & Icon Components ---
const useReducedMotion = () => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setMatches(mediaQuery.matches);
    const listener = () => setMatches(mediaQuery.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);
  return matches;
};

const CheckBadgeIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

// --- Reusable Animated Components ---
const AnimatedCounter = ({ to }) => {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setIsInView(true);
        }, { threshold: 0.1 });

        if (ref.current) observer.observe(ref.current);
        return () => ref.current && observer.unobserve(ref.current);
    }, [ref]);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000, stepTime = 20, steps = duration / stepTime;
            const increment = to / steps;
            const timer = setInterval(() => {
                start += increment;
                if (start >= to) {
                    setCount(to);
                    clearInterval(timer);
                } else {
                    setCount(Math.ceil(start));
                }
            }, stepTime);
            return () => clearInterval(timer);
        }
    }, [isInView, to]);

    return <span ref={ref} className="tabular-nums">{new Intl.NumberFormat('en-IN').format(count)}+</span>;
};

// --- Shadcn/UI Inspired Primitives ---
const Card = ({ children, className = '' }) => (
    <div className={`bg-white rounded-xl shadow-lg ${className}`}>
        {children}
    </div>
);

const Button = ({ children, className = '', href = "#", onClick }) => (
    <a href={href} onClick={onClick} className={`inline-flex items-center justify-center font-semibold tracking-wide text-center rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cream bg-primary text-white hover:bg-accent hover:text-secondary shadow-lg py-3 px-8 ${className}`}>
        {children}
    </a>
);

const Badge = ({ children, className = '' }) => (
    <span className={`inline-flex items-center gap-x-1.5 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent border border-accent/20 ${className}`}>
        {children}
    </span>
);

// --- Animated Background Component ---
const AnimatedBackground = () => {
  const [reduceMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const planets = [
      { size: 5, orbit: 60, speed: 28, color: '#a5a5a5' },
      { size: 8, orbit: 90, speed: 40, color: '#d9b38c' },
      { size: 9, orbit: 125, speed: 50, color: '#8cb3d9' },
      { size: 7, orbit: 160, speed: 65, color: '#d98c8c' },
      { size: 18, orbit: 220, speed: 110, color: '#d9a66c' },
      { size: 16, orbit: 280, speed: 140, color: '#c2b280' },
      { size: 12, orbit: 330, speed: 170, color: '#b3d9d9' },
      { size: 11, orbit: 380, speed: 200, color: '#6c8cd9' },
      { size: 4, orbit: 420, speed: 230, color: '#a9a9a9' },
  ];

  if (reduceMotion) {
      return <div className="fixed inset-0 w-full h-full z-0 static-star-field"></div>;
  }

  return (
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden">
          <div className="absolute inset-0 static-star-field"></div>
          <div className="absolute inset-0 flex items-center justify-center scale-75 md:scale-100">
              <div className="absolute w-12 h-12 bg-accent rounded-full sun-glow"></div>
              {planets.map((p, i) => (
                  <div key={i} className="absolute rounded-full border border-white/10 orbit-path"
                       style={{ width: `${p.orbit * 2}px`, height: `${p.orbit * 2}px`, animation: `spin ${p.speed}s linear infinite` }}>
                      <div className="absolute top-1/2 -mt-1"
                           style={{ left: `-${p.size / 2}px`, width: `${p.size}px`, height: `${p.size}px` }}>
                          <div className="w-full h-full rounded-full"
                               style={{ backgroundColor: p.color, boxShadow: `0 0 8px ${p.color}` }}></div>
                      </div>
                  </div>
              ))}
          </div>
          <div className="absolute top-10 right-10 w-12 h-12 moon"></div>
          <div className="absolute bottom-[20%] left-[10%] text-5xl text-accent/20 floating-symbol">ॐ</div>
          <div className="absolute top-[25%] right-[15%] text-5xl text-accent/20 floating-symbol" style={{ animationDelay: '2s' }}>卐</div>
          
          {/* Additional Moving Spiritual Symbols */}
          <div className="absolute top-[15%] left-[20%] text-4xl text-primary/15 floating-symbol" style={{ animationDelay: '1s' }}>☸</div>
          <div className="absolute bottom-[30%] right-[25%] text-3xl text-accent/15 floating-symbol" style={{ animationDelay: '3s' }}>☯</div>
          <div className="absolute top-[40%] left-[5%] text-2xl text-primary/10 floating-symbol" style={{ animationDelay: '4s' }}>🌙</div>
          <div className="absolute bottom-[10%] right-[10%] text-3xl text-accent/12 floating-symbol" style={{ animationDelay: '2.5s' }}>⭐</div>
          <div className="absolute top-[60%] right-[30%] text-2xl text-primary/10 floating-symbol" style={{ animationDelay: '1.5s' }}>🔮</div>
          <div className="absolute bottom-[50%] left-[15%] text-3xl text-accent/12 floating-symbol" style={{ animationDelay: '3.5s' }}>🌸</div>
      </div>
  );
};


// --- Page Sections ---

const PlanetaryHero = ({ lang }) => {
    const reduceMotion = useReducedMotion();
    const navigate = useNavigate();
    return (
        <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center text-center text-secondary overflow-hidden">
             <div className="absolute inset-0 z-0 bg-cream"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/50 to-transparent z-0"></div>

            <div className="container mx-auto px-6 z-10 fade-in-scroll">
                <img src="https://placehold.co/150x150/FFF7E6/800000?text=Pandit+Ji" alt="Portrait of Pandit Aditya Narayan Ji" className="mx-auto rounded-full w-32 h-32 md:w-36 md:h-36 object-cover border-4 border-accent shadow-2xl mb-6" />
                <h1 className="font-playfair text-4xl md:text-6xl font-bold text-secondary drop-shadow-lg">Pandit Aditya Narayan Ji</h1>
                <p className="mt-3 font-poppins text-lg md:text-xl text-primary max-w-3xl mx-auto drop-shadow-md">{translations[lang].heroTagline}</p>
                <div className="mt-8 flex items-center justify-center gap-4">
                    <Button onClick={() => navigate('/pooja')}>{translations[lang].bookPooja}</Button>
                </div>
            </div>
        </section>
    );
};

const StatsSection = ({ lang }) => {
    const stats = [
        { number: 4000, label: translations[lang].statsGuides, subtext: translations[lang].statsGuidesSub },
        { number: 500, label: translations[lang].statsPoojaTypes, subtext: translations[lang].statsPoojaTypesSub },
        { number: 1000000, label: translations[lang].statsPoojasDone, subtext: translations[lang].statsPoojasDoneSub },
    ];
    return (
        <section className="py-12 bg-cream border-y border-primary/10 relative z-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-secondary">
                    {stats.map((stat, i) => (
                        <div key={i} className="p-4 rounded-lg hover:bg-primary/5 transition-colors duration-300 fade-in-scroll" style={{animationDelay: `${i * 0.15}s`}}>
                            <p className="text-4xl md:text-5xl font-bold text-primary font-playfair"><AnimatedCounter to={stat.number} /></p>
                            <p className="mt-1 text-lg font-semibold">{stat.label}</p>
                            <p className="text-sm text-secondary/70">{stat.subtext}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const IntroFactsSection = ({ lang }) => (
    <section className="py-20 md:py-24 relative z-10">
        <div className="container mx-auto px-6 grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2 fade-in-scroll">
                <Card className="p-2 bg-white shadow-xl">
                    <img src="https://placehold.co/400x500/FFF7E6/800000?text=Pandit+Ji" alt="Pandit Aditya Narayan Ji" className="rounded-lg w-full h-auto" />
                </Card>
            </div>
            <div className="md:col-span-3 text-secondary fade-in-scroll" style={{animationDelay: '0.2s'}}>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-secondary">{translations[lang].lifeDevotedTitle}</h2>
                <div className="mt-6 space-y-4 text-secondary/80">
                    <p>With over 12 years of devoted service, Pandit Aditya Narayan Ji has brought peace and spiritual guidance to families across 10+ states. Trained under revered Gurus, he follows traditional Vedic methods with utmost precision and dedication.</p>
                    <p>He specializes in a wide array of ceremonies, including wedding rituals, Graha Pravesh, various Dosh Nivaran Poojas, Havans, and providing auspicious Muhurat timings for significant life events.</p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                    <Badge><CheckBadgeIcon className="w-4 h-4" /> Verified Pandit</Badge>
                    <Badge><CheckBadgeIcon className="w-4 h-4" /> Traditional Vedic Methods</Badge>
                    <Badge><CheckBadgeIcon className="w-4 h-4" /> Online Pooja Available</Badge>
                </div>
            </div>
        </div>
    </section>
);

const JourneyTimeline = ({ lang }) => {
    const timelineData = [
        { year: 2012, event: "Started spiritual training under Guru Shastriji", highlight: true },
        { year: 2014, event: "First Griha Pravesh Puja", highlight: false },
        { year: 2017, event: "Expanded to Maharashtra and Gujarat", highlight: false },
        { year: 2021, event: "Introduced Online Poojas", highlight: false },
        { year: 2024, event: "Served devotees in 10+ states", highlight: true }
    ];

    return (
        <section className="py-20 md:py-24 bg-gradient-to-br from-primary/5 via-white to-accent/5 relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 fade-in-scroll">
                    <h2 className="font-playfair text-5xl md:text-6xl font-bold text-secondary mb-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.1)'}}>
                        {translations[lang].journeyTitle}
                    </h2>
                    <p className="text-lg text-secondary/70 max-w-2xl mx-auto">A divine journey of spiritual service spanning over a decade</p>
                </div>
                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-2 bg-gradient-to-b from-primary via-accent to-primary rounded-full timeline-path-container shadow-lg">
                        <div className="timeline-path"></div>
                    </div>
                    {timelineData.map((item, index) => (
                        <div key={index} className={`flex items-center w-full mb-12 fade-in-scroll ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                                <Card className={`p-6 milestone-card ${item.highlight ? 'bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30' : 'bg-white/90'}`}>
                                    <div className="flex items-center mb-3">
                                        {item.highlight && <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>}
                                        <p className="font-playfair text-3xl font-bold text-primary">{item.year}</p>
                                    </div>
                                    <p className="text-lg text-secondary/80 leading-relaxed">{item.event}</p>
                                </Card>
                            </div>
                            <div className={`absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full shadow-lg z-10 timeline-dot ${item.highlight ? 'bg-primary border-4 border-white' : 'bg-accent border-2 border-white'}`}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const MissionVisionSection = ({ lang }) => (
    <section className="py-20 md:py-24 relative z-10 overflow-hidden bg-gradient-to-br from-cream via-white to-cream/50">
        <div className="absolute inset-0 rotating-chakra opacity-[0.08] z-0"></div>
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-t from-transparent to-accent/20 z-10 light-sweep"></div>
        <div className="container mx-auto px-6 text-center max-w-5xl relative z-20">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-secondary fade-in-scroll mb-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.1)'}}>
                {translations[lang].missionVisionTitle}
            </h2>
            <div className="mt-12 grid md:grid-cols-2 gap-12 text-secondary/90">
                <div className="fade-in-scroll bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-primary/10 hover:shadow-2xl transition-all duration-300" style={{animationDelay: '0.2s'}}>
                    <div className="flex items-center mb-4">
                        <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                        <h3 className="text-3xl font-bold text-primary font-playfair">{translations[lang].missionTitle}</h3>
                    </div>
                    <p className="text-lg leading-relaxed">{translations[lang].missionText}</p>
                </div>
                <div className="fade-in-scroll bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-primary/10 hover:shadow-2xl transition-all duration-300" style={{animationDelay: '0.4s'}}>
                    <div className="flex items-center mb-4">
                        <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                        <h3 className="text-3xl font-bold text-primary font-playfair">{translations[lang].visionTitle}</h3>
                    </div>
                    <p className="text-lg leading-relaxed">{translations[lang].visionText}</p>
                </div>
            </div>
            <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
                <p className="text-3xl font-playfair text-primary/90 italic fade-in-scroll" style={{animationDelay: '0.6s'}}>
                    {translations[lang].sanskritQuote}
                </p>
                <p className="text-sm text-secondary/70 mt-2">May all beings be happy and free from suffering</p>
            </div>
        </div>
    </section>
);


const GallerySection = ({ lang }) => {
    // ... (This component remains largely the same, but colors in the modal need to be updated)
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { src: "https://placehold.co/600x400/800000/FFF7E6?text=Griha+Pravesh", name: "Griha Pravesh" },
        { src: "https://placehold.co/400x500/E67E22/FFF7E6?text=Wedding+Ritual", name: "Wedding Ritual" },
        { src: "https://placehold.co/600x500/F4C430/1a090d?text=Satyanarayan+Pooja", name: "Satyanarayan Pooja" },
        { src: "https://placehold.co/400x400/800000/FFF7E6?text=Havan", name: "Havan Ceremony" },
    ];
    
    const openModal = (image) => { setSelectedImage(image); setModalOpen(true); };
    const closeModal = () => setModalOpen(false);

    return (
        <section className="py-20 md:py-24 bg-primary/5 relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 fade-in-scroll">
                    <h2 className="font-playfair text-4xl md:text-5xl font-bold text-secondary">{translations[lang].galleryTitle}</h2>
                </div>
                <div className="gallery-grid">
                    {images.map((img, i) => (
                        <div key={i} className="gallery-item fade-in-scroll" style={{ animationDelay: `${i * 0.1}s` }} onClick={() => openModal(img)}>
                            <img loading="lazy" src={img.src} alt={img.name} className="w-full h-full object-cover" />
                            <div className="gallery-overlay">
                                <div><h3 className="font-playfair text-xl font-bold text-white">{img.name}</h3></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {modalOpen && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeModal}>
                    <div className="relative bg-cream rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-auto text-secondary" onClick={(e) => e.stopPropagation()}>
                        <button onClick={closeModal} className="absolute top-2 right-2 text-secondary bg-white/50 rounded-full p-2 z-10">&times;</button>
                        <img src={selectedImage.src.replace('400', '800').replace('500', '700').replace('600', '900')} alt={selectedImage.name} className="w-full h-auto object-contain" />
                        <div className="p-6">
                            <h3 className="font-playfair text-2xl font-bold text-primary">{selectedImage.name}</h3>
                            <p className="text-secondary/80 mt-2">A sacred {selectedImage.name} ceremony performed with traditional Vedic rituals.</p>
                            <Button href={`https://wa.me/910000000000?text=I'm%20interested%20in%20the%20${encodeURIComponent(selectedImage.name)}%20pooja.`} className="mt-4">Book via WhatsApp</Button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

const WhyChooseUsSection = ({ lang }) => {
    // ... (This section needs color updates)
    const reasons = [
        { title: "Authentic Vedic Practices", text: "Rituals performed strictly as per Shastras and Guru Parampara." },
        { title: "Experienced Pandits", text: "12+ years across 10+ states." },
        { title: "End-to-End Samagri", text: "We can provide everything." },
        { title: "Online E-Pooja", text: "Participate live from anywhere." },
        { title: "Personalized Muhurat", text: "Astrological guidance." },
        { title: "Trusted & Verified", text: "Transparent communication." },
    ];
    return(
        <section className="py-20 md:py-24 relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 fade-in-scroll">
                    <h2 className="font-playfair text-4xl md:text-5xl font-bold text-secondary">{translations[lang].whyChooseUsTitle}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, i) => (
                        <div key={i} className="fade-in-scroll" style={{animationDelay: `${i * 0.1}s`}}>
                            <Card className="p-6 text-center h-full reason-card text-secondary">
                                <h3 className="font-playfair text-xl font-bold text-primary">{reason.title}</h3>
                                <p className="mt-2 text-secondary/80">{reason.text}</p>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CtaFooterBlock = ({ lang }) => (
    <section className="py-16 bg-gradient-to-t from-primary/10 to-transparent relative z-10">
        <div className="container mx-auto px-6 text-center fade-in-scroll">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-secondary">{translations[lang].ctaTitle}</h2>
            <div className="mt-8">
                <Button href="https://wa.me/910000000000?text=Hello%20Pandit%20Ji,%20I'm%20interested%20in%20your%20pooja%20services.">{translations[lang].ctaButton}</Button>
            </div>
            <p className="text-xs text-secondary/50 mt-4">We respect your privacy — no spam.</p>
        </div>
    </section>
);


import { useTranslation as useGlobalLang } from './context/LanguageContext.jsx';

export default function AboutPage() {
    const { language } = useGlobalLang();
    const [lang, setLang] = useState('EN');

    useEffect(() => {
        // Map global language to local keys (fallback to EN)
        const map = { en: 'EN', hi: 'HI', mr: 'EN', kn: 'EN', gj: 'EN' };
        setLang(map[language] || 'EN');
        document.title = "About Pandit Aditya Narayan Ji | Authentic Vedic Priest & Astrologer";
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('in-view'));
        }, { threshold: 0.1 });
        document.querySelectorAll('.fade-in-scroll').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, [language]);

    const globalStyles = `
        :root { --primary: #E67E22; --secondary: #800000; --accent: #F4C430; --cream: #FFF7E6; }
        body { background-color: var(--cream); color: var(--secondary); font-family: 'Poppins', sans-serif; -webkit-font-smoothing: antialiased; overflow-x: hidden; }
        .font-playfair { font-family: 'Playfair Display', serif; }

        /* Animations & Effects */
        .fade-in-scroll { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
        .fade-in-scroll.in-view { opacity: 1; transform: translateY(0); }
        
        .timeline-path { background: var(--primary); width: 4px; height: 100%; transition: transform 2s ease-out; transform-origin: top; transform: scaleY(0); border-radius: 2px; }
        .timeline-path-container.in-view .timeline-path { transform: scaleY(1); }
        .milestone-card { transition: transform 0.3s, box-shadow 0.3s; }
        .milestone-card:hover { transform: translateY(-5px) scale(1.02); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
        .timeline-dot { transition: transform 0.5s 0.2s, box-shadow 0.5s 0.2s; }
        .fade-in-scroll.in-view .timeline-dot { transform: scale(1.1); box-shadow: 0 0 15px var(--primary); }

        .rotating-chakra {
            width: 150%; height: 150%; top: -25%; left: -25%;
            background-image: url('data:image/svg+xml;utf8,<svg width=\"100\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"50\" cy=\"50\" r=\"45\" stroke=\"%23E67E22\" stroke-width=\"0.5\" fill=\"none\" stroke-dasharray=\"2 4\"/></svg>');
            background-size: 200px 200px;
            animation: spin 120s linear infinite;
        }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        .light-sweep::before { content: ''; position: absolute; top: 0; left: 0; width: 50%; height: 100%; background: linear-gradient(to right, transparent, var(--accent)/20, transparent); animation: sweep 6s infinite ease-in-out; }
        @keyframes sweep { 
            0% { transform: translateX(-100%); }
            100% { transform: translateX(300%); }
        }

        .floating-symbol { 
            animation: float 6s ease-in-out infinite; 
            filter: drop-shadow(0 0 8px rgba(0,0,0,0.1));
        }
        @keyframes float { 
            0%, 100% { transform: translateY(0px) rotate(0deg); } 
            50% { transform: translateY(-20px) rotate(5deg); } 
        }

        .gallery-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1rem; }
        .gallery-item { position: relative; cursor: pointer; overflow: hidden; border-radius: 0.5rem; aspect-ratio: 4 / 5; }
        .gallery-item img { transition: transform 0.4s ease; }
        .gallery-item:hover img { transform: scale(1.05); }
        .gallery-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); display: flex; align-items: flex-end; justify-content: center; text-align: center; padding: 1rem; opacity: 0; transition: opacity 0.4s ease; }
        .gallery-item:hover .gallery-overlay { opacity: 1; }

        .reason-card { transition: transform 0.3s, box-shadow 0.3s; }
        .reason-card:hover { transform: translateY(-8px); box-shadow: 0 10px 30px rgba(128,0,0,0.1); }
    `;

    return (
        <>
            <style>{globalStyles}</style>
            <div className="relative">
                <AnimatedBackground />
                <main> 
                    <PlanetaryHero lang={lang} />
                    <StatsSection lang={lang} />
                    <IntroFactsSection lang={lang} />
                    <JourneyTimeline lang={lang} />
                    <MissionVisionSection lang={lang} />
                    <WhyChooseUsSection lang={lang} />
                    <GallerySection lang={lang} />
                    <CtaFooterBlock lang={lang} />
                </main>
            </div>
        </>
    );
}

