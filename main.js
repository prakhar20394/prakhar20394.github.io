const helloButton = document.getElementById('.hamburger-menu');
const menu = document.getElementById('.menu');

helloButton.addEventListener('click', function() {
  menu.classList.toggle('hidden');
});