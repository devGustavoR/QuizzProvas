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
    "question": "1. Qual cientista propôs a teoria da deriva continental no início do século XX?",
    "answers": [
      { "answer": "Charles Darwin", "correct": false },
      { "answer": "Alfred Wegener", "correct": true },
      { "answer": "Stephen Hawking", "correct": false },
      { "answer": "Albert Einstein", "correct": false },
      { "answer": "Isaac Newton", "correct": false }
    ]
  },
  {
    "question": "2. Que tipo de evidências sustentam a teoria da deriva continental?",
    "answers": [
      { "answer": "Observação de fósseis de animais e plantas em continentes distantes com características semelhantes.", "correct": true },
      { "answer": "Presença de cadeias montanhosas com formatos idênticos em diferentes continentes.", "correct": true },
      { "answer": "Descoberta de rochas com a mesma idade geológica em continentes hoje separados por oceanos.", "correct": true },
      { "answer": "Todas as alternativas acima.", "correct": true },
      { "answer": "Nenhuma das alternativas acima.", "correct": false }
    ]
  },
  {
    "question": "3. Qual foi o principal mecanismo proposto por Wegener para explicar o movimento dos continentes?",
    "answers": [
      { "answer": "Convecção do manto terrestre.", "correct": false },
      { "answer": "Expansão do assoalho oceânico.", "correct": false },
      { "answer": "Movimentação das placas tectônicas.", "correct": false },
      { "answer": "Ação das geleiras.", "correct": false },
      { "answer": "Erosão e sedimentação.", "correct": false }
    ]
  },
  {
    "question": "4. A teoria da deriva continental e a teoria das placas tectônicas, juntas, revolucionaram a compreensão da dinâmica da Terra. No entanto, ainda existem aspectos que não estão totalmente compreendidos. Cite um dos principais desafios científicos relacionados a essas teorias.",
    "answers": [
      { "answer": "Determinar a exata velocidade e direção do movimento das placas tectônicas em diferentes regiões do planeta.", "correct": true },
      { "answer": "Compreender os mecanismos que controlam a subducção das placas tectônicas e o destino do material rochoso subduzido.", "correct": true },
      { "answer": "Prever com precisão a ocorrência de terremotos, vulcões e outros desastres naturais relacionados à movimentação das placas tectônicas.", "correct": true },
      { "answer": "Desvendar a origem do campo magnético terrestre e sua relação com a movimentação do manto terrestre.", "correct": false },
      { "answer": "Reconstruir em detalhes a história das placas tectônicas e dos continentes ao longo de bilhões de anos.", "correct": true }
    ]
  },
  {
    "question": "5.A teoria da deriva continental, ao propor a fragmentação e o movimento de grandes massas continentais, gerou questionamentos sobre a rigidez do planeta. Como a teoria das placas tectônicas, que se baseia na deriva continental, resolve essa questão?",
    "answers": [
      { "answer": "Ao propor que os continentes \"flutuam\" sobre um manto terrestre plástico e em movimento, a teoria das placas tectônicas explica a rigidez da litosfera (crosta + parte superior do manto) e a flexibilidade do manto inferior.", "correct": true },
      { "answer": "Ao propor que os continentes se movimentam em decorrência da convecção do manto terrestre, a teoria das placas tectônicas explica a deformação gradual das rochas e a formação de novas rochas no processo.", "correct": false },
      { "answer": "Ao propor que os continentes se afastam uns dos outros devido à expansão do assoalho oceânico, a teoria das placas tectônicas explica a formação de cadeias montanhosas e fossas oceânicas.", "correct": false },
      { "answer": "Ao propor que os continentes se chocam uns contra os outros, a teoria das placas tectônicas explica a formação de terremotos e vulcões em áreas de convergência das placas.", "correct": false },
      { "answer": "Ao propor a existência de diferentes tipos de limites entre as placas tectônicas (convergentes, divergentes e transformantes), a teoria das placas tectônicas explica a variedade de processos geológicos que ocorrem na superfície terrestre.", "correct": false }
    ]
  },
  {
    "question": "6. A zona de Benioff é uma região específica da crosta terrestre onde ocorre um processo crucial para a dinâmica das placas tectônicas. Qual é esse processo?",
    "answers": [
      { "answer": "Formação de cadeias montanhosas por convergência continental.", "correct": false },
      { "answer": "Criação de novos oceanos por divergência das placas tectônicas.", "correct": false },
      { "answer": "Movimentação lateral das placas ao longo de falhas transformantes.", "correct": false },
      { "answer": "Subducção de uma placa tectônica sob a outra, com formação de fossas oceânicas e vulcanismo.", "correct": true },
      { "answer": "Afastamento das placas tectônicas e formação de dorsais oceânicas.", "correct": false }
    ]
  },
  {
    "question": "7. Qual das alternativas a seguir NÃO é um tipo de limite entre placas tectônicas?",
    "answers": [
      { "answer": "Convergente", "correct": false },
      { "answer": "Divergente", "correct": false },
      { "answer": "Transformante", "correct": false },
      { "answer": "Subducção", "correct": true },
      { "answer": "Convergência continental", "correct": true }
    ]
  },
  {
    "question": "8. Que processo geológico ocorre em uma zona de convergência continental, onde duas placas tectônicas se chocam e se comprimem?",
    "answers": [
      { "answer": "Formação de cadeias montanhosas e orogênese.", "correct": true },
      { "answer": "Criação de novos oceanos e expansão do assoalho oceânico.", "correct": false },
      { "answer": "Movimentação lateral das placas ao longo de falhas transformantes.", "correct": false },
      { "answer": "Afastamento das placas e formação de dorsais oceânicas.", "correct": false },
      { "answer": "Subducção de uma placa sob a outra, com formação de fossas oceânicas e vulcanismo.", "correct": false }
    ]
  },
  {
    "question": "9.Qual é a principal força motriz por trás do movimento das placas tectônicas?",
    "answers": [
      { "answer": "Ação das marés oceânicas sobre as placas.", "correct": false },
      { "answer": "Forças gravitacionais que atraem as placas para o centro da Terra.", "correct": false },
      { "answer": "Correntes de ar que sopram sobre a superfície terrestre.", "correct": false },
      { "answer": "Convecção do manto terrestre, gerada pelo calor interno do planeta.", "correct": true },
      { "answer": "Atrito entre as placas tectônicas e a superfície terrestre.", "correct": false }
    ]
  },
  {
    "question": "10. Imagine que você está explorando uma caverna e encontra uma rocha com textura vítrea e bolhas de ar em seu interior. Qual o tipo de rocha mais provável que você encontrou?",
    "answers": [
      { "answer": "Ígnea intrusiva", "correct": false },
      { "answer": "Ígnea extrusiva", "correct": true },
      { "answer": "Metamórfica", "correct": false },
      { "answer": "Sedimentar clástica", "correct": false },
      { "answer": "Sedimentar química", "correct": false }
    ]
  },
  {
    "question": "11. Durante uma aula de campo, você observa uma rocha composta por diferentes camadas de sedimentos, com restos de conchas e outros organismos marinhos. Que tipo de rocha é essa?",
    "answers": [
      { "answer": "Ígnea intrusiva", "correct": false },
      { "answer": "Ígnea extrusiva", "correct": false },
      { "answer": "Metamórfica", "correct": false },
      { "answer": "Sedimentar clástica", "correct": true },
      { "answer": "Sedimentar química", "correct": false }
    ]
  },
  {
    "question": "12.Qual processo geológico transforma rochas preexistentes em rochas metamórficas?",
    "answers": [
      { "answer": "Fusão e solidificação do magma", "correct": false },
      { "answer": "Resfriamento e solidificação do magma", "correct": false },
      { "answer": "Compactação e cimentação de sedimentos", "correct": false },
      { "answer": "Precipitação de minerais em soluções aquosas", "correct": false },
      { "answer": "Ação de calor e pressão no interior da Terra", "correct": true }
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