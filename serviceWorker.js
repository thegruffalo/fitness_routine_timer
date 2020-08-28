const staticFitnessRoutineTimer = "fitness_routine_timer-v4";
const assets = [
  "",
  "index.html",
  "css/style.css",
  "dist/main.js",
  "src/js/handlebars.min-v4.7.6.js",
  "src/js/umbrella.min.js",
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
