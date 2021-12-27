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


// SEARCH

document.querySelector('#search').oninput = function() {
    let val = this.value.trim();
    let inputItems = document.querySelectorAll('.mycustom-scroll p');
    if (val != '') {
        inputItems.forEach(function(elem) {
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hide');
                elem.innerHTML = elem.innerText;
            } else {
                elem.classList.remove('hide');
                let str = elem.innerText;
                elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
            }
        });
    }
    else {
        inputItems.forEach(function(elem) {
            elem.classList.remove('hide');
            elem.innerHTML = elem.innerText;
        });
    }
}

function insertMark(string,pos,len) {
    return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
}