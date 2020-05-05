

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
        console.log(results);
        }
    });


});

$(".mealBtn").on("click", function(event) {

    event.preventDefault();
    $(".recipes").empty();

    var mealInput = $(".inputMeal").val()

    console.log(mealInput);




});