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
    "question": "Segundo Karl Marx, qual é a força motriz por trás das mudanças sociais na história?",
    "answers": [
      {
        "answer": "A ação de indivíduos heroicos.",
        "correct": false
      },
      {
        "answer": "O desenvolvimento das ideias e da cultura.",
        "correct": false
      },
      {
        "answer": "As leis do mercado e da livre concorrência.",
        "correct": false
      },
      {
        "answer": "As contradições e conflitos entre classes sociais.",
        "correct": true
      }
    ]
  },
  {
    "question": "Qual é o conceito central da análise marxista do capitalismo?",
    "answers": [
      {
        "answer": "A livre iniciativa e a propriedade privada.",
        "correct": false
      },
      {
        "answer": "A busca pelo lucro e pela acumulação de capital.",
        "correct": true
      },
      {
        "answer": "A harmonia entre os interesses do capital e do trabalho.",
        "correct": false
      },
      {
        "answer": "A exploração da classe trabalhadora pela classe capitalista.",
        "correct": false
      }
    ]
  },
  {
    "question": "De acordo com Marx, como a alienação do trabalho afeta os trabalhadores sob o capitalismo?",
    "answers": [
      {
        "answer": "Ela os torna mais livres e autônomos.",
        "correct": false
      },
      {
        "answer": "Ela os motiva a trabalhar mais arduamente.",
        "correct": false
      },
      {
        "answer": "Ela os transforma em meros apêndices das máquinas.",
        "correct": true
      },
      {
        "answer": "Ela os impede de se realizarem como seres humanos.",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual é o papel da luta de classes na visão de Marx sobre o futuro da sociedade?",
    "answers": [
      {
        "answer": "Levar à conciliação entre as classes sociais.",
        "correct": false
      },
      {
        "answer": "Manter a ordem social existente.",
        "correct": false
      },
      {
        "answer": "Levar à superação do capitalismo e à construção de uma sociedade sem classes.",
        "correct": true
      },
      {
        "answer": "Fortalecer o poder do Estado sobre a economia.",
        "correct": false
      }
    ]
  },
  {
    "question": "O que Marx propôs como alternativa ao capitalismo?",
    "answers": [
      {
        "answer": "Uma volta à sociedade feudal.",
        "correct": false
      },
      {
        "answer": "Uma ditadura do proletariado.",
        "correct": true
      },
      {
        "answer": "Uma sociedade baseada na propriedade privada dos meios de produção.",
        "correct": false
      },
      {
        "answer": "Uma sociedade comunista, baseada na propriedade social dos meios de produção e na livre associação dos trabalhadores.",
        "correct": false
      }
    ]
  },
  {
    "question": "A relação entre o indivíduo e a sociedade é frequentemente debatida por sociólogos e filósofos. De acordo com a perspectiva sociológica, como a sociedade influencia os indivíduos?",
    "answers": [
      {
        "answer": "Através da genética e da biologia dos indivíduos.",
        "correct": false
      },
      {
        "answer": "Através de suas crenças e valores pessoais únicos.",
        "correct": false
      },
      {
        "answer": "Através da imposição direta de normas e regras sociais.",
        "correct": false
      },
      {
        "answer": "Através de um processo de socialização, no qual os indivíduos internalizam normas, valores e expectativas sociais.",
        "correct": true
      }
    ]
  },
  {
    "question": "Em contrapartida, como os indivíduos podem influenciar a sociedade?",
    "answers": [
      {
        "answer": "Através de ações individuais que desafiam as normas sociais.",
        "correct": true
      },
      {
        "answer": "Através da criação de novas leis e políticas públicas.",
        "correct": false
      },
      {
        "answer": "Através da revolução social e da mudança do sistema político.",
        "correct": false
      },
      {
        "answer": "Através de todas as alternativas acima.",
        "correct": false
      }
    ]
  },
  {
    "question": "Alguns teóricos argumentam que a sociedade é mais importante do que o indivíduo, enquanto outros defendem a primazia do indivíduo. Qual das alternativas a seguir melhor representa a visão da Sociologia sobre essa dicotomia?",
    "answers": [
      {
        "answer": "A Sociologia sempre prioriza a análise do indivíduo em suas ações e decisões.",
        "correct": false
      },
      {
        "answer": "A Sociologia ignora o papel do indivíduo e foca apenas nas estruturas sociais.",
        "correct": false
      },
      {
        "answer": "A Sociologia reconhece a importância tanto do indivíduo quanto da sociedade, buscando entender como eles se inter-relacionam.",
        "correct": true
      },
      {
        "answer": "A Sociologia defende que a sociedade é a única realidade, e os indivíduos são apenas produtos dela.",
        "correct": false
      }
    ]
  },
  {
    "question": "A Sociologia surgiu na Europa em qual período histórico que foi marcado por intensas transformações políticas, econômicas e sociais?",
    "answers": [
      {
        "answer": "Renascimento",
        "correct": false
      },
      {
        "answer": "Idade Média",
        "correct": false
      },
      {
        "answer": "Antigo Regime",
        "correct": false
      },
      {
        "answer": "Revolução Industrial e Iluminismo",
        "correct": true
      }
    ]
  },
  {
    "question": "Além da Revolução Francesa, qual outro evento histórico contribuiu fortemente para o questionamento da ordem social tradicional e o surgimento da Sociologia?",
    "answers": [
      {
        "answer": "Guerras Napoleônicas",
        "correct": false
      },
      {
        "answer": "Reforma Protestante",
        "correct": false
      },
      {
        "answer": "Revolução Industrial",
        "correct": true
      },
      {
        "answer": "Absolutismo Monárquico",
        "correct": false
      }
    ]
  },
  {
    "question": "A visão de mundo iluminista, baseada na razão e no progresso, influenciou o desenvolvimento inicial da Sociologia. Qual dos seguintes objetivos NÃO estava entre os anseios dos primeiros sociólogos?",
    "answers": [
      {
        "answer": "Compreender as leis que governam a sociedade.",
        "correct": false
      },
      {
        "answer": "Analisar mitos e lendas para explicar a organização social.",
        "correct": true
      },
      {
        "answer": "Procurar soluções para os problemas sociais da época.",
        "correct": false
      },
      {
        "answer": "Desenvolver métodos científicos para estudar a sociedade.",
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