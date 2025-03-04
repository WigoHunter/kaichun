"use client"

import { useTranslations, useLocale } from 'next-intl';
import { getBooks } from '@/data/books';

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
                    <article key={book.id} className="flex flex-col items-center justify-between">
                        <div className="max-w-xl">
                            <div className="mt-8 flex items-center gap-x-4 text-xs">
                                <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 text-indigo-600">
                                    {book.category.title}
                                </p>
                                <p className="text-gray-500">
                                    {book.author}
                                </p>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href={book.href} target="_blank">
                                        <span className="absolute inset-0" />
                                        {book.title}
                                    </a>
                                </h3>
                                <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-2 mt-4">{t('reason')}</h4>
                                <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">{book.description}</p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </div >;
}