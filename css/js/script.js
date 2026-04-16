function mostrar(seccion) {
  document.querySelectorAll(".contenido").forEach(sec => {
    sec.style.display = "none";
  });

  document.getElementById(seccion).style.display = "block";
}
