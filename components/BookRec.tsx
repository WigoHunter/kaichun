
export default function BookRec(
    { reason, book }: { reason: string, book: any }
) {
    return (
        <article key={book.id} className="flex flex-col items-center justify-between">
            <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 text-indigo-600">
                        {book.category.title}
                    </p>
                    <p className="text-gray-500">
                        {book.author}
                    </p>
                </div>
                <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={book.href} target="_blank">
                            <span className="absolute inset-0" />
                            {book.title}
                        </a>
                    </h3>
                    <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-2 mt-4">{reason}</h4>
                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">{book.description}</p>
                </div>
            </div>
        </article>
    );
}