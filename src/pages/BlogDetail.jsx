import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from '../context/LanguageContext.jsx';
import vastuShantiImg from '../assets/Blog/NavagrahaPooja.webp';
import marriageMuhuratImg from '../assets/Blog/RakshaBandhan.webp';
import kaalSarpDoshImg from '../assets/Poojas/KalSarpDosh.webp';

const BlogDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const blogPosts = {
    1: {
      id: 1,
      title: "Why Vastu Shanti is Important Before Moving In",
      description: "Learn about the significance of Vastu Shanti puja for a harmonious and prosperous life in your new home.",
      image: vastuShantiImg,
      content: `Vastu Shanti Pooja is a sacred ritual performed to purify and energize a new home or office space according to Vedic architectural principles. This ancient practice helps remove negative energies and invites positive vibrations into your living space.

The pooja involves specific mantras, offerings, and rituals that align your space with cosmic energies, ensuring peace, prosperity, and harmony for all residents. It's especially important before moving into a new home as it creates a foundation of positive energy that supports your family's well-being and success.

## Key Benefits of Vastu Shanti Pooja:

1. **Energy Purification**: Removes negative energies accumulated in the space
2. **Harmony & Peace**: Creates a harmonious environment for all family members
3. **Prosperity**: Invites wealth and abundance into your home
4. **Health & Well-being**: Promotes good health and positive relationships
5. **Protection**: Shields your home from negative influences

## When to Perform Vastu Shanti:

- Before moving into a new home
- After major renovations
- When experiencing frequent problems in the house
- During auspicious occasions like housewarming ceremonies

The ritual typically includes Ganesh Puja, Navagraha Shanti, and specific Vastu mantras that align your space with the five elements of nature. Our experienced pandits ensure that every aspect of the pooja is performed according to traditional Vedic principles.`,
      author: "Pandit Aditya Narayan",
      date: "December 15, 2024",
      readTime: "5 min read"
    },
    2: {
      id: 2,
      title: "5 Auspicious Muhurats for Marriage in 2025",
      description: "Discover the most auspicious dates and times for tying the knot in the upcoming year.",
      image: marriageMuhuratImg,
      content: `Marriage is one of the most important milestones in life, and choosing the right muhurat (auspicious time) can significantly impact the couple's future happiness and prosperity.

In 2025, several planetary alignments create favorable conditions for weddings. The most auspicious periods include the months of March, May, and November when Jupiter and Venus are in favorable positions.

## Top 5 Auspicious Marriage Dates for 2025:

### 1. March 15, 2025 (Saturday)
- **Time**: 6:00 AM - 8:00 AM
- **Significance**: Jupiter in favorable position, Venus exalted
- **Best for**: Traditional ceremonies and long-lasting marriages

### 2. May 22, 2025 (Thursday)
- **Time**: 7:00 AM - 9:00 AM
- **Significance**: Auspicious planetary combination
- **Best for**: Business families and prosperity-focused couples

### 3. November 8, 2025 (Saturday)
- **Time**: 6:30 AM - 8:30 AM
- **Significance**: Jupiter and Venus in perfect alignment
- **Best for**: Spiritual and harmonious relationships

### 4. December 12, 2025 (Friday)
- **Time**: 7:30 AM - 9:30 AM
- **Significance**: Venus day with favorable planetary positions
- **Best for**: Creative and artistic couples

### 5. January 18, 2025 (Saturday)
- **Time**: 6:00 AM - 8:00 AM
- **Significance**: New year blessings with positive planetary alignment
- **Best for**: Fresh starts and new beginnings

These dates are calculated based on the couple's birth charts and current planetary positions to ensure maximum compatibility and harmony.`,
      author: "Pandit Aditya Narayan",
      date: "December 10, 2024",
      readTime: "7 min read"
    },
    3: {
      id: 3,
      title: "What is Kaal Sarp Dosh and How to Remove It?",
      description: "An in-depth guide to understanding and mitigating the effects of Kaal Sarp Dosh in your horoscope.",
      image: kaalSarpDoshImg,
      content: `Kaal Sarp Dosh is a significant astrological condition that occurs when all planets in a birth chart are positioned between Rahu and Ketu. This dosh can create various life challenges including career obstacles, health issues, and relationship problems.

## Understanding Kaal Sarp Dosh:

The intensity of the dosh depends on which house it affects and the specific planets involved. There are different types of Kaal Sarp Dosh:

### Types of Kaal Sarp Dosh:
1. **Anant Kaal Sarp Dosh**: All planets between Rahu and Ketu
2. **Kulik Kaal Sarp Dosh**: 7 planets between Rahu and Ketu
3. **Vasuki Kaal Sarp Dosh**: 6 planets between Rahu and Ketu
4. **Shankhpal Kaal Sarp Dosh**: 5 planets between Rahu and Ketu

## Effects of Kaal Sarp Dosh:

- **Career**: Frequent job changes, obstacles in professional growth
- **Health**: Chronic health issues, mental stress
- **Relationships**: Family disputes, marital problems
- **Finance**: Financial instability, unexpected expenses
- **Spiritual**: Lack of peace, anxiety, and restlessness

## Remedies to Remove Kaal Sarp Dosh:

### 1. **Kaal Sarp Dosh Nivaran Pooja**
- Performed by experienced pandits
- Specific mantras and rituals
- Best performed during Rahu-Ketu transits

### 2. **Gemstone Therapy**
- **Hessonite (Gomed)** for Rahu
- **Cat's Eye (Lehsunia)** for Ketu
- Must be worn after proper energization

### 3. **Lifestyle Practices**
- Regular meditation and yoga
- Charity work and helping others
- Avoiding negative thoughts and actions

### 4. **Mantra Chanting**
- **Rahu Mantra**: "Om Bhraam Bhreem Bhraum Sah Rahave Namah"
- **Ketu Mantra**: "Om Ketave Namah"
- Chant 108 times daily

Regular meditation and charity work can also help mitigate the negative effects of this dosh.`,
      author: "Pandit Aditya Narayan",
      date: "December 5, 2024",
      readTime: "8 min read"
    }
  };

  const post = blogPosts[id];

  if (!post) {
    return (
      <div className="min-h-screen bg-[#FFF7E6] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#800000] mb-4">Blog Post Not Found</h1>
          <Link to="/" className="text-[#E67E22] hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF7E6] py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
        >
          <div className="overflow-hidden h-64 md:h-80">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
          
          <div className="p-8 md:p-12">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm text-gray-500">{post.date}</span>
              <span className="text-sm text-[#E67E22] font-semibold">{post.readTime}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-[#800000] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {post.title}
            </h1>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">{post.description}</p>
            
            <div className="flex items-center mb-8 pb-6 border-b border-gray-200">
              <div className="w-12 h-12 bg-[#E67E22] rounded-full flex items-center justify-center text-white font-bold mr-4">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-semibold text-[#800000]">{post.author}</p>
                <p className="text-sm text-gray-500">Vedic Astrologer & Priest</p>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-[#800000] mt-8 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-[#800000] mt-6 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('- **')) {
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 mb-6">
                      {paragraph.split('\n').map((item, i) => (
                        <li key={i} className="text-gray-700 leading-relaxed">
                          {item.replace('- **', '').replace('**:', ':').replace('**', '')}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/" 
                  className="flex-1 bg-[#E67E22] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#c66919] transition-colors duration-300 text-center shadow-lg hover:shadow-xl"
                >
                  Book Consultation
                </Link>
                <Link 
                  to="/#blog" 
                  className="flex-1 bg-gray-100 text-[#800000] font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-300 text-center border border-gray-300"
                >
                  ← Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogDetail;
