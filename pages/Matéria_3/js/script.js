// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd'];
let points = 0;
let actualQuestion = 0;

// perguntas
const questions = [
  {
    "question": "1. O que é coesão social?",
    "answers": [
      { "answer": "A capacidade de uma sociedade de ter regras rígidas e normas fixas.", "correct": false },
      { "answer": "A integração e a solidariedade entre os indivíduos de uma sociedade, resultando em harmonia e cooperação.", "correct": true },
      { "answer": "A competição entre grupos sociais para a obtenção de recursos.", "correct": false },
      { "answer": "A separação de uma sociedade em diferentes classes sociais e suas interações conflitantes.", "correct": false }
    ]
  },
  {
    "question": "2. Qual conceito Durkheim usou para descrever a forma de solidariedade típica das sociedades modernas?",
    "answers": [
      { "answer": "Solidariedade mecânica", "correct": false },
      { "answer": "Solidariedade orgânica", "correct": true },
      { "answer": "Solidariedade primária", "correct": false },
      { "answer": "Solidariedade secundária", "correct": false }
    ]
  },
  {
    "question": "3. O que caracteriza a solidariedade mecânica, segundo Durkheim?",
    "answers": [
      { "answer": "A interdependência e a especialização entre diferentes partes da sociedade.", "correct": false },
      { "answer": "A coesão social baseada na semelhança entre os indivíduos e na conformidade com normas tradicionais.", "correct": true },
      { "answer": "A divisão do trabalho e a interdependência complexa entre diferentes setores econômicos.", "correct": false },
      { "answer": "A integração social através de normas e leis formais estabelecidas pelo Estado.", "correct": false }
    ]
  },
  {
    "question": "4. Qual é a principal função das instituições sociais, de acordo com Durkheim?",
    "answers": [
      { "answer": "Garantir que todos os membros da sociedade tenham acesso a riquezas e propriedades.", "correct": false },
      { "answer": "Regular o comportamento dos indivíduos e promover a integração e a coesão social.", "correct": true },
      { "answer": "Criar normas e leis para controlar a vida privada dos cidadãos.", "correct": false },
      { "answer": "Facilitar o desenvolvimento econômico e tecnológico de uma sociedade.", "correct": false }
    ]
  },
  {
    "question": "5. Em seu estudo sobre o suicídio, qual tipo de suicídio Durkheim identificou como resultado de uma integração social excessiva?",
    "answers": [
      { "answer": "Suicídio egoísta", "correct": true },
      { "answer": "Suicídio altruísta", "correct": false },
      { "answer": "Suicídio anômico", "correct": false },
      { "answer": "Suicídio fatalista", "correct": false }
    ]
  },
  {
    "question": "6. Como Durkheim definiu o conceito de 'anomia'?",
    "answers": [
      { "answer": "A ausência de normas e regras sociais que leva a uma sensação de desorientação e falta de propósito.", "correct": true },
      { "answer": "A conformidade estrita com normas sociais estabelecidas e a resistência a mudanças.", "correct": false },
      { "answer": "A formação de novas normas sociais para substituir as antigas.", "correct": false },
      { "answer": "O aumento da burocracia e da regulamentação na vida social.", "correct": false }
    ]
  },
  {
    "question": "7. Qual foi a contribuição principal de Durkheim para a sociologia como disciplina?",
    "answers": [
      { "answer": "A introdução do conceito de darwinismo social e a aplicação da teoria da evolução à sociedade.", "correct": false },
      { "answer": "A análise das estruturas sociais e a aplicação do método científico para estudar fenômenos sociais, promovendo a sociologia como uma ciência objetiva.", "correct": true },
      { "answer": "O desenvolvimento de teorias psicológicas para explicar comportamentos individuais.", "correct": false },
      { "answer": "A criação de modelos econômicos para entender a dinâmica do mercado e suas relações com a sociedade.", "correct": false }
    ]
  },
  {
    "question": "8. Qual é o papel da religião na coesão social, segundo Durkheim?",
    "answers": [
      { "answer": "A religião serve principalmente para criar divisões entre diferentes grupos sociais.", "correct": false },
      { "answer": "A religião promove a integração social ao reforçar normas e valores compartilhados, criando um sentimento de pertencimento e identidade comum.", "correct": true },
      { "answer": "A religião é vista como um obstáculo para a coesão social e a modernização.", "correct": false },
      { "answer": "A religião tem um impacto mínimo na coesão social, sendo irrelevante para a organização da sociedade.", "correct": false }
    ]
  },
  {
    "question": "9. Como Durkheim explica a função da divisão do trabalho em uma sociedade moderna?",
    "answers": [
      { "answer": "A divisão do trabalho é vista como uma fonte de conflito e desigualdade social, que precisa ser eliminada.", "correct": false },
      { "answer": "A divisão do trabalho aumenta a especialização e a interdependência entre os indivíduos, contribuindo para a coesão social e a integração na sociedade.", "correct": true },
      { "answer": "A divisão do trabalho é responsável pelo enfraquecimento dos laços sociais e pela desintegração da coesão social.", "correct": false },
      { "answer": "A divisão do trabalho é uma prática exclusiva das sociedades primitivas e não tem relevância nas sociedades modernas.", "correct": false}
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
