const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory','wrong'];

sounds.forEach(sound => {
    const button = document.createElement('button');
    button.classList.add('btn');
    button.innerHTML = sound;

    button.addEventListener('click',()=> {
        stop();
        document.querySelector(`#${sound}`).play();
    });
    document.body.appendChild(button);
});

function stop(){
   sounds.forEach(sound => {
        const stoppedSound = document.querySelector(`#${sound}`);
        stoppedSound.currentTime = 0;
        stoppedSound.pause();
   });
}