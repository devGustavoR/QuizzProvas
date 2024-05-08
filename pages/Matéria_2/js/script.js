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
    "question": "No modelo atômico atual, qual é a parte central do átomo que concentra a maior parte da massa e da carga positiva?",
    "answers": [
      {
        "answer": "Eletrosfera",
        "correct": false
      },
      {
        "answer": "Núcleo",
        "correct": true
      },
      {
        "answer": "Orbitais",
        "correct": false
      },
      {
        "answer": "Níveis de energia",
        "correct": false
      }
    ]
  },
  {
    "question": "Quais são as partículas subatômicas que compõem o núcleo atômico?",
    "answers": [
      {
        "answer": "Prótons e elétrons",
        "correct": false
      },
      {
        "answer": "Prótons e nêutrons",
        "correct": true
      },
      {
        "answer": "Nêutrons e elétrons",
        "correct": false
      },
      {
        "answer": "Prótons, nêutrons e elétrons",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual é a carga elétrica dos prótons, nêutrons e elétrons?",
    "answers": [
      {
        "answer": "Prótons (+), nêutrons (+), elétrons (-)",
        "correct": false
      },
      {
        "answer": "Prótons (+), nêutrons (0), elétrons (-)",
        "correct": false
      },
      {
        "answer": "Prótons (+), nêutrons (-), elétrons (+)",
        "correct": false
      },
      {
        "answer": "Prótons (0), nêutrons (+), elétrons (-)",
        "correct": true
      }
    ]
  },
  {
    "question": "O que é o número atômico de um elemento químico?",
    "answers": [
      {
        "answer": "O número total de prótons e nêutrons no núcleo do átomo.",
        "correct": false
      },
      {
        "answer": "O número de elétrons na eletrosfera do átomo.",
        "correct": false
      },
      {
        "answer": "A massa atômica do elemento.",
        "correct": false
      },
      {
        "answer": "O número de prótons no núcleo do átomo.",
        "correct": true
      }
    ]
  },
  {
    "question": "O que é o número de massa de um átomo?",
    "answers": [
      {
        "answer": "O número total de prótons e nêutrons no núcleo do átomo.",
        "correct": true
      },
      {
        "answer": "O número de elétrons na eletrosfera do átomo.",
        "correct": false
      },
      {
        "answer": "A massa atômica do elemento.",
        "correct": false
      },
      {
        "answer": "O número de nêutrons no núcleo do átomo.",
        "correct": false
      }
    ]
  },
  {
    "question": "De acordo com o Princípio de Aufbau, em qual ordem os elétrons preenchem os subníveis de um átomo?",
    "answers": [
      {
        "answer": "Em ordem crescente de energia, preenchendo um subnível antes de passar para o próximo.",
        "correct": true
      },
      {
        "answer": "Em ordem decrescente de energia, preenchendo o subnível mais energético primeiro.",
        "correct": false
      },
      {
        "answer": "Aleatoriamente, sem seguir uma ordem específica.",
        "correct": false
      },
      {
        "answer": "Preenchendo os subníveis com o mesmo número de elétrons antes de passar para o próximo.",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual o número máximo de elétrons que um subnível s pode acomodar?",
    "answers": [
      {
        "answer": "2",
        "correct": true
      },
      {
        "answer": "8",
        "correct": false
      },
      {
        "answer": "18",
        "correct": false
      },
      {
        "answer": "32",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual o número máximo de elétrons que uma camada (nível principal) pode acomodar?",
    "answers": [
      {
        "answer": "2n², onde n é o número da camada.",
        "correct": true
      },
      {
        "answer": "8n, onde n é o número da camada.",
        "correct": false
      },
      {
        "answer": "18n, onde n é o número da camada.",
        "correct": false
      },
      {
        "answer": "32n, onde n é o número da camada.",
        "correct": false
      }
    ]
  },
  {
    "question": "O que é o diagrama de Linus Pauling e qual a sua utilidade na representação da distribuição eletrônica?",
    "answers": [
      {
        "answer": "Uma tabela que organiza os elementos químicos por ordem crescente de número atômico.",
        "correct": false
      },
      {
        "answer": "Um gráfico que mostra a variação da energia potencial dos elétrons em diferentes níveis de energia.",
        "correct": false
      },
      {
        "answer": "Uma representação visual da distribuição dos elétrons nos subníveis e camadas de um átomo, utilizando setas e números.",
        "correct": true
      },
      {
        "answer": "Uma fórmula matemática que calcula o número de elétrons em cada camada de um átomo.",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual a importância da Tabela Periódica para a organização dos elementos químicos?",
    "answers": [
      {
        "answer": "Classifica os elementos por ordem alfabética, facilitando a busca por um elemento específico.",
        "correct": false
      },
      {
        "answer": "Agrupa os elementos com base em suas propriedades físicas, como ponto de fusão e ponto de ebulição.",
        "correct": false
      },
      {
        "answer": "Organiza os elementos de acordo com seu número atômico, revelando relações entre suas propriedades e estrutura atômica.",
        "correct": true
      },
      {
        "answer": "Fornece informações sobre a massa atômica de cada elemento, permitindo cálculos químicos precisos.",
        "correct": false
      }
    ]
  },
  {
    "question": "O que são grupos e períodos na Tabela Periódica?",
    "answers": [
      {
        "answer": "Grupos: Colunas verticais que reúnem elementos com propriedades químicas semelhantes devido à mesma configuração eletrônica na camada de valência. Períodos: Linhas horizontais que agrupam elementos com o mesmo número de camadas eletrônicas.",
        "correct": false
      },
      {
        "answer": "Grupos: Linhas horizontais que agrupam elementos com o mesmo número de camadas eletrônicas. Períodos: Colunas verticais que reúnem elementos com propriedades químicas semelhantes devido à mesma configuração eletrônica na camada de valência.",
        "correct": true
      },
      {
        "answer": "Grupos: Conjuntos de elementos com o mesmo número de prótons no núcleo. Períodos: Conjuntos de elementos com o mesmo número de nêutrons no núcleo.",
        "correct": false
      },
      {
        "answer": "Grupos: Famílias de elementos com propriedades físicas semelhantes. Períodos: Séries de elementos com propriedades químicas semelhantes.",
        "correct": false
      }
    ]
  },
  {
    "question": "Quais são os metais, ametais e semimetais na Tabela Periódica?",
    "answers": [
      {
        "answer": "Metais: Localizados à esquerda e no centro da tabela, geralmente são sólidos à temperatura ambiente, bons condutores de calor e eletricidade e apresentam maleabilidade e ductilidade. Ametais: Encontrados à direita da tabela, geralmente são não metálicos à temperatura ambiente, maus condutores de calor e eletricidade e podem ser frágeis ou quebradiços. Semimetais: Localizados na região diagonal entre metais e ametais, apresentam propriedades intermediárias entre os dois grupos, podendo ser bons ou maus condutores de eletricidade e calor, dependendo do elemento específico.",
        "correct": true
      },
      {
        "answer": "Metais: Localizados à direita da tabela, geralmente são sólidos à temperatura ambiente, bons condutores de calor e eletricidade e apresentam maleabilidade e ductilidade. Ametais: Encontrados à esquerda e no centro da tabela, geralmente são não metálicos à temperatura ambiente, maus condutores de calor e eletricidade e podem ser frágeis ou quebradiços. Semimetais: Localizados na região diagonal entre metais e ametais, apresentam propriedades intermediárias entre os dois grupos, podendo ser bons ou maus condutores de eletricidade e calor, dependendo do elemento específico.",
        "correct": false
      },
      {
        "answer": "Metais: Localizados em todo o corpo da tabela, não apresentam um padrão definido de propriedades. Ametais: Encontrados em pequenas quantidades, dispersos pela tabela, sem características físicas ou químicas marcantes. Semimetais: Não existem na Tabela Periódica, são elementos artificiais criados em laboratório.",
        "correct": false
      },
      {
        "answer": "Metais: Encontrados apenas nos grupos 1 e 2 da tabela, são facilmente identificáveis por suas propriedades físicas características. Ametais: Localizados em todos os grupos da tabela, exceto nos grupos 1 e 2, apresentam grande diversidade de propriedades. Semimetais: Representam um grupo muito pequeno de elementos, com apenas seis elementos no total, situados na região entre metais e ametais.",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual a função dos números atômicos e números de massa na Tabela Periódica?",
    "answers": [
      {
        "answer": "Número atômico: Indica a quantidade de prótons no núcleo do átomo e define a posição do elemento na tabela. Número de massa: Representa a soma do número de prótons e nêutrons no núcleo do átomo e fornece informações sobre a massa isotópica do elemento.",
        "correct": true
      },
      {
        "answer": "Número atômico: Informa a quantidade de elétrons na camada de valência do átomo e determina as propriedades químicas do elemento. Número de massa: Não possui função específica na Tabela Periódica.",
        "correct": false
      },
      {
        "answer": "Número atômico: É irrelevante para a organização da Tabela Periódica. Número de massa: Determina a posição do elemento na tabela e suas propriedades químicas.",
        "correct": false
      },
      {
        "answer": "Número atômico: Não possui relação com a Tabela Periódica. Número de massa: Indica o grupo e o",
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