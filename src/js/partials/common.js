/**
 * Created by shnell on 07.08.15.
 */

$(function () {
    $('input, select').styler();

    $('.logos-line.simple-slider').simpleSlider({
        stepSize: 185,
        cycled: true,
        navPrev: '.logos-line .right-arrow',
        navNext: '.logos-line .left-arrow',
        list: '.logos-line .slider-items',
        items: '> li'
    });

    $('.news, .main-block').on('click', '.news-elem', function() {
        window.location = $(this).find('.title a').attr("href");
    });
});