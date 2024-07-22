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
    "question": "1. Qual foi a principal causa das Cruzadas?",
    "answers": [
      { "answer": "A necessidade de abrir novas rotas comerciais para o Oriente.", "correct": false },
      { "answer": "A busca pela reunificação do Império Romano.", "correct": false },
      { "answer": "A reconquista de Jerusalém e de outros locais sagrados pelos cristãos.", "correct": true },
      { "answer": "A expansão do território do Sacro Império Romano-Germânico.", "correct": false }
    ]
  },
  {
    "question": "2. O que foi a Peste Negra e qual foi seu impacto na população europeia?",
    "answers": [
      { "answer": "Uma revolta camponesa que causou a morte de milhares de nobres.", "correct": false },
      { "answer": "Uma epidemia de varíola que exterminou 50% da população europeia.", "correct": false },
      { "answer": "Uma praga bubônica que dizimou cerca de um terço da população europeia.", "correct": true },
      { "answer": "Uma guerra civil que levou à fome e à morte de um quarto da população.", "correct": false }
    ]
  },
  {
    "question": "3. Qual foi a importância do Tratado de Verdun de 843?",
    "answers": [
      { "answer": "A criação do Império Bizantino.", "correct": false },
      { "answer": "A divisão do Império Carolíngio entre os três netos de Carlos Magno.", "correct": true },
      { "answer": "A unificação da Península Ibérica sob domínio muçulmano.", "correct": false },
      { "answer": "A aliança entre a França e a Inglaterra contra os vikings.", "correct": false }
    ]
  },
  {
    "question": "4. Qual foi a função das guildas na Idade Média?",
    "answers": [
      { "answer": "Garantir a paz entre os feudos rivais.", "correct": false },
      { "answer": "Regular a produção e comércio de mercadorias e proteger os interesses dos artesãos.", "correct": true },
      { "answer": "Organizar cruzadas e defender a fé cristã.", "correct": false },
      { "answer": "Manter a ordem e a segurança nas cidades medievais.", "correct": false }
    ]
  },
  {
    "question": "5. Quem foi Joana d'Arc e qual foi seu papel na Guerra dos Cem Anos?",
    "answers": [
      { "answer": "Uma nobre francesa que se aliou aos ingleses para conquistar a França.", "correct": false },
      { "answer": "Uma camponesa que liderou o exército francês e ajudou a reverter a situação na Guerra dos Cem Anos.", "correct": true },
      { "answer": "Uma rainha inglesa que promoveu a paz entre Inglaterra e França.", "correct": false },
      { "answer": "Uma mercenária que lutou por ambos os lados durante a guerra.", "correct": false }
    ]
  },
  {
    "question": "6. Qual foi o principal objetivo da Reconquista na Península Ibérica?",
    "answers": [
      { "answer": "Expulsar os vikings do norte da Europa.", "correct": false },
      { "answer": "Unir a Espanha e Portugal em um único reino.", "correct": false },
      { "answer": "Recuperar os territórios ibéricos ocupados pelos muçulmanos.", "correct": true },
      { "answer": "Converter os povos escandinavos ao cristianismo.", "correct": false }
    ]
  },
  {
    "question": "7. Qual era a base da economia feudal na Europa Medieval?",
    "answers": [
      { "answer": "Comércio marítimo e exploração de especiarias.", "correct": false },
      { "answer": "Agricultura de subsistência e produção artesanal.", "correct": true },
      { "answer": "Mineração de ouro e prata nas colônias.", "correct": false },
      { "answer": "Indústria têxtil e exportação de produtos manufaturados.", "correct": false }
    ]
  },
  {
    "question": "8. O que representava o sistema de vassalagem na sociedade feudal?",
    "answers": [
      { "answer": "A relação entre o rei e seus conselheiros.", "correct": false },
      { "answer": "A ligação entre os senhores feudais e seus servos, baseada em obrigações mútuas de proteção e serviço.", "correct": true },
      { "answer": "A aliança entre diferentes reinos para a defesa contra invasões bárbaras.", "correct": false },
      { "answer": "O acordo entre o clero e a nobreza para dividir o poder político.", "correct": false }
    ]
  },
  {
    "question": "9. Qual foi a principal contribuição do Império Carolíngio para a Europa Medieval?",
    "answers": [
      { "answer": "A construção de catedrais góticas.", "correct": false },
      { "answer": "A unificação temporária de grande parte da Europa Ocidental e a promoção da educação e cultura através do Renascimento Carolíngio.", "correct": true },
      { "answer": "A criação de um sistema bancário eficiente.", "correct": false },
      { "answer": "A invenção da imprensa.", "correct": false }
    ]
  },
  {
    "question": "10. Qual foi o impacto da Magna Carta de 1215 na Inglaterra medieval?",
    "answers": [
      { "answer": "A concessão de terras aos camponeses.", "correct": false },
      { "answer": "A limitação do poder do rei e a garantia de certos direitos aos nobres e, posteriormente, ao povo.", "correct": true },
      { "answer": "A unificação dos reinos ingleses e escoceses.", "correct": false },
      { "answer": "A separação da Igreja e do Estado.", "correct": false }
    ]
  }
  
  
  
  
    
    
  
   
  
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