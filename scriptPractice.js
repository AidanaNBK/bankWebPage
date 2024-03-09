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

// Select elements

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.querySelectorAll('.section'));
// console.log(document.getElementById('section--services'));
// console.log(document.getElementsByTagName('button'));
// console.log(document.getElementsByClassName('btn'));

// Create elements

// .insertAdjacentHTML()
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

// Data attributes:

console.log(logo.dataset.versionNumber);

// Smooth scrolling

const btnsScrollTo = document.querySelector('.btn--scroll-to');
const sectionServices = document.getElementById('section--services');
btnsScrollTo.addEventListener('click', e => {
  e.preventDefault();
  //   const sectionCoords = sectionServices.getBoundingClientRect();
  //   console.log('Current coordinates: ', window.pageXOffset, window.pageYOffset);
  //   console.log(
  //     document.documentElement.clientWidth,
  //     document.documentElement.clientHeight
  //   );
  //   window.scrollTo({
  //     left: sectionCoords.left + window.scrollX,
  //     top: sectionCoords.top + window.scrollY,
  //     behavior: 'smooth',
  //   });
  sectionServices.scrollIntoView({ behavior: 'smooth' }); // new way
});

// Events and event listeners
const h1 = document.querySelector('h1');
const alertOnH1 = function (e) {
  alert('You still think? Join us!');
};
h1.addEventListener('mouseenter', alertOnH1);
setTimeout(() => h1.removeEventListener('mouseenter', alertOnH1), 1000);
// h1.onmouseenter = () => {
//   alert('Mouseenter');
// };

// // Event propagation: parent -> child
// document.querySelector('.nav__link').addEventListener('click', e => {
//   console.log('Target: ', e.target);
//   // this === e.currentTarget
//   // e.target - what exactly was clicked
//   e.stopPropagation();
// });

// Event delegation: parent -> child
// const navLinks = document.querySelectorAll('.nav__link');
// navLinks.forEach(function (elem) {
//   elem.addEventListener('click', function (e) {
//     e.preventDefault();
//     const href = this.getAttribute('href');
//     document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
//   });
// });

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
