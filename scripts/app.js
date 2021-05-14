// Varibles
const menu = document.getElementById("menu");
const toggleMenu = document.getElementById("toggleMenu");
const closeMenu = document.getElementById("closeMenu");

const productDropdownToggle = document.getElementById("productDropdownToggle");
const productDropdown = document.getElementById("productDropdown");

const companyDropdownToggle = document.getElementById("companyDropdownToggle");
const companyDropdown = document.getElementById("companyDropdown");

const connectDropdownToggle = document.getElementById("connectDropdownToggle");
const connectDropdown = document.getElementById("connectDropdown");

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

const arr1 = [productDropdownToggle, companyDropdownToggle, connectDropdownToggle];
const arr2 = [productDropdown, companyDropdown, connectDropdown];
for (let i = 0; i < arr1.length; i++) {
    arr1[i].addEventListener("click", () => {
        arr2[i].classList.toggle("show-dropdown");
        chevron(i);
    });
    document.addEventListener("click", (e) => {
        if (e.target.classList[0] !== "nav-item") {
            if (arr2[i].classList.contains("show-dropdown")) {
                arr2[i].classList.remove("show-dropdown");
                chevron(i);
            }
        }
    });
    console.log(arr1[i].firstElementChild.classList[1]);
}

function chevron(i) {
    if (arr2[i].classList.contains("show-dropdown")) {
        arr1[i].firstElementChild.classList.remove("fa-chevron-down");
        arr1[i].firstElementChild.classList.add("fa-chevron-up");
    } else {
        arr1[i].firstElementChild.classList.remove("fa-chevron-up");
        arr1[i].firstElementChild.classList.add("fa-chevron-down");
    }
}
