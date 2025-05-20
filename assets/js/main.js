
(function() {
    
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const isDarkMode = savedTheme ? savedTheme === 'dark' : prefersDark;
    
    
    applyThemeEarly(isDarkMode);
})();


function applyThemeEarly(isDarkMode) {
    if (isDarkMode) {
        
        document.documentElement.style.setProperty('--bg-color', '#0a0a0f');
        document.documentElement.style.setProperty('--card-bg', '#18181b');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
        document.documentElement.style.setProperty('--text-secondary', '#a1a1aa');
        document.documentElement.style.setProperty('--border-color', '#27272a');
        document.documentElement.style.setProperty('--tag-bg', '#27272a');
        document.documentElement.style.setProperty('--tag-text', '#ffffff');
    } else {
        
        document.documentElement.style.setProperty('--bg-color', '#f8fafc');
        document.documentElement.style.setProperty('--card-bg', '#ffffff');
        document.documentElement.style.setProperty('--text-color', '#0f172a');
        document.documentElement.style.setProperty('--text-secondary', '#64748b');
        document.documentElement.style.setProperty('--border-color', '#e2e8f0');
        document.documentElement.style.setProperty('--tag-bg', '#e2e8f0');
        document.documentElement.style.setProperty('--tag-text', '#0f172a');
    }
    
    
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}


document.addEventListener('DOMContentLoaded', function() {
    
    initThemeToggle();
    initTabSwitching();
    initContactForm();
    initScrollAnimations();
    initBackToTopButton();
    addFadeInClasses();
});

function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    let isDarkMode = localStorage.getItem('theme') === 'dark';

    
    applyTheme(isDarkMode);

    themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode; 
        applyTheme(isDarkMode);

        
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
}

function applyTheme(isDarkMode) {
    if (isDarkMode) {
        
        document.documentElement.style.setProperty('--bg-color', '#0a0a0f');
        document.documentElement.style.setProperty('--card-bg', '#18181b');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
        document.documentElement.style.setProperty('--text-secondary', '#a1a1aa');
        document.documentElement.style.setProperty('--border-color', '#27272a');
        document.documentElement.style.setProperty('--tag-bg', '#27272a');
        document.documentElement.style.setProperty('--tag-text', '#ffffff');

        
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        
        document.documentElement.style.setProperty('--bg-color', '#f8fafc');
        document.documentElement.style.setProperty('--card-bg', '#ffffff');
        document.documentElement.style.setProperty('--text-color', '#0f172a');
        document.documentElement.style.setProperty('--text-secondary', '#64748b');
        document.documentElement.style.setProperty('--border-color', '#e2e8f0');
        document.documentElement.style.setProperty('--tag-bg', '#e2e8f0');
        document.documentElement.style.setProperty('--tag-text', '#0f172a');

        
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
}

function initTabSwitching() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabs.length === 0 || tabContents.length === 0) return;
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            
            
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            
            tab.classList.add('active');
            document.getElementById(`${tabId}-content`).classList.add('active');
        });
    });
}

function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        
        const submitBtn = contactForm.querySelector('.minimal-submit-btn');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        setTimeout(function() {
            
            contactForm.reset();
            
            
            const formContainer = contactForm.parentElement;
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = `
                <i class="fa-solid fa-check-circle"></i>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out, ${name}! I'll get back to you as soon as possible.</p>
            `;
            
            formContainer.replaceChild(successMessage, contactForm);
            setTimeout(function() {
                formContainer.replaceChild(contactForm, successMessage);
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            }, 5000);
            
        }, 1500);
    });
}


function initBackToTopButton() {
    const backToTopButton = document.getElementById('backToTop');
    if (!backToTopButton) return;

    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}


function addFadeInClasses() {
    
    const heroElements = document.querySelectorAll('.hero h1, .hero .bio, .hero .bio-detail, .hero .social-links');
    heroElements.forEach((element, index) => {
        element.classList.add('fade-in');
        element.classList.add(`delay-${index * 100}`);
    });

    
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.classList.add(`delay-${index * 100}`);
    });

    
    const postItems = document.querySelectorAll('.post-item');
    postItems.forEach((post, index) => {
        post.classList.add('fade-in');
        post.classList.add(`delay-${index * 100}`);
    });
}


function initScrollAnimations() {
    
    if (!('IntersectionObserver' in window)) return;

    const options = {
        root: null, 
        threshold: 0.1, 
        rootMargin: '0px' 
    };

    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); 
            }
        });
    }, options);

    
    const sections = document.querySelectorAll('.tabs-section, .featured-projects, .recent-posts, .page-header, .projects-section, .blog-posts, .contact-section');
    sections.forEach(section => {
        observer.observe(section);
    });
}


