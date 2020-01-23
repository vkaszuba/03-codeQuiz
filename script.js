const timer = document.querySelector("#timer");
const quizEl = document.querySelector('#quiz');
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
      // Add display of score here
    }
  }, 1000);
};

function quizStart() {
  displayQuestion();
};

function displayQuestion() {

  let questList = questions[currentQuestion].choices.map((question)=>{
    return `<button class="answerBtn" onclick="answerQuestion('${question}')">${question}</button>`;
  })

  quiz.innerHTML = `${questions[currentQuestion].title}<br>${questList.join("")}`;
}


function answerQuestion(selection) {
  if (questions[currentQuestion].answer === selection) {
    score ++;
    secondsLeft += 5;
  } else {
    secondsLeft -= 5;
  }
  currentQuestion ++;

  if (currentQuestion === questions.length) {
    endGame();
    return;
  }
  displayQuestion();
}


function endGame() {
  quiz.innerHTML = `you got ${score} of ${questions.length}`;
}