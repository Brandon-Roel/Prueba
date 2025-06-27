const mensajes = [
  "El amor eres tú 💖",
  "Hoy es un buen día para decir te quiero 💕",
  "Eres una persona increíble 🌟",
  "¡Sonríe! Alguien piensa en ti 😊",
  "El amor está en el aire ✨"
];

function mostrarAmor() {
  const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
  document.getElementById("mensaje").textContent = mensaje;
}

// Registrar el Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('✔ Service Worker registrado'))
    .catch((error) => console.log('❌ Error en el Service Worker', error));
}
