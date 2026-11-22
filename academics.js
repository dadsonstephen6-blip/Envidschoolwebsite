/* =========================================
   ENVID SCHOOL
   ACADEMICS PAGE JAVASCRIPT
   ========================================= */


/* =========================================
   1. MOBILE NAVIGATION
   ========================================= */

const academicsMenuToggle =
    document.querySelector(".academics-menu-toggle");

const academicsNavLinks =
    document.querySelector(".academics-nav-links");


if (academicsMenuToggle && academicsNavLinks) {

    academicsMenuToggle.addEventListener("click", () => {

        academicsNavLinks.classList.toggle("active");

    });

}


/* =========================================
   2. CLOSE MENU AFTER CLICKING A LINK
   ========================================= */

const academicsNavigationLinks =
    document.querySelectorAll(".academics-nav-links a");


academicsNavigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (academicsNavLinks) {
            academicsNavLinks.classList.remove("active");
        }

    });

});


/* =========================================
   3. HEADER SHADOW ON SCROLL
   ========================================= */

const academicsHeader =
    document.querySelector(".academics-header");


if (academicsHeader) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            academicsHeader.style.boxShadow =
                "0 5px 20px rgba(0, 0, 0, 0.12)";

        } else {

            academicsHeader.style.boxShadow =
                "0 2px 12px rgba(0, 0, 0, 0.08)";

        }

    });

}


/* =========================================
   4. AUTOMATIC FOOTER YEAR
   ========================================= */

const academicsFooterYear =
    document.querySelector(".academics-footer-bottom p");


if (academicsFooterYear) {

    const currentYear =
        new Date().getFullYear();

    academicsFooterYear.innerHTML =
        `© ${currentYear} Envid Nursery, Primary and Secondary School. All Rights Reserved.`;

}