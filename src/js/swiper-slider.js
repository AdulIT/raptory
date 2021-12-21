import Swiper from 'swiper';
// const scene = document.getElementById('scene');
// const parallax = new Parallax(scene);

// gsap.to(".wrap", {
//     scrollTrigger: {
//         trigger: '.box',
//         // start: "top top",
//         // markers: true
//     },
//     x: 500,
//     rotation: 360,
//     duration: 3
// });

const keyz = [
    "История зарождения",
    "Группировки",
    "Известные личности",
    "Мини - игра"
];

const swiper = new Swiper('.main-slider', {
    speed: 800,
    slidesPerView: 1.5,
    spaceBetween: 150,
    centeredSlides: true,
    mousewheel: {
        sensitivity: 3,
        eventsTarget: '.main-slider'
    },
    pagination: {
        el: '.slider-links',
        renderBullet: function(index, className) {
            return '<div class="' + className + '">' + keyz[index] + '</div>';
        },
    },
    touchRatio: 3,
    grabCursor: true,
    loop: true,
});