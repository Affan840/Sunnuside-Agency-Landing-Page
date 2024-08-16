let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('header nav .nav-items ul')

// nav.style.display = 'none';

hamburger.addEventListener("click", () => {
  const navDisplay = window.getComputedStyle(nav).display;

  if (navDisplay === "none") {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }
});