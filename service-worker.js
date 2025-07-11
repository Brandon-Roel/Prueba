// service-worker.js

const CACHE_NAME = "ecoreto-cache-v1";
const urlsToCache = [
  "index.html",
  "styles/style.css",
  "js/app.js",
  "icons/Logo.png",
  "icons/Logo2.png",
  "manifest.json"
];

// Instalar el Service Worker y guardar en caché archivos básicos
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activar y limpiar cachés viejas si hay cambios
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
});

// Interceptar peticiones y responder desde caché o red
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
