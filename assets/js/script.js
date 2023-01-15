var startBtn = document.querySelector("#start");
var begin = document.querySelector(".card-start");
var quiz = document.querySelector(".card");


startBtn.addEventListener("click", function() {
	begin.setAttribute("style", "display:none");
	quiz.setAttribute("style", "display:block");
});
// hides start button and makes quiz question container visible


