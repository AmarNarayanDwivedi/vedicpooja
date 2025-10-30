// src/lib/seoUtils.js

/**
 * Generates dynamic SEO meta props for a specific pooja page.
 * This is our primary "Pune" targeting strategy.
 *
 * @param {object} pooja - The pooja object from poojaServicesData
 * @param {string} slug - The URL slug for the pooja
 * @returns {object} - The props object for the SEOMetadata component
 */
export const getPoojaSeoData = (pooja, slug) => {
  const siteUrl = "https://www.vedic-pooja.com";

  if (!pooja) {
    // Fallback for any error
    return {
      title: "Pooja Service | Pune's No.1 Pooja Booking | 8668552465",
      description:
        "Book 100% authentic Vedic pooja services in Pune. Call 8668552465 for details.",
      keywords:
        "pooja booking pune, pandit in pune, 100% authentic vedic pooja, 8668552465",
      canonical: `${siteUrl}/pooja/${slug || ""}`,
    };
  }

  // Sanitize image URL - remove '@' prefix if present from vite alias
  const ogImage = `${siteUrl}${pooja.image.replace("@", "")}`;

  // Craft dynamic title and description
  const title = `Book ${pooja.name} in Pune | 100% Authentic | 8668552465`;

  const description = `Book 100% authentic ${
    pooja.name
  } in Pune. ${pooja.englishDescription.substring(
    0,
    50
  )}... Pune's no.1 website for Vedic pandits. Call 8668552465.`;

  const keywords = `${pooja.name}, ${pooja.name} in pune, book ${pooja.name} pune, 100% authentic pooja, ${pooja.category} pooja, pandit in pune, 8668552465`;

  return {
    title,
    description,
    keywords,
    canonical: `${siteUrl}/pooja/${slug}`,
    ogImage: ogImage,
    ogType: "product",
  };
};
