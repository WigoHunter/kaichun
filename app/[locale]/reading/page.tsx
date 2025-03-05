"use client"

import { useTranslations, useLocale } from 'next-intl';
import { getBooks } from '@/data/books';
import BookRec from '@/components/BookRec';

export default function PageNewsLetter() {
    const t = useTranslations('reading');
    const locale = useLocale();
    const books = getBooks(locale);

    return <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-xl">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t('title')}</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    {t('description')}
                </p>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 lg:mx-0 lg:max-w-none lg:grid-cols-1">
                {books.map((book) => (
                    <BookRec reason={t('reason')} book={book} key={book.id} />
                ))}
            </div>
        </div>
    </div >;
}