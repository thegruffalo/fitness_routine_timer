import rest from "./rest";

const my_rest = rest(30);
export default
    {
        "name": "Julia 1",
        "sub_routines": [
            {
                "name": "Main",
                "intervals": [
                    {
                        "name": "High knees",
                        "duration": 30,
                    },
                    my_rest,
                    {
                        "name": "Jumping Jacks",
                        "duration": 30,
                    },
                    my_rest,
                    {
                        "name": "Pulsing Squats",
                        "duration": 30,
                    },
                    my_rest,
                    {
                        "name": "Side leg raises",
                        "execution_notes": "Standing, left to side hip high",
                        "split": 2,
                        "duration": 60,
                    },
                    my_rest,
                    {
                        "name": "Lunges",
                        "split": 2,
                        "duration": 60,
                    },
                    my_rest,
                    {
                        "name": "Plank with arm raise",
                        "duration": 30,
                    },
                    my_rest,
                    {
                        "name": "Plank with leg raise",
                        "duration": 30,
                    },
                    my_rest,
                    {
                        "name": "Plank with rotation",
                        "duration": 30,
                    },
                    my_rest,
                    {
                        "name": "Mountain Climbers",
                        "duration": 30,
                    },
                    my_rest,
                    {
                        "name": "Knee pushups",
                        "duration": 30,
                    },
                ],
                "sets": 3,
                "duration_between_sets": 30,
                "start_delay": 5,
                "end_delay": 5
            },
        ]
    };