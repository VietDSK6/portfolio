// Wait for DOM to be fully loaded before executing code
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initThemeToggle();
    initTabSwitching();
    initContactForm();
});

function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    let isDarkMode = true; // Start with dark mode
    
    themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode; // Toggle the theme state
        
        if (isDarkMode) {
            // Switch to dark mode
            document.documentElement.style.setProperty('--bg-color', '#0a0a0f');
            document.documentElement.style.setProperty('--card-bg', '#18181b');
            document.documentElement.style.setProperty('--text-color', '#ffffff');
            document.documentElement.style.setProperty('--text-secondary', '#a1a1aa');
            document.documentElement.style.setProperty('--border-color', '#27272a');
            document.documentElement.style.setProperty('--tag-bg', '#27272a');
            document.documentElement.style.setProperty('--tag-text', '#ffffff');
            
            // Change icon to moon
            themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        } else {
            // Switch to light mode
            document.documentElement.style.setProperty('--bg-color', '#f8fafc');
            document.documentElement.style.setProperty('--card-bg', '#ffffff');
            document.documentElement.style.setProperty('--text-color', '#0f172a');
            document.documentElement.style.setProperty('--text-secondary', '#64748b');
            document.documentElement.style.setProperty('--border-color', '#e2e8f0');
            document.documentElement.style.setProperty('--tag-bg', '#e2e8f0');
            document.documentElement.style.setProperty('--tag-text', '#0f172a');
            
            // Change icon to sun
            themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }
    });
}

function initTabSwitching() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabs.length === 0 || tabContents.length === 0) return;
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
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
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Show loading state
        const submitBtn = contactForm.querySelector('.minimal-submit-btn');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call with timeout
        setTimeout(function() {
            // Reset the form
            contactForm.reset();
            
            // Show success message
            const formContainer = contactForm.parentElement;
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = `
                <i class="fa-solid fa-check-circle"></i>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out, ${name}! I'll get back to you as soon as possible.</p>
            `;
            
            // Replace form with success message
            formContainer.replaceChild(successMessage, contactForm);
            
            // Restore form after 5 seconds (optional)
            setTimeout(function() {
                formContainer.replaceChild(contactForm, successMessage);
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            }, 5000);
            
        }, 1500);
    });
}


