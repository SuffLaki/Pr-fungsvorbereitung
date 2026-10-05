/* Offline-Cache der Prüfungstrainer-App. Version hochzählen, wenn index.html geändert wird. */
const CACHE = "spl-trainer-v5";
const DATEIEN = ["./", "./index.html", "./manifest.webmanifest", "./icon-180.png", "./icon-192.png", "./icon-512.png", "./icon-512-maskable.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(DATEIEN)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const anfrage = e.request;
  if (anfrage.method !== "GET") return;
  e.respondWith(
    caches.match(anfrage).then(treffer => {
      if (treffer) return treffer;
      return fetch(anfrage).then(antwort => {
        if (antwort && antwort.ok && new URL(anfrage.url).origin === location.origin) {
          const kopie = antwort.clone();
          caches.open(CACHE).then(c => c.put(anfrage, kopie));
        }
        return antwort;
      }).catch(() => caches.match("./index.html"));
    })
  );
});
