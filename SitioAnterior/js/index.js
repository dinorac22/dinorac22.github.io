const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    

    function disableScroll() {
        // Guarda la posición especifica
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      
            // Si el evento se activa, setea la misma posición
            window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
            };
    }
    function enableScroll() {
        window.onscroll = function() {};
    }
    if (navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("aria-label","Cerrar menú");
        document.body.classList.add('no-scroll');
    }else{
        navToggle.setAttribute("aria-label","Abrir menú");
        document.body.classList.remove('no-scroll');
    }
});
/*const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const menuLink = document.querySelector(`.menu a[href="#${id}"]`);

      if (entry.isIntersecting) {
        document.querySelector(".menu a.selected").classList.remove("selected");
        menuLink.classList.add("selected");
      }
    });
  },
  { rootMargin: "-30% 0px -70% 0px" }
);

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    menu.classList.remove("menu_opened");
  });

  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});*/