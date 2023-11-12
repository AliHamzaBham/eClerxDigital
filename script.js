
const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

const logoLink = document.querySelector('.logo_link');
const searchIcon = document.querySelector('.search-icon');
const menuIcon = document.querySelector('.menu-icon');
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');

function fixNav() {
    if (window.scrollY > 0) {
    nav.classList.add("active");
    logoLink.innerHTML = `<img id="logo" src="assets/logo.svg" alt="">`
    menuIcon.classList.remove("white-icon");
    searchIcon.classList.remove("white-icon");
  } else {
    nav.classList.remove("active");
    logoLink.innerHTML = `<img id="logo" src="assets/logo_white.png" alt="">`;
    menuIcon.classList.add("white-icon");
    searchIcon.classList.add("white-icon");
  }
}

// Mobile Navigation

const navList = document.querySelector('.nav');
const mobileNavList = document.querySelector('.mobile-nav');


mobileNavList.classList.add('side-hide');
mobileNavList.classList.remove('side-show');
menuIcon.addEventListener('click', () => {
    navList.classList.add('to-hide');
    mobileNavList.classList.remove('to-hide');
    mobileNavList.classList.add('side-show');
    mobileNavList.classList.remove('side-hide');
})

mobileMenuIcon.addEventListener('click', () => {
  navList.classList.remove('to-hide');
  mobileNavList.classList.add('side-hide');
    mobileNavList.classList.remove('side-show');
})