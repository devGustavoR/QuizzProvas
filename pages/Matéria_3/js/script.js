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
    "question": "1. Qual é a principal diferença entre montanhas e planaltos?",
    "answers": [
      { "answer": "As montanhas são formadas por erosão, enquanto os planaltos são formados por deposição de sedimentos.", "correct": false },
      { "answer": "As montanhas são elevações naturais com altitudes superiores a 600 metros, enquanto os planaltos são áreas elevadas e relativamente planas com altitudes variáveis.", "correct": true },
      { "answer": "As montanhas são encontradas apenas nos continentes, enquanto os planaltos existem tanto em continentes quanto no fundo dos oceanos.", "correct": false },
      { "answer": "As montanhas são formadas por atividade vulcânica, enquanto os planaltos são formados por terremotos.", "correct": false }
    ]
  },
  {
    "question": "2. Qual é a definição de planície?",
    "answers": [
      { "answer": "Uma área extensa e elevada com encostas suaves.", "correct": false },
      { "answer": "Uma área plana ou suavemente ondulada com baixa altitude e geralmente formada por deposição de sedimentos.", "correct": true },
      { "answer": "Uma área de relevo acidentado com picos e vales profundos.", "correct": false },
      { "answer": "Uma área de relevo plano localizada no topo de montanhas.", "correct": false }
    ]
  },
  {
    "question": "3. Como são formadas as cadeias montanhosas?",
    "answers": [
      { "answer": "Pela erosão contínua de planícies ao longo de milhões de anos.", "correct": false },
      { "answer": "Pelo acúmulo de sedimentos trazidos por rios e ventos.", "correct": false },
      { "answer": "Pela colisão e movimentação das placas tectônicas que causam o levantamento da crosta terrestre.", "correct": true },
      { "answer": "Pelo derretimento de geleiras que esculpem o relevo ao seu redor.", "correct": false }
    ]
  },
  {
    "question": "4. Qual é a característica principal das depressões relativas?",
    "answers": [
      { "answer": "São áreas onde o relevo é mais elevado do que as áreas circundantes.", "correct": false },
      { "answer": "São áreas onde o relevo é plano e localizado ao nível do mar.", "correct": false },
      { "answer": "São áreas mais baixas que as regiões ao redor, mas não necessariamente abaixo do nível do mar.", "correct": true },
      { "answer": "São áreas com intensa atividade vulcânica e frequentes terremotos.", "correct": false }
    ]
  },
  {
    "question": "5. O que são dobramentos modernos e onde são comumente encontrados?",
    "answers": [
      { "answer": "Formações rochosas antigas que se encontram em áreas de planícies.", "correct": false },
      { "answer": "Formações geológicas resultantes da atividade vulcânica recente.", "correct": false },
      { "answer": "Cadeias montanhosas jovens formadas pelo movimento recente das placas tectônicas, encontradas em regiões como os Andes e o Himalaia.", "correct": true },
      { "answer": "Grandes bacias sedimentares formadas pela deposição de sedimentos ao longo de milhões de anos.", "correct": false }
    ]
  },
  {
    "question": "6. Qual é a principal diferença entre solo argiloso e solo arenoso?",
    "answers": [
      { "answer": "O solo argiloso é mais permeável à água do que o solo arenoso.", "correct": false },
      { "answer": "O solo argiloso tem partículas maiores e menos capacidade de reter água do que o solo arenoso.", "correct": false },
      { "answer": "O solo argiloso tem partículas menores e maior capacidade de reter água do que o solo arenoso.", "correct": true },
      { "answer": "O solo argiloso é composto principalmente de matéria orgânica, enquanto o solo arenoso é composto de minerais.", "correct": false }
    ]
  },
  {
    "question": "7. O que é a camada de húmus no solo e qual é sua importância?",
    "answers": [
      { "answer": "Uma camada de rocha abaixo do solo que fornece nutrientes às plantas.", "correct": false },
      { "answer": "Uma camada de água no solo que mantém a umidade para o crescimento das plantas.", "correct": false },
      { "answer": "Uma camada superficial rica em matéria orgânica decomposta, fundamental para a fertilidade do solo.", "correct": true },
      { "answer": "Uma camada de areia que ajuda na drenagem da água no solo.", "correct": false }
    ]
  },
  {
    "question": "8. Qual dos seguintes processos contribui para a formação do solo?",
    "answers": [
      { "answer": "O desmatamento e a queimada.", "correct": false },
      { "answer": "A erosão pelo vento e pela água.", "correct": true },
      { "answer": "A decomposição de materiais orgânicos e a meteorização de rochas.", "correct": true },
      { "answer": "A construção de infraestruturas urbanas.", "correct": false }
    ]
  },
  {
    "question": "9. O que é a capacidade de troca catiônica (CTC) do solo?",
    "answers": [
      { "answer": "A capacidade do solo de absorver e reter água.", "correct": false },
      { "answer": "A capacidade do solo de reter e liberar nutrientes essenciais através de íons.", "correct": true },
      { "answer": "A capacidade do solo de manter sua estrutura física.", "correct": false },
      { "answer": "A capacidade do solo de resistir à erosão.", "correct": false }
    ]
  },
  {
    "question": "10. Qual é a característica principal do solo laterítico encontrado em regiões tropicais?",
    "answers": [
      { "answer": "Alta fertilidade devido à abundância de nutrientes.", "correct": false },
      { "answer": "Baixa fertilidade devido à intensa lixiviação de nutrientes.", "correct": true },
      { "answer": "Alta capacidade de retenção de água devido ao alto teor de argila.", "correct": false },
      { "answer": "Grande quantidade de matéria orgânica acumulada na superfície.", "correct": false }
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