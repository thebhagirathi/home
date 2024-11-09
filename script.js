// JavaScript for Button Click Alert
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button');  // Select the button element

    button.addEventListener('click', function() {
        alert('use chatgpt bro, you can also create!');  // Display an alert when button is clicked
    });
});

// Scroll-to-Top Button
window.addEventListener('scroll', function() {
    const scrollTopButton = document.getElementById('scrollTopBtn');  // Get scroll-to-top button
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopButton.style.display = "block";  // Show the button if scrolled down
    } else {
        scrollTopButton.style.display = "none";  // Hide the button if at the top
    }
});

// Function to scroll to the top when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Smooth scroll effect
    });
}

// Form Validation (Optional)
function validateForm(event) {
    const name = document.getElementById('name').value;  // Get the value of the 'name' input
    const email = document.getElementById('email').value;  // Get the value of the 'email' input
    const message = document.getElementById('message').value;  // Get the value of the 'message' input

    if (name === '' || email === '' || message === '') {
        event.preventDefault();  // Prevent form submission if any field is empty
        alert('Please fill out all the fields.');
    } else {
        alert('Form submitted successfully!');
    }
}

// Add event listener to the form submission
const form = document.getElementById('contactForm');
form.addEventListener('submit', validateForm);
