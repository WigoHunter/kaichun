'use client'

import { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const novels = [
    { name: '盜火戰記', description: '奇幻 / 戰鬥 / 成長', href: '/zh/fantasy', icon: ChartPieIcon },
    { name: 'A.I. 的妹妹', description: '科幻 / 親情', href: '/zh/sister-of-an-AI', icon: CursorArrowRaysIcon },
    { name: '靈火師', description: '台式奇幻 / 親情', href: '/zh/taiwanese-fantasy', icon: FingerPrintIcon },
]

export default function Example() {
    const t = useTranslations('navigation');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const switchLocale = (newLocale: string) => {
        const curPath = pathname.replace(`/${locale}`, `/${newLocale}`);
        router.push(curPath);
    }

    return (
        <header className="bg-white sticky top-0 z-50 shadow-sm">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href={`/${locale}`} className="-m-1.5 p-1.5">
                        <span className="sr-only">Kai-Chun</span>
                        <img
                            alt=""
                            src="/pic.png"
                            className="h-8 w-auto rounded-full"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <a href={`/${locale}`} className="text-sm/6 font-semibold text-gray-900">
                        {t('home')}
                    </a>
                    <a href={`/${locale}/about`} className="text-sm/6 font-semibold text-gray-900">
                        {t('about')}
                    </a>
                    <a href={`/${locale}/reading`} className="text-sm/6 font-semibold text-gray-900">
                        {t('readingList')}
                    </a>
                    <a href={`/${locale}/newsletter`} className="text-sm/6 font-semibold text-gray-900">
                        {t('newsletter')}
                    </a>
                    {locale === 'zh' && <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                            {t('novels')}
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                        </PopoverButton>
                        <PopoverPanel
                            transition
                            className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                        >
                            <div className="p-4">
                                {novels.map((novel) => (
                                    <div
                                        key={novel.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                                    >
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <novel.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                        </div>
                                        <div className="flex-auto">
                                            <a href={novel.href} className="block font-semibold text-gray-900">
                                                {novel.name}
                                                <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-gray-600">{novel.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>}
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a onClick={() => switchLocale(locale === 'en' ? 'zh' : 'en')} className="text-sm/6 font-semibold text-gray-900 cursor-pointer">
                        {t('toggle')} <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href={`/${locale}`} className="-m-1.5 p-1.5">
                            <span className="sr-only">Kai-Chun</span>
                            <img
                                alt=""
                                src="/pic.png"
                                className="h-8 w-auto rounded-full"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a
                                    href={`/${locale}`}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    {t('home')}
                                </a>
                                <a
                                    href={`/${locale}/about`}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    {t('about')}
                                </a>
                                <a
                                    href={`/${locale}/reading`}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    {t('readingList')}
                                </a>
                                <a
                                    href={`/${locale}/newsletter`}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    {t('newsletter')}
                                </a>

                                {locale === 'zh' && <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                        {t('novels')}
                                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {novels.map((novel) => (
                                            <DisclosureButton
                                                key={novel.name}
                                                as="a"
                                                href={novel.href}
                                                className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                            >
                                                {novel.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>}
                            </div>
                            <div className="py-6">
                                <a
                                    onClick={() => switchLocale(locale === 'en' ? 'zh' : 'en')}
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 cursor-pointer"
                                >
                                    {t('toggle')}
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}