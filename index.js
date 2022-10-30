// add active class to active navLinks
const currentLocation = location.pathname;

const navLinks = document.querySelectorAll(".act a");
navLinks.forEach((link) => {
  if (link.href.includes(`${currentLocation}`)) {
    link.classList.add("active");
  }
});
