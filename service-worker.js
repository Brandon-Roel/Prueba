self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('amor-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles/style.css',
        '/js/app.js',
        '/icons/heart.png',
        '/icons/heart2.png',
        '/icons/heart3.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
