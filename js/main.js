const botonNavbar = document.querySelector(".boton-navbar");
const navbarLinks = document.querySelector(".navbar-links");
const contacto = document.querySelector(".formulario-contacto");

botonNavbar.addEventListener("click", () => {
  botonNavbar.classList.toggle("rotar");
  navbarLinks.classList.toggle("mostrar");
});

contacto.addEventListener("submit", (e) => {
  e.preventDefault();
  contacto.reset();
  alert("Se ha enviado el formulario.")
});
