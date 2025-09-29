import rest from "./rest";

const rest5s = rest(5);
const rest15s = rest(15);

export default
{
    "name": "Advanced Leg Strength",
    "sub_routines": [
        {
            "name": "Main Workout",
            "intervals": [
                {
                    "name": "Right Leg Glute Bridge",
                    "duration": 45,
                    "benefits": "Strengthens glutes and hamstrings unilaterally, improves hip stability and core strength",
                    "execution_notes": "Lie on back, right foot planted, left leg extended. Squeeze glutes to lift hips up, hold at top briefly. Keep core engaged throughout"
                },
                rest5s,
                {
                    "name": "Left Leg Glute Bridge",
                    "duration": 45,
                    "benefits": "Strengthens glutes and hamstrings unilaterally, improves hip stability and core strength",
                    "execution_notes": "Lie on back, left foot planted, right leg extended. Squeeze glutes to lift hips up, hold at top briefly. Keep core engaged throughout"
                },
                rest15s,
                {
                    "name": "Right Leg RDL",
                    "duration": 50,
                    "benefits": "Develops single-leg balance, strengthens hamstrings and glutes, improves hip hinge pattern",
                    "execution_notes": "Stand on right leg, left leg extended behind. Hinge at hips, reach toward ground while lifting left leg. Keep back straight, return to standing"
                },
                rest5s,
                {
                    "name": "Left Leg RDL",
                    "duration": 50,
                    "benefits": "Develops single-leg balance, strengthens hamstrings and glutes, improves hip hinge pattern",
                    "execution_notes": "Stand on left leg, right leg extended behind. Hinge at hips, reach toward ground while lifting right leg. Keep back straight, return to standing"
                },
                rest15s,
                {
                    "name": "Weighted Lunge and Rotate",
                    "duration": 60,
                    "benefits": "Combines leg strength with core rotation, improves functional movement patterns and stability",
                    "execution_notes": "Hold weight at chest, lunge forward. At bottom of lunge, rotate torso toward front leg. Return to center, then standing. Alternate legs"
                },
                rest15s,
                {
                    "name": "Depth Jump",
                    "duration": 45,
                    "benefits": "Develops explosive power, improves landing mechanics and eccentric strength",
                    "execution_notes": "Step off elevated surface (6-12 inches), land softly on both feet. Immediately jump up as high as possible. Focus on soft landings"
                },
                rest15s,
                {
                    "name": "Plyometric Lunges",
                    "duration": 60,
                    "benefits": "Builds explosive leg power, improves dynamic balance and coordination",
                    "execution_notes": "Start in lunge position, explosively jump up and switch legs mid-air. Land softly in opposite lunge. Maintain control throughout"
                }
            ],
            "sets": 1,
            "start_delay": 10,
            "end_delay": 5
        }
    ]
};
