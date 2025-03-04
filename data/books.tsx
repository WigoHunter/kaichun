export const getBooks = (locale: string) => locale === 'en' ? [
    {
        id: 0,
        title: "Yumi and the Nightmare Painter",
        author: "Brandon Sanderson",
        href: "https://amzn.to/3QFr0EV",
        description:
            "When Brandon Sanderson meets Your Name. with a touch of romance. This is the most anime-like Western fantasy novel I've ever read. I haven't finished it yet, but I hope it has a good ending.",
        category: { title: "Currently reading" },
    },
    {
        id: 2,
        title: "Mistborn: The Final Empire",
        author: "Brandon Sanderson",
        href: "https://amzn.to/3Xq1iYA",
        description:
            "This is the most visual novel I've ever read. It’s also the book I’ve re-read the most, and each time, I learn something new from it. Sanderson masterfully crafts a rich fantasy world, a cast of deeply moving characters, and secrets hidden behind even more secrets. Just perfect.",
        category: { title: "My favorite novel" },
    },
    {
        id: 3,
        title: "The Almanack of Naval Ravikant",
        author: "Eric Jorgenson",
        href: "https://amzn.to/4brUq2O",
        description: "Naval Ravikant, co-founder of AngelList, is one of the rare successful people who (so far) has never made me roll my eyes. His thoughts on success, wealth, and happiness are… actually achievable. I thought I was reading this book for the first two, but my greatest takeaway turned out to be the last one: happiness.",
        category: { title: "My favorite non-fiction book" }
    },
    {
        id: 1,
        title: "On Writing: A Memoir of the Craft",
        author: "Stephen King",
        href: "https://amzn.to/4ikaKVx",
        description: "I haven’t actually read many books by Stephen King, but this one is a deeply impactful writing memoir. His insights on writing are so powerful that after each chapter, I had to take a break, reflect, and then go back to my own novel to make sure I wasn’t making the mistakes he warned about.",
        category: { title: "My favorite memoir" }
    },
] : [
    {
        id: 0,
        title: "《侑美與夢魘繪師》",
        author: "Brandon Sanderson",
        href: "https://amzn.to/3QFr0EV",
        description:
            "當 Brandon Sanderson 遇上《你的名字》與愛情成分。這是我讀過最像「動漫」的一本西方奇幻小說。我還沒讀完，我希望故事結局是好的。",
        category: { title: "最近正在讀" },
    },
    {
        id: 2,
        title: "《迷霧之子》",
        author: "Brandon Sanderson",
        href: "https://amzn.to/3Xq1iYA",
        description:
            "這是我讀過最有「畫面」的一本小說了。好幾個場景，現在回想起來感都好像我曾經「看」過。這也是我重複翻看最多次的一本小說，每次讀都能從中獲得更多的學習。山德森在這本書裡完美呈現一個奇幻世界、多個令人動容的深刻角色，還有秘密背後的又一個秘密。",
        category: { title: "最愛的奇幻小說" },
    },
    {
        id: 3,
        title: "《納瓦爾寶典》",
        author: "Eric Jorgenson",
        href: "https://amzn.to/4brUq2O",
        description: "AngelList 的共同創辦人 Naval Ravikant 是少數（目前）不曾讓我翻白眼的成功人士。他對於成功、財富與快樂的想法很⋯⋯做得到。我以為我是為了前兩者去讀這本書的，但我最大的收穫是最後一者：「快樂」。",
        category: { title: "最愛的成功學書籍" }
    },
    {
        id: 1,
        title: "《史蒂芬．金談寫作》",
        author: "Stephen King",
        href: "https://amzn.to/4ikaKVx",
        description: "我其實沒讀過太多 Stephen King 的書，但這真的是一本很深刻的寫作自傳。他分享的寫作經驗談強烈到我會每讀完一章節就得休息一下，沈澱一下，然後回頭翻一下自己寫的小說，確定自己沒有犯下他說的那些謬誤。",
        category: { title: "最愛的寫作教學 / 自傳" }
    },
];