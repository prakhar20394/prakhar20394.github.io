// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the default form submission

  const formData = new FormData(form);

  fetch('https://getform.io/f/980ba2f3-3226-4934-b86b-400f49bd0cb9', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    // handle the API response
    console.log(response.status);
  })
  .catch(error => {
    console.error(error);
  });
});

const title = document.title;
const url = document.querySelector('link[rel=canonical]') ? document.querySelector('link[rel=canonical]').href : document.location.href;

shareicon.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      title: 'WebShare API Demo',
      url: 'https://codepen.io/ayoisaiah/pen/YbNazJ'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
  } else {
    shareDialog.classList.add('is-open');
  }
});