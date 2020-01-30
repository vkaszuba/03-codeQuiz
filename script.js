const timer = document.querySelector("#timer");
const quiz = document.querySelector('#quiz');
const highScores = document.querySelector('#highScores');
let secondsLeft = 5;
let currentQuestion = 0;
let score = 0;
let scoresOpen = false;

// Start Quiz button, on click runs setTime function
const startQuizBtn = document.querySelector("#startQuiz");
startQuizBtn.addEventListener("click", setTime);
startQuizBtn.addEventListener("click", quizStart);
let scoreToggleBtn = document.createElement("button");

scoreToggleBtn.innerText = "High Scores";
scoreToggleBtn.addEventListener("click", toggleScoreDisplay);
highScores.appendChild(scoreToggleBtn);


function toggleScoreDisplay() {
  if (scoresOpen) {
    highScores.classList.remove("open");
    let scoreItems = highScores.querySelectorAll(".scoreItem");
    scoreItems.forEach((scoreItem) => {
      highScores.removeChild(scoreItem);
    });
  } else {
    highScores.classList.add("open");
    let scoresList = JSON.parse(localStorage.getItem("highScores"));
    scoresList.forEach((score) => {
      let listItem = document.createElement('li');
      listItem.classList.add("scoreItem");
      listItem.innerHTML = `
        <span>${score.initial} -
        ${score.score}/${questions.length}</span>
      `;
      highScores.appendChild(listItem);
    });
  }
  scoresOpen = !scoresOpen;
}

// Starts time countdown
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
		timer.innerHTML = `<div>Time Remaining: ${secondsLeft} seconds <br>
		${score} of ${questions.length}</div>`;
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
  quiz.innerHTML = `
    <p>you got ${score} of ${questions.length}</p>
    <form onsubmit="handleScoreSave(event)">
      <input type="text" placeholder="Enter Initials"></input>
      <input type="submit" value="Save Score"></input>
    </form>
  `;
  secondsLeft = 0;
  timer.textContent = "Time has ended";
}
function handleScoreSave(event) {
  event.preventDefault();
  let highScores = localStorage.getItem("highScores");
  if (highScores) {
    let newScores = JSON.parse(highScores);
    newScores.push({initial: event.target[0].value, score: score});
    localStorage.setItem("highScores", JSON.stringify(newScores));
  } else {
    let newScores = [];
    newScores.push({initial: event.target[0].value, score: score});
    localStorage.setItem("highScores", JSON.stringify(newScores));
  }
}


