/**
 * Created by shnell on 16.04.15.
 */
$(function () {
    // categories menu
    $('.categories-navbar.simple-slider').simpleSlider({
        stepSize: 250,
        cycled: true,
        navNext: '.categories-navbar .right-arrow',
        navPrev: '.categories-navbar .left-arrow',
        list: '.categories-navbar .slider-items',
        items: '> li'
    });
});