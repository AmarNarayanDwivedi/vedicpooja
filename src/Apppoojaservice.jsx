import React, { useState, useEffect, useContext, createContext } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, StarHalf, CheckCircle, Phone, X, PartyPopper, Search } from 'lucide-react';
import { poojaServicesData } from './data/poojaServices.js';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from './components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Toggle } from './components/ui/toggle';

// Import banner image
import serviceBannerImg from './assets/Banner/service-page.webp';

// --- I18N CONFIGURATION & CUSTOM HOOK ---
const resources = {
  en: {
    translation: {
      "appName": "Sacred Rites",
      "all": "All",
      "home": "Home",
      "marriage": "Marriage",
      "child": "Child",
      "dosha": "Dosha",
      "festivals": "Festivals",
      "online": "Online",
      "viewDetails": "View Details",
      "bookViaWhatsApp": "Book via WhatsApp",
      "packages": "Packages",
      "basic": "Basic",
      "standard": "Standard",
      "premium": "Premium",
      "includes": "Includes:",
      "reviews": "Reviews",
      "hurryUp": "Hurry Up!",
      "offer": "Get an extra 10% OFF on all bookings today!",
      "close": "Close",
      "bookNow": "Book Now",
      "rating": "Rating",
      "heroHeadline": "Authentic Vedic Pujas, Booked with Ease",
      "heroSubText": "Authentic Vedic rituals, performed by trusted professionals. We provide experienced and verified Pandit Jis for all Hindu pujas, including housewarmings, weddings, Satyanarayan Kathas, and more. We ensure every ceremony is conducted with spiritual precision at your home or location. Book now for a seamless and divine puja experience.",
      "searchPlaceholder": "Search for a puja (e.g., Griha Pravesh, Satyanarayan)",
      "trustBadge1": "4000+ Verified Pandits",
      "trustBadge2": "500+ Types of Pujas",
      "trustBadge3": "1M+ Pujas Performed",
      "trustBadge4": "12+ Years Experience"
    }
  },
  hi: {
    translation: {
      "appName": "पवित्र संस्कार",
      "all": "सभी",
      "home": "गृह",
      "marriage": "विवाह",
      "child": "संतान",
      "dosha": "दोष",
      "festivals": "त्यौहार",
      "online": "ऑनलाइन",
      "viewDetails": "विवरण देखें",
      "bookViaWhatsApp": "व्हाट्सएप पर बुक करें",
      "packages": "पैकेज",
      "basic": "बेसिक",
      "standard": "स्टैंडर्ड",
      "premium": "प्रीमियम",
      "includes": "शामिल हैं:",
      "reviews": "समीक्षाएं",
      "hurryUp": "जल्दी कीजिये!",
      "offer": "आज सभी बुकिंग पर 10% की अतिरिक्त छूट पाएं!",
      "close": "बंद करे",
      "bookNow": "अभी बुक करें",
      "rating": "रेटिंग",
      "heroHeadline": "सच्ची वैदिक पूजा, आसानी से बुक करें",
      "heroSubText": "अपनी आवश्यकताओं के लिए सही पूजा खोजें। अनुभवी और सत्यापित पंडितों द्वारा, आपके द्वार पर ही संपन्न।",
      "searchPlaceholder": "पूजा खोजें (उदाहरण: गृह प्रवेश, सत्यनारायण)",
      "trustBadge1": "4000+ सत्यापित पंडित",
      "trustBadge2": "500+ प्रकार की पूजा",
      "trustBadge3": "1M+ पूजा संपन्न",
      "trustBadge4": "12+ साल का अनुभव"
    }
  }
};

// 1. Create a context for the language
const LanguageContext = createContext();

// 2. Create a provider component
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const t = (key) => {
    return resources[language]?.translation[key] || key;
  };

  const value = {
    language,
    changeLanguage,
    t,
    i18n: {
      language,
      changeLanguage,
    },
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// 3. Create a custom hook to use the translation context
const useTranslation = () => {
  return useContext(LanguageContext);
};

// --- Debounce Hook ---
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};


// --- CUSTOM COMPONENT: StarRating ---
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center text-[#FFD700]">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} fill="currentColor" size={16} />
      ))}
      {hasHalfStar && <StarHalf key="half" fill="currentColor" size={16} />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} size={16} className="text-gray-300" />
      ))}
    </div>
  );
};

// --- CUSTOM COMPONENT: Navbar ---
const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="bg-secondary text-white shadow-md sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl sm:text-3xl font-playfair text-accent">
          {t('appName')}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <Toggle
            onPressedChange={toggleLanguage}
            className="text-white border-accent hover:bg-accent/20 data-[state=on]:bg-accent data-[state=on]:text-secondary"
          >
            {i18n.language === 'en' ? 'हिं' : 'EN'}
          </Toggle>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary border-t border-accent/20"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-4">
                <Toggle
                  onPressedChange={toggleLanguage}
                  className="text-white border-accent hover:bg-accent/20 data-[state=on]:bg-accent data-[state=on]:text-secondary self-start"
                >
                  {i18n.language === 'en' ? 'हिं' : 'EN'}
                </Toggle>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// --- CUSTOM COMPONENT: ServicesHeroSection ---
const ServicesHeroSection = ({ searchTerm, setSearchTerm, activeFilter, setActiveFilter }) => {
  const { t } = useTranslation();

  const categories = [
    { key: 'all', label: t('all') },
    { key: 'home', label: t('home') },
    { key: 'marriage', label: t('marriage') },
    { key: 'child', label: t('child') },
    { key: 'dosha', label: t('dosha') },
    { key: 'festivals', label: t('festivals') }
  ];

  return (
    <>
      {/* Hero Banner Section */}
      <section className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${serviceBannerImg})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif", textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
            >
              Our Authentic Vedic Pujas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-100 max-w-2xl mx-auto"
              style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}
            >
              Explore a wide range of traditional Vedic rituals, performed with devotion and precision by trusted Pandit Jis.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder={t('searchPlaceholder')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12 text-base sm:text-lg border-gray-300 focus:border-[#E67E22] focus:ring-[#E67E22]"
                  />
                </div>
                <div className="flex flex-wrap gap-2 lg:gap-3 justify-center lg:justify-start">
                  {categories.map(category => (
                    <Button
                      key={category.key}
                      variant={activeFilter === category.key ? 'default' : 'outline'}
                      onClick={() => setActiveFilter(category.key)}
                      className={`h-10 sm:h-12 px-3 sm:px-4 text-sm sm:text-base font-medium transition-all duration-300 ${
                        activeFilter === category.key
                          ? 'bg-[#E67E22] text-white hover:bg-[#c66919]'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-300'
                      }`}
                    >
                      {category.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

// --- CUSTOM COMPONENT: BookingPopup ---
const BookingPopup = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000); // Show popup after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { type: 'spring', stiffness: 200, damping: 20 }
        }}
        exit={{ opacity: 0, y: 100, scale: 0.8 }}
        whileHover={{ scale: 1.05 }}
        className="fixed bottom-5 right-5 z-50 w-full max-w-sm"
      >
        <div className="bg-white rounded-xl shadow-2xl border-2 border-accent p-4 relative">
          <motion.button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
            whileHover={{ scale: 1.2, rotate: 90 }}
          >
            <X size={18} />
          </motion.button>

          <div className="flex items-center gap-4">
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <PartyPopper size={48} className="text-primary"/>
            </motion.div>
            <div>
              <h4 className="font-playfair text-primary font-bold text-lg">{t('hurryUp')}</h4>
              <p className="text-secondary text-sm">{t('offer')}</p>
            </div>
          </div>
          <Button size="sm" className="w-full mt-3" onClick={()=>{
            const msg = encodeURIComponent('Congratulations! You got 10% OFF 🎉 Special offer for you. I want to book a pooja.');
            window.open(`https://wa.me/8668552465?text=${msg}`,'_blank');
          }}>{t('bookNow')}</Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// --- CUSTOM COMPONENT: PoojaCard ---
const PoojaCard = ({ pooja, setIsNavigating }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  // Calculate average rating
  const avgRating = pooja.reviews.reduce((acc, review) => acc + review.rating, 0) / pooja.reviews.length;
  const numReviews = pooja.reviews.length;

  // Create slug from name
  const slug = pooja.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');

  return (
    <motion.div
      layout
      initial="rest"
      whileHover="hover"
      animate="rest"
      exit={{ opacity: 0, y: -50 }}
      className="relative flex h-full"
    >
      <motion.div // This wrapper handles the scale/lift effect
        className="w-full h-full"
        variants={{
          rest: { scale: 1, y: 0 },
          hover: { scale: 1.03, y: -5 }
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <Card className="overflow-hidden w-full flex flex-col bg-white shadow-[0px_4px_15px_rgba(0,0,0,0.08)] rounded-lg border-0 transition-all duration-300 h-full">
          <div className="overflow-hidden rounded-t-lg">
             <motion.img layoutId={`pooja-image-${slug}`} src={pooja.image} alt={pooja.name} className="w-full h-40 object-cover" />
          </div>
          <CardHeader className="p-4">
            <CardTitle className="text-lg font-bold text-[#333333]" style={{ fontFamily: "'Lato', sans-serif" }}>{pooja.name}</CardTitle>
            <div className="flex items-center gap-2 pt-2">
              <StarRating rating={avgRating} />
              <span className="text-sm text-gray-500">({numReviews} {t('reviews')})</span>
            </div>
          </CardHeader>
          <CardContent className="flex-grow p-4 pt-0">
            <CardDescription className="text-sm text-[#555555] line-clamp-2 leading-relaxed" style={{ fontFamily: "'Lato', sans-serif" }}>
              {lang === 'hi' ? pooja.hindiDescription : pooja.englishDescription}
            </CardDescription>
            <div className="mt-4">
              <div className="text-sm text-[#777777] mb-1" style={{ fontFamily: "'Lato', sans-serif" }}>From</div>
              <div className="text-xl font-bold text-[#E67E22]" style={{ fontFamily: "'Lato', sans-serif" }}>₹{pooja.pricing.basic.toLocaleString('en-IN')}</div>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button asChild size="sm" className="w-full bg-[#E67E22] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#c66919] hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg" style={{ fontFamily: "'Lato', sans-serif" }}>
<Link to={`${slug}`} onClick={() => setIsNavigating(true)}>{t('viewDetails')}</Link>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>

      {/* This is the animated underline */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-[#E67E22] rounded-full"
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 }
        }}
        style={{ originX: 0.5 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.div>
  );
};

// --- PAGE COMPONENT: PoojaList ---
const PoojaList = ({ setIsNavigating }) => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const [filteredPoojas, setFilteredPoojas] = useState(poojaServicesData);

  useEffect(() => {
    let filtered = poojaServicesData;

    // Apply category filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(p => p.category === activeFilter);
      // Scroll to results when filter is applied
      setTimeout(() => {
        const resultsSection = document.getElementById('pooja-results');
        if (resultsSection) {
          resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }

    // Apply search filter
    if (debouncedSearchTerm) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        p.englishDescription.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        p.hindiDescription.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
      // Scroll to results when search is applied
      setTimeout(() => {
        const resultsSection = document.getElementById('pooja-results');
        if (resultsSection) {
          resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }

    setFilteredPoojas(filtered);
  }, [activeFilter, debouncedSearchTerm]);

  return (
    <div className="space-y-6">
      <ServicesHeroSection
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      {/* Pooja Grid */}
      <div id="pooja-results" className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
        <AnimatePresence>
          <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 items-stretch"
          >
            {filteredPoojas.map(pooja => (
              <PoojaCard key={pooja.name} pooja={pooja} setIsNavigating={setIsNavigating}/>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

// --- PAGE COMPONENT: PoojaDetail ---
const PoojaDetail = ({ setIsNavigating }) => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsNavigating(false), 1200);
    return () => clearTimeout(timer);
  }, [slug, setIsNavigating]);

  // "Fetch" pooja from comprehensive data
  const pooja = poojaServicesData.find(p => p.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '') === slug);

  const WHATSAPP_NUMBER = '918668552465';

  const handleWhatsAppBook = (packageName, price) => {
    const message = `Namaste 🙏, I want to book ${pooja.name} - ${packageName} package (₹${price.toLocaleString('en-IN')}). Congratulations! You unlocked 10% OFF today 🎉. Please provide details.`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!pooja) {
return <div className="text-center text-xl text-red-600">Pooja not found. <Link to="/pooja" className="text-primary underline">Go Back</Link></div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto"
    >
      <Card className="bg-white/70 backdrop-blur-sm shadow-lg overflow-hidden border-accent/20">
        <div className="md:flex">
          <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
            <motion.img layoutId={`pooja-image-${slug}`} src={pooja.image} alt={pooja.name} className="w-full h-full object-cover" />
          </div>
          <div className="p-6 md:p-8 flex-1">
            <h1 className="text-4xl font-playfair text-secondary mb-4">{pooja.name}</h1>
            <p className="text-gray-700 font-poppins leading-relaxed mb-6">
              {lang === 'hi' ? pooja.hindiDescription : pooja.englishDescription}
            </p>

            <Button size="lg" onClick={() => handleWhatsAppBook('Basic', pooja.pricing.basic)} className="flex items-center gap-2">
              <Phone size={20} />
              {t('bookViaWhatsApp')}
            </Button>
          </div>
        </div>
      </Card>

      {/* Packages Tabs */}
      <Card className="mt-8 bg-white/70 backdrop-blur-sm shadow-lg border-accent/20">
        <CardHeader>
          <CardTitle className="text-3xl">{t('packages')}</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-primary/10">
              <TabsTrigger value="basic">{t('basic')}</TabsTrigger>
              <TabsTrigger value="standard">{t('standard')}</TabsTrigger>
              <TabsTrigger value="premium">{t('premium')}</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="pt-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-3xl font-bold text-primary">₹{pooja.pricing.basic.toLocaleString('en-IN')}</h3>
                <Button onClick={() => handleWhatsAppBook('Basic', pooja.pricing.basic)} className="bg-primary hover:bg-primary/90">
                  {t('bookNow')}
                </Button>
              </div>
              <h4 className="text-lg font-semibold text-secondary mb-2">{t('includes')}:</h4>
              <ul className="space-y-2">
                {pooja.includes.basic.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="text-green-600" size={16} />
                    <span className="font-poppins">{item}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="standard" className="pt-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-3xl font-bold text-primary">₹{pooja.pricing.standard.toLocaleString('en-IN')}</h3>
                <Button onClick={() => handleWhatsAppBook('Standard', pooja.pricing.standard)} className="bg-primary hover:bg-primary/90">
                  {t('bookNow')}
                </Button>
              </div>
              <h4 className="text-lg font-semibold text-secondary mb-2">{t('includes')}:</h4>
              <ul className="space-y-2">
                {pooja.includes.standard.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="text-green-600" size={16} />
                    <span className="font-poppins">{item}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="premium" className="pt-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-3xl font-bold text-primary">₹{pooja.pricing.premium.toLocaleString('en-IN')}</h3>
                <Button onClick={() => handleWhatsAppBook('Premium', pooja.pricing.premium)} className="bg-primary hover:bg-primary/90">
                  {t('bookNow')}
                </Button>
              </div>
              <h4 className="text-lg font-semibold text-secondary mb-2">{t('includes')}:</h4>
              <ul className="space-y-2">
                {pooja.includes.premium.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="text-green-600" size={16} />
                    <span className="font-poppins">{item}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Reviews Section */}
      <Card className="mt-8 bg-white/70 backdrop-blur-sm shadow-lg border-accent/20">
        <CardHeader>
          <CardTitle className="text-3xl">{t('reviews')}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {pooja.reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-accent/20 pb-4 last:border-b-0"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-secondary">{review.name}</span>
                <StarRating rating={review.rating} />
              </div>
              <p className="text-gray-700 font-poppins italic">"{review.comment}"</p>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
};

// --- Animated Progress Bar ---
const ProgressBar = () => {
    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0 }}
        />
    )
}

// --- MAIN APP COMPONENT ---
export default function PoojaServicesPage() {
  const [isNavigating, setIsNavigating] = useState(false);

  return (
    <LanguageProvider>
        <div
            className="min-h-screen bg-background text-secondary antialiased"
            style={{
                backgroundColor: '#FFF7E6',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23E67E22' fill-opacity='0.2'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                '--card': '#ffffff',
                '--primary': '#E67E22',
                '--secondary': '#800000',
                '--accent': '#F4C430',
            }}
        >
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;600&display=swap');
            .font-playfair { font-family: 'Playfair Display', serif; }
            .font-poppins { font-family: 'Poppins', sans-serif; }
          `}</style>

          <AnimatePresence>
            {isNavigating && <ProgressBar />}
          </AnimatePresence>

          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route index element={<PoojaList setIsNavigating={setIsNavigating} />} />
              <Route path=":slug" element={<PoojaDetail setIsNavigating={setIsNavigating} />} />
            </Routes>
          </main>
          <BookingPopup />
        </div>
    </LanguageProvider>
  );
}
