// navbar variables
const nav = document.querySelector(".mobile-nav"),
 navMenuBtn = document.querySelector(".nav-menu-btn"),
 navCloseBtn = document.querySelector(".nav-close-btn");

 // navtoggle function
 const navTogglefunc= () => nav.classList.toggle("active");
 navMenuBtn.addEventListener("click", navTogglefunc);
 navCloseBtn.addEventListener("click", navTogglefunc);