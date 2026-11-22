
/* =========================================
   ENVID SCHOOL WEBSITE
   NEWS PAGE JAVASCRIPT
   ========================================= */


/* =========================================
   1. MOBILE NAVIGATION
   ========================================= */

const menuToggle = document.querySelector(".news-menu-toggle");
const navLinks = document.querySelector(".news-nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

}


/* =========================================
   2. CLOSE MENU WHEN A LINK IS CLICKED
   ========================================= */

const navigationLinks = document.querySelectorAll(
    ".news-nav-links a"
);


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* =========================================
   3. CLOSE MENU WHEN CLICKING OUTSIDE
   ========================================= */

document.addEventListener("click", function (event) {

    if (!menuToggle || !navLinks) {
        return;
    }

    const clickedInsideMenu =
        navLinks.contains(event.target);

    const clickedMenuButton =
        menuToggle.contains(event.target);


    if (!clickedInsideMenu && !clickedMenuButton) {

        navLinks.classList.remove("active");

    }

});


/* =========================================
   4. CLOSE MOBILE MENU WHEN RESIZING
      TO DESKTOP
   ========================================= */

window.addEventListener("resize", function () {

    if (window.innerWidth > 768 && navLinks) {

        navLinks.classList.remove("active");

    }

});
