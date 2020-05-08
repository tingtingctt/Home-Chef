




$(document).ready(function() {
  var rat = $("#rat");

// ----------------------------- settings ---------------------------------
  $("#who").on("click", function(event){
    event.preventDefault();
    $("#selectavatar").attr("style", "display: block");
    rat.attr("style", "display: none");
  }); 


  $("#selectmickey").on("click", function(event){
    event.preventDefault();
    rat.attr("src","assets/TT Images/mickey.png");
    rat.attr("style", "display: block");
    $("#selectavatar").attr("style", "display: none");
  }); 

  $("#selectrat").on("click", function(event){
    event.preventDefault();
    rat.attr("src","assets/TT Images/ratatouille carrot.png");
    rat.attr("style", "display: block");
    $("#selectavatar").attr("style", "display: none");
  }); 

  $("#selectbob").on("click", function(event){
    event.preventDefault();
    rat.attr("src","assets/TT Images/spongebob.png");
    rat.attr("style", "display: block");
    $("#selectavatar").attr("style", "display: none");
  }); 

  $("#selectgustav").on("click", function(event){
    event.preventDefault();
    rat.attr("src","assets/TT Images/gustav.png");
    rat.attr("style", "display: block");
    $("#selectavatar").attr("style", "display: none");
  }); 


  // ------------------ Avatar animation ---------------------

  $("#rat").on("click", function(event){
    for (i=0; i<5; i++){
      event.preventDefault();
      rat.animate ({
        top: (Math.random() * 800),
        left:  (Math.random() * 1500),
      }, 1000);
    }
  });

// ------------------ scroll up and down ---------------------


  $("#collapse").on("click", function(event){
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $("nav").offset().top
  }, 2000);
  });

  $("#settings").on("click", function(event){
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $("#fooddiv").offset().top
  }, 2000);
  });

// ---------------- Anna's local storage -------------------------



  $("#dateEl").prepend(new Date().toLocaleDateString());
 

  // ------------------ chef's superpower --------------------

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


// -------------------- click to change placemat (background image) ----------------------


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


  // ----------- Virtual Garden -------------

  $("#gardenbtn").on("click", function(event){
    event.preventDefault();
    $("#whiteout").attr("style", "display: block");
  }); 

  $("#exit").on("click", function(event){
    event.preventDefault();
    $("#whiteout").attr("style", "display: none");
  }); 

  $("#weed1").on("click", function(event){
    event.preventDefault();
  $("#weed1").animate({
    height: '+=30px',
    top: '-=30px', 
    left: '-=15px', 
  }, 500);
  }); 

  $("#weed2").on("click", function(event){
    event.preventDefault();
  $("#weed2").animate({
    height: '+=30px',
    top: '-=30px',
    left: '-=15px', 
  }, 500);
  }); 

  $("#mushroom1").on("click", function(event){
    event.preventDefault();
  $("#mushroom1").animate({
    height: '+=30px',
    top: '-=30px',
    left: '-=15px', 
  }, 500);
  }); 

  $("#mushroom2").on("click", function(event){
    event.preventDefault();
  $("#mushroom2").animate({
    height: '+=30px',
    top: '-=30px',
    left: '-=15px', 
  }, 500);
  }); 


  // $.fn.animateRotate = function(angle, duration, easing, complete) {
  //   return this.each(function() {
  //     var $elem = $(this);
  
  //     $({deg: 0}).animate({deg: angle}, {
  //       duration: duration,
  //       easing: easing,
  //       step: function(now) {
  //         $elem.css({
  //            transform: 'rotate(' + now + 'deg)'
  //          });
  //       },
  //       complete: complete || $.noop
  //     });
  //   });
  // };
  
  // $('#gardendiv').animateRotate(90);


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


  // $(document).keyup(function(e) {
  //   switch (e.which) {

  //   // Move Buttons (Keyboard Down)
  //   case 40:
  //     rat.animate({ top: "+=100px" }, "normal");
  //     break;

  //     // Move Buttons (Keyboard Right)
  //   case 39:
  //     rat.animate({ left: "+=100px" }, "normal");
  //     break;

  //     // Move Buttons (Keyboard Up)
  //   case 38:
  //     rat.animate({ top: "-=100px" }, "normal");
  //     break;

  //     // Move Buttons (Keyboard Left)
  //   case 37:
  //     rat.animate({ left: "-=100px" }, "normal");
  //     break;

  //     // "r" key for "run"
  //   case 82:
  //     rat.attr("style", "animation: run 10s 1");

  //   default:
  //     break;
  //   }
  // });
 


}); 


