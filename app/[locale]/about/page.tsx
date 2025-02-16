import { useTranslations } from 'next-intl';
import { PencilIcon, CodeBracketIcon } from '@heroicons/react/20/solid'
import { Metadata } from 'next';

type Props = {
  params: { locale: string }
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { locale } = await params;
  return {
    title: locale === 'zh' ? '關於我 | 許凱鈞' : 'About me | Kevin Hsu',
  };
};

export default function About() {
  const t = useTranslations('about');

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-indigo-600">{t('subtitle')}</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                {t('title')}
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">
                {t('description')}
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -mb-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src="/2024H2.jpg"
            className="w-full rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 lg:w-[48rem] xl:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CodeBracketIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Push to deploy.</strong> Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                    blanditiis ratione.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <PencilIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">SSL certificates.</strong> Anim aute id magna aliqua
                    ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}