// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const button = document.querySelector("button");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
  button.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target) && !button.contains(e.target)) {
    navbarNav.classList.remove("active");
    button.classList.remove("active");
  }
});

// menu aktif saat gulir
const links = document.querySelectorAll(".links");
const sec = document.querySelectorAll("section");

function activeMenu() {
  let len = sec.length;
  while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
  links.forEach(ltx.classList.remove("active"));
  links[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);
