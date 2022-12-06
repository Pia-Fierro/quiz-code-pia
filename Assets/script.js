//variables declaration in gloval scope.

var viewScores = document.getElementById("view-scores");
var timer = document.getElementById("timer");
var startQuizButton = document.getElementById("start-quiz-button");
var finaleScore= document.getElementById("finale-score");
var submitButton = document.getElementById("submit-button");
var goBackButton = document.getElementById("go-back-btn");
var clearHiscoreButton = document.getElementById("clear-highscore-btn");
var timerCount;
var timeLeft = 75;
var questionNumber =0 ;
var choiceLenght =4;
var score = 0;



var questions = [
{
    title:"Commonly used data types do not include:",
    options: ["alerts","booleans", "numbers", "strings"],
    answer: "alerts"
},
{
    title: "The condition in and if/else statment is enclosed withing _______.",
    options: ["quotes","curly brackets","parentheses","square brackets"],
    answer: "parentheses"
},
{
    title: "arrays in JavaScript can be used to store _______.",
    options: ["numbers and strings", "other arrays","booleans","all of the above"],
    answer: "all of the above"
},
{
    title: "Strings values must be enclosed within ______ when being assigned to variables",
    options: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
},
{
    title: "a very useful tool used during development and debugging for printing content to the debugger is:",
    options: ["JavaScript", "terminal/bash","for loops","console.log"],
    answer: "console.log"
}
]

//function declarations:

//timer
function setTimer () {
    timerCount = setInterval(function() {
    timer.textContent =timeLeft + "s";
    timeLeft= timeLeft - 1;
    if (timeLeft===0) {
        clearInterval(timerCount);
        timer.textContent=""

    }
    if (timeLeft===questions.length) {
        clearInterval(timerCount);
        timer.textContent=""

    }    
    }, 1000);
}

//function to start the quiz when pressing button start
function startQuiz () {
    questionNumber=0;
    score=0;
    setTimer()
    setquestions()

}
//funtion for when the time gets to 0 or when all the answer are aswered before the timer reaching to 0
function endQuiz() {
    localStorage.setItem("score",JSON.stringify(score));
    finaleScore.textContent = score


}


//add event listerner to the buttons
startQuizButton.addEventListener("click",startQuiz); 
submitButton 
goBackButton 
clearHiscoreButton