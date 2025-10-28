// Comprehensive Pooja Services Data

// Import all pooja images
import grihaPraveshImg from '@/assets/poojas/GrihaPraveshPooja.webp';
import navagrahaShantiImg from '@/assets/poojas/Navagraha-Shanti.webp';
import mahamrityunjayaJaapImg from '@/assets/poojas/Mahamrityunjaya-Jaap.webp';
import lakshmiPujaImg from '@/assets/poojas/Lakshmi-Puja.webp';
import mundanSanskarImg from '@/assets/poojas/Mundan-Sanskar.webp';
import satyanarayanPujaImg from '@/assets/poojas/Satyanarayan-Puja.webp';
import shubhVivahImg from '@/assets/poojas/Shubh-Vivah.webp';
import naamkaranSanskarImg from '@/assets/poojas/NaamKaran.webp';
import kaalSarpDoshImg from '@/assets/poojas/KalSarpDosh.webp';
import ganeshPujaImg from '@/assets/poojas/GaneshPuja.webp';
import durgaSaptashatiPathImg from '@/assets/poojas/DurgaSaptashatiPath.webp';
import bhoomiPujanImg from '@/assets/poojas/BhoomiPujan.webp';
import rudrabhishekImg from '@/assets/poojas/Rudrabhishek.webp';
import baglamukhiPujaImg from '@/assets/poojas/BaglamukhiPuja.webp';
import officeOpeningPujaImg from '@/assets/poojas/OfficeOpeningPuja(VastuPuja).webp';
import birthdayPujaImg from '@/assets/poojas/BirthdayPuja(JanmadinPuja).webp';
import sunderkandPathImg from '@/assets/poojas/Sunderkand-Path.webp';
import vastuDoshNivaranImg from '@/assets/poojas/Vastu-Dosh-Nivaran.webp';
import engagementPujaImg from '@/assets/poojas/Engagement-Puja-(Sagai).webp';
import chandiPathImg from '@/assets/poojas/ChandiPath.webp';
import akhandRamayanPathImg from '@/assets/poojas/Akhand-Ramayan-Path.webp';
import grahShantiPujaImg from '@/assets/poojas/Grah-Shanti-Puja.webp';
import mangalDoshPujaImg from '@/assets/poojas/MangalDoshPuja(ManglikDosh).webp';
import gandMoolShantiPujaImg from '@/assets/poojas/GandMoolShantiPuja.webp';
import nakshatraShantiPujaImg from '@/assets/poojas/NakshatraShantiPuja.webp';
import rudraYagnaImg from '@/assets/poojas/RudraYagna.webp';
import mahaLakshmiPujaImg from '@/assets/poojas/MahaLakshmiPuja.webp';

export const poojaServicesData = [
  {
    id: 1,
    name: "Griha Pravesh Pooja",
    englishDescription: "Entering a new home is a milestone. The Griha Pravesh puja is performed to purify the new space, remove any negative energies (Vastu dosh), and invite divine blessings from the gods and the nine planets. This ensures the family's happiness, prosperity, and good health in their new abode.",
    hindiDescription: "नए घर में प्रवेश करना एक महत्वपूर्ण अवसर है। गृह प्रवेश पूजा नए स्थान को शुद्ध करने, किसी भी नकारात्मक ऊर्जा (वास्तु दोष) को दूर करने और देवताओं और नवग्रहों का दिव्य आशीर्वाद आमंत्रित करने के लिए की जाती है। यह नए घर में परिवार की खुशी, समृद्धि और अच्छे स्वास्थ्य को सुनिश्चित करता है।",
    image: grihaPraveshImg,
    category: "home",
    pricing: {
      basic: 5100,
      standard: 11000,
      premium: 21000
    },
    includes: {
      basic: ["1 Pandits", "Basic Samagri", "Grah Pravesh Poojan", "Navagraha Havan"],
      standard: ["All Basic features", "Vastu Puja", "Premium Samagri", "Normal Decoration", "Extended Havan"],
      premium: ["All Standard features", "VVIP Samagri Kit", "Elaborate Decoration", "3 Pandits", "Full Home Blessing"]
    },
    reviews: [
      { name: "Rohan Sharma", rating: 4.5, comment: "Panditji ne bahut acche se Griha Pravesh puja karwayi. Sab kuch shanti se ho gaya. Highly recommended." },
      { name: "Priya Desai", rating: 5, comment: "Very professional service. The pandits arrived on time with all samagri. Ghar mein bahut positive feel aa raha hai." },
      { name: "Anjali Mehta", rating: 4, comment: "Humne standard package liya tha. Vastu puja aur havan bahut detail mein hua. Thank you!" },
      { name: "Vikram Singh", rating: 5, comment: "Booking process was smooth. Puja ke baad se everyone is feeling very peaceful. Jai Mata Di." },
      { name: "Sneha Patel", rating: 4.5, comment: "Pehle thoda doubt tha online booking mein, but service was excellent. Pandit ji was very knowledgeable." }
    ]
  },
  {
    id: 2,
    name: "Navagraha Shanti",
    englishDescription: "The nine planets (Navagrahas) in our horoscope influence our lives, bringing both success and obstacles. A Navagraha Shanti puja is performed to appease any malefic planets and reduce their negative effects (doshas). This puja strengthens the positive planetary influences, bringing peace, harmony, and success in health, career, and personal life.",
    hindiDescription: "हमारी कुंडली में नौ ग्रह (नवग्रह) हमारे जीवन को प्रभावित करते हैं, जो सफलता और बाधाएं दोनों लाते हैं। नवग्रह शांति पूजा किसी भी हानिकारक ग्रह को शांत करने और उनके नकारात्मक प्रभावों (दोषों) को कम करने के लिए की जाती है। यह पूजा सकारात्मक ग्रहों के प्रभाव को मजबूत करती है, जिससे स्वास्थ्य, करियर और व्यक्तिगत जीवन में शांति, सद्भाव और सफलता आती है।",
    image: navagrahaShantiImg,
    category: "dosha",
    pricing: {
      basic: 4100,
      standard: 8500,
      premium: 15000
    },
    includes: {
      basic: ["1 Pandit", "Basic Samagri", "Havan"],
      standard: ["All Basic features", "Premium Samagri", "Navagraha Jaap", "Special Havan"],
      premium: ["All Standard features", "VVIP Samagri", "Complete Navagraha Puja", "Special Remedies", "Personalized Guidance", "Elaborate Decoration"]
    },
    reviews: [
      { name: "Nikhil Kamath", rating: 5, comment: "Career mein bahut problems aa rahi thi. Kisi ne Navagraha Shanti suggest ki. Puja ke baad se cheezein better ho rahi hain." },
      { name: "Ishita Khanna", rating: 4.5, comment: "Very systematic puja. Pandit ji ne sabhi 9 grahon ke jaap aur havan karwaye. Man ko shanti mili." },
      { name: "Sameer Reddy", rating: 4, comment: "I was feeling very low and stuck. Is puja ke baad se kaafi positive energy feel ho rahi hai. Thank you." },
      { name: "Bhavna Chauhan", rating: 5, comment: "Professional service. Pandit ji was very patient and did not rush the puja. Sab acche se complete hua." },
      { name: "Rakesh Dubey", rating: 3.5, comment: "Booked this for my parents. They were very happy with the rituals. Effective and powerful puja." }
    ]
  },
  {
    id: 3,
    name: "Mahamrityunjaya Jaap",
    englishDescription: "This powerful Jaap is dedicated to Lord Shiva to overcome the fear of death. The Mahamrityunjaya Mantra is a life-saving mantra. This Jaap is performed for longevity, to cure prolonged illnesses, and to protect against untimely death or accidents. It bestows health, wealth, happiness, and good fortune.",
    hindiDescription: "यह शक्तिशाली जाप मृत्यु के भय पर विजय पाने के लिए भगवान शिव को समर्पित है। महामृत्युंजय मंत्र एक जीवन रक्षक मंत्र है। यह जाप लंबी आयु, पुरानी बीमारियों को ठीक करने और अकाल मृत्यु या दुर्घटनाओं से बचाने के लिए किया जाता है। यह स्वास्थ्य, धन, खुशी और सौभाग्य प्रदान करता है।",
    image: mahamrityunjayaJaapImg,
    category: "dosha",
    pricing: {
      basic: 25000,
      standard: 35000,
      premium: 60000
    },
    includes: {
      basic: ["25,000 Jaaps", "Havan", "Basic Samagri"],
      standard: ["All Basic features", "54,000 Jaaps", "Extended Havan", "Premium Samagri"],
      premium: ["All Standard features", "1,25,000 Jaaps", "Special Havan", "VVIP Samagri", "Personalized Remedies"]
    },
    reviews: [
      { name: "Deepak Singhania", rating: 5, comment: "My father was very unwell. Humne 1.25 lakh jaap ka anushthan karwaya. Bhagwan ki kripa se he is recovering now. Thank you pandit ji." },
      { name: "Anusha Krishnan", rating: 5, comment: "Bahut powerful mantra hai. Jaap ke time hi itni positive vibrations feel ho rahi thi. Highly recommend for any health issue." },
      { name: "Harish Patel", rating: 4, comment: "I do this jaap every year for my family's well-being. Aapki service ne isse bahut convenient bana diya hai." },
      { name: "Meena Kumari", rating: 4.5, comment: "Pandits were very learned and chanted the mantras with perfect pronunciation. Bahut shantidayak anubhav." },
      { name: "Vivek Oberoi", rating: 5, comment: "Booked the basic package (21,000 jaaps). Jaap and havan were performed with full devotion. Very satisfied." }
    ]
  },
  {
    id: 4,
    name: "Lakshmi Puja (Diwali Puja)",
    englishDescription: "Lakshmi Puja is performed on the auspicious day of Diwali to welcome Goddess Lakshmi, the deity of wealth and prosperity. This puja is also performed to honor Lord Ganesha (remover of obstacles) and Goddess Saraswati (goddess of wisdom). Performing this puja brings wealth, success, good luck, and abundance into the home and business.",
    hindiDescription: "दिवाली के शुभ दिन पर धन और समृद्धि की देवी मां लक्ष्मी के स्वागत के लिए लक्ष्मी पूजा की जाती है। यह पूजा भगवान गणेश (बाधाओं को दूर करने वाले) और देवी सरस्वती (ज्ञान की देवी) के सम्मान में भी की जाती है। इस पूजा को करने से घर और व्यापार में धन, सफलता, सौभाग्य और प्रचुरता आती है।",
    image: lakshmiPujaImg,
    category: "festivals",
    pricing: {
      basic: 3100,
      standard: 6500,
      premium: 11000
    },
    includes: {
      basic: ["1 Pandit", "Basic Puja Samagri", "Lakshmi-Ganesh Sthapana", "Aarti"],
      standard: ["All Basic features", "Premium Samagri", "Extended Aarti", "Special Decorations"],
      premium: ["All Standard features", "VVIP Samagri", "Elaborate Decorations","Laxmi Havan", "Business Blessings" ]
    },
    reviews: [
      { name: "Aditi Rao", rating: 5, comment: "Diwali puja was awesome this year. Pandit ji came on time and brought all samagri. Hamein bas prasad ready karna tha." },
      { name: "Karan Malhotra", rating: 5, comment: "Booked them for our office puja. Staff was very happy. Bahut professional tareeke se puja hui. Highly recommended." },
      { name: "Sunita Joshi", rating: 4.5, comment: "Maa Lakshmi ki kripa bani rahe. Pandit ji ne itne acche se puja karwayi, poora ghar positive ho gaya." },
      { name: "Rajesh Kumar", rating: 4, comment: "Best Diwali puja we ever had. Ek ek vidhi ko explain kiya. Felt very connected." },
      { name: "Divya Reddy", rating: 5, comment: "Last minute booking tha, but they managed it so well. Thank you for making our Diwali special." }
    ]
  },
  {
    id: 5,
    name: "Mundan Sanskar",
    englishDescription: "Mundan Sanskar, or the first haircut ceremony, is one of the sixteen sacred samskaras in Hinduism. It is performed to shave the baby's first hair, which is believed to carry undesirable traits from past lives. This ritual signifies freedom from the past, promotes new hair growth, and is believed to stimulate the brain and bestow good health and a long life.",
    hindiDescription: "मुंडन संस्कार, या पहला बाल कटवाने का समारोह, हिंदू धर्म में सोलह पवित्र संस्कारों में से एक है। यह बच्चे के पहले बालों को हटाने के लिए किया जाता है, जिन्हें पिछले जन्मों के अवांछित लक्षणों को ले जाने वाला माना जाता है। यह अनुष्ठान अतीत से मुक्ति, नए बालों के विकास को बढ़ावा देने का प्रतीक है, और माना जाता है कि यह मस्तिष्क को उत्तेजित करता है और अच्छे स्वास्थ्य और लंबी आयु प्रदान करता है।",
    image: mundanSanskarImg,
    category: "child",
    pricing: {
      basic: 3500,
      standard: 5000,
      premium: 7000
    },
    includes: {
      basic: ["1 Pandit", "Basic Puja Samagri", "Mundan Sanskar Vidhi", "Havan"],
      standard: ["All Basic features", "Premium Samagri", "Extended Ceremony", "Special Blessings"],
      premium: ["All Standard features", "VVIP Samagri", "Complete Sanskar", "Family Blessings", ]
    },
    reviews: [
      { name: "Priya Agarwal", rating: 5, comment: "My son's mundan ceremony was done beautifully. Pandit ji was very gentle with the baby." },
      { name: "Arjun Nair", rating: 4, comment: "A very important sanskar for us. Aapki service ne sab smooth kar diya. All rituals were followed." },
      { name: "Manish Tiwari", rating: 4.5, comment: "Happy with the service. Pandit ji ne sab procedures acche se samjhaye. Havan bhi kiya." },
      { name: "Pooja Agarwal", rating: 5, comment: "Baby thoda ro raha tha, but pandit ji managed it well. Puja shanti se ho gayi. Thank you." },
      { name: "Alok Nath", rating: 4, comment: "Booked the mundan puja. Everything was included in the samagri. Hamein kuch tension nahi hui." }
    ]
  },
  {
    id: 6,
    name: "Satyanarayan Puja",
    englishDescription: "Sri Satyanarayan Puja is performed to seek blessings from Lord Vishnu in his form as Satyanarayan. It is usually performed on special occasions like birthdays, anniversaries, achievements, or on Purnima (full moon). This puja, which includes the recitation of the Satyanarayan Katha, is believed to bring success, wealth, happiness, and peace to the family.",
    hindiDescription: "श्री सत्यनारायण पूजा भगवान विष्णु के सत्यनारायण स्वरूप का आशीर्वाद पाने के लिए की जाती है। यह आमतौर पर जन्मदिन, सालगिरह, उपलब्धियों जैसे विशेष अवसरों पर या पूर्णिमा के दिन की जाती है। माना जाता है कि इस पूजा, जिसमें सत्यनारायण कथा का पाठ शामिल है, को करने से परिवार में सफलता, धन, खुशी और शांति आती है।",
    image: satyanarayanPujaImg,
    category: "festivals",
    pricing: {
      basic: 3100,
      standard: 5000,
      premium: 7000
    },
    includes: { 
      basic: ["1 Pandit", "Basic Samagri", "Katha Path", "Havan"],
      standard: ["All Basic features", "Premium Samagri", "Extended Katha", "Special Havan"],
      premium: ["All Standard features", "VVIP Samagri", "Complete Katha", "Elaborate Havan", "Family Blessings"]
    },
    reviews: [
      { name: "Rohit Sharma", rating: 4.5, comment: "Humne housewarming ke baad Satyanarayan Puja rakhi thi. Pandit ji ne Katha bahut bhav se kahi. Sabko accha laga." },
      { name: "Sneha Gupta", rating: 4, comment: "Very good service. Puja was done properly with all rituals. Price is also reasonable." },
      { name: "Amit Verma", rating: 5, comment: "My promotion was due. I organized this puja at home. Agle hafte hi good news mil gayi. Sab Bhagwan ka aashirvad hai." },
      { name: "Neha Gupta", rating: 4.5, comment: "Online booking kiya tha first time. Experience was seamless. Pandit ji was knowledgeable and on time." },
      { name: "Vikram Singh", rating: 4, comment: "Har Purnima pe karwate hain. Aapki service se bahut easy ho gaya hai. Samagri bhi quality ki thi." }
    ]
  },
  {
    id: 7,
    name: "Shubh Vivah (Marriage Puja)",
    englishDescription: "The Shubh Vivah, or Hindu wedding ceremony, is a sacred and elaborate ritual that unites two souls. It is not just a union of two people but of two families. The ceremony involves various rituals like Kanyadaan, Saptapadi (seven vows), and Mangal Phere around the sacred fire (Agni), invoking divine blessings for a long, happy, and prosperous married life.",
    hindiDescription: "शुभ विवाह, या हिंदू विवाह समारोह, एक पवित्र और विस्तृत अनुष्ठान है जो दो आत्माओं को एक करता है। यह सिर्फ दो लोगों का नहीं बल्कि दो परिवारों का मिलन है। इस समारोह में कन्यादान, सप्तपदी (सात वचन) और पवित्र अग्नि (अग्नि) के चारों ओर मंगल फेरे जैसे विभिन्न अनुष्ठान शामिल हैं, जो एक लंबे, सुखी और समृद्ध वैवाहिक जीवन के लिए दिव्य आशीर्वाद का आह्वान करते हैं।",
    image: shubhVivahImg,
    galleryImages: [
      "https://placehold.co/600x400/FFF7E6/800000?text=Marriage+1",
      "https://placehold.co/600x400/FFF7E6/800000?text=Marriage+2",
      "https://placehold.co/600x400/FFF7E6/800000?text=Marriage+3"
    ],
    category: "marriage",
    pricing: {
      basic: 11000,
      standard: 25000,
      premium: 50000
    },
    includes: {
      basic: ["1 Pandits", , "Saptapadi & Vachan", "Kanyadaan Sankalp"],
      standard: ["All Basic features", "Premium Samagri", "Extended Ceremony", "Family Blessings"],
      premium: ["All Standard features", "Complete Vivah Samagri", "VVIP Samagri", "Complete Wedding Rituals", ]
    },
    reviews: [
      { name: "Aditi & Karan", rating: 5, comment: "Hamaari beti ki shaadi thi. Pandit ji ne itne acche se saare rituals karwaye. Sab guests ne bahut tareef ki." },
      { name: "Priya & Rajesh", rating: 5, comment: "We are from South India and the groom was from North. Pandit ji ne dono traditions ko balance karke puja karwayi. Amazing!" },
      { name: "Sunita & Vikram", rating: 4.5, comment: "The wedding was perfect. Pandit ji explained the meaning of the seven vows in both Hindi and English. It was beautiful." },
      { name: "Divya & Manish", rating: 5, comment: "Sabse bada din tha life ka. Aapki team ne ise flawless bana diya. Samagri se leke muhurat tak, sab perfect tha." },
      { name: "Anjali & Rohan", rating: 4, comment: "I was worried about the rituals, but the pandits were so experienced. Sab kuch smooth ho gaya. Bahut shukriya." }
    ]
  },
  {
    id: 8,
    name: "Naamkaran Sanskar",
    englishDescription: "Naamkaran Sanskar is the traditional Hindu naming ceremony for a newborn baby. It is one of the first and most important samskaras. Performed on a specific auspicious day, this ritual formally gives the child their name, invoking blessings from the gods and ancestors for a long, healthy, and successful life.",
    hindiDescription: "नामकरण संस्कार एक नवजात शिशु के लिए पारंपरिक हिंदू नामकरण समारोह है। यह पहले और सबसे महत्वपूर्ण संस्कारों में से एक है। एक विशिष्ट शुभ दिन पर किया जाने वाला यह अनुष्ठान, बच्चे को औपचारिक रूप से उसका नाम देता है, और देवताओं और पूर्वजों से एक लंबे, स्वस्थ और सफल जीवन के लिए आशीर्वाद का आह्वान करता है।",
    image: naamkaranSanskarImg,
    category: "child",
    pricing: {
      basic: 3100,
      standard: 5000,
      premium: 7000
    },
    includes: {
      basic: ["1 Pandit", "Basic Puja Samagri", "Naming Ritual", "Small Havan"],
      standard: ["All Basic features", "Premium Samagri", "Extended Ceremony", "Family Blessings"],
      premium: ["All Standard features", "VVIP Samagri", "Complete Sanskar", "Special Blessings", "Horoscope Guidance"]
    },
    reviews: [
      { name: "Priya & Arjun", rating: 5, comment: "Our baby's naming ceremony was done so well. Pandit ji ne naam ka importance aur horoscope ke according letter bataya." },
      { name: "Sunita & Rajesh", rating: 4.5, comment: "Very lovely ceremony. Humari puri family ne enjoy kiya. Pandit ji was very patient." },
      { name: "Divya & Manish", rating: 4, comment: "Simple and beautiful. Chota sa havan bhi hua. Ghar mein bahut positive vibes thi." },
      { name: "Anjali & Rohan", rating: 5, comment: "It was my daughter's naamkaran. Sab kuch smoothly ho gaya. Thank you for the wonderful service." },
      { name: "Neha & Vikram", rating: 4.5, comment: "First time parents they hum. Pandit ji ne guide kiya pura process. Bahut accha anubhav raha." }
    ]
  },
  {
    id: 9,
    name: "Kaal Sarp Dosh Shanti",
    englishDescription: "Kaal Sarp Dosh occurs when all seven planets in a person's horoscope are placed between Rahu and Ketu. This astrological condition can cause various obstacles, delays in success, and unrest in life. The Kaal Sarp Dosh Shanti Puja is performed to appease the serpent deities, reduce the dosh's negative impact, and bring peace, prosperity, and stability.",
    hindiDescription: "काल सर्प दोष तब होता है जब किसी व्यक्ति की कुंडली में सभी सात ग्रह राहु और केतु के बीच स्थित होते हैं। यह ज्योतिषीय स्थिति जीवन में विभिन्न बाधाएं, सफलता में देरी और अशांति पैदा कर सकती है। काल सर्प दोष शांति पूजा सर्प देवताओं को प्रसन्न करने, दोष के नकारात्मक प्रभाव को कम करने और शांति, समृद्धि और स्थिरता लाने के लिए की जाती है।",
    image: kaalSarpDoshImg,
    galleryImages: [
      "https://placehold.co/600x400/FFF7E6/800000?text=Kaal+Sarp+Dosh+1",
      "https://placehold.co/600x400/FFF7E6/800000?text=Kaal+Sarp+Dosh+2",
      "https://placehold.co/600x400/FFF7E6/800000?text=Kaal+Sarp+Dosh+3"
    ],
    category: "dosha",
    pricing: {
      basic: 8100,
      standard: 11000,
      premium: 15000
    },
    includes: {
      basic: ["1 Pandit", "Normal Samagri", "Naag Jaap", "Havan"],
      standard: ["All Basic features", "Premium Samagri", "Extended Jaap", "Special Havan"],
      premium: ["All Standard features", "VVIP Samagri", "Complete Dosh Nivaran", "Personalized Remedies", "Follow-up Guidance"]
    },
    reviews: [
      { name: "Rohit Sharma", rating: 5, comment: "Meri kundli mein Kaal Sarp Dosh tha. Job mein bahut problems thi. Puja ke baad se cheezein track pe aa rahi hain." },
      { name: "Priya Gupta", rating: 4.5, comment: "It's a very intensive puja. Pandits were highly experienced and performed all rituals diligently. Bahut relief feel ho raha hai." },
      { name: "Amit Verma", rating: 5, comment: "My marriage was getting delayed. Someone suggested this puja. 6 mahine ke andar mera rishta pakka ho gaya. I am a believer now." },
      { name: "Neha Singh", rating: 4, comment: "Life mein ek constant struggle tha. After performing this shanti puja, I feel more mental peace and clarity." },
      { name: "Vikram Patel", rating: 4.5, comment: "Online book kiya tha Trimbakeshwar mein puja ke liye. Inhone sab arrange kar diya. Very trustworthy." }
    ]
  },
  {
    id: 10,
    name: "Ganesh Puja",
    englishDescription: "Lord Ganesha, the remover of obstacles (Vighnaharta), is always worshipped first before any new beginning. A Ganesh Puja is performed to seek his blessings before starting a new venture, new job, new home, or any auspicious event. This puja ensures that the path ahead is smooth, successful, and free from all obstacles.",
    hindiDescription: "भगवान गणेश, विघ्नहर्ता, की पूजा किसी भी नई शुरुआत से पहले हमेशा सबसे पहले की जाती है। एक नया उद्यम, नई नौकरी, नया घर, या कोई भी शुभ कार्यक्रम शुरू करने से पहले उनका आशीर्वाद लेने के लिए गणेश पूजा की जाती है। यह पूजा सुनिश्चित करती है कि आगे का मार्ग सुगम, सफल और सभी बाधाओं से मुक्त हो।",
    image: ganeshPujaImg,
    category: "festivals",
    pricing: {
      basic: 2500,
      standard: 5000,
      premium: 7000
    },
    includes: {
      basic: ["1 Pandit", "Ganesh Sthapana", "Aarti & Modak Bhog"],
      standard: ["All Basic features", "Premium Samagri", "Extended Aarti", "Special Prasad"],
      premium: ["All Standard features", "VVIP Samagri", "Elaborate Ceremony", "Special Blessings", "Business Guidance"]
    },
    reviews: [
      { name: "Rohit Agarwal", rating: 5, comment: "We did Ganesh Puja before starting our new business. Sab acche se ho gaya. Ganpati Bappa Morya!" },
      { name: "Priya Sharma", rating: 4.5, comment: "Simple, elegant, and divine puja. Pandit ji was very good. Unhone poore mann se puja karwayi." },
      { name: "Amit Verma", rating: 4, comment: "Naya ghar liya tha. Griha Pravesh se pehle Ganesh Puja karwayi. Felt very positive." },
      { name: "Neha Gupta", rating: 5, comment: "My son was starting his new job. Humne ek choti si puja rakhi. He is doing very well now. Bappa ka aashirvad hai." },
      { name: "Vikram Singh", rating: 4, comment: "Har saal Ganesh Chaturthi pe inhi se puja karwate hain. Best service in town." }
    ]
  }
  ,
  {
    id: 11,
    name: "Durga Saptashati Path",
    englishDescription: "Powerful recitation of 700 verses dedicated to Goddess Durga, granting protection, strength, and prosperity.",
    hindiDescription: "दुर्गा सप्तशती के 700 श्लोकों का शक्तिशाली पाठ, जो रक्षा, शक्ति और समृद्धि प्रदान करता है।",
    image: durgaSaptashatiPathImg,
    category: "festivals",
    pricing: { basic: 7000, standard: 11000, premium: 15000 },
    includes: {
      basic: ["1 Pandit", "Complete Path (13 Adhyay)", "Basic Samagri", "Havan"],
      standard: ["All Basic features", "Havan & Aarti", "Basic Decoration"],
      premium: ["All Standard features", "Elaborate Havan", "premiume Decoration", "Prasad Distribution"]
    },
    reviews: [
      { name: "Sonal", rating: 5, comment: "Navratri mein poora path kiya. Ghar ka mahaul divine ho gaya." },
      { name: "Meera", rating: 4.5, comment: "Pronunciation bahut shuddh tha. Jai Mata Di!" },
      { name: "Ankit", rating: 4, comment: "Peace of mind mil gaya. Strong vibes felt." },
      { name: "Kalyani (Marathi)", rating: 5, comment: "Path khup changla zhala, gharat shanti ani anand vatla." },
      { name: "Ravi", rating: 4.5, comment: "Time par aaye, sab vidhi-vidhan se hua. Recommended." },
      { name: "Priyanka", rating: 4, comment: "Aarti was very soulful. Family happy." },
      { name: "Pooja", rating: 5, comment: "Bahut pavitra anubhav. Mata rani ki kripa bani rahe." }
    ]
  },
  {
    id: 12,
    name: "Bhoomi Pujan",
    englishDescription: "Sacred ritual before construction to honor Bhoomi Devi and Vastu Purush for a smooth, safe build.",
    hindiDescription: "निर्माण शुरू करने से पहले भूमि देवी और वास्तु पुरुष का सम्मान करने का पवित्र अनुष्ठान, जिससे निर्माण सुचारू और सुरक्षित रहे।",
    image: bhoomiPujanImg,
    galleryImages: [
      "https://placehold.co/600x400/FFF7E6/800000?text=Vastu+1",
      "https://placehold.co/600x400/FFF7E6/800000?text=Vastu+2",
      "https://placehold.co/600x400/FFF7E6/800000?text=Vastu+3"
    ],
    category: "home",
    pricing: { basic: 5100, standard: 7000, premium: 11000 },
    includes: {
      basic: ["1 Pandit", "Basic Samagri", "Bhoomi Pooja", "Neev Sthapana"],
      standard: ["All Basic features", "Extended Havan", "Site Shuddhikaran"],
      premium: ["All Standard features", "Elaborate Mandap", "VVIP Samagri"]
    },
    reviews: [
      { name: "Yogesh", rating: 5, comment: "Site pe puja bahut ache se hui. Positive shuruaat!" },
      { name: "Smita (Marathi)", rating: 4.5, comment: "Pujan changlay paddhatine jhala, sarvanna avadla." },
      { name: "Arun", rating: 4, comment: "Foundation stone ceremony perfect tha." },
      { name: "Kiran", rating: 5, comment: "Vastu shanti ke baad mann ko bahut shanti." },
      { name: "Nisha", rating: 4.5, comment: "Samagri complete thi. On-time service." },
      { name: "Sagar", rating: 4, comment: "Professional and knowledgeable. Good work." },
      { name: "Pallavi", rating: 5, comment: "Sapne ke ghar ki shuruat shubh hui. Dhanyawaad." }
    ]
  },
  {
    id: 13,
    name: "Rudrabhishek",
    englishDescription: "Auspicious abhishek of Lord Shiva with Vedic Rudram chanting for peace, prosperity and protection.",
    hindiDescription: "भगवान शिव का वेदिक रुद्रम मंत्रों के साथ पवित्र अभिषेक, शांति, समृद्धि और सुरक्षा के लिए।",
    image: rudrabhishekImg,
    category: "festivals",
    pricing: { basic: 5101, standard: 11000, premium: 15000 },
    includes: {
      basic: ["1 Pandits", "Rudri Path", "Panchamrit Abhishek", "Basic Samagri"],
      standard: ["All Basic features", "2 Pandits", "Bhagwan Shankar Abhishek", "Premium Samagri", "Havan"],
      premium: ["All Standard features", "4 Pandits", "Laghu Abhishek", "VVIP Samagri", "Elaborate Havan", "Prasad"]
    },
    reviews: [
      { name: "Shivam", rating: 5, comment: "Om Namah Shivay! Chanting bahut powerful tha." },
      { name: "Gayatri", rating: 4.5, comment: "Man ko shanti mili. Highly recommend." },
      { name: "Amol (Marathi)", rating: 5, comment: "Abhishek darbar watla, khup adhyatmik anubhav." },
      { name: "Ritika", rating: 4, comment: "Samagri sab unhone manage ki. Hassle-free." },
      { name: "Harsh", rating: 4.5, comment: "11 Rudri Path package worth it." },
      { name: "Seema", rating: 4, comment: "Ghar ka mahaul positive ho gaya." },
      { name: "Mahesh", rating: 5, comment: "Best Rudrabhishek experience so far." }
    ]
  },
  {
    id: 14,
    name: "Baglamukhi Puja",
    englishDescription: "Dedicated to Goddess Baglamukhi to stop negative forces, defeat enemies and remove black magic.",
    hindiDescription: "देवी बगलामुखी की पूजा, जो नकारात्मक शक्तियों को रोकने और शत्रुओं पर विजय दिलाने में सहायक है।",
    image: baglamukhiPujaImg,
    category: "dosha",
    pricing: { basic: 7500, standard: 15000, premium: 25000 },
    includes: {
      basic: ["1 Pandits", "Baglamukhi Jaap", "Havan", "Normal Samagri", "5000 Jaap"],
      standard: ["All Basic features", "3 Pandits", "Extended Jaap", "Yellow Themed Setup", "11000 Jaap"],
      premium: ["All Standard features","5 Pandits", "Elaborate Havan", "21000 Jaap", "Remedies"]
    },
    reviews: [
      { name: "Kunal", rating: 5, comment: "Legal case me fayda hua. Jai Maa Baglamukhi." },
      { name: "Priti (Marathi)", rating: 4.5, comment: "Khup shaktishali puja. Ujaas vatla." },
      { name: "Rohit", rating: 4, comment: "Opponents silent ho gaye. Effective." },
      { name: "Zoya", rating: 5, comment: "Energy feel hui turant. Great team." },
      { name: "Aakash", rating: 4, comment: "Authentic rituals, no shortcuts." },
      { name: "Nidhi", rating: 4.5, comment: "Booking easy, result impactful." },
      { name: "Varun", rating: 4, comment: "Highly recommended for protection." }
    ]
  },
  {
    id: 15,
    name: "Office Opening Puja (Vastu Puja)",
    englishDescription: "Purify new office, remove Vastu dosh and invoke Lakshmi-Ganesh-Kubera for success and prosperity.",
    hindiDescription: "नए ऑफिस का शुद्धिकरण, वास्तु दोष निवारण और लक्ष्मी-गणेश-कुबेर का आह्वान, सफलता और समृद्धि के लिए।",
    image: officeOpeningPujaImg,
    category: "home",
    pricing: { basic: 6100, standard: 11000, premium: 21000 },
    includes: {
      basic: ["1 Pandit", "Lakshmi-Ganesh Sthapana", "Havan"],
      standard: ["All Basic features","Vastu Puja", "Cabin Shuddhikaran", "Extended Havan"],
      premium: ["All Standard features", "Lakshmi-Kubera Puja", "Elaborate Setup"]
    },
    reviews: [
      { name: "Naveen", rating: 5, comment: "Opening day par hi positive inquiries aayi." },
      { name: "Shruti", rating: 4.5, comment: "Staff ne bhi positivity feel ki." },
      { name: "Prasad (Marathi)", rating: 4, comment: "Office shuddhi changli jhali. Business la fayda." },
      { name: "Rahul", rating: 4.5, comment: "On-time, complete samagri. Smooth experience." },
      { name: "Aisha", rating: 4, comment: "Lakshmi-Kubera puja was highlight." },
      { name: "Dev", rating: 4, comment: "Reasonable price, solid service." },
      { name: "Monica", rating: 5, comment: "Highly professional. Recommended." }
    ]
  },
  {
    id: 16,
    name: "Birthday Puja (Janmadin Puja)",
    englishDescription: "Celebrate birthday with Navagraha Havan and Ayushya Suktam for long life, health and prosperity.",
    hindiDescription: "जन्मदिन पर नवग्रह हवन और आयुष्य सूक्तम के साथ दीर्घायु, स्वास्थ्य और समृद्धि के लिए पूजा।",
    image: birthdayPujaImg,
    category: "festivals",
    pricing: { basic: 3500, standard: 5000, premium: 11000 },
    includes: {
      basic: ["1 Pandit", "Navagraha Havan", "Basic Samagri"],
      standard: ["All Basic features", "Ayushya Suktam", "Extended Havan", "Family Blessings"],
      premium: ["All Standard features", "Vidya Suktam", "Elaborate Setup"]
    },
    reviews: [
      { name: "Payal", rating: 5, comment: "Party se better puja. Bahut shanti mili." },
      { name: "Sandeep", rating: 4.5, comment: "Parents anniversary pe bhi karwaya. Superb." },
      { name: "Neelam", rating: 4, comment: "Ayushya Suktam felt very divine." },
      { name: "Madhuri (Marathi)", rating: 4.5, comment: "Vadhdivsachi puja khup chhan zhali." },
      { name: "Anil", rating: 4, comment: "Simple, powerful and meaningful." },
      { name: "Juhi", rating: 4, comment: "Kids also enjoyed rituals." },
      { name: "Kabir", rating: 5, comment: "Great way to start the year." }
    ]
  },
  {
    id: 17,
    name: "Sunderkand Path",
    englishDescription: "Recitation of Sunderkand to invoke blessings of Lord Hanuman, remove fears and obstacles.",
    hindiDescription: "सुंदरकांड पाठ, हनुमान जी के आशीर्वाद के लिए, भय और बाधाओं को दूर करने हेतु।",
    image: sunderkandPathImg,
    category: "festivals",
    pricing: { basic: 5100, standard: 11000, premium: 15000 },
    includes: {
      basic: ["2 Pandits", "Sunderkand Path", "Hanuman Aarti", "Basic Samagri"],
      standard: ["All Basic features","4 Pandit","Musical Path", "Havan"],
      premium: ["All Standard features", "5 Pandit", "Elaborate Bhajan Sandhya",]
    },
    reviews: [
      { name: "Ramesh", rating: 5, comment: "Musical path magical tha. Jai Hanuman." },
      { name: "Bhushan (Marathi)", rating: 4.5, comment: "Bhavpurn path, gharat shakti vatli." },
      { name: "Deepti", rating: 4, comment: "Negativity gayab, peace feel hua." },
      { name: "Tanya", rating: 4.5, comment: "Kids also listened calmly. Great." },
      { name: "Arpit", rating: 4, comment: "Very organized, on-time." },
      { name: "Saurabh", rating: 4, comment: "Good for courage and focus." },
      { name: "Ritika", rating: 5, comment: "Highly recommended." }
    ]
  },
  {
    id: 18,
    name: "Vastu Dosh Nivaran",
    englishDescription: "Puja to harmonize five elements, remove Vastu flaws causing disputes, losses or health issues.",
    hindiDescription: "पंच तत्वों का सामंजस्य और घर/ऑफिस के वास्तु दोषों को दूर करने के लिए पूजा।",
    image: vastuDoshNivaranImg,
    category: "dosha",
    pricing: { basic: 11000, standard: 15000, premium: 25000 },
    includes: {
      basic: ["2 Pandits", "Vastu Dosh Jaap", "Havan", "Basic Samagri"],
      standard: ["All Basic features", "3 Pandit", "Premiume Samagri", "Site Shuddhikaran", "Extended Havan"],
      premium: ["All Standard features","5 Pandit", "VVIP Samagri", "Remedies Guidance", "Elaborate Setup"]
    },
    reviews: [
      { name: "Vikas", rating: 5, comment: "Ghar ki energy badal gayi. Bechaini kam hui." },
      { name: "Prerna", rating: 4.5, comment: "Fights kam ho gaye. Peaceful lagta hai." },
      { name: "Suhas (Marathi)", rating: 4, comment: "Office madhye sudhar jhala." },
      { name: "Aarav", rating: 4.5, comment: "Explained dosh clearly, helpful." },
      { name: "Kavita", rating: 4, comment: "Samagri complete thi. Good work." },
      { name: "Naman", rating: 4, comment: "Sleep quality improved." },
      { name: "Heena", rating: 5, comment: "Highly effective puja." }
    ]
  },
  {
    id: 19,
    name: "Engagement Puja (Sagai)",
    englishDescription: "Pre-wedding Ganesh and Varun puja to bless the couple and families for a smooth journey ahead.",
    hindiDescription: "विवाह-पूर्व सगाई पूजा, गणेश और वरुण पूजन के साथ, नई शुरुआत के लिए दिव्य आशीर्वाद।",
    image: engagementPujaImg,
    category: "marriage",
    pricing: { basic: 3100, standard: 5000, premium: 11000 },
    includes: {
      basic: ["1 Pandit", "Ganesh Puja", "Ring Ceremony Ritual", "Basic Samagri"],
      standard: ["All Basic features","Premiume Samagri", "Family Blessings",  ],
      premium: ["All Standard features", "2 Pandits", "VVIP Samagri", "Elaborate Setup", ]
    },
    reviews: [
      { name: "Isha", rating: 5, comment: "Beautiful and traditional start. Sab khush the." },
      { name: "Girish (Marathi)", rating: 4.5, comment: "Choti pan sundar puja jhali." },
      { name: "Arjun", rating: 4, comment: "On-time, cooperative pandit ji." },
      { name: "Mona", rating: 4.5, comment: "Positive vibes all around." },
      { name: "Kabir", rating: 4, comment: "Simple, elegant, divine." },
      { name: "Rhea", rating: 4, comment: "Booking easy, zero hassle." },
      { name: "Tarun", rating: 5, comment: "Highly recommended for sagai." }
    ]
  },
  {
    id: 20,
    name: "Nav Chandi & Chandi Path",
    englishDescription: "Recitation of Devi Mahatmyam to remove obstacles, fears and negative energies and fulfill wishes.",
    hindiDescription: "देवी महात्म्यम् / चंडी पाठ, बाधाएँ, भय और नकारात्मक ऊर्जा दूर करने और मनोकामनाएँ पूरी करने के लिए।",
    image: chandiPathImg,
    category: "festivals",
    pricing: { basic: 9000, standard: 15000, premium: 21000 },
    includes: {
      basic: ["1 Pandit", "Complete Path (13 Chapters)", "Basic Samagri", "Havan"],
      standard: ["All Basic features","3 pandits","Premiume Samagri", ],
      premium: ["All Standard features","5 Pandits","Complete Samagri", "Flower Decoratin", "Elaborate Havan", "Remedies"]
    },
    reviews: [
      { name: "Shreya", rating: 5, comment: "Powerful path. Negativity door hogayi." },
      { name: "Manoj", rating: 4.5, comment: "On-time and authentic recitation." },
      { name: "Snehal (Marathi)", rating: 4, comment: "Khup changla path." },
      { name: "Ruchi", rating: 4.5, comment: "Felt protected and calm." },
      { name: "Vimal", rating: 4, comment: "Good guidance and rituals." },
      { name: "Paras", rating: 4, comment: "Divine experience overall." },
      { name: "Rani", rating: 5, comment: "Jai Mata Di!" }
    ]
  },
  {
    id: 21,
    name: "Akhand Ramayan Path",
    englishDescription: "24-hour non-stop recitation of Shri Ramcharitmanas with musical team for peace and prosperity.",
    hindiDescription: "श्री रामचरितमानस का 24 घंटे का अखंड पाठ, संगीत के साथ, शांति और समृद्धि के लिए।",
    image: akhandRamayanPathImg,
    category: "festivals",
    pricing: { basic: 15000, standard: 21000, premium: 35000 },
    includes: {
      basic: ["4 Brahmans", "24-hour Path", "Aarti & Havan"],
      standard: ["All Basic features","5 Brahmans", "Bhajan Sandhya"],
      premium: ["All Standard features", " 7 Brahmans", "Elaborate Setup", "Community Seating", "Music", "Flower Decoratin"]
    },
    reviews: [
      { name: "Raghav", rating: 5, comment: "24 ghante ghar bhakti mein dooba raha. Unforgettable." },
      { name: "Ketan (Marathi)", rating: 4.5, comment: "Akhanda path khoop adbhut hota." },
      { name: "Mitali", rating: 4, comment: "Team highly professional and dedicated." },
      { name: "Abha", rating: 5, comment: "Man ki shanti ke liye best." },
      { name: "Yash", rating: 4, comment: "Grand experience, well managed." },
      { name: "Roma", rating: 4, comment: "Final havan and aarti the best." },
      { name: "Sumit", rating: 5, comment: "Jai Shri Ram!" }
    ]
  },
  {
    id: 22,
    name: "Grah Shanti Puja",
    englishDescription: "Jaap and Havan to pacify malefic planets and enhance positive influences for harmony and success.",
    hindiDescription: "ग्रहों के हानिकारक प्रभावों को शांत करने और सकारात्मक प्रभाव बढ़ाने के लिए जाप और हवन।",
    image: grahShantiPujaImg,
    category: "dosha",
    pricing: { basic: 5000, standard: 9000, premium: 15000 },
    includes: {
      basic: ["1 Pandit","Navagraha Poojan", "Havan", "Basic Samagri"],
      standard: ["All Basic features", "2 Pandits", "5 Mala Jaap", "Extended Jaap", "Special Havan"],
      premium: ["All Standard features","3 pandits", "Strotra Path", "Remedial Guidance", "Elaborate Setup"]
    },
    reviews: [
      { name: "Irfan", rating: 5, comment: "Ghar ka kalesh kam hua. Peaceful ab." },
      { name: "Varsha (Marathi)", rating: 4.5, comment: "Soppe ani upyogi. Grah shanti changli." },
      { name: "Pradeep", rating: 4, comment: "Obstacles kam huye, smooth feel." },
      { name: "Ekta", rating: 4.5, comment: "Pandit ji on-time, no rush." },
      { name: "Arnav", rating: 4, comment: "Family ke liye bahut acha." },
      { name: "Chirag", rating: 4, comment: "Recommended for peace." },
      { name: "Nia", rating: 5, comment: "Great results." }
    ]
  },
  {
    id: 23,
    name: "Mangal Dosh Puja (Manglik Dosh)",
    englishDescription: "Appease Mars to reduce Manglik dosh effects and ensure happy, timely marriage and harmony.",
    hindiDescription: "मंगल ग्रह को प्रसन्न कर मांगलिक दोष के प्रभाव कम करने और सुखी वैवाहिक जीवन के लिए पूजा।",
    image: mangalDoshPujaImg,
    category: "dosha",
    pricing: { basic: 5100, standard: 9000, premium: 15000 },
    includes: {
      basic: ["1 Pandit", "Mangal Jaap (10,000)", "Havan"],
      standard: ["All Basic features", "2 Pandits", "Hanuman Puja", "Normal Samagri", "Extended Havan"],
      premium: ["All Standard features","3 Pandits", "Strotra Path", "Mangal Remedies", "Personal Remedies", "Elaborate Setup"]
    },
    reviews: [
      { name: "Shalini", rating: 5, comment: "Rishta jaldi fix ho gaya. Relief!" },
      { name: "Sanket (Marathi)", rating: 4.5, comment: "Vivad kami zale, shantata vatli." },
      { name: "Ritesh", rating: 4, comment: "Good explanation and puja." },
      { name: "Kajal", rating: 4.5, comment: "Honest guidance, helpful." },
      { name: "Usha", rating: 4, comment: "Anxiety kam hui. Dhanyavaad." },
      { name: "Harpreet", rating: 4, comment: "Effective Manglik remedy." },
      { name: "Devika", rating: 5, comment: "Highly recommend." }
    ]
  },
  {
    id: 24,
    name: "Gand Mool Shanti Puja",
    englishDescription: "Shanti puja for babies born in Gand Mool nakshatras to pacify and remove negative effects.",
    hindiDescription: "गंड मूल नक्षत्र में जन्मे शिशु के लिए शांति पूजा, नकारात्मक प्रभावों को दूर करने हेतु।",
    image: gandMoolShantiPujaImg,
    category: "child",
    pricing: { basic: 7000, standard: 11000, premium: 15000 },
    includes: {
      basic: ["1 Pandit", "Specific Nakshatra Jaap", "Havan & Abhishek"],
      standard: ["All Basic features", "2 Pandits", "27 Paani Vidhi","Normal Samagri", "Extended Havan"],
      premium: ["All Standard features","3 Pandits", "Elaborate Setup","Special Samagri", "Remedies Guidance"]
    },
    reviews: [
      { name: "Mrunal (Marathi)", rating: 5, comment: "Moola nakshatra shanti yogya paddhatine jhali." },
      { name: "Anita", rating: 4.5, comment: "Baby ke future ke liye zaroori tha." },
      { name: "Rohit", rating: 4, comment: "Complex puja done perfectly." },
      { name: "Pavitra", rating: 4.5, comment: "Parents ko shanti mili." },
      { name: "Kriti", rating: 4, comment: "Very authentic rituals." },
      { name: "Ramesh", rating: 4, comment: "Timely and professional." },
      { name: "Savita", rating: 5, comment: "Highly recommended for Gand Mool." }
    ]
  },
  {
    id: 25,
    name: "Nakshatra Shanti Puja",
    englishDescription: "Personalized puja to pacify birth star afflictions and enhance positive qualities of nakshatra.",
    hindiDescription: "जन्म नक्षत्र के दोष शांत करने और नक्षत्र के सकारात्मक गुण बढ़ाने के लिए व्यक्तिगत पूजा।",
    image: nakshatraShantiPujaImg,
    category: "dosha",
    pricing: { basic: 5100, standard: 7000, premium: 11000 },
    includes: {
      basic: ["1 Pandit", "Specific Nakshatra Jaap", "Havan"],
      standard: ["All Basic features", "Extended Jaap", "Basic Samagri", "Remedies"],
      premium: ["All Standard features", "Special Samagri", "Elaborate Havan"]
    },
    reviews: [
      { name: "Ritu", rating: 5, comment: "Health improve hua. Clear mind." },
      { name: "Sagar (Marathi)", rating: 4.5, comment: "Stability aalya sarkhi vatli." },
      { name: "Neha", rating: 4, comment: "Personalized and effective." },
      { name: "Arvind", rating: 4.5, comment: "Booking simple, result achha." },
      { name: "Tanvi", rating: 4, comment: "Great for overall well-being." },
      { name: "Omkar", rating: 4, comment: "Recommended after astrology consult." },
      { name: "Ipsita", rating: 5, comment: "Very helpful." }
    ]
  },
  {
    id: 26,
    name: "Rudra Yagna",
    englishDescription: "Grand yagna dedicated to Lord Shiva with multiple recitations of Shri Rudram by 11 pandits.",
    hindiDescription: "भगवान शिव को समर्पित भव्य रुद्र यज्ञ, 11 पंडितों द्वारा श्री रुद्रम के अनेक पाठों के साथ।",
    image: rudraYagnaImg,
    category: "festivals",
    pricing: { basic: 25001, standard: 45000, premium: 75000 },
    includes: {
      basic: ["5 Pandits", "121 Rudram Recitations", "Abhishek", "Grand Havan"],
      standard: ["All Basic features","7 Pandits", "Musical Team","Basic Samagri", "Extended Havan"],
      premium: ["All Standard features","11 Pandits", "Special Samagri", "Elaborate Mandap","Personal Remedies", "Community Setup"]
    },
    reviews: [
      { name: "Ashwin", rating: 5, comment: "Life ka sabse powerful spiritual experience." },
      { name: "Vaishnavi (Marathi)", rating: 4.5, comment: "Yagnachi urja adbhut hoti." },
      { name: "Prakash", rating: 4, comment: "Factory me kiya, energy unbelievable." },
      { name: "Sejal", rating: 5, comment: "Mahadev ki kripa mehsoos hui." },
      { name: "Rohin", rating: 4, comment: "Expensive but worth it." },
      { name: "Isha", rating: 4, comment: "Team very learned and disciplined." },
      { name: "Karan", rating: 5, comment: "Highly recommended." }
    ]
  },
  {
    id: 27,
    name: "Maha Lakshmi Puja",
    englishDescription: "Maha Lakshmi Puja is a powerful and comprehensive ritual dedicated to Goddess Lakshmi, the supreme deity of wealth, fortune, and abundance. This extensive ceremony is performed to overcome significant financial obstacles, clear long-standing debts, and attract new streams of income and prosperity. It often involves the sacred Sri Suktam Path and Lakshmi Sahasranamam (1000 names), invoking her divine grace for sustained financial stability and success in business or career.",
    hindiDescription: "महा लक्ष्मी पूजा धन, सौभाग्य और प्रचुरता की सर्वोच्च देवी, देवी लक्ष्मी को समर्पित एक शक्तिशाली और व्यापक अनुष्ठान है। यह पूजा विशेष रूप से गंभीर वित्तीय बाधाओं को दूर करने, पुराने कर्ज़ों से मुक्ति पाने और आय तथा समृद्धि के नए स्रोतों को आकर्षित करने के लिए की जाती है। इसमें अक्सर पवित्र श्री सूक्तम पाठ और लक्ष्मी सहस्रनाम (1000 नाम) का जाप शामिल होता है, जो निरंतर वित्तीय स्थिरता और व्यापार या करियर में सफलता के लिए उनकी दिव्य कृपा का आह्वान करता है।",
    image: mahaLakshmiPujaImg,
    category: "festivals",
    pricing: { basic: 7000, standard: 11000, premium: 15000 },
    includes: {
      basic: ["1 Pandit", "Sri Suktam Path", "Havan"],
      standard: ["All Basic features", "Special Samagri (Lotus flowers, etc.)", "Lakshmi Sahasranamam Path", "Special Prasad"],
      premium: ["All Standard features", "VVIP Samagri", "Elaborate Ceremony", "Family Blessings", "Personal Remedies", "Personalized Guidance"]
    },
    reviews: [
      { name: "Business Owner", rating: 5, comment: "Business was very down for the last 2 years. Humne Maha Lakshmi Puja karwayi. Maa ki kripa se, things are finally moving. New orders aa rahe hain." },
      { name: "Debt Relief Seeker", rating: 5, comment: "I was in a lot of debt. Is puja ke baad se, raaste banne lage hain clear karne ke. Bahut shanti mili mann ko. Jai Maa Lakshmi." },
      { name: "Devotee", rating: 4.5, comment: "The pandits were excellent. Unhone poora Sri Suktam path aur Sahasranamam kiya. Koi jaldi nahi. It felt very divine and powerful." },
      { name: "Spiritual Seeker", rating: 5, comment: "Yeh normal Lakshmi puja se kaafi different and intensive hai. The vibrations during the havan were amazing. Thank you." },
      { name: "Payment Clearance", rating: 4.5, comment: "My stuck payments got cleared within a month of this puja. Pehle main maanta nahi tha, but now I am a believer." },
      { name: "Easy Booking", rating: 4, comment: "Booking was smooth. Panditji came with all samagri, including lotus flowers and kheer. Hamein kuch nahi karna pada. Very professional." },
      { name: "Annual Ritual", rating: 5, comment: "We do this puja every Akshaya Tritiya. It brings a lot of prosperity and positivity to our home. Highly recommend this service." },
      { name: "Financial Stability", rating: 4.5, comment: "Financial stability ke liye must hai. Pandit ji ne bahut mann se puja sampann karwayi." },
      { name: "Home Blessing", rating: 5, comment: "Very satisfied. Ghar ka poora aura hi change ho gaya hai. It feels blessed." }
    ]
  }
];

// Export individual data structures for easy management
export const servicesCategories = [
  { key: 'all', label: 'All Services' },
  { key: 'home', label: 'Home Poojas' },
  { key: 'marriage', label: 'Marriage' },
  { key: 'child', label: 'Child Ceremonies' },
  { key: 'dosha', label: 'Dosha Remedies' },
  { key: 'festivals', label: 'Festival Poojas' }
];

export const astrologyServices = [
  {
    id: 1,
    name: "Birth Chart Analysis",
    description: "Detailed analysis of your birth chart to understand planetary influences",
    price: 1500,
    duration: "45 minutes",
    image: "https://placehold.co/400x300/FFF7E6/800000?text=Birth+Chart"
  },
  {
    id: 2,
    name: "Marriage Compatibility",
    description: "Check compatibility between partners using Vedic astrology",
    price: 2500,
    duration: "60 minutes",
    image: "https://placehold.co/400x300/FFF7E6/800000?text=Marriage+Compatibility"
  },
  {
    id: 3,
    name: "Career Guidance",
    description: "Astrological insights for career decisions and professional growth",
    price: 2000,
    duration: "50 minutes",
    image: "https://placehold.co/400x300/FFF7E6/800000?text=Career+Guidance"
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Why Vastu Shanti is Important Before Moving In",
    description: "Learn about the significance of Vastu Shanti puja for a harmonious and prosperous life in your new home.",
    content: "Vastu Shanti Pooja is a sacred ritual performed to purify and energize a new home or office space according to Vedic architectural principles...",
    image: "https://placehold.co/400x300/FFF7E6/800000?text=Vastu+Shanti",
    author: "Pandit Aditya Narayan",
    date: "2024-12-15",
    category: "Vastu",
    tags: ["vastu", "home", "harmony"]
  },
  {
    id: 2,
    title: "5 Auspicious Muhurats for Marriage in 2025",
    description: "Discover the most auspicious dates and times for tying the knot in the upcoming year.",
    content: "Marriage is one of the most important milestones in life, and choosing the right muhurat can significantly impact the couple's future happiness...",
    image: "https://placehold.co/400x300/FFF7E6/800000?text=Marriage+Muhurat",
    author: "Pandit Aditya Narayan",
    date: "2024-12-10",
    category: "Marriage",
    tags: ["marriage", "muhurat", "2025"]
  },
  {
    id: 3,
    title: "What is Kaal Sarp Dosh and How to Remove It?",
    description: "An in-depth guide to understanding and mitigating the effects of Kaal Sarp Dosh in your horoscope.",
    content: "Kaal Sarp Dosh is a significant astrological condition that occurs when all planets in a birth chart are positioned between Rahu and Ketu...",
    image: "https://placehold.co/400x300/FFF7E6/800000?text=Kaal+Sarp+Dosh",
    author: "Pandit Aditya Narayan",
    date: "2024-12-05",
    category: "Dosha",
    tags: ["kaal-sarp", "dosha", "remedies"]
  }
];

export const glimpsesData = [
  {
    id: 1,
    title: "Sacred Fire Ceremony",
    description: "Traditional havan with Vedic mantras",
    image: "https://placehold.co/600x400/FFF7E6/800000?text=Sacred+Fire",
    category: "ceremony"
  },
  {
    id: 2,
    title: "Divine Blessings",
    description: "Pandit ji performing aarti",
    image: "https://placehold.co/600x400/FFF7E6/800000?text=Divine+Blessings",
    category: "blessings"
  },
  {
    id: 3,
    title: "Family Pooja",
    description: "Complete family participating in rituals",
    image: "https://placehold.co/600x400/FFF7E6/800000?text=Family+Pooja",
    category: "family"
  }
];

export const poojaMomentsData = [
  {
    id: 1,
    title: "Morning Prayers",
    description: "Starting the day with divine energy",
    image: "https://placehold.co/600x400/FFF7E6/800000?text=Morning+Prayers",
    category: "daily"
  },
  {
    id: 2,
    title: "Festival Celebrations",
    description: "Joyful moments during festivals",
    image: "https://placehold.co/600x400/FFF7E6/800000?text=Festival+Celebrations",
    category: "festival"
  },
  {
    id: 3,
    title: "Special Ceremonies",
    description: "Life-changing sacred rituals",
    image: "https://placehold.co/600x400/FFF7E6/800000?text=Special+Ceremonies",
    category: "special"
  }
];

export default poojaServicesData;
