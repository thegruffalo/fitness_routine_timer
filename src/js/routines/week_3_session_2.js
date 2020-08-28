import cooldown from "./cooldown";
import warmup from "./warmup";

export default
{
    "name": "Week 3 Session 2",
    "sub_routines": [
        warmup,
        {
            "name": "Workout",
            "intervals": [
                {
                    "name": "Jumping jacks",
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
                    "name": "Walk out w push up",
                    "duration": 40
                },
                {
                    "name": "Rest",
                    "duration": 20
                },
                {
                    "name": "Horitonal raise",
                    "duration": 40
                },
                {
                    "name": "Rest",
                    "duration": 20
                },
                {
                    "name": "Front raise",
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