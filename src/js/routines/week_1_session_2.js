import warmup from "./warmup";
import cooldown from "./cooldown";
import rest from "./rest";

const my_rest = rest(20);

export default
{
    "name": "Week 1 Session 2",
    "sub_routines": [
        warmup,
        {
            "name": "Workout",
            "intervals": [
                {
                    "name": "Step ups",
                    "duration": 40
                },
                my_rest,
                {
                    "name": "Squat jumps",
                    "duration": 40
                },
                my_rest,
                {
                    "name": "Crunches",
                    "duration": 40
                },
                my_rest,
                {
                    "name": "Horizontal raises",
                    "duration": 40
                },
                my_rest,
                {
                    "name": "Mountain climbers",
                    "duration": 40
                },
                my_rest,
                {
                    "name": "Walk out w push up",
                    "duration": 40
                },
                my_rest,
                {
                    "name": "Shoulder shrugs",
                    "duration": 40
                },
                my_rest,
                {
                    "name": "Lunges",
                    "duration": 40
                }
            ],
            "sets": 3,
            "duration_between_sets": 60,
            "start_delay": 5,
            "end_delay": 0
        },
        cooldown
    ]
};