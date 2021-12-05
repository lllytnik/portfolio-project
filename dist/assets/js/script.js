
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


$('img.img-svg').each(function () {
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(imgURL, function (data) {
        var $svg = $(data).find('svg');
        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }
        $img.replaceWith($svg);
    }, 'xml');
});

function animateMarquee(el, duration) {
    const innerEl = el.querySelector('.caroussel__inner');
    const innerWidth = innerEl.offsetWidth;
    const cloneEl = innerEl.cloneNode(true);
    el.appendChild(cloneEl);

    let start = performance.now();
    let progress;
    let translateX;

    requestAnimationFrame(function step(now) {
        progress = (now - start) / duration;

        if (progress > 1) {
            progress %= 1;
            start = now;
        }

        translateX = innerWidth * progress;

        innerEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
        cloneEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
        requestAnimationFrame(step);
    });
}

const marquee = document.querySelector('#marquee');

animateMarquee(marquee, 30000);

const button = document.querySelector('.works__btn-active');
const hiddenItems = document.querySelectorAll('.hidden-item');
let isHidden = true;
button.addEventListener('click', () => {
    button.textContent = isHidden
        ? 'Hide'
        : 'See all';

    isHidden = !isHidden;
    hiddenItems.forEach(item => item.classList.toggle('hidden'));
});

//# sourceMappingURL=script.js.map
