import warmup from "./warmup";
import cooldown from "./cooldown";
import rest from "./rest";

const my_rest = rest(10);
export default
{
    "name": "Week 1 Session 1",
    "sub_routines": [
        warmup,
        {
            "name": "Workout",
            "intervals": [
                {
                    "name": "Push up w Rotation",
                    "duration": 40
                },
                my_rest,
                {
                    "name": "Crunches",
                    "duration": 40
                },
                my_rest,
                {
                    "name": "Bicep Curl",
                    "duration": 40
                },
                my_rest,
                {
                    "name": "Shoulder shrugs",
                    "duration": 40
                },
                my_rest,
                {
                    "name": "Front/Lateral raises",
                    "duration": 40
                },
                my_rest,
                {
                    "name": "Shoulder Press",
                    "duration": 40
                },
                my_rest,
                {
                    "name": "Walk out w push up",
                    "duration": 40
                },
                my_rest,
                {
                    "name": "Back extension, or side plank",
                    "duration": 40,
                    "split": 2
                }
            ],
            "sets": 3,
            "duration_between_sets": 30,
            "start_delay": 5,
            "end_delay": 0
        },
        cooldown
    ]
};