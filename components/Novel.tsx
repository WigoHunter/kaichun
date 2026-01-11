import Image from 'next/image'

export default function Novel(
    { previewChapter, name, imageSource }: { previewChapter: string, name: string, imageSource: string }
) {
    return (
        <div className="bg-white px-6 lg:px-8 py-12 pb-4 sm:py-16 sm:pb-4">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <p className="text-base font-semibold leading-7 text-indigo-600">試讀版</p>
                <h1 className="mt-2 mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{name}</h1>
                <figure className="my-12">
                    <Image
                        alt=""
                        src={imageSource}
                        width={1600}
                        height={800}
                        className="rounded-xl bg-gray-50 object-contain"
                    />
                </figure>
                {previewChapter.split(/\r?\n|\r|\n/g).map((line, i) => {
                    // 判斷是否為章節標題（例如：第一章、第二章...）
                    const isChapterTitle = /^第.+章/.test(line);

                    if (isChapterTitle) {
                        return (
                            <h3 key={i} className="mt-10 mb-4 text-xl font-bold tracking-tight text-gray-900">
                                {line}
                            </h3>
                        );
                    }

                    return <p key={i} className="mt-6 text-l leading-8">{line}</p>;
                })}
            </div>
        </div>
    );
}