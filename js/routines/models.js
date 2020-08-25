export class Interval{
    name;
    _type;
    constructor(type, name, duration){
        this._type = type;
        this.name = name;
        this.duration = duration;
    }
}

export class Rest extends Interval{

    constructor(duration){
        super("Rest", "Rest", duration);
    }
}

export class Exercise extends Interval{

    constructor(name, duration){
        super("Exercise", name, duration);
    }
}

export class Routine{
    name;
    sub_routines;
    _type = "Routine";
    constructor(name, sub_routines = []){
        this.name = name;
        this.sub_routines = sub_routines || [];
    }
}

export class SubRoutine{
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