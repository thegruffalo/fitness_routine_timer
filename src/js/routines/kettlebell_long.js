import rest from "./rest";

const my_rest = rest(20);
export default
    {
        "name": "Kettlebell Long",
        "sub_routines": [
            {
                "name": "Main",
                "intervals": [
                    {
                        "name": "Halo Left",
                        "duration": 40,
                    },
                    my_rest,
                    {
                        "name": "Halo Right",
                        "duration": 40,
                    },
                    my_rest,
                    {
                        "name": "Goblet squats",
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
                        "name": "Kettlebell swings",
                        "duration": 40,
                    },
                    my_rest,
                    {
                        "name": "Bent over row Left",
                        "duration": 40,
                    },
                    my_rest,
                    {
                        "name": "Bent over row Right",
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
                ],
                "sets": 3,
                "duration_between_sets": 20,
                "start_delay": 5,
                "end_delay": 5
            },
        ]
    };