/**
 * Created by shnell on 16.04.15.
 */
$(function () {
    // categories menu
    $('.categories-navbar.simple-slider').simpleSlider({
        stepSize: 250,
        cycled: true,
        navPrev: '.categories-navbar .right-arrow',
        navNext: '.categories-navbar .left-arrow',
        list: '.categories-navbar .slider-items',
        items: '> li'
    });
});