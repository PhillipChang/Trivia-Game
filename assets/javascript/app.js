$(document).ready(function(){
var questions = [
    {q:"The sum of all angles on any triangle adds up to how many degrees", 
    a: "180 degrees",
    c: "180 degrees",
    c: "45 degrees",
    c: "90 degrees",
    c: "360 degrees"},

    {q: "Which word contains a long vowel sound in the following sentence? 'Dogs like tennis balls.'",
    a:  "Like",
    c:  "Like",
    c: "Tennis",
    c: "Balls",
    c: "Dogs"},

    {q: "What typically green chemical found in plants uses photosynthesis to turn sunlight into energy?",
    a: "Chlorophyll",
    c: "Chlorophyll",
    c: "Iodine",
    c: "Ethylamine",
    c: "Chloroform"},

    {q: "Which of these U.S. states was one of the original 13 colonies?",
    a: "North Carolina",
    c: "Ohio",
    c: "Alabama",
    c: "Vermont",
    c: "North Carolina"},

    {q: "How many nouns are in the following sentence? 'The dog chewed up the smartphone again!'",
    a: "2",
    c: "2",
    c: "3",
    c: "1",
    c: "4"},

    {q: "The classic Hans Christian Andersen fairy tale 'The Real Princess' is better known as 'The Princess and the ___.'",
    a: "Pea",
    c: "Pea",
    c: "Peach",
    c: "Bride",
    c: "Prince"
},
    {q: "If Rembrandt were to paint a portrait using only primary and secondary colors, how many different colors would he be able to use?",
    a: "6",
    c: "6",
    c: "5",
    c: "4",
    c: "8"},

    { q: "If you are driving 100mph, how long will it take you to go 100 miles?",
    a: "1 hour",
    c: "1 hour",
    c: "100 hours",
    c: "0 hours",
    c: "2 hours"},

    {q: "If a plane crashed on the border of England and Scotland, where would they bury the survivors?",
    a: "You dont bury survivors",
    c: "You dont bury survivors",
    c: "You bury them in England",
    c: "You bury them in Scotland",
    c: "You bury them at the border"
},

    {q: "Where is the great wall of china?",
    a: "China",
    c: "China",
    c: "India",
    c: "Hong Kong",
    c: "Taiwan"},
];

var correct = 0;
var incorrect = 0;
var score = 0;
var questionIndex = 0;
var choseAnswer = false;
var displayQuestion;
var timer = 30;
var gameDone = true;
var timerID;



// Screen Transition

$(".btn-start").on("click",loading);



// Functions

// Starting the Game
function loading(){
    $(".main-screen").fadeOut();
    $(".loading-screen").delay(2000).fadeIn();
    $(".loading-screen").delay(5000).fadeOut();
    $(".question-screen").delay(9000).fadeIn();
}

function displayQuestion(){
if (questionIndex <= questions.length -1) {
    $(".question").append(questions[questionIndex].q);
    $(".choice").append("<div>" +questions[questionIndex].c +"</div>");
}
else {
    $(".result").append("Game Over!");
    $(".score").append("Your score is: " +correct +" out of " +questions.length);
}
}

function showAnswer(){
    
}
// Displays Correct Answer and transitions to next question
setTimeout(showAnswer, 30000);
setTimeout(displayQuestion, 35000);

// Timer for each question and resetting after each question
function timer(){
 if (gameDone) {
     timerID = setInterval(decrement, 1000);
     gameDone = false;
 }
}
function decrement() {
    timer--;

    $(".timer").html(timer);

    if (timer === 0) {
        
        stop();

        showAnswer();
    }
}

function stop() {
    gameDone = true;
    clearInterval(timerID);
}

function counter(){

}

function endGame(){

}

function restart(){
    location.reload();
}

