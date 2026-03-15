import { MetadataRoute } from 'next';
import { poojaServicesData } from '@/data/poojaServices';
import { allPosts } from '@/data/blogPosts';
import { slugify } from '@/lib/utils';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.vedic-pooja.com';

    const languages = ["hi", "mr", "gu", "kn"];
    const staticPaths = ["", "/about", "/astrology", "/pooja", "/blog"];

    // Base English routes
    const routes: MetadataRoute.Sitemap = staticPaths.map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: "daily" as const,
        priority: path === "" ? 1 : 0.8,
    }));

    // Multilingual static routes
    const langRoutes: MetadataRoute.Sitemap = languages.flatMap((lang) =>
        staticPaths.map((path) => ({
            url: `${baseUrl}/${lang}${path}`,
            lastModified: new Date(),
            changeFrequency: "daily" as const,
            priority: path === "" ? 0.9 : 0.7,
        }))
    );

    // English Pooja Routes
    const poojaRoutes: MetadataRoute.Sitemap = poojaServicesData.map((pooja) => ({
        url: `${baseUrl}/pooja/${slugify(pooja.name)}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.6,
        images: [`${baseUrl}/logo.png`],
    }));

    // Multilingual Pooja Routes
    const langPoojaRoutes: MetadataRoute.Sitemap = languages.flatMap((lang) =>
        poojaServicesData.map((pooja) => ({
            url: `${baseUrl}/${lang}/pooja/${slugify(pooja.name)}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.5,
        }))
    );

    // English Blog Routes
    const blogRoutes: MetadataRoute.Sitemap = allPosts.map((post) => {
        const imageUrl: string = (post.image as any)?.src
            ? `${baseUrl}${(post.image as any).src}`
            : `${baseUrl}/logo.png`;

        return {
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.5,
            images: [imageUrl],
        };
    });

    // Multilingual Blog Routes
    const langBlogRoutes: MetadataRoute.Sitemap = languages.flatMap((lang) =>
        allPosts.map((post) => ({
            url: `${baseUrl}/${lang}/blog/${post.slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.4,
        }))
    );

    return [
        ...routes,
        ...langRoutes,
        ...poojaRoutes,
        ...langPoojaRoutes,
        ...blogRoutes,
        ...langBlogRoutes,
    ];
}
