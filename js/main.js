
window.addEventListener('resize', refreshAnimation);
window.addEventListener('orientationchange', refreshAnimation);

//// REMOVE ANIMATION; REPAINT STYLE; ADD ANIMATION
function refreshAnimation() {
    const waveLeft = document.querySelectorAll('.waveLeft');
    const waveRight = document.querySelectorAll('.waveRight');
    const removeAnimations = (() => {
        waveLeft.forEach(el => el.classList.remove('waveLeft'));
        waveRight.forEach(el => el.classList.remove('waveRight'));
    })();

    window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
            waveLeft.forEach(el => el.classList.add('waveLeft'));
            waveRight.forEach(el => el.classList.add('waveRight'));
        });
    });
};
