{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');

  const quizSet = shuffle([
    {q: '高城れにの誕生日は？', c: ['1993年6月21日', '1995年6月4日', '1996年6月11日']},
    {q: '高城れにのメンバーカラーは？', c: ['紫', '赤', '黄']},
    {q: '高城れにの飼ってる猫の名前は？', c: ['ゼット', 'イロハ', 'ピーチ']},
    {q: '玉井詩織の誕生日は？', c: ['1995年6月4日', '1993年6月21日', '1996年6月11日']},
    {q: '佐々木彩夏の誕生日は？', c: ['1996年6月11日', '1995年6月4日', '1993年6月21日']},
    {q: '百田夏菜子の誕生日は？', c: ['1994年7月12日', '1995年6月4日', '1996年6月11日']},
    {q: '玉井詩織の飼ってる犬の名前は？', c: ['イロハ', 'ゼット', 'ピーチ']},
    {q: '玉井詩織のメンバーカラーは？', c: ['黄', '赤', 'ピンク']},
    {q: '佐々木彩夏のメンバーカラーは？', c: ['ピンク', '赤', '黄']},
    {q: '百田夏菜子のメンバーカラーは？', c: ['赤', '紫', '黄']},
  ]);
  let currentNum = 0;
  let isAnswered;
  let score = 0;

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }

  function checkAnswer(li) {
    if (isAnswered) {
      return;
    }
    isAnswered = true;

    if (li.textContent === quizSet[currentNum].c[0]) {
      li.classList.add('correct');
      score++;
    } else {
      li.classList.add('wrong');
    }

    btn.classList.remove('disabled');
  }

  function setQuiz() {
    isAnswered = false;

    question.textContent = quizSet[currentNum].q;

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