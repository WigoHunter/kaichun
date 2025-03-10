import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const defaultPages: MetadataRoute.Sitemap = [
        {
            url: "https://www.kevinhsu.io",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9
        },
        {
            url: "https://www.kevinhsu.io/zh",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1
        },
        {
            url: "https://www.kevinhsu.io/zh/about",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9
        },
        {
            url: "https://www.kevinhsu.io/zh/newsletter",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0
        },
        {
            url: "https://kevinhsu.io/zh/reading",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5
        },
        {
            url: "https://www.kevinhsu.io/zh/chronicles-of-fire-theft",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0
        },
        {
            url: "https://www.kevinhsu.io/zh/the-spirit-smoke",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9
        },
        {
            url: "https://www.kevinhsu.io/zh/dear-human-sister",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9
        },
        {
            url: "https://www.kevinhsu.io/en",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1
        },
        {
            url: "https://www.kevinhsu.io/en/about",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9
        },
        {
            url: "https://www.kevinhsu.io/en/newsletter",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0
        },
        {
            url: "https://kevinhsu.io/en/reading",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5
        },
        {
            url: "https://www.kevinhsu.io/en/chronicles-of-fire-theft",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0
        },
        {
            url: "https://www.kevinhsu.io/en/the-spirit-smoke",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9
        },
        {
            url: "https://www.kevinhsu.io/en/dear-human-sister",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9
        }
    ];

    return defaultPages;
}