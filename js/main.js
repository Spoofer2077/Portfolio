// ====================
// Navigation Scroll Effect
// ====================
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.style.borderBottomColor = 'var(--color-border)';
    } else {
        nav.style.borderBottomColor = 'transparent';
    }
});

// ====================
// Mobile Navigation Toggle
// ====================
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// ====================
// Stats Number Animation
// ====================
const statNumbers = document.querySelectorAll('.stat-number');

const animateNumbers = () => {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateNumber = () => {
            current += step;
            if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateNumber);
            } else {
                stat.textContent = target;
            }
        };
        
        updateNumber();
    });
};

// Intersection Observer for stats animation
const statsSection = document.querySelector('.stats');

const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbers();
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

if (statsSection) {
    statsObserver.observe(statsSection);
}

// ====================
// Smooth Scroll for anchor links
// ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ====================
// Fade In Animation on Scroll
// ====================
const fadeElements = document.querySelectorAll('.work-card, .process-item, .stat-item');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(el);
});

// ====================
// Preloader (optional)
// ====================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Prevent flash of unstyled content
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease';

// ====================
// Console Welcome Message
// ====================
console.log('%c🎨 Portfolio designed with care', 'font-size: 16px; color: #2563eb; font-weight: bold;');
console.log('%cBuilt with modern web technologies', 'font-size: 12px; color: #666;');
