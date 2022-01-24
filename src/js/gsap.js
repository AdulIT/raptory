const title = document.querySelector('.history__title');
const descr = document.querySelector('.history__descr');
// History pages
gsap.from(title, {
    opacity: 0,
    duration: 2,
    y: 100
});

gsap.from(descr, {
    opacity: 0,
    duration: 2,
    y: 100
});


gsap.from('.history__content-text', {
    scrollTrigger: '.history__content-text',
    opacity: 0,
    duration: 2,
    x: 100
});

gsap.from('.history__content-img', {
    scrollTrigger: '.history__content-img',
    opacity: 0,
    duration: 2,
    scale: 0
});