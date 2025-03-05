import { useTranslations, useLocale } from "next-intl";
import Image from 'next/image'
import { getPosts } from '@/data/posts';
import { getBooks } from '@/data/books';
import BookRec from '@/components/BookRec';
import EssaySummary from '@/components/EssaySummary';
import RichText from '@/components/RichText';

export default function Home() {
  const t = useTranslations('home');
  const locale = useLocale();
  const posts = getPosts(locale);
  const books = getBooks(locale).sort((a, b) => a.id - b.id).slice(0, 2);

  return (
    <div className="bg-white py-12 sm:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 overflow-hidden">
        <div className="mx-auto max-w-4xl flex flex-col items-center overflow-hidden">
          <Image
            alt=""
            src="/pic.png"
            height={640}
            width={640}
            className="w-30 rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10"
          />
          <h2 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">{t('title')}</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 text-center">
            <RichText t={t} phrase="description" />
          </p>
          <div className="flex mt-4 sm:justify-center">
            <a href={t('url')} className="text-gray-500 hover:text-gray-900 dark:hover:text-white" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-substack" viewBox="0 0 16 16">
                <path d="M15 3.604H1v1.891h14v-1.89ZM1 7.208V16l7-3.926L15 16V7.208zM15 0H1v1.89h14z" />
              </svg>
              <span className="sr-only">Substack</span>
            </a>
            <a href="https://www.threads.net/@kevinhsu.js" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-8" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-threads" viewBox="0 0 16 16">
                <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161" />
              </svg>
              <span className="sr-only">Threads account</span>
            </a>
            <a href="https://www.linkedin.com/in/kevinkchsu/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-8" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
              <span className="sr-only">LinkedIn page</span>
            </a>
          </div>
        </div>
        <div className="max-w-2xl mx-auto mt-16">
          <hr className="my-8 border-gray-200 mx-auto dark:border-gray-700" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mx-auto mt-12 w-xl font-bold tracking-tight text-gray-900 text-2xl">
            <RichText t={t} phrase="writing" />
          </h2>
          <p className="mx-auto w-xl text-sm leading-8 text-gray-600">
            {t('writingDescription')}
          </p>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 lg:mx-0 lg:max-w-none lg:grid-cols-1">
            {posts.map(post => (
              <EssaySummary post={post} key={post.id} />
            ))}
          </div>
          <h2 className="mx-auto mt-12 w-xl font-bold tracking-tight text-gray-900 text-2xl">
            <RichText t={t} phrase="reading" />
          </h2>
          <p className="mx-auto w-xl text-sm leading-8 text-gray-600">
            {t('readingDescription')}
          </p>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 lg:mx-0 lg:max-w-none lg:grid-cols-1">
            {books.map((book) => (
              <BookRec reason={t('readingReason')} book={book} key={book.id} />
            ))}
          </div>
          <h2 className="mx-auto mt-12 w-xl font-bold tracking-tight text-gray-900 text-2xl">
            <RichText t={t} phrase="sideproject" />
          </h2>
          <p className="mx-auto w-xl text-sm leading-8 text-gray-600">
            {t('sideprojectDescription')}
          </p>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 lg:mx-0 lg:max-w-none lg:grid-cols-1">
            <figure className="mt-4 mx-auto">
              <Image
                alt=""
                src="/fantasy_banner.png"
                width={640}
                height={320}
                className="rounded-xl bg-gray-50 object-contain"
              />
            </figure>
            <p className="mx-auto w-l md:w-xl text-sm leading-8 text-gray-600">
              <RichText t={t} phrase="project" />
            </p>
          </div>
        </div>
        <div className="max-w-2xl mx-auto mt-16">
          <hr className="my-8 border-gray-200 mx-auto dark:border-gray-700" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mx-auto mt-12 max-w-xl sm:w-xl font-bold tracking-tight text-gray-900 text-2xl">{t('contact')}</h2>
          <p className="mx-auto mt-4 max-w-xl sm:w-xl text-sm text-gray-600">
            {t('contactDescription')}
          </p>
        </div>
      </div>
    </div>
  );
}
