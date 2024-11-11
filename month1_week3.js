const month1_week3_workouts = {
    sunday: {
        title: "UPPER BODY",
        warmup: [
            "2 rounds:",
            "• 10 scapular pull-ups",
            "• 10 push-up to downward dog",
            "• 10 arm circles each direction"
        ],
        mainWorkout: [
            "Rest: 2 mins between complexes, 90 sec between rounds",
            "1. Strength Complex (4 rounds):",
            "• 10 Neutral pull up",
            "• 12-15 Dips",
            "• 12 row (TRX or barbell 50-60kg)",
            "• 10 weighted pushups (+15kg) then max out bodyweight",
            "2. Shoulder Focus (4 rounds):",
            "• 10 DB front raise",
            "• 10 side raise",
            "• 10 upright row",
            "• 12 cable Facepull",
            "3. Pull-up Complex (3 rounds):",
            "• 10 Wide pullups",
            "• 15 Decline push ups (legs on bench)",
            "• 10 Chin ups",
            "• 10 Pike push ups"
        ]
    },
    monday: {
        title: "LOWER BODY",
        warmup: [
            "3 rounds:",
            "• 10 front squat with plate",
            "• 10 reverse lunges",
            "• 10 hip bridges"
        ],
        mainWorkout: [
            "1. Strength Block (4 rounds):",
            "• Back squat tempo 2-1-2 (increase weight each set)",
            "• Barbell romanian deadlift",
            "• 30-40 sec Barbell wall sit (40 to 60kg)",
            "2. Explosive Block (4 rounds):",
            "• 10 Barbell sumo squat",
            "• 12 Lunge jumps",
            "• 10 nordic squads extensions",
            "3. Finisher (3 rounds):",
            "• 10 Hip thrusters machine or bar",
            "• 12 Hamstring curl machine",
            "• 15 Calf raises machine"
        ]
    },
    tuesday: {
        title: "CORE",
        warmup: [
            "40 sec work/20 sec rest:",
            "• High plank",
            "• Side plank each side",
            "• Hollow body hold",
            "• Superman hold"
        ],
        mainWorkout: [
            "Circuit (40 sec on/20 sec off, 4 rounds each):",
            "1. First Set:",
            "• High plank feet on box +10kg",
            "• DB V-sit shoulder press",
            "• TRX superman plank",
            "2. Second Set:",
            "• Hanging Knee raises with wall ball (3-5kg)",
            "• KB Russian twists",
            "• TRX High plank tuck pike alt knee to elbow",
            "3. Third Set:",
            "• TRX low plank +10kg",
            "• Hollow body hold",
            "• Bicycle crunches",
            "4. Fourth Set:",
            "• Tuck pike situps",
            "• Hollow rocks",
            "• Back extensions"
        ]
    },
    wednesday: {
        title: "FULL BODY",
        warmup: [
            "HIIT Style (30 sec each):",
            "• Jump rope",
            "• Mountain climbers",
            "• High knees",
            "• Jumping jacks"
        ],
        mainWorkout: [
            "Rest: 2 mins between main sections",
            "2 mins jump rope between HIIT rounds",
            "1. HIIT Circuit (4 rounds, 40 sec on/20 sec off):",
            "• Wall balls",
            "• KB swings",
            "• Burpee pull ups",
            "• KB squat clean",
            "• Slam ball",
            "• DB double snatch",
            "• Row machine",
            "• Side kick through",
            "2. Strength Complex (4 rounds):",
            "• 10 Barbell row to DL",
            "• 10 Barbell hang clean",
            "• 10 Barbell push press",
            "(Use 35-40kg barbell)",
            "3. Conditioning/Finisher:",
            "AMRAP 12 mins:",
            "3...6...9...12 reps of:",
            "• Double DB clean & jerk (12.5kg or 10kg DBs)",
            "• Burpee over DB"
        ]
    }
};

function loadMonth1Week3Workouts() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday'];
    
    days.forEach(day => {
        const workoutDetails = document.getElementById(`details-${day}`);
        if (workoutDetails && month1_week3_workouts[day]) {
            let html = `<h4>${month1_week3_workouts[day].title}</h4>`;
            
            html += '<div class="workout-section"><h5>Warmup:</h5><ul>';
            month1_week3_workouts[day].warmup.forEach(exercise => {
                html += `<li>${exercise}</li>`;
            });
            html += '</ul></div>';

            html += '<div class="workout-section"><h5>Main Workout:</h5><ul>';
            month1_week3_workouts[day].mainWorkout.forEach(exercise => {
                html += `<li>${exercise}</li>`;
            });
            html += '</ul></div>';

            workoutDetails.innerHTML = html;
        }
    });
}