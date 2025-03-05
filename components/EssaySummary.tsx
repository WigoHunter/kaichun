
export default function EssaySummary(
    { post }: { post: any }
) {
    return (
        <article key={post.id} className="flex flex-col items-center justify-between">
            <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time className="text-gray-500">
                        {post.date}
                    </time>
                    <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 text-indigo-600">
                        {post.category.title}
                    </p>
                </div>
                <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={post.href}>
                            <span className="absolute inset-0" />
                            {post.title}
                        </a>
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
            </div>
        </article>
    );
}