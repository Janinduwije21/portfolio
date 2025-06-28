window.addEventListener('scroll', () => {
    const circle = document.getElementById('circle');
    const scrollY = window.scrollY;

    const moveUp = Math.min(scrollY / 2, 400);
    circle.style.bottom = (-400 + moveUp) + 'px';
});
