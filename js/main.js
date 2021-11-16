


window.addEventListener('resize', e => {
    let waveLeftAnimations = document.querySelectorAll('.waveLeft');
    let waveRightAnimations = document.querySelectorAll('.waveRight');

    waveLeftAnimations.forEach(element => {
        element.classList.remove('waveLeft');
        element.classList.add('waveLeft');
    });

    waveRightAnimations.forEach(element => {
        element.classList.remove('waveRight');
        element.classList.add('waveRight');
    });
});
