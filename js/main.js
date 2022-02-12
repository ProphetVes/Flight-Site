$(document).ready(function () {
    $(".second-section-car").owlCarousel({
        margin: 10,
        items: 4.5,
        loop: true,
        nav: true,
        navContainer: '.second-section-con',
        responsive:{
            10:{
                item:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    $(".for-section-car").owlCarousel({
        margin: 10,
        items: 4.5,
        loop: true,
        nav: true,
        navContainer: '.for-section-con',
        responsive:{
            10:{
                item:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    $(".six-section-car").owlCarousel({
        margin: 10,
        items: 1,
        loop: true,
        nav: true,
        navContainer: '.six-section-car',
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });

    $('.eight-section-car').owlCarousel({
        loop: false,
        margin: 15,
        nav: true,
        items: 4.5,
        navContainer: '.eight-title',
        responsive:{
            10:{
                item:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    $('.nine-section-car').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        items: 4.5,
        navContainer: '.nine-title',  responsive:{
            10:{
                item:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    // top menu scroll down
    

    // calculate title height
    $(window).on('scroll', function () {
        var docViewTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        var scrollDistanceFromBottom = docViewTop + windowHeight;
        var elemOffsetTop = $('.content-con-animation-on-load').offset().top;
        var elemHeight = $('.content-con-animation-on-load').height();
        var elemOffsetBottom = elemOffsetTop + elemHeight;
        

        if (scrollDistanceFromBottom > (elemOffsetBottom - 200)) {
            $('.content-con-animation-on-load').addClass('animated');
        };

        // if (scrollDistanceFromBottom >= (elemOffsetBottom - 3090)) {
        //     // fix menu on top when scroll down
        //     $('.back-second-header-menu').css('position', 'fixed');
        //     $('.back-second-header-menu').css('z-index', '40');
        //     $('.back-second-header-menu').css('border-bottom', '8px solid #1cafe5');
        //     // fix sub menus when scroll down
        //     $('.info-bar-news').css('position', 'fixed');
        //     $('.info-bar-news').css('top', '75px');
        //     $('.info-bar-inter').css('position', 'fixed');
        //     $('.info-bar-inter').css('top', '75px');
        //     $('.info-bar-events').css('position', 'fixed');
        //     $('.info-bar-events').css('top', '75px');
        //     $('.info-bar-jobs').css('position', 'fixed');
        //     $('.info-bar-jobs').css('top', '75px');
        // };

        // if (scrollDistanceFromBottom < (elemOffsetBottom - 3090)) {
        //     // return menu on position when scroll is on top
        //     $('.back-second-header-menu').css('position', '');
        //     $('.back-second-header-menu').css('z-index', '');
        //     $('.back-second-header-menu').css('border-bottom', '');
        //     // return sub menus when scroll on top
        //     $('.info-bar-news').css('position', '');
        //     $('.info-bar-news').css('top', '');
        //     $('.info-bar-inter').css('position', '');
        //     $('.info-bar-inter').css('top', '');
        //     $('.info-bar-events').css('position', '');
        //     $('.info-bar-events').css('top', '');
        //     $('.info-bar-jobs').css('position', '');
        //     $('.info-bar-jobs').css('top', '');
        // };

        // if (scrollDistanceFromBottom < (elemOffsetBottom)) {
        //     $('.back-second-header-menu').css('position', '');
        // }
    });

    //scroll second-header-menu
    // $(window).on('scroll', function() {
    //     var docViewTop1 = $(window).scrollTop();
    //     var windowHeight1 = $(window).height();
    //     var scrollDistanceFromBottom1 = docViewTop1 + windowHeight1;
    //     var elemOffsetTopHeader = $('.info-bar-container').offset().top;
    //     var elemHeightHeader = $('.info-bar-container').height();
    //     var elemOffsetBottomHeader = elemOffsetTopHeader + elemHeightHeader;

    //     if (scrollDistanceFromBottom1 > (elemOffsetBottomHeader)) {
    //         $('.back-second-header-menu').addClass('.second-header-scroll');
    //         $('div').removeClass('.back-second-header-menu');            
    //     };
    // });

    

    // Dropdown menu News
    $(function () {
        $('#link-to-news').hover(function () {
            $('.info-bar-news').css('display', 'block');
            $('.info-bar-inter').css('display', 'none');
            $('.info-bar-events').css('display', 'none');
            $('.info-bar-jobs').css('display', 'none');
        }, 100, function () {
            $('.info-bar-news').css('display', 'none');
        });
    });

    $(function () {
        $('.info-bar-news').hover(function () {
            $('.info-bar-news').css('display', 'block');
        }, function () {
            $('.info-bar-news').css('display', 'none');
        });
    });

    // Dropdown menu Flight International
    $(function () {
        $('#link-to-inter').hover(function () {
            $('.info-bar-inter').css('display', 'block');
            $('.info-bar-news').css('display', 'none');
            $('.info-bar-events').css('display', 'none');
            $('.info-bar-jobs').css('display', 'none');
        }, 100, function () {
            $('.info-bar-inter').css('display', 'none');
        });
    });

    $(function () {
        $('.info-bar-inter').hover(function () {
            $('.info-bar-inter').css('display', 'block');
        }, function () {
            $('.info-bar-inter').css('display', 'none');
        });
    });

    // Dropdown menu Events and webinars
    $(function () {
        $('#link-to-events').hover(function () {
            $('.info-bar-events').css('display', 'block');
            $('.info-bar-news').css('display', 'none');
            $('.info-bar-inter').css('display', 'none');
            $('.info-bar-jobs').css('display', 'none');
        }, 100, function () {
            $('.info-bar-inter').css('display', 'none');
        });
    });

    $(function () {
        $('.info-bar-events').hover(function () {
            $('.info-bar-events').css('display', 'block');
        }, function () {
            $('.info-bar-events').css('display', 'none');
        });
    });

    // Dropdawn menu Jobs
    $(function () {
        $('#link-to-jobs').hover(function () {
            $('.info-bar-jobs').css('display', 'block');
            $('.info-bar-news').css('display', 'none');
            $('.info-bar-inter').css('display', 'none');
            $('.info-bar-events').css('display', 'none');
        }, 100, function () {
            $('.info-bar-inter').css('display', 'none');
        });
    });

    $(function () {
        $('.info-bar-jobs').hover(function () {
            $('.info-bar-jobs').css('display', 'block');
        }, function () {
            $('.info-bar-jobs').css('display', 'none');
        });
    });

    // TEST CODE
    // var newsHover = $('info-bar-news').css('display');
    // var interHover = $('info-bar-inter').css('display');
    // if (newsHover = 'block') {
    //     interHover === 'none';
    // };

    // show side menu in "More" click
    $('.start-menu').click(function() {
        $('.mobile-menu-side').css('display', 'block');
        $('.mobile-menu-side').css('transform', 'translateX(0px)');        
    });

    //show side menu in "Menu" click
    $('button-activate').click(function() {
        $('.mobile-menu-side').css('display', 'block');
        $('.mobile-menu-side').css('transform', 'translateX(0px)');
    });

    // hide side menu in "More" click
    $('.close-mobile-menu-side').click(function() {
        $('.mobile-menu-side').css('transform', 'translateX(280px)');
    });
});
// TEST CODE
    // var newsHover = document.querySelector('.info-bar-news').style.display;
    // var interHover = document.querySelector('.info-bar-inter').style.display;
    // if (newsHover = 'block') {
    //     interHover = 'none';
    // } else if (interHover = 'block') {
    //     newsHover = 'none';
    // };

// document.getElementById("link-to-news").addEventListener("mouseover", mouseOver);
// document.getElementById("link-to-news").addEventListener("mouseout", mouseOut);
// document.getElementsByClassName(".info-bar-news").style.display

// function mouseOver() {
//     document.getElementsByClassName(".info-bar-news").style.display = "block";
// }

// function mouseOut () {
//     document.getElementsByClassName(".info-bar-news").style.display = "none";
// }

/////////// Mobile menu ////////////////

//Change list "subscribe" to "more"


// show side menu when click
// function show_side_menu() {
//     $('.start-menu').onclick(function() {
//         $('.mobile-menu-side').css('transform', 'translateX()');
//     })
// };

// // hide side menu when click
// function hide_side_menu() {
//     $('close-side-menu').onclick(function() {
//         $('.mobile-menu-slider').css('transform', '');
//     })
// };

// $('.start-menu').click(function() {
//     $('.mobile-meni-side').css('transform', )
// })

// const sideMenuHandler = document.querySelector('.start-menu');

// sideMenuHandler.addEventListener('click', function() {
//     $('.mobile-menu-side').addClass('.mobile-menu-side-show');
// });

// $(document).scroll(function() {
//     var scrollDistanceFromTop = $(document).scrollTop();
//     console.log("scrollDistanceFromTop");

// })

var $window = $(window);
 
$(window).on('scroll', function() {
    $topOffset = $(this).scrollTop();
    if($topOffset > 198) {
        // alert('mai raboti');
            // fix menu on top when scroll down
            $('.back-second-header-menu').css('position', 'fixed');
            $('.back-second-header-menu').css('z-index', '40');
            $('.back-second-header-menu').css('border-bottom', '8px solid #1cafe5');
            // fix sub menus when scroll down
            $('.info-bar-news').css('position', 'fixed');
            $('.info-bar-news').css('top', '75px');
            $('.info-bar-inter').css('position', 'fixed');
            $('.info-bar-inter').css('top', '75px');
            $('.info-bar-events').css('position', 'fixed');
            $('.info-bar-events').css('top', '75px');
            $('.info-bar-jobs').css('position', 'fixed');
            $('.info-bar-jobs').css('top', '75px');
    };
 
    if($topOffset < 198) {
        $('.back-second-header-menu').css('position', '');
        $('.back-second-header-menu').css('z-index', '');
        $('.back-second-header-menu').css('border-bottom', '');
        // return sub menus when scroll on top
        $('.info-bar-news').css('position', '');
        $('.info-bar-news').css('top', '');
        $('.info-bar-inter').css('position', '');
        $('.info-bar-inter').css('top', '');
        $('.info-bar-events').css('position', '');
        $('.info-bar-events').css('top', '');
        $('.info-bar-jobs').css('position', '');
        $('.info-bar-jobs').css('top', '');
    };
    // console.log($topOffset);
 
});