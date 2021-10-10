document.addEventListener('DOMContentLoaded', () => {
  // Get "navbar-burger" elements
  const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check for navbar burgers
  if (navbarBurgers.length > 0) {

    // Add click event on each
    for (const navbarBurger of navbarBurgers) {
      
      navbarBurger.addEventListener('click', () => {

        // Get the target
        const target = document.getElementById(navbarBurger.dataset.target);

        // Toggle the "is-active"
        navbarBurger.classList.toggle('is-active');
        target.classList.toggle('is-active');

      });

    }

  }
});
