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
    "question": "1º Qual o nome da ferramenta que, segundo Aristóteles, nos permite analisar argumentos e identificar falhas de raciocínio?",
    "answers": [
      { "answer": "Silogismo", "correct": true },
      { "answer": "Ética", "correct": false },
      { "answer": "Política", "correct": false },
      { "answer": "Categoria", "correct": false },
      { "answer": "Órgão", "correct": false }
    ]
  },  
  {
    "question": "2º O silogismo, um raciocínio dedutivo criado por Aristóteles, é composto por quais elementos?",
    "answers": [
      { "answer": "Felicidade, virtude e vício.", "correct": false },
      { "answer": "Premissa maior, premissa menor e conclusão.", "correct": true },
      { "answer": "Cidadão, justiça e bem comum.", "correct": false },
      { "answer": "Alma racional, alma vegetativa e alma sensível.", "correct": false },
      { "answer": "Forma e matéria.", "correct": false }
    ]
  },
  {
    "question": "3º As categorias de Aristóteles são conceitos universais que representam diferentes tipos de seres. Qual das alternativas a seguir não é uma categoria?",
    "answers": [
      { "answer": "Substância", "correct": false },
      { "answer": "Qualidade", "correct": false },
      { "answer": "Quantidade", "correct": false },
      { "answer": "Relação", "correct": false },
      { "answer": "Emoção", "correct": true }
    ]
  },
  {
    "question": "4º Para Aristóteles, qual é o objetivo final da vida humana?",
    "answers": [
      { "answer": "Alcançar a riqueza material.", "correct": false },
      { "answer": "Buscar a fama e o reconhecimento.", "correct": false },
      { "answer": "Viver uma vida de prazeres momentâneos.", "correct": false },
      { "answer": "Conquistar o poder político.", "correct": false },
      { "answer": "Alcançar a felicidade (eudaimonia) através da razão e da virtude.", "correct": true }
    ]
  },
  {
    "question": "5º O que Aristóteles considera como o caminho para a felicidade?",
    "answers": [
      { "answer": "A busca incessante por bens materiais.", "correct": false },
      { "answer": "A prática de atividades físicas e a alimentação balanceada.", "correct": false },
      { "answer": "O desenvolvimento de inteligência e habilidades cognitivas.", "correct": false },
      { "answer": "O cultivo de virtudes como justiça, coragem e temperança.", "correct": true },
      { "answer": "A obediência às regras e normas sociais.", "correct": false }
    ]
  },
  {
    "question": "6º O \"justo meio\" é um conceito central na ética aristotélica. O que ele significa?",
    "answers": [
      { "answer": "Buscar sempre o meio termo em todas as situações.", "correct": false },
      { "answer": "Encontrar um equilíbrio entre os prazeres e as dores da vida.", "correct": false },
      { "answer": "Agir de forma moderada, evitando os extremos e buscando o equilíbrio entre vícios e virtudes.", "correct": true },
      { "answer": "Seguir a lei da maioria, mesmo que ela não esteja de acordo com os seus princípios.", "correct": false },
      { "answer": "Negar a si mesmo os prazeres da vida para alcançar a iluminação espiritual.", "correct": false }
    ]
  },
  {
    "question": "7º Segundo Aristóteles, por que o homem é considerado um \"animal político\"?",
    "answers": [
      { "answer": "Porque ele é o único animal que possui linguagem articulada.", "correct": false },
      { "answer": "Porque ele é o único animal que pode andar ereto.", "correct": false },
      { "answer": "Porque ele é o único animal que possui raciocínio lógico.", "correct": false },
      { "answer": "Porque ele é feito para viver em sociedade e buscar o bem comum.", "correct": true },
      { "answer": "Porque ele é o único animal que possui consciência de si mesmo.", "correct": false }
    ]
  },
  {
    "question": "8º Qual das alternativas a seguir não é uma forma de governo analisada por Aristóteles?",
    "answers": [
      { "answer": "Monarquia", "correct": false },
      { "answer": "Democracia", "correct": false },
      { "answer": "Oligarquia", "correct": false },
      { "answer": "Teocracia", "correct": true },
      { "answer": "Tirania", "correct": false }
    ]
  },
  {
    "question": "9º Qual era a forma de governo ideal para Aristóteles? Por quê?",
    "answers": [
      { "answer": "A monarquia, pois um único líder forte garante a ordem e a justiça.", "correct": false },
      { "answer": "A democracia, pois permite que todos os cidadãos participem das decisões políticas.", "correct": false },
      { "answer": "A oligarquia, pois o governo de poucos garante a estabilidade e o progresso da sociedade.", "correct": false },
      { "answer": "Uma forma mista, combinando elementos de monarquia, democracia e oligarquia, buscando o equilíbrio entre os diferentes grupos sociais.", "correct": true },
      { "answer": "A anarquia, pois a ausência de governo permite que as pessoas sejam livres e vivam de acordo com seus próprios princípios.", "correct": false }
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