$(document).ready(function () {

    new WOW().init();

    $("a").click(function (event) {
        event.preventDefault();
    });

    $('.mobile-menu').on('click', function () {
        $('.mobile-menu').toggleClass('active');
        $('.nav__list').toggleClass('active');
    });


    // Удаляем классы меню при ширине окна браузера больше 1000px
    $(window).resize(function () {
        if ($(window).width() > 850) {
            $('.mobile-menu.active').removeClass('active');
            $('.nav__list').removeClass('active');
        }
    });

    $('a[data-target^="anchor"]').bind('click.smoothscroll', function () {
        var target = $(this).attr('href'),
            bl_top = $(target).offset().top;
        $('body, html').animate({ scrollTop: bl_top }, 700);
        return false;
    });
});