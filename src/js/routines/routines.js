// Quick Workouts
import snackWeights from './snack_weights.js';
import snackBodyweight from './snack_bodyweight.js';

// Progressive Programs
import w1s1 from './week_1_session_1.js';
import w1s2 from './week_1_session_2.js';
import w1s3 from './week_1_session_3.js';
import w2s1 from './week_2_session_1.js';
import w2s2 from './week_2_session_2.js';
import w2s3 from './week_2_session_3.js';
import w3s1 from './week_3_session_1.js';
import w3s2 from './week_3_session_2.js';
import w3s3 from './week_3_session_3.js';

// Body Weight Routines
import bodyWeight from './body_weight_1.js';

// Rehabilitation & Strength
import kneeRehab from './knee_rehab.js';
import kneeStability from './knee_stability.js';
import legStrength from './leg_strength.js';
import advancedLegStrength from './advanced_leg_strength.js';
import hipMobility from './hip_mobility.js';

// Development
import test from './test.js';
import splitTest from './split_test.js';

// Group definitions
// Define groups, their preferred order and the routines that belong to each.
// Routines may appear in multiple groups.
export default [
  {
    name: 'Common Routines',
    // lower order means appear earlier on the UI
    routines: [
      // Common set (explicit allocation)
      kneeRehab,
      kneeStability,
      hipMobility,
      legStrength,
      w1s1,
      advancedLegStrength,
    ]
  },
  {
    name: 'Quick Workouts',
    routines: [
      snackWeights,
      snackBodyweight
    ]
  },
  {
    name: 'Body Weight Routines',
    routines: [
      bodyWeight
    ]
  },
  {
    name: 'Progressive Programs',
    routines: [
      w1s1,
      w1s2,
      w1s3,
      w2s1,
      w2s2,
      w2s3,
      w3s1,
      w3s2,
      w3s3
    ]
  },
  {
    name: 'Rehabilitation & Strength',
    routines: [
      kneeRehab,
      kneeStability,
      legStrength,
      advancedLegStrength,
      hipMobility
    ]
  },
  {
    name: 'Development',
    routines: [
      test,
      splitTest
    ]
  }
];

