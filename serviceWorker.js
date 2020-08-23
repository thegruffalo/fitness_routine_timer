const staticDevCoffee = "fitness_routine_timer-v1";
const assets = [
  "",
  "index.html",
  "css/style.css",
  "js/app.js",
  "js/extend.js",
  "js/handlebars.min-v4.7.6.js",
  "js/umbrella.min.js",
  "js/routines/models.js",
  "js/routines/basic_s_and_c.js",
  "js/routines/body_weight_1.js",
  "js/routines/body_weight_2.js",
  "js/routines/body_weight_3.js",
  "js/routines/body_weight_4.js",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
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
