import { beep } from './sound.js';
import r1 from './routines/body_weight_1.js';
import r2 from './routines/body_weight_2.js';
import { CountdownTimerVM, RoutineTimerVM } from './view_models.js';

const app_container = document.getElementById("app");
const myNS = {
  "routines": [
    r1,
    r2
  ]
};

const routines = myNS.routines;

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
  routine;
  interval_timer;
  last_time = 0;
  paused = false;
  complete = false;
  vm = null;
  constructor(routine, update_ui_fn) {
    this.routine = routine;
    this.update_ui_fn = () => update_ui_fn(this);
    let countdownTimerVMs = [];
    routine.sub_routines.forEach((sr) => {
      for (var i = 1; i <= sr.sets; i++) {
        let set_info = "";
        if (sr.sets > 1) {
          set_info = `{{i}}/{{sets}}`;
        }
        if (i == 1 && sr.start_delay > 0) {
          let timerVM = new CountdownTimerVM(sr.name, "Get ready!", sr.start_delay, 3, set_info);
          countdownTimerVMs.push(timerVM);
        }
        sr.intervals.forEach((i) => {
          let timerVM = new CountdownTimerVM(sr.name, i.name, i.duration, 3, set_info);
          countdownTimerVMs.push(timerVM);
        });
        if (sr.duration_between_sets > 0 && i < sr.sets) {
          let timerVM = new CountdownTimerVM(sr.name, "Set complete!", sr.duration_between_sets, 3, set_info);
          countdownTimerVMs.push(timerVM);
        }
      }
      if (i == sr.sets && sr.end_delay > 0) {
        let timerVM = new CountdownTimerVM(sr.name, "Well done!", sr.end_delay, 3, set_info);
        countdownTimerVMs.push(timerVM);
      }
    });
    this.vm = new RoutineTimerVM(routine.name, countdownTimerVMs, this.update_ui_fn);
  }

  onTick = () => {
    var now = new Date().getTime();
    var diff = now - this.last_time;
    this.last_time = now;
    this.vm.tick(diff);
    if( this.vm.current == null){
      window.clearInterval(this.interval_timer);
      this.interval_timer = undefined;
      this.complete = true;
      this.update_ui_fn();
  
    }
  };

  start = async () => {
    this.interval_timer = window.setInterval(this.onTick, 1000);
    this.last_time = new Date().getTime();
    this.vm.current_index = 0;
    // Request a screen wake lock…
    await requestWakeLock();
  }

  pause = () => {
    window.clearInterval(this.interval_timer);
    this.interval_timer = undefined;
    this.paused = true;
    this.update_ui_fn();
  };

  unpause = () => {
    this.interval_timer = window.setInterval(this.onTick, 250);
    this.last_time = new Date().getTime();
    this.paused = false;
    this.update_ui_fn();
  };

}

const startRoutine = (routine) => {
  u("#routine_detail .container").remove();

  myNS.routine_timer = new RoutineTimer(routine, (rt) => {
    document.getElementById("routine_timer_display").innerHTML = handlebar_functions.showRoutineTimerDisplay(rt,
      {
        allowProtoPropertiesByDefault: true
      });
  });
  myNS.routine_timer.start();

  document.getElementById("routine_timer").innerHTML = handlebar_functions.showRoutineTimer(routine);
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

}

const displayRoutine = (routine) => {
  u("#routine_list .container").remove();
  document.getElementById("routine_detail").innerHTML = handlebar_functions.showRoutineDetail(routine);
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
  document.getElementById("routine_list").innerHTML = handlebar_functions.showListOfRoutines(routines);
  u("#routine_list .card").on("click", (ev) => {
    var itemIndex = u(ev.currentTarget).data("item");
    displayRoutine(routines[itemIndex]);
  });
};

const onLoaded = () => {
  handlebar_functions = {
    "showListOfRoutines": Handlebars.compile(document.getElementById("template_routine_list").innerHTML),
    "showRoutineDetail": Handlebars.compile(document.getElementById("template_routine_detail").innerHTML),
    "showRoutineTimer": Handlebars.compile(document.getElementById("template_routine_timer").innerHTML),
    "showRoutineTimerDisplay": Handlebars.compile(document.getElementById("template_routine_timer_display").innerHTML),
  };

  Handlebars.registerHelper('if_gt', function (a, b, opts) {
    if (a > b) {
      return opts.fn(this);
    } else {
      return opts.inverse(this);
    }
  });

  Handlebars.registerHelper('to_time', function (total_seconds) {
    var seconds = total_seconds % 60;
    var total_minutes = Math.floor(total_seconds / 60);
    var minutes = total_minutes % 60;
    var hours = Math.floor(total_minutes / 60);
    var minutes_display = ("00" + String(minutes)).slice(-2);
    var seconds_display = ("00" + String(seconds)).slice(-2);
    var formatted = hours > 0 ? `${hours}:` : "";
    formatted += `${minutes_display}:${seconds_display}`;
    return formatted;
  });

  Handlebars.registerHelper('helperMissing', function ( /* dynamic arguments */) {
    var options = arguments[arguments.length - 1];
    var args = Array.prototype.slice.call(arguments, 0, arguments.length - 1)
    return new Handlebars.SafeString("Missing: " + options.name + "(" + args + ")")
  });
  Handlebars.registerHelper('blockHelperMissing', function (context, options) {
    return "Helper '" + options.name + "' not found. "
      + "Printing block: " + options.fn(context);
  });

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
