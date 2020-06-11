{
  // 要素を取得して、定数に代入
  const jacket = document.getElementById('jacket');
  const title = document.getElementById('title');
  const released = document.getElementById('released');
  const itunes = document.getElementById('itunes');
  const spotify = document.getElementById('spotify');
  const google = document.getElementById('google');
  const amazon = document.getElementById('amazon');

  //とりあえず28曲
  const musicSet = [
    //0 ももいろパンチ
    {j: 'https://www.momoclo.net/discography/img/jacket/jk/si01_2.jpg',
    t: 'ももいろパンチ', r: 'August 5, 2009', 
    i:'https://music.apple.com/jp/album/%E3%82%82%E3%82%82%E3%81%84%E3%82%8D%E3%83%91%E3%83%B3%E3%83%81/1386059878?i=1386059953', 
    s: 'https://open.spotify.com/track/4QcD6KuxPYx30A4oEMVbiR', 
    g: 'https://play.google.com/store/music/album?id=B4n4d4oqcpa4y2hvzw2kjtu3zuu&tid=song-Tsmxwdmrkiyurp3oyehgm67tblu', 
    a: 'https://music.amazon.co.jp/albums/B07D5HV67L?trackAsin=B07D5HHQVN&ref=dm_sh_2f24-7371-dmcp-8314-39a61&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //1 未来へススメ！
    {j: 'https://www.momoclo.net/discography/img/jacket/jk/si02_3.jpg',
    t: '未来へススメ！', r: 'November 11, 2011',
    i: 'https://music.apple.com/jp/album/%E6%9C%AA%E6%9D%A5%E3%81%B8%E3%82%B9%E3%82%B9%E3%83%A1/1386059878?i=1386059954',
    s: 'https://open.spotify.com/track/1wIn0p0fugcG7WOzO8BnjG',
    g: 'https://play.google.com/store/music/album?id=B4n4d4oqcpa4y2hvzw2kjtu3zuu&tid=song-Teuznylac2jr2a7dxobr3ge5v7y',
    a: 'https://music.amazon.co.jp/albums/B07D5HV67L?trackAsin=B07D5GRN32&ref=dm_sh_b119-8ed5-dmcp-f310-5dbd3&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //2 行くぜっ！怪盗少女 -ZZ ver.-
    {j: 'https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/5f/c0/57/5fc05774-e3e6-8f4a-0b2c-6c099dc90a1e/NOPA-2204.jpg/400x400bb.jpeg',
    t: '行くぜっ！怪盗少女 -ZZ ver.-', r: 'January 31, 2020',
    i: ' https://geo.music.apple.com/us/album/ikuzze-kaitou-shoujo-zz-ver/1495128839?i=1495128840&mt=1&app=music',
    s: 'https://open.spotify.com/track/6gIf4tylgA6mr7mj62Pz55',
    g: 'https://play.google.com/store/music/album?id=Bgs3pqzeuxa7u5q7osf2kuigmqi&tid=song-Txjl6gdqllokdw72dlcqj2bihfy',
    a: 'https://music.amazon.co.jp/albums/B0841WXLDV?trackAsin=B0841WDWRS&ref=dm_sh_ba94-c693-dmcp-8fed-856c4&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //3 ピンキージョーンズ
    {j: 'https://www.momoclo.net/discography/img/jacket/jk/large/si04_4.jpg',
    t: 'ピンキージョーンズ', r: 'November 10, 2010',
    i: 'https://music.apple.com/jp/album/%E3%83%94%E3%83%B3%E3%82%AD%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%BC%E3%83%B3%E3%82%BA/400873185?i=400873191',
    s: 'https://open.spotify.com/track/7t0FmIxKj1klWOisrMAs6B',
    g: 'https://play.google.com/store/music/album?id=Bc3hjaw4nyxc5hd3uhajz3p4sjm&tid=song-Tiflbatifvtqtsjlfgrcex4bykq',
    a: 'https://music.amazon.co.jp/albums/B00GY4WYQO?trackAsin=B00GY4WZDQ&ref=dm_sh_aa9e-c158-dmcp-dbe5-b3cdd&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //4 走れ！-ZZ ver.--
    {j: 'https://www.momoclo.net/common/img/jacket/200131/500.jpg',
    t: '走れ！-ZZ ver.--', r: 'January 31, 2020',
    i: 'https://music.apple.com/jp/album/%E8%B5%B0%E3%82%8C-zz-ver/1495128839?i=1495128841',
    s: 'https://open.spotify.com/track/4GAxImqhNN1uORcirfAVir',
    g: 'https://play.google.com/store/music/album?id=Bgs3pqzeuxa7u5q7osf2kuigmqi&tid=song-T4zhunvfvnw4nxkiiqlvk3pc4di',
    a: 'https://music.amazon.co.jp/albums/B0841WXLDV?trackAsin=B0841XBN5S&ref=dm_sh_cdf8-5870-dmcp-11e3-6405c&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //5 ミライボウル
    {j: 'https://www.momoclo.net/discography/img/jacket/jk/large/si06_3.jpg',
    t: 'ミライボウル', r: 'March 9, 2011',
    i: 'https://music.apple.com/jp/album/%E3%83%9F%E3%83%A9%E3%82%A4%E3%83%9C%E3%82%A6%E3%83%AB/426623776?i=426623778',
    s: 'https://open.spotify.com/track/78K5Bx9LFNh52euwWAAEWn',
    g: 'https://play.google.com/store/music/album?id=Br3xe3ctayezzabgwplvslhrnre&tid=song-Tpy2tqhaunfg67hxyvh2pkomjye',
    a: 'https://music.amazon.co.jp/albums/B00GY4TLQU/B00GY4TMAU?tab=CATALOG&ref=dm_wcp_albm_link_search_c'},
    //6 Z伝説～終わりなき革命～
    {j: 'https://www.momoclo.net/discography/img/jacket/jk/large/si08_1.jpg',
    t: 'Z伝説～終わりなき革命～', r: 'September 6, 2011',
    i: 'https://music.apple.com/jp/album/z%E4%BC%9D%E8%AA%AC-%E7%B5%82%E3%82%8F%E3%82%8A%E3%81%AA%E3%81%8D%E9%9D%A9%E5%91%BD/449793477?i=449793478',
    s: 'https://open.spotify.com/track/2iTMff0H6Mu20KQrJyd3Gq',
    g: 'https://play.google.com/store/music/album?id=Bbza7qxm4jdeyrkqwdf5q6tspyq&tid=song-Twqw6mdjjcn5hnjqlcl2hor7qka',
    a: 'https://music.amazon.co.jp/albums/B07DBC246M?trackAsin=B07DBCLZZS&ref=dm_sh_fa64-88a7-dmcp-bcc0-ee3ce&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //7 D'の純情
    {j: 'https://www.momoclo.net/discography/img/jacket/jk/large/si08_2.jpg',
    t: 'D\'の純情', r: 'September 6, 2011',
    i: 'https://music.apple.com/jp/album/d-%E3%81%AE%E7%B4%94%E6%83%85/449793477?i=449793486',
    s: 'https://open.spotify.com/track/6Ry8RSrYtfVGbzPcKVBlRX',
    g: 'https://play.google.com/store/music/album?id=B4pdryzakhrofa74z5fwdigxvwq&tid=song-Tume324vx5ztqzk5d46j4bnfq2e',
    a: 'https://music.amazon.co.jp/albums/B07DBC246M?trackAsin=B07DBBQBHX&ref=dm_sh_7235-0d01-dmcp-2a19-03275&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //8 労働賛歌
    {j: 'https://www.momoclo.net/discography/img/jacket/jk/large/si09_3.jpg',
    t: '労働賛歌', r: 'November 23, 2011',
    i: 'https://music.apple.com/jp/album/%E5%8A%B4%E5%83%8D%E8%AE%83%E6%AD%8C/477418982?i=477418983',
    s: 'https://open.spotify.com/track/1SRXDJBo16PCnBiFh1hPrW',
    g: 'https://play.google.com/store/music/album?id=Buzpyuktj6d3trppnpa6wvgzrz4&tid=song-Tam74m4ds67vc4kvh77kiatfvfu',
    a: 'https://music.amazon.co.jp/albums/B00GY4XIRI?trackAsin=B00GY4SB1Q&ref=dm_sh_e648-5f2a-dmcp-99d3-352c5&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //9 白い風
    {j: 'https://ogre.natalie.mu/media/news/music/2011/1215/momocloZ_shiroikaze.jpg?impolicy=lt&imwidth=1200',
    t: '白い風', r: 'December 25, 2011',
    i: 'https://music.apple.com/jp/album/baii-feng-ep/489718321?ign-mpt=uo%3D4',
    s: 'https://open.spotify.com/track/70zBQkM8iOWeExDVal5kxZ',
    g: 'https://play.google.com/store/music/album/%E3%82%82%E3%82%82%E3%81%84%E3%82%8D%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%90%E3%83%BCZ_%E7%99%BD%E3%81%84%E9%A2%A8?id=Bvz7gq45ukauhhxinfdbn6hmwgi',
    a: 'https://music.amazon.co.jp/albums/B07DB8H58C?trackAsin=B07DB77NNB&ref=dm_sh_c9e3-f5c0-dmcp-a99d-c9847&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //10 猛烈宇宙交響曲・第七楽章「無限の愛」
    {j: 'https://www.momoclo.net/discography/img/jacket/jk/large/si11_2.jpg',
    t: '猛烈宇宙交響曲・第七楽章<br>「無限の愛」', r: 'March 7, 2012',
    i: 'https://music.apple.com/jp/album/%E7%8C%9B%E7%83%88%E5%AE%87%E5%AE%99%E4%BA%A4%E9%9F%BF%E6%9B%B2-%E7%AC%AC%E4%B8%83%E6%A5%BD%E7%AB%A0-%E7%84%A1%E9%99%90%E3%81%AE%E6%84%9B/501589535?i=501589536',
    s: 'https://open.spotify.com/track/5ipdKJKoH1OFZysw3sy6hE',
    g: 'https://play.google.com/store/music/album?id=Bs6gv7suph7mbqpojsknrjs7fqu&tid=song-Tasmmhy2xypcc7fdwmxji5icn7u',
    a: 'https://music.amazon.co.jp/albums/B00GY4W22U?trackAsin=B00GY4W36A&ref=dm_sh_8be2-0746-dmcp-e69c-64a70&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //11 Z女戦争
    {j: 'https://www.momoclo.net/discography/img/jacket/jk/large/si12_3.jpg',
    t: 'Z女戦争', r: 'June 27, 2012',
    i: 'https://music.apple.com/jp/album/z%E5%A5%B3%E6%88%A6%E4%BA%89/533667806?i=533667807',
    s: 'https://open.spotify.com/track/14hwW40bmZr4NYpK55FxlQ',
    g: 'https://play.google.com/store/music/album?id=Bwv4kncbj47533tnyztp5mfkexu&tid=song-Tmmd54tecy5yegibznurbqvylyq',
    a: 'https://music.amazon.co.jp/albums/B00GY4VLTA?trackAsin=B00GY4VMPI&ref=dm_sh_24d4-851b-dmcp-50a1-39476&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //12 サラバ、愛しき悲しみたちよ
    {j: 'https://www.momoclo.net/discography/img/jacket/jk/large/si14_2.jpg',
    t: 'サラバ、愛しき悲しみたちよ', r: 'November 21, 2012',
    i: 'https://music.apple.com/jp/album/%E3%82%B5%E3%83%A9%E3%83%90-%E6%84%9B%E3%81%97%E3%81%8D%E6%82%B2%E3%81%97%E3%81%BF%E3%81%9F%E3%81%A1%E3%82%88/574367024?i=574367027',
    s: 'https://open.spotify.com/track/3dtaA8y7Ns4hXk5bZodAEi',
    g: 'https://play.google.com/store/music/album?id=Bhh63q4tdxzzhbec5myx7aac7du&tid=song-Tonocfxp4dwyn72lh6cuzi2gsba',
    a: 'https://music.amazon.co.jp/albums/B00GY4VI8O?trackAsin=B00GY4VIYS&ref=dm_sh_cabf-687c-dmcp-6bd9-4f811&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //13 GOUNN
    {j: 'https://www.momoclo.net/discography/img/jacket/jk/large/s16_2.jpg',
    t: 'GOUNN', r: 'November 6, 2013',
    i: 'https://music.apple.com/jp/album/gounn/726042269?i=726042332',
    s: 'https://open.spotify.com/track/5vRaEZ4bh08F2UE3EOC0kX',
    g: 'https://play.google.com/store/music/album?id=Bo64u45lt52csgq43zsqxjksfrq&tid=song-Tadjdkfitofpjit6kudx5kzipki',
    a: 'https://music.amazon.co.jp/albums/B00GY4VPYG?trackAsin=B00GY4VR12&ref=dm_sh_1f93-ab11-dmcp-281b-7d8bc&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //14 泣いてもいいんだよ
    {j: 'https://www.momoclo.net/discography/img/jacket/jk/large/s18n.jpg',
    t: '泣いてもいいんだよ', r: 'May 8, 2014',
    i: 'https://music.apple.com/jp/album/%E6%B3%A3%E3%81%84%E3%81%A6%E3%82%82%E3%81%84%E3%81%84%E3%82%93%E3%81%A0%E3%82%88/866954593?i=866954594',
    s: 'https://open.spotify.com/track/7qyGjLDvaELcJIml3H1tTF',
    g: 'https://play.google.com/store/music/album?id=Bu4lqneu2vbpyvix2y7cjazs4wa&tid=song-Tt6qrs4stbp6lcyran6wbeg4rny',
    a: 'https://music.amazon.co.jp/albums/B00JVXFOZI?trackAsin=B00JVXFPQQ&ref=dm_sh_354d-f90e-dmcp-7483-60a43&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //15 MOON PRIDE
    {j: 'https://www.momoclo.net/discography/img/jacket/jk/large/si20_2.jpg',
    t: 'MOON PRIDE', r: 'July 30, 2014',
    i: 'https://music.apple.com/jp/album/moon-pride/898997594?i=898997597',
    s: 'https://open.spotify.com/track/2vKK2J9JLSHXwxz2njJvph',
    g: 'https://play.google.com/store/music/album?id=Bcy7f4tajpxzbmxczjdtdaimgya&tid=song-Twzhf6que7vrmk3443jf4yadakm',
    a: 'https://music.amazon.co.jp/albums/B00M0HZBFA?trackAsin=B00M0HZDGM&ref=dm_sh_ace9-262a-dmcp-3fc4-020c0&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //16 夢の浮世に咲いてみな
    {j: 'https://www.momoclo.net/discography/img/jacket/jk/large/si21_1.jpg',
    t: '夢の浮世に咲いてみな', r: 'January 28, 2015',
    i: 'https://music.apple.com/jp/album/%E5%A4%A2%E3%81%AE%E6%B5%AE%E4%B8%96%E3%81%AB%E5%92%B2%E3%81%84%E3%81%A6%E3%81%BF%E3%81%AA/958012057?i=958012062',
    s: 'https://open.spotify.com/track/6T1zxOOOCCCgSqInLkUXyh',
    g: 'https://play.google.com/store/music/album?id=Bzcrq4d2a5xrhtaihtbw7e2acjq&tid=song-T5jyvlftqjagnplmcpccycwpf3y',
    a: 'https://music.amazon.co.jp/albums/B00SJD6QH6?trackAsin=B00SJD6SPG&ref=dm_sh_c7a9-87d8-dmcp-b8f7-22641&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //17 青春賦
    {j: 'https://www.momoclo.net/discography/img/jacket/jk/large/si23_c.jpg',
    t: '青春賦', r: 'March 11, 2015',
    i: 'https://music.apple.com/jp/album/%E9%9D%92%E6%98%A5%E8%B3%A6/971487871?i=971487918',
    s: 'https://open.spotify.com/track/76znv8pdBAELA8AVtsMd8b',
    g: 'https://play.google.com/store/music/album?id=Braip6dplo35ucpj4znwynpzlni&tid=song-Ttcfuhw5ywqzrgtfw5r5zz5tcua',
    a: 'https://music.amazon.co.jp/albums/B00UAPVXMY?trackAsin=B00UAPVZH2&ref=dm_sh_b436-b9c2-dmcp-de79-8b11c&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //18 『Z』の誓い
    {j: 'https://www.momoclo.net/discography/img/jacket/jk/large/si24_2.jpg',
    t: '『Z』の誓い', r: 'April 29, 2015',
    i: 'https://music.apple.com/jp/album/z-%E3%81%AE%E8%AA%93%E3%81%84/985856568?i=985856569',
    s: 'https://open.spotify.com/track/0PEo8PVfGSY3QFJXg4bLxs',
    g: 'https://play.google.com/store/music/album?id=Bw4yt23sxdtz7xvd74f7452v6ma&tid=song-Tmvghyxfmy3y3rnivmjjoe3vxyi',
    a: 'https://music.amazon.co.jp/albums/B00WI1UJGY?trackAsin=B00WI1UNTC&ref=dm_sh_cd9b-77c3-dmcp-71b0-8ccf9&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //19 ザ・ゴールデン・ヒストリー
    {j: 'https://www.momoclo.net/common/img/jacket/0808/500/si29-1.jpg',
    t: 'ザ・ゴールデン・ヒストリー', r: 'September 7, 2016',
    i: 'https://music.apple.com/jp/album/%E3%82%B6-%E3%82%B4%E3%83%BC%E3%83%AB%E3%83%87%E3%83%B3-%E3%83%92%E3%82%B9%E3%83%88%E3%83%AA%E3%83%BC/1146341256?i=1146341257',
    s: 'https://open.spotify.com/track/74ZWPqxqRum1Gow3uWFjto',
    g: 'https://play.google.com/store/music/album?id=Bwnizzilrcwuvmo45oekrf7gbhy&tid=song-T4talra47lttdqfl6hsd6uokkxy',
    a: 'https://music.amazon.co.jp/albums/B01LCIWB00?trackAsin=B01LCIWCPE&ref=dm_sh_356b-fa59-dmcp-b30c-8885c&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //20 BLAST!
    {j: 'https://www.momoclo.net/common/img/jacket/170703/500/400.jpg',
    t: 'BLAST!', r: 'August 2, 2017',
    i: 'https://music.apple.com/jp/album/blast/1261303734?i=1261303737',
    s: 'https://open.spotify.com/track/6IVVMdFmlTmZaE2GEPXwrq',
    g: 'https://play.google.com/store/music/album?id=Bksurpf5avsolcpos5p6guhcajm&tid=song-Tufyvtsmjxxs43fiisbmmiunkay',
    a: 'https://music.amazon.co.jp/albums/B0749RHYDC?trackAsin=B0749QZWHX&ref=dm_sh_38b7-35e1-dmcp-f8bf-14929&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //21 笑一笑～シャオイーシャオ!～
    {j: 'https://www.momoclo.net/common/img/jacket/180411/500_2.jpg',
    t: '笑一笑<br>～シャオイーシャオ!～', r: 'April 11, 2018',
    i: 'https://music.apple.com/jp/album/%E7%AC%91%E4%B8%80%E7%AC%91-%E3%82%B7%E3%83%A3%E3%82%AA%E3%82%A4%E3%83%BC%E3%82%B7%E3%83%A3%E3%82%AA/1363873847?i=1363873849',
    s: 'https://open.spotify.com/track/5MxjNwjjBW9PtYreT0bV2B',
    g: 'https://play.google.com/store/music/album?id=Bbo7tfe55g4y4pqsxul2k6dvg5e&tid=song-Tfmarqbhmok7xj63utm66vi54oa',
    a: 'https://music.amazon.co.jp/albums/B07BVMR6FN?trackAsin=B07CDCLNQX&ref=dm_sh_a308-27d9-dmcp-10bb-1514e&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //22 Re:Story
    {j: 'https://www.momoclo.net/common/img/jacket/180805/500.jpg',
    t: 'Re:Story', r: 'August 5, 2018',
    i: 'https://music.apple.com/jp/album/re-story/1413642688?i=1413642692',
    s: 'https://open.spotify.com/track/0qJQ8eGMelr53wblwJCqXw',
    g: 'https://play.google.com/store/music/album/%E3%82%82%E3%82%82%E3%81%84%E3%82%8D%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%90%E3%83%BCZ_Re_Story?id=Bcwttcnp2fumgqqarwqfguhdhem',
    a: 'https://music.amazon.co.jp/albums/B07FRSNMZ5?trackAsin=B07FS394NV&ref=dm_sh_ba86-9458-dmcp-5df9-f1d47&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //23 あんた飛ばしすぎ!!
    {j: 'https://www.momoclo.net/common/img/jacket/180914/500.jpg',
    t: 'あんた飛ばしすぎ!!', r: 'September 14, 2018',
    i: 'https://music.apple.com/jp/album/%E3%81%82%E3%82%93%E3%81%9F%E9%A3%9B%E3%81%B0%E3%81%97%E3%81%99%E3%81%8E-single/1434518311',
    s: 'https://open.spotify.com/track/7lSacvtRiYys7Yw2zfOdgi',
    g: 'https://play.google.com/store/music/album?id=Bxeoc3sxtircexhpkjh2i5fvdru&tid=song-T6ygrdigvc6yldpzosdu2o7epy4',
    a: 'https://music.amazon.co.jp/albums/B07GZT77YL?trackAsin=B07GZW3JTR&ref=dm_sh_f5fd-c485-dmcp-affb-9e25e&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //24 天国のでたらめ
    {j: 'https://www.momoclo.net/common/img/jacket/181012/500.jpg',
    t: '天国のでたらめ', r: 'October 12, 2018',
    i: 'https://music.apple.com/jp/album/%E5%A4%A9%E5%9B%BD%E3%81%AE%E3%81%A7%E3%81%9F%E3%82%89%E3%82%81/1437490275?i=1437490276',
    s: 'https://open.spotify.com/track/2zesLdbGRGebqKfrWI3Ia1',
    g: 'https://play.google.com/store/music/album?id=Bejgrhmwsbkakddtx7bqzgpjp5i&tid=song-Tvxkcfau255ob2kow7ehmylzj2y',
    a: 'https://music.amazon.co.jp/albums/B07HX3CJZ1?trackAsin=B07HX4STSF&ref=dm_sh_a78e-a0d5-dmcp-2172-cafce&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //25 GODSPEED
    {j: 'https://www.momoclo.net/common/img/jacket/181116/500.jpg',
    t: 'GODSPEED', r: 'November 16, 2018',
    i: 'https://music.apple.com/jp/album/godspeed/1440578553?i=1440578554',
    s: 'https://open.spotify.com/track/1aFe2illdBDvEulZGMqVK0',
    g: 'https://play.google.com/store/music/album?id=Bzhup75f7ytidslrovo7je5xwhe&tid=song-Tzyzshndzqtasvsrjiuj5ri2n2a',
    a: 'https://music.amazon.co.jp/albums/B07K26G3WY?trackAsin=B07K27LSYR&ref=dm_sh_502e-3a2b-dmcp-873f-84f74&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //26 Sweet Wanderer
    {j: 'https://www.momoclo.net/common/img/jacket/181221/500.jpg',
    t: 'Sweet Wanderer', r: 'December 21, 2018',
    i: 'https://music.apple.com/jp/album/sweet-wanderer/1445517744?i=1445517745',
    s: 'https://open.spotify.com/track/2Qu0mPuEHkHCtu0bmIiZ0x',
    g: 'https://play.google.com/store/music/album?id=B4asbdwtdo5k6vcqe4o4hyayx3m&tid=song-Tgzeu4ctx6dotysteb2z4awiof4',
    a: 'https://music.amazon.co.jp/albums/B07L4VVHBZ?trackAsin=B07L4WFNTV&ref=dm_sh_804e-6f46-dmcp-1d18-62150&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //27 stay gold
    {j: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/23/13/ed/2313eda8-cb38-ff48-3dee-9ea56cfa41c9/KICM-92017.jpg/400x400bb.jpeg',
    t: 'stay gold', r: 'November 15, 2019',
    i: 'https://geo.music.apple.com/us/album/stay-gold/1486711058?i=1486711059&mt=1&app=music&ls=1',
    s: 'https://open.spotify.com/track/2iTMff0H6Mu20KQrJyd3Gq',
    g: 'https://play.google.com/store/music/album?id=Buupp4hwfeypdxtromkd7wdabxa&tid=song-Tqqytd3ue4sza6bnvfabvo35j3e',
    a: 'https://music.amazon.co.jp/albums/B08162PKNG?trackAsin=B081614CPL&ref=dm_sh_6839-105e-dmcp-607d-ecab5&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
  ];

  // 曲をセットする関数
  function setMusic() {
    let today = new Date();
    //getTime()で1970年1月1日からの経過ミリ秒を取得
    //1日＝1000ミリ秒×60秒×60分×24時間で割って、1970年1月1日から何日目かを計算
    let passedDay = Math.floor(today.getTime() / (1000*60*60*24)); 
    console.log(passedDay);
    //経過した日数を曲数で割った余りを求める
    let todayNum = passedDay % (musicSet.length);
    console.log(todayNum);

    // let todayNum = 26;

    // 曲の情報を埋め込む
    jacket.setAttribute('src', musicSet[todayNum].j);
    title.innerHTML = musicSet[todayNum].t;
    released.textContent = `Releadsed:  ${musicSet[todayNum].r}`;
    itunes.href = musicSet[todayNum].i;
    spotify.href = musicSet[todayNum].s;
    google.href= musicSet[todayNum].g;
    amazon.href= musicSet[todayNum].a;
  }

  setMusic();
}