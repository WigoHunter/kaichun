import { merge } from 'lodash';
import type { Metadata } from 'next';
import { useLocale } from "next-intl";

type MetadataGenerator = Omit<Metadata, 'description' | 'title'> & {
    title: string;
    description: string;
    locale: string;
    image?: string;
    keywords?: string;
    datePublished?: string;
    dateModified?: string;
    type?: 'website' | 'article';
};

const applicationName = 'kevinhsu.io';
const author: Metadata['authors'] = {
    name: 'Kevin Hsu',
    url: 'https://kevinhsu.io/',
};
const publisher = 'Kevin Hsu';
const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'https://www.kevinhsu.io';

export const createMetadata = ({
    title,
    description,
    locale,
    image,
    keywords: customKeywords,
    datePublished,
    dateModified,
    type = 'website',
    ...properties
}: MetadataGenerator): Metadata => {
    // Default keywords based on locale if not provided
    const defaultKeywords = locale === 'en'
        ? [
            "Kevin Hsu",
            "Software Engineer",
            "Writing",
            "Web Developer",
            "Writer",
            "Fiction",
            "Fantasy Novel",
        ]
        : [
            "許凱鈞",
            "矽谷",
            "矽谷工程師",
            "寫作",
            "寫小說",
            "奇幻小說",
            "軟體工程師",
            "寫小說的工程師",
            "作家",
            "小說",
            "奇幻小說",
            "科幻小說"
        ];

    // Combine default and custom keywords
    const keywords = customKeywords
        ? [...defaultKeywords, ...customKeywords.split(',').map(k => k.trim())]
        : defaultKeywords;

    // Current date for lastModified if not provided
    const currentDate = new Date().toISOString();

    const defaultMetadata: Metadata = {
        title,
        description,
        keywords,
        applicationName,
        authors: [author],
        creator: author.name,
        formatDetection: {
            telephone: false,
        },
        appleWebApp: {
            capable: true,
            statusBarStyle: 'default',
            title,
        },
        openGraph: {
            title,
            description,
            type,
            siteName: "Kevin Hsu",
            locale: locale === 'en' ? 'en_US' : 'zh_TW',
            url: `${baseUrl}/${locale}`,
            ...(datePublished && { publishedTime: datePublished }),
            ...(dateModified && { modifiedTime: dateModified || currentDate }),
        },
        publisher,
        metadataBase: new URL(baseUrl),
        // Add alternates
        alternates: {
            canonical: `${baseUrl}/${locale}`,
            languages: {
                'en': `${baseUrl}/en`,
                'zh': `${baseUrl}/zh`,
            },
        },
        // Enhanced robots
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };

    const metadata: Metadata = merge(defaultMetadata, properties);

    if (image && metadata.openGraph) {
        const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;
        metadata.openGraph.images = [
            {
                url: imageUrl,
                width: 1200,
                height: 630,
                alt: title,
            },
        ];
    }

    return metadata;
};