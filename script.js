$(document).ready(function(){
    // onClick function for Weekdays buttons
    // Monday
    $("#monday").on("click", function(){
        $("#monUl").toggleClass("active");
        
    });
    // Tuesday
    $("#tuesday").on("click", function(){
        $("#tueUl").toggleClass("active");
    })
    // Wednesday
    $("#wednesday").on("click", function(){
        $("#wedUl").toggleClass("active");
    })
    // Thursday
    $("#thursday").on("click", function(){
        $("#thuUl").toggleClass("active");
    })
    // Friday
    $("#friday").on("click", function(){
        $("#friUl").toggleClass("active");
    })
    // Saturday
    $("#saturday").on("click", function(){
        $("#satUl").toggleClass("active");
    })
    // Sunday
    $("#sunday").on("click", function(){
        $("#sunUl").toggleClass("active");
    })
    
});


//Anna script section

var ingredsList = localStorage.getItem("Recipe Ingredients");
var instructList = JSON.parse(localStorage.getItem("Recipe Instructions"));
var ingredsP = $("<p>");
var instructP = $("<p>");
console.log(instructList)

ingredsP.text(ingredsList);
instructP.text(instructList[0].steps);


$(".ingredientsList").html(ingredsP);
$(".instructionsList").html(instructP)
