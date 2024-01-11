// Get the form element
const form = document.querySelector('form');

// Add an event listener to the submit button
form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // TODO make POST request to /address-update

    const addressForm = document.querySelector('.address-form');
    addressForm.style.opacity = '0';
    addressForm.style.transition = 'opacity 0.5s';

    // Fade in the thank-you class
    const thankYou = document.querySelector('.thank-you');
    thankYou.style.opacity = '1';
    thankYou.style.transition = 'opacity 0.5s';
    
});


