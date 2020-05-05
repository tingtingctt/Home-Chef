

$(".ingredBtn").on("click", function(event) {

    event.preventDefault();
    $(".recipes").empty();

    var ingredientInput = $(".inputIngredient").val()

    console.log(ingredientInput);



});

$(".mealBtn").on("click", function(event) {

    event.preventDefault();
    $(".recipes").empty();

    var mealInput = $(".inputMeal").val()

    console.log(mealInput);




});