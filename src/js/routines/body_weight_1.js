import cooldown from "./cooldown";
import warmup from "./warmup";
import rest from "./rest";

const my_rest = rest(10);
export default
{
    "name": "Body Weight 1",
    "sub_routines": [
        warmup,
        {
            "name": "Workout",
            "intervals": [
                {
                    "name": "Jumping Jacks",
                    "duration": 40
                },
                my_rest,
                {
                    "name": "Burpees",
                    "duration": 40
                },
                my_rest,
                {
                    "name": "Wall sit",
                    "duration": 40
                },
                my_rest,
                {
                    "name": "Walkouts",
                    "duration": 40
                },
                my_rest,
                {
                    "name": "Crunches",
                    "duration": 40
                },
                my_rest,
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
            "duration_between_sets": 30,
            "start_delay": 5,
            "end_delay": 0
        },
        cooldown
    ]
};