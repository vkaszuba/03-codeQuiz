const time = document.querySelector(".time");

let secondsLeft = 5;
let showResults = "";


const questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    ///etc.
  ];



// Start Quiz button, on click runs setTime function
const startQuizBtn = document.querySelector("#startQuiz");
startQuizBtn.addEventListener("click", setTime, quizStart);

// Starts time countdown
function setTime() {
    
  var timerInterval = setInterval(function() {
    secondsLeft--;
    time.textContent = `Time Remaining: ${secondsLeft} seconds`;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      time.textContent = "Time has ended";
      // Add display of score here
    }

  }, 1000);
};

function quizStart() {



};



let choiceA = questions[1][0];
let choiceB = questions[1][1];
let choiceC = questions[1][2];
let choiceD = questions[1][3];

const quizQuestion = document.querySelector("#quizQuestion");
const optionA = document.querySelector("#optionA");
const optionB = document.querySelector("#optionB");
const optionC = document.querySelector("#optionC");
const optionD = document.querySelector("#optionD");

optionA.addEventListener("click", choiceA);
optionB.addEventListener("click", choiceB);
optionC.addEventListener("click", choiceC);
optionD.addEventListener("click", choiceD);


quizQuestion.textContent = questions[0].title;
optionA.textContent = questions[0].choices[0];
optionB.textContent = questions[0].choices[1];
optionC.textContent = questions[0].choices[2];
optionD.textContent = questions[0].choices[3];

// Adding time to correct answer, subtract for wrong
if (questions[0].choices[2] === questions[0].answer) {
    secondsLeft = secondsLeft + 5;
} else {
    secondsLeft = secondsLeft - 5;
}


console.log(questions[0].choices);
console.log(questions[1].choices);

console.log(questions[0].answer);
console.log(questions[0].choices[2]);
