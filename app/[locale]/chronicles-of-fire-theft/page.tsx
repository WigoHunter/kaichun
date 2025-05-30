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
        title: t('fantasy-title'),
        description: t('fantasy-description'),
        locale,
        image: t('fantasy-image'),
        type: 'article',
        datePublished: '2025-05-04',
        dateModified: '2025-05-04',
        keywords: '奇幻小說, 小說, 奇幻, 劍與魔法, 魔法, 魔豆'
    });
};

const previewChapter = `
　　烈日之下，好幾滴汗水從萊凱的下巴滑落。

　　他看著汗水沒入腳下的肥沃黑土，變得不見，成為土壤的養分。然而，汗水與鹽分也還遠遠不是這塊土地從他身上奪取最多的資源。

　　時間才是。

　　他打直了腰，立刻感受到一股深入骨髓裡的酸痛感。

　　他已經彎著腰採收魔豆太久了。三個小時了嗎⋯⋯不，才三小時嗎？

　　「喂！太陽都曬到頭頂了，別傻站著了。都停下來歇口氣！」

　　遠處響起領工的吆喝聲，像是一把利刀劃破了魔豆田裡的寂靜。萊凱鬆了一口氣，放下手中帶有生鏽鋼板的鉗子，拖著沈重的步伐走向田埂。他注意到自己手掌上已經被粗糙的魔豆莢磨出了一層薄薄的血痕，但這在瑟雷斯村裡並不算什麼。他看向四周，附近其他農工或多或少都有類似的傷痕，有些甚至更嚴重。

　　他坐在田埂上，從腰間掏出一個布包，裡面包著僅僅幾片乾柴的吐司。

　　他熟悉地忽略開始微微發霉的邊角。

　　很快地，幾個與萊凱年齡相仿，十五、六歲的農工也聚攏過來。

　　「唉，」其中一個黑髮青年一邊用右臂擦汗，一邊哀怨道，「天啊，這次的收成到底還要多久才會結束啊？」

　　「可能還要兩、三週吧⋯⋯」另一人回答，隨即補充，「不過，你瞧瞧今年的收穫，應該能有不錯的待遇吧？」

　　「待遇？」黑髮青年冷哼一聲。「是能多分到幾片麵包，還是少挨幾次鞭子？」

　　「別這麼說，這兒的貴族老爺還算是有點良心的。」年長一些的農民低聲說道，像是在安撫情緒。「至少不像我以前待過的地方，有些工人連性命都不見得能保得住⋯⋯」

　　「噗，這話聽起來真可笑。」一個熟悉的聲音從萊凱身旁響起。

　　萊凱轉頭，看見海頓拎著一個破破舊舊的水壺走來，隨意地坐在他的身旁。這是萊凱在農舍裡的室友，也是他在這裡最接近是個「朋友」的人。

　　「海頓前輩，你怎麼還有力氣嘲笑別人？」萊凱苦笑道。

　　「我只是說實話。」海頓抿了一口水，然後把水壺遞給萊凱。「萊凱啊，你難道覺得光是『能夠保住性命』就夠了嗎？」

　　萊凱誠實地搖了搖頭。

　　一旁的年長農民嘆了一口氣。「那是你們還沒見過更糟的。」

　　「哼，你才是缺乏眼界，沒見過更好的生活。」海頓說。

　　年長的農工盤起雙手，像是要說些什麼，但是萊凱搶著問道：「但是，海頓前輩，我很好奇⋯⋯你說的『更好的生活』又是怎麼樣？」

　　年長的農民點了點頭，附和著萊凱的問題。

　　附近的年輕農民一邊吃著簡陋的麵包午餐，一邊默默地把視線與注意力集中過來。

　　「這個嘛⋯⋯真是一個好問題，萊凱。」海頓似乎很享受眾人的視線。他清了清嗓子，然後說道：「我想去瓦提亞。」

　　「瓦提亞？」萊凱重複道。「那不就只是另一個種植魔豆的村子？」

　　「不，是另一個『更好的』種植魔豆的村子。」海頓搖了搖食指。「我聽說，比起我們這裡又傳統又古板，而且還累死人的採收方式，瓦提亞那邊在研究更有效率的種植與採收技術。」

　　「那不過是因為他們能種植魔豆的地更小。」年長的農民說道。

　　「是啊，但又怎麼樣？難道種了更多的魔豆會是你的嗎？你在這裡辛苦採收這麼一大塊地的魔豆，還不是都給貴族大人們拿去了。」海頓毫不客氣地說道。「我還寧可去研究新的技術、新的知識⋯⋯新的挑戰。」

　　萊凱注意到海頓在說這話時，雙眼是在發光的。

　　「那很遠欸。」萊凱說道。

　　「怎麼？」海頓揚起一邊的眉毛。「你會想我嗎？」

　　「不。」萊凱乾笑了一下。「只是，你哪來的錢去那麼遠的地方？」

　　「我正在存錢。」

　　「是嗎？」萊凱半信半疑地說道：「另外，你肯定會半路就迷路的。」

　　「哼，才不會。」海頓說。「我要是連地圖都看不懂，還談什麼研究？我可是很聰明的。」

　　附近的人聽見海頓說自己聰明，互相交換了幾個眼神後，紛紛笑了起來。

　　海頓氣得漲紅著臉。「喂，你們笑什麼？」

　　就連萊凱也噗哧一笑。海頓是個勇敢、充滿自信的人，但「聰明」可不會是他用來形容海頓的詞。

　　「可惡，萊凱，連你也⋯⋯」海頓惱怒地搔搔後腦。

　　氣氛變得稍微輕鬆，彷彿正午的懊熱都變得沒那麼難耐。

　　不久後，隨著領工又一聲吆喝，眾人短暫的休息時間結束。萊凱快速地吞下最後一小塊的麵包，與海頓打了個招呼之後，站起身來，回到他負責的一排魔豆樹之間工作。他看著眼前一顆顆金黃色的豆莢在陽光下散發出微弱的光澤，看起來像是無害的普通植物。但他知道，這些豆子承載著魔法。還有，無限的可能性。

　　更好的生活嗎？

　　萊凱一邊幻想著有一天自己能夠吃下魔豆、操縱魔法，一邊埋頭開始裁剪著眼前擋住自己的枝葉，然後用受傷的手指摘下後頭一顆成熟的魔豆。

ＸＸＸ

　　隨著傍晚的降臨，萊凱與其他魔豆農工們陸續回到了農舍。

　　在一頓簡陋的晚餐過後，萊凱靜靜地躺在狹窄的房間裡一張乾草鋪成的床墊上，望著頭頂上破了個洞的屋簷外，夜幕低垂，繁星點點。

　　他閉上了眼，只聽得見蟲鳴與遠處微弱的風聲。

　　「喂，萊凱，你睡了嗎？」海頓的聲音從下舖傳來。

　　「嗯，睡了。」

　　「少來，睡了就不會回答我了啦。」

　　「好啦，對，我還沒睡。」萊凱翻個身，闔上雙眼說道，「但我們該早點睡了。一想到明天還要收成一整天的魔豆⋯⋯等一下一定會做惡夢。」

　　「那不如不要睡了？」

　　「嗯？」

　　海頓沈默了一會兒，然後說道：「我們逃走吧。」

　　快睡著的萊凱愣了一下，理解海頓說的事情的嚴重性後，一下子睡意全消。他坐起身來，把頭探出床沿，看向下舖的海頓。

　　「白天時候我是認真的。」海頓坐在自己的床沿。他的雙腳懸空，並沒有踩在地上，也沒有放在床上休息。「我想去瓦提亞，想好久了。」

　　「你不是還在存錢嗎？」萊凱問道。

　　海頓看向萊凱，眼神複雜。

　　半晌後，海頓站起身來，將作為床墊的一片乾草撥開，露出下面藏著的一個破布袋。

　　布袋不大，大約只有兩顆拳頭的大小。

　　萊凱心中揚起一股不祥的預感。

　　海頓掀開布袋的鈕扣，裡面是裝著滿滿的魔豆。

　　本是翠綠色的豆莢在深夜裡顯得黑漆漆，難以辨識，但每天在採收魔豆的萊凱不可能認錯魔豆豆莢的形狀。

　　「可惡，海頓。」萊凱從上鋪爬了下來，壓低音量說道，「你做了什麼？」

　　「我偷了三十顆魔豆。」

　　「天啊⋯⋯」萊凱不可置信地說道，「這些是沒處理過的魔豆啊，海頓。你不會是要⋯⋯」

　　「吃下去？當然不是，我知道那會中毒，你當我傻了嗎？」海頓打斷道。「但我只要把這些賣到黑市，換來的錢就夠我們兩個一起去瓦提亞了。」

　　「『我們兩個』？」萊凱重複。「我可沒要跟你一起去瓦提亞。」

　　「為什麼不？」海頓盯著萊凱。「你是我見過最聰明的人了。你真的甘心在這樣破舊的農場待一輩子嗎？」

　　「當然不甘心，但也不是靠這種方式。」

　　海頓持續盯著萊凱的雙眼。一陣子後，他嘆了一口氣，說道：「我以為你會更勇敢，更有夢想一點的。」

　　「不，海頓，這不是勇敢。」萊凱向前一步，抓著海頓的肩膀。「可惡，我以為你更聰明的。」

　　海頓愣了一下，別開視線，說道：「也對，白天你也笑我不聰明。」

　　說完後，他推開萊凱抓著自己的手。

　　他將懷中的布袋重新包好，斜掛在腰間，轉身向著他們小小隔間的門口走去。

　　他頭也不回地說道：「我先去把這些都賣了⋯⋯三天後的晚上，我會再來找你一次。你這幾天想想看，到時候你再給我答案。」

　　萊凱呆佇在原地。

ＸＸＸ

　　三天過後，海頓並沒有回來。

　　五天過後的深夜裡，負責他們農舍的大鬍子領工梅伯來到萊凱的房間，喚醒熟睡中的萊凱。

　　他帶著歉意，問道：「唔，我記得你跟海頓很要好吧？」

　　萊凱揉了揉眼睛，不假思索地說道：「是啊。」

　　「你知道他這幾天都沒回農舍嗎？」

　　萊凱有些驚訝，趕緊坐下來。要假裝自己不知道嗎？不，怎麼可能不知道。那反而更可疑。

　　「知道。」萊凱說道。

　　「嗯，也是⋯⋯但你知道為什麼嗎？」

　　「不，我不知道。」萊凱謊稱。

　　梅伯很快地接受了萊凱的答案，點了點頭，然後表情變得尷尬，似乎有什麼難以啟齒的事情。萊凱感到一絲不安，彷彿心跳漏了一拍。

　　「唔，他今早被人在城裡的水溝發現。」

　　萊凱呆掉。

　　梅伯說道：「我很抱歉。我們不想造成太多恐慌，正要趁晚上簡單安葬他⋯⋯但是，我記得你跟他似乎很好，想說還是讓你見他最後一面吧。」

　　萊凱腦袋一陣空白，他不知道自己是怎麼來到安放著海頓遺體的坑洞前。

　　很顯然地，海頓生前遭受毒打，破舊的衣物上處處都是鞋印，脖子歪成一個不自然的角度。

　　「發生什麼了？」萊凱問。

　　「我們也不知道。」梅伯說道。「你還要跟他說些什麼嗎？我可以迴避一下。」

　　「不用了。」

　　梅伯拍拍萊凱的肩膀，掄起鏟子，將一旁土堆一點一點地掩埋住海頓的臉。然後是雙手，雙腿。海頓不見了。

　　在最後一刻，萊凱靈光一閃。

　　——海頓那裝著三十顆魔豆的布袋不見了。

ＸＸＸ

　　半個月過後，萊凱瘦了一大圈。

　　他不只是缺乏胃口，到了晚上也睡不著。只要夜深人靜，他就想起海頓與他的爭執。他不斷想起自己跟海頓說過的最後一句話是『可惡，我以為你更聰明的』。而海頓最後則還想著三天後要來接他。

　　他靜靜地躺在床上，多麼希望下舖的海頓會踢自己一腳。

　　然後，兩人也許會打上一架。

　　然後，他們就會和好。

　　想著想著，萊凱眼淚流了下來，就像昨晚一樣。

　　正當萊凱默默地擦掉眼淚，突然一道低沈的咆哮聲劃破了夜空。接著是一陣混亂的腳步聲與驚叫聲，隱約還夾雜著更遠處一點的尖銳吼叫。

　　怎麼回事⋯⋯

　　萊凱立刻從床上坐起，緊張地探頭看向窗外。

　　外頭一片混亂，幾頭狼型魔物正衝進燒起來的魔豆田裡。火光搖曳，一大片燃燒起來的土地將夜空染成橘紅色的。伴隨著撕裂空氣，此起彼落的魔物低吼聲，場面宛如地獄。

　　這時，他身後的房門被用力撞開。

　　萊凱心跳加速，幸好回頭一看，是他們農舍的大鬍子領工梅伯。

　　他左手拎著一根粗重的木棍，焦急地喊道：「萊凱，快跑。這裡要燒起來了。」

　　萊凱趕緊跳下了床，緊緊跟著梅伯走進農舍裡漆黑的走廊。他們一間一間叫上其他被嚇得定在原地的年輕農工，一夥人緊跟著較為年長的梅伯逃離冒煙的農舍。

　　然而，到了外面，火焰的燒焦味更是嗆鼻。

　　「怎麼辦？」萊凱咳嗽。

　　「別怕。」梅伯抓著萊凱的手。「這邊！」

　　萊凱低著頭，遮著口鼻，緊緊地跟著梅伯。眾人小跑步一段距離之後，帶頭的梅伯停了下來，萊凱撞上他的背。

　　他從梅伯的背探出頭來，眼前是一頭狼型魔物。

　　牠足足比梅伯大上兩倍。

　　銀灰色的毛皮在火光下熠熠發光，額頭上直挺挺的銀角如匕首般銳利，眼裡露著一種殺戮的凶光。牠低伏著巨大的身體，前爪微微插入泥土，後腿肌肉緊繃，幾乎是隨時就要發動攻擊。

　　梅伯將萊凱他們都擋在身後。

　　「停。」

　　一道低沉的男性嗓音說道。銀角狼立刻靜了下來。

　　明明一旁的魔豆樹正在燃燒，萊凱卻不知道為什麼，一聽到這人的聲音就感到一陣寒冷。聲音的主人緩慢地從銀角狼後面的黑暗裡走了出來。他全身被像夜一樣的黑袍覆蓋，臉上卻帶著一張全白的面具。

　　他拍了拍銀角狼的背，「做出選擇吧。」

　　「什麼？」梅伯說道。

　　從抓著的手，萊凱可以感覺到梅伯在顫抖。

　　「既然我們在這邊遇到了，那我就必須給你選擇。」黑袍人的語氣絲毫沒有任何起伏，彷彿在說著別人的故事。「你可以選擇自己死，還是你後面的孩子們死⋯⋯如果你選擇讓孩子們死，我會讓這頭狼不攻擊你。當然，如果你後面又遇到其他頭狼，那就與我無關了。命運只給了你一次的選擇機會。」

　　「那如果我選擇保護他們呢？」

　　「哦？」黑袍人饒有興致地說道。「你會這樣選嗎？」

　　梅伯緊緊瞪著黑袍人。萊凱感覺到梅伯的手心正在冒汗。

　　「當然，我會放他們走。」黑袍人說道。

　　「很好。」

　　說完後，梅伯重重地放開萊凱的手，掄起粗重的木棍朝著銀角狼衝了過去。

　　黑袍人再度拍了拍銀角狼的背，在牠的耳邊低語了一陣，然後散步似地走向萊凱這邊。他與跑過去的梅伯擦肩而過。

　　萊凱看著黑袍人越來越近的身影。

　　他忽略了萊凱他們，自顧自地繼續向著魔豆田的深處走去。

　　萊凱眼見梅伯已經與銀角狼扭打在一起。他先是用木棍抵擋著巨狼的尖牙，但很快就被其爪子一揮，炸出一片血花，向著旁邊的魔豆樹撞去。

　　萊凱看著銀角狼勝利似地仰天長嘯，慢慢逼近倒在樹下，昏了過去的梅伯。

　　萊凱快哭了出來。

　　——但他突然想起海頓。海頓要他勇敢一點。

　　他還沒來得及好好思考，雙腿就向著黑袍人衝了出去。他追上黑袍人，緊緊死抱著他的黑袍。

　　「放過梅伯！」

　　黑袍人沒有停下腳步，拽著萊凱繼續向前，步伐絲毫沒有慢下來。

　　「他已經做出選擇了。」黑袍人冷冷地說。「感謝他吧。」

　　萊凱對著黑袍人拳打腳踢，但對方一點反應都沒有。直到他咬住了黑袍人的腰間，才讓對方惱怒地朝他頭頂上揮拳，想把他甩開。萊凱吃痛地發出嗚噎的聲音，但是咬得更緊了。黑袍人最後嘖了一聲，再次用力砸了一拳，將萊凱連同他咬著黑袍的一部分給撕了下來。

　　萊凱被這麼一砸，向著旁邊一棵魔豆樹撞去。

　　樹枝與堅硬的魔豆莢扎得他兩臂劇疼。

　　可能流血了。但萊凱沒有低頭查看，只是扶著魔豆樹的樹幹慢慢站起。

　　「小鬼⋯⋯」黑袍人也停了下來，將全白的面具正對著倒地的萊凱。

　　萊凱站穩過後，抬頭看向黑袍人。對方被撕破的黑袍底下露出一個破舊的布袋包。萊凱還以為自己看錯了，揉了揉眼睛。

　　「⋯⋯那些魔豆怎麼會在你那？」

　　「小鬼，你怎麼知道裡面裝的是魔豆？」黑袍人面具底下的雙眼露出一絲驚訝，但想了想後，他便說道：「喔，你是那孩子的朋友嗎？叫什麼來著⋯⋯萊特，不對，是萊凱吧？」

　　「你怎麼知道？」萊凱一愣一愣地問道。

　　黑袍人眼中充滿惡意。「他死前不斷說著『這是我跟萊凱的夢想』，說什麼都不把這袋魔豆給我們。」

　　萊凱腦袋裡一片空白。

　　他想要憤怒，但此時此刻，更多的是悲傷。

　　我到底什麼時候答應過那是我們的夢想了。可惡，海頓。

　　「啊——！」

　　這時，一旁的梅伯傳來一聲怒喝。

　　萊凱轉頭看去，只見他再度與銀角狼糾纏在一起，身上的衣物殘破不堪，上半身到處都是長長的血痕。但他依舊緊緊抓著木棍，擋在狼牙之間，左手與全身則緊緊抱著巨狼，任由左半邊的身體不斷被狼爪刨傷。

　　萊凱從來不知道梅伯這麼壯。

　　怎麼可能以人類之軀擋住一頭銀角狼？

　　除非⋯⋯萊凱靈光乍現。梅伯吃了魔豆。

　　他緩慢地將視線移往自己身後的那棵魔豆樹。

　　他閉上眼。海頓離開前的臉浮現。「我以為你會更勇敢。」

　　萊凱張開眼。他死死瞪著黑袍人。是他殺了海頓。

　　是你。

　　萊凱太陽穴青筋暴起，滿腔的怒火無處發洩。他抓起魔豆樹上的一串魔豆莢，從中取出兩顆魔豆想都沒想就吞了下去。
`;

export default function PageFantasy() {
    return (
        <>
            <ArticleJsonLd
                title="盜火戰記"
                description="奇幻小說。想要證明自己的貴族少女艾蓮娜、與滿心復仇的少年萊凱，在魔豆的牽引下的冒險故事。"
                url={`https://www.kevinhsu.io/zh/chronicles-of-fire-theft`}
                images={["https://www.kevinhsu.io/fantasy_banner.png"]}
                datePublished="2025-05-04"
                dateModified="2025-05-04"
                authorName="許凱鈞"
                authorUrl={`https://www.kevinhsu.io/zh/about`}
                publisherName="許凱鈞"
                publisherLogo={`https://www.kevinhsu.io/pic.png`}
            />
            <div className="overflow-hidden">
                <Novel previewChapter={previewChapter} name="盜火戰記" imageSource="/fantasy_banner.png" />
                <div className="sm:max-w-2xl mx-auto mt-0 px-6">
                    <hr className="my-8 border-gray-200 mx-auto dark:border-gray-700" />
                </div>
                <NovelSubscribe cta="預計 2025 年中寫完。想追蹤後續消息（或者單純想讓我開心）的話，歡迎訂閱：" />
            </div>
        </>
    );
}