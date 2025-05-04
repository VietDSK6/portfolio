document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
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
    
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
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
});