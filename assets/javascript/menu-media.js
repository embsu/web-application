const icon = document.getElementById('menu-icon');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll(".nav-link");


icon.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});

icon.addEventListener("click", () => {
    navLinks.forEach(link => {
      link.classList.toggle("shown");
    });
  });

  // VITUN KESKEN KOKO PASKA