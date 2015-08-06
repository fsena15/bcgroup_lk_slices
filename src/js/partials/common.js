/**
 * Created by shnell on 07.08.15.
 */

$(function () {
    $('input, select').styler();

    $('.logos-line.simple-slider').simpleSlider({
        stepSize: 185,
        cycled: true,
        navNext: '.logos-line .right-arrow',
        navPrev: '.logos-line .left-arrow',
        list: '.logos-line .slider-items',
        items: '> li'
    });
});