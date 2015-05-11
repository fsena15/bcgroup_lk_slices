/**
 * Created by shnell on 16.04.15.
 */
$(function () {
    // categories menu
    var menuItemWidth = 200,
        $menuItemsList = $('.categories-navbar .menu-items'),
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