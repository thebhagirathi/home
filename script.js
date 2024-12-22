
// script.js

// Show/Hide buttons based on scroll position
window.addEventListener('scroll', function () {
    const scrollTopButton = document.getElementById('scrollTop');
    const scrollBottomButton = document.getElementById('scrollBottom');
    
    // Show the Scroll to Top button only when the user has scrolled down
    if (document.documentElement.scrollTop > 100) {
      scrollTopButton.style.display = 'block';
    } else {
      scrollTopButton.style.display = 'none';
    }
    
    // Show the Scroll to Bottom button only when the user is not at the bottom
    if (document.documentElement.scrollTop < document.documentElement.scrollHeight - window.innerHeight - 100) {
      scrollBottomButton.style.display = 'block';
    } else {
      scrollBottomButton.style.display = 'none';
    }
  });
  
  // Scroll to Top button functionality
  document.getElementById('scrollTop').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
  });
  
  // Scroll to Bottom button functionality
  document.getElementById('scrollBottom').addEventListener('click', function () {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); // Scroll to the bottom of the page
  });
  


// Open Payment Modal
function openPaymentModal() {
    document.getElementById("paymentModal").style.display = "block";
}

// Close Payment Modal
function closePaymentModal() {
    document.getElementById("paymentModal").style.display = "none";
}

// Handle Payment Option Selection
function selectPayment(paymentMethod) {
    document.getElementById("selectedPaymentMethod").innerText = `Pay with: ${paymentMethod}`;
    document.getElementById("paymentDetails").style.display = "block";
    
    // Show payment details (card details) form for Credit Card, Google Pay, etc.
    document.getElementById("paymentModal").scrollTop = document.getElementById("paymentDetails").offsetTop;
}

// Optional: Close modal when clicking outside of modal content
window.onclick = function(event) {
    if (event.target == document.getElementById("paymentModal")) {
        closePaymentModal();
    }
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
