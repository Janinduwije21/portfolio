window.addEventListener('scroll', () => {
    const circle = document.getElementById('circle');
    const scrollY = window.scrollY;

    const moveUp = Math.min(scrollY / 2, 400);
    circle.style.bottom = (-400 + moveUp) + 'px';
});
window.addEventListener('load', () => {
    const splash = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        splash.classList.add('fade-out'); // optional fade
        setTimeout(() => {
            splash.style.display = 'none';
            mainContent.style.display = 'block';
        }, 1000); // match fade duration
    }, 2000);
});