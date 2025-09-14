import { escenas } from "./escenas.js";

let indice = 0;

const textoElemento = document.getElementById("dialog-text");
const botonSiguiente = document.getElementById("btn-text");
const imgElemento = document.getElementById("f1");

function mostrarEscena() {
  if (indice < escenas.length) {
    const escena = escenas[indice];
    textoElemento.textContent = escena.texto;
    imgElemento.src = escena.imagen;
    if (escena.color) {
      document.body.classList.remove("bg-light");
      document.body.style.backgroundColor = escena.color;
    }
    indice++;
  } else {
    textoElemento.textContent =
      "Abre tu presente";
    botonSiguiente.disabled = true;

    botonSiguiente.textContent = "✨";

    botonSiguiente.addEventListener("click", function() {

    window.location.href = "card.html";
  });
  }
}

const musica = document.getElementById("bg-music");

document.addEventListener(
  "click",
  () => {
    if (musica.paused) {
      musica.play();
    }
  },
  { once: true }
); // se ejecuta solo una vez

botonSiguiente.addEventListener("click", mostrarEscena);
// Mostrar el primer diálogo al cargar
mostrarEscena();
