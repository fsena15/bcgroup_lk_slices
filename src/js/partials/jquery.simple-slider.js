/**
 * Created by shnell on 22.05.15.
 */
(function ($) {
    $.fn.simpleSlider = function (options) {

        var settings = $.extend({
                stepSize: 200,
                animationSpeed: 500,
                vertical: false,
                cycled: false,
                navNext: '.next',
                navPrev: '.prev',
                list: '.slider-items',
                items: '> li'
            }, options),
            slideTrigger = false;

        var $list = $(settings.list),
            itemsCount = $list.find(settings.items).size(),
            $itemsClone = $list.find(settings.items).clone(),
            propNav = (settings.vertical) ? 'top' : 'left',
            curPos = Math.round(itemsCount / 2),
            afterNext = function () {
                slideTrigger = false;
                curPos--;

                if (settings.cycled && (curPos - itemsCount <= 0)) {
                    curPos += $itemsClone.size();

                    var diffWidth = (settings.stepSize * $itemsClone.size());

                    $list.css('width', '+=' + diffWidth + 'px');
                    $itemsClone.clone().prependTo($list);
                    $list.css(propNav, '-=' + diffWidth + 'px');
                }
            },
            afterPrev = function () {
                slideTrigger = false;
                curPos++;

                if (settings.cycled && (Math.abs($list.find(settings.items).size() - curPos) <= itemsCount*2)) {
                    var diffWidth = (settings.stepSize * $itemsClone.size());

                    $list.css('width', '+=' + diffWidth + 'px');
                    $itemsClone.clone().appendTo($list);
                }
            },
            next = function() {
                if (!slideTrigger && (settings.cycled || parseInt($list.css(propNav)) < 0)) {
                    slideTrigger = true;

                    var animateOpts = {};
                    animateOpts[propNav] = "+=" + settings.stepSize;

                    $list.animate(animateOpts, settings.animationSpeed, afterNext);
                }
            },
            prev = function() {
                if (!slideTrigger && (settings.cycled || (parseInt($list.css(propNav)) > -((itemsCount - 1) * settings.stepSize) || $list.css(propNav) == 'auto'))) {
                    slideTrigger = true;

                    var animateOpts = {};
                    animateOpts[propNav] = "-=" + settings.stepSize;

                    $list.animate(animateOpts, settings.animationSpeed, afterPrev);
                }
            };

        $(settings.navNext).on('click', next);
        $(settings.navPrev).on('click', prev);

        if (settings.cycled) {
            $list.find(settings.items).clone().prependTo($list).end().clone().appendTo($list);
            $list.css(propNav, '-' + (itemsCount * settings.stepSize) + 'px');
        }

        if (settings.vertical) {
            $list.height($list.find(settings.items).size() * settings.stepSize + 100);
        } else {
            $list.width($list.find(settings.items).size() * settings.stepSize + 100);
        }
    };
})(jQuery);