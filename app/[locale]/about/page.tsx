import { useTranslations } from 'next-intl';
import Image from 'next/image'
import RichText from '@/components/RichText';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { createMetadata } from '@/data/metadata';
import { PersonJsonLd } from '@/components/JsonLd';

type MetadataProps = Promise<{
  locale: string
}>;

export const generateMetadata = async ({ params }: { params: MetadataProps }): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return createMetadata({
    title: t('about-title'),
    description: t('about-description'),
    locale,
    image: t('image'),
    type: 'website',
    datePublished: '2025-05-04',
    dateModified: '2025-05-04',
    keywords: '許凱鈞, Kevin Hsu, 軟體工程師, 小說家, 作家, 奇幻小說, 科幻小說, 寫小說的工程師'
  });
};

export default function About() {
  const t = useTranslations('about');

  return (
    <>
      <PersonJsonLd
        name="許凱鈞"
        url="https://www.kevinhsu.io/zh/about"
        image="/2024H2.jpg"
        description="許凱鈞 (Kevin Hsu) 是一位軟體工程師，也是一位自稱的小說家。預計 2025 年會寫完第一本奇幻小說《盜火戰記》。"
        sameAs={["https://www.kevinhsu.io/zh/about"]}
        jobTitle="軟體工程師"
      />
      <div className="relative isolate overflow-hidden bg-white px-8 py-12 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base/7 font-semibold text-indigo-600">{t('subtitle')}</p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  {t('title')}
                </h1>
                <p className="mt-6 text-l/8 text-gray-900">
                  <RichText t={t} phrase="introduction" />
                </p>
              </div>
            </div>
          </div>
          <div className="-mt-12 -mb-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:overflow-hidden">
            <Image
              alt=""
              src="/2024H2.jpg"
              width={1200}
              height={600}
              className="w-full rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 lg:w-[48rem] xl:w-[57rem]"
            />
          </div>
        </div>
      </div>
    </>
  );
}