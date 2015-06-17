/**
 * Created by shnell on 16.04.15.
 */
$(function () {
    $('input, select').styler();

    // categories menu
    $('.categories-navbar.simple-slider').simpleSlider({
        stepSize: 200,
        cycled: true,
        navNext: '.categories-navbar .right-arrow',
        navPrev: '.categories-navbar .left-arrow',
        list: '.categories-navbar .slider-items',
        items: '> li'
    });

    $('.logos-line.simple-slider').simpleSlider({
        stepSize: 185,
        cycled: true,
        navNext: '.logos-line .right-arrow',
        navPrev: '.logos-line .left-arrow',
        list: '.logos-line .slider-items',
        items: '> li'
    });

    $('.news .slider-items').simpleSlider({
        stepSize: 203,
        vertical: true,
        navNext: '.news-voting .navigation-up',
        navPrev: '.news-voting .navigation-down',
        list: '.news .slider-items',
        items: '> div'
    });


    //quick menu
    var topPosition = 890;
    $(document).scroll(function () {
        if ($(this).scrollTop() - topPosition > 0) {
            $('.right-quick-menu').addClass('dark');
        } else {
            $('.right-quick-menu').removeClass('dark');
        }
    });

    // comments slider
    $('.comments-slider').bxSlider({
        auto: true,
        controls: false
    });

});