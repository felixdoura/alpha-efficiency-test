document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.querySelector("#burger-menu");
    const navList = document.querySelector(".nav-list");

    burgerMenu.addEventListener("click", function() {
        console.log("the click works")
        navList.classList.toggle("active");
    });
});