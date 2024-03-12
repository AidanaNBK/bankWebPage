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
const h2 = document.querySelector('h2');
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

// DOM traversing
const h1 = document.querySelector('h1');
h1.querySelectorAll('.highlight').forEach(elem =>
  console.log(elem.textContent)
);
// going down child nodes
console.log(h1.childNodes);
console.log(h1.children);
console.log(h1.firstElementChild);
console.log(h1.lastElementChild);
// going uo to parent nodes
console.log(h1.parentNode);
console.log(h1.parentElement);
console.log(h1.closest('.header')); // nearest parent with class name
// going to sibling
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

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

// Position sticky of the navigation panel // old method
window.addEventListener('scroll', function (e) {
  //   console.log(
  //     this.window.screenY,
  //     navigationHeader.getBoundingClientRect().bottom
  //   );
  if (window.scrollY > navigationHeader.getBoundingClientRect().bottom) {
    navigationHeader.classList.add('sticky');
    console.log(navigationHeader.classList);
  } else {
    navigationHeader.classList.remove('sticky');
  }
});

// Sticky navigation with Intersection Observer API
const observerOptions = {
  root: null,
  // null is the whole viewport
  // root is the element that will intersect target element (in .oberve)
  threshold: 1,
  // % of the intersection when the callbackFunction will be called
  rootMargin: '100px',
};
const observerCallback = function (entries, observer) {
  // observer - created object
  // entries - moment of intersection with target
  //   entries.forEach(entry => {
  //     console.log(entry.isIntersecting);
  //     // false -> moving from element
  //     // true -> moving to element
  //   });
  entries.forEach(entry => {
    if (entry.isIntersecting === false) {
      navigationHeader.classList.add('sticky');
    } else {
      navigationHeader.classList.remove('sticky');
    }
  });
};
const observer = new IntersectionObserver(observerCallback, observerOptions);
observer.observe(header);
