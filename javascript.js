 $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 125) {
                
                $(".nav-bar").addClass("nav-scroll");
                $(".mobile-nav").addClass("mobile-nav-scroll");
                $('#navLogo, .nav-scroll-background').fadeIn(500);
            } else {
                $('.nav-bar').removeClass("nav-scroll");
                $('.mobile-nav').removeClass("mobile-nav-scroll");
                $('#navLogo, .nav-scroll-background').fadeOut(500);

            }
        });

 // Landing page slide show //
var img1 = document.createElement('div');

var slide1 = document.getElementById("landingPage1");
var slide2 = document.getElementById("landingPage2");
var slide3 = document.getElementById("landingPage3");
var slide4 = document.getElementById("landingPage4");

var slidesArr = []
var i = 1;

slidesArr.push(slide1, slide2, slide3, slide4);

console.log(slidesArr);

slideLoop();

$("landingPage1", "landingPage2", "landingPage3", "landingPage4").hide()

function slideLoop(){
	$(slidesArr[i]).fadeIn(1250);
	if(i == 0){
		$(slidesArr[3]).fadeOut(1250);
	} else {
		$(slidesArr[i- 1]).fadeOut(1250);
	}
	i++;
	if (i == slidesArr.length) {
		i=0;
	}
	setTimeout(function() {
		slideLoop();
	}, 8000)
}

	$("#galleryHover2").hover(function(){
        $(".gallery-name2").css("display", "block");
        }, function(){
        $(".gallery-name2").css("display", "none");
    });

	$("#galleryHover3").hover(function(){
        $(".gallery-name3").css("display", "block");
        }, function(){
        $(".gallery-name3").css("display", "none");
    });

	$("#galleryHover4").hover(function(){
        $(".gallery-name4").css("display", "block");
        }, function(){
        $(".gallery-name4").css("display", "none");
    });

    // photographs fade in //

    var $animation_elements = $('.hideme');
	var $window = $(window);

	$window.on('scroll resize', check_if_in_view);
	$window.trigger(check_if_in_view)

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $(this).animate({left:200, opacity: 1},1200);
    }
  });
}

});



 