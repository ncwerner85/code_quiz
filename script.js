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
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");
const choice4 = document.getElementById("choice4");
const cardTitle = document.querySelector(".card-title");
const timer = document.getElementById("timer");

let timerInterval;

let currentQuestion = 0;
let score = "";

// question is prompted
const questions = [
  {
    questionNumber: "What is the answer",
    a: "house",
    b: "shoe",
    c: "apple",
    d: "horse",
    answer: "horse",
  },
  {
    questionNumber: "What is the answer",
    a: "lace",
    b: "bananna",
    c: "car",
    d: "mouse",
    answer: "car",
  },
  {
    questionNumber: "What is the answer",
    a: "fruit",
    b: "chicken",
    c: "cat",
    d: "dog",
    answer: "fruit",
  },
];

function startGame() {
  startTime();
  loadNextQuestion(currentQuestion);
  console.log("started");
}

function startTime() {
  console.log("timer start");
  let secondsLeft = 60;

  timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = secondsLeft + " seconds left";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      //   sendMessage();
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

// if correct game continues
function checkAnswer() {
    
  // Then the user will click the next button, which will iterate to the next question
  // goToNext();
}

function goToNext() {
  currentQuestion++;
  loadNextQuestion(currentQuestion);
}
/* UI Logic */

// user selects an answer

// if incorrect time is subtracted from timer

// when the timer reaches 0 or no more questions the game is over

// user can leave name and score in high scores in local storage
function saveData() {}

startButton.addEventListener("click", startGame);
