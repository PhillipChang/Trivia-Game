// ****Question Bank*****
var questions = [
    {q:"The sum of all angles on any triangle adds up to how many degrees", 
    a: "180 degrees",
    c1:"180 degrees",
    c2:"45 degrees",
    c3:"90 degrees",
    c4:"360 degrees"},

    {q: "What type of angle is less than 90 degrees?",
    a:  "Acute",
    c1: "Obtuse",
    c2: "Acute",
    c3: "Reflex",
    c4: "Straight"},

    {q: "What typically green chemical found in plants uses photosynthesis to turn sunlight into energy?",
    a: "Chlorophyll",
    c1: "Ethylamine",
    c2: "Iodine",
    c3: "Chlorophyll",
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
    c1: "Prince",
    c2: "Peach",
    c3: "Bride",
    c4: "Pea"
},
    {q: "Which U.S. state's postal abbreviation is 'MI'?",
    a: "Michigan",
    c1: "Mississippi",
    c2: "Missouri",
    c3: "Michigan",
    c4: "Minnesota"},

    { q: "If you are driving 100mph, how long will it take you to go 100 miles?",
    a: "1 hour",
    c1: "0 hours",
    c2: "100 hours",
    c3: "1 hour",
    c4: "2 hours"},

    {q: "If a plane crashed on the border of England and Scotland, where would they bury the survivors?",
    a: "You dont bury survivors",
    c1: "You bury them in Scotland",
    c2: "You bury them in England",
    c3: "You dont bury survivors",
    c4: "You bury them at the border"
},

    {q: "Where is the great wall of china?",
    a: "China",
    c1: "China",
    c2: "India",
    c3: "Hong Kong",
    c4: "Taiwan"},
];

var pics = ["pic-1","pic-2","pic-3","pic-4","pic-5","pic-6","pic-7","pic-8","pic-9","pic-10","end-pic-1","end-pic-2"];

var correct = 0;
var incorrect = 0;
var questionIndex = 0;
var displayQuestion;
var timeNotUp = true;
var timerID;
var userAnswer;
var didAnswer = true;

// Game Audio
var thinkingMusic = document.createElement("audio");
thinkingMusic.setAttribute("src", "assets/audio/thinking.MP3");
var sadSong = document.createElement("audio");
sadSong.setAttribute("src", "assets/audio/sad.MP3");
var victory = document.createElement("audio");
victory.setAttribute("src", "assets/audio/cheer.MP3");


// Button Functions
$(".btn-start").on("click",playGame);
$(".btn-restart").on("click", restart);

// ********Game Functions********
function playGame(){
    loading();
    setTimeout(displayQuestion,11000);
}

// Starting the Game // Screen Transition
function loading(){
    $(".main-screen").fadeOut();
    $(".loading-screen").delay(2000).fadeIn();
    $(".loading-screen").delay(7000).fadeOut();
    $(".question-screen").delay(11000).fadeIn();
}

// Displays Next Question
function displayQuestion(){
    $(".answer-pic").empty();  
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
    time = 30;
    thinkingMusic.loop = true;
    thinkingMusic.play();
    if (timeNotUp) {
        timerID = setInterval(decrement, 1000);
    }
   }
   function decrement() {
       time--;
   
       $(".counter").text("Time Left: " +time);
   
       if (time < 1) {
         
           stop();

           didAnswer = false;

           checkAnswer();
       }
    }
   function stop(){
    timeNotUp = true;
    clearInterval(timerID);
   }

// Checking if user answer is correct

    $(".option").on("click", function(){
        userAnswer = $(this).attr('data');
        console.log("user answer:" +userAnswer);
        checkAnswer();
    });

    function checkAnswer(){
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
        $(".answer-pic").fadeIn();
        $(".answer-pic").html("<img src = 'assets/images/" +pics[questionIndex] +".jpg' class='pic'>");
        $(".answer-pic").delay(4000).fadeOut();
        if ((userAnswer === questions[questionIndex].a) && (didAnswer == true)){
            correct++;
            $(".question").html("Yes that is right!");
        }
        else if ((userAnswer != questions[questionIndex].a) && (didAnswer == true)){
            incorrect++;
            $(".question").html("That is incorrect! The correct answer is: " +questions[questionIndex].a);
        }
        else {
            $(".question").html("Time is up! You did not select an answer. <p> The correct answer is: " +questions[questionIndex].a);

            didAnswer = true;
        }
        clearInterval(timerID);

    if (questionIndex == (questions.length-1)) {
        setTimeout(score, 5000);
        return;
    }
    else{
        questionIndex++;
        setTimeout(displayQuestion, 5000);
    }
}

// Displays Score
function score(){
    thinkingMusic.loop=false;
    thinkingMusic.pause();
    $(".question").empty();
    $(".counter").empty();
    $(".answer-pic").empty();
    $(".result-screen").fadeIn();   
    if (correct <= 5){
    sadSong.play();
    sadSong.volume = 1;
    $(".result").html("You are not smarter than a 5th Grader!");
    $(".ending-pic").fadeIn();
    $(".ending-pic").html("<img src = 'assets/images/" +pics[11] +".gif' class='pic'>");
    }
    else {
    victory.play();
    victory.volume = 0.7;
    $(".result").html("You are smarter than a 5th Grader!");
    $(".ending-pic").fadeIn();
    $(".ending-pic").html("<img src = 'assets/images/" +pics[10] +".gif' class='pic'>");
    }
    $(".score").html("Your score is: " +correct +" out of " +questions.length);
    $(".score").append("<div> Incorrect Answers: " +incorrect +"</div>");
}

// Restarts Game
function restart(){
    $(".result-screen").fadeOut();
    correct = 0;
    incorrect = 0;
    questionIndex = 0;
    displayQuestion;
    timeNotUp = true;
    timerID;
    userAnswer;
    didAnswer = true;
    thinkingMusic.loop= true;
    $(".main-screen").fadeIn();
}