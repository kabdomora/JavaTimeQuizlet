var startBtn = document.querySelector("#start");
var begin = document.querySelector(".card-start");
var quiz = document.querySelector(".card");
var timer = document.querySelector("#timer");
var timerText = document.querySelector("#timerText");
var timeLeft = 120;
var secondsLeft;
var thisQuestion = document.querySelector("#question");
var choices = document.querySelector("#choices");
var highScores = document.querySelector("#high-scores");
var hScard = document.querySelector('.high-scores');
var scores = [];
var quizStatus = true;

function init() {
  var storedScores = JSON.parse(localStorage.getItem("scores"));

  if (storedScores !== null) {
    scores = storedScores;
  }

  nextQuestion();
}


startBtn.addEventListener("click", function() {
	begin.setAttribute("style", "display:none");
	quiz.setAttribute("style", "display:block");
  quizTime();
  quizStatus = true;
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




var index=-1;
// increment through quiz questions
function nextQuestion() {
  index = index + 1;
  choices.innerHTML = ''; 

  if (index > allQuestions.length -1) {
    endQuiz();
    quizStatus = false;
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

let score = 5;
// function to produce the next question on answer click
choices.addEventListener('click', function(event) {
  event.preventDefault();
  var element = event.target;

  if (element.classList.contains('choice') === true) {
    var thisAnswer = allQuestions[index].answer;
    if(element.innerHTML === thisAnswer) {
      score = score + 1
      alert('Correct!');
    } else {
      timeLeft = timeLeft - 20;
      alert(`Wrong! The correct answer is ${thisAnswer}`)
    }
    nextQuestion();
  }
})

// timer increment 
function quizTime() {

  var timeInterval = setInterval(() => {
    if (timeLeft > 1 && quizStatus) {
      timer.textContent = timeLeft;
      timeLeft--;
      if(!secondsLeft) {
        secondsLeft = document.createElement('p');
        secondsLeft.textContent = ' seconds left';
        timerText.appendChild(secondsLeft);
      }
    } else if (timeLeft === 1 && quizStatus) {
      timer.textContent = timeLeft;
      timeLeft--;
      if(secondsLeft) {
        secondsLeft.textContent = ' second left';
      } else {
        secondsLeft = document.createElement('p');
        secondsLeft.textContent = ' second left';
        timerText.appendChild(secondsLeft);
      }
    } else {
      secondsLeft.remove();
      timer.innerHTML = "Out of Time!";
      clearInterval(timeInterval);
      endQuiz();
      quizStatus = false;
    }
  }, 1000);
}

function endQuiz() {
  // write end quiz function here
  quiz.setAttribute("style", "display:none");
  timer.setAttribute("style", "display:none");
  secondsLeft.remove();
  highScores.innerHTML = "";
  // restart
  const restartButton = document.createElement('button');
  restartButton.setAttribute('class', "btn restart");
  restartButton.innerHTML = 'Start Over';
  highScores.appendChild(restartButton);
  // reset everything
  const resetButton = document.createElement('button');
  resetButton.setAttribute('class', "btn reset");
  resetButton.innerHTML = 'Clear All History';
  highScores.appendChild(resetButton);
  // tally score
  if (quizStatus === true) {
    var myName = prompt("Enter your name to see your score!");
    var newScore = {
      name: myName,
      score: score
    }
    scores.push(newScore)
    localStorage.setItem('scores', JSON.stringify(scores));
  }

  // display score in list
  hScard.setAttribute("style", "display:block");
  scores.forEach((value, index) => {
    if (index >= 0) {
      var thisName = value.name;
      var thisScore = value.score;

      const displayScore = document.createElement('li');
      displayScore.innerHTML = `Player: ${thisName}: ${thisScore}`;

      highScores.appendChild(displayScore);
    }

    
  })
}

// start the game over
highScores.addEventListener('click', function(event) {
  var element = event.target;

  if (element.classList.contains('restart') === true) {
    hScard.setAttribute("style", "display:none");
    location.reload();
  }
})

// clear all score history and start game over
highScores.addEventListener('click', function(event) {
  var element = event.target;

  if (element.classList.contains('reset') === true) {
    hScard.setAttribute("style", "display:none");
    localStorage.clear();
    location.reload();
  }
})

init();


