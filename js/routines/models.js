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
    subRoutines;
    _type = "Routine";
    constructor(name, subRoutines = []){
        this.name = name;
        this.subRoutines = subRoutines;
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
