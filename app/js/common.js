$(document).ready(function() {
    // $('#header-select').ddslick({
    //     selectText: "Select your favorite social network"
    // })
    $('.third-link').fancybox({
        buttons: [
            "close"
        ]
    });
    $('.fifth-gallery-item').fancybox({
        buttons: [
            "close"
        ]
    });
    $(".sixth-left-first, .sixth-left-second").mCustomScrollbar();
    $('.sixth-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    });

    $('.sixth-slider-btn_back').click(function () {
        $('.sixth-slider').slick("slickPrev");
    });
    $('.sixth-slider-btn_next').click(function () {
        $('.sixth-slider').slick("slickNext");
    });
    $('.header-btn').click(function () {
       $(this).toggleClass('active');
       $('.header-nav').toggleClass('active')
       $('.header-hide').toggleClass('hide')
    });
    $(".header-list").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top - 110;
        $('body,html').animate({scrollTop: top}, 500);

    });
    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       400,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );
    wow.init();
});
