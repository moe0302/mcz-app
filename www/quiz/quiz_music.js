{
  // 要素を取得して、定数に代入
  const question = document.getElementById('question');
  const jacket = document.getElementById('jacket');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > h5');
  const scoreMessage = document.querySelector('#result > p');
  const mask = document.getElementById('mask');

  const quizSet = shuffle([
    {q: 'このシングルのカップリング曲は？', j: '../images/kaitousyoujo.jpg', c: ['走れ！', 'オレンジノート', 'だいすき!!', 'キミとセカイ']},
    {q: 'このアルバムに収録されている<br>高城れにのソロ曲は？', j: '../images/allstars.jpg', c: ['津軽半島竜飛崎', '恋は暴れ鬼太鼓', 'まるごとれにちゃん', '『3文字』の宝物']},
    {q: 'このシングルはどれの挿入歌<br>として使われた？', j: '../images/tengokunodetarame.jpg', c: ['ドゥ・ユ・ワナ・ダンス？', '悪夢ちゃん', 'クレヨンしんちゃん', '美少女戦士セーラームーン']},
    {q: 'このソロ曲の中で何回<br>「あーりん！」とコールしている？', j: '../images/a-rin.jpg', c: ['78回', '60回', '52回', '105回']},
    {q: '青春賦はどの映画の主題歌<br>として使われた？', j: '../images/seisyunhu.jpg', c: ['幕が上がる', '最高の人生の見つけ方', 'シロメ', 'NINIFUNI']},
    {q: 'このベストアルバムの名前は？', j: '../images/momomojuu.jpg', c: ['桃も十、番茶も出花', 'MOMOIRO CLOVER Z', '入口のない出口', 'ZZ’ｓ']},
    {q: 'このアルバムのテーマは？', j: '../images/AMARANTHUS.jpg', c: ['起きてみる夢', '寝てみる夢', '生命の誕生', '死後の世界']},
    {q: 'このアルバムのテーマは？', j: '../images/hakkin.jpg', c: ['寝てみる夢', '起きてみる夢', '現実世界', 'ファンタジー']},
    {q: '高城れにの初ソロ曲の<br>タイトルは？', j: '../images/battleandromanceA.jpg',c: ['恋は暴れ鬼太鼓', '津軽半島竜飛崎', 'まるごとれにちゃん', 'Tail wind']},
    {q: '百田夏菜子の初ソロ曲の<br>タイトルは？', j: '../images/battleandromanceA.jpg',c: ['太陽とえくぼ', '渚のラララ', 'シングルベッドはせまいのです', '初恋']},
    //ここまでで10問
    {q: '玉井詩織の初ソロ曲の<br>タイトルは？', j: '../images/battleandromanceA.jpg',c: ['...愛ですか？', '涙目のアリス', 'シングルベッドはせまいのです', '少女人形']},
    {q: '佐々木彩夏の初ソロ曲の<br>タイトルは？', j: '../images/battleandromanceA.jpg', c: ['だって あーりんなんだもーん☆', 'あーりんは反抗期！', 'あーりんはあーりん♡', 'My Cherry Pie']},
    {q: '10周年記念ソングのタイトルは？', j: '../images/momomojuu.jpg', c: ['クローバーとダイヤモンド', '灰とダイヤモンド', 'The Diamond Four', 'ザ・ゴールデン・ヒストリー']},
    {q: '当時のメンバーが作詞し、<br>グループの原点となっている曲は？', j: '../images/iriguchi.jpg', c: ['あの空へ向かって', 'ももいろパンチ', '行くぜっ！怪盗少女', '全力少女']},
    {q: '高城れにの咳から始まる曲は？', j: '../images/saraba.jpg', c: ['黒い週末', 'CONTRADICTION', '仮想ディストピア', '夢の浮世に咲いてみな']},
    {q: 'サビの歌詞がほぼ『コ』だけ<br>の曲は？', j: '../images/pinky.jpg', c: ['ココ☆ナツ', 'ワニとシャンプー', 'コノウタ', 'BIONIC CHERRY']},
    {q: 'このアルバムの中の”けんかと<br>仲直り”をテーマにした曲は？', j: '../images/AMARANTHUS.jpg', c: ['武陵桃源なかよし物語', 'サボテンとリボン', '仏桑花', 'カントリーローズ -時の旅人-']},
    {q: '”ショー”をテーマにした<br>このアルバムのタイトルは？', j: '../images/MOMOIROCLOVERZ.jpg', c: ['MOMOIRO CLOVER Z', 'ロードショー', 'The show', 'AMARANTHUS']},
    {q: '「ワニとシャンプー」では最後<br>宿題は残り何枚になっている？', j: '../images/battleandromance.jpg', c: ['60枚', '50枚', '70枚', '30枚']},
    {q: '男祭り2015で太宰府天満宮にて<br>歌唱奉納をした曲は？', j: '../images/5thdimension.jpg', c: ['灰とダイヤモンド', 'クローバーとダイヤモンド', '白金の夜明け', '月と銀紙飛行船']},
    //ここまでで20問
    {q: 'グループ初の全編3拍子の曲は？', j: '../images/5thdimension.jpg',c: ['月と銀紙飛行船', '灰とダイヤモンド', '鋼の意思', '泣いてもいいんだよ']},
    {q: 'KISSの楽曲のカバーであり<br>初めて全編英語に挑戦した曲は？', j: '../images/yumenoukiyo.jpg', c: ['Rock and Roll All Night', 'SAMURAI SON', 'Moon Revenge', 'WE ARE BORN']},
    {q: '「あーりんは反抗期!」の中で禁止されていないものは？', j: '../images/allstars.jpg', c: ['自転車', 'プリクラ', 'カラオケ', 'マンガ']},
    {q: '「おぎゃー！」という産声から<br>始まる曲は？', j: '../images/AMARANTHUS.jpg', c: ['WE ARE BORN', 'デモンストレーション', 'イマジネーション', 'ROCK THE BOAT']},
    {q: 'ももクロが飛行機に乗って<br>日本一周する曲は？', j: '../images/battleandromance.jpg', c: ['ももクロのニッポン万歳！', 'ニッポン笑顔百景', '宙飛ぶ！お座敷列車', '堂々平和宣言']},
    {q: 'メンバーの名前やカラーが<br>歌詞に入っていない曲は？', j: '../images/momoclo.jpg', c: ['5The POWER', 'モノクロデッサン', 'ピンキージョーンズ', 'ミライボウル']},
    {q: '『ファービー』のイメージソングになった曲は？', j: '../images/saraba.jpg', c: ['Wee-Tee-Wee-Tee', 'Dream Wave', 'Link Link', 'みてみて☆こっちっち']},
    {q: 'ももたまいの曲ではないのは？', j: '../images/momotamai.jpg', c: ['太陽とえくぼ', 'シングルベッドはせまいのです', 'Ring the Bell', '夜明けのアモーレ']},
    {q: 'このアルバムでセルフリメイク<br>されていない曲は？', j: '../images/ZZs.jpg', c: ['ミライボウル', '全力少女', 'オレンジノート', 'DNA狂詩曲']},
    {q: 'この曲はどのライブのテーマソング？', j: '../images/nightmare.jpg', c: ['MomocloMania2019', 'MomocloMania2018', 'ももクロ夏のバカ騒ぎ2018', 'ももクロ夏のバカ騒ぎ2019']},
    //ここまでで30問
  ]);

  // 今何問目のクイズを解いているのかを変数で表現
  let currentNum = 0;

  // 選択肢を選択したかどうかを管理する変数
  let isAnswered;
  let score = 0;

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

  // クリックされた選択肢が正解かどうかを判定する関数
  function checkAnswer(li) {
    // isAnswered === trueの省略した書き方
    // すでに選択済みの場合、以降の処理をしない
    // つまり、1つしか選択できないようになる
    if (isAnswered) {
      return;
    }

    // 回答されたことにする
    isAnswered = true;
   // 選択肢の配列の最初を正解とした場合の条件分岐
    if (li.textContent === quizSet[currentNum].c[0]) {
      li.classList.add('correct');
      score++;
    } else {
      li.classList.add('wrong');
    }
    // 選択し終えたら、nextボタンを押せるようにする
    btn.classList.remove('disabled');
  }

  // 問題文をセットする関数
  function setQuiz() {
    isAnswered = false;

    // 質問文を埋め込む
    question.innerHTML = `Q${currentNum + 1}.${quizSet[currentNum].q}`;

    jacket.setAttribute('src', quizSet[currentNum].j);
   
    // choicesの最初の子要素がある限り、最初の子要素を消す、というループ
    // nextボタンを押した後に前問を残さないために記述する
    while (choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }

    // shuffle関数に問題の選択肢を入れてシャッフル
    // 元の配列をシャッフルしてしまうと正解の選択肢がバラバラになってしまう
    // そのため、スプレット演算子を使って配列のコピーを作り、コピーをシャッフルする
    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
    shuffledChoices.forEach(choice => {
      // liタグを作って、シャッフルした選択肢を順番に入れていく
      const li = document.createElement('li');
      li.textContent = choice;
      // クリックされた選択肢が正解か動画を判定する処理を行う
      li.addEventListener('click', () => {
        checkAnswer(li);
      });
      // ulタグ（id=choices)の子要素にliタグを追加する
      choices.appendChild(li);
    });

    // 10問目にたどり着いたら、ボタンをnextからShow Scoreに変更する
    if (currentNum === 9) {
      btn.textContent = 'Show Score';
    }
  }

  setQuiz();

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
        scoreMessage.innerHTML = '全問正解！<br>立派なモノノフです！';
      } else if (score <10 && score >= 7) {
        scoreMessage.innerHTML = 'おしい！<br>一人前のモノノフまであと一歩！';
      } else if (score < 7 && score >=4) {
        scoreMessage.innerHTML = 'まだまだ！<br>モノノフ見習いです';
      } else {
        scoreMessage.innerHTML = '残念…<br>ももクロのことを<br>もっと知ろう！';
      }
      
      result.classList.remove('hidden');
      mask.classList.remove('hidden');
    } else {
      // currentNumを１増やして、次のクイズをセットする
      currentNum++;
      setQuiz();
    }
  });
}