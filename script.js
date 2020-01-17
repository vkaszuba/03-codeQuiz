var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");


const startQuizBtn = document.querySelector("#startQuiz");
startQuizBtn.addEventListener("click", setTime);

var secondsLeft = 5;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      timeEl.textContent = "Time has ended";
    }

  }, 1000);
}


