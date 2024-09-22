var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Mira el amanecer a lo largo de la costa", time: 28 },  // Tiempo exacto en la canción
  { text: "Mientras los dos envejecemos", time: 33 },
  { text: "No puedo describir lo que siento", time: 37 },
  { text: "Y todo lo que sé es que vamos a casa", time: 43 },
  { text: "Así que, por favor, no me dejes ir", time: 46 },
  { text: "No me dejes ir, oh", time: 52 },
  { text: "Y si es lo correcto", time: 56 },
  { text: "No me importa cuánto tiempo tome", time: 59 },
  { text: "Mientras esté contigo, tengo una sonrisa en mi cara", time: 66 },
  { text: "Guarda tus lágrimas, todo estará bien", time: 73 },
  { text: "Todo lo que sé", time: 80 },
  { text: "Es que estás aquí conmigo", time: 85 },
  { text: "Mira el amanecer mientras envejecemos", time: 104 },
  { text: "No puedo describirlo", time: 115 },
  { text: "Desearía poder vivir cada recuerdo de nuevo", time: 120 },
  { text: "Solo una vez más antes de flotar en el viento", time: 128 },
  { text: "Y todo el tiempo que pasamos esperando que la luz nos lleve", time: 135 },
  { text: "Han sido los mejores momentos de mi vida", time: 143 },
  { text: "No me importa cuánto tiempo tome", time: 149 },
  { text: "Mientras esté contigo, tengo una sonrisa en mi cara", time: 157 },
  { text: "Guarda tus lágrimas, todo estará bien", time: 164 },
  { text: "Estás aquí conmigo", time: 177 },
  { text: "No puedo describirlo, oh, oh", time: 140 }
];

// Función para actualizar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    var fadeInDuration = 0.5;  // Ajusta el fadeIn a un valor más suave si prefieres
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

// Función para ocultar el título después de la duración de la canción
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); 
}

// Llama a la función después del tiempo total de la canción (ajustar según duración)
setTimeout(ocultarTitulo, 216000);
