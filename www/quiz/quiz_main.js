{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');

  const quizSet = shuffle([
    {q: '高城れにの誕生日は？', c: ['1993年6月21日', '1995年6月4日', '1996年6月11日', '1994年7月12日']},
    {q: '高城れにのメンバーカラーは？', c: ['紫', '赤', '黄', 'ピンク']},
    {q: '高城れにの飼ってる猫の名前は？', c: ['ゼット', 'イロハ', 'ピーチ','チロたん']},
    {q: '玉井詩織の誕生日は？', c: ['1995年6月4日', '1993年6月21日', '1996年6月11日', '1994年7月12日']},
    {q: '佐々木彩夏の誕生日は？', c: ['1996年6月11日', '1995年6月4日', '1993年6月21日', '1994年7月12日']},
    {q: '百田夏菜子の誕生日は？', c: ['1994年7月12日', '1995年6月4日', '1996年6月11日', '1993年6月21日']},
    {q: '玉井詩織の飼ってる犬の名前は？', c: ['イロハ', 'ゼット', 'ピーチ', 'チロたん']},
    {q: '玉井詩織のメンバーカラーは？', c: ['黄', '赤', 'ピンク', '紫']},
    {q: '佐々木彩夏のメンバーカラーは？', c: ['ピンク', '赤', '黄', '紫']},
    {q: '百田夏菜子のメンバーカラーは？', c: ['赤', '紫', '黄', 'ピンク']},
  ]);
  let currentNum = 0;
  let isAnswered;
  let score = 0;

  // 引数に配列を渡すとその配列をシャッフルして返す
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }

  // 回答の正誤判定
  function checkAnswer(li) {
    // 回答されていたら処理を終わる
    if (isAnswered) {
      return;
    }

    // 回答されたことにする
    isAnswered = true;
    // 渡された引数のtextContentが配列の一番目の値と同じだったら正解
    if (li.textContent === quizSet[currentNum].c[0]) {
      li.classList.add('correct');
      score++;
    //そうでなければ不正解
    } else {
      li.classList.add('wrong');
    }

    btn.classList.remove('disabled');
  }


  function setQuiz() {
    isAnswered = false;

    question.textContent = quizSet[currentNum].q;
    console.log(quizSet[currentNum].q);
   
    while (choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }

    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
    shuffledChoices.forEach(choice => {
      const li = document.createElement('li');
      li.textContent = choice;
      li.addEventListener('click', () => {
        checkAnswer(li);
      });
      choices.appendChild(li);
    });

    if (currentNum === quizSet.length - 1) {
      btn.textContent = 'Show Score';
    }
  }

  setQuiz();

  btn.addEventListener('click', () => {
    if (btn.classList.contains('disabled')) {
      return;
    }
    btn.classList.add('disabled');

    if (currentNum === quizSet.length - 1) {
      scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
      result.classList.remove('hidden');
    } else {
      currentNum++;
      setQuiz();
    }
  });
}