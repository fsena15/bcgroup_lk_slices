/**
 * Created by shnell on 16.04.15.
 */
$(function () {
    //quick menu and categories navbar
    var topPosition = 125;
    var bottomPosition = $('section.footer').height();
    var windowHeight = $( window ).height();

    $(document).scroll(function () {
        var pageHeight = $(document).height();
        var scrollTop = $(this).scrollTop();

        if (scrollTop - topPosition > 0) {
            $('.categories-navbar-dummy').show();
            $('.categories-navbar').css('position', 'fixed');
        } else {
            $('.categories-navbar-dummy').hide();
            $('.categories-navbar').css('position', '');
        }

        if (scrollTop - topPosition > 0 && pageHeight - windowHeight - scrollTop > bottomPosition) {
            $('.contacts-panel').show();
        } else {
            $('.contacts-panel').hide();
        }
    });
});