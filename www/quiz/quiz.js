{
  // 要素を取得して、定数に代入
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > h5');
  const scoreMessage = document.querySelector('#result > p');
  const mask = document.getElementById('mask');

  const quizSet = shuffle([
    {q: '高城れにのメンバーカラーは？', c: ['紫', '赤', '黄', 'ピンク']},
    {q: '百田夏菜子のメンバーカラーは？', c: ['赤', '紫', '黄', 'ピンク']},
    {q: '玉井詩織のメンバーカラーは？', c: ['黄', '赤', 'ピンク', '紫']},
    {q: '佐々木彩夏のメンバーカラーは？', c: ['ピンク', '赤', '黄', '紫']},
    {q: '高城れにの誕生日は？', c: ['1993年6月21日', '1996年6月21日', '1993年5月21日', '1993年6月12日']},
    {q: '百田夏菜子の誕生日は？', c: ['1994年7月12日', '1997年7月12日', '1994年6月12日', '1994年7月21日']},
    {q: '玉井詩織の誕生日は？', c: ['1995年6月4日', '1998年6月4日', '1995年5月4日', '1995年4月6日']},
    {q: '佐々木彩夏の誕生日は？', c: ['1996年6月11日', '1999年6月11日', '1996年5月11日', '1996年11月6日']},
    {q: '高城れにの血液型は？', c: ['O型', 'A型', 'B型', 'AB型']},
    {q: '百田夏菜子の血液型は？', c: ['AB型', 'A型', 'B型', 'O型']},
    //ここまでで10問
    {q: '玉井詩織の血液型は？', c: ['A型', 'O型', 'B型', 'AB型']},
    {q: '佐々木彩夏の血液型は？', c: ['AB型', 'A型', 'B型', 'O型']},
    {q: '高城れにの飼ってる猫の名前は？', c: ['ゼット', 'イロハ', 'ピーチ','チロたん']},
    {q: '玉井詩織の飼ってる犬の名前は？', c: ['イロハ', 'ゼット', 'ピーチ', 'チロたん']},
    {q: '高城れにの出身地は？', c: ['神奈川県', '静岡県', '東京都', '千葉県']},
    {q: '百田夏菜子の出身地は？', c: ['静岡県', '神奈川県', '東京都', '千葉県']},
    {q: '玉井詩織の出身地は？', c: ['神奈川県', '静岡県', '東京都', '千葉県']},
    {q: '佐々木彩夏の出身地は？', c: ['神奈川県', '静岡県', '東京都', '千葉県']},
    {q: 'ももクロのリーダーは？', c: ['百田夏菜子', '高城れに', '玉井詩織', '佐々木彩夏']},
    {q: 'ももクロで一番年上なのは？', c: ['高城れに', '百田夏菜子', '玉井詩織', '佐々木彩夏']},
    //ここまでで20問
    {q: 'ももクロのキャッチフレーズは？', c: ['いま、会えるアイドル', '会いに来てくれるアイドル', '会いに行けるアイドル', 'いつでも会えるアイドル']},
    {q: '高城れにのキャッチフレーズは？', c: ['ももクロの鋼少女', 'ももクロのお笑い担当', 'ももクロの若大将', 'ももクロのアイドル']},
    {q: '百田夏菜子のキャッチフレーズは？', c: ['茶畑のシンデレラ', 'ももクロのアイドル', '小さな巨人', 'ももクロのリーダー']},
    {q: '玉井詩織のキャッチフレーズは？', c: ['ももクロの若大将', 'ももクロのアイドル', 'スーパーサブ', '食いしん坊']},
    {q: '佐々木彩夏のキャッチフレーズは？', c: ['ももクロのアイドル', '佐々木プロ', '茶畑のシンデレラ', 'スーパーアイドル']},
    {q: '百田夏菜子と玉井詩織の<br>ユニット名は？', c: ['ももたまい', '事務所に推され隊', '凸凹コンビ', 'カップル']},
    {q: '高城れにと佐々木彩夏の<br>ユニット名は？', c: ['山形', '事務所に推され隊', '凸凹コンビ', 'さくらんぼ']},
    {q: 'グループ名の由来は？', c: ['ピュアな女の子が、幸せを運びたい', '可愛い女の子が元気を与えたい', '明るい女の子がみんなを笑顔にしたい', '可愛い女の子がみんなを幸せにしたい']},
    {q: 'ももクロの結成日は？', c: ['2008年5月17日', '2010年5月17日', '2008年6月17日', '2009年5月10日']},
    {q: '現メンバーの中で一番最後に<br>加入したのは？', c: ['佐々木彩夏', '高城れに', '百田夏菜子', '玉井詩織']},
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