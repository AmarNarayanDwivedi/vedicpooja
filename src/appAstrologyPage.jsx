import React, { useState, useEffect } from "react";
import { Star, ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext.jsx";
import SEOMetadata from "@/components/SEOMetadata.jsx";

// --- Helper Functions & Data ---

// --- Mock Astrology Data (simulating fetch from MongoDB) ---
const astrologyServices = [
  {
    id: 1,
    icon: "📜",
    category: "marriage",
    en: {
      name: "Kundali Matching",
      description:
        "Find perfect compatibility for marriage with detailed Guna Milan.",
    },
    hi: {
      name: "कुंडली मिलान",
      description: "विस्तृत गुण मिलान के साथ विवाह के लिए सही अनुकूलता खोजें।",
    },
    mr: {
      name: "कुंडली मिलान",
      description: "तपशीलवार गुण मिलानसह विवाहासाठी योग्य सुसंगतता शोधा.",
    },
    kn: {
      name: "ಕುಂಡಲಿ ಹೊಂದಾಣಿಕೆ",
      description:
        "ವಿವರವಾದ ಗುಣ ಮಿಲನ್‌ನೊಂದಿಗೆ ವಿವಾಹಕ್ಕೆ ಸರಿಯಾದ ಹೊಂದಾಣಿಕೆಯನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ.",
    },
    gj: {
      name: "કુંડળી મેચિંગ",
      description: "વિસ્તૃત ગુણ મિલન સાથે લગ્ન માટે સંપૂર્ણ સુસંગતતા શોધો.",
    },
  },
  {
    id: 2,
    icon: "🪐",
    category: "spiritual",
    en: {
      name: "Rahu-Ketu Dosh Analysis",
      description:
        "Remedies to balance planetary effects and remove obstacles.",
    },
    hi: {
      name: "राहु-केतु दोष विश्लेषण",
      description:
        "ग्रहों के प्रभाव को संतुलित करने और बाधाओं को दूर करने के उपाय।",
    },
    mr: {
      name: "राहू-केतू दोष विश्लेषण",
      description:
        "ग्रहांच्या प्रभावांना संतुलित करण्यासाठी आणि अडथळे दूर करण्यासाठी उपाय.",
    },
    kn: {
      name: "ರಾಹು-ಕೇತು ದೋಷ ವಿಶ್ಲೇಷಣೆ",
      description:
        "ಗ್ರಹದ ಪರಿಣಾಮಗಳನ್ನು ಸಮತೋಲನಗೊಳಿಸಲು ಮತ್ತು ಅಡ್ಡಿಗಳನ್ನು ತೆಗೆದುಹಾಕಲು ಉಪಾಯಗಳು.",
    },
    gj: {
      name: "રાહુ-કેતુ દોષ વિશ્લેષણ",
      description:
        "ગ્રહના પ્રભાવને સંતુલિત કરવા અને અવરોધોને દૂર કરવા માટે ઉપાયો.",
    },
  },
  {
    id: 3,
    icon: "🏡",
    category: "spiritual",
    en: {
      name: "Vastu Consultation",
      description: "Bring harmony and positive energy to your home or office.",
    },
    hi: {
      name: "वास्तु परामर्श",
      description: "अपने घर या कार्यालय में सद्भाव और सकारात्मक ऊर्जा लाएं।",
    },
    mr: {
      name: "वास्तु सल्लागत",
      description:
        "तुमच्या घरात किंवा कार्यालयात समतोल आणि सकारात्मक ऊर्जा आणा.",
    },
    kn: {
      name: "ವಾಸ್ತು ಸಲಹೆ",
      description:
        "ನಿಮ್ಮ ಮನೆ ಅಥವಾ ಕಛೇರಿಗೆ ಸಮತೋಲ ಮತ್ತು ಸಕಾರಾತ್ಮಕ ಶಕ್ತಿಯನ್ನು ತರಿ.",
    },
    gj: {
      name: "વાસ્તુ સલાહ",
      description: "તમારા ઘર અથવા ઓફિસમાં સુસંગતતા અને સકારાત્મક ઊર્જા લાવો.",
    },
  },
  {
    id: 4,
    icon: "💎",
    category: "health",
    en: {
      name: "Gemstone Suggestion",
      description:
        "Know which gemstone suits your stars for luck and well-being.",
    },
    hi: {
      name: "रत्न सुझाव",
      description:
        "जानें कि भाग्य और कल्याण के लिए कौन सा रत्न आपके सितारों के अनुकूल है।",
    },
    mr: {
      name: "रत्न सुचना",
      description:
        "भाग्य आणि कल्याणासाठी तुमच्या ताऱ्यांना कोणता रत्न सुसंगत आहे ते जाणा.",
    },
    kn: {
      name: "ರತ್ನ ಸಲಹೆ",
      description:
        "ಅದೃಷ್ಟ ಮತ್ತು ಕಲ್ಯಾಣಕ್ಕಾಗಿ ನಿಮ್ಮ ನಕ್ಷತ್ರಗಳಿಗೆ ಯಾವ ರತ್ನ ಸೂಕ್ತವೆಂದು ತಿಳಿಯಿರಿ.",
    },
    gj: {
      name: "રત્ન સૂચન",
      description:
        "નસીબ અને કલ્યાણ માટે તમારા તારાઓને કયો રત્ન અનુકૂળ છે તે જાણો.",
    },
  },
  {
    id: 5,
    icon: "🔢",
    category: "career",
    en: {
      name: "Numerology Reading",
      description: "Unlock the secrets of your life path through numbers.",
    },
    hi: {
      name: "अंक ज्योतिष पठन",
      description: "संख्याओं के माध्यम से अपने जीवन पथ के रहस्यों को खोलें।",
    },
    mr: {
      name: "अंकशास्त्र वाचन",
      description:
        "संख्यांच्या माध्यमातून तुमच्या जीवन मार्गाचे रहस्य उघड करा.",
    },
    kn: {
      name: "ಸಂಖ್ಯಾ ಶಾಸ್ತ್ರ ಓದುವಿಕೆ",
      description: "ಸಂಖ್ಯೆಗಳ ಮೂಲಕ ನಿಮ್ಮ ಜೀವನ ಮಾರ್ಗದ ರಹಸ್ಯಗಳನ್ನು ಬಿಚ್ಚಿಡಿ.",
    },
    gj: {
      name: "અંકશાસ્ત્ર વાંચન",
      description: "સંખ્યાઓ દ્વારા તમારા જીવન માર્ગના રહસ્યોને અનલૉક કરો.",
    },
  },
  {
    id: 6,
    icon: "✋",
    category: "career",
    en: {
      name: "Palmistry Analysis",
      description:
        "Discover your future and personality from the lines on your hand.",
    },
    hi: {
      name: "हस्तरेखा विश्लेषण",
      description:
        "अपने हाथ की रेखाओं से अपने भविष्य और व्यक्तित्व की खोज करें।",
    },
    mr: {
      name: "हस्तरेखा विश्लेषण",
      description:
        "तुमच्या हाताच्या रेषांमधून तुमचे भविष्य आणि व्यक्तिमत्त्व शोधा.",
    },
    kn: {
      name: "ಹಸ್ತರೇಖೆ ವಿಶ್ಲೇಷಣೆ",
      description:
        "ನಿಮ್ಮ ಕೈಯ ಮೇಲಿನ ರೇಖೆಗಳಿಂದ ನಿಮ್ಮ ಭವಿಷ್ಯ ಮತ್ತು ವ್ಯಕ್ತಿತ್ವವನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ.",
    },
    gj: {
      name: "હસ્તરેખા વિશ્લેષણ",
      description: "તમારા હાથની રેખાઓમાંથી તમારું ભવિષ્ય અને વ્યક્તિત્વ શોધો.",
    },
  },
  {
    id: 7,
    icon: "🎴",
    category: "finance",
    en: {
      name: "Tarot Card Reading",
      description: "Get insights and guidance on your life questions.",
    },
    hi: {
      name: "टैरो कार्ड रीडिंग",
      description:
        "अपने जीवन के प्रश्नों पर अंतर्दृष्टि और मार्गदर्शन प्राप्त करें।",
    },
    mr: {
      name: "टॅरो कार्ड वाचन",
      description:
        "तुमच्या जीवनाच्या प्रश्नांवर अंतर्दृष्टी आणि मार्गदर्शन मिळवा.",
    },
    kn: {
      name: "ಟ್ಯಾರೋ ಕಾರ್ಡ್ ಓದುವಿಕೆ",
      description:
        "ನಿಮ್ಮ ಜೀವನದ ಪ್ರಶ್ನೆಗಳ ಮೇಲೆ ಒಳನೋಟ ಮತ್ತು ಮಾರ್ಗದರ್ಶನವನ್ನು ಪಡೆಯಿರಿ.",
    },
    gj: {
      name: "ટેરોટ કાર્ડ વાંચન",
      description: "તમારા જીવનના પ્રશ્નો પર આંતરદૃષ્ટિ અને માર્ગદર્શન મેળવો.",
    },
  },
  {
    id: 8,
    icon: "📅",
    category: "finance",
    en: {
      name: "Panchang Details",
      description:
        "Find auspicious timings for important events and ceremonies.",
    },
    hi: {
      name: "पंचांग विवरण",
      description: "महत्वपूर्ण घटनाओं और समारोहों के लिए शुभ मुहूर्त खोजें।",
    },
    mr: {
      name: "पंचांग तपशील",
      description: "महत्वाच्या घटना आणि समारंभांसाठी शुभ वेळा शोधा.",
    },
    kn: {
      name: "ಪಂಚಾಂಗ ವಿವರಗಳು",
      description:
        "ಪ್ರಮುಖ ಘಟನೆಗಳು ಮತ್ತು ಸಮಾರಂಭಗಳಿಗೆ ಶುಭ ಸಮಯಗಳನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ.",
    },
    gj: {
      name: "પંચાંગ વિગતો",
      description: "મહત્વપૂર્ણ ઘટનાઓ અને સમારોહો માટે શુભ સમય શોધો.",
    },
  },
  {
    id: 9,
    icon: "👶",
    category: "marriage",
    en: {
      name: "Child Naming (Namkaran)",
      description: "Choose a powerful and auspicious name for your newborn.",
    },
    hi: {
      name: "बच्चे का नामकरण",
      description: "अपने नवजात शिशु के लिए एक शक्तिशाली और शुभ नाम चुनें।",
    },
    mr: {
      name: "मुलाचे नाव ठेवणे (नामकरण)",
      description: "तुमच्या नवजात बाळासाठी एक शक्तिशाली आणि शुभ नाव निवडा.",
    },
    kn: {
      name: "ಮಗುವಿನ ಹೆಸರಿಡುವಿಕೆ (ನಾಮಕರಣ)",
      description:
        "ನಿಮ್ಮ ಹೊಸಜಾತ ಮಗುವಿಗೆ ಶಕ್ತಿಶಾಲಿ ಮತ್ತು ಶುಭ ಹೆಸರನ್ನು ಆಯ್ಕೆ ಮಾಡಿ.",
    },
    gj: {
      name: "બાળકનું નામકરણ (નામકરણ)",
      description: "તમારા નવજાત બાળક માટે એક શક્તિશાળી અને શુભ નામ પસંદ કરો.",
    },
  },
  {
    id: 10,
    icon: "📈",
    category: "career",
    en: {
      name: "Career Astrology",
      description: "Guidance on choosing the right career path for success.",
    },
    hi: {
      name: "करियर ज्योतिष",
      description: "सफलता के लिए सही करियर पथ चुनने पर मार्गदर्शन।",
    },
    mr: {
      name: "करियर ज्योतिष",
      description: "यशासाठी योग्य करियर मार्ग निवडण्यावर मार्गदर्शन.",
    },
    kn: {
      name: "ವೃತ್ತಿ ಜ್ಯೋತಿಷ್ಯ",
      description:
        "ಯಶಸ್ಸಿಗಾಗಿ ಸರಿಯಾದ ವೃತ್ತಿ ಮಾರ್ಗವನ್ನು ಆಯ್ಕೆ ಮಾಡಲು ಮಾರ್ಗದರ್ಶನ.",
    },
    gj: {
      name: "કારકિર્દી જ્યોતિષ",
      description: "સફળતા માટે યોગ્ય કારકિર્દી માર્ગ પસંદ કરવા પર માર્ગદર્શન.",
    },
  },
  {
    id: 11,
    icon: "💰",
    category: "finance",
    en: {
      name: "Financial Astrology",
      description:
        "Improve your financial situation with astrological remedies.",
    },
    hi: {
      name: "वित्तीय ज्योतिष",
      description: "ज्योतिषीय उपायों से अपनी वित्तीय स्थिति में सुधार करें।",
    },
    mr: {
      name: "आर्थिक ज्योतिष",
      description: "ज्योतिषीय उपायांनी तुमची आर्थिक स्थिती सुधारित करा.",
    },
    kn: {
      name: "ಹಣಕಾಸು ಜ್ಯೋತಿಷ್ಯ",
      description:
        "ಜ್ಯೋತಿಷ್ಯದ ಉಪಾಯಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಹಣಕಾಸಿನ ಸ್ಥಿತಿಯನ್ನು ಸುಧಾರಿಸಿ.",
    },
    gj: {
      name: "નાણાકીય જ્યોતિષ",
      description: "જ્યોતિષીય ઉપાયો સાથે તમારી નાણાકીય સ્થિતિમાં સુધારો કરો.",
    },
  },
  {
    id: 12,
    icon: "❤️",
    category: "health",
    en: {
      name: "Health Astrology",
      description:
        "Understand health challenges and find remedies through your chart.",
    },
    hi: {
      name: "स्वास्थ्य ज्योतिष",
      description:
        "अपने चार्ट के माध्यम से स्वास्थ्य चुनौतियों को समझें और उपाय खोजें।",
    },
    mr: {
      name: "आरोग्य ज्योतिष",
      description:
        "तुमच्या चार्टद्वारे आरोग्य आव्हाने समजून घ्या आणि उपाय शोधा.",
    },
    kn: {
      name: "ಆರೋಗ್ಯ ಜ್ಯೋತಿಷ್ಯ",
      description:
        "ನಿಮ್ಮ ಚಾರ್ಟ್ ಮೂಲಕ ಆರೋಗ್ಯ ಸವಾಲುಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ ಮತ್ತು ಉಪಾಯಗಳನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ.",
    },
    gj: {
      name: "સ્વાસ્થ્ય જ્યોતિષ",
      description: "તમારા ચાર્ટ દ્વારા સ્વાસ્થ્ય પડકારોને સમજો અને ઉપાયો શોધો.",
    },
  },
  {
    id: 13,
    icon: "✈️",
    category: "career",
    en: {
      name: "Foreign Travel & Settlement",
      description:
        "Astrological insights on prospects of traveling or living abroad.",
    },
    hi: {
      name: "विदेश यात्रा और निपटान",
      description:
        "विदेश यात्रा या रहने की संभावनाओं पर ज्योतिषीय अंतर्दृष्टि।",
    },
    mr: {
      name: "परदेश प्रवास आणि वसाहत",
      description:
        "परदेश प्रवास किंवा राहण्याच्या संभाव्यतेवर ज्योतिषीय अंतर्दृष्टी.",
    },
    kn: {
      name: "ವಿದೇಶ ಪ್ರಯಾಣ ಮತ್ತು ನೆಲೆಸುವಿಕೆ",
      description:
        "ವಿದೇಶಕ್ಕೆ ಪ್ರಯಾಣಿಸುವ ಅಥವಾ ವಾಸಿಸುವ ಸಾಧ್ಯತೆಗಳ ಮೇಲೆ ಜ್ಯೋತಿಷ್ಯದ ಒಳನೋಟ.",
    },
    gj: {
      name: "વિદેશી યાત્રા અને વસાહત",
      description:
        "વિદેશમાં યાત્રા કરવાની અથવા રહેવાની સંભાવનાઓ પર જ્યોતિષીય આંતરદૃષ્ટિ.",
    },
  },
  {
    id: 14,
    icon: "⚖️",
    category: "spiritual",
    en: {
      name: "Kaal Sarp Dosh Analysis",
      description:
        "Understand and perform remedies for Kaal Sarp Dosh effects.",
    },
    hi: {
      name: "काल सर्प दोष विश्लेषण",
      description: "काल सर्प दोष के प्रभावों को समझें और उपाय करें।",
    },
    mr: {
      name: "काल सर्प दोष विश्लेषण",
      description: "काल सर्प दोषाच्या प्रभावांना समजून घ्या आणि उपाय करा.",
    },
    kn: {
      name: "ಕಾಲ ಸರ್ಪ ದೋಷ ವಿಶ್ಲೇಷಣೆ",
      description:
        "ಕಾಲ ಸರ್ಪ ದೋಷದ ಪರಿಣಾಮಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ ಮತ್ತು ಉಪಾಯಗಳನ್ನು ನಿರ್ವಹಿಸಿ.",
    },
    gj: {
      name: "કાલ સર્પ દોષ વિશ્લેષણ",
      description: "કાલ સર્પ દોષના પ્રભાવોને સમજો અને ઉપાયો કરો.",
    },
  },
  {
    id: 15,
    icon: "🔥",
    category: "marriage",
    en: {
      name: "Mangal Dosh Analysis",
      description:
        "Identify Mangal Dosh and its remedies for a happy marriage.",
    },
    hi: {
      name: "मंगल दोष विश्लेषण",
      description: "खुशहाल शादी के लिए मंगल दोष और उसके उपायों को पहचानें।",
    },
    mr: {
      name: "मंगळ दोष विश्लेषण",
      description: "सुखी विवाहासाठी मंगळ दोष आणि त्याचे उपाय ओळखा.",
    },
    kn: {
      name: "ಮಂಗಳ ದೋಷ ವಿಶ್ಲೇಷಣೆ",
      description: "ಸುಖದ ವಿವಾಹಕ್ಕಾಗಿ ಮಂಗಳ ದೋಷ ಮತ್ತು ಅದರ ಉಪಾಯಗಳನ್ನು ಗುರುತಿಸಿ.",
    },
    gj: {
      name: "મંગળ દોષ વિશ્લેષણ",
      description: "સુખી લગ્ન માટે મંગળ દોષ અને તેના ઉપાયોને ઓળખો.",
    },
  },
  {
    id: 16,
    icon: "🎓",
    category: "career",
    en: {
      name: "Education Astrology",
      description: "Guidance for students to excel in their studies and exams.",
    },
    hi: {
      name: "शिक्षा ज्योतिष",
      description:
        "छात्रों को उनकी पढ़ाई और परीक्षाओं में उत्कृष्टता प्राप्त करने के लिए मार्गदर्शन।",
    },
    mr: {
      name: "शिक्षण ज्योतिष",
      description:
        "विद्यार्थ्यांना त्यांच्या अभ्यासात आणि परीक्षांमध्ये उत्कृष्टता मिळवण्यासाठी मार्गदर्शन.",
    },
    kn: {
      name: "ಶಿಕ್ಷಣ ಜ್ಯೋತಿಷ್ಯ",
      description:
        "ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಅವರ ಅಧ್ಯಯನ ಮತ್ತು ಪರೀಕ್ಷೆಗಳಲ್ಲಿ ಉತ್ಕೃಷ್ಟತೆ ಪಡೆಯಲು ಮಾರ್ಗದರ್ಶನ.",
    },
    gj: {
      name: "શિક્ષણ જ્યોતિષ",
      description:
        "વિદ્યાર્થીઓને તેમના અભ્યાસ અને પરીક્ષાઓમાં ઉત્કૃષ્ટતા મેળવવા માટે માર્ગદર્શન.",
    },
  },
  {
    id: 17,
    icon: "📊",
    category: "finance",
    en: {
      name: "Business Astrology",
      description:
        "Get insights on business growth, partnerships, and new ventures.",
    },
    hi: {
      name: "व्यापार ज्योतिष",
      description:
        "व्यापार वृद्धि, साझेदारी और नए उद्यमों पर अंतर्दृष्टि प्राप्त करें।",
    },
    mr: {
      name: "व्यवसाय ज्योतिष",
      description:
        "व्यवसाय वाढ, भागीदारी आणि नवीन उपक्रमांवर अंतर्दृष्टी मिळवा.",
    },
    kn: {
      name: "ವ್ಯಾಪಾರ ಜ್ಯೋತಿಷ್ಯ",
      description:
        "ವ್ಯಾಪಾರದ ಬೆಳವಣಿಗೆ, ಸಹಭಾಗಿತ್ವ ಮತ್ತು ಹೊಸ ಉದ್ಯಮಗಳ ಮೇಲೆ ಒಳನೋಟಗಳನ್ನು ಪಡೆಯಿರಿ.",
    },
    gj: {
      name: "વ્યાપાર જ્યોતિષ",
      description:
        "વ્યાપાર વૃદ્ધિ, ભાગીદારી અને નવા વ્યાપારો પર આંતરદૃષ્ટિ મેળવો.",
    },
  },
  {
    id: 18,
    icon: "🌿",
    category: "health",
    en: {
      name: "Medical Astrology",
      description:
        "Astrological perspective on health, diseases, and recovery.",
    },
    hi: {
      name: "चिकित्सा ज्योतिष",
      description:
        "स्वास्थ्य, बीमारियों और पुनर्प्राप्ति पर ज्योतिषीय दृष्टिकोण।",
    },
    mr: {
      name: "वैद्यकीय ज्योतिष",
      description: "आरोग्य, आजार आणि पुनर्प्राप्तीवर ज्योतिषीय दृष्टिकोण.",
    },
    kn: {
      name: "ವೈದ್ಯಕೀಯ ಜ್ಯೋತಿಷ್ಯ",
      description: "ಆರೋಗ್ಯ, ರೋಗಗಳು ಮತ್ತು ಗುಣಮುಖತೆಯ ಮೇಲೆ ಜ್ಯೋತಿಷ್ಯದ ದೃಷ್ಟಿಕೋನ.",
    },
    gj: {
      name: "મેડિકલ જ્યોતિષ",
      description: "સ્વાસ્થ્ય, રોગો અને પુનઃપ્રાપ્તિ પર જ્યોતિષીય દૃષ્ટિ.",
    },
  },
  {
    id: 19,
    icon: "🙏",
    category: "spiritual",
    en: {
      name: "Pitra Dosh Nivaran",
      description:
        "Remedies to pacify ancestral afflictions in your horoscope.",
    },
    hi: {
      name: "पितृ दोष निवारण",
      description: "आपकी कुंडली में पैतृक कष्टों को शांत करने के उपाय।",
    },
    mr: {
      name: "पितृ दोष निवारण",
      description:
        "तुमच्या कुंडलीतील पूर्वजांच्या कष्टांना शांत करण्याचे उपाय.",
    },
    kn: {
      name: "ಪಿತೃ ದೋಷ ನಿವಾರಣೆ",
      description: "ನಿಮ್ಮ ಜಾತಕದಲ್ಲಿ ಪೂರ್ವಜರ ಆಪತ್ತುಗಳನ್ನು ಶಾಂತಗೊಳಿಸಲು ಉಪಾಯಗಳು.",
    },
    gj: {
      name: "પિતૃ દોષ નિવારણ",
      description: "તમારી કુંડળીમાં પૂર્વજોના કષ્ટોને શાંત કરવા માટે ઉપાયો.",
    },
  },
  {
    id: 20,
    icon: "☀️",
    category: "health",
    en: {
      name: "Shani Sade Sati Analysis",
      description:
        "Navigate the challenging period of Sade Sati with remedies.",
    },
    hi: {
      name: "शनि साढ़े साती विश्लेषण",
      description:
        "उपायों के साथ साढ़े साती की चुनौतीपूर्ण अवधि को नेविगेट करें।",
    },
    mr: {
      name: "शनि साडे साती विश्लेषण",
      description: "उपायांसह साडे सातीच्या आव्हानात्मक कालखंडात नेव्हिगेट करा.",
    },
    kn: {
      name: "ಶನಿ ಸಾಡೆ ಸಾತಿ ವಿಶ್ಲೇಷಣೆ",
      description: "ಉಪಾಯಗಳೊಂದಿಗೆ ಸಾಡೆ ಸಾತಿಯ ಸವಾಲಿನ ಅವಧಿಯನ್ನು ನ್ಯಾವಿಗೇಟ್ ಮಾಡಿ.",
    },
    gj: {
      name: "શનિ સાડે સાતિ વિશ્લેષણ",
      description: "ઉપાયો સાથે સાડે સાતિના પડકારજનક સમયને નેવિગેટ કરો.",
    },
  },
];

// --- Reusable Components ---

// Header removed - using global Header component from src/components/header.jsx

const BookingPopup = ({ t, onBook }) => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed bottom-5 right-5 z-50 bg-gradient-to-br from-[#E67E22] to-[#F4C430] p-4 rounded-lg shadow-2xl text-white flex items-center space-x-4"
      initial={{ opacity: 0, y: 50, scale: 0.5 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 2 }}
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="text-3xl"
      >
        📱
      </motion.div>
      <div>
        <h4 className="font-playfair font-bold">{t.bookYourSession}</h4>
        <button onClick={onBook} className="text-sm underline">
          Click here!
        </button>
      </div>
      <button
        onClick={() => setIsOpen(false)}
        className="absolute -top-2 -right-2 bg-white text-[#800000] rounded-full p-0.5"
      >
        <X size={16} />
      </button>
    </motion.div>
  );
};

// --- Page Components ---

const CosmicBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Sun */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-32 h-32 bg-yellow-400 rounded-full"
        style={{ filter: "blur(15px)" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 0.9, 0.7] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Kundali */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-24 h-24"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full border-2 border-[#F4C430]/90 transform rotate-45"></div>
        <div className="absolute inset-0 w-full h-full border-2 border-[#F4C430]/90"></div>
        <div
          className="absolute top-0 left-0 w-full h-full transform origin-top-left"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        >
          <div className="w-full h-full border-2 border-[#F4C430]/90 transform -rotate-45 scale-141"></div>
        </div>
        <div
          className="absolute bottom-0 right-0 w-full h-full transform origin-bottom-right"
          style={{ clipPath: "polygon(100% 100%, 0 100%, 100% 0)" }}
        >
          <div className="w-full h-full border-2 border-[#F4C430]/90 transform -rotate-45 scale-141"></div>
        </div>
      </motion.div>

      {/* Moon */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-16 h-16 rounded-full border-4 border-white/80"
        style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" }}
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Orbit 1 with Planet */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 border border-white/40 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-400 rounded-full" />
      </motion.div>

      {/* Orbit 2 with Saturn */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] border border-white/40 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
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
  const { t } = useTranslation();
  const categories = [
    "all",
    "marriage",
    "career",
    "health",
    "finance",
    "spiritual",
  ];
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredServices =
    activeFilter === "all"
      ? astrologyServices
      : astrologyServices.filter(
          (service) => service.category === activeFilter
        );

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
              Your cosmic blueprint awaits. Navigate life's journey with clarity
              and confidence.
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
              <h3 className="text-2xl font-playfair font-bold text-[#800000] mb-4">
                Categories
              </h3>
              <ul className="space-y-2 font-poppins">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setActiveFilter(cat)}
                      className={`w-full text-left p-3 rounded-md transition-colors ${
                        activeFilter === cat
                          ? "bg-[#E67E22] text-white font-semibold"
                          : "hover:bg-[#E67E22]/20"
                      }`}
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
                {filteredServices.map((service) => (
                  <motion.div
                    key={service.id}
                    className="bg-white/80 rounded-lg shadow-lg p-6 text-center flex flex-col items-center"
                    whileHover={{
                      y: -5,
                      boxShadow:
                        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h4 className="text-xl font-playfair font-bold text-[#800000] mb-2">
                      {service[language].name}
                    </h4>
                    <p className="font-poppins text-gray-600 flex-grow mb-4">
                      {service[language].description}
                    </p>
                    <motion.button
                      onClick={() =>
                        handleBooking(
                          service[language].name,
                          "Astrology Consultation",
                          201
                        )
                      }
                      className="w-full bg-[#800000] text-white font-bold py-2 rounded-md font-poppins mt-auto"
                      whileHover={{ scale: 1.05, backgroundColor: "#E67E22" }}
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

export default function AstrologyPageView() {
  const { language } = useTranslation();
  const lang = language || "en";

  const handleBooking = (serviceTitle, planName, price) => {
    const base = serviceTitle
      ? `consult about *${serviceTitle}*`
      : "schedule a general astrology consultation";
    const priceText = price ? ` for ₹${price}` : "";
    const message = `Hello, I would like to ${base}${priceText}. Please let me know the details. Thank you.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/8668552465?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen">
      <SEOMetadata
        title="Astrology Services in Pune | Astrology Consultation Online India | Vedic Astrology"
        description="Expert astrology services in Pune and online across India. Get personalized astrology consultations, Kundali matching, Vastu consultation, and gemstone recommendations from experienced Vedic astrologers."
        keywords="astrology in Pune, astrology consultation online India, vedic astrology Pune, kundali matching Pune, vastu consultation Pune, gemstone recommendation astrology"
        canonical="https://www.vedic-pooja.com/astrology"
        ogImage="https://www.vedic-pooja.com/assets/astrology-hero.jpg"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Astrology Services in Pune",
          description:
            "Professional astrology consultations, Kundali matching, Vastu consultation, and gemstone recommendations in Pune and online across India",
          provider: {
            "@type": "Organization",
            name: "Vedic Pooja",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Pune",
              addressRegion: "Maharashtra",
              addressCountry: "IN",
            },
          },
          serviceType: "Astrology Consultation",
          areaServed: [
            {
              "@type": "Place",
              name: "Pune",
            },
            {
              "@type": "Place",
              name: "India",
            },
          ],
          offers: [
            {
              "@type": "Offer",
              name: "Kundali Matching",
              description: "Detailed compatibility analysis for marriage",
            },
            {
              "@type": "Offer",
              name: "Vastu Consultation",
              description:
                "Harmonize your home or office with Vedic principles",
            },
            {
              "@type": "Offer",
              name: "Gemstone Recommendation",
              description:
                "Personalized gemstone suggestions based on birth chart",
            },
          ],
        })}
      </script>
      <main className="container mx-auto px-6 py-12">
        <AstrologyPage language={lang} handleBooking={handleBooking} />
      </main>
    </div>
  );
}
