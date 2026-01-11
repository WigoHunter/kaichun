export const getPosts = (locale: string) => locale === 'en' ? [
    {
        id: 1,
        title: "Three observations about A.I.",
        href: "https://www.kevinhsu.blog/p/three-observations-about-ai",
        description:
            "As an iOS engineer, a writer who might soon be replaced by A.I., here are my observations: on writing, creativity, and the importance of being a good person.",
        date: "Mar 23, 2025",
        category: { title: "Writing & A.I." },
    },
    {
        id: 2,
        title: "5 Things I Learned From My 5th Year of Software Engineering & 2nd Year of Writing.",
        href: "https://www.kevinhsu.blog/p/5-things-i-learned-from-writing-and-coding-2024",
        description:
            "Coding feels very similar to writing, but just in computer languages. Lessons in one often echo in the other. Here are 5 of my learnings over the past couple years about these two crafts.",
        date: "Jan 25, 2025",
        category: { title: "Writing" },
    },
    {
        id: 3,
        title: "A Recap of My First Two Years of Writing (Again): On Writing, Learnings, and Burnout.",
        href: "https://www.kevinhsu.blog/p/a-recap-of-my-first-two-years-of",
        description:
            "This is my second attempt at being a writer. The last time was almost 10 years ago. Now, after putting (some of) my shit together—stabilizing my career/income and having married my secret crush—revisiting the writer side of me has become a priority.",
        date: "Dec 31, 2024",
        category: { title: "Writing" },
    },
] : [
    {
        id: 1,
        title: "2025 H2 回顧：蜜月旅行。還有，談談完成一個作品的「勇氣」。",
        href: "https://www.kaichun.blog/p/2025-h2",
        description:
            "這是我回顧自己生活的方式：參考公司的 Performance Review，我每半年也會用 Impact, Direction and People 的角度，去替自己工作外的生活打個分數，讓自己更有意識地把時間與精力，花在我想花的人事物上。",
        date: "Jan 10, 2026",
        category: { title: "寫作" },
    },
    {
        id: 2,
        title: "2025 H1 回顧：多出去走走，還有談談建立獎勵系統（而不是懲罰系統）。",
        href: "https://www.kaichun.blog/p/2025-h1-review",
        description:
            "參考公司每半年一次的 Performance Review——2024 年開始，我打算每半年回顧一次自己的生活方式，讓自己更有意識地決定時間花去哪裡，也記錄新的想法是從哪裡來的，還有喜歡的文章/影片/訪談。",
        date: "July 13, 2025",
        category: { title: "寫作" },
    },
    {
        id: 3,
        title: "《AI 2027》讀後感：人類最後的技能、時間的通膨。",
        href: "https://www.kaichun.blog/p/reading-ai-2027",
        description:
            "Daniel Kokotajlo 在離開 OpenAI 後創立 AI Futures Project 去研究 AI 發展與人類社會的預測。讀完過後，我感覺很快，人類最後守得住的技能，可能只剩下「品味」，而且「時間」也正在通膨。",
        date: "Apr 27, 2025",
        category: { title: "A.I. 與未來" },
    },
];