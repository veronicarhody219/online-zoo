// add active class to active navLinks
const currentLocation = window.location.href;

const navLinks = document.querySelectorAll(".act a");
navLinks.forEach((link) => {
  if (link.href === currentLocation) {
    link.classList.add("active");
  }
});
// hamburger
const hamburger = document.querySelector(".hamburger");
const navContent = document.querySelector(".nav-content");
hamburger.addEventListener("click", () => {
  navContent.classList.toggle("active");
});

// carousel

const gap = 12;

const carousel = document.querySelector(".carousel"),
  content = document.querySelector(".carousel-content"),
  next = document.querySelector(".next"),
  prev = document.querySelector(".prev");

let width = carousel.offsetWidth;
window.addEventListener("resize", (e) => (width = carousel.offsetWidth));
next.addEventListener("click", (e) => {
  carousel.scrollBy(width + gap, 0);
});
prev.addEventListener("click", (e) => {
  carousel.scrollBy(-(width + gap), 0);
});

// modal

// Get the modal
const modals = document.querySelectorAll(".modal");

const cols = document.querySelectorAll(".col");
const cardIndex = document.getElementById("1");

const spans = document.getElementsByClassName("close");

for (let i = 0; i < modals.length; i++) {
  cols[i].addEventListener("click", () => {
    modals[i].style.display = "flex";
  });
}
for (let i = 0; i < modals.length; i++) {
  spans[i].addEventListener("click", () => {
    modals[i].style.display = "none";
  });
  window.onclick = function (event) {
    if (event.target === modals[i]) {
      modals[i].style.display = "none";
    }
  };
}

