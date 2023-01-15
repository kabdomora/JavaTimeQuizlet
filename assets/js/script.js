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

