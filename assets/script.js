window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector(".links");
const menuLinks = document.querySelectorAll(".links a");

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

// Function to close the menu
function closeMenu() {
    hamMenu.classList.remove('active');
    offScreenMenu.classList.remove('active');
}

// Add event listeners to each link
menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});