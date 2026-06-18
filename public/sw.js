const CACHE_NAME = "rongyao-kindergarten-v4";

const APP_SHELL = [
  "/",
  "/index.html",
  "/style.css",
  "/mobile-input-fix.css",
  "/app.js",
  "/manifest.webmanifest",
  "/offline.html",
  "/assets/icons/bluehair-apple-touch-icon.png",
  "/assets/icons/bluehair-icon-192.png",
  "/assets/icons/bluehair-icon-512.png",
  "/assets/icons/bluehair-maskable-512.png",
  "/assets/posters/caiwenji.jpg",
  "/assets/posters/daji.jpg",
  "/assets/posters/dolia.jpg",
  "/assets/posters/kai.jpg",
  "/assets/posters/laofuzi.jpg",
  "/assets/posters/libai.jpg",
  "/assets/posters/mengqi.jpg",
  "/assets/posters/sangqi.jpg",
  "/assets/posters/sunquan.jpg",
  "/assets/posters/wuzetian.jpg",
  "/assets/posters/xiaoqiao.jpg",
  "/assets/posters/xishi.jpg",
  "/assets/posters/yao-deer.jpg",
  "/assets/posters/yao-star.jpg",
  "/assets/posters/yuji.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== "GET" || url.pathname.startsWith("/api/")) return;

  if (request.mode === "navigate") {
    event.respondWith(fetch(request).catch(() => caches.match("/index.html").then((cached) => cached || caches.match("/offline.html"))));
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      const fresh = fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached);

      return cached || fresh;
    }),
  );
});
