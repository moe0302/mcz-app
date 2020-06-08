{
  // 要素を取得して、定数に代入
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > h5');
  const scoreMessage = document.querySelector('#result > p');

  const quizSet = shuffle([
    {q: '高城れにのメンバーカラーは？', c: ['紫', '赤', '黄', 'ピンク']},
    {q: '百田夏菜子のメンバーカラーは？', c: ['赤', '紫', '黄', 'ピンク']},
    {q: '玉井詩織のメンバーカラーは？', c: ['黄', '赤', 'ピンク', '紫']},
    {q: '佐々木彩夏のメンバーカラーは？', c: ['ピンク', '赤', '黄', '紫']},
    {q: '高城れにの誕生日は？', c: ['1993年6月21日', '1995年6月4日', '1996年6月11日', '1994年7月12日']},
    {q: '百田夏菜子の誕生日は？', c: ['1994年7月12日', '1995年6月4日', '1996年6月11日', '1993年6月21日']},
    {q: '玉井詩織の誕生日は？', c: ['1995年6月4日', '1993年6月21日', '1996年6月11日', '1994年7月12日']},
    {q: '佐々木彩夏の誕生日は？', c: ['1996年6月11日', '1995年6月4日', '1993年6月21日', '1994年7月12日']},
    {q: '高城れにの血液型は？', c: ['O型', 'A型', 'B型', 'AB型']},
    {q: '百田夏菜子の血液型は？', c: ['AB型', 'A型', 'B型', 'O型']},
    {q: '玉井詩織の血液型は？', c: ['A型', 'O型', 'B型', 'AB型']},
    {q: '佐々木彩夏の血液型は？', c: ['AB型', 'A型', 'B型', 'O型']},
    {q: '高城れにの飼ってる猫の名前は？', c: ['ゼット', 'イロハ', 'ピーチ','チロたん']},     {q: '玉井詩織の飼ってる犬の名前は？', c: ['イロハ', 'ゼット', 'ピーチ', 'チロたん']},
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
    question.textContent = `Q${currentNum + 1}.${quizSet[currentNum].q}`;
   
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