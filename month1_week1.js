const month1_week1_workouts = {
    sunday: {
        title: "UPPER BODY",
        meta: "Rest 90 sec between complexes, 60 sec between rounds",
        warmup: [
            "3 mins jump rope",
            {
                complex: true,
                title: "3 rounds",
                exercises: [
                    "3 pushups",
                    "3 half burpee",
                    "3 squat jumps"
                ]
            }
        ],
        workout: [
            {
                complex: true,
                title: "First Complex (4 rounds)",
                exercises: [
                    "10 Chin ups",
                    "10 Pike push ups"
                ]
            },
            {
                complex: true,
                title: "Second Complex (4 rounds)",
                exercises: [
                    "10 TRX row +10 KG + 4 without weight",
                    "10 ring Push ups +10 kg (or wide push ups + 4 body weight)"
                ]
            },
            {
                complex: true,
                title: "Third Complex (4 rounds)",
                exercises: [
                    "10 Neutral grip pull ups",
                    "12-15 Dips"
                ]
            }
        ]
    },
    monday: {
        title: "LOWER BODY",
        warmup: [
            "Hip circle/bird dog/hip bridge (15 reps each)",
            {
                complex: true,
                title: "2 rounds with 10kg plate",
                exercises: [
                    "10 front squat",
                    "10 reverse lunges"
                ]
            }
        ],
        workout: [
            {
                complex: true,
                title: "Strength Block (4 rounds)",
                exercises: [
                    "Back squat tempo 2-1-2 (40-50kg)",
                    "Barbell romanian deadlift (50-60kg)"
                ]
            },
            {
                complex: true,
                title: "Accessory Work (3 rounds)",
                exercises: [
                    "10 DB split squat Right (8-10 kg DBs)",
                    "10 DB split squat Left",
                    "15 Calf raises machine"
                ]
            }
        ],
        finisher: [
            "10 nordic quads extensions",
            "30-40 sec Barbell wall sit (40kg)"
        ]
    },
    tuesday: {
        title: "CORE",
        warmup: [
            {
                complex: true,
                title: "2 rounds",
                exercises: [
                    "40 crunches",
                    "30 side crunch right",
                    "30 side crunch left",
                    "20 bicycle crunches",
                    "20 tuck situps",
                    "1:30 low plank"
                ]
            }
        ],
        workout: [
            {
                complex: true,
                title: "Circuit 1 (40 sec work/20 sec rest, 4 rounds)",
                exercises: [
                    "Back extensions",
                    "V-ups",
                    "TRX low plank",
                    "Russian twists (8kg KB)",
                    "L-sit",
                    "Leg raises on decline bench",
                    "Roll outs",
                    "Weighted situps with KB",
                    "TRX high plank tuck pikes",
                    "Hollow rocks"
                ]
            }
        ]
    },
    wednesday: {
        title: "FULL BODY",
        warmup: [
            {
                complex: true,
                title: "AMRAP 3 mins",
                exercises: [
                    "3 pushups",
                    "3 half burpee",
                    "3 squat jumps"
                ]
            }
        ],
        workout: [
            {
                complex: true,
                title: "AMRAP 12 mins",
                exercises: [
                    "5 burpees",
                    "8 KB thrusters (12kg x2)",
                    "12 KB swing (20-24kg)"
                ]
            },
            {
                complex: true,
                title: "Complex (4 rounds)",
                exercises: [
                    "8 Man maker DB 12.5kg",
                    "15 KB swings"
                ]
            },
            {
                complex: true,
                title: "Strength Block (4 rounds)",
                exercises: [
                    "10 DL to row with barbell (50kg)",
                    "10 Thrusters barbell (35kg)"
                ]
            }
        ],
        finisher: [
            "For time:",
            "100 KB thrusters (12kg)",
            "100 chest to ground burpees",
            "(Alternate between exercises when fatigued)"
        ]
    }
};

function loadMonth1Week1Workouts() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday'];
    
    days.forEach(day => {
        const workoutDetails = document.getElementById(`details-${day}`);
        if (workoutDetails && month1_week1_workouts[day]) {
            workoutDetails.innerHTML = '';
            workoutDetails.appendChild(formatWorkout(month1_week1_workouts[day]));
        }
    });
}
