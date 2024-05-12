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
    "question": "Qual dos grupos de substâncias NÃO é um tipo de lipídio?",
    "answers": [
      { "answer": "Carotenoides", "correct": false },
      { "answer": "Oligossacarídeos", "correct": true },
      { "answer": "Cerídeos", "correct": false },
      { "answer": "Esteroides", "correct": false },
      { "answer": "Fosfolipídios", "correct": false }
    ]
  },
  {
    "question": "Os triglicerídeos são um tipo de lipídio composto por:",
    "answers": [
      { "answer": "Uma molécula de glicerol e três ácidos graxos.", "correct": true },
      { "answer": "Uma molécula de glicerol e dois ácidos graxos.", "correct": false },
      { "answer": "Um ácido graxo e duas moléculas de glicerol.", "correct": false },
      { "answer": "Três moléculas de glicerol e um ácido graxo.", "correct": false }
    ]
  },
  {
    "question": "Qual dos itens a seguir NÃO é um tipo de lipídio?",
    "answers": [
      { "answer": "Ceras", "correct": false },
      { "answer": "Carboidratos", "correct": true },
      { "answer": "Fosfolipídios", "correct": false },
      { "answer": "Óleos", "correct": false }
    ]
  },
  {
    "question": "A principal função dos lipídios no corpo humano é:",
    "answers": [
      { "answer": "Fornecer energia imediata.", "correct": false },
      { "answer": "Armazenar energia a longo prazo.", "correct": true },
      { "answer": "Formar a membrana celular.", "correct": false },
      { "answer": "Transportar oxigênio no sangue.", "correct": false }
    ]
  },
  {
    "question": "Qual das alternativas a seguir NÃO é uma função das proteínas no corpo humano?",
    "answers": [
      { "answer": "Construção e reparo de tecidos.", "correct": false },
      { "answer": "Transporte de oxigênio no sangue.", "correct": true },
      { "answer": "Ação enzimática.", "correct": false },
      { "answer": "Armazenamento de energia a longo prazo.", "correct": true }
    ]
  },
  {
    "question": "As proteínas são compostas por moléculas menores chamadas:",
    "answers": [
      { "answer": "Ácidos nucleicos", "correct": false },
      { "answer": "Aminoácidos", "correct": true },
      { "answer": "Glicerol", "correct": false },
      { "answer": "Ácidos graxos", "correct": false }
    ]
  },
  {
    "question": "Em que tipo de alimentos podemos encontrar uma boa quantidade de proteínas?",
    "answers": [
      { "answer": "Frutas", "correct": false },
      { "answer": "Legumes", "correct": true },
      { "answer": "Carnes, ovos e laticínios", "correct": true },
      { "answer": "Massas e pães", "correct": false }
    ]
  },
  {
    "question": "Qual das alternativas a seguir NÃO é uma função das proteínas no corpo humano?",
    "answers": [
      { "answer": "Construção e reparo de tecidos.", "correct": false },
      { "answer": "Transporte de oxigênio no sangue.", "correct": true },
      { "answer": "Ação enzimática.", "correct": false },
      { "answer": "Armazenamento de energia a longo prazo.", "correct": true }
    ]
  },
  {
    "question": "Qual é a principal função das proteínas no corpo humano?",
    "answers": [
      { "answer": "Energia", "correct": false },
      { "answer": "Transporte de nutrientes", "correct": true },
      { "answer": "Reparo e crescimento dos tecidos", "correct": true },
      { "answer": "Armazenamento de vitaminas", "correct": false }
    ]
  },
  {
    "question": "Quais são os blocos de construção das proteínas?",
    "answers": [
      { "answer": "Monossacarídeos", "correct": false },
      { "answer": "Aminoácidos", "correct": true },
      { "answer": "Ácidos graxos", "correct": false },
      { "answer": "Nucleotídeos", "correct": false }
    ]
  },
  {
    "question": "O que são enzimas?",
    "answers": [
      { "answer": "Carboidratos encontrados em frutas", "correct": false },
      { "answer": "Proteínas que atuam como catalisadores em reações químicas biológicas", "correct": true },
      { "answer": "Lipídios presentes em óleos vegetais", "correct": false },
      { "answer": "Vitaminas encontradas em vegetais verdes", "correct": false }
    ]
  },
  {
    "question": "Qual é a função principal das enzimas no corpo humano?",
    "answers": [
      { "answer": "Armazenar energia", "correct": false },
      { "answer": "Transportar oxigênio", "correct": false },
      { "answer": "Acelerar as reações químicas", "correct": true },
      { "answer": "Regular a temperatura corporal", "correct": false }
    ]
  },
  {
    "question": "O que acontece com a forma da enzima quando ela está ativa em uma reação?",
    "answers": [
      { "answer": "Ela se desintegra", "correct": false },
      { "answer": "Ela permanece inalterada", "correct": false },
      { "answer": "Ela se transforma em outra molécula", "correct": false },
      { "answer": "Ela se dobra para se encaixar ao substrato", "correct": true }
    ]
  },
  {
    "question": "(Bônus) O local da molécula da enzima onde o substrato se liga é chamado de:",
    "answers": [
      { "answer": "Cofator", "correct": false },
      { "answer": "Centro ativo", "correct": true },
      { "answer": "Sítio alostérico", "correct": false },
      { "answer": "Apoenzima", "correct": false }
    ]
  },
  {
    "question": "(Bônus) Fatores que podem influenciar a atividade enzimática incluem:",
    "answers": [
      { "answer": "Temperatura, pH e concentração de substrato.", "correct": true },
      { "answer": "Apenas a temperatura.", "correct": false },
      { "answer": "Apenas o pH.", "correct": false },
      { "answer": "Apenas a concentração de substrato.", "correct": false }
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