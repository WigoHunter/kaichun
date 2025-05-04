import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from '@next/third-parties/google';
import { WebsiteJsonLd, PersonJsonLd } from '@/components/JsonLd';

import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from 'next';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type MetadataProps = Promise<{
  locale: string
}>;

export const generateMetadata = async ({ params }: { params: MetadataProps }): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;

  /* eslint-disable @typescript-eslint/no-explicit-any */
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "metadata" });
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'https://www.kevinhsu.io';

  return (
    <html lang={locale}>
      <head>
        <WebsiteJsonLd
          url={baseUrl}
          name={t('title')}
          description={t('description')}
          author={{
            name: "Kevin Hsu",
            url: `${baseUrl}/${locale}/about`
          }}
          inLanguage={['en', 'zh']}
        />
        <PersonJsonLd
          name="Kevin Hsu"
          url={`${baseUrl}/${locale}/about`}
          image={`${baseUrl}/pic.png`}
          description={t('about-description') || t('description')}
          sameAs={[
            "https://www.linkedin.com/in/kevinkchsu/",
            "https://www.threads.net/@kevinhsu.js"
          ]}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <div className="min-h-screen">
            {children}
          </div>
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
        <GoogleAnalytics gaId="G-LCD2MFELMH" />
      </body>
    </html>
  )
}