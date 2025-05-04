import React from 'react';

interface PersonJsonLdProps {
    name: string;
    url: string;
    image: string;
    description: string;
    sameAs?: string[];
    jobTitle?: string;
}

interface WebsiteJsonLdProps {
    url: string;
    name: string;
    description: string;
    author: {
        name: string;
        url: string;
    };
    inLanguage: string[];
}

export function PersonJsonLd({
    name,
    url,
    image,
    description,
    sameAs = [],
    jobTitle,
}: PersonJsonLdProps) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name,
        url,
        image,
        description,
        sameAs,
        ...(jobTitle && { jobTitle }),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

export function WebsiteJsonLd({
    url,
    name,
    description,
    author,
    inLanguage,
}: WebsiteJsonLdProps) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        url,
        name,
        description,
        author: {
            '@type': 'Person',
            name: author.name,
            url: author.url,
        },
        inLanguage,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

export function ArticleJsonLd({
    title,
    description,
    url,
    images,
    datePublished,
    dateModified,
    authorName,
    authorUrl,
    publisherName,
    publisherLogo,
}: {
    title: string;
    description: string;
    url: string;
    images: string[];
    datePublished: string;
    dateModified: string;
    authorName: string;
    authorUrl: string;
    publisherName: string;
    publisherLogo: string;
}) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        image: images,
        datePublished,
        dateModified,
        author: {
            '@type': 'Person',
            name: authorName,
            url: authorUrl,
        },
        publisher: {
            '@type': 'Organization',
            name: publisherName,
            logo: {
                '@type': 'ImageObject',
                url: publisherLogo,
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url,
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
} 