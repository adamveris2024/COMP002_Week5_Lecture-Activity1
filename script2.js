// 1. Get the button element by its ID
const button = document.getElementById('myButton');

// 2. Set up a flag to track if the button was clicked
let buttonClicked = false;

// 3. Add an event listener to the button to trigger only once
button.addEventListener('click', function() {
    if (!buttonClicked) {
        alert('Button clicked for the first time!');
        buttonClicked = true; // Set the flag to true to prevent future alerts
    }
});

// 4. Get the link element by its ID
const link = document.getElementById('myLink');

// 5. Add an event listener to the link to prevent default navigation
link.addEventListener('click', function(event) {
    event.preventDefault();  // Prevents the link from navigating
    alert('No distractions! I\'m coding!');
});