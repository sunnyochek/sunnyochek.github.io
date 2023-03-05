function toggleMenu() {
    var burger = document.getElementById("burger");
    var navBarLinks = document.getElementById("navbar-links");
  
    burger.classList.toggle("toggled");
    navBarLinks.classList.toggle("active");
  }