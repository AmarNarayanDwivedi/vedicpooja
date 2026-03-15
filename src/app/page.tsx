"use client";

import { useRef } from "react";
import SEOMetadata from "@/components/SEOMetadata";
import HeroSection from "@/components/sections/HeroSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import PopularPoojasSection from "@/components/sections/PopularPoojasSection";
import AboutPreview from "@/components/sections/AboutPreview";
import BookingSection from "@/components/sections/BookingSection";
import logo from "@/assets/logo.webp";
import dynamic from "next/dynamic";

const GallerySection = dynamic(() => import("@/components/sections/GallerySection"));
const TestimonialsSlider = dynamic(() => import("@/components/sections/TestimonialsSlider"));
const BlogSection = dynamic(() => import("@/components/sections/BlogSection"));

/**
 * Home page component - Main landing page with all sections
 */
export default function Home() {
  const bookingSectionRef = useRef<HTMLDivElement>(null);

  const handleBookPoojaClick = () => {
    bookingSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <SEOMetadata
        title="Pune's No.1 Pooja Booking | 100% Authentic Vedic Pooja | 8668552465"
        description="☎️ 8668552465 · Pune's No.1 pandit booking for 27+ Vedic poojas. Samagri included. Muhurat fixed. Serving Wakad, Hinjewadi, Baner, Kothrud & all Pune. ₹2100 onwards. Book now."
        keywords="8668552465, pooja booking pune, pandit in pune, vedic pooja pune, 100% authentic pooja, satyanarayan pooja pune, griha pravesh pooja pune, pandit wakad, pandit hinjewadi, pandit baner, pandit kothrud, 9225509555"
        canonical="https://www.vedic-pooja.com/"
        ogImage="https://www.vedic-pooja.com/logo.png"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ReligiousOrganization",
            "name": "Vedic Pooja",
            "description": "Authentic Vedic pooja services and astrology consultations in Pune, India",
            "url": "https://www.vedic-pooja.com",
            "logo": "https://www.vedic-pooja.com/logo.png",
            "telephone": ["+91-8668552465", "+91-9225509555"],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Pune City",
              "addressLocality": "Pune",
              "addressRegion": "Maharashtra",
              "postalCode": "411001",
              "addressCountry": "IN",
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 18.5204,
              "longitude": 73.8567,
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": ["+91-8668552465", "+91-9225509555"],
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi", "Marathi", "Kannada", "Gujarati"],
            },
            "sameAs": ["https://www.instagram.com/adityanarayan3081"],
            "serviceType": ["Pooja Services", "Astrology Consultation", "Online Pooja"],
            "areaServed": [
              { "@type": "City", "name": "Pune" },
              { "@type": "Place", "name": "Hinjewadi" },
              { "@type": "Place", "name": "Wakad" },
              { "@type": "Place", "name": "Baner" },
              { "@type": "Place", "name": "Hadapsar" },
              { "@type": "Place", "name": "Viman Nagar" },
              { "@type": "Place", "name": "Kharadi" },
              { "@type": "Place", "name": "Kothrud" },
              { "@type": "Country", "name": "India" },
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Vedic Pooja Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Griha Pravesh Pooja" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Satyanarayan Puja" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Astrology Consultation" } },
              ],
            },
          }),
        }}
      />
      <HeroSection onBookPoojaClick={handleBookPoojaClick} />
      <ServicesOverview />
      <AboutPreview />
      <WhyChooseUsSection />
      <PopularPoojasSection onBookPoojaClick={handleBookPoojaClick} />
      <GallerySection />
      <TestimonialsSlider />
      <BlogSection />
      <BookingSection forwardedRef={bookingSectionRef} />
    </>
  );
}
