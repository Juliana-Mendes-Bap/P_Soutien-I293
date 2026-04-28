let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('header nav');
let links = document.querySelector('header nav a');
let bod = document.querySelector('.wrapper');


hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('isactive');
  menu.classList.toggle('active');

});

links.addEventListener('click', function() {
  hamburger.classList.toggle('isactive');
  menu.classList.toggle('active');
});

body.addEventListener('click', function() {
  hamburger.classList.toggle('isactive');
  menu.classList.toggle('active');
});