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
        description="Book 100% authentic Vedic pooja services in Pune. Pune's no.1 website for experienced Pandits. Call 8668552465 for Griha Pravesh, Satyanarayan & more."
        keywords="pooja booking pune, pandit in pune, vedic pooja pune, 100% authentic pooja, satyanarayan pooja pune, griha pravesh pooja pune, Hinjewadi, Wakad, ShivajiNagar, VimanNagar, Hadapsar, 8668552465, 9225509555"
        canonical="https://www.vedic-pooja.com/"
        ogImage={`https://www.vedic-pooja.com${logo.src ? logo.src.replace("@", "") : "/assets/logo.webp"}`}
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ReligiousOrganization",
          name: "Vedic Pooja",
          description:
            "Authentic Vedic pooja services and astrology consultations in Pune, India",
          url: "https://www.vedic-pooja.com",
          logo: "https://www.vedic-pooja.com/logo.png",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Pune",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: ["+91-8668552465", "+91-9225509555"],
            contactType: "customer service",
            availableLanguage: [
              "English",
              "Hindi",
              "Marathi",
              "Kannada",
              "Gujarati",
            ],
          },
          sameAs: ["https://www.instagram.com/adityanarayan3081"],
          serviceType: [
            "Pooja Services",
            "Astrology Consultation",
            "Online Pooja",
          ],
          areaServed: [
            { "@type": "City", name: "Pune" },
            { "@type": "Place", name: "Hinjewadi" },
            { "@type": "Place", name: "Wakad" },
            { "@type": "Place", name: "ShivajiNagar" },
            { "@type": "Place", name: "VimanNagar" },
            { "@type": "Place", name: "Hadapsar" },
            { "@type": "Country", name: "India" },
          ],
        })}
      </script>
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
