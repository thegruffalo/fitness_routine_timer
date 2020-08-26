const staticFitnessRoutineTimer = "fitness_routine_timer-v2";
const assets = [
  "",
  "index.html",
  "css/style.css",
  "js/app.js",
  "js/handlebars.min-v4.7.6.js",
  "js/umbrella.min.js",
  "js/sound.js",
  "js/view_models.js",
  "js/routines/body_weight_1.js",
  "js/routines/body_weight_2.js",
  "js/routines/test.js"
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
