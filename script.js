const menuBtn = document.querySelector(".ri-menu-line");
const menuScreen = document.querySelector(".menu-screen");

let menuClicked = false;
menuBtn.addEventListener("click", (event) => {
  menuScreen.classList.toggle("hidden");
  menuClicked = !menuClicked;
});
