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

// Código para mostrar el botón de instalar PWA
let deferredPrompt;
const btnInstalar = document.getElementById('btnInstalar');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault(); // Evita que se muestre el diálogo automático
  deferredPrompt = e; // Guarda el evento
  btnInstalar.style.display = 'inline-block'; // Muestra el botón
});

btnInstalar.addEventListener('click', () => {
  btnInstalar.style.display = 'none'; // Oculta el botón

  if (deferredPrompt) {
    deferredPrompt.prompt(); // Muestra el diálogo de instalación

    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Usuario aceptó la instalación');
      } else {
        console.log('Usuario rechazó la instalación');
      }
      deferredPrompt = null;
    });
  }
});
