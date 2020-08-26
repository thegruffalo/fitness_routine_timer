const staticFitnessRoutineTimer = "fitness_routine_timer-v3";
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
  "js/routines/week_1_session_1.js",
  "js/routines/week_1_session_2.js",
  "js/routines/week_1_session_3.js",
  "js/routines/week_2_session_1.js",
  "js/routines/week_2_session_2.js",
  "js/routines/week_2_session_3.js",
  "js/routines/week_3_session_1.js",
  "js/routines/week_3_session_2.js",
  "js/routines/week_3_session_3.js",
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
