// add active class to active navLinks
const currentLocation = window.location.href;

const navLinks = document.querySelectorAll(".act a");
navLinks.forEach((link) => {
  if (link.href === currentLocation) {
    link.classList.add("active");
  }
});
// hamburger
const hamburger = document.querySelector(".hamburger")
const navContent = document.querySelector(".nav-content")
hamburger.addEventListener("click", ()=>{
navContent.classList.toggle("active")
})