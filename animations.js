// Animations.js - Custom animations and transitions for Parsa Job Centre

document.addEventListener('DOMContentLoaded', () => {
    // Page loader with Nepal flag design
    const pageLoader = document.createElement('div');
    pageLoader.className = 'page-loader';

    // Create Nepal flag shape
    const flagContainer = document.createElement('div');
    flagContainer.className = 'nepal-flag';

    // Create upper triangle
    const upperTriangle = document.createElement('div');
    upperTriangle.className = 'flag-triangle upper';

    // Create lower triangle
    const lowerTriangle = document.createElement('div');
    lowerTriangle.className = 'flag-triangle lower';

    // Create celestial elements
    const sun = document.createElement('div');
    sun.className = 'flag-sun';
    const moon = document.createElement('div');
    moon.className = 'flag-moon';

    // Assemble flag components
    upperTriangle.appendChild(sun);
    lowerTriangle.appendChild(moon);
    flagContainer.appendChild(upperTriangle);
    flagContainer.appendChild(lowerTriangle);
    pageLoader.appendChild(flagContainer);

    // Create Nepal map animation
    const mapContainer = document.createElement('div');
    mapContainer.className = 'nepal-map';
    mapContainer.innerHTML = `
        <svg viewBox="0 0 100 100" class="map-svg">
            <path class="map-path" d="M20,50 Q30,20 50,30 T80,40 Q90,60 70,70 T30,60 Z"/>
        </svg>
    `;
    pageLoader.appendChild(mapContainer);
    document.body.appendChild(pageLoader);

    // Hide loader when page is fully loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            pageLoader.classList.add('loader-hidden');
            setTimeout(() => {
                pageLoader.remove();
            }, 500);
        }, 500);
    });

    // Custom cursor effect
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    document.addEventListener('mousedown', () => {
        cursor.classList.add('active');
    });

    document.addEventListener('mouseup', () => {
        cursor.classList.remove('active');
    });

    // Add active class to clickable elements for cursor effect
    const clickableElements = document.querySelectorAll('a, button, .btn, .service-card, .category, .contact-card');
    clickableElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
        });
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
        });
    });

    // Text reveal animation
    const textElements = document.querySelectorAll('.section-header h2, .section-header p');
    textElements.forEach(element => {
        // Split text into individual characters with spans
        const text = element.textContent;
        element.textContent = '';
        element.classList.add('text-reveal');
        
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.textContent = text[i] === ' ' ? '\u00A0' : text[i]; // Preserve spaces
            element.appendChild(span);
        }
    });

    // Enhanced scroll reveal with staggered animations
    const gridItems = document.querySelectorAll('.services-grid .service-card, .job-categories .category, .partner-logos .logo-placeholder');
    gridItems.forEach(item => {
        item.classList.add('scroll-reveal');
    });

    // Apply parallax effect to sections with background images
    const parallaxSections = document.querySelectorAll('.hero');
    parallaxSections.forEach(section => {
        section.classList.add('parallax-section');
    });

    // Parallax scrolling effect
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        
        parallaxSections.forEach(section => {
            const speed = 0.5; // Adjust for more/less parallax effect
            const yPos = -(scrollPosition * speed);
            section.style.backgroundPosition = `center ${yPos}px`;
        });

        // Reveal text elements when they come into view
        textElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    });

    // Mobile menu animation
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            if (navLinks.classList.contains('mobile-active')) {
                navLinks.classList.remove('mobile-active');
                navLinks.classList.add('mobile-inactive');
                setTimeout(() => {
                    navLinks.classList.remove('mobile-inactive');
                }, 300);
            } else {
                navLinks.classList.remove('mobile-inactive');
                navLinks.classList.add('mobile-active');
            }
        });
    }
}));
