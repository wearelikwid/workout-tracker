const month3_week4_workouts = {
    sunday: {
        title: "ADVANCED UPPER BODY",
        warmup: [
            "Movement Flow x 2:",
            "• Support hold to skin the cat",
            "• German hang to inverted hang",
            "• Scapular pull-ups to active hangs",
            "• Ring turned out support variations"
        ],
        mainWorkout: [
            "1. Pull Mastery (4 rounds):",
            "• 3-5 One arm pull-up progressions each side",
            "• 8 L-sit muscle-ups (or progression)",
            "• 10 360° pull-ups",
            "• 12 Mixed grip pull-ups",
            "Rest 2-3 mins between rounds",
            "2. Push Excellence (4 rounds):",
            "• 5 Ring Bulgarian push-ups each side",
            "• 8 90° push-ups",
            "• 10 RTO ring push-ups",
            "• 12 Decline pike push-ups",
            "Rest 2-3 mins between rounds",
            "3. Advanced Holds (3 rounds):",
            "• Victorian cross progression 10-15 sec",
            "• Iron cross progression 10-15 sec",
            "• Full planche progression 15-20 sec",
            "Rest 2-3 mins between rounds",
            "Finisher:",
            "Quality practice:",
            "• 5 best muscle-ups",
            "• 5 best HSPU",
            "• 5 best archer pull-ups each side",
            "Focus on perfect form"
        ]
    },
    monday: {
        title: "LOWER BODY MASTERY",
        warmup: [
            "Joint prep flow:",
            "• Hip CARs",
            "• Ankle mobility work",
            "• Deep squat exploration",
            "• Single leg balance work"
        ],
        mainWorkout: [
            "1. Single Leg Mastery (4 rounds):",
            "• 5 Floating pistol squats each leg",
            "• 8 Continuous switch jumps",
            "• 10 Single leg box jumps each leg",
            "• 12 Advanced shrimp squats each leg",
            "Rest 2 mins between rounds",
            "2. Dynamic Power (3 rounds):",
            "• 5 360° jump turns",
            "• 8 Depth jumps to precision landing",
            "• 10 Box jump overs",
            "• 12 Matrix lunges each leg",
            "Rest 2 mins between rounds",
            "3. Flow Integration (4 rounds):",
            "• Handstand to pistol squat transition",
            "• Cartwheel to single leg landing",
            "• Tic-toc (capoeira movement) practice",
            "Rest as needed for quality"
        ]
    },
    tuesday: {
        title: "SKILL PERFECTION",
        warmup: [
            "Handstand prep:",
            "• Chest to wall holds",
            "• Back to wall balancing",
            "• Pirouette practice",
            "• Press to handstand drills"
        ],
        mainWorkout: [
            "1. Handstand Flow (5 rounds):",
            "• Press handstand 3-5 reps",
            "• One arm handstand progression 10 sec each",
            "• Handstand walking 10 steps",
            "• HSPU negatives x 5",
            "Rest 2-3 mins between rounds",
            "2. Lever Work (4 rounds):",
            "• Front lever pulls x 5",
            "• Back lever pulls x 5",
            "• Straddle planche rocks x 5",
            "• Full lever holds (best position) 15 sec",
            "Rest 2-3 mins between rounds",
            "3. Complex Transitions (3 rounds):",
            "• Muscle-up to handstand x 2",
            "• Front lever to back lever x 2",
            "• L-sit to planche x 2",
            "Rest as needed for quality"
        ]
    },
    wednesday: {
        title: "ADVANCED FULL BODY INTEGRATION",
        warmup: [
            "Dynamic preparation:",
            "• Mobility flow sequence",
            "• Handstand activation drills",
            "• Ring support variations",
            "• Movement pattern practice"
        ],
        mainWorkout: [
            "1. Strength Integration (4 rounds):",
            "• 3 Muscle-up to handstand press",
            "• 5 One arm pull-up negatives each side",
            "• 8 Ring HSPU progression",
            "• 10 Planche lean push-ups",
            "Rest 2-3 mins between rounds",
            "2. Dynamic Power (3 rounds):",
            "• 5 Explosive muscle-ups",
            "• 8 Clapping HSPU",
            "• 10 Plyometric ring push-ups",
            "• 12 Archer ring rows each side",
            "Rest 2-3 mins between rounds",
            "3. Skill Mastery (4 rounds):",
            "• Back lever to inverted hang x 3",
            "• Straddle planche rocks to tuck planche x 3",
            "• Full front lever raises x 3",
            "• 20 sec free handstand practice",
            "Rest 2-3 mins between rounds",
            "Finisher:",
            "For quality:",
            "• 3 rounds of your weakest skill",
            "• Focus on perfect execution",
            "• Rest as needed between attempts"
        ]
    }
};

function loadMonth3Week4Workouts() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday'];
    
    days.forEach(day => {
        const workoutDetails = document.getElementById(`details-${day}`);
        if (workoutDetails && month3_week4_workouts[day]) {
            let html = `<h4>${month3_week4_workouts[day].title}</h4>`;
            
            html += '<div class="workout-section"><h5>Warmup:</h5><ul>';
            month3_week4_workouts[day].warmup.forEach(exercise => {
                html += `<li>${exercise}</li>`;
            });
            html += '</ul></div>';

            html += '<div class="workout-section"><h5>Main Workout:</h5><ul>';
            month3_week4_workouts[day].mainWorkout.forEach(exercise => {
                html += `<li>${exercise}</li>`;
            });
            html += '</ul></div>';

            workoutDetails.innerHTML = html;
        }
    });
}