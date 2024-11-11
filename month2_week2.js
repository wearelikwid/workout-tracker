const month2_week2_workouts = {
    sunday: {
        title: "UPPER BODY",
        warmup: [
            "• 5 wall slides",
            "• 5 band dislocates",
            "• 5 scap pull-ups",
            "• 5 push-up to downward dog"
        ],
        mainWorkout: [
            "1. Strength Ladder (5 rounds):",
            "Down ladder 10-8-6-4-2:",
            "• Weighted pull-ups (+15kg)",
            "• Weighted dips (+20kg)",
            "Up ladder 2-4-6-8-10:",
            "• Ring rows",
            "• Ring push-ups",
            "2. Volume Block (4 rounds):",
            "• 12 DB bench press",
            "• 12 Bent over rows",
            "• 10 Z-press",
            "• 15 Band pull-aparts",
            "Rest 90 sec between rounds",
            "3. Time Under Tension (3 rounds):",
            "• 8 Tempo pull-ups (3-1-3)",
            "• 10 Tempo push-ups (3-1-3)",
            "• 12 Face pulls",
            "• 10 Reverse flyes",
            "Rest 2 mins between rounds",
            "Finisher:",
            "100 rep challenge:",
            "• 25 push-ups",
            "• 25 dips",
            "• 25 inverted rows",
            "• 25 band pull-aparts",
            "(Break into sets as needed)"
        ]
    },
    monday: {
        title: "LOWER BODY",
        warmup: [
            "3 rounds:",
            "• 20 air squats",
            "• 15 lateral band walks/side",
            "• 10 single-leg bridges/side"
        ],
        mainWorkout: [
            "1. Power Development (6 sets):",
            "• 3 Hang clean + 2 front squat",
            "• Rest 2 mins between sets",
            "2. Strength Complex (4 rounds):",
            "• 6 Back squat (80% 1RM)",
            "• 8 RDL (80% 1RM)",
            "• 10 Split squats each leg",
            "Rest 2 mins between rounds",
            "3. Hypertrophy (3 rounds):",
            "• 15 Belt squat or hack squat",
            "• 12 Nordic hamstring curls",
            "• 20 Standing calf raises",
            "• 15 Abductor/adductor superset",
            "Rest 90 sec between rounds",
            "Finisher:",
            "5 mins AMRAP:",
            "• 10 box jumps",
            "• 15 goblet squats",
            "• 20 alternating lunges"
        ]
    },
    tuesday: {
        title: "CORE",
        warmup: [
            "3 rounds:",
            "• 30 sec dead bug",
            "• 30 sec bird dog",
            "• 30 sec quadruped rock",
            "• 30 sec cat-cow"
        ],
        mainWorkout: [
            "1. Anti-Extension (4 rounds):",
            "• 12 Ab wheel from standing",
            "• 15 Swiss ball jackknife",
            "• 20 sec L-sit hold",
            "• 15 Strict toes to bar",
            "Rest 90 sec between rounds",
            "2. Rotational Power (4 rounds):",
            "• 10 Med ball rotational throws/side",
            "• 12 Cable chops high-to-low/side",
            "• 15 Russian twists with plate",
            "• 20 Mountain climbers with rotation",
            "Rest 60 sec between rounds",
            "3. Isometric Challenge:",
            "Every 2 mins x 5 rounds:",
            "• 45 sec weighted plank",
            "• 30 sec hollow hold",
            "• 45 sec side plank/side"
        ]
    },
    wednesday: {
        title: "FULL BODY",
        warmup: [
            "For 5 mins:",
            "• 30 sec jump rope",
            "• 20 sec high knees",
            "• 10 sec burpees"
        ],
        mainWorkout: [
            "1. Strength Complex (5 sets):",
            "• 3 Clean pulls",
            "• 2 Hang cleans",
            "• 1 Clean and jerk",
            "• Rest 2 mins between sets",
            "2. AMRAP 15 mins:",
            "• 5 DB snatch each arm (20kg)",
            "• 10 Devil press",
            "• 15 Box jump overs",
            "• 20 Alt DB rows",
            "3. Chipper for time:",
            "• 50 wall balls",
            "• 40 American KB swings",
            "• 30 cal row",
            "• 20 burpee box jump-overs",
            "• 10 man makers",
            "Finisher:",
            "Every min for 8 mins:",
            "• 5 thrusters",
            "• 7 pull-ups",
            "• Max cal bike in remaining time"
        ]
    }
};

function loadMonth2Week2Workouts() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday'];
    
    days.forEach(day => {
        const workoutDetails = document.getElementById(`details-${day}`);
        if (workoutDetails && month2_week2_workouts[day]) {
            let html = `<h4>${month2_week2_workouts[day].title}</h4>`;
            
            html += '<div class="workout-section"><h5>Warmup:</h5><ul>';
            month2_week2_workouts[day].warmup.forEach(exercise => {
                html += `<li>${exercise}</li>`;
            });
            html += '</ul></div>';

            html += '<div class="workout-section"><h5>Main Workout:</h5><ul>';
            month2_week2_workouts[day].mainWorkout.forEach(exercise => {
                html += `<li>${exercise}</li>`;
            });
            html += '</ul></div>';

            workoutDetails.innerHTML = html;
        }
    });
}