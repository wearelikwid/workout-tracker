const month1_week4_workouts = {
    sunday: {
        title: "UPPER BODY",
        warmup: [
            "• 5 pushups",
            "• 5 inverted rows",
            "• 5 arm circles each direction"
        ],
        mainWorkout: [
            "1. Pull/Push Complex (5 rounds):",
            "• 10 Wide Pull ups",
            "• 15 Ring Push ups (or +15kg weighted pushups)",
            "• 10 TRX row +15 KG",
            "• 15 Dips +10kg (or max bodyweight)",
            "2. Strength Complex (4 rounds):",
            "• 10 Incline Dumbbell chest press",
            "• 10 Rev grip bar row",
            "• 10 DB Shoulder press",
            "• 10 Alt bl hammer curl",
            "3. Volume Finisher (3 rounds):",
            "• Max rep chin ups",
            "• 15 Diamond pushups",
            "• 12 Trx row",
            "• 15 Rx grip pushups"
        ]
    },
    monday: {
        title: "LOWER BODY",
        warmup: [
            "• 15 bodyweight squats",
            "• 10 walking lunges each leg",
            "• 20 glute bridges"
        ],
        mainWorkout: [
            "1. Power Complex (5 rounds):",
            "• 8 Power clean (60% 1RM)",
            "• 10 Front squat",
            "• 12 Romanian deadlift",
            "• 10 Reverse lunges each leg",
            "2. Strength Block (4 rounds):",
            "• 8-10 Back squat (75-80% 1RM)",
            "• 12 Bulgarian split squats each leg",
            "• 15 Calf raises with weight",
            "3. Metabolic Finisher:",
            "For time:",
            "• 50 wall balls",
            "• 40 KB swings",
            "• 30 thrusters",
            "• 20 box jumps"
        ]
    },
    tuesday: {
        title: "CORE",
        warmup: [
            "• 30 sec hollow hold",
            "• 30 sec arch hold",
            "• 30 sec side plank each side",
            "• 1 min plank"
        ],
        mainWorkout: [
            "1. Strength Circuit (4 rounds):",
            "• 15 Weighted situps on GHD machine",
            "• 15 Back extensions +10kg plate",
            "• 15 Tuck pike situps",
            "• 40 sec Low plank weighted +15kg",
            "2. Dynamic Circuit (4 rounds):",
            "• 20 Russian twists (10kg KB)",
            "• 15 V-ups",
            "• 15 TRX pike to knee tuck",
            "• 10 Hanging leg raises",
            "3. Stability Circuit (3 rounds):",
            "• 45 sec Side plank with leg raise R",
            "• 45 sec Side plank with leg raise L",
            "• 30 sec L-sit progression",
            "• 15 Roll-outs with bar",
            "• 20 Windshield wipers"
        ]
    },
    wednesday: {
        title: "FULL BODY",
        warmup: [
            "• 30 sec jump rope",
            "• 15 sec mountain climbers",
            "• 15 sec burpees"
        ],
        mainWorkout: [
            "1. AMRAP 15 mins:",
            "• 16 ALT db snatch (15kg)",
            "• 16 wall ball (20 lbs)",
            "• 12 burpee pull-ups",
            "• 20 KB swings (24kg)",
            "2. Strength Complex (5 rounds):",
            "• 8 Man maker DB 15kg",
            "• 10 DL to row (50kg)",
            "• 8 Thrusters (40kg)",
            "• 12 DB racked walking lunges",
            "3. Final AMRAP 12 mins:",
            "• 10 slam ball (35 lbs)",
            "• 15 wall ball (20 lbs)",
            "• 20 side kick through",
            "• 10 DB clean and press",
            "Finisher:",
            "3 rounds for time:",
            "• 15 burpee over DB",
            "• 15 KB snatch each arm",
            "• 15 wall balls"
        ]
    }
};

function loadMonth1Week4Workouts() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday'];
    
    days.forEach(day => {
        const workoutDetails = document.getElementById(`details-${day}`);
        if (workoutDetails && month1_week4_workouts[day]) {
            let html = `<h4>${month1_week4_workouts[day].title}</h4>`;
            
            html += '<div class="workout-section"><h5>Warmup:</h5><ul>';
            month1_week4_workouts[day].warmup.forEach(exercise => {
                html += `<li>${exercise}</li>`;
            });
            html += '</ul></div>';

            html += '<div class="workout-section"><h5>Main Workout:</h5><ul>';
            month1_week4_workouts[day].mainWorkout.forEach(exercise => {
                html += `<li>${exercise}</li>`;
            });
            html += '</ul></div>';

            workoutDetails.innerHTML = html;
        }
    });
}