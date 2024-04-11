document.addEventListener('DOMContentLoaded', function() {
    // Get references to the button and email elements
    const revealButton = document.getElementById('revealButton');
    const email = document.getElementById('email');
  
    // Add event listener to the button
    revealButton.addEventListener('click', function() {
      // Toggle the display style of the email element to reveal/hide it
      if (email.style.display === 'none') {
        email.style.display = 'block';
      } else {
        email.style.display = 'none';
      }
    });
  });
  
