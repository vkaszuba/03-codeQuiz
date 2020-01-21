const time = document.querySelector(".time");

let secondsLeft = 5;
let showResults = "";




// Start Quiz button, on click runs setTime function
const startQuizBtn = document.querySelector("#startQuiz");
startQuizBtn.addEventListener("click", setTime, quizStart);

// Starts time countdown
function setTime() {

  var timerInterval = setInterval(function () {
    secondsLeft--;
    time.textContent = `Time Remaining: ${secondsLeft} seconds`;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      time.textContent = "Time has ended";
      // Add display of score here
    }

  }, 1000);
};

function quizStart() {



};



function choiceA() {


  return questions[0].choices[0];
}

const quizQuestion = document.querySelector("#quizQuestion");
const optionA = document.querySelector("#optionA");
const optionB = document.querySelector("#optionB");
const optionC = document.querySelector("#optionC");
const optionD = document.querySelector("#optionD");

// optionA.addEventListener("click", choiceA);
// optionB.addEventListener("click", choiceB);
// optionC.addEventListener("click", choiceC);
// optionD.addEventListener("click", choiceD);

// Maybe set to questions[i] so it can be changed per new button click
quizQuestion.textContent = questions[0].title;
optionA.textContent = questions[0].choices[0];
optionB.textContent = questions[0].choices[1];
optionC.textContent = questions[0].choices[2];
optionD.textContent = questions[0].choices[3];



// Adding time to correct answer, subtract for wrong
// Change first part to reflect user choice
if (questions[0].choices[2] === questions[0].answer) {
  secondsLeft = secondsLeft + 5;
  console.log("Correct");

} else {
  secondsLeft = secondsLeft - 5;
  console.log("Incorrect");

}
