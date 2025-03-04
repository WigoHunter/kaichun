"use client"

import { useTranslations, useLocale } from 'next-intl';
import { getPosts } from '@/data/posts';
import EssaySummary from '@/components/EssaySummary';

export default function PageNewsLetter() {
    const t = useTranslations('newsletter');
    const locale = useLocale();
    const posts = getPosts(locale);

    return <div className="bg-white py-12 sm:py-16 overflow-hidden">
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
    </div>;
}