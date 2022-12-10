//variables declaration in gloval scope.
var topScreen = document.querySelector("#topScreen");
var firstScreen = document.querySelector("#first-screen");
var questionsScreen = document.querySelector("#questions-screen");
var scoreScreen = document.querySelector("#score-screen");
var finishScreen = document.querySelector("#finish-screen");

var viewScores = document.querySelector("#view-scores");
var timerEl = document.querySelector("#timer-count");
var choicesList = document.querySelector("#choices");
var highScores = document.querySelector("#high-scores");


var startQuizButton = document.querySelector("#start-quiz-button");
var submitButton = document.querySelector("#submit-button");
var goBackButton = document.querySelector("#go-back-btn");
var clearHighScoreButton = document.querySelector("#clear-highscore-btn");

var timer;
var timerCount;
var currentQuestionsIndex = 0;


// questions array:
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

//function declarations for the quizz timer and render questions:

//first screen to start quizz. After pressing start first screen will hide, timer will start and questions screen will show
function startQuiz () {
    firstScreen.classList.add("hide");
    questionsScreen.classList.remove("hide");
    timerCount = 75;
    setTimer();
    renderQuestions();
}
//start the quiz when presing star button:
startQuizButton.addEventListener("click",startQuiz); 

//function that creates the timer
function setTimer () {
    clearInterval(timer)
     timer = setInterval (function() {
        timerCount --;
        timerEl.textContent = "Time left:" + timerCount + "s";

        if (timerCount === 0) {
            clearInterval (timer);
            endQuiz();
        }
        if (currentQuestionsIndex === questions.length) {
            clearInterval (timer);
            endQuiz ()
        }
    }, 1000);
}



//function to start showing questionns after pressing start button.
function renderQuestions() {
    scoreScreen.classList.add("hide");
    
    var currentQuestions = questions[currentQuestionsIndex].title;
    var titleEl = document.getElementById("questions");
    titleEl.textContent = currentQuestions;

    for (i = 0; i < questions[currentQuestionsIndex].options.length; i++) {
    var buttonEl = document.getElementById ("answer-options" + (i + 1));
    buttonEl.textContent = questions[currentQuestionsIndex].options[i];
    buttonEl.addEventListener("click", answerCheck)
   
    }
}
//function that will check if the user answer is the correct/incorrect one for each question
function answerCheck (event) {
    var userChoice = event.target.textContent;
    if (userChoice === questions[currentQuestionsIndex].answer) {
        document.getElementById("correct-wrong").textContent ="correct answer, good job!!";

    }else {
        document.getElementById("correct-wrong").textContent="wrong answer, you lose 10 seconds.";
        //user lose 10 seconds for each wrong answer
        timerCount -= 10;
     }

     currentQuestionsIndex = currentQuestionsIndex + 1;
     if (questions.length > currentQuestionsIndex) {
        renderQuestions();

     }else {
        clearInterval(timerCount);
        endQuiz();
     }
     }
      
//funtion for when the time gets to 0 or when all the answer are aswered before the timer reach to 0 s.
function endQuiz() {
    //remove question screen and show finish screen
    questionsScreen.classList.add("hide");
    finishScreen.classList.remove("hide");
    viewScores.classList.add("hide");
    timerEl.classList.add("hide");

    var scoreEl = document.getElementById ("final-score")
    scoreEl.textContent = "your score is: "+ timerCount + "s";  
}






