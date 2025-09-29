import rest from "./rest";

const my_rest = rest(10);
export default
    {
        "name": "Knee Strength and Stability",
        "sub_routines": [
            {
                "name": "Dynamic Exercises (Tempo-Controlled)",
                "intervals": [
                    {
                        "name": "Forward Step Down - Left Leg",
                        "duration": 50,
                        "benefits": "Builds quad strength and knee stability through controlled eccentric movement",
                        "execution_notes": "Tempo 4:0:2 - Lower for 4 seconds, no pause, lift for 2 seconds. Aim for 7-8 reps in 50 seconds"
                    },
                    my_rest,
                    {
                        "name": "Forward Step Down - Right Leg",
                        "duration": 50,
                        "benefits": "Builds quad strength and knee stability through controlled eccentric movement",
                        "execution_notes": "Tempo 4:0:2 - Lower for 4 seconds, no pause, lift for 2 seconds. Aim for 7-8 reps in 50 seconds"
                    },
                    my_rest,
                    {
                        "name": "Lateral Step Down - Left Leg",
                        "duration": 50,
                        "benefits": "Strengthens lateral quad and hip stabilizers, improves frontal plane control",
                        "execution_notes": "Tempo 4:0:2 - Step sideways, lower for 4 seconds, lift for 2 seconds. Keep knee aligned over toe",
                    },
                    my_rest,
                    {
                        "name": "Lateral Step Down - Right Leg",
                        "duration": 50,
                        "benefits": "Strengthens lateral quad and hip stabilizers, improves frontal plane control",
                        "execution_notes": "Tempo 4:0:2 - Step sideways, lower for 4 seconds, lift for 2 seconds. Keep knee aligned over toe",
                    },
                    my_rest,
                    {
                        "name": "Reverse Step Down - Left Leg",
                        "duration": 50,
                        "benefits": "Challenges posterior chain and knee stability in reverse motion",
                        "execution_notes": "Tempo 4:0:2 - Step backward, lower for 4 seconds, lift for 2 seconds. Control descent",
                    },
                    my_rest,
                    {
                        "name": "Reverse Step Down - Right Leg",
                        "duration": 50,
                        "benefits": "Challenges posterior chain and knee stability in reverse motion",
                        "execution_notes": "Tempo 4:0:2 - Step backward, lower for 4 seconds, lift for 2 seconds. Control descent",
                    },
                    my_rest,
                    {
                        "name": "Captain Morgan Squat - Left Leg",
                        "duration": 50,
                        "benefits": "Single-leg squat variation that builds unilateral leg strength and balance",
                        "execution_notes": "Tempo 4:0:2 - Lower into squat for 4 seconds, lift for 2 seconds. Keep chest up and knee tracking over toe",
                    },
                    my_rest,
                    {
                        "name": "Captain Morgan Squat - Right Leg",
                        "duration": 50,
                        "benefits": "Single-leg squat variation that builds unilateral leg strength and balance",
                        "execution_notes": "Tempo 4:0:2 - Lower into squat for 4 seconds, lift for 2 seconds. Keep chest up and knee tracking over toe",
                    },
                    my_rest,
                    {
                        "name": "Single Leg Hamstring Curl - Left Leg",
                        "duration": 50,
                        "benefits": "Isolates hamstring strength and improves knee flexion control",
                        "execution_notes": "Tempo 3:1:2 - Lower for 3 seconds, pause 1 second, lift for 2 seconds. Use slider or towel",

                    },
                    my_rest,
                    {
                        "name": "Single Leg Hamstring Curl - Right Leg",
                        "duration": 50,
                        "benefits": "Isolates hamstring strength and improves knee flexion control",
                        "execution_notes": "Tempo 3:1:2 - Lower for 3 seconds, pause 1 second, lift for 2 seconds. Use slider or towel",

                    },
                ],
                "sets": 1,
                "duration_between_sets": 10,
                "start_delay": 5,
                "end_delay": 5
            },
            {
                "name": "Isometric Exercises (Holds)",
                "intervals": [
                    {
                        "name": "Single Leg Wall Sit - Left Leg",
                        "duration": 37,
                        "benefits": "Builds isometric quad strength and endurance, improves knee stability",
                        "execution_notes": "Maintain 90° knee bend, keep hips level. Focus on engaging quad of standing leg",

                    },
                    my_rest,
                    {
                        "name": "Single Leg Wall Sit - Right Leg",
                        "duration": 37,
                        "benefits": "Builds isometric quad strength and endurance, improves knee stability",
                        "execution_notes": "Maintain 90° knee bend, keep hips level. Focus on engaging quad of standing leg",

                    },
                    my_rest,
                    {
                        "name": "Copenhagen Plank - Left Side",
                        "duration": 22,
                        "benefits": "Strengthens adductors and core, improves hip stability for knee protection",
                        "execution_notes": "Keep body in straight line, no sagging hips. Start with knee supported if needed",

                    },
                    my_rest,
                    {
                        "name": "Copenhagen Plank - Right Side",
                        "duration": 22,
                        "benefits": "Strengthens adductors and core, improves hip stability for knee protection",
                        "execution_notes": "Keep body in straight line, no sagging hips. Start with knee supported if needed",

                    },
                ],
                "sets": 1,
                "duration_between_sets": 10,
                "start_delay": 5,
                "end_delay": 5
            },
            {
                "name": "Dynamic Exercises with ball (Tempo-Controlled)",
                "intervals": [
                    {
                        "name": "Captain Morgan Squat - Left Leg",
                        "duration": 50,
                        "benefits": "Single-leg squat variation that builds unilateral leg strength and balance",
                        "execution_notes": "Tempo 4:0:2 - Lower into squat for 4 seconds, lift for 2 seconds. Keep chest up and knee tracking over toe",
                    },
                    my_rest,
                    {
                        "name": "Captain Morgan Squat - Right Leg",
                        "duration": 50,
                        "benefits": "Single-leg squat variation that builds unilateral leg strength and balance",
                        "execution_notes": "Tempo 4:0:2 - Lower into squat for 4 seconds, lift for 2 seconds. Keep chest up and knee tracking over toe",
                    },
                    my_rest,
                    {
                        "name": "Single Leg Hamstring Curl - Left Leg",
                        "duration": 50,
                        "benefits": "Isolates hamstring strength and improves knee flexion control",
                        "execution_notes": "Tempo 3:1:2 - Lower for 3 seconds, pause 1 second, lift for 2 seconds. Use slider or towel",

                    },
                    my_rest,
                    {
                        "name": "Single Leg Hamstring Curl - Right Leg",
                        "duration": 50,
                        "benefits": "Isolates hamstring strength and improves knee flexion control",
                        "execution_notes": "Tempo 3:1:2 - Lower for 3 seconds, pause 1 second, lift for 2 seconds. Use slider or towel",

                    },
                ],
                "sets": 1,
                "duration_between_sets": 10,
                "start_delay": 5,
                "end_delay": 5
            },
        ]
    };