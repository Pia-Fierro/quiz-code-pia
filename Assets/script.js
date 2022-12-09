//variables declaration in gloval scope.
var topScreen = document.querySelector("#topScreen");
var viewScores = document.querySelector("#view-scores");
var timer = document.querySelector("#timer");
var firstScreen = document.querySelector("#first-screen");
var startQuizButton = document.querySelector("#start-quiz-button");
var questionsScreen = document.querySelector("#questions-screen");
var choicesList = document.querySelector("#choices");
var finishScreen = document.querySelector("#finish-screen");
var finaleScore= document.querySelector("#finale-score");
var submitButton = document.querySelector("#submit-button");
var scoreScreen = document.querySelector("#score-screen");
var highScores = document.querySelector("#high-scores");
var goBackButton = document.querySelector("#go-back-btn");
var clearHighScoreButton = document.querySelector("#clear-highscore-btn");

var timerCount;
var timeLeft = 75;
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
    setTimer();
    renderQuestions();
}
//start the quiz when presing star button:
startQuizButton.addEventListener("click",startQuiz); 

//function that creates the timer
function setTimer () {
    var timerCount = setInterval(function() {
    timer.textContent =timeLeft + "s";
    timeLeft= timeLeft - 1;
    if (timeLeft===0) {
        //clear timer and stop function
        clearInterval(timerCount);
        timer.textContent=""
        endQuiz();
    }
    if (currentQuestionsIndex===questions.length) {
        clearInterval(timerCount);
        timer.textContent=""
        endQuiz();
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
//function that will check if the user answer is the correct answer for each question
function answerCheck (event) {
    var userChoice = event.target.textContent;
    if (userChoice === questions[currentQuestionsIndex].answer) {

    //creating an element to show correct or wrong answer
        var CorrectAnswer = document.createElement ("p");
        CorrectAnswer.textContent = "Correct answer!!";
        document.getElementById("choices").appendChild(CorrectAnswer);
        CorrectAnswer.setAttribute("id","correctAnswer");

    }else {
        var wrongAnswer = document.createElement ("p");
        wrongAnswer.textContent = "Wrong asnwer";
        document.getElementById ("choices").appendChild(wrongAnswer);
        wrongAnswer.setAttribute("id", "wrongAnswer");
        //user will loose 10s for each wrong answer
        timeLeft = timeLeft -10;
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
    localStorage.setItem("score",JSON.stringify(score));
    finaleScore.textContent = score
}






