const control = document.querySelector('.control-btn'),
      play    = document.querySelector('.play'),
      pause   = document.querySelector('.pause'),
      audio   = document.querySelector('audio');

play.addEventListener('click', () => {
    play.classList.remove('active');
    play.classList.add('hidden');
    pause.classList.remove('hidden'),
    pause.classList.add('active');
    audio.pause();
});

pause.addEventListener('click', () => {
    play.classList.remove('hidden');
    play.classList.add('active');
    pause.classList.remove('active'),
    pause.classList.add('hidden');
    audio.play();
});