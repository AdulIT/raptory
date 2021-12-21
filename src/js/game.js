function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
          key = document.querySelector(`.game-keys__key[data-key="${e.keyCode}"]`);

    if (!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;  // skip it if it's not transform
    console.log(e.propertyName);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.game-keys__key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
const launcFunction = window.addEventListener('keydown', playSound);

// const playBtn = document.querySelector('svg');

// playBtn.addEventListener('click', launcFunction);