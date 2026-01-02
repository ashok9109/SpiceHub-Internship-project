// responsive nav bar code

const toggle = document.querySelector(".menu-toggle");
const navlink = document.querySelector(".nav-links");

toggle.addEventListener('click', () => {
    navlink.classList.toggle('active');
});

// booking form submit

const form = document.getElementById("bookingForm");
const successmsg = document.getElementById("successmsg");
console.log("this form", form)

if(form){

    form.addEventListener('submit', function(e){
        e.preventDefault();

        successmsg.textContent = "Your table is booked successfully";
        form.reset()
    });
};

// contact form submit code

const contactForm = document.getElementById("contactForm");
const contactSuccess = document.getElementById("contactSuccess");

if(contactForm){

    contactForm.addEventListener("submit", function(e){
        e.preventDefault()
        contactSuccess.textContent = 'Message send successfully'
        contactForm.reset()
    });
};