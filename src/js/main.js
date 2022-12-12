var burgerMenu = document.querySelector(".burger-menu");
var Nav = document.querySelector("nav");
var Link1 = document.querySelector(".link1");
var Link2 = document.querySelector(".link2");
var Link3 = document.querySelector(".link3");
var Link4 = document.querySelector(".link4");

console.log(Nav, burgerMenu);

burgerMenu.addEventListener("click", () => {
  Nav.classList.toggle("menu-open");
});

Link1.addEventListener("click", () => {
  Nav.classList.remove("menu-open");
});

Link2.addEventListener("click", () => {
  Nav.classList.remove("menu-open");
});

Link3.addEventListener("click", () => {
  Nav.classList.remove("menu-open");
});

Link4.addEventListener("click", () => {
  Nav.classList.remove("menu-open");
});
