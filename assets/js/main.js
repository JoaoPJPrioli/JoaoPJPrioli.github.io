// Main JavaScript file for the website

// Navigation scroll handler
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add fade-in animation to sections
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

// Publication filter functionality
function filterPublications(year) {
    const publications = document.querySelectorAll('.publication-item');
    publications.forEach(pub => {
        const pubYear = pub.getAttribute('data-year');
        if (year === 'all' || pubYear === year) {
            pub.style.display = 'block';
        } else {
            pub.style.display = 'none';
        }
    });
}

// Form validation
function validateContactForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return false;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    // If validation passes, you can submit the form
    submitContactForm({ name, email, message });
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Placeholder for form submission
function submitContactForm(data) {
    console.log('Form submitted:', data);
    // Add your form submission logic here
}
