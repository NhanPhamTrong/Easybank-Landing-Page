const menuToggler = $("header .menu-toggler");
const menu = $("nav");

function OpenMenu() {
    menu.toggleClass("active");
    menuToggler.toggleClass("active");
}