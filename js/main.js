
window.addEventListener('resize', refreshAnimation);
// window.addEventListener('orientationchange', refreshAnimation);

// window.addEventListener('load', setHeroPadding);
// window.addEventListener('resize', setHeroPadding);


//// REMOVE ANIMATION; REPAINT STYLE; ADD ANIMATION
function refreshAnimation() {
    const waveLeft = document.querySelectorAll('.trans-left');
    const waveRight = document.querySelectorAll('.trans-right');
    console.log(waveRight)
    const removeAnimations = (() => {
        waveLeft.forEach(el => el.classList.remove('trans-left'));
        waveRight.forEach(el => el.classList.remove('trans-right'));
    })();

    window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
            waveLeft.forEach(el => el.classList.add('trans-left'));
            waveRight.forEach(el => el.classList.add('trans-right'));
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




const contactInfo = document.getElementById('contact-info');
const contactInfoGroups = document.querySelectorAll('.info-group');

contactInfoGroups.forEach(group => {
    group.addEventListener('mouseover', (e) => {
        const popupIcon = group.querySelector('.popup');
        popupIcon.style.visibility = 'visible';
    });
    group.addEventListener('mouseout', (e) => {
        const popupIcon = group.querySelector('.popup');
        popupIcon.style.visibility = 'hidden';
    });
});


contactInfo.addEventListener('click', (e) => {
    const emailAddress = document.querySelector('.email-address');
    const resume = document.querySelector('.resume');

    if (e.target === emailAddress) { copyEmailAddress() };
    if (e.target === resume) { downloadResume() };
});


function copyEmailAddress() {
    const emailAddressText = document.querySelector('.email-address').textContent;
    const onClickAnimation = document.querySelector('.jiggle');
    
    navigator.clipboard.writeText(emailAddressText);

    onClickAnimation.classList.add('click-response');
    setTimeout(() => { onClickAnimation.classList.remove('click-response') }, 800);
};


function downloadResume() {

};