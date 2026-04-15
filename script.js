// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Menu filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        menuCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.classList.remove('hidden');
                card.style.animation = 'fadeIn 0.5s ease';
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// Add to cart animation
const addToCartButtons = document.querySelectorAll('.add-cart-btn');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const originalText = this.textContent;
        this.textContent = '✓ Added!';
        this.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
        
        setTimeout(() => {
            this.textContent = originalText;
            this.style.background = '';
        }, 1500);
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.padding = '1rem 0';
    }
    
    lastScroll = currentScroll;
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = '✓ Message Sent!';
        btn.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            contactForm.reset();
        }, 2000);
    });
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.menu-card, .feature-card, .special-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Order button animation
const orderBtn = document.querySelector('.order-btn');

if (orderBtn) {
    orderBtn.addEventListener('click', () => {
        const menuSection = document.querySelector('#menu');
        if (menuSection) {
            menuSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// Newsletter subscription
const newsletterForm = document.querySelector('.newsletter');

if (newsletterForm) {
    const subscribeBtn = newsletterForm.querySelector('button');
    const emailInput = newsletterForm.querySelector('input');
    
    subscribeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (emailInput.value && emailInput.value.includes('@')) {
            const originalText = subscribeBtn.textContent;
            subscribeBtn.textContent = '✓ Subscribed!';
            subscribeBtn.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
            
            setTimeout(() => {
                subscribeBtn.textContent = originalText;
                subscribeBtn.style.background = '';
                emailInput.value = '';
            }, 2000);
        }
    });
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// Add hover sound effect (visual feedback instead)
const menuCardsElements = document.querySelectorAll('.menu-card');

menuCardsElements.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    });
});

// Dynamic year in footer
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    footerYear.innerHTML = `&copy; ${new Date().getFullYear()} FoodPlace. All rights reserved.`;
}

console.log('🍔 FoodPlace website loaded successfully!');
