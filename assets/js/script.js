// navbar variables
const nav = document.querySelector(".mobile-nav"),
 navMenuBtn = document.querySelector(".nav-menu-btn"),
 navCloseBtn = document.querySelector(".nav-close-btn");

 // navtoggle function
 const navTogglefunc= () => nav.classList.toggle("active");
 navMenuBtn.addEventListener("click", navTogglefunc);
 navCloseBtn.addEventListener("click", navTogglefunc);


 //theme toggle variables
 const themeBtn = document.querySelectorAll('.theme-btn');

 for(let i = 0; i < themeBtn.length; i++) {
    themeBtn[i].addEventListener("click",function(){
        document.body.classList.toggle(".light-theme");
        document.body.classList.toggle("dark-theme");
    

        for(let j =0; j < themeBtn.length; j++) {
            themeBtn[j].classList.toggle('light');
            themeBtn[j].classList.toggle('dark');
        }
    })
 }