const app_container = document.getElementById("app");
const myNS = { "routines": [] };

const routines = myNS.routines;

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
  elapsed = 0;
  paused = false;
  seconds = 0;
  vm = null;
  constructor(routine, updateUI) {
    this.routine = routine;
    this.updateUI = () =>updateUI(this);
    let countdownTimerVMs = [];
    routine.sub_routines.forEach((sr) => {
      for( var i = 1; i <= sr.sets; i++){
        let set_info = "";
        if( sr.sets > 1){
          set_info = `{{i}}/{{sets}}`;
        }
        if( i == 1 && sr.start_delay > 0){
          let timerVM = new CountdownTimerVM(sr.name, "Get ready!", sr.start_delay, 3, set_info);
          countdownTimerVMs.push(timerVM);
        }
        sr.intervals.forEach((i)=>{
          let timerVM = new CountdownTimerVM(sr.name, i.name, i.duration, 3, set_info);
          countdownTimerVMs.push(timerVM);
        });
        if( sr.duration_between_sets > 0 && i < sr.sets){
          let timerVM = new CountdownTimerVM(sr.name, "Set complete!", sr.duration_between_sets, 3, set_info);
          countdownTimerVMs.push(timerVM);
        }
      }
      if( i == sr.sets && sr.end_delay > 0){
        let timerVM = new CountdownTimerVM(sr.name, "Well done!", sr.end_delay, 3, set_info);
        countdownTimerVMs.push(timerVM);
      }
    });
    this.vm = new RoutineTimerVM(routine.name, countdownTimerVMs);
  }

  onTick = () => {
    var now = new Date().getTime();
    var diff = now - this.last_time;
    this.elapsed += diff;
    this.seconds = Math.floor(this.elapsed / 1000);
    this.last_time = now;
    this.updateUI();
    if( this.seconds > 5){
      beep();
    }
  };

  start = async () => {
    this.interval_timer = window.setInterval(this.onTick, 1000);
    this.last_time = new Date().getTime();
    // Request a screen wake lock…
    await requestWakeLock();
  }

  pause = () => {
    window.clearInterval(this.interval_timer);
    this.interval_timer = undefined;
    this.paused = true;
    this.updateUI();
  };

  unpause = () => {
    this.interval_timer = window.setInterval(this.onTick, 250);
    this.last_time = new Date().getTime();
    this.paused = false;
    this.updateUI();
  };

}

const startRoutine = (routine) => {
  u("#routine_detail .container").remove();

  myNS.routine_timer = new RoutineTimer(routine, (rt) =>{
    document.getElementById("routine_timer_display").innerHTML = myNS.handlebar_functions.showRoutineTimerDisplay(rt);
  } );
  myNS.routine_timer.start();

  document.getElementById("routine_timer").innerHTML = myNS.handlebar_functions.showRoutineTimer(routine);
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
    if( myNS.routine_timer.paused){
      myNS.routine_timer.unpause();
    }else{
      myNS.routine_timer.pause();
    }
  });

}

const displayRoutine = (routine) => {
  u("#routine_list .container").remove();
  document.getElementById("routine_detail").innerHTML = myNS.handlebar_functions.showRoutineDetail(routine);
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
  document.getElementById("routine_list").innerHTML = myNS.handlebar_functions.showListOfRoutines(routines);
  u("#routine_list .card").on("click", (ev) => {
    var itemIndex = u(ev.currentTarget).data("item");
    displayRoutine(routines[itemIndex]);
  });
};

const onLoaded = () => {
  extend(myNS, {
    "handlebar_functions": {
      "showListOfRoutines": Handlebars.compile(document.getElementById("template_routine_list").innerHTML),
      "showRoutineDetail": Handlebars.compile(document.getElementById("template_routine_detail").innerHTML),
      "showRoutineTimer": Handlebars.compile(document.getElementById("template_routine_timer").innerHTML),
      "showRoutineTimerDisplay": Handlebars.compile(document.getElementById("template_routine_timer_display").innerHTML),
    }
  });

  Handlebars.registerHelper('if_gt', function (a, b, opts) {
    if (a > b) {
      return opts.fn(this);
    } else {
      return opts.inverse(this);
    }
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

//if you have another AudioContext class use that one, as some browsers have a limit
var audioCtx = new (window.AudioContext || window.webkitAudioContext || window.audioContext);

//All arguments are optional:

//duration of the tone in milliseconds. Default is 500
//frequency of the tone in hertz. default is 440
//volume of the tone. Default is 1, off is 0.
//type of tone. Possible values are sine, square, sawtooth, triangle, and custom. Default is sine.
//callback to use on end of tone
function beep(duration, frequency, volume, type, callback) {
    var oscillator = audioCtx.createOscillator();
    var gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    if (volume){gainNode.gain.value = volume;}
    if (frequency){oscillator.frequency.value = frequency;}
    if (type){oscillator.type = type;}
    if (callback){oscillator.onended = callback;}

    oscillator.start(audioCtx.currentTime);
    oscillator.stop(audioCtx.currentTime + ((duration || 500) / 1000));
};