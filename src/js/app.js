import "regenerator-runtime/runtime";
import 'core-js';
import { beep } from './sound.js';
import routines from './routines/routines.js'
import { CountdownTimerVM, RoutineTimerVM } from './view_models.js';
import u from 'umbrellajs';
const Handlebars = require('handlebars/runtime');
const showListOfRoutines = require('../templates/routine_list.handlebars');
const showRoutineDetail = require("../templates/routine_detail.handlebars");
const showRoutineTimer = require("../templates/routine_timer.handlebars");
const showRoutineTimerDisplay = require("../templates/routine_timer_display.handlebars");
import css from '../style.less';

// Register helpers
Handlebars.registerHelper('log', function(something) {
    console.log(something);
});

// No longer using eq or not helpers

// Register the groupBy helper
Handlebars.registerHelper('groupBy', function(array, property) {
    console.log('Grouping array:', array);
    console.log('By property:', property);
    
    const grouped = array.reduce((acc, obj) => {
        const key = obj[property] || 'Ungrouped';  // Use 'Ungrouped' if property is undefined
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push({...obj}); // Make a copy of the object
        return acc;
    }, {});

    console.log('Grouped result:', grouped);
    
    // Convert to array of group objects, sorted alphabetically
    return Object.entries(grouped)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([groupName, items]) => ({
            groupName,
            items
        }));
});
const app_container = document.getElementById("app");
const myNS = {
};


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
          let timerVM = new CountdownTimerVM(routine.group || routine.name, "Get ready!", sr.start_delay, 3, set_detail);
          countdownTimerVMs.push(timerVM);
        }
        sr.intervals.forEach((i) => {
          let timerVM = new CountdownTimerVM(routine.group || routine.name, i.name, i.duration, 3, set_detail, i.split);
          countdownTimerVMs.push(timerVM);
        });
        if (sr.duration_between_sets > 0 && i < sr.sets) {
          let timerVM = new CountdownTimerVM(routine.group || routine.name, "Set complete!", sr.duration_between_sets, 3, set_detail);
          countdownTimerVMs.push(timerVM);
        }
      }
      if (i == sr.sets && sr.end_delay > 0) {
        let timerVM = new CountdownTimerVM(routine.group || routine.name, "Well done!", sr.end_delay, 3, set_detail);
        countdownTimerVMs.push(timerVM);
      }
    });
    this.vm = new RoutineTimerVM(routine.name, countdownTimerVMs, this.update_ui_fn, this.end_alert_fn);
  }

  end_alert_fn(interval) {
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

const setupModal = (routine) => {
  const modal = u("#infoModal");
  const modalTitle = u("#modalTitle");
  const modalBenefits = u("#modalBenefits");
  const modalExecution = u("#modalExecution");

  // Close modal on backdrop click
  modal.on("click", (e) => {
    if (e.target === modal.first()) {
      modal.removeClass("show");
    }
  });

  // Close modal on X button click
  u(".close-modal").on("click", () => {
    modal.removeClass("show");
  });

  // Handle info icon clicks
  u(".info-icon").on("click", (e) => {
    const icon = u(e.currentTarget);
    const exerciseName = icon.data("exercise");
    const type = icon.data("type");
    
    // Find the exercise data
    let exercise = null;
    routine.sub_routines.forEach(sr => {
      const found = sr.intervals.find(i => i.name === exerciseName);
      if (found) exercise = found;
    });

    if (exercise) {
      modalTitle.text(exercise.name);
      if (exercise.benefits) {
        modalBenefits.text(exercise.benefits);
        u(".benefits-section").first().style.display = "block";
      } else {
        u(".benefits-section").first().style.display = "none";
      }
      if (exercise.execution_notes) {
        modalExecution.text(exercise.execution_notes);
        u(".execution-section").first().style.display = "block";
      } else {
        u(".execution-section").first().style.display = "none";
      }
      modal.addClass("show");
    }
  });
};

const displayRoutine = (routine) => {
  u("#routine_list .container").remove();
  document.getElementById("routine_detail").innerHTML = showRoutineDetail(routine);
  setupModal(routine);
  u("#routine_detail #close").on("click", (ev) => {
    u("#routine_detail .container").remove();
    displayRoutineList();
  });
  u("#routine_detail #start").on("click", (ev) => {
    startRoutine(routine);
  });
};

const displayRoutineList = () => {
  document.getElementById("routine_list").innerHTML = showListOfRoutines(routines);
  u("#routine_list .card").on("click", (ev) => {
    const card = u(ev.currentTarget);
    const cardName = card.find('h1').text().trim();
    
    // For progressive program cards, parse week and session
    const weekMatch = cardName.match(/Week (\d+) - Session (\d+)/);
    let routine;
    
    if (weekMatch) {
      const week = parseInt(weekMatch[1]);
      const session = parseInt(weekMatch[2]);
      routine = routines.find(r => r.week === week && r.session === session);
    } else {
      routine = routines.find(r => r.name === cardName);
    }
    
    if (routine) {
      displayRoutine(routine);
    }
  });
};

const onLoaded = () => {

  routines.forEach((r) => {
    r.sub_routines.forEach((sr) => {
      sr.summary_open = (sr.sets > 1) ? "open" : "";
    });
  });
  
  displayRoutineList();
}
document.addEventListener("DOMContentLoaded", onLoaded);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("service-worker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
