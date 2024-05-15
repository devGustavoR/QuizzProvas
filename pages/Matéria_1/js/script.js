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
    "question": "1. Qual das alternativas apresenta apenas substantivos?",
    "answers": [
      { "answer": "Cantar, correr, amar.", "correct": false },
      { "answer": "Mesa, livro, árvore.", "correct": true },
      { "answer": "Cantar, amor, árvore.", "correct": false },
      { "answer": "Mesa, correr, livro.", "correct": false },
      { "answer": "Amar, livro, correr.", "correct": false }
    ]
  },
  {
    "question": "2. Identifique a classe morfológica da palavra destacada em negrito: \"Ontem, assisti a um filme **muito interessante**.\"",
    "answers": [
      { "answer": "Substantivo.", "correct": false },
      { "answer": "Adjetivo.", "correct": true },
      { "answer": "Pronome.", "correct": false },
      { "answer": "Verbo.", "correct": false },
      { "answer": "Preposição.", "correct": false }
    ]
  },
  {
    "question": "3. Escolha a alternativa que completa a frase corretamente: \"As crianças _____ brincar no parque.\"",
    "answers": [
      { "answer": "gostam de", "correct": true },
      { "answer": "gosta de", "correct": false },
      { "answer": "gostam", "correct": false },
      { "answer": "gosta", "correct": false },
      { "answer": "gostar", "correct": false }
    ]
  },
  {
    "question": "4. Qual das alternativas NÃO é característica da literatura épica medieval?",
    "answers": [
      { "answer": "Presença de heróis com qualidades sobre-humanas.", "correct": false },
      { "answer": "Temas religiosos e mitológicos.", "correct": false },
      { "answer": "Uso de linguagem rebuscada e culta.", "correct": false },
      { "answer": "Narrativa curta e com poucos personagens.", "correct": true },
      { "answer": "Exaltação de valores como honra, bravura e fidelidade.", "correct": false }
    ]
  },
  {
    "question": "5. Qual das obras a seguir NÃO é considerada um poema épico medieval?",
    "answers": [
      { "answer": "Canção de Roldão (França).", "correct": false },
      { "answer": "Nibelungenlied (Alemanha).", "correct": false },
      { "answer": "Beowulf (Inglaterra).", "correct": false },
      { "answer": "Eneida (Roma Antiga).", "correct": true },
      { "answer": "Divina Comédia (Itália).", "correct": false }
    ]
  },
  {
    "question": "6. Qual era o papel dos trovadores na sociedade medieval?",
    "answers": [
      { "answer": "Eram cavaleiros que lutavam em batalhas épicas.", "correct": false },
      { "answer": "Eram clérigos responsáveis pela administração da Igreja.", "correct": false },
      { "answer": "Eram poetas e músicos que compunham e cantavam cantigas sobre o amor, a guerra e outros temas.", "correct": true },
      { "answer": "Eram camponeses que trabalhavam nas terras dos senhores feudais.", "correct": false },
      { "answer": "Eram reis e rainhas que governavam os reinos medievais.", "correct": false }
    ]
  },
  {
    "question": "7. Qual dos autores a seguir é considerado um dos principais representantes do trovadorismo português?",
    "answers": [
      { "answer": "Dom Dinis.", "correct": true },
      { "answer": "Luís de Camões.", "correct": false },
      { "answer": "Fernando Pessoa.", "correct": false },
      { "answer": "José Saramago.", "correct": false },
      { "answer": "Eça de Queirós.", "correct": false }
    ]
  },
  {
    "question": "8. Qual das alternativas define melhor a prosa?",
    "answers": [
      { "answer": "Linguagem concisa e densa, com foco na musicalidade e ritmo.", "correct": false },
      { "answer": "Expressão direta e objetiva, utilizando frases curtas e linguagem coloquial.", "correct": true },
      { "answer": "Estrutura rígida, com versos e rimas predefinidos.", "correct": false },
      { "answer": "Linguagem simbólica e subjetiva, explorando emoções e sentimentos.", "correct": false },
      { "answer": "Uso de recursos literários como metáforas e personificações.", "correct": false }
    ]
  },
  {
    "question": "9. Qual das alternativas NÃO é uma característica da poesia?",
    "answers": [
      { "answer": "Linguagem concisa e expressiva, com uso de figuras de linguagem.", "correct": false },
      { "answer": "Estrutura livre ou com métrica e ritmo definidos.", "correct": false },
      { "answer": "Foco na emoção e na subjetividade, explorando sentimentos e ideias.", "correct": false },
      { "answer": "Narrativa linear e sequencial, com desenvolvimento de personagens e trama.", "correct": true },
      { "answer": "Utilização de recursos sonoros como rima, ritmo e aliteração.", "correct": false }
    ]
  },
  {
    "question": "10. O que é autoria literária?",
    "answers": [
      { "answer": "A capacidade de ler e interpretar textos literários de forma crítica.", "correct": false },
      { "answer": "A produção de textos literários originais, expressando a visão e a criatividade do autor.", "correct": true },
      { "answer": "A análise e o estudo de obras literárias, contextualizando-as em seu período histórico.", "correct": false },
      { "answer": "A tradução de obras literárias de um idioma para outro, preservando o sentido original.", "correct": false },
      { "answer": "A organização e a catalogação de obras literárias em bibliotecas e museus.", "correct": false }
    ]
  },
  {
    "question": "11. Qual dos autores a seguir é considerado um dos principais representantes da prosa modernista brasileira?",
    "answers": [
      { "answer": "Machado de Assis.", "correct": false },
      { "answer": "José de Alencar.", "correct": false },
      { "answer": "Mário de Andrade.", "correct": true },
      { "answer": "Olavo Bilac.", "correct": false },
      { "answer": "Gonçalves Dias.", "correct": false }
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