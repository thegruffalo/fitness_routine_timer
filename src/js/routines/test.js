export default
{
    "name": "Test",
    "sub_routines": [
        {
            "name": "Warmup",
            "intervals": [
                {
                    "name": "Jog",
                    "duration": 10,
                    "benefits": "Warms up muscles and increases heart rate gradually",
                    "execution_notes": "Light pace, focus on controlled breathing and relaxed form"
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
                    "duration": 7,
                    "benefits": "Full body warm-up, improves coordination",
                },
                {
                    "name": "Rest",
                    "duration": 5
                },
                {
                    "name": "Press ups",
                    "duration": 7,
                    "execution_notes": "Keep body straight, elbows at 45 degrees. Lower chest to ground"
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
                    "duration": 10,
                    "benefits": "Stretches right quadriceps, improves leg flexibility",
                    "execution_notes": "Stand on left leg, hold right foot behind. Keep torso upright"
                },
                {
                    "name": "Quad L",
                    "duration": 10,
                    "benefits": "Stretches left quadriceps, improves leg flexibility",
                    "execution_notes": "Stand on right leg, hold left foot behind. Keep torso upright"
                }          ],
            "sets": 1,
            "duration_between_sets": 0,
            "start_delay": 5,
            "end_delay": 0
        }
    ]
};