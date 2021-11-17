
window.addEventListener('resize', refreshAnimation);
window.addEventListener('orientationchange', refreshAnimation);

//// REMOVE ANIMATIONS; REPAINT STYLES; ADD ANIMATIONS
function refreshAnimation() {
    const waveLeft = document.querySelectorAll('.waveLeft');
    const waveRight = document.querySelectorAll('.waveRight');
    const removeAnimations = (() => {
        waveLeft.forEach(el => el.classList.remove('waveLeft'));
        waveRight.forEach(el => el.classList.remove('waveRight'));
    })();

    window.requestAnimationFrame(function (time) {
        window.requestAnimationFrame(function (time) {
            waveLeft.forEach(el => el.classList.add('waveLeft'));
            waveRight.forEach(el => el.classList.add('waveRight'));
        });
    });
};
