import { useTranslations, useLocale } from 'next-intl';
import { getBooks } from '@/data/books';
import BookRec from '@/components/BookRec';
import { getTranslations } from 'next-intl/server';
import { createMetadata } from '@/data/metadata';
import type { Metadata } from 'next';

type MetadataProps = Promise<{
    locale: string
}>;

export const generateMetadata = async ({ params }: { params: MetadataProps }): Promise<Metadata> => {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "metadata" });

    return createMetadata({
        title: t('reading-title'),
        description: t('reading-description'),
        locale,
        image: t('image')
    });
};

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