
window.addEventListener('resize', refreshAnimation);
window.addEventListener('orientationchange', refreshAnimation);

// window.addEventListener('load', setHeroPadding);
// window.addEventListener('resize', setHeroPadding);


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


//// SET HERO PADDING TOP & BOTTOM TO: HIGHEST WAVE + 40px
function setHeroPadding() {
    const waveElement = document.querySelector('.inverse-layer4');
    const heroSection = document.getElementById('hero');
    
    const waveHeight = waveElement.offsetHeight;

    // heroSection.style.paddingTop = `${waveHeight + 40}px`;
    // heroSection.style.paddingBottom = `${waveHeight + 40}px`;

    // const heroSectionHeight = heroSection.offsetHeight;
    // const viewportHeight = window.innerHeight;


    // const availableSpace = window.innerHeight - heroSection.offsetHeight;
    // heroSection.style.paddingTop = `${availableSpace / 2}px`;
    // heroSection.style.paddingBottom = `${availableSpace / 2}px`;
};