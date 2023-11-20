let score = 0;

const scoreValue = document.querySelector(".score-value");
const questionText = document.querySelector(".question-text");
const proposalButtons = document.querySelectorAll(".proposal-btn");
const getButton = (proposal) => {
  for (let i = 0; i < 3; i++) {
    if (proposalButtons[i].innerText === proposal) return proposalButtons[i];
  }
};
const resetButtonsColor = () => {
  proposalButtons.forEach((btn) => (btn.style.backgroundColor = "#d9d9d9"));
};

const difficulties = ["easy", "medium", "hard"];

let questions = [];
let questionId = 0;
let difficultyLevel = 0;

proposalButtons.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    validateAnswer(e.target.innerText);
  })
);

function updateView(question, proposals) {
  const data = question.replace(/&quot/g, '"');
  questionText.innerText = data.replace(/[^\w\s?"']/gi, "");
  proposals.forEach((prop, index) => (proposalButtons[index].innerText = prop));
}

async function fetchQuestions(difficulty) {
  try {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple`
    );
    const data = await response.json();
    questions = [];
    data.results.forEach((element) => {
      questions.push({
        body: element.question,
        correct_answer: element.correct_answer,
        incorrect_answers: element.incorrect_answers,
      });
    });
  } catch (err) {
    console.log(err);
  }
}

function generateProposals(correct, incorrect) {
  let proposals = [];
  let randomInteger = Math.floor(Math.random() * 4);
  proposals[randomInteger] = correct;
  for (let i = 0; i < 4; i++) {
    if (i !== randomInteger) proposals[i] = incorrect.pop();
  }
  return proposals;
}

async function generateQuizQuestion(question) {
  let proposals = generateProposals(
    question.correct_answer,
    question.incorrect_answers
  );
  updateView(question.body, proposals);
}

const validateAnswer = (choosed_answer) => {
  getButton(choosed_answer).style.backgroundColor = "#CEA659";
  setTimeout(() => {
    console.log(proposalButtons);
    getButton(questions[questionId].correct_answer).style.backgroundColor =
      "#59CE8F";
  }, 1000);
  setTimeout(() => {
    if (
      choosed_answer.toLowerCase() ===
      questions[questionId].correct_answer.toLowerCase()
    ) {
      nextQuestion();
    } else {
      sessionStorage.setItem("score", `${score}`);
      window.location.href = "gameOver.html";
    }
  }, 3000);
};
const myScore = document.querySelector(".score p");
if (myScore) myScore.innerText = sessionStorage.getItem("score");

async function initGame() {
  await fetchQuestions("easy");
  generateQuizQuestion(questions[questionId]);
}

async function nextQuestion() {
  questionId++;
  difficultyLevel++;
  score++;
  scoreValue.innerText = score;
  resetButtonsColor();
  if (questionId < 10) {
    generateQuizQuestion(questions[questionId]);
  } else {
    questionId = 0;
    await fetchQuestions(difficulties[difficultyLevel]);
    generateQuizQuestion(questions[questionId]);
  }
}

initGame();
