import rest from "./rest";

const my_rest = rest(20);
export default
    {
        "name": "Kettlebell 1",
        "sub_routines": [
            {
                "name": "Main",
                "intervals": [
                    {
                        "name": "Deadlifts",
                        "duration": 40,
                    },
                    my_rest,
                    {
                        "name": "Overhead press Left arm",
                        "duration": 40,
                    },
                    my_rest,
                    {
                        "name": "Overhead press Right arm",
                        "duration": 40,
                    },
                    my_rest,
                    {
                        "name": "Reverse lunge Left",
                        "duration": 40,
                    },
                    my_rest,
                    {
                        "name": "Reverse lunge Right",
                        "duration": 40,
                    },
                    my_rest,
                    {
                        "name": "Arm Curls",
                        "duration": 40,
                    },
                ],
                "sets": 3,
                "duration_between_sets": 20,
                "start_delay": 5,
                "end_delay": 5
            },
        ]
    };