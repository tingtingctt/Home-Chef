
$(document).ready(function() {
  var rat = $("#rat");

  if (localStorage.getItem("Meal choice") === null){
    var dish = "spaghetti";
    }
    else {
      var dish = localStorage.getItem("Meal choice"); 
    }
  
  var chef = localStorage.getItem("Chef for Recipe")
  

  $("#dateEl").prepend(new Date().toLocaleDateString());
  $("#chefName").text(chef);
  $("#dishName").text(dish);


  $("#tomato").on("click", function(event){
    event.preventDefault();
    $("body").attr("style","background-image: url('assets/TT Images/italian.png')")
  });

  $("#lettuce").on("click", function(event){
    event.preventDefault();
    $("body").attr("style","background-image: url('assets/TT Images/embroidery.png')")
  });

  $("#milk").on("click", function(event){
    event.preventDefault();
    $("body").attr("style", "background-image: url('assets/TT Images/color grid 3.png')")
  });

  $("#squid").on("click", function(event){
    event.preventDefault();
    $("body").attr("style","background-image: url('assets/TT Images/kid.jpg')")
  });

  $("#banana").on("click", function(event){
    event.preventDefault();
    $("body").attr("style","background-image: url('assets/TT Images/wood.jpg')")
  });

  $("#eggplant").on("click", function(event){
    event.preventDefault();
    $("body").attr("style","background-image: url('assets/TT Images/marble.png')")
  });

  $("#wine").on("click", function(event){
    event.preventDefault();
    $("body").attr("style","background-image: url('assets/TT Images/bamboo.png')");
  });


  $(".chef").on("click",function() {
    $("#wine").css({height:"10px", left:0, top: '-10px'});
    $("#wine").animate({
      left: '+=290px',
      top: '-=340px',
      width: '60px'
    }, 500)

    $("#squid").css({height:"10px", left:0, top: '-10px'});
    $("#squid").animate({
      left: '+=230px',
      top: '-=330px',
      width: '60px'
    }, 500)

    $("#milk").css({height:"10px", left:0, top: '-10px'});
    $("#milk").animate({
      left: '+=170px',
      top: '-=320px',
      width: '60px'
    }, 500)

    $("#tomato").css({height:"10px", left:0, top: '-10px'});
    $("#tomato").animate({
      left: '+=110px',
      top: '-=330px',
      width: '60px'
    }, 500)

    $("#lettuce").css({height:"10px", left:0, top: '-10px'});
    $("#lettuce").animate({
      left: '+=50px',
      top: '-=330px',
      width: '60px'
    }, 500)

    $("#eggplant").css({height:"10px", left:0, top: '-10px'});
    $("#eggplant").animate({
      left: '-=10px',
      top: '-=330px',
      width: '60px'
    }, 500)

    $("#banana").css({height:"10px", left:0, top: '-10px'});
    $("#banana").animate({
      left: '-=80px',
      top: '-=325px',
      width: '60px'
    }, 500)
  })

//   function loop() {
//       rat.css({height:"10px", left:0});
//       rat.animate ({
//           height: "300px",
//           left: '-=500px',
//       }, 5000, function() {
//           loop();
//       });
//   }
//   loop();


  $(document).keyup(function(e) {
    switch (e.which) {

    // Move Buttons (Keyboard Down)
    case 40:
      rat.animate({ top: "+=100px" }, "normal");
      break;

      // Move Buttons (Keyboard Right)
    case 39:
      rat.animate({ left: "+=100px" }, "normal");
      break;

      // Move Buttons (Keyboard Up)
    case 38:
      rat.animate({ top: "-=100px" }, "normal");
      break;

      // Move Buttons (Keyboard Left)
    case 37:
      rat.animate({ left: "-=100px" }, "normal");
      break;

      // "r" key for "run"
    case 82:
      rat.attr("style", "animation: run 10s 1");


    default:
      break;
    }
  });
 
var i = 0;   
function showGif(){
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=uvWJQHwlb6r71Lm84qIcFqwpq2o3xdKX&q=" + dish;
  $.ajax({
  url: queryURL,
  method: "GET"
  }).then(function(response) {
  console.log(response);
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


}); 


