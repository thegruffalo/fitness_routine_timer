import rest from "./rest";

const my_rest = rest(20);
export default
    {
        "name": "Kettlebell Short",
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
                        "name": "Overhead press both arms",
                        "split": 2,
                        "duration": 40,
                    },
                    my_rest,
                    {
                        "name": "Kettle bell swings",
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