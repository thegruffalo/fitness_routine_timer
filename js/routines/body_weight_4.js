myNS.routines.push(new Routine("Body Weight 4", [
        myNS.sub_routines.basic_s_and_c.warmup,
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
        myNS.sub_routines.basic_s_and_c.cooldown
    ]));