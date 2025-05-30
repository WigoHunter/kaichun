import Novel from '@/components/Novel';
import NovelSubscribe from '@/components/NovelSubscribe';
import { getTranslations } from 'next-intl/server';
import { createMetadata } from '@/data/metadata';
import { ArticleJsonLd } from '@/components/JsonLd';

import type { Metadata } from 'next';

type MetadataProps = Promise<{
    locale: string
}>;

export const generateMetadata = async ({ params }: { params: MetadataProps }): Promise<Metadata> => {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "metadata" });

    return createMetadata({
        title: t('spirit-smoke-title'),
        description: t('spirit-smoke-description'),
        locale,
        image: t('spirit-smoke-image'),
        type: 'article',
        datePublished: '2025-05-04',
        dateModified: '2025-05-04',
        keywords: '奇幻小說, 台灣奇幻, 台式奇幻, 小說, 奇幻, 親情, 魔法, 神明'
    });
};

const previewChapter = `
　　從舊金山國際機場到桃園的班機落地時，已是深夜。

　　空氣裡夾帶著一絲熟悉的濕氣，從旅客通道的縫隙灌進來。許輝祐拖著黑色行李箱，漫步在長長的通道裡。走著走著，經過轉角處時，他不經意地瞥見玻璃倒映出自己的臉。

　　疲憊。

　　這十四個小時的飛行異常癲駁，阿嬤以前總說遇到害怕的事情就默念「南無觀世音菩薩」。祂會觀察世界的聲音，祂會聽見，祂會保護你。所以許輝祐一直念一直念，念到自己也沒睡好。

　　他的黑色短髮凌亂，甚至有點油。上半身是過於寬鬆的大地色帽Ｔ。

　　然後，手機在帽Ｔ口袋裡震動。

　　他掏出來看，是妹妹傳來的訊息：「哥，你到了嗎？」

　　許輝祐單手打字回覆：「剛下飛機。」

　　妹妹回傳了一個拇指貼圖，然後：「嗯，我已經到了。你直接來 B1 停車場吧。」

　　許輝祐準備將手機放回口袋裡，但另一通來電響起。是李政宏，他國中時期就很要好的朋友。

　　「喂，輝祐？」電話那頭傳來熟悉的嗓音，「你到了吧？我看到你的航班剛剛顯示⋯⋯」

　　「嗯，剛到。」

　　「是嗎？也對，不然你怎麼接我電話的。」

　　「嗯哼，怎麼了嗎？」

　　「也沒什麼特別的。」李政宏停頓了一下，「就⋯⋯你還好嗎？」

　　「還行吧。」許輝祐說，「阿公已經那樣一陣子了，大家算是有心理準備了。」

　　「那就好，節哀。」李政宏說道。

　　「謝謝。」

　　李政宏的語氣轉為輕快，「另外，阿周問你要不要一起去看星星？」

　　「抱歉，這次回來只會待一週。應該沒空。」

　　「少來了，你疫情時候回來待一個月也說你沒空。」李政宏乾笑了一聲，「你根本對看星星沒興趣吧？」

　　「沒錯。」許輝祐承認。

　　「好吧，起碼我試過了。」李政宏嘆了一口氣，「你想開了再跟我說，我們隨時可以去載你出發。說真的，陽明山的星星超漂亮的欸。」

　　許輝祐吐槽道，「話說，你知道最近的星星離我們有多遠嗎？上山拉近那幾百公尺不會有差的。」

　　「嘖，你個死工程腦。」

　　吱、嘶——

　　手機裡傳來一陣刺耳雜音。

　　許輝祐放下手機，看見螢幕上的信號趨近於零。

　　他可惜地嘆了口氣。他可是準備好要讓李政宏認清楚「上山看星星」這件事有多麽不合理。

　　接下來，許輝祐依序穿越入境大廳的自動通關機台、行李轉盤，不用二十分鐘就已經順利入境。

　　他順著手扶梯往地下一樓前進。

　　然後，一陣強烈的暈眩感襲來。

　　就好像他還在飛機上經歷亂流。不，比那個更強。他不自覺地默念了南無觀世音菩薩，放開了抓著行李箱的右手，牢牢地抓在電扶梯的扶手上。

　　片刻後，暈眩感突然消失，許輝祐抬起頭，眨了眨眼。

　　是太累了嗎？

　　然而，隨著電扶梯到達地下一樓，他發現更多不對勁的事情。

　　他身邊一個人也沒有，而且地下一樓停車場的燈居然一盞也沒亮。他呆呆地凝視一片漆黑的地下一樓，然後回頭看向身後的電扶梯，只見頭頂上的一樓那端依然傳來光亮。可惜的是，這是一條單向的電扶梯，他並沒有辦法回到一樓。

　　另外，是不是變冷了啊？

　　習慣舊金山冬天的他怎麼可能覺得台北會冷。

　　在他思考著是不是要去找往上的電扶梯時，一道鮮紅色的矮小身影在眼前的一片漆黑中閃過。距離很遠。

　　許輝祐吞了一口口水。有人嗎？

　　「不是人。」

　　許輝祐被耳邊突如其來的一道聲音驚嚇得渾身打顫。

　　他環顧四周，身邊完全沒有人。但聲音很近。是誰在說話？

　　「我。」聲音簡潔地答道。

　　許輝祐冷靜了下來，這是⋯⋯誰的聲音。好耳熟。

　　好溫暖。

　　許輝祐幾乎是本能地安心下來。

　　但是，漆黑中原本很遠的紅色身影閃動了一下，瞬間拉近到許輝祐眼前的車道中央。

　　「沒時間了，輝祐！」聲音揚起音量。「燒香！」

　　燒香？

　　我怎麼可能隨身攜帶那種東西？

　　紅色身影再次閃了一下。她⋯⋯不，祂這次就直挺挺地站在許輝祐眼前。祂膚色白皙得沒有一絲血色，身穿老舊款式的鮮紅色洋裝。有著如瀑的黑色長髮，精緻的五官，看起來大約二十歲上下。

　　但是，祂雙眼都沒有虹膜，全是白的。

　　紅影女孩抬起頭，全白的雙眼直勾勾地看著許輝祐，看不出任何一點情緒。

　　「可惡。」耳邊的聲音焦急地喊道。

　　紅影女孩張開嘴唇，似乎要說些什麼，但是——

　　身後突然有人戳了許輝祐的背一下。

　　「哥，你站在這幹嘛？」

　　妹妹的聲音傳來。隨之而來地，眼前的停車場一瞬之間又變得正常：停著滿滿的車，人潮來來往往，燈⋯⋯作為一個國際機場，當然也是照亮通明。

　　許輝祐回頭一看，妹妹就站在自己身後。

　　「我⋯⋯」

　　「你還好嗎？我剛剛按你喇叭好幾次，你都沒回應。」妹妹許曉婷雙手抱胸，皺著眉，有些擔心地看向自己。

　　許輝祐揉了揉太陽穴。「我⋯⋯剛剛好像聽到阿嬤的聲音。」

　　「蛤？」

　　「不，當我沒說。」許輝祐扶著腦袋，「那怎麼可能呢？一定是我太累了。謝謝你來接我。」
`;

export default function PageTaiwaneseFantasy() {
    return <>
        <ArticleJsonLd
            title="靈煙師"
            description="奇幻小說。矽谷工程師回台灣奔喪，但誰曉得阿公的靈魂居然被妖怪綁架⋯⋯ 是我在國外想念阿公阿嬤的時候，創作出來的一個故事想法。"
            url={`https://www.kevinhsu.io/zh/the-spirit-smoke`}
            images={["https://www.kevinhsu.io/taiwanese_magic.png"]}
            datePublished="2025-05-04"
            dateModified="2025-05-04"
            authorName="許凱鈞"
            authorUrl={`https://www.kevinhsu.io/zh/about`}
            publisherName="許凱鈞"
            publisherLogo={`https://www.kevinhsu.io/pic.png`}
        />
        <div className="overflow-hidden">
            <Novel previewChapter={previewChapter} name="靈煙師" imageSource="/taiwanese_magic.png" />
            <div className="sm:max-w-2xl mx-auto mt-0 px-6">
                <hr className="my-8 border-gray-200 mx-auto dark:border-gray-700" />
            </div>
            <NovelSubscribe cta="預計 2025 年底寫完。想追蹤後續消息（或者單純想讓我開心）的話，歡迎訂閱：" />
        </div>
    </>
}