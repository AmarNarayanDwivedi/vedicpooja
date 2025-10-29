import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection.jsx";
import galleryImg1 from "@/assets/HeroPage/pooja_glimpshiss/pooja-performing-2.webp";
import galleryImg2 from "@/assets/HeroPage/pooja_glimpshiss/pooja-performing.webp";
import galleryImg3 from "@/assets/HeroPage/pooja_glimpshiss/pooja-setup.webp";
import galleryImg4 from "@/assets/HeroPage/pooja_glimpshiss/shadi.webp";
import galleryVid1 from "@/assets/HeroPage/pooja_glimpshiss/video/Pooja_Setup_Video_Creation.webm";
import galleryVid2 from "@/assets/HeroPage/pooja_glimpshiss/video/Pooja_Video_Generation_Complete.webm";
import galleryVid3 from "@/assets/HeroPage/pooja_glimpshiss/video/Pooja_Video_Generation_For_Website.webm";
import galleryVid4 from "@/assets/HeroPage/pooja_glimpshiss/video/VID_20250722_063314_767.webm";

/**
 * Gallery section displaying pooja moments in a scrolling carousel
 */
const GallerySection = () => {
  const mediaItems = [
    { type: "image", src: galleryImg1 },
    { type: "image", src: galleryImg2 },
    { type: "image", src: galleryImg3 },
    { type: "image", src: galleryImg4 },
    { type: "video", src: galleryVid1 },
    { type: "video", src: galleryVid2 },
    { type: "video", src: galleryVid3 },
    { type: "video", src: galleryVid4 },
  ];

  const mediaRow1 = [...mediaItems, ...mediaItems];
  const mediaRow2 = [...mediaItems, ...mediaItems];

  return (
    <section className="py-20 bg-transparent overflow-hidden">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2
            className="text-4xl md:text-5xl font-bold text-center text-[#800000] mb-12"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Pooja Moments
          </h2>
        </AnimatedSection>
        <div
          className="flex flex-col gap-4"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          }}
        >
          <motion.div
            className="flex gap-4"
            animate={{ x: ["-100%", "0%"] }}
            transition={{ ease: "linear", duration: 80, repeat: Infinity }}
          >
            {mediaRow1.map((item, index) => (
              <div
                key={`r1-${index}`}
                className="flex-shrink-0 w-[400px] h-[250px] overflow-hidden rounded-lg shadow-lg"
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt="Pooja ceremony and rituals performed by experienced pandit in Pune"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    autoPlay
                    playsInline
                  />
                )}
              </div>
            ))}
          </motion.div>
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ ease: "linear", duration: 80, repeat: Infinity }}
          >
            {mediaRow2.map((item, index) => (
              <div
                key={`r2-${index}`}
                className="flex-shrink-0 w-[400px] h-[250px] overflow-hidden rounded-lg shadow-lg"
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt="Pooja ceremony and rituals performed by experienced pandit in Pune"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    autoPlay
                    playsInline
                  />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
