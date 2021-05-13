// Varibles
const menu = document.getElementById("menu");
const toggleMenu = document.getElementById("toggleMenu");
const closeMenu = document.getElementById("closeMenu");

toggleMenu.addEventListener("click", () => {
    menu.classList.add("show");
    toggleMenu.classList.add("display-none");
    closeMenu.classList.add("display-inline");
});

closeMenu.addEventListener("click", () => {
    menu.classList.remove("show");
    closeMenu.classList.remove("display-inline");
    toggleMenu.classList.remove("display-none");
});

while (menu.classList.toggle("show")) {}
