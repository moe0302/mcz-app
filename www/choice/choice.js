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
    {j: 'https://www.momoclo.net/discography/img/jacket/jk/si01_2.jpg', t: 'ももいろパンチ', r: 'August 5, 2009', 
    i:'https://music.apple.com/jp/album/%E3%82%82%E3%82%82%E3%81%84%E3%82%8D%E3%83%91%E3%83%B3%E3%83%81/1386059878?i=1386059953', 
    s: 'https://open.spotify.com/track/4QcD6KuxPYx30A4oEMVbiR', 
    g: 'https://play.google.com/store/music/album?id=B4n4d4oqcpa4y2hvzw2kjtu3zuu&tid=song-Tsmxwdmrkiyurp3oyehgm67tblu', 
    a: 'https://music.amazon.co.jp/albums/B07D5HV67L?trackAsin=B07D5HHQVN&ref=dm_sh_2f24-7371-dmcp-8314-39a61&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //1 未来へススメ！
    {j: 'https://www.momoclo.net/discography/img/jacket/jk/si02_3.jpg', t: '未来へススメ！', r: 'November 11, 2011', i: 'https://music.apple.com/jp/album/%E6%9C%AA%E6%9D%A5%E3%81%B8%E3%82%B9%E3%82%B9%E3%83%A1/1386059878?i=1386059954', s: 'https://open.spotify.com/track/1wIn0p0fugcG7WOzO8BnjG', g: 'https://play.google.com/store/music/album?id=B4n4d4oqcpa4y2hvzw2kjtu3zuu&tid=song-Teuznylac2jr2a7dxobr3ge5v7y', a: 'https://music.amazon.co.jp/albums/B07D5HV67L?trackAsin=B07D5GRN32&ref=dm_sh_b119-8ed5-dmcp-f310-5dbd3&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //2 行くぜっ！怪盗少女 -ZZ ver.-
    {j: 'https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/5f/c0/57/5fc05774-e3e6-8f4a-0b2c-6c099dc90a1e/NOPA-2204.jpg/400x400bb.jpeg', t: '行くぜっ！怪盗少女 -ZZ ver.-', r: 'January 31, 2020', i: ' https://geo.music.apple.com/us/album/ikuzze-kaitou-shoujo-zz-ver/1495128839?i=1495128840&mt=1&app=music', s: 'https://open.spotify.com/track/6gIf4tylgA6mr7mj62Pz55', g: 'https://play.google.com/store/music/album?id=Bgs3pqzeuxa7u5q7osf2kuigmqi&tid=song-Txjl6gdqllokdw72dlcqj2bihfy', a: 'https://music.amazon.co.jp/albums/B0841WXLDV?trackAsin=B0841WDWRS&ref=dm_sh_ba94-c693-dmcp-8fed-856c4&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //3 ピンキージョーンズ
    {j: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/23/13/ed/2313eda8-cb38-ff48-3dee-9ea56cfa41c9/KICM-92017.jpg/400x400bb.jpeg', t: 'ピンキージョーンズ', r: 'November 15, 2019', i: 'https://geo.music.apple.com/us/album/stay-gold/1486711058?i=1486711059&mt=1&app=music&ls=1', s: 'https://open.spotify.com/track/2iTMff0H6Mu20KQrJyd3Gq', g: 'https://play.google.com/store/music/album?id=Buupp4hwfeypdxtromkd7wdabxa&tid=song-Tqqytd3ue4sza6bnvfabvo35j3e', a: 'https://music.amazon.co.jp/albums/B08162PKNG?trackAsin=B081614CPL&ref=dm_sh_6839-105e-dmcp-607d-ecab5&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //4 走れ！-ZZ ver.--
    {j: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/23/13/ed/2313eda8-cb38-ff48-3dee-9ea56cfa41c9/KICM-92017.jpg/400x400bb.jpeg', t: '走れ！-ZZ ver.--', r: 'November 15, 2019', i: 'https://geo.music.apple.com/us/album/stay-gold/1486711058?i=1486711059&mt=1&app=music&ls=1', s: 'https://open.spotify.com/track/2iTMff0H6Mu20KQrJyd3Gq', g: 'https://play.google.com/store/music/album?id=Buupp4hwfeypdxtromkd7wdabxa&tid=song-Tqqytd3ue4sza6bnvfabvo35j3e', a: 'https://music.amazon.co.jp/albums/B08162PKNG?trackAsin=B081614CPL&ref=dm_sh_6839-105e-dmcp-607d-ecab5&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //5 ミライボウル
    {j: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/23/13/ed/2313eda8-cb38-ff48-3dee-9ea56cfa41c9/KICM-92017.jpg/400x400bb.jpeg', t: 'ミライボウル', r: 'November 15, 2019', i: 'https://geo.music.apple.com/us/album/stay-gold/1486711058?i=1486711059&mt=1&app=music&ls=1', s: 'https://open.spotify.com/track/2iTMff0H6Mu20KQrJyd3Gq', g: 'https://play.google.com/store/music/album?id=Buupp4hwfeypdxtromkd7wdabxa&tid=song-Tqqytd3ue4sza6bnvfabvo35j3e', a: 'https://music.amazon.co.jp/albums/B08162PKNG?trackAsin=B081614CPL&ref=dm_sh_6839-105e-dmcp-607d-ecab5&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //6 Z伝説～終わりなき革命～
    {j: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/23/13/ed/2313eda8-cb38-ff48-3dee-9ea56cfa41c9/KICM-92017.jpg/400x400bb.jpeg', t: 'Z伝説～終わりなき革命～', r: 'November 15, 2019', i: 'https://geo.music.apple.com/us/album/stay-gold/1486711058?i=1486711059&mt=1&app=music&ls=1', s: 'https://open.spotify.com/track/2iTMff0H6Mu20KQrJyd3Gq', g: 'https://play.google.com/store/music/album?id=Buupp4hwfeypdxtromkd7wdabxa&tid=song-Tqqytd3ue4sza6bnvfabvo35j3e', a: 'https://music.amazon.co.jp/albums/B08162PKNG?trackAsin=B081614CPL&ref=dm_sh_6839-105e-dmcp-607d-ecab5&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //7 D'の純情
    {j: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/23/13/ed/2313eda8-cb38-ff48-3dee-9ea56cfa41c9/KICM-92017.jpg/400x400bb.jpeg', t: 'Dの純情', r: 'November 15, 2019', i: 'https://geo.music.apple.com/us/album/stay-gold/1486711058?i=1486711059&mt=1&app=music&ls=1', s: 'https://open.spotify.com/track/2iTMff0H6Mu20KQrJyd3Gq', g: 'https://play.google.com/store/music/album?id=Buupp4hwfeypdxtromkd7wdabxa&tid=song-Tqqytd3ue4sza6bnvfabvo35j3e', a: 'https://music.amazon.co.jp/albums/B08162PKNG?trackAsin=B081614CPL&ref=dm_sh_6839-105e-dmcp-607d-ecab5&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //8 労働賛歌
    {j: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/23/13/ed/2313eda8-cb38-ff48-3dee-9ea56cfa41c9/KICM-92017.jpg/400x400bb.jpeg', t: '労働賛歌', r: 'November 15, 2019', i: 'https://geo.music.apple.com/us/album/stay-gold/1486711058?i=1486711059&mt=1&app=music&ls=1', s: 'https://open.spotify.com/track/2iTMff0H6Mu20KQrJyd3Gq', g: 'https://play.google.com/store/music/album?id=Buupp4hwfeypdxtromkd7wdabxa&tid=song-Tqqytd3ue4sza6bnvfabvo35j3e', a: 'https://music.amazon.co.jp/albums/B08162PKNG?trackAsin=B081614CPL&ref=dm_sh_6839-105e-dmcp-607d-ecab5&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //9 白い風
    {j: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/23/13/ed/2313eda8-cb38-ff48-3dee-9ea56cfa41c9/KICM-92017.jpg/400x400bb.jpeg', t: '白い風', r: 'November 15, 2019', i: 'https://geo.music.apple.com/us/album/stay-gold/1486711058?i=1486711059&mt=1&app=music&ls=1', s: 'https://open.spotify.com/track/2iTMff0H6Mu20KQrJyd3Gq', g: 'https://play.google.com/store/music/album?id=Buupp4hwfeypdxtromkd7wdabxa&tid=song-Tqqytd3ue4sza6bnvfabvo35j3e', a: 'https://music.amazon.co.jp/albums/B08162PKNG?trackAsin=B081614CPL&ref=dm_sh_6839-105e-dmcp-607d-ecab5&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //10 猛烈宇宙交響曲・第七楽章「無限の愛」
    {j: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/23/13/ed/2313eda8-cb38-ff48-3dee-9ea56cfa41c9/KICM-92017.jpg/400x400bb.jpeg', t: '猛烈宇宙交響曲・第七楽章「無限の愛」', r: 'November 15, 2019', i: 'https://geo.music.apple.com/us/album/stay-gold/1486711058?i=1486711059&mt=1&app=music&ls=1', s: 'https://open.spotify.com/track/2iTMff0H6Mu20KQrJyd3Gq', g: 'https://play.google.com/store/music/album?id=Buupp4hwfeypdxtromkd7wdabxa&tid=song-Tqqytd3ue4sza6bnvfabvo35j3e', a: 'https://music.amazon.co.jp/albums/B08162PKNG?trackAsin=B081614CPL&ref=dm_sh_6839-105e-dmcp-607d-ecab5&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //11 Z女戦争
    {j: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/23/13/ed/2313eda8-cb38-ff48-3dee-9ea56cfa41c9/KICM-92017.jpg/400x400bb.jpeg', t: 'Z女戦争', r: 'November 15, 2019', i: 'https://geo.music.apple.com/us/album/stay-gold/1486711058?i=1486711059&mt=1&app=music&ls=1', s: 'https://open.spotify.com/track/2iTMff0H6Mu20KQrJyd3Gq', g: 'https://play.google.com/store/music/album?id=Buupp4hwfeypdxtromkd7wdabxa&tid=song-Tqqytd3ue4sza6bnvfabvo35j3e', a: 'https://music.amazon.co.jp/albums/B08162PKNG?trackAsin=B081614CPL&ref=dm_sh_6839-105e-dmcp-607d-ecab5&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //12 サラバ、愛しき悲しみたちよ
    {j: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/23/13/ed/2313eda8-cb38-ff48-3dee-9ea56cfa41c9/KICM-92017.jpg/400x400bb.jpeg', t: 'サラバ、愛しき悲しみたちよ', r: 'November 15, 2019', i: 'https://geo.music.apple.com/us/album/stay-gold/1486711058?i=1486711059&mt=1&app=music&ls=1', s: 'https://open.spotify.com/track/2iTMff0H6Mu20KQrJyd3Gq', g: 'https://play.google.com/store/music/album?id=Buupp4hwfeypdxtromkd7wdabxa&tid=song-Tqqytd3ue4sza6bnvfabvo35j3e', a: 'https://music.amazon.co.jp/albums/B08162PKNG?trackAsin=B081614CPL&ref=dm_sh_6839-105e-dmcp-607d-ecab5&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //13 GOUNN
    {j: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/23/13/ed/2313eda8-cb38-ff48-3dee-9ea56cfa41c9/KICM-92017.jpg/400x400bb.jpeg', t: 'GOUNN', r: 'November 15, 2019', i: 'https://geo.music.apple.com/us/album/stay-gold/1486711058?i=1486711059&mt=1&app=music&ls=1', s: 'https://open.spotify.com/track/2iTMff0H6Mu20KQrJyd3Gq', g: 'https://play.google.com/store/music/album?id=Buupp4hwfeypdxtromkd7wdabxa&tid=song-Tqqytd3ue4sza6bnvfabvo35j3e', a: 'https://music.amazon.co.jp/albums/B08162PKNG?trackAsin=B081614CPL&ref=dm_sh_6839-105e-dmcp-607d-ecab5&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //14 泣いてもいいんだよ
    {j: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/23/13/ed/2313eda8-cb38-ff48-3dee-9ea56cfa41c9/KICM-92017.jpg/400x400bb.jpeg', t: '泣いてもいいんだよ', r: 'November 15, 2019', i: 'https://geo.music.apple.com/us/album/stay-gold/1486711058?i=1486711059&mt=1&app=music&ls=1', s: 'https://open.spotify.com/track/2iTMff0H6Mu20KQrJyd3Gq', g: 'https://play.google.com/store/music/album?id=Buupp4hwfeypdxtromkd7wdabxa&tid=song-Tqqytd3ue4sza6bnvfabvo35j3e', a: 'https://music.amazon.co.jp/albums/B08162PKNG?trackAsin=B081614CPL&ref=dm_sh_6839-105e-dmcp-607d-ecab5&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //15 MOON PRIDE
    {j: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/23/13/ed/2313eda8-cb38-ff48-3dee-9ea56cfa41c9/KICM-92017.jpg/400x400bb.jpeg', t: 'MOON PRIDE', r: 'November 15, 2019', i: 'https://geo.music.apple.com/us/album/stay-gold/1486711058?i=1486711059&mt=1&app=music&ls=1', s: 'https://open.spotify.com/track/2iTMff0H6Mu20KQrJyd3Gq', g: 'https://play.google.com/store/music/album?id=Buupp4hwfeypdxtromkd7wdabxa&tid=song-Tqqytd3ue4sza6bnvfabvo35j3e', a: 'https://music.amazon.co.jp/albums/B08162PKNG?trackAsin=B081614CPL&ref=dm_sh_6839-105e-dmcp-607d-ecab5&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //16 夢の浮世に咲いてみな
    {j: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/23/13/ed/2313eda8-cb38-ff48-3dee-9ea56cfa41c9/KICM-92017.jpg/400x400bb.jpeg', t: '夢の浮世に咲いてみな', r: 'November 15, 2019', i: 'https://geo.music.apple.com/us/album/stay-gold/1486711058?i=1486711059&mt=1&app=music&ls=1', s: 'https://open.spotify.com/track/2iTMff0H6Mu20KQrJyd3Gq', g: 'https://play.google.com/store/music/album?id=Buupp4hwfeypdxtromkd7wdabxa&tid=song-Tqqytd3ue4sza6bnvfabvo35j3e', a: 'https://music.amazon.co.jp/albums/B08162PKNG?trackAsin=B081614CPL&ref=dm_sh_6839-105e-dmcp-607d-ecab5&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //17 青春賦
    {j: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/23/13/ed/2313eda8-cb38-ff48-3dee-9ea56cfa41c9/KICM-92017.jpg/400x400bb.jpeg', t: '青春賦', r: 'November 15, 2019', i: 'https://geo.music.apple.com/us/album/stay-gold/1486711058?i=1486711059&mt=1&app=music&ls=1', s: 'https://open.spotify.com/track/2iTMff0H6Mu20KQrJyd3Gq', g: 'https://play.google.com/store/music/album?id=Buupp4hwfeypdxtromkd7wdabxa&tid=song-Tqqytd3ue4sza6bnvfabvo35j3e', a: 'https://music.amazon.co.jp/albums/B08162PKNG?trackAsin=B081614CPL&ref=dm_sh_6839-105e-dmcp-607d-ecab5&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //18 『Z』の誓い
    {j: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/23/13/ed/2313eda8-cb38-ff48-3dee-9ea56cfa41c9/KICM-92017.jpg/400x400bb.jpeg', t: '『Z』の誓い', r: 'November 15, 2019', i: 'https://geo.music.apple.com/us/album/stay-gold/1486711058?i=1486711059&mt=1&app=music&ls=1', s: 'https://open.spotify.com/track/2iTMff0H6Mu20KQrJyd3Gq', g: 'https://play.google.com/store/music/album?id=Buupp4hwfeypdxtromkd7wdabxa&tid=song-Tqqytd3ue4sza6bnvfabvo35j3e', a: 'https://music.amazon.co.jp/albums/B08162PKNG?trackAsin=B081614CPL&ref=dm_sh_6839-105e-dmcp-607d-ecab5&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //19 ザ・ゴールデン・ヒストリー
    {j: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/23/13/ed/2313eda8-cb38-ff48-3dee-9ea56cfa41c9/KICM-92017.jpg/400x400bb.jpeg', t: 'ザ・ゴールデン・ヒストリー', r: 'November 15, 2019', i: 'https://geo.music.apple.com/us/album/stay-gold/1486711058?i=1486711059&mt=1&app=music&ls=1', s: 'https://open.spotify.com/track/2iTMff0H6Mu20KQrJyd3Gq', g: 'https://play.google.com/store/music/album?id=Buupp4hwfeypdxtromkd7wdabxa&tid=song-Tqqytd3ue4sza6bnvfabvo35j3e', a: 'https://music.amazon.co.jp/albums/B08162PKNG?trackAsin=B081614CPL&ref=dm_sh_6839-105e-dmcp-607d-ecab5&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //20 BLAST!
    {j: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/23/13/ed/2313eda8-cb38-ff48-3dee-9ea56cfa41c9/KICM-92017.jpg/400x400bb.jpeg', t: 'BLAST!', r: 'November 15, 2019', i: 'https://geo.music.apple.com/us/album/stay-gold/1486711058?i=1486711059&mt=1&app=music&ls=1', s: 'https://open.spotify.com/track/2iTMff0H6Mu20KQrJyd3Gq', g: 'https://play.google.com/store/music/album?id=Buupp4hwfeypdxtromkd7wdabxa&tid=song-Tqqytd3ue4sza6bnvfabvo35j3e', a: 'https://music.amazon.co.jp/albums/B08162PKNG?trackAsin=B081614CPL&ref=dm_sh_6839-105e-dmcp-607d-ecab5&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //21 笑一笑～シャオイーシャオ～
    {j: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/23/13/ed/2313eda8-cb38-ff48-3dee-9ea56cfa41c9/KICM-92017.jpg/400x400bb.jpeg', t: '笑一笑～シャオイーシャオ～', r: 'November 15, 2019', i: 'https://geo.music.apple.com/us/album/stay-gold/1486711058?i=1486711059&mt=1&app=music&ls=1', s: 'https://open.spotify.com/track/2iTMff0H6Mu20KQrJyd3Gq', g: 'https://play.google.com/store/music/album?id=Buupp4hwfeypdxtromkd7wdabxa&tid=song-Tqqytd3ue4sza6bnvfabvo35j3e', a: 'https://music.amazon.co.jp/albums/B08162PKNG?trackAsin=B081614CPL&ref=dm_sh_6839-105e-dmcp-607d-ecab5&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //22 Re:Story
    {j: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/23/13/ed/2313eda8-cb38-ff48-3dee-9ea56cfa41c9/KICM-92017.jpg/400x400bb.jpeg', t: 'Re:Story', r: 'November 15, 2019', i: 'https://geo.music.apple.com/us/album/stay-gold/1486711058?i=1486711059&mt=1&app=music&ls=1', s: 'https://open.spotify.com/track/2iTMff0H6Mu20KQrJyd3Gq', g: 'https://play.google.com/store/music/album?id=Buupp4hwfeypdxtromkd7wdabxa&tid=song-Tqqytd3ue4sza6bnvfabvo35j3e', a: 'https://music.amazon.co.jp/albums/B08162PKNG?trackAsin=B081614CPL&ref=dm_sh_6839-105e-dmcp-607d-ecab5&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //23 あんた飛ばしすぎ!!
    {j: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/23/13/ed/2313eda8-cb38-ff48-3dee-9ea56cfa41c9/KICM-92017.jpg/400x400bb.jpeg', t: 'あんた飛ばしすぎ!!', r: 'November 15, 2019', i: 'https://geo.music.apple.com/us/album/stay-gold/1486711058?i=1486711059&mt=1&app=music&ls=1', s: 'https://open.spotify.com/track/2iTMff0H6Mu20KQrJyd3Gq', g: 'https://play.google.com/store/music/album?id=Buupp4hwfeypdxtromkd7wdabxa&tid=song-Tqqytd3ue4sza6bnvfabvo35j3e', a: 'https://music.amazon.co.jp/albums/B08162PKNG?trackAsin=B081614CPL&ref=dm_sh_6839-105e-dmcp-607d-ecab5&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //24 天国のでたらめ
    {j: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/23/13/ed/2313eda8-cb38-ff48-3dee-9ea56cfa41c9/KICM-92017.jpg/400x400bb.jpeg', t: '天国のでたらめ', r: 'November 15, 2019', i: 'https://geo.music.apple.com/us/album/stay-gold/1486711058?i=1486711059&mt=1&app=music&ls=1', s: 'https://open.spotify.com/track/2iTMff0H6Mu20KQrJyd3Gq', g: 'https://play.google.com/store/music/album?id=Buupp4hwfeypdxtromkd7wdabxa&tid=song-Tqqytd3ue4sza6bnvfabvo35j3e', a: 'https://music.amazon.co.jp/albums/B08162PKNG?trackAsin=B081614CPL&ref=dm_sh_6839-105e-dmcp-607d-ecab5&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //25 GODSPEED
    {j: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/23/13/ed/2313eda8-cb38-ff48-3dee-9ea56cfa41c9/KICM-92017.jpg/400x400bb.jpeg', t: 'GODSPEED', r: 'November 15, 2019', i: 'https://geo.music.apple.com/us/album/stay-gold/1486711058?i=1486711059&mt=1&app=music&ls=1', s: 'https://open.spotify.com/track/2iTMff0H6Mu20KQrJyd3Gq', g: 'https://play.google.com/store/music/album?id=Buupp4hwfeypdxtromkd7wdabxa&tid=song-Tqqytd3ue4sza6bnvfabvo35j3e', a: 'https://music.amazon.co.jp/albums/B08162PKNG?trackAsin=B081614CPL&ref=dm_sh_6839-105e-dmcp-607d-ecab5&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //26 Sweet Wanderer
    {j: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/23/13/ed/2313eda8-cb38-ff48-3dee-9ea56cfa41c9/KICM-92017.jpg/400x400bb.jpeg', t: 'Sweet Wanderer', r: 'November 15, 2019', i: 'https://geo.music.apple.com/us/album/stay-gold/1486711058?i=1486711059&mt=1&app=music&ls=1', s: 'https://open.spotify.com/track/2iTMff0H6Mu20KQrJyd3Gq', g: 'https://play.google.com/store/music/album?id=Buupp4hwfeypdxtromkd7wdabxa&tid=song-Tqqytd3ue4sza6bnvfabvo35j3e', a: 'https://music.amazon.co.jp/albums/B08162PKNG?trackAsin=B081614CPL&ref=dm_sh_6839-105e-dmcp-607d-ecab5&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    //27 stay gold
    {j: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/23/13/ed/2313eda8-cb38-ff48-3dee-9ea56cfa41c9/KICM-92017.jpg/400x400bb.jpeg', t: 'stay gold', r: 'November 15, 2019', i: 'https://geo.music.apple.com/us/album/stay-gold/1486711058?i=1486711059&mt=1&app=music&ls=1', s: 'https://open.spotify.com/track/2iTMff0H6Mu20KQrJyd3Gq', g: 'https://play.google.com/store/music/album?id=Buupp4hwfeypdxtromkd7wdabxa&tid=song-Tqqytd3ue4sza6bnvfabvo35j3e', a: 'https://music.amazon.co.jp/albums/B08162PKNG?trackAsin=B081614CPL&ref=dm_sh_6839-105e-dmcp-607d-ecab5&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
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

    // 曲の情報を埋め込む
    jacket.setAttribute('src', musicSet[todayNum].j);
    title.textContent = musicSet[todayNum].t;
    released.textContent = `Releadsed:  ${musicSet[todayNum].r}`;
    itunes.href = musicSet[todayNum].i;
    spotify.href = musicSet[todayNum].s;
    google.href= musicSet[todayNum].g;
    amazon.href= musicSet[todayNum].a;
  }

  setMusic();
}