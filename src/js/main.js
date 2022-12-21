var burgerMenu = document.querySelector(".burger-menu");
var Nav = document.querySelector("nav");

burgerMenu.addEventListener("click", () => {
  Nav.classList.toggle("menu-open");
});

var links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    Nav.classList.remove("menu-open");
  });
});
