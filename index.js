function asignarImagenes() {
  var nombresImagenes = [
    "icon-reaction.svg",
    "icon-memory.svg",
    "icon-verbal.svg",
    "icon-visual.svg",
  ];

  // Obtener todos los elementos div con clase "box1", "box2", etc.
  var divs = document.querySelectorAll(".box1, .box2, .box3, .box4");

  divs.forEach(function (div, index) {
    var imagenIndex = index % nombresImagenes.length;

    // Crear un elemento img y asignar la imagen
    var imgElement = document.createElement("img");
    imgElement.src = "./assets/images/" + nombresImagenes[imagenIndex];
    imgElement.classList.add("imagen-icono");
    // Ajustar el tamaño de la imagen según tus necesidades
    imgElement.style.width = "25px"; // Cambia el ancho según tus necesidades
    imgElement.style.height = "25px"; // Cambia la altura según tus necesidades

    // Agregar la imagen al div antes del contenido existente
    div.insertBefore(imgElement, div.firstChild);

    // Agregar el texto previo al div después de la imagen
  });
}

// Llamar a la función cuando la página se carga
window.onload = asignarImagenes;
