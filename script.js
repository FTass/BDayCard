const dialogos = [
  "🎂 ¡Hola, mi amor! Hoy es un día muy especial...",
  "✨ Porque hoy celebramos que el mundo te tiene a ti.",
  "🐶 Estaba pensando... ¿y si hacemos algo distinto?",
  "🎁 Tengo algo preparado para ti, pero primero...",
  "💬 Quiero contarte una pequeña historia...",
  "👉 Presiona siguiente y comencemos esta mini aventura.",
];
const fondos = [
    "images/fondo-1.jpg",
    "images/fondo-2.jpg",
    "images/fondo-3.jpg",
    "images/fondo-4.jpg",
    "images/fondo-5.jpg",
]
let indice = 0;
const textoElemento = document.getElementById("dialog-text");
const botonSiguiente = document.getElementById("next-btn");
const imgElemento = document.getElementById("f1")
function mostrarDialogo() {
  if (indice < dialogos.length) {
    textoElemento.textContent = dialogos[indice];
    imgElemento.src= fondos[indice]
    indice++;
  } else {
    textoElemento.textContent = "🎉 ¡Fin de la introducción! (Aquí puede aparecer tu tarjeta o continuar la historia)";
    botonSiguiente.disabled = true;
    botonSiguiente.textContent = "✨";
  }
}
const musica = document.getElementById("bg-music");

document.addEventListener("click", () => {
  if (musica.paused) {
    musica.play();
  }
}, { once: true }); // se ejecuta solo una vez

botonSiguiente.addEventListener("click", mostrarDialogo);

// Mostrar el primer diálogo al cargar
mostrarDialogo();
