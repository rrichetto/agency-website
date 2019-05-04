const navbarEl = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  if (window.scrollY > 10) {
    navbarEl.style.backgroundColor = '#202428';
    navbarEl.style.paddingTop = '0';
  } else {
    navbarEl.style.backgroundColor = 'transparent'
    navbarEl.style.paddingTop = '1.6rem';
  }
});

