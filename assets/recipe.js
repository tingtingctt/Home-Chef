
var recipeTitle = "";

$(".ingredBtn").on("click", function(event) {

    event.preventDefault();
    

    var ingredientInput = $(".inputIngredient").val()

    console.log(ingredientInput);
    localStorage.setItem("Ingredient Input", ingredientInput);
    $(".recipes").empty();

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
    localStorage.setItem("Meal choice", mealInput)
    


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

        recipeTitle = response[0].name
        var recipeIngredients = response[0].ingredients
        var recipeInstructions = JSON.stringify(response[0].instructions)

        localStorage.setItem("Recipe Title", recipeTitle)
        localStorage.setItem("Recipe Ingredients", recipeIngredients)
        localStorage.setItem("Recipe Instructions", recipeInstructions)
    });

    //Why doesn't this work

    $('#optionsModal').modal({
        show: true
    });

});







$("#saveBtn").on("click", function(event) {
    event.preventDefault();
    var newDay = $("#daySelector").val();
    var newMeal = $("#mealSelector").val();
    var newChef = $("#chefSelector").val();


    $("#saveBtn").attr("data-dismiss", "modal")

    localStorage.setItem("Chef for Recipe", newChef)

    //If/then statements for modal options

    //they all should say recipe title. The goal is to move this onclick into the submit when I merge the buttons so the var is also there
    if (newDay === "Monday" && newMeal === "Breakfast") {
        localStorage.setItem("MondayBreakfast", recipeTitle);
    }
    else if (newDay === "Monday" && newMeal === "Lunch") {
        localStorage.setItem("MondayLunch", recipeTitle);
    }
    else if (newDay === "Monday" && newMeal === "Dinner") {
        localStorage.setItem("MondayDinner", recipeTitle);
    }
    else if (newDay === "Tuesday" && newMeal === "Breakfast") {
        localStorage.setItem("TuesdayBreakfast", recipeTitle);
    }
    else if (newDay === "Tuesday" && newMeal === "Lunch") {
        localStorage.setItem("TuesdayLunch", recipeTitle);
    }
    else if (newDay === "Tuesday" && newMeal === "Dinner") {
        localStorage.setItem("TuesdayDinner", recipeTitle);
    }
    else if (newDay === "Wednesday" && newMeal === "Breakfast") {
        localStorage.setItem("WednesdayBreakfast", recipeTitle);
    }
    else if (newDay === "Wednesday" && newMeal === "Lunch") {
        localStorage.setItem("WednesdayLunch", recipeTitle);
    }
    else if (newDay === "Wednesday" && newMeal === "Dinner") {
        localStorage.setItem("WednesdayDinner", recipeTitle);
    }
    else if (newDay === "Thursday" && newMeal === "Breakfast") {
        localStorage.setItem("ThursdayBreakfast", recipeTitle);
    }
    else if (newDay === "Thursday" && newMeal === "Lunch") {
        localStorage.setItem("ThursdayLunch", recipeTitle);
    }
    else if (newDay === "Thursday" && newMeal === "Dinner") {
        localStorage.setItem("ThursdayDinner", recipeTitle);
    }
    else if (newDay === "Friday" && newMeal === "Breakfast") {
        localStorage.setItem("FridayBreakfast", recipeTitle);
    }
    else if (newDay === "Friday" && newMeal === "Lunch") {
        localStorage.setItem("FridayLunch", recipeTitle);
    }
    else if (newDay === "Friday" && newMeal === "Dinner") {
        localStorage.setItem("FridayDinner", recipeTitle);
    }
    else if (newDay === "Saturday" && newMeal === "Breakfast") {
        localStorage.setItem("SaturdayBreakfast", recipeTitle);
    }
    else if (newDay === "Saturday" && newMeal === "Lunch") {
        localStorage.setItem("SaturdayLunch", recipeTitle);
    }
    else if (newDay === "Saturday" && newMeal === "Dinner") {
        localStorage.setItem("SaturdayDinner", recipeTitle);
    }
    else if (newDay === "Sunday" && newMeal === "Breakfast") {
        localStorage.setItem("SundayBreakfast", recipeTitle);
    }
    else if (newDay === "Sunday" && newMeal === "Lunch") {
        localStorage.setItem("SundayLunch", recipeTitle);
    }
    else if (newDay === "Sunday" && newMeal === "Dinner") {
        localStorage.setItem("SundayDinner", recipeTitle);
    }

});