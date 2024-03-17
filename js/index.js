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

