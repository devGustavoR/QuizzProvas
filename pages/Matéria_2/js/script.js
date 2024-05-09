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
    "question": "Em que direção o Sol se põe em relação ao ponto cardeal oeste?",
    "answers": [
      {
        "answer": "Norte",
        "correct": false
      },
      {
        "answer": "Sul",
        "correct": false
      },
      {
        "answer": "Leste",
        "correct": false
      },
      {
        "answer": "Oeste",
        "correct": true
      }
    ]
  },
  {
    "question": "Se você estiver de frente para o nascer do sol, em que direção estará olhando?",
    "answers": [
      {
        "answer": "Oeste",
        "correct": false
      },
      {
        "answer": "Leste",
        "correct": true
      },
      {
        "answer": "Norte",
        "correct": false
      },
      {
        "answer": "Sul",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual é a latitude do Polo Norte?",
    "answers": [
      {
        "answer": "0°",
        "correct": false
      },
      {
        "answer": "23,5° N",
        "correct": false
      },
      {
        "answer": "66,5° N",
        "correct": false
      },
      {
        "answer": "90° N",
        "correct": true
      }
    ]
  },
  {
    "question": "O que é o meridiano de Greenwich?",
    "answers": [
      {
        "answer": "Um paralelo que corta a América do Sul.",
        "correct": false
      },
      {
        "answer": "Uma linha que marca a longitude 0°.",
        "correct": true
      },
      {
        "answer": "Um círculo máximo que passa pelos polos da Terra.",
        "correct": false
      },
      {
        "answer": "Um paralelo que divide a Terra em hemisfério norte e hemisfério sul.",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual é a diferença de tempo entre dois fusos horários consecutivos?",
    "answers": [
      {
        "answer": "30 minutos",
        "correct": false
      },
      {
        "answer": "1 hora",
        "correct": true
      },
      {
        "answer": "2 horas",
        "correct": false
      },
      {
        "answer": "3 horas",
        "correct": false
      }
    ]
  },
  {
    "question": "Se uma cidade está localizada no fuso horário UTC-5 e outra cidade está no fuso horário UTC+3, quantas horas de diferença existem entre elas?",
    "answers": [
      {
        "answer": "8 horas",
        "correct": true
      },
      {
        "answer": "10 horas",
        "correct": false
      },
      {
        "answer": "12 horas",
        "correct": false
      },
      {
        "answer": "16 horas",
        "correct": false
      }
    ]
  },
  {
    "question": "Se uma escala cartográfica é 1:100.000, o que isso significa?",
    "answers": [
      {
        "answer": "Cada unidade no mapa representa 100.000 unidades na realidade.",
        "correct": false
      },
      {
        "answer": "Cada unidade na realidade representa 100.000 unidades no mapa.",
        "correct": false
      },
      {
        "answer": "O mapa tem 100.000 vezes o tamanho da área real.",
        "correct": false
      },
      {
        "answer": "O mapa tem 1/100.000 do tamanho da área real.",
        "correct": true
      }
    ]
  },
  {
    "question": "Qual é a função principal da escala cartográfica em um mapa?",
    "answers": [
      {
        "answer": "Indicar a direção dos pontos cardeais.",
        "correct": false
      },
      {
        "answer": "Mostrar a altitude das montanhas e vales.",
        "correct": false
      },
      {
        "answer": "Representar a proporção entre as dimensões reais da Terra e as dimensões da representação no mapa.",
        "correct": true
      },
      {
        "answer": "Indicar a densidade populacional de uma região.",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual é a forma aproximada da Terra?",
    "answers": [
      {
        "answer": "Cilíndrica",
        "correct": false
      },
      {
        "answer": "Esférica",
        "correct": true
      },
      {
        "answer": "Cúbica",
        "correct": false
      },
      {
        "answer": "Oval",
        "correct": false
      }
    ]
  },
  {
    "question": "O que é uma órbita?",
    "answers": [
      {
        "answer": "O tempo que a Terra leva para completar uma rotação em torno de si mesma.",
        "correct": false
      },
      {
        "answer": "O movimento da Terra em torno do Sol.",
        "correct": false
      },
      {
        "answer": "A trajetória que um satélite ou planeta percorre ao redor de outro corpo celeste.",
        "correct": true
      },
      {
        "answer": "O período em que o Sol atinge sua maior altitude no céu.",
        "correct": false
      }
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