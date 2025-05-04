// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would normally send the data to a server
            // For now, we'll just simulate a successful submission
            
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
    
    // Add additional styles for success message
    const style = document.createElement('style');
    style.textContent = `
        .success-message {
            background-color: transparent;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            padding: 30px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 260px;
        }
        
        .success-message i {
            font-size: 48px;
            color: white;
            margin-bottom: 15px;
        }
        
        .success-message h3 {
            font-size: 24px;
            margin-bottom: 10px;
        }
        
        .success-message p {
            color: var(--text-secondary);
            font-size: 16px;
        }
    `;
    document.head.appendChild(style);
});