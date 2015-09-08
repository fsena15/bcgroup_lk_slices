/**
 * Created by shnell on 16.04.15.
 */
$(function () {
    // categories menu
    $('.categories-navbar.simple-slider').simpleSlider({
        stepSize: 270,
        cycled: true,
        navPrev: '.categories-navbar .right-arrow',
        navNext: '.categories-navbar .left-arrow',
        list: '.categories-navbar .slider-items',
        items: '> li'
    });

    $('.news .slider-items').simpleSlider({
        stepSize: 242,
        vertical: true,
        navNext: '.news-voting .navigation-up',
        navPrev: '.news-voting .navigation-down',
        list: '.news .slider-items',
        items: '> div'
    });


    //quick menu and categories navbar
    var topPosition = 400;
    var bottomPosition = $('section.footer').height();
    var windowHeight = $( window ).height();

    $(document).scroll(function () {
        var pageHeight = $(document).height();
        var scrollTop = $(this).scrollTop();

        if (scrollTop - topPosition > 0) {
            $('.right-quick-menu').addClass('dark');
        } else {
            $('.right-quick-menu').removeClass('dark');
        }

        if (scrollTop - topPosition - 130 > 0) {
            $('.categories-navbar-dummy').show();
            $('.categories-navbar').css('position', 'fixed');
        } else {
            $('.categories-navbar-dummy').hide();
            $('.categories-navbar').css('position', '');
        }

        if (scrollTop - topPosition - 130 > 0 && pageHeight - windowHeight - scrollTop > bottomPosition) {
            $('.contacts-panel').show();
        } else {
            $('.contacts-panel').hide();
        }
    });

    // comments slider
    $('.comments-slider').bxSlider({
        auto: true,
        controls: false
    });
});