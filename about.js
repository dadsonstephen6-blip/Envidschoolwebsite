/* =========================================
   ENVID SCHOOL
   ABOUT PAGE JAVASCRIPT
   ========================================= */


/* =========================================
   1. MOBILE NAVIGATION
   ========================================= */

const aboutMenuToggle =
    document.querySelector(".about-menu-toggle");

const aboutNavLinks =
    document.querySelector(".about-nav-links");


if (aboutMenuToggle && aboutNavLinks) {

    aboutMenuToggle.addEventListener("click", () => {

        aboutNavLinks.classList.toggle("active");

    });

}


/* =========================================
   2. CLOSE MENU AFTER CLICKING A LINK
   ========================================= */

const aboutNavigationLinks =
    document.querySelectorAll(".about-nav-links a");


aboutNavigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        aboutNavLinks.classList.remove("active");

    });

});


/* =========================================
   3. HEADER SHADOW WHEN SCROLLING
   ========================================= */

const aboutHeader =
    document.querySelector(".about-header");


if (aboutHeader) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            aboutHeader.style.boxShadow =
                "0 5px 20px rgba(0, 0, 0, 0.12)";

        } else {

            aboutHeader.style.boxShadow =
                "0 2px 12px rgba(0, 0, 0, 0.08)";

        }

    });

}


/* =========================================
   4. CURRENT YEAR IN FOOTER
   ========================================= */

const aboutFooterYear =
    document.querySelector(".about-footer-bottom p");


if (aboutFooterYear) {

    const currentYear =
        new Date().getFullYear();

    aboutFooterYear.innerHTML =
        `© ${currentYear} Envid Nursery, Primary and Secondary School. All Rights Reserved.`;

}