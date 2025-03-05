
export default function NovelSubscribe(
    { cta }: { cta: string }
) {
    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="mx-auto mt-12 max-w-xl sm:w-xl font-bold tracking-tight text-gray-900 text-2xl text-center">未完待續...</h2>
            <p className="mx-auto mt-4 max-w-xl sm:w-xl text-sm text-gray-600 text-center">
                好看嗎？會，呃，無聊嗎？好奇接下來的故事發展嗎？
            </p>
            <p className="mx-auto mt-2 max-w-xl sm:w-xl text-sm text-gray-600 text-center">
                {cta}
            </p>
            <div className="max-w-xl -ms-18 md:mx-auto lg:mx-auto pt-4">
                <iframe src="https://writingnovels.substack.com/embed" width="480" height="150" className="bg-white"></iframe>
            </div>
        </div>
    );
}