import cooldown from "./cooldown";
import warmup from "./warmup";

export default
{
    "name": "Week 3 Session 3",
    "sub_routines": [
        warmup,
        {
            "name": "Workout",
            "intervals": [
                {
                    "name": "Bicep curl w rotation",
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
                    "name": "Hammer curl",
                    "duration": 40
                }
            ],
            "sets": 4,
            "duration_between_sets": 60,
            "start_delay": 5,
            "end_delay": 0
        },
        cooldown
    ]
};