import { useRef } from "react";
import SEOMetadata from "@/components/SEOMetadata.jsx";
import HeroSection from "@/components/sections/HeroSection.jsx";
import ServicesOverview from "@/components/sections/ServicesOverview.jsx";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection.jsx";
import PopularPoojasSection from "@/components/sections/PopularPoojasSection.jsx";
import AboutPreview from "@/components/sections/AboutPreview.jsx";
import GallerySection from "@/components/sections/GallerySection.jsx";
import BlogSection from "@/components/sections/BlogSection.jsx";
import TestimonialsSlider from "@/components/sections/TestimonialsSlider.jsx";
import BookingSection from "@/components/sections/BookingSection.jsx";

/**
 * Home page component - Main landing page with all sections
 */
export default function Home() {
  const bookingSectionRef = useRef(null);

  const handleBookPoojaClick = () => {
    bookingSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <SEOMetadata
        title="Vedic Pooja Services in Pune | Authentic Hindu Rituals & Astrology | Pandit Booking"
        description="Book authentic Vedic pooja services in Pune with experienced Pandits. Online pooja booking for weddings, housewarming, Satyanarayan Katha, and astrology consultations. 12+ years experience."
        keywords="pooja booking Pune, pandit in Pune, astrology in Pune, online pooja booking India, vedic rituals Pune, satyanarayan katha Pune, griha pravesh pooja Pune"
        canonical="https://www.vedic-pooja.com/"
        ogImage="https://www.vedic-pooja.com/logo.png"
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
            telephone: "+91-8668552465",
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
            {
              "@type": "Place",
              name: "Pune",
            },
            {
              "@type": "Place",
              name: "India",
            },
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
