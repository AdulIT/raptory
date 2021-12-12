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

