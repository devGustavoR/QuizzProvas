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
    "question": "Qual é a principal teoria sobre o significado das pinturas rupestres?",
    "answers": [
      { "answer": "Representações de rituais e crenças religiosas", "correct": true },
      { "answer": "Mapas mostrando os locais de caça e pesca", "correct": false },
      { "answer": "Registros de eventos históricos importantes", "correct": false },
      { "answer": "Formas de comunicação entre diferentes grupos", "correct": false },
      { "answer": "Todas as alternativas acima", "correct": false }
    ]
  },
  {
    "question": "Qual é a principal interpretação sobre a função das estatuetas de Vênus?",
    "answers": [
      { "answer": "Símbolos de fertilidade e culto à maternidade", "correct": true },
      { "answer": "Retratos de mulheres importantes da comunidade", "correct": false },
      { "answer": "Representantes de deusas da mitologia pré-histórica", "correct": false },
      { "answer": "Ornamentos decorativos para as casas das pessoas", "correct": false },
      { "answer": "Todas as alternativas acima", "correct": false }
    ]
  },
  {
    "question": "Qual era a principal função dos Zigurates?",
    "answers": [
      { "answer": "Templo religioso dedicado aos deuses mesopotâmicos, onde os sacerdotes realizavam rituais e oferendas.", "correct": true },
      { "answer": "Torre de observação astronômica para estudo dos astros e da criação de calendários.", "correct": false },
      { "answer": "Residência dos reis e sacerdotes da Mesopotâmia, símbolo do poder político e religioso.", "correct": false },
      { "answer": "Local de armazenamento de grãos e outros alimentos, garantindo a segurança da população.", "correct": false },
      { "answer": "Todas as alternativas acima, pois os Zigurates tinham diversas funções interligadas.", "correct": false }
    ]
  },
  {
    "question": "Qual era a principal função dos Selos Cilindricos?",
    "answers": [
      { "answer": "Identificar a propriedade de objetos e documentos, evitando fraudes e garantindo a segurança das transações.", "correct": true },
      { "answer": "Assinar contratos e outros documentos importantes, conferindo autenticidade e validade legal.", "correct": true },
      { "answer": "Contar histórias e mitos da cultura mesopotâmica, transmitindo valores, crenças e conhecimentos.", "correct": false },
      { "answer": "Amuletos para proteção contra o mal, utilizados como talismãs para afastar energias negativas.", "correct": false },
      { "answer": "Todas as alternativas acima, pois os Selos Cilindricos tinham diversas funções interligadas.", "correct": true }
    ]
  },  
  {
    "question": "Qual era a principal função dos hieróglifos?",
    "answers": [
      { "answer": "Registrar informações do dia a dia, como transações comerciais, listas de impostos e eventos históricos.", "correct": true },
      { "answer": "Escrever textos religiosos e sagrados, como os Livros dos Mortos e os hinos aos deuses.", "correct": true },
      { "answer": "Transmitir histórias, poemas e obras literárias, como 'O Conto do Camponês Eloquente' e 'As Aventuras de Sinuhé'.", "correct": true },
      { "answer": "Decorar monumentos e tumbas, como as paredes das pirâmides e os sarcófagos.", "correct": true },
      { "answer": "Todas as alternativas acima, pois os hieróglifos tinham diversas funções interligadas.", "correct": true }
    ]
  },
  {
    "question": "Qual era o significado principal da Esfinge de Gizé?",
    "answers": [
      { "answer": "Símbolo do poder e da força do faraó, representando sua autoridade sobre o reino.", "correct": true },
      { "answer": "Guardiã das tumbas e dos locais sagrados, protegendo-os de maus espíritos e invasores.", "correct": true },
      { "answer": "Representação da divindade Hator, deusa do amor, da beleza e da música.", "correct": false },
      { "answer": "Monumento religioso que servia como local de culto e adoração aos deuses egípcios.", "correct": false },
      { "answer": "Todas as alternativas acima, pois a Esfinge de Gizé tinha diversos significados interligados.", "correct": true }
    ]
  },
  {
    "question": "Quais características principais definem a arquitetura clássica grega e romana, e qual o seu impacto na construção de monumentos, templos e cidades?",
    "answers": [
      { "answer": "Simetria, proporção, uso de colunas, frontões, frisos e entalhes, buscando a harmonia e a beleza idealizadas. Influenciou a construção de edifícios públicos, templos, teatros e outros monumentos em todo o mundo ocidental.", "correct": true },
      { "answer": "Uso de materiais como pedra, mármore e madeira, com técnicas de construção avançadas, como arcos, abóbadas e cúpulas. Permitiu a construção de grandes estruturas, como o Panteão de Roma e o Partenon de Atenas.", "correct": true },
      { "answer": "Integração com a natureza, valorização da luz natural e da proporção humana. Os edifícios clássicos eram projetados em harmonia com o ambiente ao redor, criando espaços grandiosos e convidativos.", "correct": true },
      { "answer": "Influência de divindades e heróis mitológicos na decoração e na simbologia. Esculturas, pinturas e mosaicos retratavam histórias e mitos da cultura grega e romana, reforçando a religiosidade e os valores da época.", "correct": true },
      { "answer": "Todas as alternativas acima, pois a arquitetura clássica grega e romana se caracterizava por seus princípios estéticos, técnicas avançadas e simbolismo rico", "correct": true }
    ]
  },
  {
    "question": "Em qual região e período histórico a escrita surgiu pela primeira vez no mundo ocidental? Qual o impacto dessa descoberta na sociedade e na cultura?",
    "answers": [
      { "answer": "Mesopotâmia, entre 3500 e 3000 a.C. A escrita permitiu o registro de informações, leis, literatura e conhecimentos, impulsionando o desenvolvimento social, cultural e econômico.", "correct": true },
      { "answer": "Egito Antigo, por volta de 3200 a.C. A escrita hieroglífica era utilizada para fins religiosos, administrativos e literários, preservando a história e a cultura do povo egípcio.", "correct": true },
      { "answer": "Grécia Antiga, no século VIII a.C. O alfabeto grego, com suas 24 letras, possibilitou o desenvolvimento da literatura, da filosofia e da ciência, influenciando a civilização ocidental como um todo.", "correct": true },
      { "answer": "Roma Antiga, no século III a.C. O alfabeto latino, derivado do grego, foi fundamental para a expansão do Império Romano e para a comunicação em todo o Mediterrâneo.", "correct": true },
      { "answer": "Todas as alternativas acima, pois a escrita teve um papel crucial no desenvolvimento das civilizações ocidentais antigas.", "correct": true }
    ]
  },
  {
    "question": "A escultura arcaica grega apresenta características marcantes que a distinguem dos períodos posteriores. Quais são as principais características da escultura arcaica?",
    "answers": [
      { "answer": "Naturalismo: Representação realista da anatomia humana, com proporções perfeitas e movimentos fluidos.", "correct": false },
      { "answer": "Rigidez: Figuras estáticas e formais, com pouca expressividade facial e movimentos limitados.", "correct": true },
      { "answer": "Idealização: Representação de figuras heroicas e divinas com beleza idealizada, transcendendo a realidade humana.", "correct": true },
      { "answer": "Sorriso arcaico: Expressão facial característica, presente em muitas esculturas arcaicas, que transmite uma sensação de serenidade e distanciamento.", "correct": true },
      { "answer": "Todas as alternativas acima, pois a escultura arcaica apresenta uma combinação de rigidez, idealização e o enigmático sorriso arcaico.", "correct": true }
    ]
  },
  {
    "question": "A escultura clássica grega marca um período de grande desenvolvimento artístico e técnico. Quais são as principais inovações da escultura clássica em relação ao período arcaico?",
    "answers": [
      { "answer": "Naturalismo: As figuras se tornam mais realistas e expressivas, com proporções perfeitas, anatomia precisa e movimentos naturais.", "correct": true },
      { "answer": "Dinamismo: As esculturas clássicas transmitem movimento e ação, capturando momentos decisivos e expressando emoções com mais intensidade.", "correct": true },
      { "answer": "Contraposto: Técnica de escultura que cria uma sensação de equilíbrio e movimento através da contraposição de membros e linhas do corpo.", "correct": true },
      { "answer": "Idealização: A beleza idealizada continua presente, mas com maior naturalidade e expressividade, buscando a perfeição humana.", "correct": true },
      { "answer": "Todas as alternativas acima, pois a escultura clássica se caracteriza por um maior naturalismo, dinamismo, uso do contraposto e busca pela beleza idealizada.", "correct": true }
    ]
  },
  {
    "question": "A escultura helenística se caracteriza por uma grande variedade de estilos e temas. Quais são as principais características da escultura helenística e quais exemplos famosos podemos citar?",
    "answers": [
      { "answer": "Naturalismo extremo: Representação fiel da anatomia humana, com detalhes realistas de músculos, veias e rugas, buscando a perfeição técnica. Exemplo: 'Laocoonte e seus Filhos' de Agesandros, Polidoro e Atenodoro.", "correct": true },
      { "answer": "Dramaticidade e teatralidade: As esculturas helenísticas frequentemente retratam momentos dramáticos, emoções intensas e movimentos expressivos, utilizando recursos como o contraposto e a diagonal. Exemplo: 'Gálata Moribundo' de Epígono.", "correct": true },
      { "answer": "Realismo psicológico: Retrato de personagens com individualidade e personalidade, expressando sentimentos e estados de espírito complexos. Exemplo: 'Busto de Afrodite de Tralles'.", "correct": true },
      { "answer": "Influências de diversas culturas: A arte helenística incorporou elementos de culturas como egípcia, persa e oriental, criando um estilo eclético e rico em detalhes. Exemplo: 'Vênus de Willendorf'.", "correct": false },
      { "answer": "Todas as alternativas acima, pois a escultura helenística se caracteriza por sua diversidade de estilos, realismo extremo, dramaticidade, realismo psicológico e influências de diversas culturas.", "correct": true }
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