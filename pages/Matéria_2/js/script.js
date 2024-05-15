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
    "question": "1. Qual período da Pré-História se caracteriza pelo uso de ferramentas rudimentares de pedra lascada e pela caça e coleta como principais atividades de subsistência?",
    "answers": [
      { "answer": "Paleolítico Superior", "correct": false },
      { "answer": "Paleolítico Inferior", "correct": true },
      { "answer": "Mesolítico", "correct": false },
      { "answer": "Neolítico", "correct": false },
      { "answer": "Idade dos Metais", "correct": false }
    ]
  },
  {
    "question": "2. Qual das alternativas a seguir NÃO é uma característica da arte rupestre paleolítica?",
    "answers": [
      { "answer": "Representação de animais selvagens, como bisões, mamutes e cavalos.", "correct": false },
      { "answer": "Figuras humanas estilizadas e com poucos detalhes.", "correct": true },
      { "answer": "Uso de cores vibrantes e técnicas complexas de pintura.", "correct": true },
      { "answer": "Temas relacionados à caça, à guerra e à vida cotidiana.", "correct": false },
      { "answer": "Localização em cavernas e abrigos rochosos.", "correct": false }
    ]
  },
  {
    "question": "3. Qual foi a principal transformação social e econômica que ocorreu durante a Revolução Neolítica?",
    "answers": [
      { "answer": "Adoção da agricultura e da domesticação de animais.", "correct": true },
      { "answer": "Desenvolvimento de ferramentas de metalurgia.", "correct": false },
      { "answer": "Surgimento das primeiras cidades e civilizações.", "correct": false },
      { "answer": "Expansão das sociedades nômades para novas regiões.", "correct": false },
      { "answer": "Aperfeiçoamento das técnicas de caça e coleta.", "correct": false }
    ]
  },
  {
    "question": "4. Qual dos monumentos megalíticos a seguir é considerado um dos mais importantes da Pré-História na Europa?",
    "answers": [
      { "answer": "Stonehenge (Inglaterra)", "correct": true },
      { "answer": "Carnac (França)", "correct": false },
      { "answer": "Göbekli Tepe (Turquia)", "correct": false },
      { "answer": "Moai (Ilha de Páscoa)", "correct": false },
      { "answer": "Machu Picchu (Peru)", "correct": false }
    ]
  },
  {
    "question": "5. Qual civilização da Antiguidade Oriental era conhecida por sua complexa organização social, avançados conhecimentos em matemática e astronomia, e pela construção de pirâmides e monumentos grandiosos?",
    "answers": [
      { "answer": "Mesopotâmia", "correct": false },
      { "answer": "Egito Antigo", "correct": true },
      { "answer": "Índia Antiga", "correct": false },
      { "answer": "China Antiga", "correct": false },
      { "answer": "Civilização Olmeca", "correct": false }
    ]
  },
  {
    "question": "6. Qual das alternativas a seguir NÃO é uma característica marcante da religião politeísta presente em diversas civilizações da Antiguidade Oriental?",
    "answers": [
      { "answer": "Adoração de vários deuses e deusas, cada um com seus próprios poderes e atributos.", "correct": false },
      { "answer": "Crença em uma vida após a morte e na importância dos rituais funerários.", "correct": false },
      { "answer": "Presença de uma classe sacerdotal responsável pela comunicação entre os deuses e os homens.", "correct": false },
      { "answer": "Adoção de um único deus como divindade suprema, criadora do universo.", "correct": true },
      { "answer": "Construção de templos e monumentos grandiosos em homenagem aos deuses.", "correct": false }
    ]
  },
  {
    "question": "7. Qual dos sistemas de escrita a seguir foi desenvolvido na Mesopotâmia e teve grande influência na criação de outros alfabetos ao redor do mundo?",
    "answers": [
      { "answer": "Hieróglifos", "correct": false },
      { "answer": "Cuneiforme", "correct": true },
      { "answer": "Ideogramas", "correct": false },
      { "answer": "Alfabeto fonético", "correct": false },
      { "answer": "Escrita silábica", "correct": false }
    ]
  },
  {
    "question": "8. Qual das alternativas a seguir NÃO é uma característica fundamental da Grécia Antiga?",
    "answers": [
      { "answer": "Adoção da democracia como sistema de governo, com participação dos cidadãos nas decisões políticas.", "correct": false },
      { "answer": "Desenvolvimento de uma rica cultura, incluindo filosofia, teatro, literatura, escultura e arquitetura.", "correct": false },
      { "answer": "Influência marcante do politeísmo, com crença em diversos deuses e deusas.", "correct": false },
      { "answer": "Expansão territorial por meio da conquista militar, formando um império poderoso.", "correct": true },
      { "answer": "Divisão da sociedade em classes sociais desiguais, com escravos na base da pirâmide social.", "correct": false }
    ]
  },
  {
    "question": "9. Qual foi o principal conflito militar entre gregos e persas durante a Antiguidade Clássica?",
    "answers": [
      { "answer": "Guerra do Peloponeso", "correct": false },
      { "answer": "Guerras Médicas", "correct": true },
      { "answer": "Batalha de Termópilas", "correct": false },
      { "answer": "Conquista de Esparta por Atenas", "correct": false },
      { "answer": "Expedição de Alexandre, o Grande", "correct": false }
    ]
  },
  {
    "question": "10. Qual era o objetivo principal das Olimpíadas na Grécia Antiga?",
    "answers": [
      { "answer": "Celebrar os deuses gregos e promover a fé religiosa.", "correct": false },
      { "answer": "Unificar as diferentes cidades-estados gregas em torno de um evento esportivo.", "correct": true },
      { "answer": "Estimular o desenvolvimento da cultura e da arte na Grécia Antiga.", "correct": false },
      { "answer": "Treinar soldados para as guerras que eram travadas entre as cidades-estados.", "correct": false },
      { "answer": "Promover o comércio e a interação entre os povos do Mediterrâneo.", "correct": false }
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