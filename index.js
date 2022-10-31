// add active class to active navLinks
const currentLocation = location.pathname;
console.log(currentLocation);

const navLinks = document.querySelectorAll(".act a");
navLinks.forEach((link) => {
  if (link.href.includes(`${currentLocation}`)) {
    link.classList.add("active");
  }
});
