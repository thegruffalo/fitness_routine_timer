import warmup from "./warmup";
import cooldown from "./cooldown";

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
                {
                    "name": "Rest",
                    "duration": 20
                },
                {
                    "name": "Squat jumps",
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
                    "name": "Horizontal raises",
                    "duration": 40
                },
                {
                    "name": "Rest",
                    "duration": 20
                },
                {
                    "name": "Mountain climbers",
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
                    "name": "Shoulder shrugs",
                    "duration": 40
                },
                {
                    "name": "Rest",
                    "duration": 20
                },
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