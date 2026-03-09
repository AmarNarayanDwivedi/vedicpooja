interface SEOMetadataProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

const SEOMetadata = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = "website",
}: SEOMetadataProps) => {
  const siteName = "Vedic Pooja";
  const siteUrl = "https://www.vedic-pooja.com";
  const defaultImage = `${siteUrl}/assets/logo.webp`;

  // Ensure phone number is always visible in the title as requested by the user
  const displayTitle = title.includes("8668552465") ? title : `${title} | 8668552465`;

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{displayTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph Tags */}
      <meta property="og:title" content={displayTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:url" content={canonical || siteUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={displayTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Vedic Pooja" />
    </>
  );
};

export default SEOMetadata;
