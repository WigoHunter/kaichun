import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Base URL for the site
    const baseUrl = process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : 'https://www.kevinhsu.io';

    // Get current date for lastModified
    const currentDate = new Date();

    // Define locales
    const locales = ['en', 'zh'];

    // Define all main routes
    const routes = [
        '', // home
        '/about',
        '/newsletter',
        '/reading',
        '/chronicles-of-fire-theft',
        '/the-spirit-smoke',
        '/dear-human-sister'
    ];

    // Generate sitemap entries for all locales and routes
    const sitemapEntries = locales.flatMap(locale => {
        return routes.map(route => {
            const path = route === '' ? `/${locale}` : `/${locale}${route}`;
            const url = `${baseUrl}${path}`;

            // Assign priority based on importance of page
            let priority = 0.7; // Default priority

            if (route === '') {
                // Home pages get highest priority
                priority = 1.0;
            } else if (route === '/about') {
                priority = 0.9;
            } else if (route === '/newsletter') {
                priority = 0.8;
            } else if (route.includes('chronicles-of-fire-theft') ||
                route.includes('spirit-smoke') ||
                route.includes('dear-human-sister')) {
                // Main content pages get higher priority
                priority = 0.9;
            }

            return {
                url,
                lastModified: currentDate,
                changeFrequency: route === '' ? 'weekly' : 'monthly' as 'weekly' | 'monthly',
                priority
            };
        });
    });

    // Add the root URL which redirects to the default locale
    sitemapEntries.push({
        url: baseUrl,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 1.0
    });

    return sitemapEntries;
}