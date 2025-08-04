// Menu UI and Menu-Close Configuration
const menuBtn = document.querySelector(".ri-menu-line");
const menuScreen = document.querySelector(".menu-screen");
const closeBtn = document.querySelector(".ri-close-line");

let menuClicked = false;

menuBtn.addEventListener("click", (event) => {
  menuScreen.classList.toggle("hidden");
  menuClicked = !menuClicked;
});

closeBtn.addEventListener("click", (event) => {
  menuScreen.classList.toggle("hidden");
  menuClicked = !menuClicked;
});

// Animation OnScroll Configuration
const products = document.querySelectorAll(
  ".first-product, .second-product, .third-product, .our-img"
);
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-in");
    } else {
      entry.target.classList.remove("slide-in");
    }
  });
});

products.forEach((product) => {
  observer.observe(product);
});
