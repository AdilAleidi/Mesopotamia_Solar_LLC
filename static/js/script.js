document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links a");
  const currentPath = window.location.pathname;

  navLinks.forEach((link) => {
    const linkPath = link.pathname;

    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });
});
