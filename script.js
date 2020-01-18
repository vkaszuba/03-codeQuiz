var time = document.querySelector(".time");

var secondsLeft = 5;

// Start Quiz button, on click runs setTime function
const startQuizBtn = document.querySelector("#startQuiz");
startQuizBtn.addEventListener("click", setTime);

// Starts time countdown
function setTime() {
    
  var timerInterval = setInterval(function() {
    secondsLeft--;
    time.textContent = `Time Remaining: ${secondsLeft} seconds`;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      time.textContent = "Time has ended";
    }

  }, 1000);
}


