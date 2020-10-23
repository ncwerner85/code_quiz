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
const startButton = document.getElementById("start-btn")

startButton.addEventListener("click", startGame)

function startGame() {
    currentQuestion = 0
    timer()
    loadNextQuestion(currentQuestion)
    console.log("started")
}
  
function timer() {
    console.log("timer start")
}
let currentQuestion;
const score = ""

// question is prompted
const questions = [
    {
        questionNumber1: "What is the answer",
        a: 'house',
        b: 'shoe',
        c: 'apple',
        d: 'horse',
        answer: 'horse'    
    },
    {
        questionNumber2: "What is the answer",
        a: 'lace',
        b: 'bananna',
        c: 'car',
        d: 'mouse',
        answer: 'car'    
    },
    {
        questionNumber3: "What is the answer",
        a: 'fruit',
        b: 'chicken',
        c: 'cat',
        d: 'dog',
        answer: 'fruit'    
    },
]
// if correct game continues
function checkAnswer() {

}

function loadNextQuestion(currentQuestion) {
    console.log(questions[currentQuestion])
}
/* UI Logic */

// user selects an answer

// if incorrect time is subtracted from timer

// when the timer reaches 0 or no more questions the game is over

// user can leave name and score in high scores in local storage
function saveData() {

}