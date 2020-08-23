const warmup = [
    new Exercise("Jog", 20),
    new Exercise("Push ups", 20),
    new Exercise("Jog", 20),
    new Exercise("Slow Squats", 20),
    new Exercise("Jumping Jacks", 20),
    new Exercise("Lunge & stretch", 20),
    new Exercise("Jog", 20),
    new Exercise("Slow burpees", 20),
    new Exercise("Shoulder Roll", 20),
    new Exercise("Core rotation", 20)
];

const cooldown = [
    "Quad R",
    "Quad L",
    "Hamstring R",
    "Hamstring L",
    "Calf R",
    "Calf L",
    "Chest",
    "Back",
    "Bicep R",
    "Bicep L",
    "Tricep R",
    "Tricep L"
].map(x => new Exercise(x, 20));

extend(myNS, {
    "sub_routines": {
        "basic_s_and_c": {
            "warmup": new SubRoutine("Warmup",warmup),
            "cooldown": new SubRoutine("Cooldown",cooldown)
        }
    }
});