


//-------------------------- toggle icon navbar -----------------------------------
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');

};




//-------------------------- Scroll Active navbar -----------------------------------
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');            
            });
            
        };
    });
    /** --------------------------- Sticky Navbar --------------------------------------- */
   let header = document.querySelector('header');
   
   header.classList.toggle('sticky', window.scrollY > 100);

};



/** --------------------------- remove icon and navbar when click --------------------------------------- */
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');




/** --------------------------- scroll reaveal --------------------------------------- */
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form , .skills-row ', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,  .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

    


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const responseMessage = document.getElementById("response-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Perform form validation
        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const mobile = document.getElementById("mobile").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const mobilePattern = /^\d{10}$/; // Matches exactly 10 digits
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Basic email pattern

        if (fullname === "" || email === "" || mobile === "" || message === "") {
            responseMessage.textContent = "Please fill in required fields.";
        } else if (!mobilePattern.test(mobile)) {
            responseMessage.textContent = "Please enter a valid 10-digit mobile number.";
        } else if (!emailPattern.test(email)) {
            responseMessage.textContent = "Please enter a valid email address.";
        } else {
            // Simulate form submission success for demonstration purposes
            // In a real scenario, you would send data to a server using an AJAX request
            setTimeout(function() {
                responseMessage.textContent = "Thank you for your message. We will get back to you soon!";
                form.reset();
            }, 1000);
        }
    });
});



/** 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Function to remove active class from all navigation links
function removeActiveClass() {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
}

// Function to add active class to the appropriate navigation link
function setActiveLink(link) {
    removeActiveClass();
    link.classList.add('active');
}

// Smooth scrolling when clicking on navigation links
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        let targetSectionId = link.getAttribute('href');
        let targetSection = document.querySelector(targetSectionId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Update active link and navbar color when scrolling
window.addEventListener('scroll', function () {
    let currentScrollPos = window.scrollY;

    sections.forEach(section => {
        let sectionTop = section.offsetTop - 150;
        let sectionHeight = section.offsetHeight;
        let sectionId = '#' + section.getAttribute('id');
        let correspondingNavLink = document.querySelector('header nav a[href="' + sectionId + '"]');

        if (currentScrollPos >= sectionTop && currentScrollPos < sectionTop + sectionHeight) {
            setActiveLink(correspondingNavLink);
            if (sectionId === '#home') {
                document.querySelector('header').classList.add('active');
            } else {
                document.querySelector('header').classList.remove('active');
            }
        }
    });
});

**/

// Mobile Menu
const menuIcon = document.getElementById('menu-icon');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Close mobile menu when a link is clicked
const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});
