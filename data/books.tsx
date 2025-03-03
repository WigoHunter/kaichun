export const getBooks = (locale: string) => locale === 'en' ? [
    {
        id: 1,
        title: "Psychology of Money",
        author: "Brandon Sanderson",
        href: "/",
        description:
            "This is my second attempt at being a writer. The last time was almost 10 years ago. Now, after putting (some of) my shit together—stabilizing my career/income and having married my secret crush—revisiting the writer side of me has become a priority.",
        category: { title: "Money" },
    }
] : [
    {
        id: 1,
        title: "【奇幻】迷霧之子",
        author: "布蘭登・山德森",
        href: "/",
        description:
            "This is my second attempt at being a writer. The last time was almost 10 years ago. Now, after putting (some of) my shit together—stabilizing my career/income and having married my secret crush—revisiting the writer side of me has become a priority.",
        category: { title: "正在讀" },
    }
];