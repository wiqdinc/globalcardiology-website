// Global Cardiology - JavaScript

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = this.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu when clicking on a link
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    const spans = mobileMenuToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });
        });
    }
});

// Requisition location picker
const requisitionDownload = document.getElementById('requisition-download');
const requisitionLocation = document.getElementById('requisition-location');

if (requisitionDownload && requisitionLocation) {
    requisitionDownload.addEventListener('click', () => requisitionLocation.showModal());
    requisitionLocation.querySelectorAll('a[download]').forEach(link => {
        link.addEventListener('click', () => requisitionLocation.close());
    });
}

// Contact Form Handling (previous email-client implementation)
// const contactForm = document.getElementById('contactForm');
// if (contactForm) {
//     contactForm.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         // Get form values
//         const firstName = document.getElementById('firstName').value;
//         const lastName = document.getElementById('lastName').value;
//         const email = document.getElementById('email').value;
//         const phone = document.getElementById('phone').value;
//         const message = document.getElementById('message').value;
        
//         // Create mailto link
//         const subject = encodeURIComponent('Contact Form Submission from ' + firstName + ' ' + lastName);
//         const body = encodeURIComponent(
//             'Name: ' + firstName + ' ' + lastName + '\\n' +
//             'Email: ' + email + '\\n' +
//             'Phone: ' + phone + '\\n\\n' +
//             'Message:\\n' + message
//         );
        
//         // Open default email client
//         window.location.href = 'mailto:info@globalcardiology.ca?subject=' + subject + '&body=' + body;
        
//         // Show success message
//         alert('Thank you for contacting us! Your default email client will open to send the message.');
        
//         // Reset form
//         contactForm.reset();
//     });
// }

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .service-detail, .requisition-card, .contact-form-container, .contact-info-container').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
