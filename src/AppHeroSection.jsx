import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate, AnimatePresence } from 'framer-motion';
import kaalSarpDoshImg from '@/assets/poojas/kaal-sarp-dosh.webp';
import PoojaCard from './components/PoojaCard';
import { poojaServicesData } from './data/poojaServices';
import { useNavigate } from 'react-router-dom';

// Import banner images
import weddingBannerImg from './assets/Banner/weedingherosection.webp';
import ritualsBannerImg from './assets/Banner/RitualsBannerHeroSection.webp';
import astrologyBannerImg from './assets/Banner/AstrologyHeroSection.webp';
import matchmakingBannerImg from './assets/Banner/SpirituallyGuidedIndianMatchmaking.webp';

// Import logo
import logoImg from './assets/logo.webp';

// Import service images
import vedicPoojaServicesImg from './assets/HeroPage/Vedic Pooja Services.webp';
import astrologyConsultationsImg from './assets/HeroPage/Astrology Consultations.webp';
import onlineEPoojaImg from './assets/HeroPage/Online  E-Pooja.webp';

// --- Multi-language Support (i18n simulation) ---
const translations = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navServices: "Services",
    navAstrology: "Astrology",
    navTestimonials: "Testimonials",
    navBlog: "Blog",
    navContact: "Contact",
    heroHeadline: "Authentic Vedic Pujas, Just a Click Away",
    heroSubText1: "Experience the divine grace of Sanatan Dharma through authentic Vedic Pujas, personalized Astrology, and sacred rituals performed by trusted Pandits with 12+ years of experience across India.",
    heroSubText2: "Bringing peace, prosperity, and positive energy to every home with devotion and purity.",
    bookPoojaNow: "📿 Book Your Pooja Now",
    bookAstrology: "🔮 Book Astrology Session",
    servicesTitle: "Our Divine Services",
    poojaServices: "Pooja Services",
    astrologyServices: "Astrology",
    onlinePooja: "Online / E-Pooja",
    learnMore: "Learn More →",
    aboutTitle: "Meet Pandit Aditya Narayan Ji",
    aboutText: "With over 12 years of experience performing sacred rituals across India, Pandit Aditya Narayan Ji is known for authentic vedic poojas done as per Sanatan Vidhi. Guided by his father, a revered priest, he continues a legacy of devotion and spiritual service.",
    readMore: "Read More",
    whyChooseUsTitle: "Why Choose Us?",
    spiritualGuides: "Spiritual Guides",
    guidesDesc: "Priests, Pandits, Religious Experts & Consultants",
    typesOfPooja: "Types of Pooja",
    poojaDesc: "Covering all major Vedic rituals and ceremonies",
    poojasPerformed: "Poojas Performed",
    performedDesc: "Bringing peace and blessings across all India",
    popularPoojasTitle: "Most Popular Poojas",
    bookNow: "Book Now",
    testimonialsTitle: "Words of Devotion",
    bookingTitle: "Book a Divine Experience",
    fullName: "Full Name",
    phone: "Phone Number",
    poojaType: "Pooja Type",
    preferredDate: "Preferred Date",
    message: "Additional Message",
    sendOnWhatsApp: "Send Booking Request on WhatsApp",
    footerContact: "Vedic Pooja & Astrology Services",
    footerSpecialPoojas: "Special Pooja Services",
    footerPoojaServices: "Pooja Services",
    footerQuickLinks: "Quick Links",
    footerContactInfo: "Contact Info"
  },
  hi: {
    navHome: "होम",
    navAbout: "हमारे बारे में",
    navServices: "सेवाएं",
    navAstrology: "ज्योतिष",
    navTestimonials: "प्रशंसापत्र",
    navBlog: "ब्लॉग",
    navContact: "संपर्क",
    heroHeadline: "✨ अब घर बैठे करवाएं असली वैदिक पूजा",
    heroSubText1: "सनातन धर्म की दिव्य कृपा का अनुभव करें — अनुभवी और विश्वसनीय पंडितों द्वारा की जाने वाली शुद्ध वैदिक पूजाएं, ज्योतिष परामर्श और विशेष अनुष्ठान के माध्यम से।",
    heroSubText2: "📿 श्रद्धा, शुद्धता और वेदिक विधि से आपके घर में सुख, समृद्धि और सकारात्मक ऊर्जा लाने का हमारा संकल्प।",
    bookPoojaNow: "🕉️ अभी अपनी पूजा बुक करें",
    bookAstrology: "🔮 ज्योतिष सत्र बुक करें",
    servicesTitle: "हमारी दिव्य सेवाएं",
    poojaServices: "पूजा सेवाएं",
    astrologyServices: "ज्योतिष",
    onlinePooja: "ऑनलाइन / ई-पूजा",
    learnMore: " और जानें →",
    aboutTitle: "मिलिए पंडित आदित्य नारायण जी से",
    aboutText: "भारत भर में पवित्र अनुष्ठान करने के 12 से अधिक वर्षों के अनुभव के साथ, पंडित आदित्य नारायण जी सनातन विधि के अनुसार किए गए प्रामाणिक वैदिक पूजा के लिए जाने जाते हैं। अपने पिता, एक सम्मानित पुजारी के मार्गदर्शन में, वह भक्ति और आध्यात्मिक सेवा की विरासत को जारी रखे हुए हैं।",
    readMore: "और पढ़ें",
    whyChooseUsTitle: "हमें क्यों चुनें?",
    spiritualGuides: "आध्यात्मिक मार्गदर्शक",
    guidesDesc: "पुजारी, पंडित, धार्मिक विशेषज्ञ और सलाहकार",
    typesOfPooja: "पूजा के प्रकार",
    poojaDesc: "सभी प्रमुख वैदिक अनुष्ठानों और समारोहों को शामिल करते हुए",
    poojasPerformed: "पूजा संपन्न हुई",
    performedDesc: "पूरे भारत में शांति और आशीर्वाद लाना",
    popularPoojasTitle: "सबसे लोकप्रिय पूजा",
    bookNow: "अभी बुक करें",
    testimonialsTitle: "भक्ति के शब्द",
    bookingTitle: "एक दिव्य अनुभव बुक करें",
    fullName: "पूरा नाम",
    phone: "फ़ोन नंबर",
    poojaType: "पूजा का प्रकार",
    preferredDate: "पसंदीदा तारीख",
    message: "अतिरिक्त संदेश",
    sendOnWhatsApp: "व्हाट्सएप पर बुकिंग अनुरोध भेजें",
    footerContact: "वैदिक पूजा और ज्योतिष सेवाएं",
    footerSpecialPoojas: "विशेष पूजा सेवाएं",
    footerPoojaServices: "पूजा सेवाएं",
    footerQuickLinks: "त्वरित लिंक",
    footerContactInfo: "संपर्क जानकारी"
  },
  mr: {
    navHome: "मुख्यपृष्ठ",
    navAbout: "आमच्याबद्दल",
    navServices: "सेवा",
    navAstrology: "ज्योतिष",
    navTestimonials: "प्रशंसापत्र",
    navBlog: "ब्लॉग",
    navContact: "संपर्क",
    heroHeadline: "✨ घरबसल्या अनुभवा खऱ्या वैदिक पूजांचा दिव्य अनुभव",
    heroSubText1: "सनातन धर्माच्या आशीर्वादाने अनुभवा खऱ्या वैदिक पूजा, वैयक्तिक ज्योतिष उपाय आणि पवित्र विधी, आमचे १२+ वर्षांचा अनुभव असलेले विश्वसनीय पुजारी पुणे, मुंबई, नाशिक, नागपूर आणि इतर शहरांमध्ये सेवा देतात।",
    heroSubText2: "📿 आपल्या घरी शांती, समृद्धी आणि सकारात्मक ऊर्जा आणण्यासाठी आम्ही समर्पित आहोत।",
    bookPoojaNow: "🕉️ आत्ताच आपली पूजा बुक करा",
    bookAstrology: "🔮 ज्योतिष सत्र बुक करा",
    servicesTitle: "आमच्या दिव्य सेवा",
    poojaServices: "पूजा सेवा",
    astrologyServices: "ज्योतिष",
    onlinePooja: "ऑनलाइन / ई-पूजा",
    learnMore: "अधिक जाणून घ्या →",
    aboutTitle: "भेटा पंडित आदित्य नारायण जी",
    aboutText: "भारतभर पवित्र विधी करण्याचा 12 वर्षांपेक्षा जास्त अनुभव असलेले पंडित आदित्य नारायण जी सनातन विधीनुसार केलेल्या अस्सल वैदिक पूजेसाठी ओळखले जातात। त्यांचे वडील, एक आदरणीय पुजारी, यांच्या मार्गदर्शनाखाली ते भक्ती आणि आध्यात्मिक सेवेचा वारसा पुढे चालवत आहेत।",
    readMore: "अधिक वाचा",
    whyChooseUsTitle: "आम्हाला का निवडा?",
    spiritualGuides: "आध्यात्मिक मार्गदर्शक",
    guidesDesc: "पुजारी, पंडित, धार्मिक तज्ञ आणि सल्लागार",
    typesOfPooja: "पूजेचे प्रकार",
    poojaDesc: "सर्व प्रमुख वैदिक विधी आणि समारंभ समाविष्ट आहेत",
    poojasPerformed: "पूजा केली",
    performedDesc: "संपूर्ण भारतात शांती आणि आशीर्वाद आणत आहे",
    popularPoojasTitle: "सर्वात लोकप्रिय पूजा",
    bookNow: "आता बुक करा",
    testimonialsTitle: "भक्तीचे शब्द",
    bookingTitle: "एक दिव्य अनुभव बुक करा",
    fullName: "पूर्ण नाव",
    phone: "फोन नंबर",
    poojaType: "पूजेचा प्रकार",
    preferredDate: "पसंतीची तारीख",
    message: "अतिरिक्त संदेश",
    sendOnWhatsApp: "व्हॉट्सॲपवर बुकिंग विनंती पाठवा",
    footerContact: "वैदिक पूजा आणि ज्योतिष सेवा",
    footerSpecialPoojas: "विशेष पूजा सेवा",
    footerPoojaServices: "पूजा सेवा",
    footerQuickLinks: "जलद लिंक्स",
    footerContactInfo: "संपर्क माहिती"
  },
   kn: {
    navHome: "ಮುಖಪುಟ",
    navAbout: "ನಮ್ಮ ಬಗ್ಗೆ",
    navServices: "ಸೇವೆಗಳು",
    navAstrology: "ಜ್ಯೋತಿಷ್ಯ",
    navTestimonials: "ಪ್ರಶಂಸಾಪತ್ರಗಳು",
    navBlog: "ಬ್ಲಾಗ್",
    navContact: "ಸಂಪರ್ಕಿಸಿ",
    heroHeadline: "✨ ನಿಜವಾದ ವೇದಿಕ ಪೂಜೆಗಳು — ಈಗ ನಿಮ್ಮ ಕ್ಲಿಕ್ಕಿನಲ್ಲಿ",
    heroSubText1: "ಸನಾತನ ಧರ್ಮದ ದಿವ್ಯ ಕೃಪೆಯನ್ನು ಅನುಭವಿಸಿ — 12+ ವರ್ಷಗಳ ಅನುಭವ ಹೊಂದಿದ ವಿಶ್ವಾಸಾರ್ಹ ಪಂಡಿತರು ನೆರವೇರಿಸುವ ಆಸಲಿ ವೇದಿಕ ಪೂಜೆಗಳು, ವೈಯಕ್ತಿಕ ಜ್ಯೋತಿಷ್ಯ ಸಲಹೆ ಮತ್ತು ಪವಿತ್ರ ವಿಧಿಗಳು।",
    heroSubText2: "📿 ಭಕ್ತಿಯಿಂದ, ಶುದ್ಧತೆಯಿಂದ ನಿಮ್ಮ ಮನೆಗೆ ಶಾಂತಿ, ಐಶ್ವರ್ಯ ಮತ್ತು ಸಕಾರಾತ್ಮಕ ಶಕ್ತಿಯನ್ನು ತರಲು ನಮ್ಮ ಪ್ರಯತ್ನ।",
    bookPoojaNow: "🕉️ ಈಗಲೇ ನಿಮ್ಮ ಪೂಜೆಯನ್ನು ಬುಕ್ ಮಾಡಿ",
    bookAstrology: "🔮 ಜ್ಯೋತಿಷ್ಯ ಅಧಿವೇಶನವನ್ನು ಬುಕ್ ಮಾಡಿ",
    servicesTitle: "ನಮ್ಮ ದೈವಿಕ ಸೇವೆಗಳು",
    poojaServices: "ಪೂಜಾ ಸೇವೆಗಳು",
    astrologyServices: "ಜ್ಯೋತಿಷ್ಯ",
    onlinePooja: "ಆನ್‌ಲೈನ್ / ಇ-ಪೂಜೆ",
    learnMore: "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ →",
    aboutTitle: "ಪಂಡಿತ್ ಆದಿತ್ಯ ನಾರಾಯಣ್ ಜಿ ಅವರನ್ನು ಭೇಟಿ ಮಾಡಿ",
    aboutText: "ಭಾರತದಾದ್ಯಂತ 12 ವರ್ಷಗಳಿಗಿಂತ ಹೆಚ್ಚು ಕಾಲ ಪವಿತ್ರ ಆಚರಣೆಗಳನ್ನು ನಡೆಸಿದ ಅನುಭವದೊಂದಿಗೆ, ಪಂಡಿತ್ ಆದಿತ್ಯ ನಾರಾಯಣ್ ಜಿ ಸನಾತನ ವಿಧಿಯ ಪ್ರಕಾರ ನಡೆಸಲಾಗುವ ಅಧಿಕೃತ ವೈದಿಕ ಪೂಜೆಗಳಿಗೆ ಹೆಸರುವಾಸಿಯಾಗಿದ್ದಾರೆ। ಅವರ ತಂದೆ, ಪೂಜ್ಯ ಅರ್ಚಕರ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ, ಅವರು ಭಕ್ತಿ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಸೇವೆಯ ಪರಂಪರೆಯನ್ನು ಮುಂದುವರಿಸಿದ್ದಾರೆ।",
    readMore: "ಮತ್ತಷ್ಟು ಓದಿ",
    whyChooseUsTitle: "ನಮ್ಮನ್ನು ಏಕೆ ಆರಿಸಬೇಕು?",
    spiritualGuides: "ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶಕರು",
    guidesDesc: "ಪುರೋಹಿತರು, ಪಂಡಿತರು, ಧಾರ್ಮಿಕ ತಜ್ಞರು ಮತ್ತು ಸಲಹೆಗಾರರು",
    typesOfPooja: "ಪೂಜೆಯ ವಿಧಗಳು",
    poojaDesc: "ಎಲ್ಲಾ ಪ್ರಮುಖ ವೈದಿಕ ಆಚರಣೆಗಳು ಮತ್ತು ಸಮಾರಂಭಗಳನ್ನು ಒಳಗೊಂಡಿದೆ",
    poojasPerformed: "ಪೂಜೆಗಳನ್ನು ನಡೆಸಲಾಯಿತು",
    performedDesc: "ಭಾರತದಾದ್ಯಂತ ಶಾಂತಿ ಮತ್ತು ಆಶೀರ್ವಾದವನ್ನು ತರುವುದು",
    popularPoojasTitle: "ಅತ್ಯಂತ ಜನಪ್ರಿಯ ಪೂಜೆಗಳು",
    bookNow: "ಈಗಲೇ ಬುಕ್ ಮಾಡಿ",
    testimonialsTitle: "ಭಕ್ತಿಯ ಮಾತುಗಳು",
    bookingTitle: "ಒಂದು ದೈವಿಕ ಅನುಭವವನ್ನು ಬುಕ್ ಮಾಡಿ",
    fullName: "ಪೂರ್ಣ ಹೆಸರು",
    phone: "ದೂರವಾಣಿ ಸಂಖ್ಯೆ",
    poojaType: "ಪೂಜೆಯ ಪ್ರಕಾರ",
    preferredDate: "ಆದ್ಯತೆಯ ದಿನಾಂಕ",
    message: "ಹೆಚ್ಚುವರಿ ಸಂದೇಶ",
    sendOnWhatsApp: "WhatsApp ನಲ್ಲಿ ಬುಕಿಂಗ್ ವಿನಂತಿಯನ್ನು ಕಳುಹಿಸಿ",
    footerContact: "ವೈದಿಕ ಪೂಜೆ ಮತ್ತು ಜ್ಯೋತಿಷ್ಯ ಸೇವೆಗಳು",
    footerSpecialPoojas: "ವಿಶೇಷ ಪೂಜಾ ಸೇವೆಗಳು",
    footerPoojaServices: "ಪೂಜಾ ಸೇವೆಗಳು",
    footerQuickLinks: "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು",
    footerContactInfo: "ಸಂಪರ್ಕ ಮಾಹಿತಿ"
  },
  gj: {
    navHome: "હોમ",
    navAbout: "અમારા વિશે",
    navServices: "સેવાઓ",
    navAstrology: "જ્યોતિષ",
    navTestimonials: "પ્રશંસાપત્રો",
    navBlog: "બ્લોગ",
    navContact: "સંપર્ક",
    heroHeadline: "✨ સાચી વૈદિક પૂજા — હવે માત્ર એક ક્લિકમાં",
    heroSubText1: "અનુભવો સનાતન ધર્મની દિવ્ય કૃપા દ્વારા ખરી વૈદિક પૂજા, વ્યક્તિગત જ્યોતિષ સલાહ અને પવિત્ર વિધિઓ, જે 12+ વર્ષના અનુભવ ધરાવતા વિશ્વસનીય પંડિતો દ્વારા કરવામાં આવે છે.",
    heroSubText2: "📿 શુદ્ધતા અને ભક્તિ સાથે તમારા ઘરમાં શાંતિ, સમૃદ્ધિ અને સકારાત્મક ઊર્જા લાવવાનો અમારો સંકલ્પ.",
    bookPoojaNow: "🕉️ હમણાં જ તમારી પૂજા બુક કરો",
    bookAstrology: "🔮 જ્યોતિષ સત્ર બુક કરો",
    servicesTitle: "અમારી દિવ્ય સેવાઓ",
    poojaServices: "પૂજા સેવાઓ",
    astrologyServices: "જ્યોતિષ",
    onlinePooja: "ઓનલાઈન / ઈ-પૂજા",
    learnMore: "વધુ જાણો →",
    aboutTitle: "પંડિત આદિત્ય નારાયણજીને મળો",
    aboutText: "ભારતભરમાં 12 વર્ષથી વધુ સમયથી પવિત્ર વિધિઓ કરવાનો અનુભવ ધરાવતા, પંડિત આદિત્ય નારાયણજી સનાતન વિધિ મુજબ કરવામાં આવતી અધિકૃત વૈદિક પૂજાઓ માટે જાણીતા છે. તેમના પિતા, એક આदरણીય પૂજારીના માર્ગદર્શન હેઠળ, તેઓ ભક્તિ અને આધ્યાત્મિક સેવાનો વારસો ચાલુ રાખે છે.",
    readMore: "વધુ વાંચો",
    whyChooseUsTitle: "અમને કેમ પસંદ કરો?",
    spiritualGuides: "આધ્યાત્મિક માર્ગદર્શકો",
    guidesDesc: "પૂજારીઓ, પંડિતો, ધાર્મિક નિષ્ણાતો અને સલાહકારો",
    typesOfPooja: "પૂજાના પ્રકારો",
    poojaDesc: "બધા મુખ્ય વૈદિક વિધિઓ અને સમારોહને આવરી લે છે",
    poojasPerformed: "પૂજાઓ કરવામાં આવી",
    performedDesc: "સમગ્ર ભારતમાં શાંતિ અને આશીર્વાદ લાવે છે",
    popularPoojasTitle: "સૌથી વધુ લોકપ્રિય પૂજાઓ",
    bookNow: "હમણાં બુક કરો",
    testimonialsTitle: "ભક્તિના શબ્દો",
    bookingTitle: "એક દિવ્ય અનુભવ બુક કરો",
    fullName: "પૂરું નામ",
    phone: "ફોન નંબર",
    poojaType: "પૂજાનો પ્રકાર",
    preferredDate: "પસંદગીની તારીખ",
    message: "વધારાનો સંદેશ",
    sendOnWhatsApp: "WhatsApp પર બુકિંગ વિનંતી મોકલો",
    footerContact: "વૈદિક પૂજા અને જ્યોતિષ સેવાઓ",
    footerSpecialPoojas: "વિશેષ પૂજા સેવાઓ",
    footerPoojaServices: "પૂજા સેવાઓ",
    footerQuickLinks: "ઝડપી લિંક્સ",
    footerContactInfo: "સંપર્ક માહિતી"
  }
};

const LanguageContext = React.createContext();

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

const useTranslation = () => React.useContext(LanguageContext);


// --- Helper Components & Data ---

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


const testimonials = [
    { name: "Priya Sharma", city: "Mumbai", rating: 5, feedback: "Pandit Ji's guidance was a blessing. The pooja was performed with utmost devotion and brought peace to our family." },
    { name: "राजेश कुमार", city: "वाराणसी", rating: 5, feedback: "पंडित जी बहुत ज्ञानी हैं। उन्होंने हमारे घर की पूजा बहुत अच्छे से करवाई। हम बहुत संतुष्ट हैं।" },
    { name: "स्नेहल जोशी", city: "पुणे", rating: 5, feedback: "पंडितजींनी सांगितलेले उपाय खूप प्रभावी ठरले. त्यांच्यामुळे माझ्या आयुष्यात सकारात्मक बदल झाले." },
    { name: "ભાવેશ પટેલ", city: "અમદાવાદ", rating: 5, feedback: "પંડિતજીની સલાહ ખૂબ જ સચોટ અને ઉપયોગી હતી. ઓનલાઈન પૂજાનો અનુભવ પણ અદ્ભુત રહ્યો." },
    { name: "Anjali Singh", city: "Kanpur", rating: 5, feedback: "The online pooja felt just as powerful as a physical one. Pandit Ji's energy transcends the screen. Highly recommended." },
];


const blogPosts = [
    { title: "Why Vastu Shanti is Important Before Moving In", description: "Learn about the significance of Vastu Shanti puja for a harmonious and prosperous life in your new home.", image: "https://placehold.co/400x300/FFF7E6/800000?text=Vastu+Shanti" },
    { title: "5 Auspicious Muhurats for Marriage in 2025", description: "Discover the most auspicious dates and times for tying the knot in the upcoming year.", image: "https://placehold.co/400x300/FFF7E6/800000?text=Marriage+Muhurat" },
    { title: "What is Kaal Sarp Dosh and How to Remove It?", description: "An in-depth guide to understanding and mitigating the effects of Kaal Sarp Dosh in your horoscope.", image: kaalSarpDoshImg },
];

const AnimatedSection = ({ children, className = "" }) => {
    return (
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
};

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

// --- Main Page Sections ---

const Navbar = () => {
    const { t, language, setLanguage } = useTranslation();
    const languages = [
        { code: 'en', name: 'English' },
        { code: 'hi', name: 'हिंदी' },
        { code: 'mr', name: 'मराठी' },
        { code: 'kn', name: 'ಕನ್ನಡ' },
        { code: 'gj', name: 'ગુજરાતી' },
    ];
    const FlamingSunIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m4.93 19.07 1.41-1.41" />
            <path d="m17.66 6.34 1.41-1.41" />
        </svg>
    );

    const NavLink = ({ href, children }) => (
         <a href={href} className="relative group text-gray-700 font-semibold py-2">
            <span className="relative z-10">{children}</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E67E22] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
        </a>
    );

    return (
        <header className="bg-white/80 backdrop-blur-md shadow-md fixed w-full z-50">
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center py-4">
                <div className="flex items-center gap-2 -ml-2">
                    <img src={logoImg} alt="Vedic Pooja Logo" className="h-10 w-auto" />
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    <NavLink href="#home">{t.navHome}</NavLink>
                    <NavLink href="#about">{t.navAbout}</NavLink>
                    <NavLink href="#services">{t.navServices}</NavLink>
                    <NavLink href="#astrology">{t.navAstrology}</NavLink>
                    <NavLink href="#testimonials">{t.navTestimonials}</NavLink>
                    <NavLink href="#blog">{t.navBlog}</NavLink>
                    <NavLink href="#contact">{t.navContact}</NavLink>
                </nav>
                <div className="flex items-center">
                     <select 
                        value={language} 
                        onChange={(e) => setLanguage(e.target.value)}
                        className="bg-transparent border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#E67E22]"
                     >
                        {languages.map(lang => (
                            <option key={lang.code} value={lang.code}>{lang.name}</option>
                        ))}
                    </select>
                </div>
            </div>
        </header>
    );
};

const HeroSection = ({ onBookPoojaClick }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const slides = [
        { image: weddingBannerImg },
        { image: ritualsBannerImg },
        { image: astrologyBannerImg },
        { image: matchmakingBannerImg },
    ];
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section id="home" className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden pt-20">
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
                    className="text-4xl md:text-6xl font-extrabold mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', serif", textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
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
                    <button onClick={() => navigate('/pooja')} className="px-8 py-3 bg-[#E67E22] text-white font-bold rounded-lg shadow-xl hover:bg-[#c66919] transition-transform transform hover:scale-105 duration-300 ease-in-out">
                        {t.bookPoojaNow}
                    </button>
                     <button onClick={onBookPoojaClick} className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg shadow-xl hover:bg-white hover:text-[#E67E22] transition-colors duration-300 ease-in-out">
                        {t.bookAstrology}
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

const ServicesOverview = () => {
    const { t } = useTranslation();
    const services = [
        { imageSrc: vedicPoojaServicesImg, title: t.poojaServices, link: "/pooja" },
        { imageSrc: astrologyConsultationsImg, title: t.astrologyServices, link: "/astrology" },
        { imageSrc: onlineEPoojaImg, title: t.onlinePooja, link: "/pooja?category=online" },
    ];

    return (
        <section id="services" className="py-20 bg-transparent">
            <div className="container mx-auto px-4">
                <AnimatedSection>
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-[#800000] mb-12" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{t.servicesTitle}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.a
                                href={service.link}
                                key={index}
                                className="block p-8 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-300 ease-in-out"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                whileHover={{ y: -10, boxShadow: "0px 20px 30px rgba(128, 0, 0, 0.1)"}}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <img src={service.imageSrc} alt={service.title} className="h-24 w-24 mb-4 object-contain" />
                                    <h3 className="text-xl font-semibold text-[#800000] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{service.title}</h3>
                                    <span className="text-[#E67E22] font-medium mt-4 group-hover:underline">{t.learnMore}</span>
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

const PopularPoojasSection = ({ onBookPoojaClick }) => {
    const { t } = useTranslation();

    // Select specific popular poojas in the exact order specified
    const popularPoojas = [
        poojaServicesData.find(p => p.name === "Engagement Puja (Sagai)"),
        poojaServicesData.find(p => p.name === "Naamkaran Sanskar"),
        poojaServicesData.find(p => p.name === "Shubh Vivah (Marriage Puja)"),
        poojaServicesData.find(p => p.name === "Kaal Sarp Dosh Shanti"),
        poojaServicesData.find(p => p.name === "Birthday Puja (Janmadin Puja)"),
        poojaServicesData.find(p => p.name === "Office Opening Puja (Vastu Puja)"),
        poojaServicesData.find(p => p.name === "Vastu Dosh Nivaran"),
        poojaServicesData.find(p => p.name === "Rudrabhishek"),
        poojaServicesData.find(p => p.name === "Satyanarayan Puja"),
        poojaServicesData.find(p => p.name === "Rudra Yagna"),
        poojaServicesData.find(p => p.name === "Mundan Sanskar"),
        poojaServicesData.find(p => p.name === "Bhoomi Pujan")
    ].filter(Boolean); // Remove any undefined entries

    return (
        <section id="astrology" className="py-20 bg-transparent">
            <div className="container mx-auto px-4">
                <AnimatedSection>
                      <h2 className="text-4xl md:text-5xl font-bold text-center text-[#800000] mb-12" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{t.popularPoojasTitle}</h2>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                         {popularPoojas.map((pooja, index) => (
                              <PoojaCard
                                 key={pooja.id}
                                 pooja={pooja}
                                 onBookClick={onBookPoojaClick}
                                 className="h-full"
                              />
                         ))}
                      </div>
                </AnimatedSection>
            </div>
        </section>
    )
}


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
                        <a href="/about" className="px-8 py-3 bg-[#E67E22] text-white font-semibold rounded-lg shadow-md hover:bg-[#c66919] transition-all duration-300">
                           {t.readMore}
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
}

const BlogSection = () => {
    const { t } = useTranslation();
    return(
         <section id="blog" className="py-20 bg-transparent">
              <div className="container mx-auto px-4">
                  <AnimatedSection>
                       <h2 className="text-4xl md:text-5xl font-bold text-center text-[#800000] mb-12" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Knowledge Hub</h2>
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          {blogPosts.map((post, index) => (
                              <motion.div key={index} className="bg-white/70 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                              >
                                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                                  <div className="p-6">
                                      <h3 className="text-xl font-bold text-[#800000] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{post.title}</h3>
                                      <p className="text-gray-600 mb-4">{post.description}</p>
                                      <a href="#" className="font-semibold text-[#E67E22] hover:underline">{t.readMore}</a>
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
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-[#800000] mb-12" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{t.testimonialsTitle}</h2>
                </AnimatedSection>
                <div className="relative w-full overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                    <motion.div
                        className="flex gap-8"
                        animate={{ x: ['-0%', '-100%'] }}
                        transition={{
                            ease: 'linear',
                            duration: 40,
                            repeat: Infinity,
                        }}
                    >
                        {duplicatedTestimonials.map((testimonial, index) => (
                            <div key={index} className="flex-shrink-0 w-80 md:w-96 p-8 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg">
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} />)}
                                </div>
                                <p className="text-gray-700 mb-4 italic">"{testimonial.feedback}"</p>
                                <div className="text-right">
                                    <p className="font-bold text-[#800000]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.city}</p>
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
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-[#800000] mb-12" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{t.bookingTitle}</h2>
                    <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-2xl">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-[#800000] font-medium mb-2">{t.fullName}</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-orange-200 bg-white/50 rounded-lg focus:ring-2 focus:ring-[#E67E22] focus:outline-none" required />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-[#800000] font-medium mb-2">{t.phone}</label>
                                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border border-orange-200 bg-white/50 rounded-lg focus:ring-2 focus:ring-[#E67E22] focus:outline-none" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="poojaType" className="block text-[#800000] font-medium mb-2">{t.poojaType}</label>
                                    <select id="poojaType" name="poojaType" value={formData.poojaType} onChange={handleChange} className="w-full p-3 border border-orange-200 rounded-lg bg-white/50 focus:ring-2 focus:ring-[#E67E22] focus:outline-none">
                                        <option>Griha Pravesh</option>
                                        <option>Shubh Vivah</option>
                                        <option>Satyanarayan Pooja</option>
                                        <option>Vastu Shanti Pooja</option>
                                        <option>Astrology Consultation</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="date" className="block text-[#800000] font-medium mb-2">{t.preferredDate}</label>
                                    <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-3 border border-orange-200 rounded-lg bg-white/50 focus:ring-2 focus:ring-[#E67E22] focus:outline-none" />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-[#800000] font-medium mb-2">{t.message}</label>
                                <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full p-3 border border-orange-200 rounded-lg bg-white/50 focus:ring-2 focus:ring-[#E67E22] focus:outline-none"></textarea>
                            </div>
                            <button type="submit" className="w-full py-4 bg-[#E67E22] text-white font-bold text-lg rounded-lg shadow-md hover:bg-[#c66919] transition-all duration-300">
                                {t.sendOnWhatsApp}
                            </button>
                        </form>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

const FloatingButtons = () => {
    return (
        <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
             <a href="https://wa.me/8668552465" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.003 2.011.564 3.996 1.59 5.711l-1.023 3.75z"/></svg>
             </a>
        </div>
    )
}

const Footer = () => {
    const {t} = useTranslation();
    const specialPoojas = ["Griha Pravesh", "Shubh Vivah", "Naamkaran Sanskar"];
    const poojaServices = ["Vastu Shanti", "Pitru Dosh Nivaran", "Rudrabhishek"];
    return (
        <footer className="bg-[#800000] text-orange-100 py-12" style={{fontFamily: "'Lato', sans-serif"}}>
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                     <h3 className="text-xl font-bold mb-4" style={{fontFamily: "'Cormorant Garamond', serif"}}>{t.footerSpecialPoojas}</h3>
                     <ul>
                         {specialPoojas.map(pooja => <li key={pooja} className="mb-2"><a href="#" className="hover:text-white transition-colors">{pooja}</a></li>)}
                     </ul>
                </div>
                 <div>
                     <h3 className="text-xl font-bold mb-4" style={{fontFamily: "'Cormorant Garamond', serif"}}>{t.footerPoojaServices}</h3>
                     <ul>
                         {poojaServices.map(pooja => <li key={pooja} className="mb-2"><a href="#" className="hover:text-white transition-colors">{pooja}</a></li>)}
                     </ul>
                </div>
                 <div>
                     <h3 className="text-xl font-bold mb-4" style={{fontFamily: "'Cormorant Garamond', serif"}}>{t.footerQuickLinks}</h3>
                     <ul>
                         <li className="mb-2"><a href="#about" className="hover:text-white transition-colors">{t.navAbout}</a></li>
                         <li className="mb-2"><a href="#services" className="hover:text-white transition-colors">{t.navServices}</a></li>
                         <li className="mb-2"><a href="#blog" className="hover:text-white transition-colors">{t.navBlog}</a></li>
                     </ul>
                </div>
                 <div>
                     <h3 className="text-xl font-bold mb-4" style={{fontFamily: "'Cormorant Garamond', serif"}}>{t.footerContactInfo}</h3>
                     <p className="mb-2">Email: <a href="mailto:amardwivedi792@gmail.com" className="hover:text-white">amardwivedi792@gmail.com</a></p>
                     <p className="mb-2">WhatsApp: <a href="https://wa.me/8668552465" className="hover:text-white">8668552465</a></p>
                     <p className="mb-2">Instagram: <a href="https://www.instagram.com/adityanarayan3081?igsh=eGI5dnZtNWJ6OGo1" className="hover:text-white">@adityanarayan3081</a></p>
                </div>
            </div>
            <div className="text-center mt-10 pt-6 border-t border-orange-200/20">
                <p className="text-sm text-orange-200">&copy; {new Date().getFullYear()} Vedic Pooja. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default function App() {
    const bookingSectionRef = useRef(null);

    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Lato:wght@400;700&display=swap');
        `;
        document.head.appendChild(style);
    }, []);

    const handleBookPoojaClick = () => {
        bookingSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <LanguageProvider>
            <div 
                style={{
                    fontFamily: "'Lato', sans-serif",
                    backgroundColor: '#FFF7E6',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23E67E22' fill-opacity='0.25'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundAttachment: 'fixed'
                }}
            >
                <div>
                    <Navbar />
                    <main>
                        <HeroSection onBookPoojaClick={handleBookPoojaClick} />
                        <ServicesOverview />
                        <AboutPreview />
                        <WhyChooseUsSection />
                        <PopularPoojasSection onBookPoojaClick={onBookPoojaClick} />
                        <GallerySection />
                        <TestimonialsSlider />
                        <BlogSection />
                        <BookingSection forwardedRef={bookingSectionRef} />
                    </main>
                    <FloatingButtons />
                    <Footer />
                </div>
            </div>
        </LanguageProvider>
    );
}

