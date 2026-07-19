const CACHE_NAME = "ayuda-japon-v5";

const CORE_FILES = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.json",
  "./turismo.html",
  "./japones.html",
  "./ingles.html",
  "./apoyo.html",
  "./comentarios.html",
  "./hero.jpg"
];

// Instala el nuevo Service Worker.
// Si algún archivo opcional no existe, la instalación no se bloquea.
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await Promise.allSettled(
        CORE_FILES.map((url) => cache.add(url))
      );
    })
  );

  self.skipWaiting();
});

// Elimina cachés antiguas y activa inmediatamente la nueva versión.
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );

  self.clients.claim();
});

// Solo procesa solicitudes GET del mismo sitio.
self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") return;

  const url = new URL(request.url);

  if (url.origin !== self.location.origin) return;

  // Para páginas HTML: primero intenta obtener la versión más reciente.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, copy);
          });

          return response;
        })
        .catch(async () => {
          return (
            (await caches.match(request)) ||
            (await caches.match("./index.html"))
          );
        })
    );

    return;
  }

  // Para CSS, JavaScript, imágenes y otros recursos:
  // muestra rápido la copia guardada y actualiza en segundo plano.
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      const networkRequest = fetch(request)
        .then((networkResponse) => {
          if (
            networkResponse &&
            networkResponse.status === 200 &&
            networkResponse.type === "basic"
          ) {
            const copy = networkResponse.clone();

            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, copy);
            });
          }

          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || networkRequest;
    })
  );
});
