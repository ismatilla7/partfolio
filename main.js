document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Footer'ga Avtomatik Yilni Qo'yish
    const yearSpan = document.getElementById('current-year');
    yearSpan.textContent = new Date().getFullYear();

    // 2. Navigatsiya Paneliga "Fixed" Effektni Qo'shish
    // O'tkazish paytida navigatsiya fonini o'zgartirish
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.backgroundColor = 'white';
            nav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        }
    });

    // 3. Smooth Scrolling (Bir Bo'limdan Ikkinchisiga silliq o'tish)
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - nav.offsetHeight, // Navigatsiya balandligini hisobga oladi
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 4. Loyiha Kartalari Ustiga Kelganda Kichik Zoom Effektini Qo'shish (CSS'dan tashqari JS orqali sinov)
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // JS orqali CSS o'zgaruvchisini o'zgartirish
            card.style.transitionDuration = '0.3s';
            card.style.boxShadow = '0 20px 50px rgba(37, 117, 252, 0.3)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = 'var(--hover-shadow)';
        });
    });
});