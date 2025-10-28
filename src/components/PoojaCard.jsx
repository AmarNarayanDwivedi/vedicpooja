import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../context/LanguageContext.jsx';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Star } from 'lucide-react';

const PoojaCard = ({ pooja, className = "", onBookClick }) => {
  const { t } = useTranslation();

  // Calculate average rating
  const avgRating = pooja.reviews.reduce((acc, review) => acc + review.rating, 0) / pooja.reviews.length;
  const numReviews = pooja.reviews.length;

  // Create slug from name
  const slug = pooja.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');

  return (
    <Link to={`/pooja/${slug}`} className={`block h-full ${className}`}>
      <Card className="w-full h-full bg-white shadow-[0px_4px_15px_rgba(0,0,0,0.08)] rounded-lg overflow-hidden
                     transition-all duration-300 ease-in-out
                     hover:shadow-[0px_8px_25px_rgba(0,0,0,0.12)] hover:-translate-y-2 group relative
                     flex flex-col">
        {/* Image Section */}
        <div className="overflow-hidden h-32 sm:h-36 md:h-40 rounded-t-lg">
          <img src={pooja.image} alt={pooja.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
        </div>

        <CardContent className="p-4 flex flex-col justify-between min-h-[200px]">
          {/* Card Content - Upper Section */}
          <div className="relative z-10 flex-grow">
            <h3 className="text-lg font-bold text-[#333333] mb-3 group-hover:text-white transition-colors duration-500 line-clamp-2 min-h-[3.5rem] leading-tight" style={{ fontFamily: "'Lato', sans-serif" }}>
              {pooja.name}
            </h3>

            <div className="flex items-center mb-3">
              <div className="flex text-[#FFD700] group-hover:text-yellow-300 transition-colors duration-500">
                {[...Array(Math.floor(avgRating))].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500 group-hover:text-gray-100 transition-colors duration-500">
                ({numReviews})
              </span>
            </div>

            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-[#777777] group-hover:text-gray-100 transition-colors duration-500" style={{ fontFamily: "'Lato', sans-serif" }}>From</span>
              <span className="text-xl font-bold text-[#E67E22] group-hover:text-white transition-colors duration-500" style={{ fontFamily: "'Lato', sans-serif" }}>
                ₹{pooja.pricing.basic.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          {/* Button Section - Always at bottom */}
          <div className="relative z-10">
            {onBookClick ? (
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  onBookClick();
                }}
                className="w-full bg-[#E67E22] text-white font-semibold py-3 px-6 rounded-lg
                         hover:bg-[#c66919] hover:-translate-y-1
                         group-hover:bg-white group-hover:text-[#E67E22]
                         transition-all duration-300 shadow-md hover:shadow-lg"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                {t.bookNow}
              </Button>
            ) : (
              <Button className="w-full bg-[#E67E22] text-white font-semibold py-3 px-6 rounded-lg
                             hover:bg-[#c66919] hover:-translate-y-1
                             group-hover:bg-white group-hover:text-[#E67E22]
                             transition-all duration-300 shadow-md hover:shadow-lg"
                      style={{ fontFamily: "'Lato', sans-serif" }}>
                {t.bookNow}
              </Button>
            )}
          </div>
        </CardContent>

        {/* Animation Overlay - Only covers content area, not image */}
        <div className="absolute bottom-0 left-0 right-0 h-0
                      w-full bg-[#E67E22] opacity-90
                      transition-all duration-500 ease-in-out
                      group-hover:h-[calc(100%-128px)] sm:group-hover:h-[calc(100%-144px)] md:group-hover:h-[calc(100%-160px)]"
             aria-hidden="true" />
      </Card>
    </Link>
  );
};

export default PoojaCard;