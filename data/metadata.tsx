import { merge } from 'lodash';
import type { Metadata } from 'next';
import { useLocale } from "next-intl";

type MetadataGenerator = Omit<Metadata, 'description' | 'title'> & {
    title: string;
    description: string;
    locale: string;
    image?: string;
};

const applicationName = 'kevinhsu.io';
const author: Metadata['authors'] = {
    name: 'Kevin Hsu',
    url: 'https://kevinhsu.io/',
};
const publisher = 'Kevin Hsu';

export const createMetadata = ({
    title,
    description,
    locale,
    image,
    ...properties
}: MetadataGenerator): Metadata => {
    const keywords = locale === 'en'
        ? [
            "Software Engineer",
            "Writing",
            "Fiction",
            "Novel",
            "Fantasy"
        ]
        : [
            "矽谷",
            "工程師",
            "矽谷工程師",
            "寫作",
            "寫小說",
            "奇幻小說"
        ];
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
            type: 'website',
            siteName: "Kevin Hsu",
            locale: locale === 'en' ? 'en_US' : 'zh_TW',
        },
        publisher,
    };

    const metadata: Metadata = merge(defaultMetadata, properties);

    if (image && metadata.openGraph) {
        metadata.openGraph.images = [
            {
                url: image,
                width: 1200,
                height: 630,
                alt: title,
            },
        ];
    }

    return metadata;
};