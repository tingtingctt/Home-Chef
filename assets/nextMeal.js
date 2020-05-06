var time = 8;
var day = "Tuesday";



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

    var ThursdayLunchTitle = localStorage.getItem("ThursdayDinner");

    var FridayBreakfastTitle = localStorage.getItem("FridayBreakfast");

    var FridayLunchTitle = localStorage.getItem("FridayLunch");

    var FridayDinnerTitle = localStorage.getItem("FridayDinner");

    var SaturdayBreakfastTitle = localStorage.getItem("SaturdayBreakfast");

    var SaturdayLunchTitle = localStorage.getItem("SaturdayLunch");

    var SaturdayDinnerTitle = localStorage.getItem("SaturdayDinner");

    var SundayBreakfastTitle = localStorage.getItem("SundayBreakfast");

    var SundayLunchTitle = localStorage.getItem("SundayLunch");

    var SundayDinnerTitle = localStorage.getItem("SundayDinner");

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

    var ThursdayLunchIngredients = localStorage.getItem("ThursdayDinnerIngredients");

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

    var ThursdayLunchInstructions = JSON.parse(localStorage.getItem("ThursdayDinnerInstructions"));

    var FridayBreakfastInstructions = JSON.parse(localStorage.getItem("FridayBreakfastInstructions"));

    var FridayLunchInstructions = JSON.parse(localStorage.getItem("FridayLunchInstructions"));

    var FridayDinnerInstructions = JSON.parse(localStorage.getItem("FridayDinnerInstructions"));

    var SaturdayBreakfastInstructions = JSON.parse(localStorage.getItem("SaturdayBreakfastInstructions"));

    var SaturdayLunchInstructions = JSON.parse(localStorage.getItem("SaturdayLunchInstructions"));

    var SaturdayDinnerInstructions = JSON.parse(localStorage.getItem("SaturdayDinnerInstructions"));

    var SundayBreakfastInstructions = JSON.parse(localStorage.getItem("SundayBreakfastInstructions"));

    var SundayLunchInstructions = JSON.parse(localStorage.getItem("SundayLunchInstructions"));

    var SundayDinnerInstructions = JSON.parse(localStorage.getItem("SundayDinnerInstructions"));

    //this takes the recipe from the local storage

var ingredsP = $("<p>");
var instructP = $("<p>");


//If statements determining what recipe to use corresponding to the day and time
if (day === "Monday" && time <= 9) {
    ingredsP.text(MondayBreakfastIngredients);
    instructP.text(MondayBreakfastInstructions[0].steps);
}
if (day === "Monday" && time <= 15 && time > 9) {
    ingredsP.text(MondayLunchIngredients);
    instructP.text(MondayLunchInstructions[0].steps);
}
if (day === "Monday" && time > 15) {
    ingredsP.text(MondayDinnerIngredients);
    instructP.text(MondayDinnerInstructions[0].steps);
}

if (day === "Tuesday" && time <= 9) {
    ingredsP.text(TuesdayBreakfastIngredients);
    instructP.text(TuesdayBreakfastInstructions[0].steps);
}
if (day === "Tuesday" && time <= 15 && time > 9) {
    ingredsP.text(TuesdayLunchIngredients);
    instructP.text(TuesdayLunchInstructions[0].steps);
}
if (day === "Tuesday" && time > 15) {
    ingredsP.text(TuesdayDinnerIngredients);
    instructP.text(TuesdayDinnerInstructions[0].steps);
}

if (day === "Wednesday" && time <= 9) {
    ingredsP.text(WednesdayBreakfastIngredients);
    instructP.text(WednesdayBreakfastInstructions[0].steps);
}
if (day === "Wednesday" && time <= 15 && time > 9) {
    ingredsP.text(WednesdayLunchIngredients);
    instructP.text(WednesdayLunchInstructions[0].steps);
}
if (day === "Wednesday" && time > 15) {
    ingredsP.text(WednesdayDinnerIngredients);
    instructP.text(WednesdayDinnerInstructions[0].steps);
}
if (day === "Thursday" && time <= 9) {
    ingredsP.text(ThursdayBreakfastIngredients);
    instructP.text(ThursdayBreakfastInstructions[0].steps);
}
if (day === "Thursday" && time <= 15 && time > 9) {
    ingredsP.text(ThursdayLunchIngredients);
    instructP.text(ThursdayLunchInstructions[0].steps);
}
if (day === "Thursday" && time > 15) {
    ingredsP.text(ThursdayDinnerIngredients);
    instructP.text(ThursdayDinnerInstructions[0].steps);
}
if (day === "Friday" && time <= 9) {
    ingredsP.text(FridayBreakfastIngredients);
    instructP.text(FridayBreakfastInstructions[0].steps);
}
if (day === "Friday" && time <= 15 && time > 9) {
    ingredsP.text(FridayLunchIngredients);
    instructP.text(FridayLunchInstructions[0].steps);
}
if (day === "Friday" && time > 15) {
    ingredsP.text(FridayDinnerIngredients);
    instructP.text(FridayDinnerInstructions[0].steps);
}
if (day === "Saturday" && time <= 9) {
    ingredsP.text(SaturdayBreakfastIngredients);
    instructP.text(SaturdayBreakfastInstructions[0].steps);
}
if (day === "Saturday" && time <= 15 && time > 9) {
    ingredsP.text(SaturdayLunchIngredients);
    instructP.text(SaturdayLunchInstructions[0].steps);
}
if (day === "Saturday" && time > 15) {
    ingredsP.text(SaturdayDinnerIngredients);
    instructP.text(SaturdayDinnerInstructions[0].steps);
}
if (day === "Sunday" && time <= 9) {
    ingredsP.text(SundayBreakfastIngredients);
    instructP.text(SundayBreakfastInstructions[0].steps);
}
if (day === "Sunday" && time <= 15 && time > 9) {
    ingredsP.text(SundayLunchIngredients);
    instructP.text(SundayLunchInstructions[0].steps);
}
if (day === "Sunday" && time > 15) {
    ingredsP.text(SundayDinnerIngredients);
    instructP.text(SundayDinnerInstructions[0].steps);
}
///Ends if statements

$(".ingredientsList").html(ingredsP);
$(".instructionsList").html(instructP)