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
    c1:  "Like",
    c2: "Tennis",
    c3: "Balls",
    c4: "Dogs"},

    {q: "What typically green chemical found in plants uses photosynthesis to turn sunlight into energy?",
    a: "Chlorophyll",
    c1: "Chlorophyll",
    c2: "Iodine",
    c3: "Ethylamine",
    c4: "Chloroform"},

    {q: "Which of these U.S. states was one of the original 13 colonies?",
    a: "North Carolina",
    c1: "Ohio",
    c2: "Alabama",
    c3: "Vermont",
    c4: "North Carolina"},

    {q: "How many nouns are in the following sentence? 'The dog chewed up the smartphone again!'",
    a: "2",
    c1: "2",
    c2: "3",
    c3: "1",
    c4: "4"},

    {q: "The classic Hans Christian Andersen fairy tale 'The Real Princess' is better known as 'The Princess and the ___.'",
    a: "Pea",
    c1: "Pea",
    c2: "Peach",
    c3: "Bride",
    c4: "Prince"
},
    {q: "If Rembrandt were to paint a portrait using only primary and secondary colors, how many different colors would he be able to use?",
    a: "6",
    c1: "6",
    c2: "5",
    c3: "4",
    c4: "8"},

    { q: "If you are driving 100mph, how long will it take you to go 100 miles?",
    a: "1 hour",
    c1: "1 hour",
    c2: "100 hours",
    c3: "0 hours",
    c4: "2 hours"},

    {q: "If a plane crashed on the border of England and Scotland, where would they bury the survivors?",
    a: "You dont bury survivors",
    c1: "You dont bury survivors",
    c2: "You bury them in England",
    c3: "You bury them in Scotland",
    c4: "You bury them at the border"
},

    {q: "Where is the great wall of china?",
    a: "China",
    c1: "China",
    c2: "India",
    c3: "Hong Kong",
    c4: "Taiwan"},
];

var correct = 0;
var incorrect = 0;
var questionIndex = 0;
var displayQuestion;
var timeNotUp = true;
var timerID;
var userAnswer;
var contentLoaded = false;
var gameDone = true;



// Button Functions
$(".btn-start").on("click",playGame);
$(".btn-restart").on("click", restart);

// ********Game Functions********

function playGame(){
    loading();
    displayQuestion();
}

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

// Displays Next Question
function displayQuestion(){
    $(".question").html(questions[questionIndex].q);
    $(".c-1").text(questions[questionIndex].c1);
    $(".c-2").text(questions[questionIndex].c2);
    $(".c-3").text(questions[questionIndex].c3);
    $(".c-4").text(questions[questionIndex].c4);
    console.log("Did we get here");
clearInterval(timerID);
timer();
}

// Timer for each question and resetting after each question
function timer(){
    time = 20;
    if (timeNotUp) {
        timerID = setInterval(decrement, 1000);
    }
   }
   function decrement() {
       time--;
   
       $(".counter").text(time);
   
       if (time < 1) {
         
           stop();
   
           showAnswer();
       }
    }
   function stop(){
       clearInterval(timerID);
   }

// Checking if user answer is correct

    $(".option").on("click", userAnswer);
        function userAnswer() {
        userAnswer = $(this).attr('data');
        console.log("user answer:" +userAnswer);
        $(".question").empty();
        $(".option").empty();  
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
        if (userAnswer === questions[questionIndex].a){
            correct++;
            console.log("correct " +correct);  
            $(".question").html("Yes that is right!");
        }
        else {
            incorrect++;
            console.log("that is incorrect " +incorrect);
            $(".question").html("That is incorrect! The correct answer is: " +questions[questionIndex].a);
        }
    if (questionIndex <= questions.length -1) {
    questionIndex++;
    console.log("we got here interval" +questionIndex);
    setTimeout(displayQuestion, 5000);
    }
    else if (questionIndex === questions.length){
        setTimeout(score, 5000);
    }
}

function score(){
    console.log("we got here");
    $(".question").empty();
    $(".timer").empty();
    $(".result-screen").fadeIn();   
    $(".result").html("Game Over!");
    $(".score").html("Your score is: " +correct +" out of " +questions.length);
}

function showAnswer() {
    $(".question").empty();
    $(".option").empty();
    $(".question").html("The correct answer is: " +questions[questionIndex].a);
}

function stop() {
    timeNotUp = true;
    clearInterval(timerID);
    console.log(timerID);
}

// Restarts Game
function restart(){
    location.reload();
}