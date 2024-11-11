const month1_week1_workouts = {
    sunday: {
        title: "UPPER BODY",
        warmup: [
            "3 mins jump rope",
            "3 rounds: 3 pushups, 3 half burpee, 3 squat jumps"
        ],
        mainWorkout: [
            "4 rounds each: 90 sec between complexes, 60 sec between rounds",
            "1. First Complex:",
            "• 10 Chin ups",
            "• 10 Pike push ups",
            "2. Second Complex:",
            "• 10 TRX row +10 KG + 4 without weight",
            "• 10 ring Push ups +10 kg (or wide push ups + 4 body weight)",
            "3. Third Complex:",
            "• 10 Neutral grip pull ups",
            "• 12-15 Dips"
        ]
    },
    monday: {
        title: "LOWER BODY",
        warmup: [
            "Hip circle/bird dog/hip bridge (15 reps each)",
            "2 rounds with 10kg plate:",
            "• 10 front squat",
            "• 10 reverse lunges"
        ],
        mainWorkout: [
            "1. Strength Block (4 rounds):",
            "• Back squat tempo 2-1-2 (40-50kg)",
            "• Barbell romanian deadlift (50-60kg)",
            "2. Accessory Work (3 rounds):",
            "• 10 DB split squat Right (8-10 kg DBs)",
            "• 10 DB split squat Left",
            "• 15 Calf raises machine",
            "3. Finisher:",
            "• 10 nordic quads extensions",
            "• 30-40 sec Barbell wall sit (40kg)"
        ]
    },
    tuesday: {
        title: "CORE",
        warmup: [
            "2 rounds:",
            "• 40 crunches",
            "• 30 side crunch right",
            "• 30 side crunch left",
            "• 20 bicycle crunches",
            "• 20 tuck situps",
            "• 1:30 low plank"
        ],
        mainWorkout: [
            "Circuit 1 (40 sec work/20 sec rest, 4 rounds):",
            "• Back extensions",
            "• V-ups",
            "• TRX low plank",
            "• Russian twists (8kg KB)",
            "• L-sit",
            "• Leg raises on decline bench",
            "• Roll outs",
            "• Weighted situps with KB",
            "• TRX high plank tuck pikes",
            "• Hollow rocks"
        ]
    },
    wednesday: {
        title: "FULL BODY",
        warmup: [
            "AMRAP 3 mins:",
            "• 3 pushups",
            "• 3 half burpee",
            "• 3 squat jumps"
        ],
        mainWorkout: [
            "1. AMRAP 12 mins:",
            "• 5 burpees",
            "• 8 KB thrusters (12kg x2)",
            "• 12 KB swing (20-24kg)",
            "2. Complex (4 rounds):",
            "• 8 Man maker DB 12.5kg",
            "• 15 KB swings",
            "3. Strength Block (4 rounds):",
            "• 10 DL to row with barbell (50kg)",
            "• 10 Thrusters barbell (35kg)",
            "Finisher:",
            "For time:",
            "• 100 KB thrusters (12kg)",
            "• 100 chest to ground burpees",
            "(Alternate between exercises when fatigued)"
        ]
    }
};

function loadMonth1Week1Workouts() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday'];
    
    days.forEach(day => {
        const workoutDetails = document.getElementById(`details-${day}`);
        if (workoutDetails && month1_week1_workouts[day]) {
            let html = `<h4>${month1_week1_workouts[day].title}</h4>`;
            
            html += '<div class="workout-section"><h5>Warmup:</h5><ul>';
            month1_week1_workouts[day].warmup.forEach(exercise => {
                html += `<li>${exercise}</li>`;
            });
            html += '</ul></div>';

            html += '<div class="workout-section"><h5>Main Workout:</h5><ul>';
            month1_week1_workouts[day].mainWorkout.forEach(exercise => {
                html += `<li>${exercise}</li>`;
            });
            html += '</ul></div>';

            workoutDetails.innerHTML = html;
        }
    });
}