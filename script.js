// responsive nav bar code

const toggle = document.querySelector(".menu-toggle");
const navlink = document.querySelector(".nav-links");

toggle.addEventListener('click', () => {
    navlink.classList.toggle('active');
});

