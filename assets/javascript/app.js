$(document).ready(function(){
var questions = [
    {q:"The sum of all angles on any triangle adds up to how many degrees", 
    a: "180 degrees",
    c1: "45 degrees",
    c2: "90 degrees",
    c3: "360 degrees"},

    {q: "Which word contains a long vowel sound in the following sentence? 'Dogs like tennis balls.'",
    a:  "Like",
    c1: "Tennis",
    c2: "Balls",
    c3: "Dogs"},

    {q: "What typically green chemical found in plants uses photosynthesis to turn sunlight into energy?",
    a: "Chlorophyll",
    c1: "Iodine",
    c2: "Ethylamine",
    c3: "Chloroform"},

    {q: "Which of these U.S. states was one of the original 13 colonies?",
    a: "North Carolina",
    c1: "Ohio",
    c2: "Alabama",
    c3: "Vermont"},

    {q: "How many nouns are in the following sentence? 'The dog chewed up the smartphone again!'",
    a: "2",
    c1: "3",
    c2: "1",
    c3: "4"},

    {q: "The classic Hans Christian Andersen fairy tale 'The Real Princess' is better known as 'The Princess and the ___.'",
    a: "Pea",
    c1: "Peach",
    c2: "Bride",
    c3: "Prince"
},
    {q: "If Rembrandt were to paint a portrait using only primary and secondary colors, how many different colors would he be able to use?",
    a: "6",
    c1: "5",
    c2: "4",
    c3: "8"},

    { q: "If you are driving 100mph, how long will it take you to go 100 miles?",
    a: "1 hour",
    c1: "100 hours",
    c2: "0 hours",
    c3: "2 hours"},

    {q: "If a plane crashed on the border of England and Scotland, where would they bury the survivors?",
    a: "You dont bury survivors",
    c1: "You bury them in England",
    c2: "You bury them in Scotland",
    c3: "You bury them at the border"
},

    {q: "Where is the great wall of china?",
    a: "China",
    c1: "India",
    c2: "Hong Kong",
    c3: "Taiwan"},
];



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






})