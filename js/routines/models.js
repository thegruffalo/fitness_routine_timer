class Interval{
    name;
    _type;
    constructor(type, name, duration){
        this._type = type;
        this.name = name;
        this.duration = duration;
    }
}

class Rest extends Interval{

    constructor(duration){
        super("Rest", "Rest", duration);
    }
}

class Exercise extends Interval{

    constructor(name, duration){
        super("Exercise", name, duration);
    }
}

class Routine{
    name;
    sub_routines;
    _type = "Routine";
    constructor(name, sub_routines = []){
        this.name = name;
        this.sub_routines = sub_routines || [];
    }
}

class SubRoutine{
    name;
    intervals;
    sets;
    duration_between_sets;
    start_delay;
    end_delay;
    _type = "SubRoutine";
    constructor(name, intervals = [], sets = 1, duration_between_sets = 0, start_delay = 5, end_delay = 0){
        this.name = name;
        this.intervals = intervals;
        this.sets = sets;
        this.duration_between_sets = duration_between_sets;
        this.start_delay = start_delay;
        this.end_delay = end_delay;
    }
}

class CountdownTimerVM{
    group_name = "Workout";
    name = "push ups";
    duration = 20;
    time_left = 20;
    alert_with_time_to_go = 1;
    set_detail = "1/2";
    constructor(group_name, name, duration, alert_with_time_to_go, set_detail){
        this.group_name = group_name;
        this.name = name;
        this.duration = duration;
        this.alert_with_time_to_go = alert_with_time_to_go;
        this.set_detail = set_detail;
        this.time_left = duration;
    }
}
class RoutineTimerVM{
    name ="Workout1";
    countdown_timers = [];
    total_duration = 0;
    time_elapsed = 0;
    current = null;
    next = null;
    constructor(name, countdown_timers){
        this.name = name;
        this.countdown_timers = countdown_timers || [];
        this.total_duration = countdown_timers.reduce( (p,c) => {return p+c;}, 0);
    }
}