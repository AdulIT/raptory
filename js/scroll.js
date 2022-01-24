gsap.to('.img', {
    scrollTrigger: {
        scrub: 1,
        start: 'top center',
    },
    scale: 1.05,
    y: -100,
    opacity: .1,
});

gsap.to('.title', {
    scrollTrigger: {
        scrub: 1,
        start: 'top center',
    },
    scale: 2.5,
    opacity: 1,
});

gsap.from('.wtclan__history-title', {
    scrollTrigger: {
        scrub: 1,
        start: 'top center',
    },
    opacity: 0,
    duration: 2,
    scale: 0,
});

(function($) {
    $(window).on('load', function() {
        $('.mycustom-scroll').mCustomScrollbar({
            axis: 'y',              // вертикальный скролл 
            theme: 'rounded',  // тема 
            scrollInertia: '200',   // продолжительность прокрутки, значение в миллисекундах  
            mouseWheel: {
                deltaFactor: 100    // кол-во пикселей на одну прокрутку колёсика мыши 
            },
            snapAmount: 50
        });
    });
})(jQuery);

