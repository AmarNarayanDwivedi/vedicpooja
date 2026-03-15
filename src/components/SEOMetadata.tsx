interface SEOMetadataProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  ogLocale?: string;
  ogImageWidth?: string;
  ogImageHeight?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  authorName?: string;
  noIndex?: boolean;
}

const SEOMetadata = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = "website",
  ogLocale = "en_IN",
  ogImageWidth = "1200",
  ogImageHeight = "630",
  articlePublishedTime,
  articleModifiedTime,
  authorName,
  noIndex = false,
}: SEOMetadataProps) => {
  const siteName = "Vedic Pooja";
  const siteUrl = "https://www.vedic-pooja.com";
  const defaultImage = `${siteUrl}/logo.png`;
  const twitterHandle = "@vedicpooja";

  // Ensure phone number is always visible in the title as requested by the user
  const displayTitle = title.includes("8668552465") ? title : `${title} | 8668552465`;

  return (
    <>
      {/* ── Basic Meta Tags ── */}
      <title>{displayTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      <meta name="language" content="English" />
      <meta name="author" content={authorName || "Pandit Aditya Narayan Ji"} />
      <meta name="copyright" content="Vedic Pooja" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="3 days" />
      <meta name="theme-color" content="#E67E22" />

      {/* ── Geo / Local SEO (Pune) ── */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Pune, Maharashtra, India" />
      <meta name="geo.position" content="18.5204;73.8567" />
      <meta name="ICBM" content="18.5204, 73.8567" />

      {/* ── Bing Webmaster ── */}
      <meta name="msvalidate.01" content="BING_VERIFICATION_CODE_HERE" />

      {/* ── Canonical URL ── */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* ── hreflang alternates (multilingual audience) ── */}
      {canonical && (
        <>
          <link rel="alternate" hrefLang="en-IN" href={canonical} />
          <link rel="alternate" hrefLang="hi-IN" href={canonical} />
          <link rel="alternate" hrefLang="mr-IN" href={canonical} />
          <link rel="alternate" hrefLang="gu-IN" href={canonical} />
          <link rel="alternate" hrefLang="kn-IN" href={canonical} />
          <link rel="alternate" hrefLang="x-default" href={canonical} />
        </>
      )}

      {/* ── Open Graph Tags ── */}
      <meta property="og:title" content={displayTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:image:width" content={ogImageWidth} />
      <meta property="og:image:height" content={ogImageHeight} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content={displayTitle} />
      <meta property="og:url" content={canonical || siteUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content="hi_IN" />
      <meta property="og:locale:alternate" content="mr_IN" />
      <meta property="og:locale:alternate" content="gu_IN" />
      <meta property="og:locale:alternate" content="kn_IN" />

      {/* ── Article-specific OG tags (blog posts) ── */}
      {articlePublishedTime && (
        <meta property="article:published_time" content={articlePublishedTime} />
      )}
      {articleModifiedTime && (
        <meta property="article:modified_time" content={articleModifiedTime} />
      )}
      {(articlePublishedTime || articleModifiedTime) && (
        <meta property="article:author" content={authorName || "Pandit Aditya Narayan Ji"} />
      )}
      {articlePublishedTime && (
        <meta property="article:publisher" content="https://www.vedic-pooja.com" />
      )}
      {articlePublishedTime && (
        <meta property="article:section" content="Vedic Rituals" />
      )}

      {/* ── Twitter Card Tags ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={displayTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />
      <meta name="twitter:image:alt" content={displayTitle} />

      {/* ── WhatsApp / Telegram link preview optimization ── */}
      <meta property="og:image:secure_url" content={ogImage || defaultImage} />
    </>
  );
};

export default SEOMetadata;
