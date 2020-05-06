
$(document).ready(function() {
  var rat = $("#rat");
  var dish = localStorage.getItem("Meal choice");
  console.log(dish)
  var chef = "Chandler"
  

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


