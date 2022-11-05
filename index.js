// add active class to active navLinks
const currentLocation = window.location.href;

const navLinks = document.querySelectorAll(".act a");
navLinks.forEach((link) => {
  if (link.href === currentLocation) {
    link.classList.add("active");
  }
});
