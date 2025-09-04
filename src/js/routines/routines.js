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
import legStrength from './leg_strength.js';

// Development
import test from './test.js';

// Group definitions
const quickWorkouts = [
  { ...snackWeights, group: 'Quick Workouts' },
  { ...snackBodyweight, group: 'Quick Workouts' }
];

const progressivePrograms = [
  { ...w1s1, group: 'Progressive Programs', week: 1, session: 1 },
  { ...w1s2, group: 'Progressive Programs', week: 1, session: 2 },
  { ...w1s3, group: 'Progressive Programs', week: 1, session: 3 },
  { ...w2s1, group: 'Progressive Programs', week: 2, session: 1 },
  { ...w2s2, group: 'Progressive Programs', week: 2, session: 2 },
  { ...w2s3, group: 'Progressive Programs', week: 2, session: 3 },
  { ...w3s1, group: 'Progressive Programs', week: 3, session: 1 },
  { ...w3s2, group: 'Progressive Programs', week: 3, session: 2 },
  { ...w3s3, group: 'Progressive Programs', week: 3, session: 3 }
];

const bodyWeightRoutines = [
  { ...bodyWeight, group: 'Body Weight Routines' }
];

const rehabAndStrength = [
  { ...kneeRehab, group: 'Rehabilitation & Strength' },
  { ...legStrength, group: 'Rehabilitation & Strength' }
];

const development = [
  { ...test, group: 'Development' }
];

// Export all routines with their group information
export default [
  ...quickWorkouts,
  ...progressivePrograms,
  ...bodyWeightRoutines,
  ...rehabAndStrength,
  ...development
];
