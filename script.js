const timer = document.querySelector("#timer");
const quiz = document.querySelector('#quiz');
const highScores = document.querySelector('#highScores');
let secondsLeft = 5;
let currentQuestion = 0;
let score = 0;


// Start Quiz button, on click runs setTime function
const startQuizBtn = document.querySelector("#startQuiz");
startQuizBtn.addEventListener("click", setTime);
startQuizBtn.addEventListener("click", quizStart);

// Starts time countdown
function setTime() {

  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = `Time Remaining: ${secondsLeft} seconds`;
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      timer.textContent = "Time has ended";
    }
  }, 1000);
};

// Begins the quiz
function quizStart() {
  displayQuestion();
};

// Generates questions and answer option buttons
function displayQuestion() {

  let questList = questions[currentQuestion].choices.map((question) => {
    return `<button class="answerBtn" onclick="answerQuestion('${question}')">${question}</button>`;
  })

  quiz.innerHTML = `${questions[currentQuestion].title}<br>${questList.join("")}`;
}

// Adds or subtracts time depending on answer
// When all questions are answered, time ends
function answerQuestion(selection) {
  if (questions[currentQuestion].answer === selection) {
    score++;
    secondsLeft += 5;
  } else {
    secondsLeft -= 5;
  }
  currentQuestion++;

  if (currentQuestion === questions.length) {
    endGame();
    return;
  }
  displayQuestion();
}

// Displays your final score
function endGame() {
  quiz.innerHTML = `you got ${score} of ${questions.length}`;
  secondsLeft = 0;
  timer.textContent = "Time has ended";
}