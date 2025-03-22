interface CounterElement extends HTMLElement {
    dataset: {
        target: string;
    };
}

// Counter Animation
const startCounter = (element: CounterElement): void => {
    const target: number = parseInt(element.dataset.target);
    const count: number = parseInt(element.innerText);
    const increment: number = target / 200;

    if (count < target) {
        element.innerText = Math.ceil(count + increment).toString();
        setTimeout(() => startCounter(element), 1);
    } else {
        element.innerText = target.toString();
    }
};

// Mobile Menu Toggle
const initMobileMenu = (): void => {
    const menuBtn: HTMLElement | null = document.querySelector('.mobile-menu-btn');
    const navLinks: HTMLElement | null = document.querySelector('.nav-links');

    menuBtn?.addEventListener('click', () => {
        navLinks?.classList.toggle('active');
    });
};

// Scroll Animation
const initScrollAnimation = (): void => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    });

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
        observer.observe(el);
    });
};

// Contact Form Handler
interface ContactForm extends HTMLFormElement {
    name: HTMLInputElement;
    email: HTMLInputElement;
    subject: HTMLInputElement;
    message: HTMLTextAreaElement;
}

const initContactForm = (): void => {
    const form: ContactForm | null = document.querySelector('#contactForm') as ContactForm;

    form?.addEventListener('submit', async (e: Event) => {
        e.preventDefault();

        const formData = {
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value
        };

        try {
            // Add your form submission logic here
            console.log('Form data:', formData);
            form.reset();
            alert('Message sent successfully!');
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send message. Please try again.');
        }
    });
};

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const counterElements = document.querySelectorAll('.counter') as NodeListOf<CounterElement>;
    counterElements.forEach(startCounter);
    
    initMobileMenu();
    initScrollAnimation();
    initContactForm();
});
