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
    "question": "Qual o tema central da Campanha da Fraternidade 2024?",
    "answers": [
      {
        "answer": "Fraternidade e Empatia",
        "correct": false
      },
      {
        "answer": "Fraternidade e Amizade Social",
        "correct": true
      },
      {
        "answer": "Fraternidade e Solidariedade",
        "correct": false
      },
      {
        "answer": "Fraternidade e Caridade",
        "correct": false
      }
    ]
  },    
  {
    "question": "Qual o lema da Campanha da Fraternidade 2024?",
    "answers": [
      {
        "answer": "Vós sois todos irmãos e irmãs",
        "correct": true
      },
      {
        "answer": "Ame ao próximo como a si mesmo",
        "correct": false
      },
      {
        "answer": "Fazei o bem, sempre que puderdes",
        "correct": false
      },
      {
        "answer": "Compartilhe o pão com quem tem fome",
        "correct": false
      }
    ]
  },  
  {
    "question": "Qual o objetivo principal da Campanha da Fraternidade 2024?",
    "answers": [
      {
        "answer": "Arrecadar fundos para a Igreja Católica",
        "correct": false
      },
      {
        "answer": "Promover a paz e a justiça social",
        "correct": false
      },
      {
        "answer": "Conscientizar a sociedade sobre a importância da fraternidade",
        "correct": true
      },
      {
        "answer": "Incentivar o diálogo inter-religioso",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual o desafio central da Campanha da Fraternidade 2024, que convida a superar a indiferença, a divisão e o confronto para construir a amizade social?",
    "answers": [
      {
        "answer": "Enfrentar a polarização, o ódio e a indiferença na sociedade brasileira.",
        "correct": true
      },
      {
        "answer": "Promover a fé cristã como única forma de alcançar a paz social.",
        "correct": false
      },
      {
        "answer": "Combater a pobreza e a fome no Brasil.",
        "correct": false
      },
      {
        "answer": "Defender a doutrina da Igreja Católica em todas as esferas da vida.",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual o tema central da Encíclica Fratelli Tutti?",
    "answers": [
      {
        "answer": "Combate à pobreza extrema",
        "correct": false
      },
      {
        "answer": "Importância da doutrina católica",
        "correct": false
      },
      {
        "answer": "Fraternidade e amizade social",
        "correct": true
      },
      {
        "answer": "Críticas a governos específicos",
        "correct": false
      }
    ]
  },
  {
    "question": "A Encíclica utiliza a expressão 'peregrinação da fraternidade'. O que essa metáfora sugere?",
    "answers": [
      {
        "answer": "Um caminho rápido e sem obstáculos",
        "correct": false
      },
      {
        "answer": "Uma jornada contínua e com desafios",
        "correct": true
      },
      {
        "answer": "Uma obrigação religiosa a ser cumprida",
        "correct": false
      },
      {
        "answer": "Uma conquista a ser alcançada com facilidade",
        "correct": false
      }
    ]
  },{
    "question": "A Fratelli Tutti enfatiza o diálogo com o 'diferente'. De que forma podemos colocar isso em prática?",
    "answers": [
      {
        "answer": "Evitando contato com pessoas de outras religiões.",
        "correct": false
      },
      {
        "answer": "Promovendo debates e conversas com pessoas de diferentes origens.",
        "correct": true
      },
      {
        "answer": "Ignorando opiniões contrárias à nossa.",
        "correct": false
      },
      {
        "answer": "Avaliando as pessoas apenas por sua aparência.",
        "correct": false
      }
    ]
  },
  {
    "question": "A Fratelli Tutti enfatiza o diálogo com o 'diferente'. De que forma podemos colocar isso em prática?",
    "answers": [
      {
        "answer": "Evitando contato com pessoas de outras religiões.",
        "correct": false
      },
      {
        "answer": "Promovendo debates e conversas com pessoas de diferentes origens.",
        "correct": true
      },
      {
        "answer": "Ignorando opiniões contrárias à nossa.",
        "correct": false
      },
      {
        "answer": "Avaliando as pessoas apenas por sua aparência.",
        "correct": false
      }
    ]
  },
  {
    "question": "A Encíclica usa o termo 'xenofobia'. O que ele significa?",
    "answers": [
      {
        "answer": "Amor incondicional a todos os seres humanos.",
        "correct": false
      },
      {
        "answer": "Medo e rejeição a pessoas de outras culturas.",
        "correct": true
      },
      {
        "answer": "Necessidade de caridade para os necessitados.",
        "correct": false
      },
      {
        "answer": "Dever de seguir a doutrina da Igreja Católica.",
        "correct": false
      }
    ]
  },
  {
    "question": "(Bônus) A Fratelli Tutti nos convida a cultivar a esperança. Como a esperança pode se tornar ação para um mundo mais justo?",
    "answers": [
      {
        "answer": "Pela doação de bens materiais a instituições de caridade.",
        "correct": false
      },
      {
        "answer": "Pela luta por direitos iguais e pela justiça social.",
        "correct": true
      },
      {
        "answer": "Pela condenação daqueles que pensam diferente.",
        "correct": false
      },
      {
        "answer": "Pela segregação de grupos sociais com diferentes culturas.",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual a base fundamental da ordem social, segundo a DSI?",
    "answers": [
      {
        "answer": "A organização econômica, jurídica, social e política.",
        "correct": true
      },
      {
        "answer": "Valores ético-religiosos e a fé.",
        "correct": false
      },
      {
        "answer": "A busca pelo poder e pela riqueza.",
        "correct": false
      },
      {
        "answer": "A lei do mais forte e a submissão aos poderosos.",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual o fundamento da dignidade da pessoa humana, segundo a DSI?",
    "answers": [
      {
        "answer": "A capacidade intelectual e a força física.",
        "correct": false
      },
      {
        "answer": "A posição social e a riqueza material.",
        "correct": false
      },
      {
        "answer": "A imagem e semelhança de Deus.",
        "correct": true
      },
      {
        "answer": "A lei do mais forte e a submissão aos poderosos.",
        "correct": false
      }
    ]
  },
  {
    "question": "O que a DSI define como solidariedade?",
    "answers": [
      {
        "answer": "Um sentimento de pena e compaixão pelos menos favorecidos.",
        "correct": false
      },
      {
        "answer": "Um compromisso firme e perseverante para promover o bem dos outros.",
        "correct": true
      },
      {
        "answer": "A busca pelo poder e pela riqueza individual.",
        "correct": false
      },
      {
        "answer": "A lei do mais forte e a submissão aos poderosos.",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual a relação entre o bem comum e a pessoa humana, segundo a DSI?",
    "answers": [
      {
        "answer": "O bem comum é superior à pessoa humana e deve ser priorizado.",
        "correct": false
      },
      {
        "answer": "A pessoa humana é superior ao bem comum e deve ter suas necessidades sempre atendidas.",
        "correct": false
      },
      {
        "answer": "O bem comum e a pessoa humana são interdependentes e devem ser buscados juntos.",
        "correct": true
      },
      {
        "answer": "A lei do mais forte e a submissão aos poderosos definem o bem comum.",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual o papel do Estado e da política no contexto do bem comum, segundo a DSI?",
    "answers": [
      {
        "answer": "O Estado e a política devem buscar o poder e a riqueza para si mesmos.",
        "correct": false
      },
      {
        "answer": "O Estado e a política não têm responsabilidade com o bem comum.",
        "correct": false
      },
      {
        "answer": "O Estado e a política devem promover o bem comum, buscando o bem de todos.",
        "correct": true
      },
      {
        "answer": "A lei do mais forte e a submissão aos poderosos definem o papel do Estado e da política.",
        "correct": false
      }
    ]
  },
  {
    "question": "(Bônus) De acordo com a DSI, qual princípio supera o capitalismo individualista e o marxismo coletivista?",
    "answers": [
      {
        "answer": "A lei do mais forte e a submissão aos poderosos.",
        "correct": false
      },
      {
        "answer": "A busca pelo poder e pela riqueza individual.",
        "correct": false
      },
      {
        "answer": "A solidariedade.",
        "correct": true
      },
      {
        "answer": "O bem comum.",
        "correct": false
      }
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