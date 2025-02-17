import { useTranslations } from 'next-intl';
import { PencilIcon, CodeBracketIcon } from '@heroicons/react/20/solid'
import { Metadata } from 'next';

type MetadataProps = Promise<{
  locale: string
}>;

export const generateMetadata = async ({ params }: { params: MetadataProps }): Promise<Metadata> => {
  const { locale } = await params;
  return {
    title: locale === 'zh' ? '關於我 | 許凱鈞' : 'About me | Kevin Hsu',
  };
};

// FB engineer on creator economy.

export default function About() {
  const t = useTranslations('about');

  return (
    <div className="relative isolate overflow-hidden bg-white px-8 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-indigo-600">{t('subtitle')}</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                {t('title')}
              </h1>
              <p className="mt-6 text-xl/8 text-gray-900">
                {t.rich('introduction', {
                  br: () => <br />,
                  strong: (text) => <strong>{text}</strong>,
                  write: (text) => <a href="https://www.kevinhsu.blog/p/a-recap-of-my-first-two-years-of" className="text-indigo-600">{text}</a>,
                  wop: (text) => <a href="https://www.kevinhsu.blog/p/my-write-of-passage-experience-lessons" className="text-indigo-600">{text}</a>,
                  learn: (text) => <a href="https://www.kevinhsu.blog/p/5-things-i-learned-from-writing-and-coding-2024" className="text-indigo-600">{text}</a>,
                  blog: (text) => <a href="https://www.kevinhsu.blog" className="text-indigo-600">{text}</a>,
                  rewrite: (text) => <a href="https://www.kaichun.blog/p/on-writing-again" className="text-indigo-600 font-semibold">{text}</a>,
                  learning: (text) => <a href="https://www.kaichun.blog/p/4-things-i-learned-from-writing-and-coding-2024" className="text-indigo-600 font-semibold">{text}</a>,
                  sanderson: (text) => <a href="https://www.kaichun.blog/p/brandon-sanderson-on-writing-a-good-story" className="text-indigo-600 font-semibold">{text}</a>,
                  novel: (text) => <a href="/zh/fantasy" className="text-indigo-600 font-semibold">{text}</a>,
                })}
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -mb-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src="/2024H2.jpg"
            className="w-full rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 lg:w-[48rem] xl:w-[57rem]"
          />
        </div>
      </div>
    </div>
  );
}