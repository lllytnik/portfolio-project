
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__nav, .header__top, .social__list, .header__social').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header__nav').click(function () {
        $('.header__burger, .header__nav, .header__top, .social__list, .header__social').removeClass('active');
        $('body').removeClass('lock');
    });
});

