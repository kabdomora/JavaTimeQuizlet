var startBtn = document.querySelector("#start");
var begin = document.querySelector(".card-start");
var quiz = document.querySelector(".card");
var timer = document.querySelector("#timer");
var question = document.querySelector("#question");
var choices = document.querySelector("#choices");
var highScores = document.querySelector("#high-scores");



startBtn.addEventListener("click", function() {
	begin.setAttribute("style", "display:none");
	quiz.setAttribute("style", "display:block");
});
// hides start button and makes quiz question container visible

let allQuestions = [
  {
    question: "Question 1",
    options: ["1", "2", "3", "4"],
    answer: "2",
  }
  {
    question: "Question 2",
    options: ["1", "2", "3", "4"],
    answer: "1",
  }
  {
    question: "Question 3",
    options: ["1", "2", "3", "4"],
    answer: "2",
  }
  {
    question: "Question 4",
    options: ["1", "2", "3", "4"],
    answer: "4",
  }
  {
    question: "Question 5",
    options: ["1", "2", "3", "4"],
    answer: "3",
  }
  {
    question: "Question 6",
    options: ["1", "2", "3", "4"],
    answer: "1",
  }
  {
    question: "Question 7",
    options: ["1", "2", "3", "4"],
    answer: "2",
  }
  {
    question: "Question 8",
    options: ["1", "2", "3", "4"],
    answer: "3",
  }
]