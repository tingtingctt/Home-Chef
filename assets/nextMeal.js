// var time = 8;
var day = "Saturday";

//these lines get the current day and time (in military) from the local computer
var d = new Date();
var format = "dddd";
nowDate = d.toLocaleDateString()
var result = moment(nowDate).format(format);
// var day = result
var hourString = moment(d).format("H");
var time = parseFloat(hourString);

var dish = ""
if (localStorage.getItem("Meal choice") === null){
    dish = "spaghetti";
    }
    else {
    dish = localStorage.getItem("Meal choice"); 
    }

    //variables for giphy api
    var MondayBreakfastMealChoice = localStorage.getItem("MondayBreakfastMealChoice");

    var MondayLunchMealChoice = localStorage.getItem("MondayLunchMealChoice");

    var MondayDinnerMealChoice = localStorage.getItem("MondayDinnerMealChoice");

    var TuesdayBreakfastMealChoice = localStorage.getItem("TuesdayBreakfastMealChoice");

    var TuesdayLunchMealChoice = localStorage.getItem("TuesdayLunchMealChoice");

    var TuesdayDinnerMealChoice = localStorage.getItem("TuesdayDinnerMealChoice");

    var WednesdayBreakfastMealChoice = localStorage.getItem("WednesdayBreakfastMealChoice");

    var WednesdayLunchMealChoice = localStorage.getItem("WednesdayLunchMealChoice");

    var WednesdayDinnerMealChoice = localStorage.getItem("WednesdayDinnerMealChoice");

    var ThursdayBreakfastMealChoice = localStorage.getItem("ThursdayBreakfastMealChoice");

    var ThursdayLunchMealChoice = localStorage.getItem("ThursdayLunchMealChoice");

    var ThursdayDinnerMealChoice = localStorage.getItem("ThursdayDinnerMealChoice");

    var FridayBreakfastMealChoice = localStorage.getItem("FridayBreakfastMealChoice");

    var FridayLunchMealChoice = localStorage.getItem("FridayLunchMealChoice");

    var FridayDinnerMealChoice = localStorage.getItem("FridayDinnerMealChoice");

    var SaturdayBreakfastMealChoice = localStorage.getItem("SaturdayBreakfastMealChoice");

    var SaturdayLunchMealChoice = localStorage.getItem("SaturdayLunchMealChoice");

    var SaturdayDinnerMealChoice = localStorage.getItem("SaturdayDinnerMealChoice");

    var SundayBreakfastMealChoice = localStorage.getItem("SundayBreakfastMealChoice");

    var SundayLunchMealChoice = localStorage.getItem("SundayLunchMealChoice");

    var SundayDinnerMealChoice = localStorage.getItem("SundayDinnerMealChoice");
   

    //title variable local gets
    var MondayBreakfastTitle = localStorage.getItem("MondayBreakfast");

    var MondayLunchTitle = localStorage.getItem("MondayLunch");

    var MondayDinnerTitle = localStorage.getItem("MondayDinner");

    var TuesdayBreakfastTitle = localStorage.getItem("TuesdayBreakfast");

    var TuesdayLunchTitle = localStorage.getItem("TuesdayLunch");

    var TuesdayDinnerTitle = localStorage.getItem("TuesdayDinner");

    var WednesdayBreakfastTitle = localStorage.getItem("WednesdayBreakfast");

    var WednesdayLunchTitle = localStorage.getItem("WednesdayLunch");

    var WednesdayDinnerTitle = localStorage.getItem("WednesdayDinner");

    var ThursdayBreakfastTitle = localStorage.getItem("ThursdayBreakfast");

    var ThursdayLunchTitle = localStorage.getItem("ThursdayLunch");

    var ThursdayDinnerTitle = localStorage.getItem("ThursdayDinner");

    var FridayBreakfastTitle = localStorage.getItem("FridayBreakfast");

    var FridayLunchTitle = localStorage.getItem("FridayLunch");

    var FridayDinnerTitle = localStorage.getItem("FridayDinner");

    var SaturdayBreakfastTitle = localStorage.getItem("SaturdayBreakfast");

    var SaturdayLunchTitle = localStorage.getItem("SaturdayLunch");

    var SaturdayDinnerTitle = localStorage.getItem("SaturdayDinner");

    var SundayBreakfastTitle = localStorage.getItem("SundayBreakfast");

    var SundayLunchTitle = localStorage.getItem("SundayLunch");

    var SundayDinnerTitle = localStorage.getItem("SundayDinner");

    //chef local gets

    //ingredients local gets

    var MondayBreakfastIngredients = localStorage.getItem("MondayBreakfastIngredients");

    var MondayLunchIngredients = localStorage.getItem("MondayLunchIngredients");

    var MondayDinnerIngredients = localStorage.getItem("MondayDinnerIngredients");

    var TuesdayBreakfastIngredients = localStorage.getItem("TuesdayBreakfastIngredients");

    var TuesdayLunchIngredients = localStorage.getItem("TuesdayLunchIngredients");

    var TuesdayDinnerIngredients = localStorage.getItem("TuesdayDinnerIngredients");

    var WednesdayBreakfastIngredients = localStorage.getItem("WednesdayBreakfastIngredients");

    var WednesdayLunchIngredients = localStorage.getItem("WednesdayLunchIngredients");

    var WednesdayDinnerIngredients = localStorage.getItem("WednesdayDinnerIngredients");

    var ThursdayBreakfastIngredients = localStorage.getItem("ThursdayBreakfastIngredients");

    var ThursdayLunchIngredients = localStorage.getItem("ThursdayLunchIngredients");

    var ThursdayDinnerIngredients = localStorage.getItem("ThursdayDinnerIngredients");

    var FridayBreakfastIngredients = localStorage.getItem("FridayBreakfastIngredients");

    var FridayLunchIngredients = localStorage.getItem("FridayLunchIngredients");

    var FridayDinnerIngredients = localStorage.getItem("FridayDinnerIngredients");

    var SaturdayBreakfastIngredients = localStorage.getItem("SaturdayBreakfastIngredients");

    var SaturdayLunchIngredients = localStorage.getItem("SaturdayLunchIngredients");

    var SaturdayDinnerIngredients = localStorage.getItem("SaturdayDinnerIngredients");

    var SundayBreakfastIngredients = localStorage.getItem("SundayBreakfastIngredients");

    var SundayLunchIngredients = localStorage.getItem("SundayLunchIngredients");

    var SundayDinnerIngredients = localStorage.getItem("SundayDinnerIngredients");

    //instruction local gets

    var MondayBreakfastInstructions = JSON.parse(localStorage.getItem("MondayBreakfastInstructions"));

    var MondayLunchInstructions= JSON.parse(localStorage.getItem("MondayLunchInstructions"));

    var MondayDinnerInstructions = JSON.parse(localStorage.getItem("MondayDinnerInstructions"));

    var TuesdayBreakfastInstructions = JSON.parse(localStorage.getItem("TuesdayBreakfastInstructions"));

    var TuesdayLunchInstructions = JSON.parse(localStorage.getItem("TuesdayLunchInstructions"));

    var TuesdayDinnerInstructions = JSON.parse(localStorage.getItem("TuesdayDinnerInstructions"));

    var WednesdayBreakfastInstructions = JSON.parse(localStorage.getItem("WednesdayBreakfastInstructions"));

    var WednesdayLunchInstructions = JSON.parse(localStorage.getItem("WednesdayLunchInstructions"));

    var WednesdayDinnerInstructions = JSON.parse(localStorage.getItem("WednesdayDinnerInstructions"));

    var ThursdayBreakfastInstructions = JSON.parse(localStorage.getItem("ThursdayBreakfastInstructions"));

    var ThursdayLunchInstructions = JSON.parse(localStorage.getItem("ThursdayLunchInstructions"));

    var ThursdayDinnerInstructions = JSON.parse(localStorage.getItem("ThursdayDinnerInstructions"));

    var FridayBreakfastInstructions = JSON.parse(localStorage.getItem("FridayBreakfastInstructions"));

    var FridayLunchInstructions = JSON.parse(localStorage.getItem("FridayLunchInstructions"));

    var FridayDinnerInstructions = JSON.parse(localStorage.getItem("FridayDinnerInstructions"));

    var SaturdayBreakfastInstructions = JSON.parse(localStorage.getItem("SaturdayBreakfastInstructions"));

    var SaturdayLunchInstructions = JSON.parse(localStorage.getItem("SaturdayLunchInstructions"));

    var SaturdayDinnerInstructions = JSON.parse(localStorage.getItem("SaturdayDinnerInstructions"));

    var SundayBreakfastInstructions = JSON.parse(localStorage.getItem("SundayBreakfastInstructions"));

    var SundayLunchInstructions = JSON.parse(localStorage.getItem("SundayLunchInstructions"));

    var SundayDinnerInstructions = JSON.parse(localStorage.getItem("SundayDinnerInstructions"));

    //this preps to put the text into empty p tags

var ingredsP = $("<p>");
var instructP = $("<p>");


//If statements determining what recipe to use corresponding to the day and time
if (day === "Monday" && time <= 9) {
    ingredsP.text(MondayBreakfastIngredients);
    instructP.text(MondayBreakfastInstructions[0].steps);
    if (localStorage.getItem("MondayBreakfastMealChoice") === null){
        dish = "spaghetti";
        }
    else {
        dish = MondayBreakfastMealChoice; 
        }
    $("#dishName").text(dish);
    $(".mealText").html("&nbsp;" + MondayBreakfastTitle);
}
if (day === "Monday" && time <= 15 && time > 9) {
    ingredsP.text(MondayLunchIngredients);
    instructP.text(MondayLunchInstructions[0].steps);
    if (localStorage.getItem("MondayLunchMealChoice") === null){
        dish = "spaghetti";
        }
    else {
        dish = MondayLunchMealChoice; 
        }
    $("#dishName").text(dish);
    $(".mealText").html("&nbsp;" + MondayLunchTitle);
}
if (day === "Monday" && time > 15) {
    ingredsP.text(MondayDinnerIngredients);
    instructP.text(MondayDinnerInstructions[0].steps);
    if (localStorage.getItem("MondayDinnerMealChoice") === null){
        dish = "spaghetti";
        }
    else {
        dish = MondayDinnerMealChoice; 
        }
    $("#dishName").text(dish);
    $(".mealText").html("&nbsp;" + MondayDinnerTitle);
}

if (day === "Tuesday" && time <= 9) {
    ingredsP.text(TuesdayBreakfastIngredients);
    instructP.text(TuesdayBreakfastInstructions[0].steps);
    if (localStorage.getItem("TuesdayBreakfastMealChoice") === null){
        dish = "spaghetti";
        }
    else {
        dish = TuesdayBreakfastMealChoice; 
        }
        $("#dishName").text(dish);
        $(".mealText").html("&nbsp;" + TuesdayBreakfastTitle);
}

if (day === "Tuesday" && time <= 15 && time > 9) {
    ingredsP.text(TuesdayLunchIngredients);
    instructP.text(TuesdayLunchInstructions[0].steps);
    if (localStorage.getItem("TuesdayLunchMealChoice") === null){
        dish = "spaghetti";
        }
    else {
        dish = TuesdayLunchMealChoice; 
        }
    $("#dishName").text(dish); 
    $(".mealText").html("&nbsp;" + TuesdayLunchTitle);      
}

if (day === "Tuesday" && time > 15) {
    ingredsP.text(TuesdayDinnerIngredients);
    instructP.text(TuesdayDinnerInstructions[0].steps);
    if (localStorage.getItem("TuesdayDinnerMealChoice") === null){
        dish = "spaghetti";
        }
    else {
        dish = TuesdayDinnerMealChoice; 
        }
    $("#dishName").text(dish);
    $(".mealText").html("&nbsp;" + TuesdayDinnerTitle);
}

if (day === "Wednesday" && time <= 9) {
    ingredsP.text(WednesdayBreakfastIngredients);
    instructP.text(WednesdayBreakfastInstructions[0].steps);
    if (localStorage.getItem("WednesdayBreakfastMealChoice") === null){
        dish = "spaghetti";
        }
    else {
        dish = WednesdayBreakfastMealChoice; 
        }
    $("#dishName").text(dish);
    $(".mealText").html("&nbsp;" + WednesdayBreakfastTitle);
}

if (day === "Wednesday" && time <= 15 && time > 9) {
    ingredsP.text(WednesdayLunchIngredients);
    instructP.text(WednesdayLunchInstructions[0].steps);
    if (localStorage.getItem("WednesdayLunchMealChoice") === null){
        dish = "spaghetti";
        }
    else {
        dish = WednesdayLunchMealChoice; 
        }
    $("#dishName").text(dish);
    $(".mealText").html("&nbsp;" + WednesdayLunchTitle);
}

if (day === "Wednesday" && time > 15) {
    ingredsP.text(WednesdayDinnerIngredients);
    instructP.text(WednesdayDinnerInstructions[0].steps);
    if (localStorage.getItem("WednesdayDinnerMealChoice") === null){
        dish = "spaghetti";
        }
    else {
        dish = WednesdayDinnerMealChoice; 
        }
    $("#dishName").text(dish);
    $(".mealText").html("&nbsp;" + WednesdayDinnerTitle);
}

if (day === "Thursday" && time <= 9) {
    ingredsP.text(ThursdayBreakfastIngredients);
    instructP.text(ThursdayBreakfastInstructions[0].steps);
    if (localStorage.getItem("ThursdayBreakfastMealChoice") === null){
        dish = "spaghetti";
        }
    else {
        dish = ThursdayBreakfastMealChoice; 
        }
    $("#dishName").text(dish);
    $(".mealText").html("&nbsp;" + ThursdayBreakfastTitle);
}

if (day === "Thursday" && (time <= 15 && time > 9)) {
    ingredsP.text(ThursdayLunchIngredients);
    instructP.text(ThursdayLunchInstructions[0].steps);
    if (localStorage.getItem("ThursdayLunchMealChoice") === null){
        dish = "spaghetti";
        }
    else {
        dish = ThursdayLunchMealChoice; 
        }
    $("#dishName").text(dish);
    $(".mealText").html("&nbsp;" + ThursdayLunchTitle );
}

if (day === "Thursday" && time > 15) {
    ingredsP.text(ThursdayDinnerIngredients);
    console.log(ThursdayDinnerInstructions[0].steps)
    instructP.text(ThursdayDinnerInstructions[0].steps);
    if (localStorage.getItem("ThursdayDinnerMealChoice") === null){
        dish = "spaghetti";
        }
    else {
        dish = ThursdayDinnerMealChoice; 
        }
    $("#dishName").text(dish);
    $(".mealText").html("&nbsp;" + ThursdayDinnerTitle);
}

if (day === "Friday" && time <= 9) {
    ingredsP.text(FridayBreakfastIngredients);
    instructP.text(FridayBreakfastInstructions[0].steps);
    if (localStorage.getItem("FridayBreakfastMealChoice") === null){
        dish = "spaghetti";
        }
    else {
        dish = FridayBreakfastMealChoice; 
        }
    $("#dishName").text(dish);
    $(".mealText").html("&nbsp;" + FridayBreakfastTitle);
}

if (day === "Friday" && time <= 15 && time > 9) {
    ingredsP.text(FridayLunchIngredients);
    instructP.text(FridayLunchInstructions[0].steps);
    if (localStorage.getItem("FridayLunchMealChoice") === null){
        dish = "spaghetti";
        }
    else {
        dish = FridayLunchMealChoice; 
        }
    $("#dishName").text(dish);
    $(".mealText").html("&nbsp;" + FridayLunchTitle);
}

if (day === "Friday" && time > 15) {
    ingredsP.text(FridayDinnerIngredients);
    instructP.text(FridayDinnerInstructions[0].steps);
    if (localStorage.getItem("FridayDinnerMealChoice") === null){
        dish = "spaghetti";
        }
    else {
        dish = FridayDinnerMealChoice; 
        }
    $("#dishName").text(dish);
    $(".mealText").html("&nbsp;" + FridayDinnerTitle);
}

if (day === "Saturday" && time <= 9) {
    ingredsP.text(SaturdayBreakfastIngredients);
    instructP.text(SaturdayBreakfastInstructions[0].steps);
    if (localStorage.getItem("SaturdayBreakfastMealChoice") === null){
        dish = "spaghetti";
        }
    else {
        dish = SaturdayBreakfastMealChoice; 
        }
    $("#dishName").text(dish);
    $(".mealText").html("&nbsp;" + SaturdayBreakfastTitle);
}

if (day === "Saturday" && time <= 15 && time > 9) {
    ingredsP.text(SaturdayLunchIngredients);
    instructP.text(SaturdayLunchInstructions[0].steps);
    if (localStorage.getItem("SaturdayLunchMealChoice") === null){
        dish = "spaghetti";
        }
    else {
        dish = SaturdayLunchMealChoice; 
        }
    $("#dishName").text(dish);
    $(".mealText").html("&nbsp;" + SaturdayLunchTitle);
}

if (day === "Saturday" && time > 15) {
    ingredsP.text(SaturdayDinnerIngredients);
    instructP.text(SaturdayDinnerInstructions[0].steps);
    if (localStorage.getItem("SaturdayDinnerMealChoice") === null){
        dish = "spaghetti";
        }
    else {
        dish = SaturdayDinnerMealChoice; 
        }
    $("#dishName").text(dish);
    $(".mealText").html("&nbsp;" + SaturdayDinnerTitle);
}

if (day === "Sunday" && time <= 9) {
    ingredsP.text(SundayBreakfastIngredients);
    instructP.text(SundayBreakfastInstructions[0].steps);
    if (localStorage.getItem("SundayBreakfastMealChoice") === null){
        dish = "spaghetti";
        }
    else {
        dish = SundayBreakfastMealChoice; 
        }
    $("#dishName").text(dish);
    $(".mealText").html("&nbsp;" + SundayBreakfastTitle);
}

if (day === "Sunday" && time <= 15 && time > 9) {
    ingredsP.text(SundayLunchIngredients);
    instructP.text(SundayLunchInstructions[0].steps);
    if (localStorage.getItem("SundayLunchMealChoice") === null){
        dish = "spaghetti";
        }
    else {
        dish = SundayLunchMealChoice; 
        }
    $("#dishName").text(dish);
    $(".mealText").html("&nbsp;" + SundayLunchTitle);
}

if (day === "Sunday" && time > 15) {
    ingredsP.text(SundayDinnerIngredients);
    instructP.text(SundayDinnerInstructions[0].steps);
    if (localStorage.getItem("SundayDinnerMealChoice") === null){
        dish = "spaghetti";
        }
    else {
        dish = SundayDinnerMealChoice; 
        }
    $("#dishName").text(dish);
    $(".mealText").html("&nbsp;" + SundayDinnerTitle);
}
///Ends if statements

$(".ingredientsList").html(ingredsP);
$(".instructionsList").html(instructP)

var i = 0;   
function showGif(){
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=uvWJQHwlb6r71Lm84qIcFqwpq2o3xdKX&q=" + dish;
  $.ajax({
  url: queryURL,
  method: "GET"
  }).then(function(response) {
  var imageUrl = response.data[i].images.fixed_height.url;
        var gif = $("<img>");
        gif.attr("src", imageUrl);
        gif.attr("alt", "Meal Image");
        gif.attr("class", "giphy");
        $("#images").html(gif);
  });
}

showGif();

  $("#images").on("click", function(event){
    event.preventDefault();
    var newI = i++;
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=uvWJQHwlb6r71Lm84qIcFqwpq2o3xdKX&q=" + dish;
  
    $.ajax({
  url: queryURL,
  method: "GET"
  }).then(function(response) {
  console.log(newI);
  var imageUrl = response.data[newI].images.fixed_height.url;
        var gif = $("<img>");
        gif.attr("src", imageUrl);
        gif.attr("alt", "Meal Image");
        $("#images").html(gif);
  });
});