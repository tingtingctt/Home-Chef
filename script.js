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

    console.log(MondayBreakfastTitle);



    // Monday Breakfast
    var inputMonBId = $("#inputMonB")
    inputMonBId.attr("placeholder", MondayBreakfastTitle);
    console.log(inputMonBId);


$("#btn-MB").on("click", function(){
    event.preventDefault();
    var newChoiceMonBre = $(".inputMB").val();
    // var inputMonBId = $("#inputMonB")
    // inputMonBId.attr("placeholder", MondayBreakfastTitle);

    $("#btn-MB").attr("id", "monBre");
    localStorage.setItem("Mon-Breakfast", newChoiceMonBre);
    console.log(newChoiceMonBre);
    
});


    // Monday Lunch

    var inputMonLId = $("#inputMonL")
    inputMonLId.attr("placeholder", MondayLunchTitle);
    console.log(inputMonLId);


$("#btn-ML").on("click", function(){
    event.preventDefault();
    var newChoiceMonLun = $(".inputML").val();
    

    $("#btn-ML").attr("id", "monLun");
    localStorage.setItem("Mon-Lunch", newChoiceMonLun);
    console.log(newChoiceMonLun);
    
});


    // Monday Dinner
    var inputMonDId = $("#inputMonD")
    inputMonDId.attr("placeholder", MondayDinnerTitle);
    console.log(inputMonDId);


$("#btn-MD").on("click", function(){
    event.preventDefault();
    var newChoiceMonDin = $(".inputMD").val();
    

    $("#btn-MD").attr("id", "monDin");
    localStorage.setItem("Mon-Dinner", newChoiceMonDin)
    console.log(newChoiceMonDin);
    
});






// Tuesday Buttons


// Tueday Breakfast

var inputTueBId = $("#inputTueB")
inputTueBId.attr("placeholder", TuesdayBreakfastTitle)
console.log(inputTueBId);

$("#btn-TB").on("click", function(){
    event.preventDefault();
    var newChoiceTueBre = $(".inputTB").val();
    

    $("#btn-TB").attr("id", "tueBre");
    localStorage.setItem("Tue-Breakfast", newChoiceTueBre);
    console.log(newChoiceTueBre);
});




// Tuesday Lunch

var inputTueLId = $("#inputTueL")
inputTueLId.attr("placeholder", TuesdayLunchTitle )
console.log(inputTueBId);


$("#btn-TL").on("click", function(){
    event.preventDefault();
    var newChoiceTueBre = $(".inputTL").val();
    

    $("#btn-TL").attr("id", "tueLun");
    localStorage.setItem("Tue-Lunch", newChoiceTueBre);
    console.log(newChoiceTueBre);
});



// Tuesday Dinner 

var inputTueDId = $("#inputTueD")
inputTueDId.attr("placeholder", TuesdayDinnerTitle )
console.log(inputTueBId);


$("#btn-TD").on("click", function(){
    event.preventDefault();
    var newChoiceTueBre = $(".inputTD").val();
    

    $("#btn-TD").attr("id", "tueDin");
    localStorage.setItem("Tue-Dinner", newChoiceTueBre);
    console.log(newChoiceTueBre);
});




// Wednesday Buttons


// Wednesday Breakfast


var inputWedBId = $("#inputWedB")
inputWedBId.attr("placeholder", WednesdayBreakfastTitle )
console.log(inputWedBId);


$("#btn-WD").on("click", function(){
    event.preventDefault();
    var newChoiceWedBre = $(".inputWD").val();
    

    $("#btn-WD").attr("id", "wedBre");
    localStorage.setItem("Wed-Breakfast", newChoiceWedBre);
    console.log(newChoiceWedBre);
});


// Wednesday Lunch
var inputWedLId = $("#inputWedL")
inputWedLId.attr("placeholder", WednesdayLunchTitle )
console.log(inputWedLId);


$("#btn-WL").on("click", function(){
    event.preventDefault();
    var newChoiceWedLun = $(".inputWL").val();
    

    $("#btn-WL").attr("id", "wedLun");
    localStorage.setItem("Wed-Lunch", newChoiceWedLun);
    console.log(newChoiceWedLun);
});


// Wednesday Dinner

var inputWedDId = $("#inputWedD")
inputWedDId.attr("placeholder", WednesdayDinnerTitle )
console.log(inputWedDId);


$("#btn-WD").on("click", function(){
    event.preventDefault();
    var newChoiceWedDin = $(".inputWD").val();
    

    $("#btn-WD").attr("id", "wedLun");
    localStorage.setItem("Wed-Dinner", newChoiceWedDin);
    console.log(newChoiceWedDin);
});


// Thursday buttons


// Thursday Breakfast

var inputThuBId = $("#inputThuB")
inputThuBId.attr("placeholder", ThursdayBreakfastTitle )
console.log(inputThuBId);


$("#btn-WD").on("click", function(){
    event.preventDefault();
    var newChoiceThuBre = $(".inputThD").val();
    

    $("#btn-WD").attr("id", "wedBre");
    localStorage.setItem("Wed-Breakfast", newChoiceThuBre);
    console.log(newChoiceThuBre);
});


// Thursday Lunch

var inputThuLId = $("#inputThuL")
inputThuLId.attr("placeholder", ThursdayLunchTitle )
console.log(inputThuLId);


$("#btn-ThL").on("click", function(){
    event.preventDefault();
    var newChoiceThuLun = $(".inputThL").val();
    

    $("#btn-WD").attr("id", "wedBre");
    localStorage.setItem("Wed-Breakfast", newChoiceThuLun);
    console.log(newChoiceThuLun);
});


//  Thursday Dinner 

var inputThuDId = $("#inputThuD")
inputThuDId.attr("placeholder", ThursdayDinnerTitle )
console.log(inputThuDId);


$("#btn-ThD").on("click", function(){
    event.preventDefault();
    var newChoiceThuDin = $(".inputThD").val();
    

    $("#btn-ThD").attr("id", "thuBre");
    localStorage.setItem("Thu-Dinner", newChoiceThuDin);
    console.log(newChoiceThuDin);
});



// Friday Buttons

// Friday Breakfast


var inputFriBId = $("#inputFriB")
inputFriBId.attr("placeholder", FridayBreakfastTitle )
console.log(inputFriBId);


$("#btn-FB").on("click", function(){
    event.preventDefault();
    var newChoiceFriBre = $(".inputFD").val();
    

    $("#btn-FB").attr("id", "friBre");
    localStorage.setItem("Fri-Breakfast", newChoiceFriBre);
    console.log(newChoiceFriBre);
});

// Friday Lunch
var inputFriLId = $("#inputFriL")
inputFriLId.attr("placeholder", FridayLunchTitle )
console.log(inputFriLId);


$("#btn-FL").on("click", function(){
    event.preventDefault();
    var newChoiceFriLun = $(".inputFL").val();
    

    $("#btn-FL").attr("id", "friLun");
    localStorage.setItem("Fri-Lunch", newChoiceFriLun);
    console.log(newChoiceFriLun);
});


// Friday Dinner
var inputFriDId = $("#inputFriD")
inputFriDId.attr("placeholder", FridayDinnerTitle )
console.log(inputFriDId);


$("#btn-FD").on("click", function(){
    event.preventDefault();
    var newChoiceFriDin = $(".inputFD").val();
    

    $("#btn-FD").attr("id", "friDin");
    localStorage.setItem("Fri-Dinner", newChoiceFriDin);
    console.log(newChoiceFriDin);
});



// Saturday Buttons

// Saturday Breakfast

var inputSatBId = $("#inputSatB")
inputSatBId.attr("placeholder", SaturdayBreakfastTitle )
console.log(inputSatBId);


$("#btn-SaB").on("click", function(){
    event.preventDefault();
    var newChoiceSatBre = $(".inputSTD").val();
    

    $("#btn-FB").attr("id", "friBre");
    localStorage.setItem("Sat-Breakfast", newChoiceSatBre);
    console.log(newChoiceSatBre);
});

// Saturday Lunch


var inputSatLId = $("#inputSatL")
inputSatLId.attr("placeholder", SaturdayLunchTitle )
console.log(inputSatLId);


$("#btn-SaL").on("click", function(){
    event.preventDefault();
    var newChoiceSatLun = $(".inputSTL").val();
    

    $("#btn-SaL").attr("id", "satLun");
    localStorage.setItem("Sat-Lunch", newChoiceSatLun);
    console.log(newChoiceSatLun);
});


// Saturday Dinner


var inputSatDId = $("#inputSatD")
inputSatDId.attr("placeholder", SaturdayDinnerTitle )
console.log(inputSatDId);


$("#btn-SaD").on("click", function(){
    event.preventDefault();
    var newChoiceSatDin = $(".inputSTD").val();
    

    $("#btn-SaD").attr("id", "satLDin");
    localStorage.setItem("Sat-Dinner", newChoiceSatDin);
    console.log(newChoiceSatDin);
});



// Sunday Buttons


// Sunday Breakfast

var inputSunBId = $("#inputSunB")
inputSunBId.attr("placeholder", SundayBreakfastTitle )
console.log(inputSunBId);


$("#btn-SuB").on("click", function(){
    event.preventDefault();
    var newChoiceSunBre = $(".inputSUB").val();
    

    $("#btn-SuB").attr("id", "sunBre");
    localStorage.setItem("Sun-Breakfast", newChoiceSunBre);
    console.log(newChoiceSunBre);
});


// Sunday Lunch


var inputSunLId = $("#inputSunL")
inputSunLId.attr("placeholder", SundayLunchTitle )
console.log(inputSunLId);


$("#btn-SuL").on("click", function(){
    event.preventDefault();
    var newChoiceSunLun = $(".inputSUL").val();
    

    $("#btn-SuL").attr("id", "sunLun");
    localStorage.setItem("Sun-Lunch", newChoiceSunLun);
    console.log(newChoiceSunLun);
});



// Sunday Dinner

var inputSunDId = $("#inputSunD")
inputSunDId.attr("placeholder", SundayDinnerTitle )
console.log(inputSunDId);


$("#btn-SuD").on("click", function(){
    event.preventDefault();
    var newChoiceSunDin = $(".inputSUD").val();
    

    $("#btn-SuD").attr("id", "sunDin");
    localStorage.setItem("Sun-Dinner", newChoiceSunDin);
    console.log(newChoiceSunDin);
});













// $("#btn-TL").on("click", function(){
//     event.preventDefault();
//     var newChoiceTueLun = $(".inputTL").val();
    

//     $("#btn-TL").attr("id", "tueLun");
//     localStorage.setItem("Tue-Lunch", newChoiceTueLun);
//     console.log(newChoiceTueLun);
    
// });

// $("#btn-TD").on("click", function(){
//     event.preventDefault();
//     var newChoiceTueDin = $(".inputTD").val();
    

//     $("#btn-TD").attr("id", "tueDin");
//     localStorage.setItem("Tue-Dinner", newChoiceTueDin)
//     console.log(newChoiceTueDin);
    
// });


