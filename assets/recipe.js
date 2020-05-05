

$(".ingredBtn").on("click", function(event) {

    event.preventDefault();
    

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
        for (i = 0; i < results.results.length; i++ ) {
        var newP = $("<p>");
        var link = $("<a>");
        var newRecp = results.results[i].href
        link.attr("href", newRecp)
        link.attr("target", "_blank")
        link.text(newRecp);
        newP.html(link);
        $(".recipes").prepend(newP);
        }
    });



});

$(".mealBtn").on("click", function(event) {

    event.preventDefault();
   

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
            var link = $("<a>");
            var newRecp = results.results[i].href
            link.attr("href", newRecp)
            link.attr("target", "_blank")
            link.text(newRecp);
            newP.html(link);
            $(".recipes").prepend(newP);
        }
    });



});

$(".urlBtn").on("click", function(event) {
    event.preventDefault();
    var submittedURL = $(".inputURL").val()

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi",
        "method": "POST",
        "headers": {
            "x-rapidapi-host": "mycookbook-io1.p.rapidapi.com",
            "x-rapidapi-key": "c12fbcd6b6mshb18e26a60bb432cp1f2c4fjsn82a51563e64c",
            "content-type": "text/plain",
            "accept": "text/plain"
        },
        "data": submittedURL
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response);
        console.log(response[0].name);
        console.log(response[0].ingredients);
        console.log(response[0].instructions);

        var recipeTitle = response[0].name
        var recipeIngredients = response[0].ingredients
        var recipeInstructions = JSON.stringify(response[0].instructions)

        localStorage.setItem("Recipe Title", recipeTitle)
        localStorage.setItem("Recipe Ingredients", recipeIngredients)
        localStorage.setItem("Recipe Instructions", recipeInstructions)
    });



});







$("#saveBtn").on("click", function(event) {
    event.preventDefault();
    var newDay = $("#daySelector").val();
    var newMeal = $("#mealSelector").val();
    var newChef = $("#chefSelector").val();


    $("#saveBtn").attr("data-dismiss", "modal")

    localStorage.setItem("Day for Recipe", newDay)
    localStorage.setItem("Meal for Recipe", newMeal)
    localStorage.setItem("Chef for Recipe", newChef)



});


