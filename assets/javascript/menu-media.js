document.addEventListener("DOMContentLoaded", function () {
  // click event listener to a parent element of the button
  document.body.addEventListener("click", function (event) {
    if (event.target && event.target.id === "menu-icon") {
      
      toggleMenu();
      console.log("menu-icon clicked");
    }
  });

  function toggleMenu() {
    const navbar = document.querySelector('.navbarlinkit');
    navbar.classList.toggle('active');
    console.log('active toggled');
  }
});