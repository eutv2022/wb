self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('reloj-cache').then(cache => {
      return cache.addAll([
        'reloj.html',
        'manifest.json',
        'icono-192.png',
        'icono-512.png',
        // Agrega más archivos si usas CSS o JS externos
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});