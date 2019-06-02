$(document).ready(function(){

// ****Question Bank*****
var questions = [
    {q:"The sum of all angles on any triangle adds up to how many degrees", 
    a: "180 degrees",
    c1:"180 degrees",
    c2:"45 degrees",
    c3:"90 degrees",
    c4:"360 degrees"},

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
var questionIndex = 0;
var displayQuestion;
var timeNotUp = true;
var time =10;
var timerID;
var userAnswer;



// Button Functions
$(".btn-start").on("click",loading);
$(".btn-restart").on("click", restart);

// Starting the Game // Screen Transition
function loading(){
    $(".main-screen").fadeOut();
    // $(".loading-screen").delay(2000).fadeIn();
    // $(".loading-screen").delay(5000).fadeOut();
    // $(".question-screen").delay(9000).fadeIn();
    $(".loading-screen").delay(1000).fadeIn();
    $(".loading-screen").delay(1000).fadeOut();
    $(".question-screen").delay(1000).fadeIn();
}

displayQuestion();
timer();
userAnswer();



// ********Game Functions********
// Timer for each question and resetting after each question
function timer(){
    if (timeNotUp) {
        timerID = setInterval(decrement, 1000);
        timeNotUp = false;
    }
   }
   function decrement() {
       time--;
   
       $(".counter").text(time);
   
       if (time === 0) {
         
           stop();
   
           showAnswer();
       }
   }
   
   function stop(){
       timeNotUp = true;
       clearInterval(timerID);
   }

// Displays Next Question
function displayQuestion(){
if (questionIndex <= questions.length -1) {
    $(".question").append(questions[questionIndex].q);
    $(".choice").append("<div class='option' data='c-1'>" +questions[questionIndex].c1 +"</div>");
    $(".choice").append("<div class='option' data='c-2'>" +questions[questionIndex].c2 +"</div>");
    $(".choice").append("<div class='option data='c-3'>" +questions[questionIndex].c3 +"</div>");
    $(".choice").append("<div class='option data='c-4'>" +questions[questionIndex].c4 +"</div>");
}
else {
    $(".result").append("Game Over!");
    $(".score").append("Your score is: " +correct +" out of " +questions.length);
}
}

// Checking if user answer is correct
function userAnswer() {
    $(".option").on("click", function(){
        userAnswer = $(".option").attr('data');
        switch (userAnswer){
            case 'c-1':
            userAnswer = questions[questionIndex].c1;
            break;
            case 'c-2':
            userAnswer = questions[questionIndex].c2;
            break;
            case 'c-3':
            userAnswer = questions[questionIndex].c3;
            break;
            case 'c-4':
            userAnswer = questions[questionIndex].c4;
            break;
        }
        console.log("choice is" +userAnswer);
        if (userAnswer == questions[questionIndex].a){
            correct++;
            console.log("correct " +correct);
            $(".choice").append("<div> Correct! </div>");
        }
        else {
            incorrect++;
            console.log("that is incorrect " +incorrect);
            $(".choice").append("<div> Incorrect! </div>");
        }
        timer();
    });
}

function showAnswer() {
    $(".choice").append("<div> The correct answer is: " +questions[questionIndex].a +"</div>");
}

// Displays Correct Answer and transitions to next question
// setTimeout(showAnswer, 30000);
// setTimeout(displayQuestion, 35000);


// function stop() {
//     gameDone = true;
//     clearInterval(timerID);
// }

// Restarts Game
function restart(){
    location.reload();
}
});
