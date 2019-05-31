$(document).ready(function(){

// Screen Transition

$(".btn-start").on("click",loading);

function loading(){
    $(".main-screen").fadeOut();
    $(".loading-screen").delay(2000).fadeIn();
    $(".loading-screen").delay(5000).fadeOut();
    $(".question-screen").delay(9000).fadeIn();
}






})