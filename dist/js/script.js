// import barba from '@barba/core';

const search = document.querySelector('#search'),
      clear = document.querySelector('.clear'),
      hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

clear.addEventListener('click', function() {
    search.value = '';
});

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});


// pageTransition = () => {
//     var tl = gsap.timeline();

//     tl.to('header', {
//         zIndex: 1
//     });

//     tl.to('main', {
//         zIndex: 1
//     });

//     tl.to('.page-transition', {
//         duration: 1,
//         height: "100%",
//         top: "0%"
//     });

//     tl.to('.page-transition', {
//         duration: .8,
//         height: "100%",
//         top: "100%",
//         delay: .3
//     });

//     tl.set('.page-transition', {
//         top: "-100%"
//     });
// }


// function delay(n) {
//     n = n || 2000;
//     return new Promise(done => {
//         setTimeout(() => {
//             done();
//         }, n);
//     });
// }

// barba.init({
//     sync: true,
//     transitions: [{
//         async leave(data) {
//             const done  = this.async();

//             pageTransition();
//             await delay(1500);
//             done();
//         }
//     }]
// });