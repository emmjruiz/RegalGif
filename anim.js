// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "No sabes como soy", time: 21, duration: 3 },
  { text: "Tampoco lo que fui", time: 24, duration: 2 },
  { text: "Vengo en el sendero que me trajo hasta aqui", time: 26, duration: 4 },
  { text: "A ti", time: 32, duration: 4},
  { text: "Lo blanco de mi gris", time: 36, duration: 4 },
  { text: "No sé cual es tu historia", time: 41.5 , duration: 2.5 },
  { text: "Ni a donde te diriges", time: 43, duration: 3 },
  { text: "Los besos que te dieron", time: 47, duration: 2 },
  { text: "Te han dejado cicatrices", time: 49, duration: 3 },
  { text: "Relieves", time: 52, duration: 4 },
  { text: "Matices", time: 54, duration: 4 },
  { text: "Nuestro riesgo", time: 63 , duration: 1.5 },
  { text: "Nuestra historia", time: 64.5, duration: 2.5 },
  { text: "Buscar remedio", time: 68.5, duration: 1.5 },
  { text: "Sin derrotas", time: 70, duration: 2 },
  { text: "Y si perdemos", time: 72.5, duration: 3 },
  { text: "No es gran cosa", time: 75, duration: 8 },
  { text: "At the time", time: 144, duration: 5 },
  { text: "The whisper of birds", time: 148, duration: 5 },
  { text: "Lonely before the sun cried", time: 153, duration: 5 },
  { text: "Fell from the sky", time: 158, duration: 5 },
  { text: "Like water drops", time: 164, duration: 5 },
  { text: "Where I'm now? I don't know why", time: 169, duration: 6 },
  { text: "Nice butterflies in my hands", time: 176, duration: 7 },
  { text: "Too much light for twilight", time: 183, duration: 5 },
  { text: "In the mood for the flowers", time: 188, duration: 5 },
  { text: "Love.", time: 140, duration: 5 },
];

// Animar las letras
function updateLyrics() {
  var time = audio.currentTime;  // Tiempo exacto sin redondear
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + line.duration
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 100);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);