export const getPosts = (locale: string) => locale === 'en' ? [
    {
        id: 1,
        title: "5 Things I Learned From My 5th Year of Software Engineering & 2nd Year of Writing.",
        href: "https://www.kevinhsu.blog/p/5-things-i-learned-from-writing-and-coding-2024",
        description:
            "Coding feels very similar to writing, but just in computer languages. Lessons in one often echo in the other. Here are 5 of my learnings over the past couple years about these two crafts.",
        date: "Jan 25, 2025",
        category: { title: "Writing" },
    },
    {
        id: 2,
        title: "A Recap of My First Two Years of Writing (Again): On Writing, Learnings, and Burnout.",
        href: "https://www.kevinhsu.blog/p/a-recap-of-my-first-two-years-of",
        description:
            "This is my second attempt at being a writer. The last time was almost 10 years ago. Now, after putting (some of) my shit together—stabilizing my career/income and having married my secret crush—revisiting the writer side of me has become a priority.",
        date: "Dec 31, 2024",
        category: { title: "Writing" },
    },
    {
        id: 3,
        title: "Curiosity is an antidote to getting old (mentally)",
        href: "https://www.kevinhsu.blog/p/curiosity-is-an-antidote-to-getting",
        description:
            "Recently two things made me feel pessimistic about turning 30 next month... And here is my reflection on how to fix that.",
        date: "Dec 23, 2024",
        category: { title: "Getting old" },
    },
] : [
    {
        id: 1,
        title: "寫作與寫程式共同教我的 4 件事情。",
        href: "https://www.kaichun.blog/p/4-things-i-learned-from-writing-and-coding-2024",
        description:
            "寫程式跟寫作像極了，都是一種創意的表達方式。去年理解到這兩件事情的共同點後，我花了很多時間去沈澱，思考有什麼是我從寫程式裡學到，可以應用在寫作上；或者，反過來是從寫作上學到，能夠在工作上幫助我成為一名更好的軟體工程師的事情。",
        date: "Feb 02, 2025",
        category: { title: "寫作、寫程式" },
    },
    {
        id: 2,
        title: "2024 H2 回顧：好的事情，新的想法，還有談談建立習慣的這件事。",
        href: "https://www.kaichun.blog/p/2024-h2-review",
        description:
            "半年前，我開始參考公司 Performance Review 的模式，每半年回顧一次生活方式，也給予自己調整的機會。我覺得既然工作每半年都要做個評比，那麼對我來說更重要、而且包含工作的「生活」，肯定是更值得好好回顧一下。一來如果有某個半年沒什麼值得紀錄的事情，那半年真的白過了，得給自己一個警訊跟調整的機會；二來，如果有做得好的事情，也該給自己一點鼓勵，提醒自己繼續下去。",
        date: "Jan 05, 2025",
        category: { title: "2024 回顧" },
    },
    {
        id: 3,
        title: "談談（重新開始）寫作的前兩年：復健期，與很快到來的撞牆期。",
        href: "https://www.kaichun.blog/p/on-writing-again",
        description:
            "這是我第二次嘗試將寫作融入生活裡。上一次嘗試，還是在高中時期。當時沒有收入，也沒有真正能維生的技能，而我暗戀對象正以高中學霸的成績走向一條成功、明亮的道路。我熱愛寫作，但我後來還是放棄寫作，花了將近十年去找尋人生裡能賺錢的興趣。現在，距離當時將近十年了，已經有了一個相對穩定的職業與收入來源，也娶了當年的暗戀對象，我就真的真的很想重新給「寫作的自己」一個機會！",
        date: "Dec 31, 2024",
        category: { title: "寫作" },
    },
];