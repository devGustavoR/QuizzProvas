// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// perguntas
const questions = [
  {
    "question": "1. Qual das alternativas a seguir apresenta o uso correto da apócope em um adjetivo espanhol?",
    "answers": [
      { "answer": "La niña bueno se porta muy bien.", "correct": false },
      { "answer": "El profesor malo nos dio una mala nota.", "correct": false },
      { "answer": "Tengo un amigo grande que vive en Madrid.", "correct": false },
      { "answer": "Me gusta la música antiguo.", "correct": false },
      { "answer": "Compré un libro nuevo ayer.", "correct": true }
    ]
  },
  {
    "question": "2. Em qual frase a apócope não deve ser utilizada?",
    "answers": [
      { "answer": "Hablé con un hombre alto y delgado.", "correct": false },
      { "answer": "Mi hermana es muy amable y cariñosa.", "correct": false },
      { "answer": "Compré una camisa azul claro.", "correct": true },
      { "answer": "El niño pequeño estaba jugando en el parque.", "correct": false },
      { "answer": "La película fue muy interesante.", "correct": false }
    ]
  },
  {
    "question": "3. Qual das alternativas completa corretamente a frase \"Voy __________ el parque con mis amigos\"?",
    "answers": [
      { "answer": "a", "correct": true },
      { "answer": "en", "correct": false },
      { "answer": "de", "correct": false },
      { "answer": "para", "correct": false },
      { "answer": "por", "correct": false }
    ]
  },
  {
    "question": "4. Escolha a preposição correta para completar a frase \"Salí de casa __________ ir al trabajo\":",
    "answers": [
      { "answer": "a", "correct": false },
      { "answer": "en", "correct": false },
      { "answer": "de", "correct": true },
      { "answer": "para", "correct": false },
      { "answer": "por", "correct": false }
    ]
  },
  {
    "question": "5. Escolha a alternativa que completa corretamente a frase \"Voy al cine con mis amigos\":",
    "answers": [
      { "answer": "a la", "correct": true },
      { "answer": "al la", "correct": false },
      { "answer": "de la", "correct": false },
      { "answer": "para el", "correct": false },
      { "answer": "por las", "correct": false }
    ]
  },
  {
    "question": "6. Qual das alternativas apresenta a contração correta para a frase \"Voy a comer\"?",
    "answers": [
      { "answer": "al", "correct": false },
      { "answer": "de", "correct": false },
      { "answer": "para", "correct": false },
      { "answer": "por", "correct": false },
      { "answer": "a", "correct": true }
    ]
  },
  {
    "question": "7. Qual alternativa completa corretamente a frase \"Este es mi libro\"?",
    "answers": [
      { "answer": "mío", "correct": true },
      { "answer": "mí", "correct": false },
      { "answer": "conmigo", "correct": false },
      { "answer": "me", "correct": false },
      { "answer": "m", "correct": false }
    ]
  },
  {
    "question": "8. Escolha a opção que apresenta o pronome possessivo correto para a frase \"Las llaves son suyas\":",
    "answers": [
      { "answer": "su", "correct": false },
      { "answer": "sus", "correct": true },
      { "answer": "suyo", "correct": false },
      { "answer": "suya", "correct": false },
      { "answer": "sí", "correct": false }
    ]
  },
  {
    "question": "9. Complete a frase \"Esta es la casa _____\":",
    "answers": [
      { "answer": "aquel", "correct": false },
      { "answer": "aquella", "correct": true },
      { "answer": "ese", "correct": false },
      { "answer": "esa", "correct": false }
    ]
  },
  {
    "question": "10. Qual alternativa apresenta o pronome demonstrativo neutro correto para a frase \"Eso me gusta mucho\"?",
    "answers": [
      { "answer": "éste", "correct": false },
      { "answer": "ésta", "correct": false },
      { "answer": "ése", "correct": true },
      { "answer": "ésa", "correct": true },
      { "answer": "aquello", "correct": true }
    ]
  },
              
];

// substituição do quizz para a primeira pergunta
function init() {
  // criar primeira pergunta
  createQuestion(0);
}

// cria uma pergunta
function createQuestion(i) {
  // limpar questão anterior
  const oldButtons = answerBox.querySelectorAll('button');
  oldButtons.forEach((btn) => {
    btn.remove();
  });

  // alterar texto da pergunta
  const questionText = question.querySelector('#question-text');
  const questionNumber = question.querySelector('#question-number');

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // inserir alternativas
  questions[i].answers.forEach((answer, i) => {
    // cria template botão quizz
    const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

    const letterBtn = answerTemplate.querySelector('.btn-letter');
    const answerText = answerTemplate.querySelector('.question-answer');

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute('correct-answer', answer['correct']);

    // remover hide e template class
    answerTemplate.classList.remove('hide');
    answerTemplate.classList.remove('answer-template');

    // inserir alternativa na tela
    answerBox.appendChild(answerTemplate);

    // inserir evento click no botão
    answerTemplate.addEventListener('click', function () {
      checkAnswer(this);
    });
  });

  // incrementar o número da questão
  actualQuestion++;
}

// verificar resposta do usuário
function checkAnswer(btn) {
  // seleciona todos os botões
  const buttons = answerBox.querySelectorAll('button');

  // verifica se resposta correta e add classe
  buttons.forEach((button) => {
    if (button.getAttribute('correct-answer') == 'true') {
      button.classList.add('correct-answer');

      // checa se usuário acertou a pergunta
      if (btn === button) {
        // incremento dos pontos
        points++;
      }
    } else {
      button.classList.add('wrong-answer');
    }
  });

  // exibir próxima pergunta
  nextQuestion();
}

// exibe a pŕoxima pergunta no quizz
function nextQuestion() {
  // timer para usuário ver as respostas
  setTimeout(function () {
    // verifica se ainda há perguntas
    if (actualQuestion >= questions.length) {
      // apresenta mensagem de sucesso
      showSuccessMessage();
      return;
    }

    createQuestion(actualQuestion);
  }, 1200);
}

// exibe a tela final
function showSuccessMessage() {
  hideOrShowQuizz();

  // trocar dados tela de sucesso
  // calcular score
  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector('#display-score span');
  displayScore.textContent = score.toString();

  //alterar o número de perguntas corretas
  const correctAnswers = document.querySelector('#correct-answers');
  correctAnswers.textContent = points;

  // alterar o total de perguntas
  const totalQuestions = document.querySelector('#questions-qty');
  totalQuestions.textContent = questions.length;
}

// mostra ou esonde o score
function hideOrShowQuizz() {
  quizzContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');
}

// reiniciar quizz
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', function () {
  //zerar jogo
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

// inicialização do quizz
init();