/**
 * Created by shnell on 07.08.15.
 */

function number_format (number, decimals, dec_point, thousands_sep) {
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }

    return s.join(dec);
}

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

    $('.toggle-form-btn').on('click', function() {
        var formSelector = $(this).data('form');
        if (!!formSelector) {
            $(formSelector).slideToggle();
        }
    });

});