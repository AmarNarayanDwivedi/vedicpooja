import React, { useState, useEffect } from 'react';
import { Star, ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Helper Functions & Data ---

// Translations for multi-language support
const translations = {
  en: {
    logo: 'Divine Rituals',
    navAstrology: 'Astrology',
    consultNow: 'Consult Now',
    astrologyHeroTitle: 'Discover the Power of Astrology with Expert Guidance',
    all: 'All',
    marriage: 'Marriage',
    career: 'Career',
    health: 'Health',
    finance: 'Finance',
    spiritual: 'Spiritual',
    footerCTA: 'Schedule your astrology consultation now on WhatsApp 📱.',
    consultationPrice: 'Consulting starts at',
    bookYourSession: 'Book Your Session!',
  },
  hi: {
    logo: 'दिव्य अनुष्ठान',
    navAstrology: 'ज्योतिष',
    consultNow: 'अभी परामर्श करें',
    astrologyHeroTitle: 'विशेषज्ञ मार्गदर्शन के साथ ज्योतिष की शक्ति की खोज करें',
    all: 'सभी',
    marriage: 'विवाह',
    career: 'करियर',
    health: 'स्वास्थ्य',
    finance: 'वित्त',
    spiritual: 'आध्यात्मिक',
    footerCTA: 'व्हाट्सएप पर अभी अपना ज्योतिष परामर्श शेड्यूल करें 📱।',
    consultationPrice: 'परामर्श शुरू होता है',
    bookYourSession: 'अपना सत्र बुक करें!',
  },
};


// --- Mock Astrology Data (simulating fetch from MongoDB) ---
const astrologyServices = [
    { id: 1, icon: '📜', category: 'marriage', en: { name: 'Kundali Matching', description: 'Find perfect compatibility for marriage with detailed Guna Milan.' }, hi: { name: 'कुंडली मिलान', description: 'विस्तृत गुण मिलान के साथ विवाह के लिए सही अनुकूलता खोजें।' } },
    { id: 2, icon: '🪐', category: 'spiritual', en: { name: 'Rahu-Ketu Dosh Analysis', description: 'Remedies to balance planetary effects and remove obstacles.' }, hi: { name: 'राहु-केतु दोष विश्लेषण', description: 'ग्रहों के प्रभाव को संतुलित करने और बाधाओं को दूर करने के उपाय।' } },
    { id: 3, icon: '🏡', category: 'spiritual', en: { name: 'Vastu Consultation', description: 'Bring harmony and positive energy to your home or office.' }, hi: { name: 'वास्तु परामर्श', description: 'अपने घर या कार्यालय में सद्भाव और सकारात्मक ऊर्जा लाएं।' } },
    { id: 4, icon: '💎', category: 'health', en: { name: 'Gemstone Suggestion', description: 'Know which gemstone suits your stars for luck and well-being.' }, hi: { name: 'रत्न सुझाव', description: 'जानें कि भाग्य और कल्याण के लिए कौन सा रत्न आपके सितारों के अनुकूल है।' } },
    { id: 5, icon: '🔢', category: 'career', en: { name: 'Numerology Reading', description: 'Unlock the secrets of your life path through numbers.' }, hi: { name: 'अंक ज्योतिष पठन', description: 'संख्याओं के माध्यम से अपने जीवन पथ के रहस्यों को खोलें।' } },
    { id: 6, icon: '✋', category: 'career', en: { name: 'Palmistry Analysis', description: 'Discover your future and personality from the lines on your hand.' }, hi: { name: 'हस्तरेखा विश्लेषण', description: 'अपने हाथ की रेखाओं से अपने भविष्य और व्यक्तित्व की खोज करें।' } },
    { id: 7, icon: '🎴', category: 'finance', en: { name: 'Tarot Card Reading', description: 'Get insights and guidance on your life questions.' }, hi: { name: 'टैरो कार्ड रीडिंग', description: 'अपने जीवन के प्रश्नों पर अंतर्दृष्टि और मार्गदर्शन प्राप्त करें।' } },
    { id: 8, icon: '📅', category: 'finance', en: { name: 'Panchang Details', description: 'Find auspicious timings for important events and ceremonies.' }, hi: { name: 'पंचांग विवरण', description: 'महत्वपूर्ण घटनाओं और समारोहों के लिए शुभ मुहूर्त खोजें।' } },
    { id: 9, icon: '👶', category: 'marriage', en: { name: 'Child Naming (Namkaran)', description: 'Choose a powerful and auspicious name for your newborn.' }, hi: { name: 'बच्चे का नामकरण', description: 'अपने नवजात शिशु के लिए एक शक्तिशाली और शुभ नाम चुनें।' } },
    { id: 10, icon: '📈', category: 'career', en: { name: 'Career Astrology', description: 'Guidance on choosing the right career path for success.' }, hi: { name: 'करियर ज्योतिष', description: 'सफलता के लिए सही करियर पथ चुनने पर मार्गदर्शन।' } },
    { id: 11, icon: '💰', category: 'finance', en: { name: 'Financial Astrology', description: 'Improve your financial situation with astrological remedies.' }, hi: { name: 'वित्तीय ज्योतिष', description: 'ज्योतिषीय उपायों से अपनी वित्तीय स्थिति में सुधार करें।' } },
    { id: 12, icon: '❤️', category: 'health', en: { name: 'Health Astrology', description: 'Understand health challenges and find remedies through your chart.' }, hi: { name: 'स्वास्थ्य ज्योतिष', description: 'अपने चार्ट के माध्यम से स्वास्थ्य चुनौतियों को समझें और उपाय खोजें।' } },
    { id: 13, icon: '✈️', category: 'career', en: { name: 'Foreign Travel & Settlement', description: 'Astrological insights on prospects of traveling or living abroad.' }, hi: { name: 'विदेश यात्रा और निपटान', description: 'विदेश यात्रा या रहने की संभावनाओं पर ज्योतिषीय अंतर्दृष्टि।' } },
    { id: 14, icon: '⚖️', category: 'spiritual', en: { name: 'Kaal Sarp Dosh Analysis', description: 'Understand and perform remedies for Kaal Sarp Dosh effects.' }, hi: { name: 'काल सर्प दोष विश्लेषण', description: 'काल सर्प दोष के प्रभावों को समझें और उपाय करें।' } },
    { id: 15, icon: '🔥', category: 'marriage', en: { name: 'Mangal Dosh Analysis', description: 'Identify Mangal Dosh and its remedies for a happy marriage.' }, hi: { name: 'मंगल दोष विश्लेषण', description: 'खुशहाल शादी के लिए मंगल दोष और उसके उपायों को पहचानें।' } },
    { id: 16, icon: '🎓', category: 'career', en: { name: 'Education Astrology', description: 'Guidance for students to excel in their studies and exams.' }, hi: { name: 'शिक्षा ज्योतिष', description: 'छात्रों को उनकी पढ़ाई और परीक्षाओं में उत्कृष्टता प्राप्त करने के लिए मार्गदर्शन।' } },
    { id: 17, icon: '📊', category: 'finance', en: { name: 'Business Astrology', description: 'Get insights on business growth, partnerships, and new ventures.' }, hi: { name: 'व्यापार ज्योतिष', description: 'व्यापार वृद्धि, साझेदारी और नए उद्यमों पर अंतर्दृष्टि प्राप्त करें।' } },
    { id: 18, icon: '🌿', category: 'health', en: { name: 'Medical Astrology', description: 'Astrological perspective on health, diseases, and recovery.' }, hi: { name: 'चिकित्सा ज्योतिष', description: 'स्वास्थ्य, बीमारियों और पुनर्प्राप्ति पर ज्योतिषीय दृष्टिकोण।' } },
    { id: 19, icon: '🙏', category: 'spiritual', en: { name: 'Pitra Dosh Nivaran', description: 'Remedies to pacify ancestral afflictions in your horoscope.' }, hi: { name: 'पितृ दोष निवारण', description: 'आपकी कुंडली में पैतृक कष्टों को शांत करने के उपाय।' } },
    { id: 20, icon: '☀️', category: 'health', en: { name: 'Shani Sade Sati Analysis', description: 'Navigate the challenging period of Sade Sati with remedies.' }, hi: { name: 'शनि साढ़े साती विश्लेषण', description: 'उपायों के साथ साढ़े साती की चुनौतीपूर्ण अवधि को नेविगेट करें।' } },
];


// --- Reusable Components ---

const Header = ({ language, setLanguage, t }) => {
    return (
        <header className="bg-[#FFF7E6]/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-playfair font-bold text-[#800000]">{t.logo}</h1>
                <nav className="hidden md:flex items-center space-x-8 font-poppins text-lg text-[#800000]">
                    <a className="text-[#E67E22] font-semibold cursor-pointer">{t.navAstrology}</a>
                </nav>
                <div className="flex items-center space-x-4">
                    <div className="relative font-poppins">
                        <button onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')} className="flex items-center justify-center w-28 h-10 bg-[#800000] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E67E22] transition-transform transform hover:scale-105">
                            <span className="mr-2">{language === 'en' ? 'English' : 'हिन्दी'}</span>
                            <ChevronDown className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

const BookingPopup = ({ t, onBook }) => {
    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) return null;

    return (
        <motion.div
            className="fixed bottom-5 right-5 z-50 bg-gradient-to-br from-[#E67E22] to-[#F4C430] p-4 rounded-lg shadow-2xl text-white flex items-center space-x-4"
            initial={{ opacity: 0, y: 50, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 2 }}
        >
            <motion.div
                animate={{ rotate: [0, 10, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                className="text-3xl"
            >
                📱
            </motion.div>
            <div>
                <h4 className="font-playfair font-bold">{t.bookYourSession}</h4>
                <button onClick={onBook} className="text-sm underline">Click here!</button>
            </div>
            <button onClick={() => setIsOpen(false)} className="absolute -top-2 -right-2 bg-white text-[#800000] rounded-full p-0.5">
                <X size={16} />
            </button>
        </motion.div>
    );
}

// --- Page Components ---

const CosmicBackground = () => {
    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            {/* Sun */}
            <motion.div
                className="absolute top-1/2 left-1/2 w-32 h-32 bg-yellow-400 rounded-full"
                style={{ filter: 'blur(15px)' }}
                animate={{ scale: [1, 1.1, 1], opacity: [0.7, 0.9, 0.7] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
            />
            
            {/* Kundali */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-24 h-24"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            >
                <div className="w-full h-full border-2 border-[#F4C430]/90 transform rotate-45"></div>
                <div className="absolute inset-0 w-full h-full border-2 border-[#F4C430]/90"></div>
                <div className="absolute top-0 left-0 w-full h-full transform origin-top-left" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} >
                    <div className="w-full h-full border-2 border-[#F4C430]/90 transform -rotate-45 scale-141"></div>
                </div>
                 <div className="absolute bottom-0 right-0 w-full h-full transform origin-bottom-right" style={{ clipPath: 'polygon(100% 100%, 0 100%, 100% 0)' }} >
                    <div className="w-full h-full border-2 border-[#F4C430]/90 transform -rotate-45 scale-141"></div>
                </div>
            </motion.div>

             {/* Moon */}
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-16 h-16 rounded-full border-4 border-white/80"
                style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
             />

            {/* Orbit 1 with Planet */}
            <motion.div className="absolute top-1/2 left-1/2 w-96 h-96 border border-white/40 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            >
                <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-400 rounded-full" />
            </motion.div>

            {/* Orbit 2 with Saturn */}
             <motion.div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] border border-white/40 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                     <motion.div className="w-6 h-6 bg-amber-300 rounded-full relative">
                         <motion.div className="absolute inset-[-4px] border border-amber-300/80 rounded-[50%] w-10 h-4 transform rotate-[-30deg]" />
                     </motion.div>
                </div>
            </motion.div>

        </div>
    );
};


const AstrologyPage = ({ language, handleBooking }) => {
    const t = translations[language];
    const categories = ['all', 'marriage', 'career', 'health', 'finance', 'spiritual'];
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredServices = activeFilter === 'all'
        ? astrologyServices
        : astrologyServices.filter(service => service.category === activeFilter);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
            >
                <section className="relative text-center py-20 px-6 overflow-hidden rounded-xl bg-gray-900/30 mb-2">
                    <CosmicBackground />
                    <div className="relative z-10">
                        <motion.h2 
                            className="text-4xl md:text-6xl font-playfair font-bold text-[#800000] mb-4"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            {t.astrologyHeroTitle}
                        </motion.h2>
                        <motion.p 
                            className="font-poppins text-lg text-[#800000]/80"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            Your cosmic blueprint awaits. Navigate life's journey with clarity and confidence.
                        </motion.p>
                    </div>
                </section>
                <motion.div 
                    className="w-full flex justify-center mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <div className="w-full bg-gradient-to-r from-[#800000] to-[#E67E22] text-white font-playfair text-center py-3 shadow-lg">
                        <span className="italic text-lg">{t.consultationPrice}</span>
                        <s className="mx-2 opacity-75 text-lg">₹501</s>
                        <span className="font-bold text-2xl">just ₹201</span>
                    </div>
                </motion.div>

                <section className="flex flex-col md:flex-row gap-12">
                    <aside className="md:w-1/4">
                        <div className="sticky top-24">
                            <h3 className="text-2xl font-playfair font-bold text-[#800000] mb-4">Categories</h3>
                            <ul className="space-y-2 font-poppins">
                                {categories.map(cat => (
                                    <li key={cat}>
                                        <button
                                            onClick={() => setActiveFilter(cat)}
                                            className={`w-full text-left p-3 rounded-md transition-colors ${activeFilter === cat ? 'bg-[#E67E22] text-white font-semibold' : 'hover:bg-[#E67E22]/20'}`}
                                        >
                                            {t[cat]}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    <main className="flex-1">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeFilter}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.4 }}
                                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {filteredServices.map(service => (
                                    <motion.div
                                        key={service.id}
                                        className="bg-white/80 rounded-lg shadow-lg p-6 text-center flex flex-col items-center"
                                        whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
                                    >
                                        <div className="text-5xl mb-4">{service.icon}</div>
                                        <h4 className="text-xl font-playfair font-bold text-[#800000] mb-2">{service[language].name}</h4>
                                        <p className="font-poppins text-gray-600 flex-grow mb-4">{service[language].description}</p>
                                        <motion.button
                                            onClick={() => handleBooking(service[language].name, 'Astrology Consultation', 201)}
                                            className="w-full bg-[#800000] text-white font-bold py-2 rounded-md font-poppins mt-auto"
                                            whileHover={{ scale: 1.05, backgroundColor: '#E67E22' }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {t.consultNow}
                                        </motion.button>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </main>
                </section>
            </motion.div>
        </AnimatePresence>
    );
};


// --- Main App Component ---

import { useTranslation as useGlobalLang } from './context/LanguageContext.jsx';

export default function AstrologyPageView() {
  const { language } = useGlobalLang();
  const lang = translations[language] ? language : 'en';
  const t = translations[lang];

  const handleBooking = (serviceTitle, planName, price) => {
    const base = serviceTitle ? `consult about *${serviceTitle}*` : 'schedule a general astrology consultation';
    const priceText = price ? ` for ₹${price}` : '';
    const message = `Hello, I would like to ${base}${priceText}. Please let me know the details. Thank you.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/8668552465?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };
  
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-6 py-12">
        <AstrologyPage language={lang} handleBooking={handleBooking} />
      </main>
    </div>
  );
}

