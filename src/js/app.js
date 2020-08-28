import "regenerator-runtime/runtime";
import 'core-js';
import { beep } from './sound.js';
import routines from './routines/routines.js'
import { CountdownTimerVM, RoutineTimerVM } from './view_models.js';
import u from 'umbrellajs';
const showListOfRoutines = require('../templates/routine_list.handlebars');
const showRoutineDetail = require("../templates/routine_detail.handlebars");
const showRoutineTimer = require("../templates/routine_timer.handlebars");
const showRoutineTimerDisplay = require("../templates/routine_timer_display.handlebars");

const app_container = document.getElementById("app");
const myNS = {
  "routines": routines
};

routines.forEach((r) => {
  r.sub_routines.forEach((sr) => {
    sr.summary_open = (sr.sets > 1) ? "open" : "";
  });
});

var handlebar_functions = {};

// The wake lock sentinel.
let wakeLock = null;

// Function that attempts to request a screen wake lock.
const requestWakeLock = async () => {
  try {
    wakeLock = await navigator.wakeLock.request('screen');
    wakeLock.addEventListener('release', () => {
      console.log('Screen Wake Lock was released');
    });
    console.log('Screen Wake Lock is active');
  } catch (err) {
    console.error(`${err.name}, ${err.message}`);
  }
};


class RoutineTimer {
  constructor(routine, update_ui_fn) {
    this.interval_timer = 0;
    this.last_time = 0;
    this.paused = false;
    this.complete = false;
    this.vm = null;
    this.routine = routine;
    this.update_ui_fn = () => update_ui_fn(this);
    let countdownTimerVMs = [];
    routine.sub_routines.forEach((sr) => {
      for (var i = 1; i <= sr.sets; i++) {
        let set_detail = "";
        if (sr.sets > 1) {
          set_detail = `Set ${i} of ${sr.sets}`;
        }
        if (i == 1 && sr.start_delay > 0) {
          let timerVM = new CountdownTimerVM(sr.name, "Get ready!", sr.start_delay, 3, set_detail);
          countdownTimerVMs.push(timerVM);
        }
        sr.intervals.forEach((i) => {
          let timerVM = new CountdownTimerVM(sr.name, i.name, i.duration, 3, set_detail);
          countdownTimerVMs.push(timerVM);
        });
        if (sr.duration_between_sets > 0 && i < sr.sets) {
          let timerVM = new CountdownTimerVM(sr.name, "Set complete!", sr.duration_between_sets, 3, set_detail);
          countdownTimerVMs.push(timerVM);
        }
      }
      if (i == sr.sets && sr.end_delay > 0) {
        let timerVM = new CountdownTimerVM(sr.name, "Well done!", sr.end_delay, 3, set_detail);
        countdownTimerVMs.push(timerVM);
      }
    });
    this.vm = new RoutineTimerVM(routine.name, countdownTimerVMs, this.update_ui_fn, this.alert_fn);
  }

  alert_fn(interval) {
    beep();
    var i = 0;
    for (i = 1; i < interval.alert_with_time_to_go; i++) {
      window.setTimeout(beep, 1000 * i);
    }
  };

  onTick = () => {
    var now = new Date().getTime();
    var diff = now - this.last_time;
    this.last_time = now;
    this.vm.tick(diff);
    if (this.vm.current == null) {
      window.clearInterval(this.interval_timer);
      this.interval_timer = undefined;
      this.complete = true;
      this.update_ui_fn();
      u("#ok").attr("style", "display:inline-block;");
      u("#pause").attr("style", "display:none;");
      u("#end").attr("style", "display:none;");
    }
  };

  async start() {
    this.interval_timer = window.setInterval(this.onTick, 250);
    this.last_time = new Date().getTime();
    this.vm.current_index = 0;
    // Request a screen wake lock…
    await requestWakeLock();
  }

  pause() {
    window.clearInterval(this.interval_timer);
    this.interval_timer = undefined;
    this.paused = true;
    this.update_ui_fn();
  };

  unpause() {
    this.interval_timer = window.setInterval(this.onTick, 250);
    this.last_time = new Date().getTime();
    this.paused = false;
    this.update_ui_fn();
  };

}

const startRoutine = (routine) => {
  u("#routine_detail .container").remove();

  myNS.routine_timer = new RoutineTimer(routine, (rt) => {
    document.getElementById("routine_timer_display").innerHTML = showRoutineTimerDisplay(rt,
      {
        allowProtoPropertiesByDefault: true
      });
  });
  myNS.routine_timer.start();

  document.getElementById("routine_timer").innerHTML = showRoutineTimer(routine);
  u("#routine_timer #end").on("click", (ev) => {
    myNS.routine_timer.pause();
    if (confirm("Are you sure you want to end?")) {
      u("#routine_timer .container").remove();
      myNS.routine_timer = null;
      wakeLock.release();
      wakeLock = null;
      displayRoutineList();
    }
    else {
      myNS.routine_timer.unpause();
    }
  });
  u("#routine_timer #pause").on("click", (ev) => {
    if (myNS.routine_timer.paused) {
      myNS.routine_timer.unpause();
    } else {
      myNS.routine_timer.pause();
    }
  });
  u("#routine_timer #ok").on("click", (ev) => {
    u("#routine_timer .container").remove();
    myNS.routine_timer = null;
    wakeLock.release();
    wakeLock = null;
    displayRoutineList();
  });

}

const displayRoutine = (routine) => {
  u("#routine_list .container").remove();
  document.getElementById("routine_detail").innerHTML = showRoutineDetail(routine);
  u("#routine_detail #close").on("click", (ev) => {
    u("#routine_detail .container").remove();
    displayRoutineList();
  });
  u("#routine_detail #start").on("click", (ev) => {
    startRoutine(routine);
  });
};

const displayRoutineList = () => {
  u("#routine_list").attr("style", "display:block");
  document.getElementById("routine_list").innerHTML = showListOfRoutines(routines);
  u("#routine_list .card").on("click", (ev) => {
    var itemIndex = u(ev.currentTarget).data("item");
    displayRoutine(routines[itemIndex]);
  });
};

const onLoaded = () => {
  displayRoutineList();
}
document.addEventListener("DOMContentLoaded", onLoaded);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
