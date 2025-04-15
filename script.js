// Countdown Timer
const weddingDate = new Date('April 20, 2025 12:33:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    
    // Calculate days, hours, minutes, seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display countdown
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll down button
document.getElementById('scrollDown').addEventListener('click', function() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

// Animate elements on scroll
function revealOnScroll() {
    const elements = document.querySelectorAll('.event-card, .countdown-segment, .thank-you-content');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initial style for animation
document.querySelectorAll('.event-card, .countdown-segment, .thank-you-content').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(50px)';
    element.style.transition = 'all 1s ease';
});

// Listen for scroll events
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Add animated background for title
const titles = document.querySelectorAll('.section-title');
titles.forEach(title => {
    title.style.backgroundSize = '200% 100%';
    title.style.backgroundPosition = 'right bottom';
    title.style.transition = 'all 1s ease';
    title.addEventListener('mouseover', function() {
        this.style.backgroundPosition = 'left bottom';
    });
    title.addEventListener('mouseout', function() {
        this.style.backgroundPosition = 'right bottom';
    });
});
