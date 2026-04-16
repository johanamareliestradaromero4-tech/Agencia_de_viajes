// detectar clicks en el menú
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault(); // evita recargar

    const seccion = this.getAttribute("data-seccion");
    mostrar(seccion);
  });
});

function mostrar(seccion) {
  document.querySelectorAll(".contenido").forEach(sec => {
    sec.style.display = "none";
  });

  document.getElementById(seccion).style.display = "block";
}
