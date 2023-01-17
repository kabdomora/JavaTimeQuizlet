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
// hides start button and makes quiz question container and timer visible

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

var index=-1;
var currentQuestion;


function nextQuestion() {
  index = index + 1;
  choices.innerHTML = ''; 

  if (index > allQuestions.length -1) {
    endQuiz();
  } else {    
    thisQuestion.innerHTML = allQuestions[index].question;       
    allQuestions[index].options.forEach((option, index) => {
      if (index >= 0) {
        const optionButtons = document.createElement('button');
        optionButtons.setAttribute('class', "btn choice");
        optionButtons.innerHTML = `${option}`;
        
        choices.appendChild(optionButtons);
      }
    });
  }
}
// increment through quiz questions

nextQuestion();


choices.addEventListener('click', function(event) {
  event.preventDefault();
  var element = event.target;

  if (element.classList.contains('choice') === true) {
    nextQuestion();
  }
})
// function to produce the next question on answer click


function endQuiz() {
  // write end quiz function here
  quiz.setAttribute("style", "display:none");
  timer.setAttribute("style", "display:none");
  // restart
  const restartButton = document.createElement('button');
  restartButton.setAttribute('class', "btn restart");
  restartButton.innerHTML = 'Start Over';
  highScores.appendChild(restartButton);
  // tally score
  // display score in list
}

highScores.addEventListener('click', function(event) {
  var element = event.target;

  if (element.classList.contains('restart') === true) {
    location.reload();
  }
})