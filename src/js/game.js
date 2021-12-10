function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
          key = document.querySelector(`.game-keys__key[data-key="${e.keyCode}"]`);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    console.log(e.propertyName);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.game-keys__key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);