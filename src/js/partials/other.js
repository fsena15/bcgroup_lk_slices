/**
 * Created by shnell on 16.04.15.
 */
$(function () {
    // categories menu
    $('.categories-navbar.simple-slider').simpleSlider({
        stepSize: 300,
        cycled: true,
        navPrev: '.categories-navbar .right-arrow',
        navNext: '.categories-navbar .left-arrow',
        list: '.categories-navbar .slider-items',
        items: '> li'
    });

    //quick menu and categories navbar
    var topPosition = 125;
    var bottomPosition = $('section.footer').height();
    var windowHeight = $( window ).height();

    $(document).scroll(function () {
        var pageHeight = $(document).height();
        var scrollTop = $(this).scrollTop();

        if (scrollTop - topPosition > 0 && pageHeight - windowHeight - scrollTop > bottomPosition) {
            $('.contacts-panel').show();
        } else {
            $('.contacts-panel').hide();
        }
    });
});