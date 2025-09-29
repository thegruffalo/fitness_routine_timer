import cooldown from "./cooldown";
import warmup from "./warmup";
import rest from "./rest";

const my_rest = rest(20);

export default
{
    "name": "Week 3 Session 1",
    "sub_routines": [
        warmup,
        {
            "name": "Workout",
            "intervals": [
                {
                    "name": "Push up w rotation",
                    "duration": 40
                },
                my_rest,
                {
                    "name": "Bicep curl",
                    "duration": 40
                },
                my_rest,
                {
                    "name": "Shoulder shrugs",
                    "duration": 40
                },
                my_rest,
                {
                    "name": "Mountain climbers",
                    "duration": 40
                },
                my_rest,
                {
                    "name": "Walkout w push up",
                    "duration": 40
                },
                my_rest,
                {
                    "name": "Back extension",
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