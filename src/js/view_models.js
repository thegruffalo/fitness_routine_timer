import { beep } from './sound.js';
import { updateRoutineCompletion } from './storage.js';

export class CountdownTimerVM {
    constructor(group_name, name, duration, alert_with_time_to_go, set_detail, split) {
        this.group_name = group_name;
        this.name = name;
        this.duration = duration;
        this.alert_with_time_to_go = alert_with_time_to_go;
        this.set_detail = set_detail;
        this.time_left_ms = duration * 1000;
        this.alerting = false;
        this.split = split;
        this.splits_alerted = 0;
    }
    get time_left() {
        return Math.floor(this.time_left_ms / 1000);
    }
}
export class RoutineTimerVM {
    constructor(name, countdown_timers, update_ui_fn, alert_fn, sessionId = null) {
        this.name = name;
        this.countdown_timers = countdown_timers || [];
        this.total_duration = countdown_timers.reduce((p, c) => { return p + c.duration; }, 0);
        this.current_index = 0;
        this.update_ui_fn = update_ui_fn
        this.alert_fn = alert_fn;
        this.time_elapsed_ms = 0;
        this.last_time = 0;
        this.sessionId = sessionId; // For tracking completion
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
    for( i = this.current_index + 1; i <= Math.min(this.current_index + 4, this.countdown_timers.length -1); i++){
            coming_up.push(this.countdown_timers[i]);
        }
        return coming_up;
    }

    tick(ms) {
        this.time_elapsed_ms += ms;
        this.current.time_left_ms -= ms;
        if (this.current.time_left_ms < 0){
            // Store completion data when an interval ends
            if (this.sessionId) {
                const timeSpentSeconds = Math.floor(this.time_elapsed_ms / 1000);
                updateRoutineCompletion(this.sessionId, timeSpentSeconds, false);
            }
            
            if (this.next) {
                this.next.time_left_ms += this.current.time_left_ms;
            }
            this.current.time_left_ms = 0;
            this.current_index++;
        } 
        this.update_ui_fn();

        // Handle regular end-of-interval alert
        if (this.current && !this.current.alerting && this.current.time_left_ms < (this.current.alert_with_time_to_go * 1000)) {
            this.current.alerting = true;
            this.alert_fn(this.current);
        }

        // Handle split alert
        if (this.current && this.current.split && this.current.splits_alerted < this.current.split - 1) {
            const splitDuration = Math.floor(this.current.duration * 1000 / this.current.split);
            const nextSplitTime = splitDuration * (this.current.split - this.current.splits_alerted - 1);
            
            if (this.current.time_left_ms <= nextSplitTime + 250 && this.current.time_left_ms > nextSplitTime - 250) {
                this.current.splits_alerted++;
                beep();
            }
        }
    }
}