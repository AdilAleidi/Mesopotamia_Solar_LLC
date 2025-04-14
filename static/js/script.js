document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  // Only add toggle functionality if on mobile
  function setupMobileMenu() {
    if (window.innerWidth <= 768) {
      menuToggle.style.display = "flex";
      menuToggle.addEventListener("click", toggleMenu);
    } else {
      menuToggle.style.display = "none";
      menuToggle.removeEventListener("click", toggleMenu);
      mainNav.classList.remove("active");
    }
  }

  function toggleMenu() {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", !isExpanded);
    mainNav.classList.toggle("active");
  }

  // Initialize and update on resize
  setupMobileMenu();
  window.addEventListener("resize", setupMobileMenu);
});
