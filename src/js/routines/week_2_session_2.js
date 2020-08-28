import cooldown from "./cooldown";
import warmup from "./warmup";

export default
{
    "name": "Week 2 Session 2",
    "sub_routines": [
        warmup,
        {
            "name": "Workout",
            "intervals": [
                {
                    "name": "Jumping Jacks",
                    "duration": 40
                },
                {
                    "name": "Rest",
                    "duration": 20
                },
                {
                    "name": "Burpees",
                    "duration": 40
                },
                {
                    "name": "Rest",
                    "duration": 20
                },
                {
                    "name": "Wall sit",
                    "duration": 40
                },
                {
                    "name": "Rest",
                    "duration": 20
                },
                {
                    "name": "Walkouts",
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
                    "name": "Hip abductors R",
                    "duration": 40
                },
                {
                    "name": "Hip abductors L",
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