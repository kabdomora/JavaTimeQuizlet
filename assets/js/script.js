var startBtn = document.querySelector("#start");
var begin = document.querySelector(".card-start");
var quiz = document.querySelector(".card");
var timer = document.querySelector("#timer");
var thisQuestion = document.querySelector("#question");
var choices = document.querySelector("#choices");
var highScores = document.querySelector("#high-scores");



startBtn.addEventListener("click", function() {
	begin.setAttribute("style", "display:none");
	quiz.setAttribute("style", "display:block");
  quizTime();
});
// hides start button and makes quiz question container visible

let allQuestions = [
  {
    question: "Question 1",
    options: ["1", "2", "3", "4"],
    answer: "2",
  },
  {
    question: "Question 2",
    options: ["1", "2", "3", "4"],
    answer: "1",
  },
  {
    question: "Question 3",
    options: ["1", "2", "3", "4"],
    answer: "2",
  },
  {
    question: "Question 4",
    options: ["1", "2", "3", "4"],
    answer: "4",
  },
  {
    question: "Question 5",
    options: ["1", "2", "3", "4"],
    answer: "3",
  },
  {
    question: "Question 6",
    options: ["1", "2", "3", "4"],
    answer: "1",
  },
  {
    question: "Question 7",
    options: ["1", "2", "3", "4"],
    answer: "2",
  },
  {
    question: "Question 8",
    options: ["1", "2", "3", "4"],
    answer: "3",
  }
]

function quizTime() {
  var timeLeft = 120;

  var timeInterval = setInterval(() => {
    if (timeLeft > 1) {
      timer.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timer.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      timer.textContent = "";
      clearInterval(timeInterval);
      endQuiz();
    }
  }, 1000);
}
// timer increment

allQuestions.forEach((value, index) => {
  if (index>=0) {
    var que = value.question;
    
    thisQuestion.innerHTML = `${que}`;
  }

  // create the card container in the for each statement and append the question 
  // and associated answers
  // auto set the ID attribute for each card container to absolute block/none and
  // increment through the block/none as answers are selected.
})

function endQuiz() {
  // write end quiz function here
}