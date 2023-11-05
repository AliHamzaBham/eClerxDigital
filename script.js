const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

const logoLink = document.querySelector('.logo_link');

function fixNav() {
    if (window.scrollY > 0) {
    nav.classList.add("active");
    logoLink.innerHTML = `<img id="logo" src="assets/logo.svg" alt="">`
  } else {
    nav.classList.remove("active");
    logoLink.innerHTML = `<img id="logo" src="assets/logo_white.png" alt="">`
  }
}
