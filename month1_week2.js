const month1_week2_workouts = {
    sunday: {
        title: "UPPER BODY",
        warmup: [
            "AMRAP 3 mins:",
            "• 3 plank pushups",
            "• 3 half burpees",
            "• 3 squats"
        ],
        mainWorkout: [
            "Rest: 90 sec between complexes, 60 sec between rounds",
            "1. First Complex (4 rounds):",
            "• 10 wide pull up",
            "• 12 diamond push ups",
            "• 10 ring/TRX row",
            "• 12 straight bar dips",
            "2. Second Complex (4 rounds):",
            "• 8 chin ups",
            "• 15 push ups",
            "• 12 face pull",
            "• 15 Dips",
            "3. TRX Finisher (4 rounds):",
            "• 10 TRX T row",
            "• 10 TRX Y row",
            "• 10 TRX bi curl",
            "• 10 TRX face pull"
        ]
    },
    monday: {
        title: "LOWER BODY",
        warmup: [
            "Dynamic stretching",
            "15 reps each:",
            "• Hip circle",
            "• Bird dog",
            "• Hip bridge"
        ],
        mainWorkout: [
            "1. Strength Block (4 rounds 15,12,10,10 reps):",
            "• Hack squat machine",
            "• Romanian deadlift",
            "2. Second Block (4 rounds of 10):",
            "• Zercher squat/heel elevated front squats",
            "• Hip thrusters",
            "3. Accessory Work (4 rounds of 12):",
            "• Adductor machine",
            "• Achilles raises",
            "4. Finisher (4 rounds):",
            "• Bulgarian split squat 10 each leg",
            "• Hamstring curl machine (single leg)"
        ]
    },
    tuesday: {
        title: "CORE",
        warmup: [
            "3 rounds:",
            "• 15 situp",
            "• 15 hollow rocks",
            "• 40 sec weighted low plank with 10kg plate",
            "• 10 hanging knee raises"
        ],
        mainWorkout: [
            "1. First Circuit (3 rounds):",
            "• 15 side plank dip Right",
            "• 15 side plank dip Left",
            "• 15 KB Russian twists (10-12kg)",
            "2. Second Circuit (3 rounds):",
            "• 20 toe touches",
            "• 15 flutter kicks",
            "• 10 wipers",
            "3. Back Extension Circuit (3 rounds):",
            "• 10 back extensions with 10kg",
            "• 10 side crunches 10kg left",
            "• 10 side crunches right 10kg",
            "Finisher (3 rounds):",
            "• 10 cable rotations",
            "• 10 anti-rotation press each side"
        ]
    },
    wednesday: {
        title: "FULL BODY",
        warmup: [
            "3 mins jump rope"
        ],
        mainWorkout: [
            "1. 8x8 Barbell Complex (4 rounds) - 30-35kg:",
            "• 8 rollout",
            "• 8 pushups on bar",
            "• 8 deadlift",
            "• 8 rows",
            "• 8 hang clean",
            "• 8 push press",
            "• 8 squats",
            "• 8 front lunges",
            "2. For Time:",
            "• 150 wall ball (9-10kg)",
            "• 150 KB swings (20-24kg)",
            "(Alternate between exercises when fatigued)",
            "3. Finisher AMRAP 12 mins:",
            "• 10 slam ball (35 lbs)",
            "• 15 wall ball (20 lbs)",
            "• 20 side kick through"
        ]
    }
};

function loadMonth1Week2Workouts() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday'];
    
    days.forEach(day => {
        const workoutDetails = document.getElementById(`details-${day}`);
        if (workoutDetails && month1_week2_workouts[day]) {
            let html = `<h4>${month1_week2_workouts[day].title}</h4>`;
            
            html += '<div class="workout-section"><h5>Warmup:</h5><ul>';
            month1_week2_workouts[day].warmup.forEach(exercise => {
                html += `<li>${exercise}</li>`;
            });
            html += '</ul></div>';

            html += '<div class="workout-section"><h5>Main Workout:</h5><ul>';
            month1_week2_workouts[day].mainWorkout.forEach(exercise => {
                html += `<li>${exercise}</li>`;
            });
            html += '</ul></div>';

            workoutDetails.innerHTML = html;
        }
    });
}