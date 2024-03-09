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
// console.log(message.style.backgroundColor);
// but to see the data from the css file:
// console.log(getComputedStyle(message).color);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 50 + 'px';

document.documentElement.style.setProperty('--color-first', 'lightblue');

// Attributes
const logo = document.querySelector('.nav__logo');
logo.alt = 'Bank Logo';
// for a specific attribute:
logo.setAttribute('copyright', 'Taken from Internet');
// console.log(logo.getAttribute('copyright'));

// Smooth scrolling
const btnsScrollTo = document.querySelector('.btn--scroll-to');
const sectionServices = document.getElementById('section--services');
btnsScrollTo.addEventListener('click', e => {
  e.preventDefault();
  sectionServices.scrollIntoView({ behavior: 'smooth' }); // new way
});

const navLinksWhole = document.querySelector('.nav__links');
// Event delegation: event listener to parent element
navLinksWhole.addEventListener('click', function (e) {
  e.preventDefault();
  const target = e.target;
  if (target.classList.contains('nav__link')) {
    const href = target.getAttribute('href');
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  }
});

// Implementation of tabs
const tabNodes = document.querySelector('.operations__tab-container');
const allTabButtons = document.querySelectorAll('.operations__tab');
const operationsContent = document.querySelectorAll('.operations__content');
let activeButton;
tabNodes.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.closest('.operations__tab') !== null) {
    activeButton = e.target.closest('.operations__tab');
  }
  // closest check element by itself
  allTabButtons.forEach(function (elem) {
    if (elem === activeButton) {
      return;
    }
    elem.classList.remove('operations__tab--active');
  });
  activeButton.classList.add('operations__tab--active');
  // console.log(activeButton.dataset.tab); <-- to access data-* attributes
  const selectedOperation = document.querySelector(
    `.operations__content--${activeButton.dataset.tab}`
  );
  operationsContent.forEach(function (elem) {
    elem.classList.remove('operations__content--active');
  });
  selectedOperation.classList.add('operations__content--active');
});

//operations__content--1
