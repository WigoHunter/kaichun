import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{t('title')}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">{t('description')}</p>
    </div>
  );
}