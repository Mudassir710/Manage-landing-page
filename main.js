const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');
const iconHamburger = document.querySelector('.icon-hamburger');
const iconClose = document.querySelector('.icon-close');

navToggle.addEventListener('click', () => {
  if (primaryHeader.hasAttribute('data-overlay')){
      navToggle.setAttribute('aria-expanded', false);
      iconHamburger.style.display  = 'block';
      iconClose.style.display  = 'none';
  }
  else {
      navToggle.setAttribute('aria-expanded', true)
      iconHamburger.style.display  = 'none';
      iconClose.style.display  = 'block';
    };
  primaryNav.toggleAttribute('data-visible');
  primaryHeader.toggleAttribute('data-overlay');  
  //iconHamburger.toggleAttribute('data-visible');
  //iconClose.toggleAttribute('data-visible');
});
