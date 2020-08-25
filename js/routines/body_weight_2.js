import {Exercise,Rest, Routine, SubRoutine} from './models.js';
import basic_s_and_c from './basic_s_and_c.js'; 


const routine = new Routine("Body Weight 2", [
        basic_s_and_c.warmup,
        new SubRoutine("Workout", [
            new Exercise("Jumping Jacks", 40),
            new Rest(20),
            new Exercise("Burpees", 40),
            new Rest(20),
            new Exercise("Wall sit", 40),
            new Rest(20),
            new Exercise("Walkouts", 40),
            new Rest(20),
            new Exercise("Crunches", 40),
            new Rest(20),
            new Exercise("Hip abductors R", 40),
            new Exercise("Hip abductors L", 40),
        ], 4, 60),
        basic_s_and_c.cooldown
    ]);
export default routine;
