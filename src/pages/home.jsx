import { useRef } from "react";
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