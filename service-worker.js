// service-worker.js
self.addEventListener('install', (event) => {
  self.skipWaiting(); // Activate new SW immediately
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim()); // Take control immediately
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open('dynamic-v1').then(async (cache) => {
      try {
        const fresh = await fetch(event.request);
        cache.put(event.request, fresh.clone());
        return fresh;
      } catch (e) {
        return cache.match(event.request);
      }
    })
  );
});
