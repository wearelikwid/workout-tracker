const month2_week1_workouts = {
    sunday: {
        title: "UPPER BODY",
        warmup: [
            "EMOM 6 mins:",
            "• Odd min: 5 scapular pull-ups + 5 push-ups",
            "• Even min: 10 band pull-aparts + 10 arm circles"
        ],
        mainWorkout: [
            "1. Strength Block (5 rounds):",
            "• 5 Weighted pull-ups (+10kg)",
            "• 10 Close grip bench press",
            "• 8 Weighted dips (+15kg)",
            "• 12 Pendlay rows",
            "2. Volume Block (4 rounds):",
            "• 12 Incline DB press",
            "• 12 Single arm DB row",
            "• 12 Military press",
            "• 12 Face pulls",
            "3. Mechanical Drop Set (3 rounds):",
            "• Pull-ups to failure",
            "• Immediately into band-assisted pull-ups",
            "• Immediately into negative pull-ups",
            "• Rest 2 mins between rounds",
            "Finisher:",
            "100 reps each:",
            "• Band pull-aparts",
            "• Push-ups (break into sets as needed)"
        ]
    },
    monday: {
        title: "LOWER BODY",
        warmup: [
            "3 rounds:",
            "• 20 banded hip bridges",
            "• 15 knee banded walks each direction",
            "• 10 squat mobility reps"
        ],
        mainWorkout: [
            "1. Power Development (5x5):",
            "• Power clean",
            "• Box jumps",
            "• Rest 2 mins between sets",
            "2. Strength Complex (4 rounds):",
            "• 8 Front squat (70% 1RM)",
            "• 10 RDL (75% 1RM)",
            "• 12 Walking Lunges each leg",
            "• Rest 90 sec between rounds",
            "3. Hypertrophy Block (3 rounds):",
            "• 15 Leg press",
            "• 12 Lying leg curls",
            "• 20 Weighted calf raises",
            "• 12 Hip thrusts",
            "• Rest 60 sec between rounds",
            "Finisher:",
            "Death by KB swing:",
            "Min 1: 10 swings",
            "Min 2: 20 swings",
            "Continue adding 10 reps each minute until failure"
        ]
    },
    tuesday: {
        title: "CORE",
        warmup: [
            "Tabata (20 sec work/10 sec rest):",
            "• Plank",
            "• Bird dogs",
            "• Dead bugs",
            "• Superman holds"
        ],
        mainWorkout: [
            "1. Anti-Rotation Circuit (4 rounds):",
            "• 12 Pallof press each side",
            "• 10 Cable woodchops each side",
            "• 30 sec Suitcase carry each side",
            "• 10 KB windmills each side",
            "2. Dynamic Core (4 rounds):",
            "• 15 Dragon flags",
            "• 20 Ab wheel rollouts",
            "• 15 Hanging leg raises (strict)",
            "• 30 sec Hollow rocks",
            "3. Endurance Circuit (Time: 12 mins)",
            "Every 2 mins perform:",
            "• 20 Ball slams",
            "• 15 Russian twists",
            "• 10 TRX pikes",
            "• Max plank hold with remaining time"
        ]
    },
    wednesday: {
        title: "FULL BODY",
        warmup: [
            "3 rounds:",
            "• 10 inchworm walk-outs",
            "• 10 spiderman lunges/side",
            "• 10 downward dog to cobra"
        ],
        mainWorkout: [
            "1. EMOM 20 mins:",
            "Min 1: 10 DB snatch (alternate arms)",
            "Min 2: 12 Thrusters",
            "Min 3: 15 KB swings",
            "Min 4: 10 Burpee pull-ups",
            "Min 5: Rest",
            "(4 rounds total)",
            "2. Strength Complex (5 rounds):",
            "• 5 Power cleans",
            "• 7 Front squats",
            "• 9 Push press",
            "(Use 75% of power clean 1RM)",
            "3. Metcon (3 rounds for time):",
            "• 400m run",
            "• 21 KB swings",
            "• 15 Pull-ups",
            "• 9 Man makers",
            "Finisher:",
            "AMRAP 5 mins:",
            "• 5 DB clean and jerk",
            "• 10 Racked reverse lunges",
            "• 15 Mountain climbers"
        ]
    }
};

function loadMonth2Week1Workouts() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday'];
    
    days.forEach(day => {
        const workoutDetails = document.getElementById(`details-${day}`);
        if (workoutDetails && month2_week1_workouts[day]) {
            let html = `<h4>${month2_week1_workouts[day].title}</h4>`;
            
            html += '<div class="workout-section"><h5>Warmup:</h5><ul>';
            month2_week1_workouts[day].warmup.forEach(exercise => {
                html += `<li>${exercise}</li>`;
            });
            html += '</ul></div>';

            html += '<div class="workout-section"><h5>Main Workout:</h5><ul>';
            month2_week1_workouts[day].mainWorkout.forEach(exercise => {
                html += `<li>${exercise}</li>`;
            });
            html += '</ul></div>';

            workoutDetails.innerHTML = html;
        }
    });
}