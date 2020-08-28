export default
{
    "name": "Test",
    "sub_routines": [
        {
            "name": "Warmup",
            "intervals": [
                {
                    "name": "Jog",
                    "duration": 10
                }
            ],
            "sets": 1,
            "duration_between_sets": 0,
            "start_delay": 5,
            "end_delay": 0
        },
        {
            "name": "Workout",
            "intervals": [
                {
                    "name": "Jumping Jacks",
                    "duration": 7
                },
                {
                    "name": "Rest",
                    "duration": 5
                },
                {
                    "name": "Press ups",
                    "duration": 7
                },
            ],
            "sets": 2,
            "duration_between_sets": 8,
            "start_delay": 5,
            "end_delay": 0
        },
        {
            "name": "Cooldown",
            "intervals": [
                {
                    "name": "Quad R",
                    "duration": 10
                },
                {
                    "name": "Quad L",
                    "duration": 10
                }          ],
            "sets": 1,
            "duration_between_sets": 0,
            "start_delay": 5,
            "end_delay": 0
        }
    ]
};