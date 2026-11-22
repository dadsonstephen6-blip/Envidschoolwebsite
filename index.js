
/* =========================================
   ENVID SCHOOL WEBSITE
   MAIN JAVASCRIPT
   ========================================= */


/* =========================================
   1. MOBILE NAVIGATION
   ========================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


// Open / close mobile menu
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});



/* =========================================
   2. CLOSE MOBILE MENU WHEN LINK IS CLICKED
   ========================================= */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});



/* =========================================
   3. ACTIVE NAVIGATION LINK
   ========================================= */

navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        navigationLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});



/* =========================================
   4. HEADER SHADOW ON SCROLL
   ========================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 4px 15px rgba(0, 0, 0, 0.12)";

    } else {

        header.style.boxShadow =
            "0 2px 12px rgba(0, 0, 0, 0.08)";

    }

});



/* =========================================
   5. UPDATE FOOTER YEAR AUTOMATICALLY
   ========================================= */

const footerYear = document.querySelector(".footer-bottom p");

if (footerYear) {

    const currentYear = new Date().getFullYear();

    footerYear.innerHTML =
        `© ${currentYear} Envid Nursery, Primary and Secondary School. All Rights Reserved.`;

}
