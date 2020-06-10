{
  // 要素を取得して、定数に代入
  const jacket = document.getElementById('jacket');
  const title = document.getElementById('title');
  const released = document.getElementById('released');
  const itunes = document.getElementById('itunes');
  const spotify = document.getElementById('spotify');
  const google = document.getElementById('google');
  const amazon = document.getElementById('amazon');

  const musicSet = shuffle([
    {j: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/23/13/ed/2313eda8-cb38-ff48-3dee-9ea56cfa41c9/KICM-92017.jpg/400x400bb.jpeg', t: 'stay gold', r: 'November 15, 2019', i: 'https://geo.music.apple.com/us/album/stay-gold/1486711058?i=1486711059&mt=1&app=music&ls=1', s: 'https://open.spotify.com/track/2iTMff0H6Mu20KQrJyd3Gq', g: 'https://play.google.com/store/music/album?id=Buupp4hwfeypdxtromkd7wdabxa&tid=song-Tqqytd3ue4sza6bnvfabvo35j3e', a: 'https://music.amazon.co.jp/albums/B08162PKNG?trackAsin=B081614CPL&ref=dm_sh_6839-105e-dmcp-607d-ecab5&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    {j: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/23/13/ed/2313eda8-cb38-ff48-3dee-9ea56cfa41c9/KICM-92017.jpg/400x400bb.jpeg', t: 'stay gold', r: 'November 15, 2019', i: 'https://geo.music.apple.com/us/album/stay-gold/1486711058?i=1486711059&mt=1&app=music&ls=1', s: 'https://open.spotify.com/track/2iTMff0H6Mu20KQrJyd3Gq', g: 'https://play.google.com/store/music/album?id=Buupp4hwfeypdxtromkd7wdabxa&tid=song-Tqqytd3ue4sza6bnvfabvo35j3e', a: 'https://music.amazon.co.jp/albums/B08162PKNG?trackAsin=B081614CPL&ref=dm_sh_6839-105e-dmcp-607d-ecab5&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    {j: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/23/13/ed/2313eda8-cb38-ff48-3dee-9ea56cfa41c9/KICM-92017.jpg/400x400bb.jpeg', t: 'stay gold', r: 'November 15, 2019', i: 'https://geo.music.apple.com/us/album/stay-gold/1486711058?i=1486711059&mt=1&app=music&ls=1', s: 'https://open.spotify.com/track/2iTMff0H6Mu20KQrJyd3Gq', g: 'https://play.google.com/store/music/album?id=Buupp4hwfeypdxtromkd7wdabxa&tid=song-Tqqytd3ue4sza6bnvfabvo35j3e', a: 'https://music.amazon.co.jp/albums/B08162PKNG?trackAsin=B081614CPL&ref=dm_sh_6839-105e-dmcp-607d-ecab5&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
    {j: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/23/13/ed/2313eda8-cb38-ff48-3dee-9ea56cfa41c9/KICM-92017.jpg/400x400bb.jpeg', t: 'stay gold', r: 'November 15, 2019', i: 'https://geo.music.apple.com/us/album/stay-gold/1486711058?i=1486711059&mt=1&app=music&ls=1', s: 'https://open.spotify.com/track/2iTMff0H6Mu20KQrJyd3Gq', g: 'https://play.google.com/store/music/album?id=Buupp4hwfeypdxtromkd7wdabxa&tid=song-Tqqytd3ue4sza6bnvfabvo35j3e', a: 'https://music.amazon.co.jp/albums/B08162PKNG?trackAsin=B081614CPL&ref=dm_sh_6839-105e-dmcp-607d-ecab5&musicTerritory=JP&marketplaceId=A1VC38T7YXB528'},
  ]);

  // 引数に配列を渡すとその配列をシャッフルして返す関数
  function shuffle(arr) {
    // arrは配列arrayの略。配列を引数にする
    // arr.length - 1 は配列の最後
    for (let i = arr.length - 1; i > 0; i--) {
      // １からi番目（配列の最後）までの要素からランダムで1つ選ぶ
      const j = Math.floor(Math.random() * (i + 1));
      // 選んだものと配列の最後を入れ替える
      [arr[j], arr[i]] = [arr[i], arr[j]];
      // これを配列が1つになるまで繰り返す
    }
    return arr;
  }

  // 曲をセットする関数
  function setMusic() {
    isAnswered = false;

    // 質問文を埋め込む
    jacket.setAttribute('src', musicSet[0].j);
    .textContent = `Q${currentNum + 1}.${quizSet[currentNum].q}`;
   
    // choicesの最初の子要素がある限り、最初の子要素を消す、というループ
    // nextボタンを押した後に前問を残さないために記述する
    while (choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }

  setMusic();

  btn.addEventListener('click', () => {
    if (btn.classList.contains('disabled')) {
      return;
    }
    // disabledが付いていない時にクリックしたらグレーに戻るようにする
    btn.classList.add('disabled');

    //10問目にたどり着くまで、次の問題を表示する条件分岐
    if (currentNum === 9) {
      // スコアを表示する
      scoreLabel.textContent = `Score: ${score} / 10`;
      if (score === 10) {
        scoreMessage.textContent = '全問正解！ 立派なモノノフです！';
      } else if (score <10 && score >= 7) {
        scoreMessage.textContent = 'おしい！';
      } else if (score < 7 && score >=4) {
        scoreMessage.textContent = 'まだまだ！';
      } else {
        scoreMessage.textContent = 'ももクロのことをもっと知ろう！';
      }
      
      result.classList.remove('hidden');
    } else {
      // currentNumを１増やして、次のクイズをセットする
      currentNum++;
      setQuiz();
    }
  });
}