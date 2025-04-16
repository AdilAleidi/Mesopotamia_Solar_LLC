document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  const body = document.body;

  if (!menuToggle || !mainNav) return; // Safety check in case elements are missing

  // Function to close menu
  function closeMenu() {
    menuToggle.classList.remove("active");
    mainNav.classList.remove("active");
    body.classList.remove("menu-open");
  }

  // Toggle menu on click
  menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("active");
    mainNav.classList.toggle("active");
    body.classList.toggle("menu-open");
  });

  // Close menu when clicking on a nav link (mobile only)
  const navLinks = document.querySelectorAll(".main-nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        closeMenu();
      }
    });
  });

  // Close menu when resizing to desktop
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && body.classList.contains("menu-open")) {
      closeMenu();
    }
  });
});
