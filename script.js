/* GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score */

/* Game Logic */

//the start button is clicked and the time starts
const startButton = document.getElementById("start-btn");
const scoreCount = document.getElementById("score");
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");
const choice4 = document.getElementById("choice4");
const cardTitle = document.querySelector(".card-title");
const timer = document.getElementById("timer");
var firstNameInput = document.querySelector("#first-name");

let secondsLeft = 60

let timerInterval;

let currentQuestion = 0;
let score = 0;

// question is prompted
const questions = [
  {
    questionNumber: "What is the HTML tag under which one can write the JavaScript code?",
    a: "<javascript>",
    b: "<scripted>",
    c: "<script>",
    d: "<js>",
    answer: "<script>",
  },
  {
    questionNumber: "Which of the following is the correct syntax to display “Hello World” in an alert box using JavaScript?",
    a: "alertbox(“Hello World”);",
    b: "msg(“Hello World”);",
    c: "msgbox(“Hello World”);",
    d: "alert(“Hello World”);",
    answer: "alert(“Hello World”);",
  },
  {
    questionNumber: "What is the correct syntax for referring to an external script called “script.js”?",
    a: "<script src=”script.js”>",
    b: "<script href=”script.js”>",
    c: "<script ref=”script.js”>",
    d: "<script name=”script.js”>",
    answer: "<script src=”script.js”>",
  },
  {
    questionNumber: "Which of the following is not a reserved word in JavaScript?",
    a: "interface",
    b: "throws",
    c: "program",
    d: "short",
    answer: "program",
  },
  {
    questionNumber: "What is the syntax for creating a function in JavaScript named as workFunc?",
    a: "function = workFunc()",
    b: "function workFunc()",
    c: "function := workFunc()",
    d: "function : workFunc()",
    answer: "function workFunc()",
  },
  {
    questionNumber: "How to write an ‘if’ statement for executing some code. If “i” is NOT equal to 5?",
    a: "if(i<>5)",
    b: "if i<>5",
    c: "if(i!=5)",
    d: "if i!=5",
    answer: "if(i!=5)",
  },
  {
    questionNumber: "In JavaScript, we do not have datatypes like integer and float. What is the function that can be used to check if the number is an integer or not?",
    a: "Integer(value)",
    b: "ifInteger(value)",
    c: "isInteger(value)",
    d: "ifinteger(value)",
    answer: "isInteger(value)",
  },

];

function startGame() {
  startTime();
  loadNextQuestion(currentQuestion);
}

function startTime() {

  timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = secondsLeft + " seconds left";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      
    }
  }, 1000);
}

function loadNextQuestion(currentQuestion) {
  console.log(questions[currentQuestion]);
  cardTitle.textContent = questions[currentQuestion].questionNumber;
  choice1.textContent = questions[currentQuestion].a;
  choice2.textContent = questions[currentQuestion].b;
  choice3.textContent = questions[currentQuestion].c;
  choice4.textContent = questions[currentQuestion].d;

  // Add event listeners to the four choice buttons such that it tells the user whether they're right or wrong, and changes the colors of the buttons, also changes score
  // checkAnswer();

  // If they're on the last question, clear interval and show the initials form
  //clearInterval(timerInterval);
}
// user selects an answer
// if correct game continues
function checkAnswer(e) {
       e.target.textContent
       if (e.target.textContent === questions[currentQuestion].answer) {
           score++;
           scoreCount.textContent = score + " points";
           goToNext();
           console.log(true);
       } 
    // if incorrect time is subtracted from timer, next question comes up goToNext();
       else if (e.target.textContent !== questions[currentQuestion].answer) {
            secondsLeft -= 5;
            goToNext();
            console.log(false)
            
       }      
    }

function goToNext() {
  currentQuestion++;
  loadNextQuestion(currentQuestion);
}


// when the timer reaches 0 or no more questions the game is over

// user can leave name and score in high scores in local storage
function highScore () {
    var firstName = firstNameInput.value.trim()
    var playerFirstNameSpan = document.querySelector("#user-first-name");

    console.log(firstName);
    if (firstName === "") {
        alert("First name cannot be blank");
    } else {
        alert("High Score Saved");
    }
    localStorage.setItem("firstName", JSON.stringify(firstName));

    var lastPlayer = JSON.parse(localStorage.getItem("firstName"));
    playerFirstNameSpan.textContent = lastPlayer.firstName;
    console.log(playerFirstNameSpan)
}


startButton.addEventListener("click", startGame);
choice1.addEventListener("click", checkAnswer)
choice2.addEventListener("click", checkAnswer)
choice3.addEventListener("click", checkAnswer)
choice4.addEventListener("click", checkAnswer)


