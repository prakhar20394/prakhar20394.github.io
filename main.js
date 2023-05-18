// Get the widget element
const widget = document.querySelector('.widget');

// Get the cross icon element
const crossIcon = document.querySelector('.cross-icon');

// Add click event listener to the cross icon
crossIcon.addEventListener('click', () => {
  // Toggle the 'closed' class on the widget element
  widget.classList.toggle('closed');
  // Toggle the 'open' class on the cross icon element
  crossIcon.classList.toggle('open');
});


// Get the menu element
const menu = document.querySelector('.menu');

// Get the menu navbar element
const menuNavbar = document.querySelector('.menu-navbar');

// Get the hamburger menu element
const hamburgerMenu = document.querySelector('.hamburger-menu');

// Get the close icon element
const closeIcon = document.querySelector('.close-icon');

// Add click event listener to the hamburger menu
hamburgerMenu.addEventListener('click', () => {
  // Show the menu
  menu.style.display = 'flex';
  // Hide the menu navbar
  menuNavbar.style.display = 'none';
});

// Add click event listener to the close icon
closeIcon.addEventListener('click', () => {
  // Hide the menu
  menu.style.display = 'none';
  // Show the menu navbar
  menuNavbar.style.display = 'flex';
});