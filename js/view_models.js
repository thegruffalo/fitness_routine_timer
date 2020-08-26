
export class CountdownTimerVM {
    group_name = "Workout";
    name = "push ups";
    duration = 20;
    time_left_ms = 20000;
    alert_with_time_to_go = 1;
    set_detail = "1/2";
    constructor(group_name, name, duration, alert_with_time_to_go, set_detail) {
        this.group_name = group_name;
        this.name = name;
        this.duration = duration;
        this.alert_with_time_to_go = alert_with_time_to_go;
        this.set_detail = set_detail;
        this.time_left_ms = duration * 1000;
    }
    get time_left() {
        return Math.floor(this.time_left_ms / 1000);
    }
}
export class RoutineTimerVM {
    name = "Workout1";
    countdown_timers = [];
    total_duration = 0;
    time_elapsed_ms = 0;
    current_index = 0;
    last_time = 0;
    constructor(name, countdown_timers, update_ui_fn, beep_fn) {
        this.name = name;
        this.countdown_timers = countdown_timers || [];
        this.total_duration = countdown_timers.reduce((p, c) => { return p + c.duration; }, 0);
        this.current_index = 0;
        this.update_ui_fn = update_ui_fn
        this.beep_fn = beep_fn;
    }
    get time_left() {
        return this.total_duration - Math.floor(this.time_elapsed_ms / 1000);
    }
    get current() {
        return this.current_index >= this.countdown_timers.length ? null : this.countdown_timers[this.current_index];
    }
    get next() {
        return this.current_index + 1 >= this.countdown_timers.length ? null : this.countdown_timers[this.current_index + 1];
    }

    tick(ms) {
        this.time_elapsed_ms += ms;
        this.current.time_left_ms -= ms;
        if (this.current.time_left_ms < 0 && this.next) {
            this.next.time_left_ms += this.current.time_left_ms;
            this.current.time_left_ms = 0;
            this.current_index++;
        }
        this.update_ui_fn();

        if (this.current && this.current.time_left_ms < (this.current.alert_with_time_to_go * 1000)) {
            console.log("Beep");
            this.beep_fn();
        }
    }
}