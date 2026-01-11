import Link from 'next/link'

export default function RichText(
    { t, phrase }: { t: any, phrase: string }
) {
    return (
        t.rich(phrase, {
            br: () => <br />,
            novel: (text: string) => <Link href="/zh/the-thief-and-the-photographer" className="text-indigo-600 font-semibold">{text}</Link>,
            num: (text: string) => <span className="text-indigo-600 text-4xl">{text}</span>,
            strong: (text: string) => <strong>{text}</strong>,
            write: (text: string) => <a href="https://www.kevinhsu.blog/p/a-recap-of-my-first-two-years-of" className="text-indigo-600">{text}</a>,
            wop: (text: string) => <a href="https://www.kevinhsu.blog/p/my-write-of-passage-experience-lessons" className="text-indigo-600">{text}</a>,
            learn: (text: string) => <a href="https://www.kevinhsu.blog/p/5-things-i-learned-from-writing-and-coding-2024" className="text-indigo-600">{text}</a>,
            blog: (text: string) => <a href="https://www.kevinhsu.blog" className="text-indigo-600">{text}</a>,
            rewrite: (text: string) => <a href="https://www.kaichun.blog/p/on-writing-again" className="text-indigo-600 font-semibold">{text}</a>,
            learning: (text: string) => <a href="https://www.kaichun.blog/p/4-things-i-learned-from-writing-and-coding-2024" className="text-indigo-600 font-semibold">{text}</a>,
            sanderson: (text: string) => <a href="https://www.kaichun.blog/p/brandon-sanderson-on-writing-a-good-story" className="text-indigo-600 font-semibold">{text}</a>,
        })
    );
}