function playSound (e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    if(!audio) return; //Stops function if no audio
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

const keys = document.querySelectorAll('.key');
function removeTransition(e) {
    if (e.propertyName != 'transform') return;

    this.classList.remove('playing');
}

keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
})

window.addEventListener('keydown', playSound);


let testSound = {
    'KeyA' : new Audio('sounds/boom.wav')
}
