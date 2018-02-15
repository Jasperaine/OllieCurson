$(document).ready(function () {


    // galleries light box magnific plug in //
    
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title') + '<small>by Oliver Curson</small>';
            }
        }
    });

    // mobile nav toggle //

    var navSwitch = true;

    $(".burger-container").click(function () {
        if (navSwitch == true) {
            $(".icon-bar-1, .icon-bar-2, .icon-bar-3").addClass("mobile-nav-click");
            $(".icon-bar-1").addClass("icon-bar-1-active");
            $(".icon-bar-2").addClass("icon-bar-2-active");
            $(".icon-bar-3").addClass("icon-bar-3-active");
            $(".mobile-nav-menu").fadeIn(500);
            $(".nav-logo").addClass("nav-logo-show");
            navSwitch = false;
        } else if (navSwitch == false) {
            $(".icon-bar-1, .icon-bar-2, .icon-bar-3").removeClass("mobile-nav-click");
            $(".icon-bar-1").removeClass("icon-bar-1-active");
            $(".icon-bar-2").removeClass("icon-bar-2-active");
            $(".icon-bar-3").removeClass("icon-bar-3-active");
            $(".nav-logo").removeClass("nav-logo-show");
            $(".mobile-nav-menu").fadeOut(500);
            navSwitch = true;
        }
    });

    // navbar galleries and contact drop down onClick //

    var navGalleriesSwitch = true;

    $(".nav-galleries").click(galleriesSwitch);

    function galleriesSwitch() {
        if (navGalleriesSwitch == true && navContactSwitch == false) {
            contactSwitch();
            setTimeout(function () {
                $(".dropdown-galleries").css('height', '450');
                setTimeout(function () {
                    $(".dropdown-galleries-container").css('display', 'block');
                }, 100)
                navGalleriesSwitch = false;
            }, 450)
        } else if (navGalleriesSwitch == true && navContactSwitch == true) {
            $(".dropdown-galleries").css('height', '450');
            setTimeout(function () {
                $(".dropdown-galleries-container").css('display', 'block');
            }, 100)
            navGalleriesSwitch = false;
        } else if (navGalleriesSwitch == false) {
            $(".dropdown-galleries-container").css('display', 'none');
            $(".dropdown-galleries").css('height', '0');
            navGalleriesSwitch = true;
        }
    }

    var navContactSwitch = true;

    $(".nav-contact").click(contactSwitch);

    function contactSwitch() {
        if (navContactSwitch == true && navGalleriesSwitch == false) {
            galleriesSwitch();
            setTimeout(function () {
                $(".dropdown-contact").css('height', '450');
                setTimeout(function () {
                    $(".dropdown-contact-container").css('display', 'block');
                }, 100)
                navContactSwitch = false;

            }, 450)
        } else if (navContactSwitch == true && navGalleriesSwitch == true) {
            $(".dropdown-contact").css('height', '450');
            setTimeout(function () {
                $(".dropdown-contact-container").css('display', 'block');
            }, 100)
            navContactSwitch = false;
        } else if (navContactSwitch == false) {
            $(".dropdown-contact-container").css('display', 'none');
            $(".dropdown-contact").css('height', '0');
            navContactSwitch = true;
        }
    }

    // mobile nav gallery and contact buttons //

    navGalleriesSwitch = true;

    $("#mobileGalleries").click(function () {

        if (navGalleriesSwitch == true) {
            $("#mobilePrints, #mobileContact").removeClass('opacity-one');
            $(this).addClass('galleries-slide-up');
            $(this).removeClass('galleries-slide-down');
            $("#mobilePrints, #mobileContact").addClass('opacity-zero');
            setTimeout(function () {
                $(".mobile-galleries-list").fadeIn(500);
            }, 500)
            navGalleriesSwitch = false;
        } else if (navGalleriesSwitch == false) {
            $(this).removeClass('galleries-slide-up');
            $(this).addClass('galleries-slide-down');
            $(".mobile-galleries-list").hide();
            setTimeout(function () {
                $("#mobilePrints, #mobileContact").addClass('opacity-one');
                $("#mobilePrints, #mobileContact").removeClass('opacity-zero');
            }, 500)

            navGalleriesSwitch = true;
        }
    });

    navContactSwitch = true;

    $("#mobileContact").click(function () {

        if (navContactSwitch == true) {
            $("#mobilePrints, #mobileGalleries, #mobileContact").removeClass('opacity-one');
            $(this).addClass('contact-slide-up');
            $(this).removeClass('contact-slide-down');
            $("#mobilePrints, #mobileGalleries").addClass('opacity-zero');
            setTimeout(function () {
                $(".mobile-contact-list").fadeIn(500);
            }, 500)
            navContactSwitch = false;
        } else if (navContactSwitch == false) {
            $(this).removeClass('contact-slide-up');
            $(this).addClass('contact-slide-down');
            $(".mobile-contact-list").hide();
            setTimeout(function () {
                $("#mobilePrints, #mobileGalleries").addClass('opacity-one');
                $("#mobilePrints, mobileGalleries").removeClass('opacity-zero');
            }, 500)

            navContactSwitch = true;
        }
    });

    // nav bar fade in //

    $(window).scroll(function () {
        if ($(this).scrollTop() > 125) {
            $(".nav-bar").addClass("nav-scroll");
            $(".icon-bar-1, .icon-bar-2, .icon-bar-3").addClass("mobile-nav-scroll");
            $('#navLogo, .nav-scroll-background').fadeIn(500);
            $(".nav-bar").removeClass("nav-bar-text-shadow");
        } else {
            $('.nav-bar').removeClass("nav-scroll");
            $('.icon-bar-1, .icon-bar-2, .icon-bar-3').removeClass("mobile-nav-scroll");
            $('#navLogo, .nav-scroll-background').fadeOut(500);
            $(".nav-bar").addClass("nav-bar-text-shadow");

        }
    });

    // Landing page slide show //

    var slide2 = document.getElementById("landingPage2");
    var slide3 = document.getElementById("landingPage3");
    var slide4 = document.getElementById("landingPage4");
    var slide5 = document.getElementById("landingPage5");

    var slidesArr = []
    var i = 1;

    slidesArr.push(slide2, slide3, slide4, slide5);

    slideLoop();

    function slideLoop() {

        if ($(".landing-page-blocker").is(':visible')) {
            $(slidesArr[i]).fadeIn(1250);
            if (i == 0) {
                $(slidesArr[3]).fadeOut(1250);
            } else {
                $(slidesArr[i - 1]).fadeOut(1250);
            }
            i++;
            if (i == slidesArr.length) {
                i = 0;
            }
            setTimeout(function () {
                slideLoop();
            }, 5000)
        }
    }

    // dropdown gallery hover functions //

    $("#galleryHover2").hover(function () {
        $(".gallery-name2").css("display", "block");
    }, function () {
        $(".gallery-name2").css("display", "none");
    });

    $("#galleryHover3").hover(function () {
        $(".gallery-name3").css("display", "block");
    }, function () {
        $(".gallery-name3").css("display", "none");
    });

    $("#galleryHover4").hover(function () {
        $(".gallery-name4").css("display", "block");
    }, function () {
        $(".gallery-name4").css("display", "none");
    });

    // photographs fade in //

    var animation_elements = $.find('.animation-element');
    var web_window = $(window);
    console.log(web_window);

    function check_if_in_view() {
        var window_height = web_window.height();
        var window_top_position = web_window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each(animation_elements, function () {

            var element = $(this);
            var element_height = $(element).outerHeight();
            var element_top_position = $(element).offset().top;
            var element_bottom_position = (element_top_position + element_height);

            if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                if (element.hasClass('slide-left')) {
                    $(element).addClass('in-view');
                } else if (element.hasClass('slide-right')) {
                    $(element).addClass('in-view-right');
                } else if (element.hasClass('fade-in-id')) {
                    $(element).addClass('fade-in');
                }
            }
        });

    }

    $(window).on('scroll resize', function () {
        check_if_in_view()
    })
    $(window).trigger('scroll');

});



