const staticFitnessRoutineTimer = "fitness_routine_timer-v4";
const assets = [
  "",
  "index.html",
  "css/style.css",
  "dist/main.js",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticFitnessRoutineTimer).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
