'use strict';

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal-window');
const btnsOpenModalWindow = document.querySelectorAll(
  '.btn--show-modal-window'
);
const navigationHeader = document.querySelector('.navigation');
const header = document.querySelector('.header');
const logo = document.querySelector('.nav__logo');
const tabNodes = document.querySelector('.operations__tab-container');
const allTabButtons = document.querySelectorAll('.operations__tab');
const operationsContent = document.querySelectorAll('.operations__content');
const btnsScrollTo = document.querySelector('.btn--scroll-to');
const sectionServices = document.getElementById('section--services');
const navLinksWhole = document.querySelector('.nav__links');

// Modal Window
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
logo.alt = 'Bank Logo';
// for a specific attribute:
logo.setAttribute('copyright', 'Taken from Internet');
// console.log(logo.getAttribute('copyright'));

// Smooth scrolling
btnsScrollTo.addEventListener('click', e => {
  e.preventDefault();
  sectionServices.scrollIntoView({ behavior: 'smooth' }); // new way
});

// Event delegation: event listener to parent element
navLinksWhole.addEventListener('click', function (e) {
  e.preventDefault();
  const target = e.target;
  if (target.classList.contains('nav__link')) {
    const href = target.getAttribute('href');
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  }
});

// Implementation of tabs (operations)
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

// Animation of hover effect on navigation links
const navLinksHoverAnimation = function (e) {
  // console.log(this, e.target);
  if (e.target.classList.contains('nav__link')) {
    const linkOver = e.target;
    const siblingLinks = linkOver
      .closest('.nav__links')
      .querySelectorAll('.nav__link');
    const logo = linkOver.closest('.navigation').querySelector('img');
    const logoText = linkOver
      .closest('.navigation')
      .querySelector('.nav__text');
    siblingLinks.forEach(elem => {
      if (elem !== linkOver) {
        elem.style.opacity = this;
      }
    });
    logo.style.opacity = this;
    logoText.style.opacity = this;
  }
};

// work with arguments with use of bind
navigationHeader.addEventListener(
  'mouseover',
  navLinksHoverAnimation.bind(0.4)
);
navigationHeader.addEventListener('mouseout', navLinksHoverAnimation.bind(1));

// ex: without binding (in this case need to send the parameter 'opac' instead of 'this')
// navigationHeader.addEventListener('mouseout', function (e) {
//   navLinksHoverAnimation(e.target, 1);
// });
