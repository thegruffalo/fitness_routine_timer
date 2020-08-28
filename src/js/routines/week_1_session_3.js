import cooldown from "./cooldown";
import warmup from "./warmup";

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
                {
                    "name": "Rest",
                    "duration": 20
                },
                {
                    "name": "Push ups",
                    "duration": 40
                },
                {
                    "name": "Rest",
                    "duration": 20
                },
                {
                    "name": "Crunches",
                    "duration": 40
                },
                {
                    "name": "Rest",
                    "duration": 20
                },
                {
                    "name": "Shoulder shrugs",
                    "duration": 40
                },
                {
                    "name": "Rest",
                    "duration": 20
                },
                {
                    "name": "Bent over row",
                    "duration": 40
                },
                {
                    "name": "Rest",
                    "duration": 20
                },
                {
                    "name": "Walk out w push up",
                    "duration": 40
                },
                {
                    "name": "Rest",
                    "duration": 20
                },
                {
                    "name": "Shoulder press",
                    "duration": 40
                },
                {
                    "name": "Rest",
                    "duration": 20
                },
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