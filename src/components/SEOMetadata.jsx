import { Helmet } from "react-helmet-async";

/**
 * SEO Metadata component for setting page-specific meta tags
 * @param {Object} props
 * @param {string} props.title - Page title
 * @param {string} props.description - Page meta description
 * @param {string} props.keywords - Page keywords
 * @param {string} props.canonical - Canonical URL
 * @param {string} props.ogImage - Open Graph image URL
 * @param {string} props.ogType - Open Graph type (website, article, etc.)
 */
const SEOMetadata = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = "website",
}) => {
  const siteName = "Vedic Pooja";
  const siteUrl = "https://www.vedic-pooja.com";
  const defaultImage = `${siteUrl}/logo.png`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:url" content={canonical || siteUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Vedic Pooja" />
    </Helmet>
  );
};

export default SEOMetadata;
