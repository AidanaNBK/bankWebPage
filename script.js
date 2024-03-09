'use strict';

// Modal Window
const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal-window');
const btnsOpenModalWindow = document.querySelectorAll(
  '.btn--show-modal-window'
);

const openModalWindow = function (e) {
  e.preventDefault();
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalWindow = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModalWindow.forEach(btn => {
  btn.addEventListener('click', openModalWindow);
});
btnCloseModalWindow.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

// Create elements
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `We use cookie to improve our functionality <button class = "btn btn--close-cookie"> Ok! </button>`;

const header = document.querySelector('.header');
header.prepend(message);

// Delete elements
const btnCloseCookie = document.querySelector('.btn--close-cookie');
btnCloseCookie.addEventListener('click', e => {
  e.preventDefault();
  message.remove();
});

// Styles
message.style.backgroundColor = '#f0f0f0';
console.log(message.style.backgroundColor);
// but to see the data from the css file:
console.log(getComputedStyle(message).color);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 50 + 'px';

document.documentElement.style.setProperty('--color-first', 'lightblue');

// Attributes
const logo = document.querySelector('.nav__logo');
logo.alt = 'Bank Logo';
// for a specific attribute:
logo.setAttribute('copyright', 'Taken from Internet');
console.log(logo.getAttribute('copyright'));

// Smooth scrolling
const btnsScrollTo = document.querySelector('.btn--scroll-to');
const sectionServices = document.getElementById('section--services');
btnsScrollTo.addEventListener('click', e => {
  e.preventDefault();
  sectionServices.scrollIntoView({ behavior: 'smooth' }); // new way
});

// Event delegation
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(function (elem) {
  elem.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  });
});
