const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
});


const headerMenu = document.querySelector(".header-menu"),
menuBtn = document.querySelector(".menu-btn"),
headerMenuItems = headerMenu.querySelectorAll("li a");


menuBtn.addEventListener("click", () => {
    headerMenu.classList.toggle("show-menu");
});

headerMenuItems.forEach((i) => {
    i.addEventListener("click", () => {
        headerMenu.classList.remove("show-menu");
    });
});