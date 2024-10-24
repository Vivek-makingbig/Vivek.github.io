// Function to add 'visible' class to sections when they appear in the viewport
function handleScrollAnimation() {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        // Check if the section is within the viewport
        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
}

// Trigger the animation on scroll
window.addEventListener('scroll', handleScrollAnimation);

// Initial check when the page loads
document.addEventListener('DOMContentLoaded', handleScrollAnimation);

// Simple form validation and submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent actual form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you for reaching out, " + name + "! Your message has been sent.");
        document.getElementById("contact-form").reset();  // Reset form after submission
    } else {
        alert("Please fill out all fields before submitting.");
    }
});
