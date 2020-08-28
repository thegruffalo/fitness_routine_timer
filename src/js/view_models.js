
export class CountdownTimerVM {
    constructor(group_name, name, duration, alert_with_time_to_go, set_detail) {
        this.group_name = group_name;
        this.name = name;
        this.duration = duration;
        this.alert_with_time_to_go = alert_with_time_to_go;
        this.set_detail = set_detail;
        this.time_left_ms = duration * 1000;
        this.alerting = false;
    }
    get time_left() {
        return Math.floor(this.time_left_ms / 1000);
    }
}
export class RoutineTimerVM {
    constructor(name, countdown_timers, update_ui_fn, alert_fn) {
        this.name = name;
        this.countdown_timers = countdown_timers || [];
        this.total_duration = countdown_timers.reduce((p, c) => { return p + c.duration; }, 0);
        this.current_index = 0;
        this.update_ui_fn = update_ui_fn
        this.alert_fn = alert_fn;
        this.time_elapsed_ms = 0;
        this.last_time = 0;
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
    get coming_up() {
        var i;
        var coming_up = [];
        for( i = this.current_index + 1; i <= Math.min(this.current_index + 3, this.countdown_timers.length -1); i++){
            coming_up.push(this.countdown_timers[i]);
        }
        return coming_up;
    }

    tick(ms) {
        this.time_elapsed_ms += ms;
        this.current.time_left_ms -= ms;
        if (this.current.time_left_ms < 0){
            if (this.next) {
                this.next.time_left_ms += this.current.time_left_ms;
            }
            this.current.time_left_ms = 0;
            this.current_index++;
        } 
        this.update_ui_fn();

        if (this.current && !this.current.alerting && this.current.time_left_ms < (this.current.alert_with_time_to_go * 1000)) {
            this.current.alerting = true;
            this.alert_fn(this.current);
        }
    }
}