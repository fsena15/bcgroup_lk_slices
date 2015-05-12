/**
 * Created by shnell on 16.04.15.
 */
$(function () {
    // categories menu
    var menuItemWidth = 200,
        $menuItemsList = $('.categories-navbar .slider-items'),
        menuItemsCount = $menuItemsList.find('> li').size(),
        slideTrigger = false;

    $menuItemsList.width(menuItemsCount * menuItemWidth + 100);
    $('.categories-navbar .left-arrow').on('click', function() {
        if (!slideTrigger && (parseInt($menuItemsList.css('left')) > -((menuItemsCount - 1) * menuItemWidth) || $menuItemsList.css('left') == 'auto')) {
            slideTrigger = true;
            $menuItemsList.animate({
                left: "-=" + menuItemWidth
            }, 500, function() {
                slideTrigger = false;
            });
        }
    });

    $('.categories-navbar .right-arrow').on('click', function() {
        if (!slideTrigger && parseInt($menuItemsList.css('left')) < 0) {
            slideTrigger = true;
            $menuItemsList.animate({
                left: "+=" + menuItemWidth
            }, 500, function () {
                slideTrigger = false;
            });
        }
    });

    var sliderItemWidth = 180,
        $sliderItemsList = $('.logos-line .slider-items'),
        sliderItemsCount = $sliderItemsList.find('> li').size(),
        sliderTrigger = false;

    $sliderItemsList.width(sliderItemWidth * sliderItemWidth + 100);
    $('.logos-line .left-arrow').on('click', function() {
        if (!sliderTrigger && (parseInt($sliderItemsList.css('left')) > -((sliderItemsCount - 1) * sliderItemWidth) || $sliderItemsList.css('left') == 'auto')) {
            sliderTrigger = true;
            $sliderItemsList.animate({
                left: "-=" + sliderItemWidth
            }, 500, function() {
                sliderTrigger = false;
            });
        }
    });

    $('.logos-line .right-arrow').on('click', function() {
        if (!sliderTrigger && parseInt($sliderItemsList.css('left')) < 0) {
            sliderTrigger = true;
            $sliderItemsList.animate({
                left: "+=" + sliderItemWidth
            }, 500, function () {
                sliderTrigger = false;
            });
        }
    });

    //quick menu
    var topPosition = 357 + 120;
    $(document).scroll(function () {
        if ($(this).scrollTop() - topPosition > 0) {
            $('.right-quick-menu').addClass('dark');
        } else {
            $('.right-quick-menu').removeClass('dark');
        }
    });
});