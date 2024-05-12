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
    "question": "Qual das alternativas a seguir melhor resume a principal diferença entre a filosofia de Sócrates e a sofística?",
    "answers": [
      { "answer": "Sócrates buscava a verdade absoluta, enquanto os sofistas relativizavam o conhecimento.", "correct": true },
      { "answer": "Sócrates valorizava o diálogo e a maiêutica, enquanto os sofistas se preocupavam com a retórica e a persuasão.", "correct": true },
      { "answer": "Sócrates defendia a ética e a justiça, enquanto os sofistas se concentravam no sucesso individual e na fama.", "correct": true },
      { "answer": "Todas as alternativas acima estão corretas.", "correct": true }
    ]
  },
  {
    "question": "Qual das alternativas a seguir NÃO era um dos principais temas abordados por Sócrates em seus diálogos?",
    "answers": [
      { "answer": "Ética", "correct": false },
      { "answer": "Política", "correct": false },
      { "answer": "Metafísica", "correct": true },
      { "answer": "Matemática", "correct": false }
    ]
  },
  {
    "question": "Qual dos sofistas a seguir era conhecido por sua crítica à democracia ateniense?",
    "answers": [
      { "answer": "Protágoras", "correct": false },
      { "answer": "Górgias", "correct": false },
      { "answer": "Trasímaco", "correct": true },
      { "answer": "Hipocrato", "correct": false }
    ]
  },
  {
    "question": "Quem foi Sócrates na filosofia grega?",
    "answers": [
      { "answer": "Um sofista famoso por sua retórica persuasiva", "correct": false },
      { "answer": "Um filósofo que defendia o relativismo moral", "correct": false },
      { "answer": "Um mestre que buscava o conhecimento através do diálogo e da auto-reflexão.", "correct": true },
      { "answer": "Um político que governou Atenas por muitos anos", "correct": false }
    ]
  },
  {
    "question": "Qual foi a principal preocupação de Sócrates em suas discussões filosóficas?",
    "answers": [
      { "answer": "Descobrir a melhor forma de persuadir os outros.", "correct": false },
      { "answer": "Examinar a natureza da realidade física.", "correct": false },
      { "answer": "Buscar a verdade e a sabedoria através do autoconhecimento e da reflexão.", "correct": true },
      { "answer": "Promover sua própria carreira política.", "correct": false }
    ]
  },
  {
    "question": "Qual dos mitos gregos melhor ilustra a teoria da reminiscência de Platão, segundo a qual o conhecimento já está presente na alma desde o nascimento?",
    "answers": [
      { "answer": "O mito de Prometeu", "correct": false },
      { "answer": "O mito de Sísifo", "correct": false },
      { "answer": "O mito de Narciso", "correct": false },
      { "answer": "O mito da Caverna", "correct": true }
    ]
  },
  {
    "question": "Qual das alternativas a seguir NÃO é uma crítica à teoria política de Platão?",
    "answers": [
      { "answer": "A Cidade Ideal é um modelo utópico e irrealizável na prática.", "correct": true },
      { "answer": "A divisão da sociedade em classes sociais pode gerar desigualdade e conflitos.", "correct": false },
      { "answer": "A valorização excessiva da razão pode levar à repressão das emoções e à negação da individualidade.", "correct": false },
      { "answer": "A filosofia de Platão não oferece soluções concretas para os problemas sociais e políticos do mundo real.", "correct": false }
    ]
  },
  {
    "question": "Na Cidade Ideal de Platão, qual das alternativas a seguir melhor representa o papel dos filósofos-reis?",
    "answers": [
      { "answer": "Governar a cidade com sabedoria e justiça, buscando o bem comum.", "correct": true },
      { "answer": "Defender a cidade contra inimigos externos e manter a ordem interna.", "correct": false },
      { "answer": "Realizar trabalhos manuais e garantir a produção de bens materiais.", "correct": false },
      { "answer": "Buscar o conhecimento e a verdade, mas sem interferir na política.", "correct": false }
    ]
  },
  {
    "question": "Na visão de Platão, qual é o papel do filósofo na cidade ideal?",
    "answers": [
      { "answer": "Governar como um rei absoluto", "correct": false },
      { "answer": "Ser um líder militar", "correct": false },
      { "answer": "Guiar e aconselhar os governantes, compartilhando sua sabedoria filosófica", "correct": true },
      { "answer": "Ignorar assuntos políticos e se concentrar apenas em questões metafísicas", "correct": false }
    ]
  },
  {
    "question": "Qual dos seguintes filósofos NÃO foi aluno de Aristóteles na Academia de Atenas?",
    "answers": [
      { "answer": "Platão", "correct": true },
      { "answer": "Alexandre, o Grande", "correct": false },
      { "answer": "Teofrasto", "correct": false },
      { "answer": "Epicuro", "correct": true }
    ]
  },
  {
    "question": "Qual das alternativas a seguir NÃO é uma das áreas do conhecimento em que Aristóteles fez importantes contribuições?",
    "answers": [
      { "answer": "Lógica", "correct": false },
      { "answer": "Metafísica", "correct": false },
      { "answer": "Ética", "correct": false },
      { "answer": "Matemática", "correct": true }
    ]
  },
  {
    "question": "Qual das alternativas a seguir NÃO é uma característica fundamental da filosofia de Aristóteles?",
    "answers": [
      { "answer": "A busca pelo conhecimento através da observação e da experiência.", "correct": true },
      { "answer": "A valorização da razão como principal ferramenta para alcançar a verdade.", "correct": true },
      { "answer": "A crença na existência de um mundo ideal e perfeito além do mundo físico.", "correct": false },
      { "answer": "A importância da ética e da política para a construção de uma vida boa e justa.", "correct": true }
    ]
  },
  {
    "question": "(Bônus) Qual é o termo aristotélico que descreve a busca pela moderação e equilíbrio em todas as coisas?",
    "answers": [
      { "answer": "Virtude", "correct": true },
      { "answer": "Hedonismo", "correct": false },
      { "answer": "Epicurismo", "correct": false },
      { "answer": "Eudaimonia", "correct": false }
    ]
  },
  {
    "question": "(Bônus) Qual é a obra mais conhecida de Aristóteles que aborda uma ampla gama de temas, incluindo ética, política, metafísica e ciência?",
    "answers": [
      { "answer": "Ética a Nicômaco", "correct": true },
      { "answer": "A República", "correct": false },
      { "answer": "A Política", "correct": false },
      { "answer": "A Arte da Guerra", "correct": false }
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