import cooldown from "./cooldown";
import warmup from "./warmup";
import rest from "./rest";

const my_rest = rest(20);

export default
{
    "name": "Week 1 Session 3",
    "sub_routines": [
        warmup,
        {
            "name": "Workout",
            "intervals": [
                {
                    "name": "Front raises",
                    "duration": 40
                },
                my_rest,
                {
                    "name": "Push ups",
                    "duration": 40
                },
                my_rest,
                {
                    "name": "Crunches",
                    "duration": 40
                },
                my_rest,
                {
                    "name": "Shoulder shrugs",
                    "duration": 40
                },
                my_rest,
                {
                    "name": "Bent over row",
                    "duration": 40
                },
                my_rest,
                {
                    "name": "Walk out w push up",
                    "duration": 40
                },
                my_rest,
                {
                    "name": "Shoulder press",
                    "duration": 40
                },
                my_rest,
                {
                    "name": "Hammer curls",
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