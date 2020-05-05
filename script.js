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
