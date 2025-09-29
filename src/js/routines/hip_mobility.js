import rest from "./rest";
const rest_short = rest(5);
const rest_long = rest(15);
export default {
    "name": "Hip Mobility",
    "sub_routines": [
        {
            "name": "Warm Up",
            "intervals": [
                {
                    "name": "March in Place",
                    "duration": 30,
                    "benefits": "Increases blood flow and warms up hip flexors",
                    "execution_notes": "Lift knees high, maintain good posture, and swing arms naturally. Focus on controlled movements."
                },
                {
                    "name": "Hip Circles - Forward",
                    "duration": 30,
                    "benefits": "Improves hip joint mobility and reduces stiffness",
                    "execution_notes": "Stand on one leg, rotate other hip in forward circles. Keep circles smooth and controlled. Switch legs halfway.",
                    "split": 2
                },
                {
                    "name": "Hip Circles - Backward",
                    "duration": 30,
                    "benefits": "Complements forward circles, works different muscle fibers",
                    "execution_notes": "Same position as forward circles, reverse direction. Focus on full range of motion. Switch legs halfway.",
                    "split": 2
                },
            ],
            "sets": 1,
            "start_delay": 5,
            "end_delay": 0
        },
        {
            "name": "Dynamic Stretches",
            "intervals": [
                {
                    "name": "Standing Leg Swings - Left",
                    "duration": 30,
                    "benefits": "Dynamic stretch for hamstrings and hip flexors",
                    "execution_notes": "Hold wall/chair for balance, swing leg forward and back. Keep leg straight but not locked. Maintain upright posture."
                },
                {
                    "name": "Standing Leg Swings - Right",
                    "duration": 30,
                    "benefits": "Balances flexibility on both sides",
                    "execution_notes": "Same as left side. Keep standing leg slightly bent for stability."
                },
                {
                    "name": "Cross-body Leg Swings - Left",
                    "duration": 30,
                    "benefits": "Works hip adductors and abductors, improves lateral mobility",
                    "execution_notes": "Swing leg across body and out to side. Keep hips facing forward. Control the movement."
                },
                {
                    "name": "Cross-body Leg Swings - Right",
                    "duration": 30,
                    "benefits": "Completes balanced hip mobility work",
                    "execution_notes": "Mirror left side exactly. Maintain core engagement throughout."
                }
            ],
            "sets": 2,
            "start_delay": 5,
            "duration_between_sets": 15,
            "end_delay": 0
        },
        {
            "name": "Floor Work",
            "intervals": [
                {
                    "name": "90/90 Hip Stretch - Left",
                    "duration": 45,
                    "benefits": "Deep stretch for hip rotators and glutes",
                    "execution_notes": "Both legs bent 90°, one forward, one to side. Keep back straight. Lean forward slightly to intensify."
                },
                rest_short,
                {
                    "name": "90/90 Hip Stretch - Right",
                    "duration": 45,
                    "benefits": "Balances hip mobility work",
                    "execution_notes": "Mirror left side position. Keep both hips grounded throughout the stretch."
                },
                rest_short,
                {
                    "name": "Butterfly Stretch",
                    "duration": 45,
                    "benefits": "Opens hips, stretches adductors and groin",
                    "execution_notes": "Sit with feet together, knees out. Hold feet, lean forward slightly. Keep back straight."
                },
                rest_long,
                {
                    "name": "Pigeon Pose - Left",
                    "duration": 45,
                    "benefits": "Deep hip opener, stretches piriformis and glutes",
                    "execution_notes": "Front leg bent, back leg straight. Keep hips level. Lean forward as comfortable."
                },
                rest_short,
                {
                    "name": "Pigeon Pose - Right",
                    "duration": 45,
                    "benefits": "Completes deep hip opening work",
                    "execution_notes": "Mirror left side exactly. Use props under hips if needed for alignment."
                },
                rest_short,
                {
                    "name": "Happy Baby Pose",
                    "duration": 45,
                    "benefits": "Gentle hip opener, lower back release",
                    "execution_notes": "Lie on back, hold feet/ankles, knees toward armpits. Rock gently side to side if comfortable."
                }
            ],
            "sets": 1,
            "start_delay": 5,
            "end_delay": 0
        }
    ]
};
