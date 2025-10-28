import React, { useState, useEffect } from 'react';
import { Star, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Helper Functions & Data ---

// Translations for multi-language support
const translations = {
  en: {
    logo: 'Divine Rituals',
    navHome: 'Home',
    navPoojas: 'Poojas',
    navAbout: 'About',
    navContact: 'Contact',
    bookNow: 'Book Now',
    basicPlan: 'Basic',
    standardPlan: 'Standard',
    premiumPlan: 'Premium',
    planIncludes: 'This plan includes:',
    customerReviews: 'Customer Reviews',
    featuredPoojas: 'Featured Poojas',
    viewDetails: 'View Details',
    selectedPooja: 'Selected Pooja',
  },
  hi: {
    logo: 'दिव्य अनुष्ठान',
    navHome: 'होम',
    navPoojas: 'पूजा',
    navAbout: 'हमारे बारे में',
    navContact: 'संपर्क',
    bookNow: 'अभी बुक करें',
    basicPlan: 'बेसिक',
    standardPlan: 'स्टैंडर्ड',
    premiumPlan: 'प्रीमियम',
    planIncludes: 'इस योजना में शामिल हैं:',
    customerReviews: 'ग्राहक समीक्षा',
    featuredPoojas: 'विशेष पूजाएं',
    viewDetails: 'विवरण देखें',
    selectedPooja: 'चयनित पूजा',
  },
};

// --- Mock Data ---
const poojaData = [
  {
    id: 1,
    image: 'https://placehold.co/1200x600/E67E22/FFF7E6?text=Satyanarayan+Pooja',
    en: {
      title: 'Satyanarayan Pooja',
      description: 'A sacred ritual to honor Lord Vishnu, bringing prosperity, health, and peace to the household. It is often performed on special occasions and full moon days.',
      basicIncludes: ['Pooja by 1 Pandit', 'Standard Samagri', 'Duration: 2 hours'],
      standardIncludes: ['Pooja by 2 Pandits', 'Premium Samagri', 'Fruit & Flower Decoration', 'Duration: 3 hours'],
      premiumIncludes: ['Pooja by 3 Pandits', 'VVIP Samagri Kit', 'Elaborate Decoration', 'Prasad Distribution', 'Duration: 4 hours'],
    },
    hi: {
      title: 'सत्यनारायण पूजा',
      description: 'भगवान विष्णु का सम्मान करने के लिए एक पवित्र अनुष्ठान, जो घर में समृद्धि, स्वास्थ्य और शांति लाता है। यह अक्सर विशेष अवसरों और पूर्णिमा के दिनों में किया जाता है।',
      basicIncludes: ['1 पंडित द्वारा पूजा', 'मानक सामग्री', 'अवधि: 2 घंटे'],
      standardIncludes: ['2 पंडितों द्वारा पूजा', 'प्रीमियम सामग्री', 'फल और फूलों की सजावट', 'अवधि: 3 घंटे'],
      premiumIncludes: ['3 पंडितों द्वारा पूजा', 'वीवीआईपी सामग्री किट', 'विस्तृत सजावट', 'प्रसाद वितरण', 'अवधि: 4 घंटे'],
    },
    pricing: { basic: 5100, standard: 11000, premium: 21000 },
    reviews: [
      { name: 'Rohan Sharma', rating: 4.5, comment: 'Very authentic and well-organized pooja. The pandit ji was very knowledgeable.' },
      { name: 'Priya Desai', rating: 5, comment: 'Absolutely divine experience. Everything was managed perfectly by the team.' },
      { name: 'Anjali Mehta', rating: 4, comment: 'Good service, the samagri provided was of high quality. Recommended.' },
      { name: 'Vikram Singh', rating: 5, comment: 'Felt a wave of positivity in my home after the pooja. Thank you!'},
      { name: 'Sneha Patel', rating: 4.5, comment: 'The booking process was smooth and the pooja was conducted beautifully.'},
      { name: 'Amit Verma', rating: 3.5, comment: 'Overall a good experience, though it started a bit late.'},
      { name: 'Neha Gupta', rating: 5, comment: 'Excellent and very professional service. Highly satisfied.'},
    ],
  },
  {
    id: 2,
    image: 'https://placehold.co/1200x600/800000/FFF7E6?text=Griha+Pravesh',
    en: {
        title: 'Griha Pravesh Pooja',
        description: 'A housewarming ceremony to purify the new space and protect it from negative energies. It invites peace, prosperity, and divine blessings into your new home.',
        basicIncludes: ['Vastu Pooja, Ganesh Pooja', 'Kalash Sthapana', 'Duration: 2.5 hours'],
        standardIncludes: ['All Basic features', 'Navagraha Shanti', 'Havan/Homam', 'Duration: 4 hours'],
        premiumIncludes: ['All Standard features', 'Laxmi-Kuber Pooja', 'Gau Pooja', 'Full Home Prasad', 'Duration: 6 hours'],
    },
    hi: {
        title: 'गृह प्रवेश पूजा',
        description: 'नए स्थान को शुद्ध करने और नकारात्मक ऊर्जाओं से बचाने के लिए एक गृहप्रवेश समारोह। यह आपके नए घर में शांति, समृद्धि और दिव्य आशीर्वाद को आमंत्रित करता है।',
        basicIncludes: ['वास्तु पूजा, गणेश पूजा', 'कलश स्थापना', 'अवधि: 2.5 घंटे'],
        standardIncludes: ['सभी बेसिक सुविधाएँ', 'नवग्रह शांति', 'हवन/होमम', 'अवधि: 4 घंटे'],
        premiumIncludes: ['सभी स्टैंडर्ड सुविधाएँ', 'लक्ष्मी-कुबेर पूजा', 'गौ पूजा', 'पूरे घर का प्रसाद', 'अवधि: 6 घंटे'],
    },
    pricing: { basic: 8100, standard: 15000, premium: 25000 },
    reviews: [
        { name: 'Aditi Rao', rating: 5, comment: 'Made our new house feel like a home. The pandits were fantastic and explained every ritual.' },
        { name: 'Karan Malhotra', rating: 5, comment: 'Impeccable service. The havan was very powerful. Our family is very happy.' },
        { name: 'Sunita Joshi', rating: 4.5, comment: 'Very professional team. They brought all the necessary items and cleaned up afterwards.' },
        { name: 'Rajesh Kumar', rating: 4, comment: 'The Griha Pravesh was done very traditionally. Felt very blessed.' },
        { name: 'Divya Reddy', rating: 5, comment: 'Highly recommend their premium package for Griha Pravesh. It was very comprehensive.' },
        { name: 'Manish Tiwari', rating: 4.5, comment: 'A truly memorable experience for our family. Everything was handled with care.' },
        { name: 'Pooja Agarwal', rating: 5, comment: 'The energy in our home has been wonderful since the pooja. Thank you for the amazing service.' },
        { name: 'Arjun Nair', rating: 4, comment: 'Good execution and very punctual.' },
    ],
  },
  {
    id: 3,
    image: 'https://placehold.co/1200x600/F4C430/FFF7E6?text=Vastu+Shanti',
    en: {
        title: 'Vastu Shanti Pooja',
        description: 'This pooja is performed to nullify any Vastu doshas (architectural flaws) in a home or office, promoting a harmonious flow of energy for health and success.',
        basicIncludes: ['Vastu Dosha Nivaran Mantra', 'Disha Shuddhi', 'Duration: 3 hours'],
        standardIncludes: ['All Basic features', 'Navagraha Havan', 'Panchatatva Pooja', 'Duration: 4.5 hours'],
        premiumIncludes: ['All Standard features', 'Bhoomi Dosha Pooja', 'Vastu Pyramid Sthapana', 'Personalized Yantra', 'Duration: 6 hours'],
    },
    hi: {
        title: 'वास्तु शांति पूजा',
        description: 'यह पूजा घर या कार्यालय में किसी भी वास्तु दोष (स्थापत्य खामियों) को दूर करने के लिए की जाती है, जो स्वास्थ्य और सफलता के लिए ऊर्जा के सामंजस्यपूर्ण प्रवाह को बढ़ावा देती है।',
        basicIncludes: ['वास्तु दोष निवारण मंत्र', 'दिशा शुद्धि', 'अवधि: 3 घंटे'],
        standardIncludes: ['सभी बेसिक सुविधाएँ', 'नवग्रह हवन', 'पंचतत्व पूजा', 'अवधि: 4.5 घंटे'],
        premiumIncludes: ['सभी स्टैंडर्ड सुविधाएँ', 'भूमि दोष पूजा', 'वास्तु पिरामिड स्थापना', 'व्यक्तिगत यंत्र', 'अवधि: 6 घंटे'],
    },
    pricing: { basic: 7500, standard: 12500, premium: 22000 },
    reviews: [
        { name: 'Nikhil Kamath', rating: 5, comment: 'We had some issues at home, and after this pooja, things have become much more peaceful.' },
        { name: 'Ishita Khanna', rating: 4.5, comment: 'The pandit explained the science behind Vastu which was very insightful. Great service.' },
        { name: 'Sameer Reddy', rating: 4, comment: 'Felt a definite shift in the energy of our office space. Professional and effective.' },
        { name: 'Bhavna Chauhan', rating: 5, comment: 'Their premium Vastu service is worth it. The yantra they provided was a great addition.' },
        { name: 'Rakesh Dubey', rating: 3.5, comment: 'Good pooja, but the duration was longer than expected.' },
        { name: 'Geeta Iyer', rating: 5, comment: 'Our family has been feeling much more positive and harmonious. I credit this pooja.' },
        { name: 'Sanjay Mishra', rating: 4.5, comment: 'Excellent knowledge of Vastu Shastra. Very satisfied with the outcome.' },
    ],
  },
  {
    id: 4,
    image: 'https://placehold.co/1200x600/E67E22/FFF7E6?text=Maha+Laxmi+Pooja',
    en: {
        title: 'Maha Laxmi Pooja',
        description: 'Dedicated to the Goddess of wealth and prosperity, Goddess Laxmi. This pooja is ideal for new business ventures, Diwali, and for attracting financial stability.',
        basicIncludes: ['Laxmi Mantra Jaap', 'Aarti & Pushpanjali', 'Duration: 2 hours'],
        standardIncludes: ['All Basic features', 'Shree Suktam Path', 'Kuber Pooja', 'Havan', 'Duration: 3.5 hours'],
        premiumIncludes: ['All Standard features', 'Kanakadhara Stotram', 'Kamalgatta Havan', 'Silver Coin & Shree Yantra', 'Duration: 5 hours'],
    },
    hi: {
        title: 'महालक्ष्मी पूजा',
        description: 'धन और समृद्धि की देवी, देवी लक्ष्मी को समर्पित। यह पूजा नए व्यावसायिक उद्यमों, दिवाली और वित्तीय स्थिरता को आकर्षित करने के लिए आदर्श है।',
        basicIncludes: ['लक्ष्मी मंत्र जाप', 'आरती और पुष्पांजलि', 'अवधि: 2 घंटे'],
        standardIncludes: ['सभी बेसिक सुविधाएँ', 'श्री सूक्तम पाठ', 'कुबेर पूजा', 'हवन', 'अवधि: 3.5 घंटे'],
        premiumIncludes: ['सभी स्टैंडर्ड सुविधाएँ', 'कनकधारा स्तोत्रम', 'कमलगट्टा हवन', 'चांदी का सिक्का और श्री यंत्र', 'अवधि: 5 घंटे'],
    },
    pricing: { basic: 6100, standard: 13000, premium: 26000 },
    reviews: [
        { name: 'Deepak Singhania', rating: 5, comment: 'Performed this for my new office and we have seen great results. Highly recommended.' },
        { name: 'Anusha Krishnan', rating: 5, comment: 'The Diwali pooja was magical. The decorations and arrangements were just perfect.' },
        { name: 'Harish Patel', rating: 4, comment: 'Very sincere and dedicated pandits. Felt the divine presence.' },
        { name: 'Meena Kumari', rating: 4.5, comment: 'We do this every year with them. Consistent and high-quality service.' },
        { name: 'Vivek Oberoi', rating: 5, comment: 'The premium package is fantastic. The included Shree Yantra is beautiful and energized.' },
        { name: 'Tanvi Shah', rating: 5, comment: 'Booked this for my parents and they were extremely happy with the entire ceremony.' },
        { name: 'Alok Nath', rating: 4.5, comment: 'A powerful and spiritually uplifting experience.' },
        { name: 'Priyanka Jain', rating: 4, comment: 'Good service. The pandit ji arrived on time and was very patient.' },
    ],
  },
];


// --- Reusable Components ---

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-5 h-5 text-[#F4C430] fill-current" />
      ))}
      {halfStar && <Star key="half" className="w-5 h-5 text-[#F4C430]" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }} />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
      ))}
    </div>
  );
};

const Header = ({ language, setLanguage, t }) => {
    return (
        <header className="bg-[#FFF7E6]/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-playfair font-bold text-[#800000]">{t.logo}</h1>
                <nav className="hidden md:flex items-center space-x-8 font-poppins text-[#800000]">
                    <a href="#" className="hover:text-[#E67E22] transition-colors">{t.navHome}</a>
                    <a href="#" className="hover:text-[#E67E22] transition-colors">{t.navPoojas}</a>
                    <a href="#" className="hover:text-[#E67E22] transition-colors">{t.navAbout}</a>
                    <a href="#" className="hover:text-[#E67E22] transition-colors">{t.navContact}</a>
                </nav>
                <div className="flex items-center space-x-4">
                    <div className="relative font-poppins">
                        <button onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')} className="flex items-center justify-center w-24 h-10 bg-[#800000] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E67E22] transition-transform transform hover:scale-105">
                            <span className="mr-2">{language === 'en' ? 'English' : 'हिन्दी'}</span>
                            <ChevronDown className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};


const PoojaPlanCard = ({ planName, price, includes, onBook, language }) => {
    const t = translations[language];
    return (
        <motion.div 
            className="border-2 border-gray-200 rounded-lg p-6 flex flex-col"
            whileHover={{ y: -6, boxShadow: '0 25px 40px -10px rgba(0,0,0,0.25)' }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <h3 className="text-2xl font-playfair font-bold text-[#800000] mb-2">{planName}</h3>
            <p className="text-3xl font-poppins font-bold text-[#E67E22] mb-4">₹{price.toLocaleString('en-IN')}</p>
            <div className="flex-grow mb-6 font-poppins text-gray-700">
                <p className="font-semibold mb-2">{t.planIncludes}</p>
                <ul className="space-y-2 list-disc list-inside">
                    {includes.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <motion.button 
                onClick={onBook}
                className="w-full bg-[#E67E22] text-white font-bold py-3 rounded-md font-poppins"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {t.bookNow}
            </motion.button>
        </motion.div>
    );
};

const ReviewCard = ({ review }) => {
    return (
        <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center mb-2">
                <StarRating rating={review.rating} />
                <span className="ml-auto font-poppins font-bold text-[#800000]">{review.name}</span>
            </div>
            <p className="font-poppins text-gray-600 italic">"{review.comment}"</p>
        </motion.div>
    );
};

const FeaturedPoojaCard = ({ pooja, language, onSelect }) => {
    const t = translations[language];
    return (
        <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
            onClick={onSelect}
            whileHover={{ scale: 1.03, boxShadow: '0 30px 45px -10px rgba(0,0,0,0.25)' }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <img src={pooja.image.replace('1200x600', '400x200')} alt={pooja[language].title} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h4 className="text-xl font-playfair font-bold text-[#800000]">{pooja[language].title}</h4>
                <p className="font-poppins text-sm text-gray-600 mt-1 line-clamp-2">{pooja[language].description}</p>
                <button className="mt-4 text-[#E67E22] font-poppins font-semibold">{t.viewDetails} &rarr;</button>
            </div>
        </motion.div>
    );
}

// --- Main App Component ---

import { useTranslation as useGlobalLang } from './context/LanguageContext.jsx';

export default function OpenPoojaServicePage() {
  const { language } = useGlobalLang();
  const [selectedPooja, setSelectedPooja] = useState(poojaData[0]);
  const lang = translations[language] ? language : 'en';
  const t = translations[lang];

  const handleBooking = (poojaTitle, planName, price) => {
    const message = `Hello, I would like to book the *${poojaTitle}*.\n\nPlan: *${planName}*\nPrice: *₹${price.toLocaleString('en-IN')}*\n\nPlease let me know the next steps. Thank you.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/8668552465?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };
  
  // To scroll to top when pooja changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedPooja]);

  const featuredPoojas = poojaData.filter(p => p.id !== selectedPooja.id);

  return (
    <div className="bg-[#FFF7E6] min-h-screen">
      <main className="container mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
            <motion.section 
                key={selectedPooja.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden mb-16">
                    <img src={selectedPooja.image} alt={selectedPooja[lang].title} className="w-full h-64 md:h-96 object-cover" />
                    <div className="p-8 md:p-12">
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#800000] mb-4">{selectedPooja[lang].title}</h2>
                        <p className="font-poppins text-lg text-gray-700 leading-relaxed max-w-4xl">{selectedPooja[lang].description}</p>
                    </div>

                    <div className="p-8 md:p-12 bg-gray-50">
                        <div className="grid md:grid-cols-3 gap-8">
                            <PoojaPlanCard 
                                planName={t.basicPlan}
                                price={selectedPooja.pricing.basic}
                                includes={selectedPooja[lang].basicIncludes}
                                onBook={() => handleBooking(selectedPooja[lang].title, t.basicPlan, selectedPooja.pricing.basic)}
                                language={lang}
                            />
                             <PoojaPlanCard 
                                planName={t.standardPlan}
                                price={selectedPooja.pricing.standard}
                                includes={selectedPooja[lang].standardIncludes}
                                onBook={() => handleBooking(selectedPooja[lang].title, t.standardPlan, selectedPooja.pricing.standard)}
                                language={lang}
                            />
                             <PoojaPlanCard 
                                planName={t.premiumPlan}
                                price={selectedPooja.pricing.premium}
                                includes={selectedPooja[lang].premiumIncludes}
                                onBook={() => handleBooking(selectedPooja[lang].title, t.premiumPlan, selectedPooja.pricing.premium)}
                                language={lang}
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <h3 className="text-3xl font-playfair font-bold text-[#800000] mb-8 text-center">{t.customerReviews}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {selectedPooja.reviews.map((review, index) => (
                            <ReviewCard key={index} review={review} />
                        ))}
                    </div>
                </div>
            </motion.section>
        </AnimatePresence>

        <section>
            <h3 className="text-3xl font-playfair font-bold text-[#800000] mb-8 text-center">{t.featuredPoojas}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPoojas.map(pooja => (
                    <FeaturedPoojaCard key={pooja.id} pooja={pooja} language={lang} onSelect={() => setSelectedPooja(pooja)} />
                ))}
            </div>
        </section>

      </main>
    </div>
  );
}
