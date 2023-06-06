document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.querySelector(".menu-img");
    var menu = document.querySelector(".menu");

    menuIcon.addEventListener("click", () => {
        menu.classList.toggle("show");
    });
});
