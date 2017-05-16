$(function() {


    $( ".exploreBtn" ).click(function() {
      alert( "Handler for .click() called." );
    });
  /* my variables */
      var downMoves = 0;
      var lengthOfMove = 0;
      var lengthOfWindowDisplay;// window display

      var lengthOfDownMove;// subdivisions under window display
      var lengthOfDownMoveCount;
      if(lengthOfDownMoveCount%2==0){
        lengthOfDownMoveCount = Math.floor(lengthOfDownMoveCount/2);
      }
      else{
        lengthOfDownMoveCount = Math.floor(lengthOfDownMoveCount/2)+1;
      }
      var secmove;
      var afterLoadLocked = true;
      var afterSlideLocked = false;

      //moveSlide();

function moveSlide(){
        
        $( document ).on('keydown', function(e) {
          var lengthOfDownMove = $(".section-content.active .product-item").height();// subdivisions under window display
          var bottom = $(".section-content.active .exploreArea").height();// move to bottom
          switch(e.which) {
            case 37: {
              resetValues();
            }break;
            case 39: {
              resetValues();
            }break;
            case 38: {
              if(downMoves>0){
                moveUp();
              }
            }
            break;
            case 40: {
              if(downMoves<lengthOfDownMoveCount){
                moveDown();
              }
            }
            break;
          }
        });
}

function moveDown(){
  lengthOfMove = lengthOfMove + lengthOfDownMove;
  console.log("Gumagana"+lengthOfMove);
  secmove.css({"transform":"translate(0px, -"+lengthOfMove+"px)","transition-duration":"1000ms"});
  downMoves++;
}

function moveUp(){
  lengthOfMove = lengthOfMove - lengthOfDownMove; 
  console.log("Gumagana"+lengthOfMove);
  secmove.css({"transform":"translate(0px, -"+lengthOfMove+"px)","transition-duration":"1000ms"});
  downMoves--;
}

  /**********************/
  /* Reset the variables */
      function resetValues(){
        secmove = $('.section-content.active .fp-scroller');
        downMoves = 0;
        lengthOfMove = 0;
        lengthOfWindowDisplay = $(".content.win").height();// window display

        lengthOfDownMove = $(".section-content.active .product-item").height();// subdivisions under window display
        lengthOfDownMoveCount = $(".section-content.active .product-item").length;
        if(lengthOfDownMoveCount%2==0){
          lengthOfDownMoveCount = Math.floor(lengthOfDownMoveCount/2);
        }
        else{
          lengthOfDownMoveCount = Math.floor(lengthOfDownMoveCount/2)+1;
        }

        console.log(lengthOfDownMoveCount);// this is the count of the product item

        secmove = $('.section-content.active .fp-scroller');
      }

  /************************/

  var $window = $(window),
      $explore = $(".explore"),
      $section = $(".section-content.slide"),
      currentSection = $(".slide.active").index(),
      length = $section.length,

      $nextHome = $("#nextHome"),
      $next = $("#next"),
      $prev = $("#prev"),

      $triangle = $(".triangle"),
      $confetti= $("#confetti");

/* move the window down */

  

  $("#fullpage").fullpage({
    scrollOverflow: true,
    scrollOverflowOptions: {
      click: true
    },
    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
      triangle_animation();
      place_confetti(nextSlideIndex);

      if (nextSlideIndex === 0 ) {
        $nextHome.fadeIn();
        $(".control#next, .control#prev").fadeOut();

      } else {
        $nextHome.fadeOut();
        $(".control#next, .control#prev").fadeIn();
      }
    },
    afterLoad: function(anchorLink, index){
      resetValues();
      moveSlide();

    },
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
      resetValues();
    }
  });
  
  $nextHome.on("click", function() {
    $.fn.fullpage.moveSlideRight();
  });
  $next.on("click", function() {
    $.fn.fullpage.moveSlideRight();
  });
  $prev.on("click", function() {
    $.fn.fullpage.moveSlideLeft();
  });

  // scrollmagic gsap
  var controller = new ScrollMagic.Controller();
  var contentTl = new TimelineMax();
  contentTl.to("#nextHome", 1, {xPercent: -100}, "content");
  contentTl.to(".fullpage-control #next.control", .5 , {display: "block"}, "content");

  var content_Scene = new ScrollMagic.Scene({
    triggerElement: "#homeExplore",
    triggerHook: "onEnter",
    offset: 100
  })
  .setTween(contentTl)
  .addTo(controller);
  
  function triangle_animation() {
    TweenLite.set($triangle, {clearProps:"all"});
    
    $triangle.each(function(index, element) {
      TweenMax.from(element, 1, {
        opacity: 0,
        scale: 1.25,
        delay: Math.random(0, 10)
      });
    });
setTimeout(function(){
  $confetti.css({'opacity': '1'});
}, 800);
  }


  $.fn.prodAnimation = function(setCount) {
    var prod = new TimelineMax(),
        newX;
    
    TweenMax.set(".product-item", {opacity: 0});
    
    for(var i = 0; i < this.length; i+=setCount) {
      var curSet = this.slice(i, i+setCount);
      
      curSet.each(function(i, e) {
        
        var scene = new ScrollMagic.Scene({
          triggerElement: e,
          triggerHook: "onEnter",
          offset: 5
        })
        .setTween(function() {
          newX = $(e).index() % 2 == 0 ? -50 : 50;

          TweenMax.set(e, {opacity: 1});
          prod.from(e, .65, {xPercent: newX, autoAlpha: 0, delay: .05}, "-=0.3")
          
          return prod;
        })
        .on("leave", function() {
          TweenMax.set(e, {xPercent: 0, opacity: 1});
        })
        .addTo(controller);
      })
    }
    return this;
  };
  
  var preloader_tl = new TimelineMax({
    repeat: -1
  });

  var preloader_bezier = [{ x: 0, y: 0 }, { x: 0, y: 42 }, { x: 42, y: 42 }, { x: 42, y: 0 }, { x: 0, y: 0 }];

  preloader_tl.staggerFrom($(".conffeti-preloader > svg"), 1.5, { bezier: {
    type: "thru",
    values: preloader_bezier,
    curviness: 2
  }, ease: Ease.easeInOut, rotation: 360, scale: .2, opacity: 0 }, 1);
  
  function equalHeight($tag) {

    function setHeight(s) {
      var max = 0;
      s.each(function() {
        var h = $(this).height();
        max = Math.max(max, h);
      }).height("").height(max);
    }

    $(window).on("ready load resize", setHeight($tag));
  }

  function place_confetti(index) {
    var section = $section.eq(index).find(".section-image");
     $confetti.remove().appendTo(section).css({'opacity': '0.99'});
     // setTimeout( function() {
     //        $confetti.css({'opacity': '1'});
     //   }, 600);
  }

$window.on('resize', function(){
$confetti.css({'opacity': '0.99'});
setTimeout(function(){
  $confetti.css({'opacity': '1'});
}, 1800);
});

  $window.on("load", function() {
    triangle_animation();

    $(".product-item").prodAnimation(2);

    $("#preloader .conffeti-preloader").fadeOut(2500);
    $("#preloader").delay(2500).fadeOut("slow");
  });
  
  $window.on("ready load resize", function() {
    $.fn.fullpage.reBuild();
    
    if ($window.width() >= 767) {
      $(".exploreArea").each(function() {
        equalHeight($(".equal-height", this));
      });

      $(".product-odd, .product-odd .product-item-inner").css("height", ($window.innerHeight() / 2) - 58 );
    }
  });
  
});


  
