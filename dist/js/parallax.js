// Parallax
const scene  = document.getElementById('scene');
const parallaxInstance = new Parallax(scene);

// native js
const links = document.querySelectorAll('.link'),
    //   link = document.querySelector('.bands__band-link'),
    //   img   = document.querySelector('.bands__band-img'),
      imgs  = document.querySelectorAll('.img');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        imgs.forEach((item, i, imgs) => {
            imgs[i].classList.remove('hidden');
            imgs[i].classList.add('active');
        });
    });
});

links.forEach(link => {
    link.addEventListener('mouseleave', () => {
        imgs.forEach((item, i, imgs) => {
            imgs[i].classList.remove('active');
            imgs[i].classList.add('hidden');
        });
    });
});
// links.forEach(link => {
//     link.addEventListener('mouseleave', () => {
//         imgs.forEach(img => {
//             for (let i = 0; i < 4; i++) {
//                 img[i].classList.remove('active');
//                 img[i].classList.add('hidden');
//             }  
//         });
//         imgs.forEach((img, i) => {
//             img[i].classList.add('hidden');
//         });
//     });
// });
