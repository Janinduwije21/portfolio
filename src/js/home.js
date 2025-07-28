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

// home.js (or portfolio.js)

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-menu a');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            const filterValue = e.target.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                } else {
                    if (card.classList.contains(filterValue)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
});