/**
 * Created by shnell on 16.04.15.
 */
$(function () {
    $('input, select').styler();

    // categories menu
    $('.categories-navbar.simple-slider').simpleSlider({
        stepSize: 250,
        cycled: true,
        navNext: '.categories-navbar .right-arrow',
        navPrev: '.categories-navbar .left-arrow',
        list: '.categories-navbar .slider-items',
        items: '> li'
    });

    $('.clients-line.simple-slider').simpleSlider({
        stepSize: 360,
        cycled: false,
        navNext: '.clients-line .left-arrow',
        navPrev: '.clients-line .right-arrow',
        list: '.clients-line .slider-items',
        items: '> li'
    });
});