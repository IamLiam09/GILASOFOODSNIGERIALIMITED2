// popup
window.addEventListener("load", function() {
    // Disable scrolling by setting overflow to hidden
    document.body.style.overflow = "hidden";
    
    setTimeout(function open(event) {
        document.querySelector(".popup").style.display = "block";
    }, 1000);
});

document.querySelector("#close").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
    
    // Enable scrolling by setting overflow to auto
    document.body.style.overflow = "auto";
});

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

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    })
})
const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe(el))
document.getElementById('currentYear').textContent = new Date().getFullYear();

