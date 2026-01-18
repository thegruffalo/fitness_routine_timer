import rest from "./rest";

const my_rest = rest(30);

export default
    {
        "name": "Beginner Abs",
        "sub_routines": [
            {
                "name": "Main",
                "intervals":
                    [
                        {
                            "name": "Dead Bug",
                            "execution_notes": "Lie on your back, arms up, knees bent. Extend opposite arm + leg while keeping lower back pressed to the floor. Move slowly.",
                            "benefits": "Teaches core control and protects the lower back",
                            "duration": 60
                        },
                        my_rest,
                        {
                            "name": "Glute Bridge",
                            "execution_notes": "Feet flat, squeeze glutes, lift hips. Avoid arching your lower back.",
                            "benefits": "Strengthens core + glutes (important for pelvic and lower-back support)",
                            "duration": 45
                        },
                        my_rest,
                        {
                            "name": "Standing Knee Raises",
                            "execution_notes": "Lift knee toward chest while bracing your core. Stand tall, don’t lean back.",
                            "benefits": "Gentle ab engagement without floor strain",
                            "split": 2,
                            "duration": 60
                        },
                        my_rest,
                        {
                            "name": "Modified Plank (Knees Down)",
                            "execution_notes": "Knees on floor, elbows under shoulders. Tighten abs as if bracing for a cough.",
                            "benefits": "Builds full core strength",
                            "duration": 30
                        },
                        my_rest,
                        {
                            "name": "Heel Slides",
                            "execution_notes": "Lie on back, knees bent. Slowly slide one heel out while keeping core tight.",
                            "benefits": "Great for beginners and lower-ab activation",
                            "duration": 45
                        },
                        my_rest,
                        {
                            "name": "Child’s Pose",
                            "execution_notes": "Rest on shins, reach arms forward, and lower chest toward the floor.",
                            "benefits": "Cool-down and lower back release",
                            "duration": 60
                        },
                        my_rest,
                        {
                            "name": "Lying Spinal Twist",
                            "execution_notes": "Lie on back, drop knees to one side while keeping shoulders flat.",
                            "benefits": "Spinal mobility and cool-down",
                            "duration": 60
                        },
                        my_rest,
                        {
                            "name": "Deep Belly Breathing",
                            "execution_notes": "Inhale through nose, exhale slowly. Focus on expanding the diaphragm.",
                            "benefits": "Promotes recovery and nervous system relaxation",
                            "duration": 60
                        }
                    ],
                "sets": 1,
                "duration_between_sets": 30,
                "start_delay": 5,
                "end_delay": 5
            },
        ]
    };