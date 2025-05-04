import { useTranslations, useLocale } from 'next-intl';
import { getPosts } from '@/data/posts';
import EssaySummary from '@/components/EssaySummary';
import { getTranslations } from 'next-intl/server';
import { createMetadata } from '@/data/metadata';
import type { Metadata } from 'next';
import { WebsiteJsonLd } from '@/components/JsonLd';

type MetadataProps = Promise<{
    locale: string
}>;

export const generateMetadata = async ({ params }: { params: MetadataProps }): Promise<Metadata> => {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "metadata" });

    return createMetadata({
        title: t('newsletter-title'),
        description: t('newsletter-description'),
        locale,
        image: t('image'),
        type: 'website',
        datePublished: '2025-05-04',
        dateModified: '2025-05-04',
        keywords: '部落格, Blog, 許凱鈞, Kevin Hsu, 軟體工程師, 小說家, 作家, 奇幻小說, 科幻小說, 寫小說的工程師'
    });
};

export default function PageNewsLetter() {
    const t = useTranslations('newsletter');
    const locale = useLocale();
    const posts = getPosts(locale);

    return <>
        <WebsiteJsonLd
            url="https://www.kevinhsu.io/zh/newsletter"
            name="Kevin Hsu"
            description={t('description')}
            author={{
                name: "許凱鈞 Kevin Hsu",
                url: "https://www.kevinhsu.io/zh/about"
            }}
            inLanguage={['zh-TW', 'en', 'en-US']}
        />
        <div className="bg-white py-12 sm:py-16 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t('title')}</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        {t('description')}
                    </p>
                </div>
                <div className="max-w-xl -ms-18 md:mx-auto lg:mx-auto pt-4">
                    <iframe src={`${t('url')}/embed`} width="480" height="150" className="bg-white"></iframe>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 lg:mx-0 lg:max-w-none lg:grid-cols-1">
                    {posts.map(post => (
                        <EssaySummary post={post} key={post.id} />
                    ))}
                </div>
                <div className="mt-12 flex items-center justify-center">
                    <a
                        href={t('url')}
                        target='_blank'
                        className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    >
                        {t('readmore')} <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </div></>;
}