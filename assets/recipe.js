

$(".ingredBtn").on("click", function(event) {

    event.preventDefault();
    $(".recipes").empty();

    var ingredientInput = $(".inputIngredient").val()

    console.log(ingredientInput);

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://recipe-puppy.p.rapidapi.com/?p=1&i=" + ingredientInput,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
            "x-rapidapi-key": "c12fbcd6b6mshb18e26a60bb432cp1f2c4fjsn82a51563e64c"
        }
    }
    
    $.ajax(settings).done(function (response) {
        var results = JSON.parse(response);
        for (i = 0; i < results.results.length; i++ ) {
        var newP = $("<p>");
        var link = $("<a>");
        var newRecp = results.results[i].href
        link.attr("href", newRecp)
        $(".recipes").append(link);
        }
    });


});

$(".mealBtn").on("click", function(event) {

    event.preventDefault();
    $(".recipes").empty();

    var mealInput = $(".inputMeal").val()

    console.log(mealInput);

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://recipe-puppy.p.rapidapi.com/?p=1&q=" + mealInput,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
            "x-rapidapi-key": "c12fbcd6b6mshb18e26a60bb432cp1f2c4fjsn82a51563e64c"
        }
    }
    
    $.ajax(settings).done(function (response) {
        var results = JSON.parse(response);
        for (i = 0; i < results.results.length; i++ ) {
        var newP = $("<p>");
        newP.text(results.results[i].href);
        $(".recipes").append(newP);
        }
    });




});

$("#saveBtn").on("click", function(event) {
    event.preventDefault();
    console.log("hi")
    var newDay = $("#daySelector").val();
    var newMeal = $("#mealSelector").val();
    var newChef = $("#chefSelector").val();

    console.log(newDay + newMeal + newChef);


});